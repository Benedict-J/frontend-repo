"use client";

import { useEffect, useState } from "react";
import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./page.module.css";
import UpdateButton from "@/components/UpdateButton";
import { fetchUserDataAPI, updateUserDataAPI } from "@/apis/userApi";
import { useSelector } from "react-redux";

export default function MainPage() {
  const alertMessage = useSelector((state: any) => state.app.resultMessage);
  const alertType = useSelector((state: any) => state.app.alertType);
  const isLoading = useSelector((state: any) => state.app.isLoading);

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleQueryUserData = async () => {
    const response = await fetchUserDataAPI();

    setData(response);
  };

  const handleChange = (e: any, type: string) => {
    setData((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const handleUpdateButtonClick = async () => {
    const response = await updateUserDataAPI(data);
  };

  useEffect(() => {
    handleQueryUserData();
  }, []);

  return (
    <div className={styles.main_page}>
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
      <Typography variant="h5">Profile</Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ mb: 2, gap: 4 }}
      >
        <Typography sx={{ width: 150 }}>First Name</Typography>
        <TextField
          placeholder="First Name"
          value={data.first_name}
          onChange={(e) => handleChange(e, "first_name")}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ mb: 2, gap: 4 }}
      >
        <Typography sx={{ width: 150 }}>Last Name</Typography>
        <TextField
          placeholder="Last Name"
          value={data.last_name}
          onChange={(e) => handleChange(e, "last_name")}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ mb: 2, gap: 4 }}
      >
        <Typography sx={{ width: 150 }}>Email</Typography>
        <TextField
          placeholder="Email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange(e, "email")}
        />
      </Box>
      <UpdateButton onClick={handleUpdateButtonClick} />
    </div>
  );
}
