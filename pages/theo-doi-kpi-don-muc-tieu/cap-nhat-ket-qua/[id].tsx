import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Button, Form, Modal, Select, Collapse } from 'antd';

import Layout from "../../../components/Layout";
import KpiHeader from "../../../components/theoDoiKpi/kpiMucTieuHeader/kpiheader";
import styles from "../../../styles/cap-nhat-ket-qua/index.module.css";
import CircularRate from "../../../components/circularRate/circularRate";
import Progress from "../../../components/progress/progress";
import { IconNhom, IconVoteBlue, IconResultBlue, IconCommentBlue } from "../../../components/data/icon";

export interface UpdateKPIProps {}

export default function UpdateKPI(props: UpdateKPIProps) {
  const router = useRouter();

  const [modalAddResult, setModalAddResult] = useState(false);

  const handleClickDetailKpi = () =>{
    router.push(`http://localhost:3000/theo-doi-kpi-don-muc-tieu/chi-tiet-kpi/${123}`);
  }

  const handleClickModalButtonOk = () => {
    // send data
    console.log(123);

    setModalAddResult(false);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  return (
    <>
      <Head>
        <title> Theo dõi KPI đơn mục tiêu </title>
        <meta name="keywords" content="name" />
      </Head>
      <Layout>
        <KpiHeader tittle="Chi tiết KPI Test tiếp / Cập nhật KPI"/>
        <div className={styles.main}>
          <div className={styles.updateResult}>
            <div className={styles.updateSection}>
              <div className={styles.infoKpi}>
                <div className={styles.infoKpi1}>
                  <div className={styles.infoKpiV1}>
                    <div>
                      <IconNhom className={styles.iconFriend} />
                    </div>
                    <div className={styles.infoUser}>
                      <p className={styles.infoText}>Kỹ thuật: test tiếp</p>
                      <div>
                        <span className={styles.infoText1}>16 thành viên</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ratingIcon}>
                    <CircularRate percentage={56} />
                  </div>
                </div>
                <div className={styles.infoKpi2}>
                  <p className={styles.text1}>chỉ tiêu - khách hàng</p>
                  <p className={styles.text2}>
                    mục tiêu:
                    <span className={styles.text3}> chỉ tiêu - 1 tiền</span>
                  </p>
                  <p className={styles.text2}>
                    Thời gian KPI:
                    <span className={styles.text3}>
                      {" "}
                      28/07/2023 - 29/07/2023
                    </span>
                  </p>
                  <p className={styles.text2}>
                    Trọng số:
                    <span className={styles.text3}> 1%</span>
                  </p>
                  <p className={styles.text2}>
                    Kết quả hiện tại:
                    <span className={styles.text3}> 0 tiền</span>
                  </p>
                </div>
              </div>
              <div className={styles.resultUpdate}>
                <div className={styles.resultVote}>
                  <IconVoteBlue className={styles.iconVoteBlue}/>
                  <p className={styles.infoText}>Đánh giá</p>
                </div>
                <div className={styles.resultVote2}>
                  <p className={styles.text2}>
                    Điểm:
                    <span className={styles.text3}> Chưa thiết lập</span>
                  </p>
                  <p className={styles.text2}>
                    Xu hướng:
                    <span className={styles.text3}> Chưa thiết lập</span>
                  </p>
                  <p className={styles.text2}>
                    Thưởng:
                    <span className={styles.text3} style={{color: "red"}}> Chưa có thưởng</span>
                  </p>
                </div>
              </div>
              <div className={styles.result}>
                <div className={styles.result1}>
                  <div className={styles.result1a}>
                    <IconResultBlue className={styles.IconResultBlue}/>
                    <p className={styles.infoText}>Kết quả đạt được</p>
                  </div>
                  <Button type="primary" onClick={() => setModalAddResult(true)} className={styles.btnAddResult}>
                    + Thêm kết quả
                  </Button>
                </div>
                <div className={styles.result2}>
                  <div className={styles.result2a}>
                    <Collapse
                      items={[{ key: '1', label: 'Tháng 07/2023', children: <p>{text}</p> }]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.commentSection}>
              <div className={styles.commentText}>
                <IconCommentBlue className={styles.iconCommentBlue}/>
                <p className={styles.infoText}>Bình luận</p>
              </div>
              <div className={styles.showComment}>
                {/* bao giờ thấy comment thì tạo vào đây */}
              </div>
            </div>
          </div>
          <div className={styles.tablet}>
            <div className={styles.tabletUpdate2}>
              <div className={styles.tabletUpdate2a}>
                <div className={`${styles.mb3} ${styles.dUpdate2aLink}`}>
                  <div className={styles.dShowLink}>
                    <IconNhom/>
                    <div>
                      <button onClick={handleClickDetailKpi} className={styles.btnClickLinkKPI}>
                        <p className={styles.dShowText}>TestKPI - Biên Tập</p>
                      </button>
                    </div>
                  </div>
                  <p className={styles.dTextLink}>KPI Phòng ban: 28/07/2023 - 29/07/2023</p>
                  <div className={styles.dShow2}>
                    <Progress percentage={90}/>
                  </div>
                </div>
              </div>
              <div className={`${styles.tabletUpdate2a} ${styles.mb3}`}>
                <div className={styles.support}>
                  <p className={styles.textSp}>
                  Nếu bạn thấy chưa thực sự tự tin hoặc gặp khó khăn khi thực hiện hãy bấm trợ giúp để Quản lý và Người theo dõi hỗ trợ. 
                  </p>
                  {/* <button className={styles.dButton} onClick={() => setModalAddResult(true)}>Trợ giúp</button> */}
                  <button className={styles.dButton}>Trợ giúp</button>
                </div>
              </div>
              <div className={`${styles.tabletUpdate2a} ${styles.mb3}`}>
                <div className={styles.dConnect}>
                  <p className={styles.dShowText}>Kết nối kênh</p>
                </div>
                <div className={styles.p3}>
                  <div className={styles.dShowConnect}>
                    <p className={styles.dTextSp}>Chưa có kết nối</p>
                  </div>
                  <div className={styles.dConnect3}>
                    <button className={styles.dConnect3a}>Kết nối nhanh</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          <Modal
            title="Thêm kết quả"
            centered
            open={modalAddResult}
            onOk={handleClickModalButtonOk}
            onCancel={() => setModalAddResult(false)}
            cancelText = "Hủy"
            okText = "Xác nhận"
          >
          </Modal>
        </div>
      </Layout>
    </>
  );
}
