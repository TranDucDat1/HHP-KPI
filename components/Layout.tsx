import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./header/Header";
import Navbar from "./navbar/Navbar";
import styles from "./layout.module.css";
import { MenuTabIcon } from "./data/icon";
// import menuTab from "../public/logo/icon-menu-tab.svg"

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "white",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
};

const siderWrapperStyle: React.CSSProperties = {
  display: "flex",       // Sử dụng flex để điều chỉnh chiều rộng của Sider
  flexDirection: "row", // Thiết lập chiều sắp xếp theo hàng ngang (hoặc column nếu bạn muốn theo cột)
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export default function App(props: any) {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Navbar/>
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          {/* <MenuTabIcon className={styles.hideOnSmallScreen}/> */}
          <HeaderComponent color="red"/>
        </div>
        <div className={styles.content}>
          Content
        </div>
      </div>
    </div>
    // <Layout>
    //   <div style={siderWrapperStyle}>
    //     <Sider style={siderStyle}>
    //       <Navbar />
    //     </Sider>
    //   </div>
    //   {/* <Navbar/> */}
    //   <Layout>
    //     {/* <img src="../public/logo/365logo.svg"/> */}
    //     <Header style={headerStyle}><HeaderComponent color="red"/></Header>
    //     <Content style={contentStyle}>Content</Content>
    //     <Footer style={footerStyle}>Footer</Footer>
    //   </Layout>
    // </Layout>
  );
}
