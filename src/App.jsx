import { useState } from 'react';
import {
  Layout,
  Menu,
  Typography,
  Switch,
  ConfigProvider,
  theme as antdTheme,
} from 'antd';

import {
  DashboardOutlined,
  BarChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { SunOutlined,BulbOutlined, MoonOutlined } from '@ant-design/icons'; //<SunOutlined />

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import RiskCharts from './pages/RCharts';
import Customers from './pages/Customers';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider  //ChatGpt is used to add this line
      theme={{
        algorithm: darkMode
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#13c2c2',
          colorBgContainer: darkMode ? '#141414' : '#fff',
        },
      }}
    >
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
       
        <Sider
          breakpoint="md" // 🔥 Collapse at medium screen width (768px)
          collapsedWidth="0"
          onBreakpoint={(broken) => setCollapsed(broken)}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            backgroundColor: '#001529', // Always dark navy
            transition: 'all 0.3s ease',
          }}
        >

          <div
            style={{
              color: '#fff',
              padding: '16px',
              fontWeight: 'bold',
              fontSize: '20px',
              textAlign: 'center',
              borderBottom: '1px solid #1f1f1f',
            }}
          >
            {collapsed ? 'KH' : 'KYC Hub'}
          </div>

          <Menu
            theme="dark" // 💡 always dark menu since sidebar is dark
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              backgroundColor: 'transparent',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >

              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<BarChartOutlined />}>
                <Link to="/risk">Risk Charts</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                <Link to="/customers">Customers</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Header
              style={{
                backgroundColor: darkMode ? '#141414' : '#fff',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Title level={3} style={{ margin: 0, color: darkMode ? '#fff' : '#000' }}>
                Credit Risk Dashboard
              </Title>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {darkMode ? <MoonOutlined style={{ fontSize: '18px', color: '#fff' }} /> 
                    : <SunOutlined  style={{ fontSize: '18px', color: '#000' }} />}
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                />
            </div>

            </Header>

            <Content style={{ margin: '16px', padding: '16px', backgroundColor: darkMode ? '#141414' : '#fff', borderRadius: '8px' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/risk" element={<RiskCharts />} />
                <Route path="/customers" element={<Customers />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
