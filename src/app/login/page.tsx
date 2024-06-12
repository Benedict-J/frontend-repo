"use client";

import { useEffect, useState } from "react";

import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { login } from "@/apis/userApi";

import store from "@/store/store";

import styles from "./page.module.css";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const alertMessage = useSelector((state: any) => state.app.resultMessage);
  const alertType = useSelector((state: any) => state.app.alertType);
  const isLoading = useSelector((state: any) => state.app.isLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    login(email, password);
  };

  console.log("asdasd");

  return (
    <div className={styles.login_page}>
      {alertMessage.length > 0 && (
        <Alert severity={alertType} sx={{ marginBottom: 4 }}>
          {alertMessage}
        </Alert>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box display="flex" flexDirection="column">
        <Typography variant="h5">Login</Typography>
        <Typography sx={{ mb: 1 }}>Email</Typography>
        <TextField
          type="email"
          onChange={handleEmailChange}
          placeholder="example@gmail.com"
          sx={{ mb: 2 }}
        />
        <Typography sx={{ mb: 1 }}>Password</Typography>
        <TextField
          type="password"
          onChange={handlePasswordChange}
          placeholder="***********"
          sx={{ mb: 2 }}
        />
        <div className={styles.button_group}>
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
}
