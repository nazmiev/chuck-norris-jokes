import React from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/filter/slice";
import { selectJokesData } from "../../redux/jokes/selectors";

const Search:React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { items } = useSelector(selectJokesData);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 400),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        autoFocus 
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search jokes..."
      />
      {items.length > 0 ?
        (<p className={styles.counter}>Found jokes: {items.length}</p>) 
        : <></>
      }
    </div>
  );
};

export default Search;
