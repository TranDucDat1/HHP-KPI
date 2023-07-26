import React from "react";
import HeaderComponent from "./header/Header";
import Navbar from "./navbar/Navbar";
import styles from "./layout.module.css";


export default function App(props: any) {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Navbar/>
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          {/* <MenuTabIcon className={styles.hideOnSmallScreen}/> */}
          <HeaderComponent/>
        </div>
        <div className={styles.content}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
