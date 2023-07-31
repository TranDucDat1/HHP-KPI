import React from 'react';
import { useRouter } from "next/dist/client/router";

import styles from "./kpiHeader.module.css";
import { IconMuitenDen } from "../../data/icon";

interface kpiHeaderProps {
  className?: string;
  onClick?: () => void;
  tittle: String
}

const KPIHeader: React.FC<kpiHeaderProps> = ({ className, onClick, tittle }) => {
  const router = useRouter();
  
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.header}>
    <button className={styles.btnBack} onClick={handleGoBack}>
      <IconMuitenDen className={styles.IconMuiTenDen} />
      {tittle}
    </button>
  </div>
  );
};

export default KPIHeader;