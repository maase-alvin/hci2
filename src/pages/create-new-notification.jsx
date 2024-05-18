import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import {toast ,ToastContainer} from 'react-toastify';
import { useRouter } from 'src/routes/hooks';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import{Button,InputLabel,MenuItem,
    FormControl,    
    
    Select,   
    Container, 
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  Box,
  CircularProgress,
  FormControlLabel,
    TextField} from '@mui/material';
import { Label } from '@mui/icons-material';



// ----------------------------------------------------------------------

export default function CreateNewNotificationPage() {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      publisher: '',
      status: '',
      date: '',
      photo: ''
        
      });
      const router = useRouter();
      const [loading, setLoading] = useState(false);

      const handleSubmit = (event) => {
        // Prevent the default browser behavior
        event.preventDefault();
        setLoading(true);
      
        // Define the endpoint URL
        const url = 'http://13.58.63.17:8080/api/v1/notifications';
      console.log(formData);
        // Make a POST request with axios
        axios.post(url, formData)
          .then(response => {
            
            setLoading(false);
            
          
            toast.success("Notification added successfully", {
              position: "top-right", 
              autoClose: 1000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true, 
              draggable: true, 
              progress: undefined, 
              onClose: () => router.push('/notifications')
            });
                       

            console.log(response.data);
           
          })
          .catch(error => {
            toast.error('Something went wrong');
           
            console.error(error);
            
          });
      };

      
const labelStyle = {
  backgroundColor: '#f8d591', 
  padding: '10px', 
  width: '150px', 
  textAlign: 'right' 
};
      
 const handleChange = (event) => {     
     const { name, value } = event.target;      
     setFormData({
       ...formData, 
       [name]: value 
     });
 };

 const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  setFormData({
    ...formData,
    photo: file,
  });
};

 const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
 
  return (
    <>
    <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
     <Container maxWidth="xl">
     <Breadcrumbs sx={{marginBottom:'50px', marginLeft:'100px', width:'100%'}} aria-label="breadcrumb">
        <StyledBreadcrumb
        
          component="a"
          href="/"
          label="Home"
       
        />
        <StyledBreadcrumb component="a" href="/notifications" label="Notifications" />
        <StyledBreadcrumb
          label="New Notification"
         
        />
      </Breadcrumbs>
    <div>
    <form onSubmit={handleSubmit}>
    <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="title">Title</Label>
                </TableCell>
                <TableCell>
                  <TextField
                    id="title"
                    name="title"  
                    label="title"          
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    
                    />
                </TableCell>
              </TableRow>
          <TableRow>
            <TableCell style={labelStyle}>
              <Label htmlFor="description">Description</Label>
            </TableCell>
              <TableCell>
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  variant="filled"
                  fullWidth
                  required
                />
              </TableCell>
          </TableRow>
          <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="date">Date:</Label>
                </TableCell>
                <TableCell>
                  <TextField                    
                    type="date"
                    variant="filled"
                    fullWidth
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="status">Status</Label>
                </TableCell>
                <TableCell>
                  <FormControl
                    variant="outlined"
                    fullWidth
                  >
                    <InputLabel id="status">Status</InputLabel>
                      <Select
                        id="status"
                        name="status"
                        labelId="status-label"
                        label="Status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="">
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem value="scheduled">Schedule</MenuItem>
                        <MenuItem value="published">Publish</MenuItem>
                        <MenuItem value="archived">Archive</MenuItem>
                        <MenuItem value="pinned">Pin Notice</MenuItem>
                      </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="publisher">Publisher</Label>
                </TableCell>
                <TableCell>
                  <TextField
                    id="publisher"
                    name="publisher"
                    label="publisher"
                    type="text"
                    value={formData.publisher}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
               </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="photo">Upload Image:</Label>
                </TableCell>
                <TableCell>
                <TextField
                      label="photo"
                      name='photo'
                      variant="outlined"    
                      type="file"
                      
                      accept="image/*"
                      onChange={handlePhotoChange}
                      
                     
                    />                   
                    {formData.photo && (
                      <img
                        src={URL.createObjectURL(formData.photo)}
                        alt="Preview"
                        width="100"
                      />
                    )}
                </TableCell>
              </TableRow>
                       
            </TableBody>
          </Table>
        </TableContainer>
              <Button
                type="submit"
                variant="contained"
                color="primary"                
                disabled={loading}
                fullWidth
                sx={{ 
                  height: 48,
                  '@media (min-width: 600px)': {
                    width: '50%',
                    marginLeft: '25%',
                    marginRight: '25%'
                  }
                }}
              >
                {loading ? (
              <CircularProgress size={24} color="inherit" /> 
            ) : (
              ' Add Notification'
            )}
           
          </Button>         
      </form>
      <ToastContainer />
    </div>
  </Container>
</Box>
</>
);
};

