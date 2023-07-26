import React, { useState } from 'react';
import { Modal } from 'antd';

interface LogOutProps {
  className?: string;
  onClick?: () => void;
}

const LogOut: React.FC<LogOutProps> = ({ className, onClick }) => {
  const [modalOpen, setModalOpen] = useState(false); 
  console.log('modal open', modalOpen);
  

  // const handleOpenModal = () => {
  //   console.log('handleOpenModal', 123);
  //   setModalOpen(true);
  // }
  return (
    <>
      <p className={className} onClick={() => setModalOpen(true)}>Đăng xuất</p>
      <Modal
        title="Đăng xuất"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>Bạn có chắc muốn đăng xuất</p>
        {/* thêm icon logout vào đây */}
      </Modal>
    </>
  );
};

export default LogOut;