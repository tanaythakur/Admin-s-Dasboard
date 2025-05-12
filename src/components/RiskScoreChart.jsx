import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  import customers from '../data/customers.json';
  
  const calculateRiskScore = (creditScore, repaymentHistory, income, loans) => {
    const missedPayments = repaymentHistory.filter((p) => p === 0).length;
    const ratio = loans / income;
    return Math.min(100, 100 - creditScore / 10 + missedPayments * 5 + ratio * 10);
  };
  
  const RiskScoreChart = () => {
    const data = customers.map((c) => ({
      name: c.name,
      risk: calculateRiskScore(
        c.creditScore,
        c.loanRepaymentHistory,
        c.monthlyIncome,
        c.outstandingLoans
      ),
    }));
  
    return (
      <ResponsiveContainer width="100%" height={300}>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="risk" fill="#f5222d" />
      </BarChart>
      </ResponsiveContainer> //AutoComplete code completion
    );
  };
  
  export default RiskScoreChart;
  