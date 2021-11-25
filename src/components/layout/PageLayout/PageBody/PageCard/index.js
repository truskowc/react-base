import PropTypes from 'prop-types';
import {
  Container,
  Card,
} from '@mui/material';

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const defaultContainerStyles = {
  p: {
    xs: 2,
    lg: 4,
  }
};

const PageCard = ({ children, noPadding, ...rest }) => {
  const cs = noPadding ? { px: 0 } : defaultContainerStyles;

  return (
    <Container maxWidth="lg" sx={cs}>
      <Card sx={cardStyles} {...rest}>
        {children}
      </Card>
    </Container>
  );
};

PageCard.propTypes = {
  noPadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageCard;
