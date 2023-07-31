import React from "react";
import { Form, Input, Button, Row, Col, Select, DatePicker } from "antd";
import dayjs from 'dayjs';

import styles from "./formSearch.module.css";

const FormComponent = () => {
  const dateFormat = 'YYYY/MM/DD';

  const onFinish = (values: any) => {
    console.log("Form data:", values);
  };

  return (
    <Form onFinish={onFinish} className={styles.formSearch}>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Form.Item name="field1">
            <Select
              showSearch
              // style={{ width: 200 }}
              placeholder="Chọn phòng ban"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "Not Identified",
                  label: "Not Identified",
                },
                {
                  value: "Closed",
                  label: "Closed",
                },
                {
                  value: "Communicated",
                  label: "Communicated",
                },
                {
                  value: "Identified",
                  label: "Identified",
                },
                {
                  value: "Resolved",
                  label: "Resolved",
                },
                {
                  value: "Cancelled",
                  label: "Cancelled",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="field2">
          <Select
              showSearch
              // style={{ width: 200 }}
              placeholder="Chọn tổ"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "Not Identified",
                  label: "Not Identified",
                },
                {
                  value: "Closed",
                  label: "Closed",
                },
                {
                  value: "Communicated",
                  label: "Communicated",
                },
                {
                  value: "Identified",
                  label: "Identified",
                },
                {
                  value: "Resolved",
                  label: "Resolved",
                },
                {
                  value: "Cancelled",
                  label: "Cancelled",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="field3">
          <Select
              showSearch
              // style={{ width: 200 }}
              placeholder="Chọn nhóm"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "Not Identified",
                  label: "Not Identified",
                },
                {
                  value: "Closed",
                  label: "Closed",
                },
                {
                  value: "Communicated",
                  label: "Communicated",
                },
                {
                  value: "Identified",
                  label: "Identified",
                },
                {
                  value: "Resolved",
                  label: "Resolved",
                },
                {
                  value: "Cancelled",
                  label: "Cancelled",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="field4">
          <Select
              showSearch
              // style={{ width: 200 }}
              placeholder="Chọn nhân viên"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "Not Identified",
                  label: "Not Identified",
                },
                {
                  value: "Closed",
                  label: "Closed",
                },
                {
                  value: "Communicated",
                  label: "Communicated",
                },
                {
                  value: "Identified",
                  label: "Identified",
                },
                {
                  value: "Resolved",
                  label: "Resolved",
                },
                {
                  value: "Cancelled",
                  label: "Cancelled",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="field5">
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} style={{width: '100%'}}/>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="field6">
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} style={{width: '100%'}}/>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="field7">
          <Select
              showSearch
              // style={{ width: 200 }}
              placeholder="Chọn KPI"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "Not Identified",
                  label: "Not Identified",
                },
                {
                  value: "Closed",
                  label: "Closed",
                },
                {
                  value: "Communicated",
                  label: "Communicated",
                },
                {
                  value: "Identified",
                  label: "Identified",
                },
                {
                  value: "Resolved",
                  label: "Resolved",
                },
                {
                  value: "Cancelled",
                  label: "Cancelled",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Button type="primary" htmlType="submit" className={styles.btn}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
