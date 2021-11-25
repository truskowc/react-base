import { atom } from 'recoil';

const authAtom = atom({
  key: 'auth',
  // get initial state from local storage to enable user to stay logged in
  default: {
    isLoggedIn: localStorage.getItem('auth'),
    meta: localStorage.getItem('keys'),
    user: localStorage.getItem('user')
  }
});

export default authAtom;
