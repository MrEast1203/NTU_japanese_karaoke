import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useList } from "../hooks/useList";
import { useState } from "react";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({ open, onClose, type, index }) => {
  const { deleteData, password } = useList();
  const handleDelete = (id, from) => {
    if (pwd !== password) {
      pwd !== password ? setPwdWrong(true) : setPwdWrong(false);
      return;
    } else {
      setPwdWrong(false);
    }

    deleteData(id, from);
    onClose();
  };
  const [pwd, setPwd] = useState("");
  const [pwdWrong, setPwdWrong] = useState(false);

  const handlePwd = (e) => {
    setPwd(e.target.value);
  };
  const handleClose = () => {
    setPwdWrong(false);
    setPwd("");
    onClose();
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ mb: 2 }}>
          確定要刪除？ 不能復原喔！
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          密碼
        </Typography>
        <TextField
          error={pwdWrong}
          id="standard"
          label="Password"
          variant="standard"
          sx={{ mb: 2 }}
          onChange={handlePwd}
          type="password"
        />

        <Stack
          direction="row"
          spacing={0}
          alignItems={"center"}
          justifyContent={"space-around"}>
          <Button variant="contained" color="info" onClick={handleClose}>
            返回
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(index, type)}>
            刪除
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
