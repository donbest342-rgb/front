import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState ("");
  const api = `https://students-learning-api.onrender.com/api/auth/${id}`

  useEffect (() =>{
    let FetchUsers = async () => {
        if (!id) {
            setError("User ID is missing");
            setLoading(false);
            return;
        }
        try {
            const res = await 
            axios.get(api);
            setUser (res.data);
            console.log(res.data);
            
        } catch (error) {
            console.error(error);
            setError(error);
        }   finally {
            setLoading(false);
        }
    };
    if (id) {
        FetchUsers();
    } 
  }, [id]);
  if (loading) return <Typography>Loading...</Typography>;
//   if (error) return <Typography color="error">{error}</Typography>;
  if (!user) return <Typography>No user data available.</Typography>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold" color="orangered">
          User Details
        </Typography>

        <Typography sx={{ mb: 1 }}>
          <b>ID: {user._id}</b> 
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <b>Name: {user.firstName} {user.lastName}</b> 
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <b>Email: {user.email}</b> 
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>Phone: {user.phoneNumber}</b> 
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>Address: {user.address}</b> 
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>Role: {user.role}</b> 
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>Date Joined: {user.createdAt}</b> 
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>Last Edited: {user.updatedAt}</b> 
        </Typography>
        

        <Button variant="contained" fullWidth sx={{
            background: "linear-gradient(135deg, #2dce89 , #048b89ff)"
}}
        onClick={() => navigate(-1)}>
          Back
        </Button>
      </Paper>
    </Box>
  );
};

export default UserDetails;