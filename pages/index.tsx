import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ListBoard from "../src/components/unit/list/listBoard.container";

export default function Home() {
  return (
    <>
      <ListBoard />
    </>
  );
}
