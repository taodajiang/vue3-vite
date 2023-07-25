import JSEncrypt from 'jsencrypt'
import CryptoJS from 'crypto-js'
const rsaPublicKey = ''                       // RSA公钥
const aesSecretKey = ''                       // AES密钥
/**
 * RSA方式加密
 * @param {object|string} data   要加密的数据内容
 * @param {string} key           加密密钥(可选-默认rsaPublicKey)
 * @returns
*/
export function rsaEncrypt(data, key) {
  if (typeof data === 'object') {
    try {
      data = JSON.stringify(data)
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }
  key = key || rsaPublicKey
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(key)                   // 设置公钥
  return encryptor.encrypt(data)                // 对数据进行加密
}

/**
 * RSA方式解密
 * @param {string} data   要解密的数据
 * @param {string} key    解密密钥(必填)
*/
export function rsaDecrypt(data, key) {
  if (!key) return
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(key)                 // 设置私钥
  let result = null
  let decryptedStr = encryptor.decrypt(data)
  try {
    result = JSON.parse(decryptedStr)
  } catch (error) {
    result = decryptedStr
  }
  return result
}

/**
 * AES方式加密
 * @param {object|string} data   要加密的数据内容
 * @param {string} key           加密密钥
 * @returns
*/
export function aesEncrypt(data, key) {
  if (typeof data === 'object') {
    try {
      data = JSON.stringify(data)
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }
  key = key || aesSecretKey
  let keyHex = CryptoJS.enc.Utf8.parse(key)
  let dataHex = CryptoJS.enc.Utf8.parse(data)
  let encrypted = CryptoJS.AES.encrypt(dataHex, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(key),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString()
}

/**
 * AES方式解密
 * @param {string} data   要解密的数据
 * @param {string} key    解密密钥
*/
export function aesDecrypt(data, key) {
  key = key || aesSecretKey
  let encryptedHexStr = CryptoJS.enc.Hex.parse(data)
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  let keyHex = CryptoJS.enc.Utf8.parse(key)
  let decrypt = CryptoJS.AES.decrypt(srcs, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(key),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  let result = null
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8).toString()
  try {
    result = JSON.parse(decryptedStr)
  } catch (error) {
    result = decryptedStr
  }
  return result
}