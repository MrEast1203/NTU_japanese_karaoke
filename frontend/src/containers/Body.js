import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoneIcon from "@mui/icons-material/Done";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddModal from "../components/AddModal";

import { useList } from "../hooks/useList";
import EditModal from "../components/EditModal";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

// function createData(
//   name,
//   require,
//   song,
//   singer,
//   detail,
//   link,
//   addition,
//   replyType,
//   reply
// ) {
//   return {
//     name,
//     require,
//     song,
//     singer,
//     detail,
//     link,
//     addition,
//     replyType,
//     reply,
//   };
// }
// const rows = [
//   createData("kirito2301","許願","V.W.P - 再会","感覺應該要一段時間後才會上QQ","","",false,"正在弄"),
//   createData("布衣","許願","豚乙女-ソリッド","","https://youtu.be/_AdKinx-iTw","",false,"正在弄"),
//   createData("布衣","許願","水樹奈奈-Synchrogazer","希望有戰姬絕唱動畫MV","https://youtu.be/2DKCoLZAGvQ","",true,"Done"),
// ];
// const rows2 = [
//   createData(
//     "rina",
//     "投稿",
//     "fourfolium",
//     "涼風青葉(CV:高田憂希)、滝本ひふみ(CV:山口愛)、篠田はじめ(CV:戸田めぐみ)、飯島ゆん(CV:竹尾歩美)-Now Loading!!!!",
//     "",
//     "https://www.bilibili.com/video/BV1Bs411r73d/",
//     "",
//     false,
//     ""
//   ),
//   createData(
//     "洪曄",
//     "許願",
//     "如月千早",
//     "（cv:今井麻美）—約束",
//     "",
//     "https://youtu.be/4-MZ6vUQD-I",
//     "",
//     false,
//     ""
//   ),
// ];
// const rows3 = [
//   createData(
//     "林晏禾",
//     "許願",
//     "スタァライト九九組-You are a ghost, I am a ghost 〜劇場のゴースト〜",
//     "",
//     "",
//     "",
//     "",
//     false,
//     "半完成狀態"
//   ),
//   createData(
//     "蔡承翰",
//     "許願",
//     "Egoist-LoveStruck",
//     "",
//     "到處都唱不到QQ",
//     "",
//     "",
//     false,
//     "還在找"
//   ),
// ];

const Body = () => {
  //For Tab
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  ////////////////////////////////////////////////

  //For Model
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [afterData, setAfterData] = React.useState({});
  const [id, setId] = React.useState(0);
  const handleOpenAfterData = (data, index) => {
    setAfterData(data);
    setId(index);
    setOpen(true);
  };

  const Edit = ({ open, handleClose, type, afterData, index }) => {
    return (
      <EditModal
        open={open}
        onClose={handleClose}
        type={type}
        data={afterData}
        index={index}
      />
    );
  };
  ////////////////////////////////////////////////

  const { table, afterTable, uploadTable } = useList();

  return (
    <Wrapper>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="工作進度" value="1" />
              <Tab label="之後處理" value="2" />
              <Tab label="未上傳區" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Waiting List
                  </Typography>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleOpen}>
                    <AddIcon />
                  </IconButton>
                  <AddModal open={open} onClose={handleClose} />
                </Toolbar>
              </AppBar>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ width: 1 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Require</TableCell>
                    <TableCell>Song</TableCell>
                    <TableCell>Detail</TableCell>
                    <TableCell>Link</TableCell>
                    <TableCell>Addition</TableCell>
                    <TableCell align="center" colSpan={2}>
                      Reply
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.require}</TableCell>
                      <TableCell>{row.song + " " + row.singer}</TableCell>
                      <TableCell>{row.detail}</TableCell>
                      <TableCell>{row.link}</TableCell>
                      <TableCell>{row.addition}</TableCell>
                      <TableCell>{row.reply}</TableCell>
                      <TableCell>
                        {row.replyType ? <DoneIcon /> : <PendingActionsIcon />}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleOpenAfterData(row, index)}>
                          <EditIcon />
                        </IconButton>
                        <Edit
                          open={open}
                          handleClose={handleClose}
                          type={"table"}
                          afterData={afterData}
                          index={id}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value="2">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Waiting List
                  </Typography>
                  {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu">
                    <AddIcon />
                  </IconButton> */}
                </Toolbar>
              </AppBar>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ width: 1 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Require</TableCell>
                    <TableCell>Song</TableCell>
                    <TableCell>Detail</TableCell>
                    <TableCell>Link</TableCell>
                    <TableCell>Addition</TableCell>
                    <TableCell align="center" colSpan={2}>
                      Reply
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {afterTable.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.require}</TableCell>
                      <TableCell>{row.song + " " + row.singer}</TableCell>
                      <TableCell>{row.detail}</TableCell>
                      <TableCell>{row.link}</TableCell>
                      <TableCell>{row.addition}</TableCell>
                      <TableCell>{row.reply}</TableCell>
                      <TableCell>
                        {row.replyType ? <DoneIcon /> : <PendingActionsIcon />}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleOpenAfterData(row, index)}>
                          <EditIcon />
                        </IconButton>
                        <Edit
                          open={open}
                          handleClose={handleClose}
                          type={"afterTable"}
                          afterData={afterData}
                          index={id}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value="3">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Waiting List
                  </Typography>
                  {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu">
                    <AddIcon />
                  </IconButton> */}
                </Toolbar>
              </AppBar>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ width: 1 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Require</TableCell>
                    <TableCell>Song</TableCell>
                    <TableCell>Detail</TableCell>
                    <TableCell>Link</TableCell>
                    <TableCell>Addition</TableCell>
                    <TableCell align="center" colSpan={2}>
                      Reply
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {uploadTable.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.require}</TableCell>
                      <TableCell>{row.song + " " + row.singer}</TableCell>
                      <TableCell>{row.detail}</TableCell>
                      <TableCell>{row.link}</TableCell>
                      <TableCell>{row.addition}</TableCell>
                      <TableCell>{row.reply}</TableCell>
                      <TableCell>
                        {row.replyType ? <DoneIcon /> : <PendingActionsIcon />}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleOpenAfterData(row, index)}>
                          <EditIcon />
                        </IconButton>
                        <Edit
                          open={open}
                          handleClose={handleClose}
                          type={"uploadTable"}
                          afterData={afterData}
                          index={id}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabContext>
      </Box>
    </Wrapper>
  );
};
export default Body;
