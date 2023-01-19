import { createContext, useContext, useState } from "react";

const ListContext = createContext({
  //data
  table: [],

  //function
  setTable: () => {},
});
const ListProvider = (props) => {
  const [table, setTable] = useState([]);

  //function

  return <ListContext.Provider value={{ table, setTable }} {...props} />;
};

function useList() {
  return useContext(ListContext);
}

export { ListProvider, useList };
