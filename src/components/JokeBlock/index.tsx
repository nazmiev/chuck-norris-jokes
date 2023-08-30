import React from "react";
import styles from "./JokeBlock.module.scss"

type JokeProps = {
  id: string,
  value: string,
  created_at: string,
}

const JokeBlock: React.FC<JokeProps> = ({ value, id, created_at }) => {
  return (
    <article className={styles.root}>
        <span>
            {value}
        </span>
        
        <section>
          <span>
              {id}
          </span>
          <span>
              {created_at}
          </span>
        </section>
    </article>
  );
}

export default JokeBlock;