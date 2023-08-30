import React from "react";
import styles from "./JokeBlock.module.scss"

type JokeProps = {
  id: string,
  value: string,
  created_at: string,
  url: string,
}

const JokeBlock: React.FC<JokeProps> = ({ value, id, created_at, url }) => {
  return (
    <article className={styles.root} onClick={() => {
        location.href = `${url}`
      }}>
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