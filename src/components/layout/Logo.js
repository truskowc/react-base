import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const Logo = ({ logoColor, ...rest }) => {
  const theme = useTheme();
  const color = logoColor || theme.palette.mode;

  return (
    <img
      alt="Logo"
      src={`/static/logos/logo_${color}.png`}
      height="40"
      {...rest}
    />
  );
};

Logo.propTypes = {
  logoColor: PropTypes.string
};

export default Logo;
