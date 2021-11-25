import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SnackBarError from 'src/components/reusable/SnackBarError';
import App from './App';

ReactDOM.render((
  <RecoilRoot>
    <BrowserRouter>
      <SnackBarError />
      <App />
    </BrowserRouter>
  </RecoilRoot>
), document.getElementById('root'));
