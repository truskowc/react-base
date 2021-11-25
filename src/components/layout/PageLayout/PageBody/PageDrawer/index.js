import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import {
  Box,
  Paper,
  Hidden,
  Dialog,
  Slide,
} from '@mui/material';

const Transition = forwardRef((props, ref) => (<Slide direction="up" ref={ref} {...props} timeout={500} />));

const PageDrawer = ({
  children,
  open,
  width,
  ...rest
}) => {
  const w = width || '300px';
  return (
    <>
      <Hidden lgDown>
        <Box
          sx={{
            transition: 'width 500ms, flex-grow 500ms',
            width: open ? w : '0px'
          }}
        >
          <Paper
            sx={{
              borderRadius: 0,
              boxShadow: 10,
              width: w,
              height: '100%',
            }}
            {...rest}
          >
            {children}
          </Paper>
        </Box>
      </Hidden>
      <Hidden lgUp>
        <Dialog
          fullScreen
          open={open}
          TransitionComponent={Transition}
        >
          {children}
        </Dialog>
      </Hidden>
    </>
  );
};

PageDrawer.propTypes = {
  open: PropTypes.bool,
  width: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageDrawer;
