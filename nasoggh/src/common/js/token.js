/* 
  设置token
 */

export function getKey (key) {
    return localStorage.getItem(key) || '';
}

export function setKey (key,val) {
    localStorage.setItem(key,val);
}

export function setSessionKey (key,val) {
    sessionStorage.setItem(key,val);
}

export function getSessionKey (key,val) {
    sessionStorage.getItem(key);
}