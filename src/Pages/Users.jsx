import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserNav from "../Component/UsersNav.jsx";
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HomeIcon from '@mui/icons-material/Home';

const UsersList = () => {
  
  const navigate = useNavigate();
  const [users, setUsers] = useState ([])
  const [loading, setLoading] = useState (true)
  const [error, setError] = useState ()
  const api = "https://students-learning-api.onrender.com/api/auth"

  useEffect (() => { 
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const res = await 
        axios.get(api)
        console.log(res.data);
        setUsers(res.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  const deleteUser = async (_id) => {
    const confirm = window.confirm('re you sure you want to delete this user?')
    if (!confirm) return;
    try {
      await axios.delete(`https://students-learning-api.onrender.com/api/auth/delete/${_id}`);
    }
    catch (error) {
      console.error(error)
      alert("Failed to delete user")
    }
  }

  // [loading && < CircularProgress/>]
  if (loading) return <CircularProgress />;
  
  return ( 
<> 
<UserNav/>
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        All Registered Users
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>User</b>
              </TableCell>
              <TableCell>
                <b>Contact</b>
              </TableCell>
              <TableCell>
                <b>About User</b>
              </TableCell>
              <TableCell align="center">
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.firstName} {user.lastName}</TableCell>
                  <TableCell>
                    <Stack direction="column">
                   <Typography
                   ><MailIcon fontSize="small"/> {user.email} 
                   </Typography>
                    <Typography><PhoneInTalkIcon fontSize="small"/> {user.phoneNumber}</Typography>
                    <Typography><HomeIcon fontSize="small"/> {user.address}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <b>Role: </b>{user.role} <br/>
                    joined on: {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="column" spacing={1} justifyContent="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => navigate(`/users/${user._id}`)}
                      >
                        View
                      </Button>
                      {/* <Button
                        variant="contained"
                        color="success"
                        size="small"
                        // onClick={() => navigate(/users/edit/${user._id})}
                      >
                        Edit
                      </Button> */}
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
     </>
  );
};

export default UsersList;