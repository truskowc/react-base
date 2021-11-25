import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardContent
} from '@mui/material';
import { useSetRecoilState } from 'recoil';
import authAtom from '../components/state/auth';

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authAtom);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'test@test.com',
              password: 'test123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              const uuid = 'akljsdfkj889898adfklasjdfjk';
              const userData = {
                isLoggedIn: uuid,
                meta: 'JWTTOKENDATA',
                user: JSON.stringify('Test User')
              };
              setAuth(userData);
              localStorage.setItem('auth', uuid);
              localStorage.setItem('keys', 'JWTTOKENDATA');
              localStorage.setItem('user', JSON.stringify('Test User'));
              navigate('/app/dashboard');
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <Card>
                <CardContent sx={{ px: 4, py: 3 }}>
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 3 }}>
                      <Typography color="textPrimary" variant="h2">Sign in</Typography>
                    </Box>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Sign in now
                      </Button>
                    </Box>
                  </form>
                </CardContent>
              </Card>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
