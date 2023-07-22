import React, { FC, useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./navbar.module.css";
import { IconHome, IconSoDoKPI, IconChuyenDoiSo } from "../data/icon";

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

const linkLoGo365 = "https://timviec365.vn/";

const logo365 = "/logo/365logo.svg";

const items: MenuProps["items"] = [
    {
        label: <Link href={linkLoGo365}>Trang chủ</Link>,
        key: "trangchu",
        icon: <IconHome />,
    },
    {
        label: "Sơ đồ KPI",
        key: "sodokpi",
        icon: <IconSoDoKPI />,
        children: [
            {
                label: <Link href={linkSoDoKPIDon}>KPI đơn mục tiêu</Link>,
                key: "kpidonmuctieu",
            },
            {
                label: <Link href={linkSoDoKPIDa}>KPI đa mục tiêu</Link>,
                key: "kpidamuctieu",
            },
        ],
    },
    {
        label: "Theo dõi KPI",
        key: "theodoikpi",
        icon: <IconChuyenDoiSo />,
        children: [
            {
                label: <Link href={linkSoDoKPIDon}>KPI đơn mục tiêu</Link>,
                key: "theodoikpidonmuctieu",
            },
            {
                label: <Link href={linkSoDoKPIDa}>KPI đa mục tiêu</Link>,
                key: "theodoikpidamuctieu",
            },
        ],
    },
    {
        label: <Link href={linkDanhGiaKPI}>Đánh giá KPI</Link>,
        key: "danhgiakpi",
    },
    {
        label: <Link href={linkThietLapKPI}>Thiết lập KPI</Link>,
        key: "thietlapkpi",
    },
    {
        label: <Link href={linkQuanLyPhongBan}>Quản lý phòng ban</Link>,
        key: "quanlyphongban",
    },
    {
        label: <Link href={linkQuanLyNhanVien}>Quản lý nhân viên</Link>,
        key: "quanlynhanvien",
    },
    {
        label: <Link href={linkDuLieuDaXoa}>Dữ liệu đã xoá</Link>,
        key: "dulieudaxoa",
    },
    {
        label: <Link href={linkPhanQuyen}>Phân quyền</Link>,
        key: "phanquyen",
    },
    {
        label: <Link href={linkCaiDat}>Cài đặt</Link>,
        key: "caidat",
    },
    {
        label: <Link href={linkCaiDatChung}>Cài đặt chung</Link>,
        key: "caidatchung",
    },
    {
        label: "Chuyển đối số 365",
        key: "chuyendoiso",
        children: [
            {
                label: <Link href={linkSoDoKPIDon}>KPI đơn mục tiêu</Link>,
                key: "",
            },
        ],
    },
];
export default function Navbar() {
    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
    };

    return (
        <div className={styles.main}>
            <div className={styles.menubar_logo}>
                <Link href={linkLoGo365}>
                    <img src={logo365} />
                </Link>
            </div>
            <div className={styles.hps_part_three}>
                <Menu
                    mode="inline"
                    onClick={onClick}
                    className={styles.MenuItem}
                    items={items}
                />
            </div>
        </div>
    );
}
