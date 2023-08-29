import React from "react";
import Search from "./components/Search"
import { fetchJokes } from "./redux/jokes/asyncActions";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { selectFilter } from "./redux/filter/selectors";

function App() {
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector(selectFilter);

  const getJokes = async () => {
    const search = searchValue ? searchValue : "";

    dispatch(
      fetchJokes({
        search,
      })
    )
  }

  React.useEffect(() => {
    getJokes();
  }, [searchValue]);

  return (
    <>
      <Search/>
    </>
  )
}

export default App
