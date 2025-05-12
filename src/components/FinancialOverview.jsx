import { Card, Col, Row, Statistic, Progress } from 'antd';
import customers from '../data/customers.json';

const FinancialOverview = () => {
  const totalIncome = customers.reduce((sum, c) => sum + c.monthlyIncome, 0);
  const totalExpenses = customers.reduce((sum, c) => sum + c.monthlyExpenses, 0);
  const balanceProgress = (totalExpenses / totalIncome) * 100;

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="Total Income" value={totalIncome} prefix="$" />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Total Expenses" value={totalExpenses} prefix="$" />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Expense Ratio" value={`${balanceProgress.toFixed(1)}%`} />
          <Progress percent={balanceProgress} status="active" />
        </Card>
      </Col>
    </Row>
  );
};

export default FinancialOverview;
