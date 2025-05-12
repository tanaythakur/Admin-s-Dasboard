import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import customers from '../data/customers.json';
  
  const IncomeExpenseChart = () => {
    const data = customers.map((c) => ({
      name: c.name,
      Income: c.monthlyIncome,
      Expenses: c.monthlyExpenses,
    }));
  
    return (
      <ResponsiveContainer width="100%" height={300}>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Expenses" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer> //AutoComplete code completion
    );
  };
  
  export default IncomeExpenseChart;
  