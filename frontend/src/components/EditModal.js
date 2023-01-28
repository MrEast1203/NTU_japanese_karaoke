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
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ open, onClose, type, data, index }) => {
  const [name, setName] = useState(data.name === undefined ? "" : data.name);
  const [require, setRequire] = useState(
    data.require === undefined ? "" : data.require
  );
  const [song, setSong] = useState(data.song === undefined ? "" : data.song);
  const [singer, setSinger] = useState(
    data.singer === undefined ? "" : data.singer
  );
  const [detail, setDetail] = useState(
    data.detail === undefined ? "" : data.detail
  );
  const [link, setLink] = useState(data.link === undefined ? "" : data.link);
  const [addition, setAddition] = useState(
    data.addition === undefined ? "" : data.addition
  );
  const [replyType, setReplyType] = useState(
    data.replyType === undefined ? false : data.replyType
  );
  const [reply, setReply] = useState(
    data.reply === undefined ? "" : data.reply
  );
  const [nameEmpty, setNameEmpty] = useState(false);
  const [songEmpty, setSongEmpty] = useState(false);
  const { moveData, createData } = useList();

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
  const handleReplyType = (e) => {
    setReplyType(e.target.value);
  };
  const handleReply = (e) => {
    setReply(e.target.value);
  };

  const handleAdd = (id, from, to) => {
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
      replyType,
      reply
    );
    // console.log("object", tmp);
    moveData(id, from, to, tmp);
    onClose();
  };
  const handleClose = () => {
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
              defaultValue={song}
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

        <FormControl sx={{ mb: 2 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Reply Type
          </InputLabel>
          <NativeSelect
            defaultValue={replyType}
            inputProps={{
              name: "require",
              id: "uncontrolled-native",
            }}
            onChange={handleReplyType}>
            <option value={false}>進行中</option>
            <option value={true}>已完成</option>
          </NativeSelect>
        </FormControl>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          回覆detail
        </Typography>
        <TextField
          fullWidth
          defaultValue={reply}
          id="standard"
          label="Reply"
          variant="standard"
          sx={{ mb: 2 }}
          onChange={handleReply}
        />

        <Stack
          direction="row"
          spacing={0}
          alignItems={"center"}
          justifyContent={"space-around"}>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleAdd(index, type, "table")}>
            到工作進度
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => handleAdd(index, type, "afterTable")}>
            到之後處理
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleAdd(index, type, "uploadTable")}>
            到未上傳區
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditModal;
