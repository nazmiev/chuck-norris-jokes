import React from "react";
import styles from "./JokeBlock.module.scss"

type JokeProps = {
  id: string,
  value: string,
  date: string,
}

const JokeBlock: React.FC<JokeProps> = ({ value, id, date }) => {
  return (
    <div className={styles.root}>
        <h4>
            {value}
        </h4>
        <span>
            {id}
        </span>
        <span>
            {date}
        </span>
    </div>
  );
}

export default JokeBlock;