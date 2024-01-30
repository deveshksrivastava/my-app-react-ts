import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { FaTimesCircle } from 'react-icons/fa';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

interface DialogProps {
  open: boolean;
  onClose: any;
  children: any;
  eligibleType?: boolean;
}

export default function MSDialog(props: DialogProps) {
  // const [open, setOpen] = React.useState(false);
  const { open, onClose, children, eligibleType } = props;

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
            <FaTimesCircle />   
                  {/* <CloseIcon /> */}
        </IconButton>
        <DialogContent
          sx={{
            mt: 2
          }}
          // dividers
        >
          {children}
        </DialogContent>
        <DialogActions
          sx={{
            bgcolor: '#e3dfdf'
          }}
        >
          <Box
            sx={{
              m: 1
            }}
          >
            {eligibleType ? (
              <>
                <Button
                  sx={{
                    bgcolor: 'transparent',
                    borderRadius: 0,
                    mr: '4rem',
                    color: 'black',
                    textDecoration: 'underline',
                    '&:hover': {
                      bgcolor: 'transparent',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Contact ZAP team
                </Button>
                <Button
                  onClick={onClose}
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    borderColor: '#992b00',
                    color: '#992b00',
                    '&:hover': {
                      borderColor: '#992b00',
                      color: '#992b00'
                    }
                  }}
                >
                  Close
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={onClose}
                  sx={{
                    bgcolor: 'transparent',
                    borderRadius: 0,
                    mr: '4rem',
                    color: 'black',
                    textDecoration: 'underline',
                    '&:hover': {
                      bgcolor: 'transparent',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  close
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#992b00',
                    borderRadius: 0,

                    '&:hover': {
                      bgcolor: '#992b00'
                    }
                  }}
                >
                  Procced
                </Button>
              </>
            )}
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
