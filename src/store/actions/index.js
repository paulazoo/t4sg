export function setUser(payload) {
  return { type: 'SET_USER', payload };
}

export function setIsMaster(payload) {
  return { type: 'SET_ISMASTER', payload };
}

export function setCurrentlyLoading(payload) {
  return { type: 'SET_CURRENTLYLOADING', payload };
}

export function setMasterData(payload) {
  return { type: 'SET_MASTERDATA', payload };
}

export function userLogout() {
  sessionStorage.setItem('access_token', null);
  return { type: 'USER_LOGOUT' };
}
