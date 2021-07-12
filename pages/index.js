import axios from "axios";
import Head from "next/head";
import { useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const name = useRef("");
  const email = useRef("");

  const sendData = (e) => {
    e.preventDefault();
    console.log(name);
    axios.post("/api/index", {
      "content-type": "application/json",
      body: {
        name: name.current.value,
        email: email.current.value,
      },
    });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={sendData}>
        <input ref={name} type="text" name="name" id="" />
        <input ref={email} type="email" name="email" id="" />
        <button type="submit">Submit</button>
      </form>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
