import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./header/Header";
import Navbar from "./navbar/Navbar";
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
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export default function App(props: any) {
  return (
    <Layout>
      <Sider style={siderStyle}>
        <Navbar />
      </Sider>
      {/* <Navbar/> */}
      <Layout>
        <img src="../public/logo/365logo.svg"/>
        <Header style={headerStyle}><HeaderComponent color="red"/></Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
