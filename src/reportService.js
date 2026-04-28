import { encryptPayload, decryptResponse } from './apiUtils';

const REPORT_BASE = "https://services-v2.iserveu.online/nsdlab/report";
const CAMUNDA_BASE = "https://apidev-sdk.iserveu.online/NSDLAB/camunda";

// 1. Direct Report API (DMT, AEPS, etc.)
export const getDirectReport = async (reportType, startDate, endDate, userName) => {
  const payload = {
    "Start Date": startDate, // format DD/MM/YYYY
    "End Date": endDate,
    "User Name": userName
  };

  const response = await fetch(`${REPORT_BASE}/${reportType}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return response.json();
};

// 2. Start Camunda Report Process
export const startReportProcess = async (reportName, startDate, endDate) => {
  const payload = {
    applicationSource: "web",
    bpmnId: "NSDL_Report_Query_V1",
    processVariables: {
      reportQueryRequest: {
        start_date: startDate,
        end_date: endDate,
        user_name: "",
        report_name: reportName
      }
    }
  };

  const response = await fetch(`${CAMUNDA_BASE}/startProcessInstance`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(encryptPayload(payload))
  });
  
  const data = await response.json();
  return decryptResponse(data.RequestData);
};

// 3. Search for Process Instances (Check Status)
export const searchProcessInstances = async () => {
  const payload = {
    processSearchQuery: {
      filter: {
        processDefinitionId: { "$eq": "NSDL_Report_Query_V1" },
        state: { "$in": ["ACTIVE", "COMPLETED"] }
      },
      sort: [{ field: "startDate", order: "DESC" }],
      page: { limit: 10 }
    },
    fetchVariables: ["reportQueryRequest", "reportStatus", "requestId"]
  };

  const response = await fetch(`${CAMUNDA_BASE}/searchProcessInstances`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(encryptPayload(payload))
  });

  const data = await response.json();
  return decryptResponse(data.RequestData);
};