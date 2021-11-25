import { atom } from 'recoil';

const snackbarAtom = atom({
  key: 'snackbar',
  // get initial state from local storage to enable user to stay logged in
  default: {
    show: false,
    text: '',
    severity: 'error'
  }
});

export default snackbarAtom;
