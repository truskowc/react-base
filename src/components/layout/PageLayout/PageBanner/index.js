import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageBannerBox = styled(Box)(({ theme }) => ({
  background: theme.palette.page.banner,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const PBBStyles = {
  px: { xs: 3, sm: 4 },
  pr: { xs: 2, sm: 3, lg: 3 },
  py: { xs: 2, sm: 3 },
};

const PageBanner = ({ children, title, ...rest }) => (
  <PageBannerBox {...rest} sx={PBBStyles}>
    <Typography variant="h3" color="primary.main">{title}</Typography>
    <Box display="flex">
      {children}
    </Box>
  </PageBannerBox>
);

PageBanner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageBanner;
