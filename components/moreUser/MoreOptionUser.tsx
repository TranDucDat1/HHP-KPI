import Link from "next/link";
import { Menu } from "antd";
import type { MenuProps } from "antd";

import { UserInfo, DangXuat, Pen, Wanning, HuongDan } from "../data/icon";
import styles from "./moreOptionUser.module.css";
import LogOut from "./logout";
import { useState } from "react";

interface MoreOptionUserProps {
  onClick?: () => void;
}

// const [onOpenModal, setOnOpenModal] = useState(false);

const userInfoLink = 'https://quanlychung.timviec365.vn/quan-ly-thong-tin-tai-khoan-nhan-vien.html';
const errorLink = 'https://quanlychung.timviec365.vn/thong-bao-truy-cap.html';
const leadLink = 'https://kpi.timviec365.vn/huong-dan.html';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link className={styles.infoAcc} href={userInfoLink}>Thông tin tài khoản</Link>, 'userInfo', <UserInfo/>, []),
  getItem(<Link className={styles.infoAcc} href={errorLink}>Đánh giá</Link>, 'rate', <Pen/>, []),
  getItem(<Link className={styles.infoAcc} href={errorLink}>Báo lỗi</Link>, 'report',<Wanning/>, []),
  getItem(<Link className={styles.infoAcc} href={leadLink}>Hướng dẫn</Link>, 'lead',<HuongDan/>, []),
  getItem(<LogOut className={`${styles.infoAcc} ${styles.logOutBtn}`}/>, 'logout', <DangXuat/>, []),
];

export default function MoreOptionUser({ onClick }: MoreOptionUserProps) {

  return (
    <div className={styles.moreOptionUser}>
      <div className={styles.moreOptionUserHeader}>
        <img
          src="https://images.unsplash.com/photo-1689888154384-00e7f1e191f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="user_info"
          className={styles.moreOptionUserHeaderImg}
        />
        <p className={styles.nameCompany}>Trần Đức Đạt</p>
        <p className={styles.nameUserInfo}>ID:957774</p>
      </div>
      <div className={styles.moreOptionUserBody}>
        <Menu
          mode="vertical"
          id="infoMenu"
          style={{color: '#333'}}
          items={items}
        />
      </div>
    </div>
  );
}
