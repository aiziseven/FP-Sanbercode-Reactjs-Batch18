import React from 'react';
import "antd/dist/antd.css";
import Login from './pages/Login/Login';
import { AppProvider } from './context/AppContext';
import LayoutMenu from './components/Menu/LayoutMenu/LayoutMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Menu/Sidebar/Routes';

function App() {
  const isLogin = localStorage.getItem('isLogin');
  return (
    <AppProvider>
      <Router>
        {/* <Login /> */}
        {isLogin == 1 ?
          <LayoutMenu>
            <Routes />
          </LayoutMenu>
          :
          <Routes />}
      </Router>
    </AppProvider>
  );
}

export default App;