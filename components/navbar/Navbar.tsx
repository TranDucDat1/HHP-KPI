import React, { FC, useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./navbar.module.css";
import {
    MailOutlined,
    DeleteOutlined,
    HomeOutlined,
    ApartmentOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const linkSoDoKPIDon = "https://kpi.timviec365.vn/so-do-kpi.html";
const linkSoDoKPIDa = "https://kpi.timviec365.vn/so-do-kpi-da-muc-tieu.html";
const linkDanhGiaKPI = "https://kpi.timviec365.vn/cau-hinh-danh-gia.html";
const linkThietLapKPI = "";
const linkQuanLyPhongBan = "";
const linkQuanLyNhanVien = "";
const linkDuLieuDaXoa = "https://kpi.timviec365.vn/du-lieu-da-xoa.html";
const linkPhanQuyen = "";
const linkCaiDat = "";
const linkCaiDatChung = "";

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const items: MenuProps["items"] = [
    getItem(<Link href="#">Trang chủ</Link>, "trangchu", <HomeOutlined />),
    getItem("Sơ đồ KPI", "sodokpi", <ApartmentOutlined />, [
        getItem(
            <Link href={linkSoDoKPIDon}>KPI đơn mục tiêu</Link>,
            "kpidonmuctieu",
            null
        ),
        getItem(
            <Link href={linkSoDoKPIDa}>KPI đa mục tiêu</Link>,
            "kpidamuctieu",
            null
        ),
    ]),
    getItem("Theo dõi KPI", "theodoikpi", <MailOutlined />, [
        getItem(
            <Link href={linkSoDoKPIDon}>KPI đơn mục tiêu</Link>,
            "theodoikpidonmuctieu",
            null
        ),
        getItem(
            <Link href={linkSoDoKPIDa}>KPI đa mục tiêu</Link>,
            "theodoikpidamuctieu",
            null
        ),
    ]),
    getItem(<Link href={linkDanhGiaKPI}>Đánh giá KPI</Link>, "danhgiakpi"),
    getItem(<Link href={linkThietLapKPI}>Thiết lập KPI</Link>, "thietlapkpi"),
    getItem(
        <Link href={linkQuanLyPhongBan}>Quản lý phòng ban</Link>,
        "quanlyphongban"
    ),
    getItem(
        <Link href={linkQuanLyNhanVien}>Quản lý nhân viên</Link>,
        "quanlynhanvien"
    ),
    getItem(
        <Link href={linkDuLieuDaXoa}>Dữ liệu đã xoá</Link>,
        "dulieudaxoa",
        <DeleteOutlined />
    ),
    getItem(<Link href={linkPhanQuyen}>Phân quyền</Link>, "phanquyen"),
    getItem(<Link href={linkCaiDat}>Cài đặt</Link>, "caidat"),
    getItem(<Link href={linkCaiDatChung}>Cài đặt chung</Link>, "caidatchung"),
    getItem("Chuyển đối số 365", "chuyendoiso", <MailOutlined />, [
        getItem(
            <Link href={linkSoDoKPIDon}>KPI đơn mục tiêu</Link>,
            "g1",
            null
        ),
        getItem(<Link href={linkSoDoKPIDa}>KPI đa mục tiêu</Link>, "g2", null),
    ]),
];

export default function Navbar() {
    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
    };
    return (
        <div className={styles.main}>
            <div className={styles.shell}>
                <div className={styles.hps_part_one}>
                    <div className={styles.hps_part_one_avt}>
                        <a>{/* <img src="/logo.png" /> */}</a>
                    </div>
                </div>
                <div className={styles.hps_part_three}>
                    <div className={styles.hps_nav}>
                        <Menu
                            style={{ width: 256 }}
                            //   defaultSelectedKeys={['1']}
                            //   defaultOpenKeys={['sub1']}
                            mode="inline"
                            items={items}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
