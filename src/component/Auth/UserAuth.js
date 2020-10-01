const Auth = {
  isLoggedIn: true,
  authenticate() {
    this.isLoggedIn = true;
  },
  signout() {
    this.isLoggedIn = false;
  },
  getAuth() {
    return this.isLoggedIn;
  },
};
export default Auth;
