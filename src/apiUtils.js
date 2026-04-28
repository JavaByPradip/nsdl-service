import CryptoJS from 'crypto-js';

const S_KEY = "a6T8tOCYiSzDTrcqPvCbJfy0wSQOVcfaevH0gtwCtoU=";

// Helper to encrypt payload
export const encryptPayload = (data) => {
  const key = CryptoJS.enc.Base64.parse(S_KEY);
  const iv = CryptoJS.lib.WordArray.random(16);
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, { iv: iv });
  return {
    RequestData: encrypted.toString()
  };
};

// Helper to decrypt response
export const decryptResponse = (encryptedStr) => {
  const key = CryptoJS.enc.Base64.parse(S_KEY);
  const decrypted = CryptoJS.AES.decrypt(encryptedStr, key);
  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
};