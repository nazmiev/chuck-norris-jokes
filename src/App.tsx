import React from "react";
import Search from "./components/Search"
import { fetchJokes } from "./redux/jokes/asyncActions";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { selectFilter } from "./redux/filter/selectors";
import { selectJokesData } from "./redux/jokes/selectors";
import JokeBlock from "./components/JokeBlock";
import Skeleton from "./components/JokeBlock/skeleton";
import styles from "./styles/App.module.scss"

function App() {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectJokesData);
  const { searchValue } = useSelector(selectFilter);

  const getJokes = async () => {
    const search = searchValue ? searchValue : "";
    dispatch(fetchJokes({search}))
  }

  React.useEffect(() => {
    getJokes();
  }, [searchValue]);

  const jokes = items.map((obj: any) => (<JokeBlock key={obj.id} {...obj} />));
  const skeletons = [...new Array(6)].map((_, index) => (<Skeleton key={index} />));

  return (
    <div className={styles.root}>
      <Search/>
      {status === 'error' ?
        (<></>)
        : (<>
          <div className={styles.content}>{status === 'loading' ? skeletons : jokes}</div>
        </>)
      }
    </div>
  )
}

export default App
