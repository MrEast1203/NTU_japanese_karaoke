import { createContext, useContext, useEffect, useState } from "react";
import instance from "../api";

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
  deleteData: () => {},
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
  const [table, setTable] = useState([]);
  const [afterTable, setAfterTable] = useState([]);
  const [uploadTable, setUploadTable] = useState([]);
  useEffect(() => {
    instance.get("getTable").then(({ data }) => {
      // console.log("table", data);
      setTable(data.contents);
    });
    instance.get("getAfterTable").then(({ data }) => {
      // console.log("aftertable", data);
      setAfterTable(data.contents);
    });
    instance.get("getUploadTable").then(({ data }) => {
      // console.log("uploadtable", data);
      setUploadTable(data.contents);
    });
  }, []);
  //function
  const addToTable = (data) => {
    setTable((prev) => [...prev, data]);
    instance.post("addInfo", { type: "table", data: data }).then(({ data }) => {
      // console.log("added!");
    });
  };
  const moveData = (id, from, to, data) => {
    if (from === "table") {
      instance
        .post("moveInfo", {
          from: from,
          to: to,
          data: table[id],
          updatedData: data,
        })
        .then(({ data }) => {
          console.log("moved!");
        });
      setTable(table.filter((element, index) => index !== id));
    } else if (from === "afterTable") {
      instance
        .post("moveInfo", {
          from: from,
          to: to,
          data: afterTable[id],
          updatedData: data,
        })
        .then(({ data }) => {
          console.log("moved!");
        });
      setAfterTable(afterTable.filter((element, index) => index !== id));
    } else if (from === "uploadTable") {
      instance
        .post("moveInfo", {
          from: from,
          to: to,
          data: uploadTable[id],
          updatedData: data,
        })
        .then(({ data }) => {
          console.log("moved!");
        });
      setUploadTable(uploadTable.filter((element, index) => index !== id));
    }
    if (to === "table") setTable((prev) => [...prev, data]);
    else if (to === "afterTable") setAfterTable((prev) => [...prev, data]);
    else if (to === "uploadTable") setUploadTable((prev) => [...prev, data]);
  };
  const deleteData = (id, from) => {
    if (from === "table") {
      instance
        .delete("deleteInfo", { data: { type: from, data: table[id] } })
        .then(({ data }) => {
          // console.log("deleted from table");
        })
        .catch((err) => {
          console.log(err);
        });
      setTable(table.filter((element, index) => index !== id));
    } else if (from === "afterTable") {
      instance
        .delete("deleteInfo", { data: { type: from, data: table[id] } })
        .then(({ data }) => {
          // console.log("deleted from aftertable");
        });
      setAfterTable(afterTable.filter((element, index) => index !== id));
    } else if (from === "uploadTable") {
      instance
        .delete("deleteInfo", { data: { type: from, data: table[id] } })
        .then(({ data }) => {
          // console.log("deleted from uploadtable");
        });
      setUploadTable(uploadTable.filter((element, index) => index !== id));
    }
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
        deleteData,
      }}
      {...props}
    />
  );
};

function useList() {
  return useContext(ListContext);
}

export { ListProvider, useList };
