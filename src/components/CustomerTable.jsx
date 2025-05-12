import { useState } from 'react';
import { Table, Tag, Form, Select, InputNumber, Row, Col, Button } from 'antd';
import customers from '../data/customers.json';

const { Option } = Select;

const CustomerTable = () => {
  const [filteredData, setFilteredData] = useState(customers);

  const [form] = Form.useForm();

  const handleFilter = (values) => {
    const { status, minCreditScore } = values;

    const newData = customers.filter((customer) => {
      const statusMatch = status ? customer.status === status : true;
      const creditScoreMatch = minCreditScore
        ? customer.creditScore >= minCreditScore
        : true;

      return statusMatch && creditScoreMatch;
    });

    setFilteredData(newData);
  };

  const handleReset = () => {
    form.resetFields();
    setFilteredData(customers);
  };

  const columns = [
    { title: 'ID', dataIndex: 'customerId', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Income',
      dataIndex: 'monthlyIncome',
      key: 'income',
      sorter: (a, b) => a.monthlyIncome - b.monthlyIncome,
    },
    {
      title: 'Expenses',
      dataIndex: 'monthlyExpenses',
      key: 'expenses',
      sorter: (a, b) => a.monthlyExpenses - b.monthlyExpenses,
    },
    {
      title: 'Credit Score',
      dataIndex: 'creditScore',
      key: 'credit',
      sorter: (a, b) => a.creditScore - b.creditScore,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Approved' ? 'green' : status === 'Review' ? 'gold' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFilter}
        style={{ marginBottom: 20 }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="status" label="Status">
              <Select allowClear placeholder="Select status">
                <Option value="Approved">Approved</Option>
                <Option value="Review">Review</Option>
                <Option value="Rejected">Rejected</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}> 
            <Form.Item name="minCreditScore" label="Min Credit Score">
              <InputNumber style={{ width: '100%' }} min={300} max={850} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
              Filter
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      </Form>

      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="customerId"
        pagination={{ pageSize: 5 }}
        scroll={{ x: 'max-content' }}
      />
    </>
  );
};

export default CustomerTable;
