import { atom } from 'recoil';

const formAtom = atom({
  key: 'form',
  // get initial state from local storage to enable user to stay logged in
  default: {
    data: {}
  }
});

export default formAtom;
