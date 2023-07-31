import React from "react";
import Link from "next/link";

import styles from "./huongDan.module.css";
import { hoiCham as Question } from "../data/icon"

const howTo = "https://kpi.timviec365.vn/huong-dan.html";

export default function huongDan(props: any) {
  return (
    <div className={styles.huongDan}>
      <Question/>
      <Link href={howTo} className={styles.huongDanLink}>Hướng dẫn</Link>
    </div>
  );
}
