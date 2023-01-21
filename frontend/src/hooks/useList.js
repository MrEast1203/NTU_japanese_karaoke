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
  const [table, setTable] = useState([]);
  const [afterTable, setAfterTable] = useState([]);
  const [uploadTable, setUploadTable] = useState([]);

  //function
  const addToTable = (data) => {
    setTable((prev) => [...prev, data]);
  };
  const moveData = (id, from, to) => {
    let tmp;
    if (from === "table") {
      tmp = table[id];
      setTable(table.filter((element, index) => index !== id));
    } else if (from === "afterTable") {
      tmp = afterTable[id];
      setAfterTable(afterTable.filter((element, index) => index !== id));
    } else if (from === "uploadTable") {
      tmp = uploadTable[id];
      setUploadTable(uploadTable.filter((element, index) => index !== id));
    }
    if (to === "table") setTable((prev) => [...prev, tmp]);
    else if (to === "afterTable") setAfterTable((prev) => [...prev, tmp]);
    else if (to === "uploadTable") setUploadTable((prev) => [...prev, tmp]);
  };
  const createData = (
    name,
    require,
    song,
    detail,
    link,
    addition,
    replyType,
    reply
  ) => {
    return { name, require, song, detail, link, addition, replyType, reply };
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
