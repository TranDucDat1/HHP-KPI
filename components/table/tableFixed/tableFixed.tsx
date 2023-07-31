import { Table, Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

//i try change color of thead tag but it dont working
// import './tablefixed.module.css';

interface TableExportButtonProps {
  dataSource: any[]; // Dữ liệu bảng
  columns: any[]; // Các cột bảng
}

const TableFixed: React.FC<TableExportButtonProps> = ({ dataSource, columns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleChangePageNumber = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: dataSource.length,
        }}
        scroll={{ x: 1300 }}
        // className={styles.headerRow}
        onChange={handleChangePageNumber}
      />
      {/* <Button icon={<ExportOutlined rev={undefined} />} onClick={handleExportExcel}>
        Export Excel
      </Button> */}
    </div>
  );
};

export default TableFixed;
