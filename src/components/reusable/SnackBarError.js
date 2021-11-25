// import { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import snackbarAtom from '../state/snackbar';

const SnackBarError = () => {
  const snackbar = useRecoilValue(snackbarAtom);
  const horizontal = 'center';
  const vertical = 'top';
  const resetSnackbar = useResetRecoilState(snackbarAtom);

  const handleClose = () => {
    resetSnackbar();
  };

  return (
    <>
      <Snackbar
        open={snackbar.show}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        sx={{ boxShadow: 3, borderRadius: '4px' }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          { snackbar.text }
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBarError;
