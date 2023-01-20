import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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

const AddModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          你的名字是？
        </Typography>
        <TextField
          required
          fullWidth
          id="standard-required"
          label="Name"
          variant="standard"
          sx={{ mb: 2 }}
        />

        <FormControl sx={{ mb: 2 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Require
          </InputLabel>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: "require",
              id: "uncontrolled-native",
            }}>
            <option value={10}>許願</option>
            <option value={20}>投稿</option>
            <option value={30}>修改建議</option>
          </NativeSelect>
        </FormControl>
        <div
          style={{
            width: 600,
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            marginBottom: 2,
          }}>
          <div style={{ width: 295, marginRight: 10 }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              align="left">
              Song?
            </Typography>
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Song"
              variant="standard"
            />
          </div>
          <div style={{ width: 295 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Singer?
            </Typography>
            <TextField
              fullWidth
              id="standard"
              label="Singer"
              variant="standard"
            />
          </div>
        </div>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          許願的詳細細節？
        </Typography>
        <TextField
          fullWidth
          id="standard"
          label="Detail"
          variant="standard"
          sx={{ mb: 2 }}
        />

        <Typography id="modal-modal-title" variant="h6" component="h2">
          你想投稿的影片連結為？
        </Typography>
        <TextField
          fullWidth
          id="standard"
          label="Link"
          variant="standard"
          sx={{ mb: 2 }}
        />

        <Typography id="modal-modal-title" variant="h6" component="h2">
          投稿的詳細細節？（需要幫忙下載？去人聲？沒有不用填寫
        </Typography>
        <TextField
          fullWidth
          id="standard"
          label="Addition"
          variant="standard"
          sx={{ mb: 2 }}
        />

        <Stack
          direction="row"
          spacing={0}
          alignItems={"center"}
          justifyContent={"space-around"}>
          <Button variant="contained" color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success">
            Add
          </Button>
        </Stack>

        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}
      </Box>
    </Modal>
  );
};

export default AddModal;
