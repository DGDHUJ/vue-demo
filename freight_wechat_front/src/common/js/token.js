/* 
  设置token
 */
/* 
  设置code
 */
export function setCode (code) {
  localStorage.setItem('__code__', code);
}
export function getCode () {
  return localStorage.getItem('__code__') || '';
}
export function removeCode() {
  localStorage.removeItem('__code__');
}

export function setToken (token) {
    localStorage.setItem('__token__', token);
  }
  
  export function getToken () {
    return localStorage.getItem('__token__') || '';
  }
  
  export function removeToken() {
    localStorage.removeItem('__token__');
  }
  export function removeKey(key) {
    localStorage.removeItem(key);
  }

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