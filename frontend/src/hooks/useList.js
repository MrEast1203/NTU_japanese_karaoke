import { createContext, useContext, useState } from "react";

const ListContext = createContext({
  //data
  table: [],
  afterTable: [],
  uploadTable: [],

  //function
  setTable: () => {},
  setAfterTable: () => {},
  setUploadTable: () => {},
  addToTable: () => {},
  moveData: () => {},
  createData: () => {},
});
const ListProvider = (props) => {
  const createData = (
    name,
    require,
    song,
    singer,
    detail,
    link,
    addition,
    replyType,
    reply
  ) => {
    return {
      name,
      require,
      song,
      singer,
      detail,
      link,
      addition,
      replyType,
      reply,
    };
  };
  const rows = [
    createData(
      "kirito2301",
      "許願",
      "再会",
      "V.W.P",
      "感覺應該要一段時間後才會上QQ",
      "",
      "",
      false,
      "正在弄"
    ),
    createData(
      "布衣",
      "許願",
      "豚乙女-ソリッド",
      "",
      "",
      "https://youtu.be/_AdKinx-iTw",
      "",
      false,
      "正在弄"
    ),
    createData(
      "布衣",
      "許願",
      "Synchrogazer",
      "水樹奈奈",
      "希望有戰姬絕唱動畫MV",
      "https://youtu.be/2DKCoLZAGvQ",
      "",
      true,
      "Done"
    ),
  ];
  const rows2 = [
    createData(
      "rina",
      "投稿",
      "fourfolium",
      "涼風青葉(CV:高田憂希)、滝本ひふみ(CV:山口愛)、篠田はじめ(CV:戸田めぐみ)、飯島ゆん(CV:竹尾歩美)-Now Loading!!!!",
      "",
      "https://www.bilibili.com/video/BV1Bs411r73d/",
      "",
      false,
      ""
    ),
    createData(
      "洪曄",
      "許願",
      "如月千早",
      "（cv:今井麻美）—約束",
      "",
      "https://youtu.be/4-MZ6vUQD-I",
      "",
      false,
      ""
    ),
  ];
  const rows3 = [
    createData(
      "林晏禾",
      "許願",
      "スタァライト九九組-You are a ghost, I am a ghost 〜劇場のゴースト〜",
      "",
      "",
      "",
      "",
      false,
      "半完成狀態"
    ),
    createData(
      "蔡承翰",
      "許願",
      "Egoist-LoveStruck",
      "",
      "到處都唱不到QQ",
      "",
      "",
      false,
      "還在找"
    ),
  ];
  const [table, setTable] = useState(rows);
  const [afterTable, setAfterTable] = useState(rows2);
  const [uploadTable, setUploadTable] = useState(rows3);

  //function
  const addToTable = (data) => {
    setTable((prev) => [...prev, data]);
  };
  const moveData = (id, from, to, data) => {
    if (from === "table") {
      setTable(table.filter((element, index) => index !== id));
    } else if (from === "afterTable") {
      setAfterTable(afterTable.filter((element, index) => index !== id));
    } else if (from === "uploadTable") {
      setUploadTable(uploadTable.filter((element, index) => index !== id));
    }
    if (to === "table") setTable((prev) => [...prev, data]);
    else if (to === "afterTable") setAfterTable((prev) => [...prev, data]);
    else if (to === "uploadTable") setUploadTable((prev) => [...prev, data]);
  };

  return (
    <ListContext.Provider
      value={{
        table,
        afterTable,
        uploadTable,
        setTable,
        setAfterTable,
        setUploadTable,
        addToTable,
        moveData,
        createData,
      }}
      {...props}
    />
  );
};

function useList() {
  return useContext(ListContext);
}

export { ListProvider, useList };
