import { MenuTabIcon, Message, IconWarning, IconNotify } from "../data/icon";
import styles from "./header.module.css";
interface HeaderProps {
  color?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div
      style={{
        backgroundColor: props.color ? props.color : "white",
        textAlign: "center",
        color: "#fff",
        height: "100%",
        width: "100%",
        paddingInline: 50,
        lineHeight: "64px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <MenuTabIcon className={styles.hideOnSmallScreen} />
      <div>
        <div><Message/></div>
        <div><IconWarning/></div>
        <div><IconNotify/></div>
        <div><img src="https://images.unsplash.com/photo-1690040158054-04a19549b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="ảnh" style={{width: "24px", height: "24px"}}/></div>
        <div>
          <p>Trần Đức Đạt</p>
          <p>ID: 957774</p>
        </div>
      </div>
    </div>
  );
}
