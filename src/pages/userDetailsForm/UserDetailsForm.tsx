import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const UserDetailsForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  console.log(localStorage);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phoneNum && email) {
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ name, phoneNum, email })
      );
      console.log(localStorage);

      window.location.href = "/second";
    } else {
      console.log(localStorage);
      alert("Please fill all the necessary fields");
    }
    console.log("name =", name);
  };
  return (
    <Container>
      <Typography variant="h4" component="h1">
        User Details
      </Typography>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Phone Number"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default UserDetailsForm;
