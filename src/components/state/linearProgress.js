import { atom } from 'recoil';

const linearProgressAtom = atom({
  key: 'linearProgress',
  // hiding to start
  default: true
});

export default linearProgressAtom;
