import React from "react";
import { useRouter } from "next/dist/client/router";
import diacritic from 'diacritic';
import { ClusterOutlined } from '@ant-design/icons';
import { Select } from "antd";

import Head from "next/head";
import Layout from "@/components/Layout";
import KPIHeader from "@/components/theoDoiKpi/kpiMucTieuHeader/kpiheader";
import styles from "../../../styles/chi-tiet-kpi/index.module.css";
import CricularRate from "../../../components/circularRate/circularRate";
import Progress from "../../../components/progress/progress";

export interface DetailKPIProps {}

// hàm nãy sẽ để ra một thư mục untils là thư mục để chứa các hàm xử lý chuỗi, số, ngày tháng,...
function slugify(str: string) {
  const result = diacritic.clean(str);
  return result
    .toLowerCase() // Chuyển chuỗi về chữ thường
    .replace(/ /g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
    .replace(/[^\w-]+/g, ""); // Loại bỏ các ký tự không hợp lệ (nằm ngoài bảng chữ cái, chữ số, dấu gạch ngang)
}


export default function CreatePostPage(props: DetailKPIProps) {
  const router = useRouter();

  const options = [
    {
      value: "KPI phòng ban",
      lable: (
        <>
          <ClusterOutlined rev={undefined} />{" "}text
        </>
      ),
    },
    {
      value: "KPI tổ",
      lable: "KPI tổ"
    },
    {
      value: "KPI nhóm",
      lable: "KPI nhóm"
    },
    {
      value: "KPI cá nhân",
      lable: "KPI cá nhân"
    }
  ]

  const handleChangeAddKpi = (value: string) => {
    const beforeValue = slugify(value);
    router.push(`http://localhost:3000/theo-doi-kpi-don-muc-tieu/chi-tiet-kpi/them-moi-${beforeValue}`);
  };

  const handleChangeAction = (value?: string) => {

  };

  return (
    <>
      <Head>
        <title> Chi tiết KPI </title>
        <meta name="keywords" content="kpi" />
      </Head>
      <Layout>
        <KPIHeader tittle="Theo dõi KPI / Chi tiết KPI Biên Tập - TestKPI"/>
        <div className={styles.dDetailCom}>
          <div className={styles.dDetailComV1}>
            <div className={styles.dDetailCom1}>
              <CricularRate percentage={1}/>
              <div className={styles.dDetailCom1V2}>
                <p className={styles.dDetailComText}>Biên Tập - TestKPI</p>
                <p className={styles.dDetailComText1}>
                  KPI phòng ban:
                  <span className={styles.dDetailText}>28/07/2023 - 29/07/2023</span>
                </p>
                <p className={styles.dDetailComText3}>Trọng số: 1%</p>
                <p className={styles.dDetailComText3}>Trọng số còn lại: 99%</p>
                <div className={styles.dDetailFollow}>
                  <p className={styles.dDetailComText2}>Quản lý: </p>
                  <div className={styles.dDetailDetail}>
                    <img src="https://plus.unsplash.com/premium_photo-1689751148722-721230be7c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="anh" className={styles.dDetailImg}/>
                    <div className={styles.dDetailName}>
                      <p className={styles.dDetailText}>Uy Phùng Hiểu (Ken)</p>
                      <p className={styles.dDetailText1}>Kỹ thuật</p>
                    </div>
                  </div>
                  
                </div>
                <div className={styles.dDetailFollow}>
                  <p className={styles.dDetailComText2}>Người theo dõi: </p>
                  <p className={styles.dDetailText}>Chưa cập nhật</p>
                </div>
              </div>
            </div>
            <div className={styles.dDetailCom2}>
              {/* đoạn này sẽ thay bằng component dropdown */}
              <Select
                defaultValue="Thêm mới KPI"
                onChange={handleChangeAddKpi}
                style={{ width: '100%', marginBottom: '10px' }}
                options={options}
              />
              <Select
                defaultValue="Chức năng"
                onChange={handleChangeAction}
                style={{ width: '100%' }}
                options={options}

                optionLabelProp="label"
              />
            </div>
          </div>
          <div className={styles.dDetailComV2}>
            <div className={styles.dDetailScroll}>
              <div className={styles.dDetailComV2s}>
                <div className={styles.dDetail1}>
                  <p className={styles.dDetail1Text}>KPI</p>
                  <p className={styles.dDetail1Text1}>Quản lý</p>
                  <p className={styles.dDetail1Text2}>Thực hiện</p>
                  <p className={styles.dDetail1Text3}>Tiến độ</p>
                  <p className={styles.dDetail1Text4}>Chức năng</p>
                </div>
              </div>
              <div className={styles.dDetailComV2a}>
                <div className={styles.dDetailDiagram}>
                  <div className={styles.dPercentDetail1}>
                    <div className={styles.dPercentDetail1v1}>
                      <div className={styles.dClassDetail}>
                        <p className={styles.dPercentDetailV1Text}>KỸ THUẬT: test tiep</p>
                        <span className={styles.dDatetime}>28/07/2023 - 29/07/2023</span>
                      </div>
                      <div className={styles.dPercentDetailV1Text2}>
                        <img src="https://images.unsplash.com/photo-1690301458653-915ac42be8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=379&q=80" alt="hinh anh" className={styles.dImageName}/>
                        <p className={styles.dNameGroup}>Uy Phùng Hiểu (Ken)</p>
                      </div>
                      <div className={styles.dPercentDetailV1Text3}>
                        <img src="https://images.unsplash.com/photo-1690354600391-3e64397b5129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=379&q=80" alt="hinh anh" className={styles.dImageName}/>
                        <img src="https://images.unsplash.com/photo-1690354600391-3e64397b5129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=379&q=80" alt="hinh anh" className={styles.dImageName}/>
                        <div className={styles.dDetailDetail}>
                          <p className={styles.dDepartmentNumber}>+10</p>
                        </div>
                      </div>
                      <div className={styles.dPercentDetailV1Text3}>
                        <Progress percentage={10}/>
                      </div>
                      <div className={styles.dPercentDetailV1Text4}>
                        <Progress percentage={10}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dDetailDescription}></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
