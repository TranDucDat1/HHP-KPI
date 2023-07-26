import { useEffect, useRef, useState } from "react";
import {
  MenuTabIcon,
  MessageBlue,
  MessageWhite,
  IconWarningBlue,
  IconWarningWhite,
  IconNotifyBlue,
  IconNotifyWhite,
} from "../data/icon";
import styles from "./header.module.css";
import Notify from "../notify/Notify";
import MoreOptionUser from "../moreUser/MoreOptionUser";
interface HeaderProps {
  color?: string;
}

export default function Header(props: HeaderProps) {
  const [clickOnMesBlue, setClickOnMesBlue] = useState(false);
  const [clickOnMesWhite, setClickOnMesWhite] = useState(false);
  const [clickOnNotifyBlue, setClickOnNotifyBlue] = useState(false);
  const [clickOnNotifyWhite, setClickOnNotifyWhite] = useState(false);
  const [clickOnWarningBlue, setClickOnWarningBlue] = useState(false);
  const [clickOnWarningWhite, setClickOnWarningWhite] = useState(false);
  const [clickOnInfoUser, setClickOnInfoUser] = useState(false);

  const notifyRefMesBlue = useRef<HTMLDivElement>(null);
  const notifyRefMesWhite = useRef<HTMLDivElement>(null);
  const notifyRefWarningBlue = useRef<HTMLDivElement>(null);
  const notifyRefWarningWhite = useRef<HTMLDivElement>(null);
  const notifyRefNotifyBlue = useRef<HTMLDivElement>(null);
  const notifyRefNotifyWhite = useRef<HTMLDivElement>(null);
  const notifyRefOnclickInfoUser = useRef<HTMLDivElement>(null);
  // console.log("notifyRefMesBlue", notifyRefMesBlue);

  const handleClickOnMesBlue = () => {
    setClickOnMesBlue(!clickOnMesBlue);
  };
  const handleClickOnMesWhite = () => {
    setClickOnMesWhite(!clickOnMesWhite);
  };
  const handleClickOnNotifyBlue = () => {
    setClickOnNotifyBlue(!clickOnNotifyBlue);
  };
  const handleClickOnNotifyWhite = () => {
    setClickOnNotifyWhite(!clickOnNotifyWhite);
  };
  const handleClickOnWarningBlue = () => {
    setClickOnWarningBlue(!clickOnWarningBlue);
  };
  const handleClickOnWarningWhite = () => {
    setClickOnWarningWhite(!clickOnWarningWhite);
  };
  const handleClickOnInfoUser = () => {
    setClickOnInfoUser(!clickOnInfoUser);
  }

  const handleOutsideClickOut = (e: any) => {
    // Kiểm tra xem có click bên ngoài component Notify không
    if (
      notifyRefMesBlue.current &&
      !notifyRefMesBlue.current.contains(e.target)
    ) {
      setClickOnMesBlue(false);
    }
    if (
      notifyRefNotifyBlue.current &&
      !notifyRefNotifyBlue.current.contains(e.target)
    ) {
      setClickOnNotifyBlue(false);
    }
    if (
      notifyRefWarningBlue.current &&
      !notifyRefWarningBlue.current.contains(e.target)
    ) {
      setClickOnWarningBlue(false);
    }
    if (
      notifyRefMesWhite.current &&
      !notifyRefMesWhite.current.contains(e.target)
    ) {
      setClickOnMesWhite(false);
    }
    if (
      notifyRefNotifyWhite.current &&
      !notifyRefNotifyWhite.current.contains(e.target)
    ) {
      setClickOnNotifyWhite(false);
    }
    if (
      notifyRefWarningWhite.current &&
      !notifyRefWarningWhite.current.contains(e.target)
    ) {
      setClickOnWarningWhite(false);
    }
    // console.log('notifyRefOnclickInfoUser.current.contains(e.target)', notifyRefOnclickInfoUser?.current?.contains(e.target));
    // console.log('!notifyRefWarningWhite.current.contains(e.target)', !notifyRefWarningWhite.current.contains(e.target));
    
    if (notifyRefOnclickInfoUser.current && !notifyRefOnclickInfoUser.current.contains(e.target)) {
      setClickOnInfoUser(false);
    }
  };


  const handleOutSideClickOnUserInfo = (e: any) => {

  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClickOut);
    return () => {
      document.removeEventListener("click", handleOutsideClickOut);
    };
  }, []);

  return (
    <div className={styles.header}>
      <MenuTabIcon className={styles.hideOnSmallScreen} />
      <div className={styles.headerRight}>
        <div
          className={`${styles.dropdown} ${styles.hideOnIconMessageBlue}`}
          onClick={handleClickOnMesBlue}
          ref={notifyRefMesBlue}
        >
          <MessageBlue />
          <span className={styles.badge}>0</span>
          {clickOnMesBlue && (
            <Notify onClick={handleClickOnMesBlue} />
          )}
        </div>
        <div
          className={`${styles.dropdown} ${styles.hideOnIconMessageWhite}`}
          onClick={handleClickOnMesWhite}
          ref={notifyRefMesWhite}
        >
          <MessageWhite />
          <span className={styles.badge}>1</span>
          {clickOnMesWhite && <Notify onClick={handleClickOnMesWhite} />}
        </div>
        <div
          className={`${styles.dropdown} ${styles.hideOnIconWarningBlue}`}
          onClick={handleClickOnWarningBlue}
          ref={notifyRefWarningBlue}
        >
          <IconWarningBlue />
          <span className={styles.badge}>2</span>
          {clickOnWarningBlue && <Notify onClick={handleClickOnWarningBlue} />}
        </div>
        <div
          className={`${styles.dropdown} ${styles.hideOnIconWarningWhite}`}
          onClick={handleClickOnWarningWhite}
          ref={notifyRefWarningWhite}
        >
          <IconWarningWhite />
          <span className={styles.badge}>3</span>
          {clickOnWarningWhite && (
            <Notify onClick={handleClickOnWarningWhite} />
          )}
        </div>
        <div
          className={`${styles.dropdown} ${styles.hideOnIconNotifyBlue}`}
          onClick={handleClickOnNotifyBlue}
          ref={notifyRefNotifyBlue}
        >
          <IconNotifyBlue />
          <span className={styles.badge}>4</span>
          {clickOnNotifyBlue && <Notify onClick={handleClickOnNotifyBlue} />}
        </div>
        <div
          className={`${styles.dropdown} ${styles.hideOnIconNotifyWhite}`}
          onClick={handleClickOnNotifyWhite}
          ref={notifyRefNotifyWhite}
        >
          <IconNotifyWhite />
          <span className={styles.badge}>5</span>
          {clickOnNotifyWhite && <Notify onClick={handleClickOnNotifyWhite} />}
        </div>
        {/* <div className={styles.dropdown} onClick={handleClickOnInfoUser} ref={notifyRefOnclickInfoUser}>
          <div className={styles.headerInfoUser}>
            <div><img src="https://images.unsplash.com/photo-1690040158054-04a19549b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="ảnh" className={styles.avtUser}/></div>
            <div className={styles.info}>
              <p className={styles.nameUser}>Trần Đức Đạt</p>
              <p className={styles.verticalBar}>|</p>
              <p className={styles.nameUserInfo}>ID: 957774</p>
            </div>
          </div>
          {clickOnInfoUser && <MoreOptionUser/>}
        </div> */}
        <div
          className={styles.dropdown}
          onClick={handleClickOnInfoUser}
          // ref={notifyRefOnclickInfoUser}
        >
          <div className={styles.headerInfoUser}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1690040158054-04a19549b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="ảnh"
                className={styles.avtUser}
              />
            </div>
            <div className={styles.info}>
              <p className={styles.nameUser}>Trần Đức Đạt</p>
              <p className={styles.verticalBar}>|</p>
              <p className={styles.nameUserInfo}>ID: 957774</p>
            </div>
          </div>
          {clickOnInfoUser && <MoreOptionUser/>}
          {/* vấn đề không hiện modal Logout có thể là do sự kiện 'Click' -- sửa sau */}
        </div>
      </div>
    </div>
  );
}
