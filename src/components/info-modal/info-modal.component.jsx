import './info-modal.styles.css'

import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const FilmDialog = ({ open, onCloseHandler, film, filmStatus, onChangeFilmStatusHandler, onSaveFilmStatusHandler }) => {   
  return (
    <BootstrapDialog
      onClose={onCloseHandler}
      aria-labelledby="customized-dialog-title"
      open={open}
      filmStatus={filmStatus}
    >
      <BootstrapDialogTitle id="customized-dialog-title">
        {film?.Title}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <DialogContentText gutterBottom>
          {film?.Plot}
        </DialogContentText>
        <Typography gutterBottom>
        <span className="content-title">Director:</span> {film?.Director} - <span className="content-title">Genre:</span> {film?.Genre}
        </Typography>
        <Typography gutterBottom>
          <span className="content-title">Actors:</span> {film?.Actors}
        </Typography>
        <Typography gutterBottom>
          <span className="content-title">Released:</span> {film?.Released} - <span className="content-title">Duration:</span> {film?.Runtime}
        </Typography>
        <Typography gutterBottom>
          <span className="content-title">Awards:</span> {film?.Awards}
        </Typography>
      </DialogContent>
      <DialogActions>
      <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: 'fit-content',
          }}
        >
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel htmlFor="film-status">Status</InputLabel>
            <Select
              autoFocus
              value={filmStatus}
              onChange={onChangeFilmStatusHandler}
              label="filmStatus"
              inputProps={{
                name: 'film-status',
                id: 'film-status',
              }}
            >
              <MenuItem value="0">Pending</MenuItem>
              <MenuItem value="1">Seen</MenuItem>
              <MenuItem value="2">Favorite</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button autoFocus onClick={onSaveFilmStatusHandler}>
          Save film
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}


export default FilmDialog;