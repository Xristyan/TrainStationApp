export function isLogged() {
  return localStorage.getItem('jwtToken') ? true : false;
}
