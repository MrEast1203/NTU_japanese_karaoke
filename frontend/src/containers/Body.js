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
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
function createData(name, require, song, detail, link, addition, reply) {
  return { name, require, song, detail, link, addition, reply };
}
const rows = [
  createData(
    "kirito2301",
    "許願",
    "V.W.P - 再会",
    "感覺應該要一段時間後才會上QQ",
    "",
    "",
    false
  ),
  createData(
    "布衣",
    "許願",
    "豚乙女-ソリッド",
    "",
    "https://youtu.be/_AdKinx-iTw",
    "",
    false
  ),
  createData(
    "布衣",
    "許願",
    "水樹奈奈-Synchrogazer",
    "希望有戰姬絕唱動畫MV",
    "https://youtu.be/2DKCoLZAGvQ",
    "",
    true
  ),
];
// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const Body = () => {
  return (
    <Wrapper>
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
              aria-label="menu">
              <AddIcon />
            </IconButton>
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
              <TableCell>Reply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.require}</TableCell>
                <TableCell>{row.song}</TableCell>
                <TableCell>{row.detail}</TableCell>
                <TableCell>{row.link}</TableCell>
                <TableCell>{row.addition}</TableCell>
                <TableCell>
                  {row.reply ? <DoneIcon /> : <PendingActionsIcon />}
                </TableCell>
                <TableCell>
                  <IconButton aria-label="expand row" size="small">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};
export default Body;
