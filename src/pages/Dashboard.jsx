import FinancialOverview from '../components/FinancialOverview';
import IncomeExpenseChart from '../components/IncomeExpenseChart';
import RiskScoreChart from '../components/RiskScoreChart';

const Dashboard = () => (
  <>
    <FinancialOverview />
    <IncomeExpenseChart />
    <RiskScoreChart />
  </>
);

export default Dashboard;