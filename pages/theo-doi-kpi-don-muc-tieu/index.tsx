import React from "react";
import Head from "next/head";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import type { ColumnsType } from "antd/es/table";
import _ from "lodash";
import { SyncOutlined, DeleteOutlined } from "@ant-design/icons";

import Layout from "../../components/Layout";
import styles from "../../styles/theoDoiKPIDonMucTieu/index.module.css";
import HowTo from "../../components/huongDan/huongDan";
import FormSearch from "../../components/formSearch/formSearch";
import CircularRate from "../../components/circularRate/circularRate";
import { Excel } from "../../components/data/icon";
import TableFixed from "../../components/table/tableFixed/tableFixed";
import Link from "next/link";

export interface AboutPageAProps {}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

// const handleClickUpdateBtn = (record: any) => {
//   // đã lấy được record để chuẩn bị chuyển sang trang cap-nhat-ket-qua(sử dụng redux hoặc gì đó để lưu data).
//   console.log('click update', record);  
//   // hoặc dùng component link sau đó các dữ liệu cập nhật được trả về từ server(mình chỉ thực hiện gửi id của data lên thôi).
//   <Link href={`http://localhost:3000/theo-doi-kpi-don-muc-tieu/cap-nhat-ket-qua/${record.key}`}/>
// }

const handleClickDeleteBtn = (record: any) => {
  //đã lấy được record để chuẩn bị thực hiện xóa
  console.log('click delete', record);
}

//fake data
const dataSource: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
  {
    key: "3",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  // {
  //   key: '4',
  //   name: 'Jim Green1',
  //   age: 40,
  //   address: 'London Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   age: 32,
  //   address: 'New York Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 40,
  //   address: 'London Park',
  // },
  // {
  //   key: '3',
  //   name: 'John Brown',
  //   age: 32,
  //   address: 'New York Park',
  // },
  // {
  //   key: '4',
  //   name: 'Jim Green1',
  //   age: 40,
  //   address: 'London Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   age: 32,
  //   address: 'New York Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 40,
  //   address: 'London Park',
  // },
  // {
  //   key: '3',
  //   name: 'John Brown',
  //   age: 32,
  //   address: 'New York Park',
  // },
  // {
  //   key: '4',
  //   name: 'Jim Green1',
  //   age: 40,
  //   address: 'London Park',
  // },
];

const columns: ColumnsType<DataType> = [
  {
    title: "STT",
    width: 100,
    dataIndex: "key",
    key: "name",
  },
  {
    title: "Thực hiện",
    width: 100,
    dataIndex: "age",
    key: "age",
  },
  { title: "KPI", width: 100, dataIndex: "address", key: "1" },
  { title: "Loại", width: 100, dataIndex: "address", key: "2" },
  { title: "Thời gian thực hiện", width: 100, dataIndex: "address", key: "3" },
  { title: "Trọng số", width: 100, dataIndex: "address", key: "4" },
  { title: "Loại KPI", width: 100, dataIndex: "address", key: "5" },
  { title: "Thuộc KPI", width: 100, dataIndex: "address", key: "6" },
  { title: "Người quản lý", width: 100, dataIndex: "address", key: "7" },
  { title: "Người theo dõi", width: 100, dataIndex: "address", key: "8" },
  { title: "Kết quả", width: 100, dataIndex: "address", key: "8" },
  { title: "Tiến độ", width: 100, dataIndex: "address", key: "8" },
  { title: "Điểm", width: 100, dataIndex: "address", key: "8" },
  { title: "Xu hướng", width: 100, dataIndex: "address", key: "8" },
  {
    title: "Mức thưởng đạt được",
    width: 100,
    dataIndex: "address",
    key: "8",
    render: (text: string) => <div style={{ color: "red" }}>{text}</div>,
  },
  {
    title: "Chức năng",
    key: "operation",
    fixed: "right",
    width: 120,
    render: (record) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* chưa xử lý loading */}
        <Link className={styles.btnAction} href={`http://localhost:3000/theo-doi-kpi-don-muc-tieu/cap-nhat-ket-qua/${record.key}`}>
          <SyncOutlined rev={undefined} style={{ paddingRight: "4px" }} />
          Cập nhật
        </Link>
        <button className={styles.btnAction} style={{ color: "red", marginTop: "8px" }} onClick={() => handleClickDeleteBtn(record)}>
          <DeleteOutlined rev={undefined} style={{ paddingRight: "6px" }} />
          Xóa
        </button>
      </div>
    ),
  },
];

export default function SingleKPI(props: AboutPageAProps) {
  const handleExportExcel = () => {
    // Code to export data to Excel
    const data = dataSource.map((record: any) => {
      return columns.map((column: any) => {
        if (_.isNil(column.dataIndex)) {
          return null;
        }
        return record[column.dataIndex];
      });
    });

    const filteredData = data.map((record: any) =>
      record.filter((value: any) => value !== null)
    );

    const worksheet = XLSX?.utils.aoa_to_sheet([
      columns.map((column: any) => column.title),
      ...filteredData,
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      type: "array",
      bookType: "xlsx",
    });
    const excelBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(excelBlob, "Theo-doi-KPI.xlsx");
  };

  return (
    <>
      <Head>
        <title> Theo dõi KPI đơn mục tiêu </title>
        <meta name="keywords" content="coders" />
      </Head>
      <Layout>
        <div className={styles.follow}>
          <div className={styles.top}>
            {/* Component Hướng dẫn */}
            <HowTo />
          </div>
          <div className={styles.formSearch}>
            {/* Grid search form */}
            <FormSearch />
          </div>
        </div>
        <div className={styles.main}>
          {/* Table */}
          {/* <CircularRate percentage={57}/> */}
          <div className={styles.header}>
            <p className={styles.textTittle}>Danh sách theo dõi KPI</p>
            <div className={styles.xuatExcel}>
              <button className={styles.btnExcel} onClick={handleExportExcel}>
                <Excel className={styles.excelIcon} />
                Xuất file Excel
              </button>
            </div>
          </div>
          <div className={styles.table}>
            <TableFixed dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </Layout>
    </>
  );
}
