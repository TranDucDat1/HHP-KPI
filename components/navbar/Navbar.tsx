import React, { FC, useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./navbar.module.css";
import {
    IconHome,
    IconLogoDiagram,
    Logo365,
    IconKpiFollow,
    IconVote,
    IconEstablish,
    IconDepartment,
    IconStaff,
    IconDelete,
    IconSetting,
    IconDecentralization,
    IconSettingAll,
    IconChuyenDoiSo,
} from "../data/icon";

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
const theoDoikpiDonMucTieu = "http://localhost:3000/theo-doi-kpi-don-muc-tieu";

// const linkLoGo365 = "https://timviec365.vn/";
const linkLoGo365 = "http://localhost:3000";
const linkDie = "#";

const items: MenuProps["items"] = [
    {
        label: (
            <Link className={styles.MenuItem} href={linkLoGo365}>
                Trang chủ
            </Link>
        ),
        key: "trangchu",
        icon: <IconHome />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkDie}>
                Sơ đồ KPI
            </Link>
        ),
        key: "sodokpi",
        icon: <IconLogoDiagram />,
        children: [
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        KPI đơn mục tiêu
                    </Link>
                ),
                key: "kpidonmuctieu",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDa}
                    >
                        KPI đa mục tiêu
                    </Link>
                ),
                key: "kpidamuctieu",
            },
        ],
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkDie}>
                Theo dõi KPI
            </Link>
        ),
        key: "theodoikpi",
        icon: <IconKpiFollow />,
        children: [
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={theoDoikpiDonMucTieu}
                    >
                        KPI đơn mục tiêu
                    </Link>
                ),
                key: "theodoikpidonmuctieu",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDa}
                    >
                        KPI đa mục tiêu
                    </Link>
                ),
                key: "theodoikpidamuctieu",
            },
        ],
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkDanhGiaKPI}>
                Đánh giá KPI
            </Link>
        ),
        key: "danhgiakpi",
        icon: <IconVote />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkThietLapKPI}>
                Thiết lập KPI
            </Link>
        ),
        key: "thietlapkpi",
        icon: <IconEstablish />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkQuanLyPhongBan}>
                Quản lý phòng ban
            </Link>
        ),
        key: "quanlyphongban",
        icon: <IconDepartment />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkQuanLyNhanVien}>
                Quản lý nhân viên
            </Link>
        ),
        key: "quanlynhanvien",
        icon: <IconStaff />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkDuLieuDaXoa}>
                Dữ liệu đã xoá
            </Link>
        ),
        key: "dulieudaxoa",
        icon: <IconDelete />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkPhanQuyen}>
                Phân quyền
            </Link>
        ),
        key: "phanquyen",
        icon: <IconDecentralization />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkCaiDat}>
                Cài đặt
            </Link>
        ),
        key: "caidat",
        icon: <IconSetting />,
    },
    {
        label: (
            <Link className={styles.MenuItem} href={linkCaiDatChung}>
                Cài đặt chung
            </Link>
        ),
        key: "caidatchung",
        icon: <IconSettingAll />,
    },
    {
        label: (
            <Link href={linkDie} className={styles.MenuItem}>
                Chuyển đối số 365
            </Link>
        ),
        key: "chuyendoiso",
        icon: <IconChuyenDoiSo />,
        children: [
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Chấm công
                    </Link>
                ),
                key: "chamcong",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Tính lương
                    </Link>
                ),
                key: "tinhluong",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Quản trị nhân sự
                    </Link>
                ),
                key: "quantrinhansu",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Văn thư lưu trữ
                    </Link>
                ),
                key: "vanthuluutru",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Truyền thông văn hoá
                    </Link>
                ),
                key: "truyenthongvanhoa",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Văn bản thành giọng nói
                    </Link>
                ),
                key: "chuyendoivanbanthanhgiongnoi",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Quản lý tài sản
                    </Link>
                ),
                key: "quanlytaisan",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Phần mềm phiên dịch
                    </Link>
                ),
                key: "phanmemphiendich",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        DMS
                    </Link>
                ),
                key: "dms",
            },
            {
                label: (
                    <Link
                        className={styles.MenuItemChildren}
                        href={linkSoDoKPIDon}
                    >
                        Phần mềm quản lý lịch biểu
                    </Link>
                ),
                key: "quanlylichbieu",
            },
        ],
    },
];
export default function Navbar() {
    return (
        <div className={styles.main}>
            <div className={styles.menubar_logo}>
                <Link href={linkLoGo365}>
                    <Logo365 />
                </Link>
            </div>

            <div>
                <Menu
                    mode="inline"
                    id="NavMenu"
                    className={styles.Menu}
                    items={items}
                />
            </div>
        </div>
    );
}
