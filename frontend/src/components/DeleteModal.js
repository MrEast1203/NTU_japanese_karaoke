import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useList } from "../hooks/useList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({ open, onClose, type, index }) => {
  const { deleteData } = useList();
  const handleDelete = (id, from) => {
    deleteData(id, from);
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
          variant="h6"
          component="h2"
          sx={{ mb: 4 }}>
          確定要刪除？ 不能復原喔！
        </Typography>

        <Stack
          direction="row"
          spacing={0}
          alignItems={"center"}
          justifyContent={"space-around"}>
          <Button variant="contained" color="info" onClick={onClose}>
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
