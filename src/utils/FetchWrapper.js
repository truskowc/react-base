import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import authAtom from '../components/state/auth';

const FetchWrapper = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const isAuth = useRecoilValue(authAtom);
  const navigate = useNavigate();

  const authHeader = () => {
    // return auth header with basic auth credentials if user is logged in and request is to the api url
    const isLoggedIn = isAuth.isLoggedIn !== null;
    if (isLoggedIn) {
      const b = auth.meta;
      return { Authorization: `Bearer ${b}` };
    }
    return {};
  };

  const handleResponse = (response) => {
    const respCall = response.text().then((text) => {
      const data = text && JSON.parse(text);
      // console.log('response');
      // console.log(response);
      // console.log('json');
      // console.log(data);

      if (!response.ok) {
        if ([401, 403].includes(response.status)) {
          localStorage.clear();
          const userData = {
            isLoggedIn: null,
            meta: null,
            user: null
          };
          setAuth(userData);
          navigate('/login');
        }

        const error = data || response.status;
        return Promise.reject(error);
      }

      return data;
    });

    return respCall;
  };

  const request = (method) => {
    const call = (url, body) => {
      const requestOptions = {
        method,
        headers: authHeader(url)
      };
      requestOptions.headers.Accept = 'application/json';
      requestOptions.headers['Content-Type'] = 'application/json';
      if (body) {
        requestOptions.body = JSON.stringify(body);
      }
      return fetch(url, requestOptions).then(handleResponse);
    };
    return call;
  };

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
  };
};

export default FetchWrapper;
