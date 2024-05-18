import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Select,Modal,Button } from '@mui/material';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function NotificationTableRow({
  selected,
  notificationId,
  title,  
  date, 
  publisher,
  status,
  handleClick,
  handleModal,
  handleDelete,
  handleProfile,

}) {
  const [open, setOpen] = useState(null);

  
  

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const colors = {
    archived: 'warning',
    scheduled: 'info',
    published: 'success',
    pinned: 'primary',
  
  };
  

  return (
    <>
         
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
           
            <Typography variant="subtitle2" noWrap>
              {title}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>{publisher}</TableCell>
        <TableCell>{date}</TableCell>
        
        
        <TableCell>
        <Label color={colors[status] || 'default'}>{status}</Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleModal}> 
            <Iconify icon="eva:edit-2-fill" />
          </IconButton>
        </TableCell>



        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>         
          
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
         
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

NotificationTableRow.propTypes = {
 
  notificationId: PropTypes.any,
  date: PropTypes.any,
  handleClick: PropTypes.func,
  handleModal: PropTypes.func,
  handleDelete: PropTypes.func,
  handleProfile:PropTypes.func,
  
  title: PropTypes.any,
 
  publisher: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.any,
};
