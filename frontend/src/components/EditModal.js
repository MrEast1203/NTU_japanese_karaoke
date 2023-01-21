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

const EditModal = ({ open, onClose, type, data }) => {
  const [name, setName] = useState(data.name);
  const [require, setRequire] = useState(data.require);
  const [song, setSong] = useState(data.song);
  const [singer, setSinger] = useState(data.singer);
  const [detail, setDetail] = useState(data.detail);
  const [link, setLink] = useState(data.link);
  const [addition, setAddition] = useState(data.addition);
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
      song + " " + singer,
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
    // setName(data.name);
    // setRequire(data.require);
    // setSong(data.song);
    // setSinger(data.singer);
    // setDetail(data.detail);
    // setLink(data.link);
    // setAddition(data.addition);
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
          defaultValue={name}
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
            defaultValue={require}
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
              defaultValue={song}
              error={songEmpty}
              id="standard-required"
              label="Song"
              variant="standard"
              onChange={handleSongChange}
            />
          </div>
          <div style={{ width: 295 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Singer?
            </Typography>
            <TextField
              fullWidth
              defaultValue={singer}
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
          defaultValue={detail}
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
          defaultValue={link}
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
          defaultValue={addition}
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
            {type}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditModal;
