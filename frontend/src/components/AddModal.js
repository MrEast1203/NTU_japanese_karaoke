import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useList } from "../hooks/useList";

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

const AddModal = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [require, setRequire] = useState("許願");
  const [song, setSong] = useState("");
  const [singer, setSinger] = useState("");
  const [detail, setDetail] = useState("");
  const [link, setLink] = useState("");
  const [addition, setAddition] = useState("");
  // const [replyType, setReplyType] = useState(false)
  // const [reply, setReply] = useState('')
  const [nameEmpty, setNameEmpty] = useState(false);
  const [songEmpty, setSongEmpty] = useState(false);
  const { addToTable, createData } = useList();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleRequireChange = (e) => {
    setRequire(e.target.value);
  };
  const handleSongChange = (e) => {
    setSong(e.target.value);
  };
  const handleSingerChange = (e) => {
    setSinger(e.target.value);
  };
  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };
  const handleAdditionChange = (e) => {
    setAddition(e.target.value);
  };

  const handleAdd = () => {
    if (name === "" || song === "") {
      name === "" ? setNameEmpty(true) : setNameEmpty(false);
      song === "" ? setSongEmpty(true) : setSongEmpty(false);
      return;
    } else {
      setNameEmpty(false);
      setSongEmpty(false);
    }
    const tmp = createData(
      name,
      require,
      song,
      singer,
      detail,
      link,
      addition,
      false,
      ""
    );
    // console.log("object", tmp);
    addToTable(tmp);
    onClose();
  };
  const handleClose = () => {
    setName("");
    setRequire("許願");
    setSong("");
    setSinger("");
    setDetail("");
    setLink("");
    setAddition("");
    setNameEmpty(false);
    setSongEmpty(false);
    onClose();
  };

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
          error={nameEmpty}
          id="standard-required"
          label="Name"
          variant="standard"
          sx={{ mb: 2 }}
          onChange={handleNameChange}
        />

        <FormControl sx={{ mb: 2 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Require
          </InputLabel>
          <NativeSelect
            defaultValue={"許願"}
            inputProps={{
              name: "require",
              id: "uncontrolled-native",
            }}
            onChange={handleRequireChange}>
            <option value={"許願"}>許願</option>
            <option value={"投稿"}>投稿</option>
            <option value={"修改建議"}>修改建議</option>
          </NativeSelect>
        </FormControl>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            marginBottom: 2,
          }}>
          <div style={{ width: "50%", marginRight: 10 }}>
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
              error={songEmpty}
              id="standard-required"
              label="Song"
              variant="standard"
              onChange={handleSongChange}
            />
          </div>
          <div style={{ width: "50%" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Singer?
            </Typography>
            <TextField
              fullWidth
              id="standard"
              label="Singer"
              variant="standard"
              onChange={handleSingerChange}
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
          onChange={handleDetailChange}
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
          onChange={handleLinkChange}
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
          onChange={handleAdditionChange}
        />

        <Stack
          direction="row"
          spacing={0}
          alignItems={"center"}
          justifyContent={"space-around"}>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleAdd}>
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddModal;
