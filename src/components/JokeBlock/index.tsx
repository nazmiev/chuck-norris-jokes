import React from "react";
import styles from "./JokeBlock.module.scss"

type JokeProps = {
  id: string,
  value: string,
  created_at: string,
  url: string,
}

const JokeBlock: React.FC<JokeProps> = ({ value, id, created_at, url }) => {
  const prettyDate = new Date(created_at).toLocaleDateString("ru-RU");;
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
              {prettyDate}
          </span>
        </section>
    </article>
  );
}

export default JokeBlock;