import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, Space } from 'antd';
import HomePage from './pages/HomePage';
import ObservationPage from './pages/ObservationPage';
import FloraPage from './pages/FloraPage';
import FaunaPage from './pages/FaunaPage';
import HabitatPage from './pages/HabitatPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { UserProvider } from './contexts/UserContext';
import { ObservationProvider } from './contexts/ObservationContext';
import { FloraProvider } from './contexts/FloraContext';
import { FaunaProvider } from './contexts/FaunaContext';
import { HabitatProvider } from './contexts/HabitatContext';
import AddObservationPage from './pages/AddObservationPage';
import AddHabitatPage from './pages/AddHabitateContext';
import AddFaunaPage from './pages/AddFaunaPage';
import AddFloraPage from './pages/AddFloraPage';
import { initializeApp } from 'firebase/app';
import { LoadingProvider } from './contexts/LoadingContext';
import bgImage from "./assets/background.jpg"
import SignIn from './pages/Signin';
import Register from './pages/Register';
import FaunaDetailsPage from './pages/FaunaDetailsPage';
import DonationPage from './pages/DonationPage';

const firebaseConfig = {
  apiKey: "AIzaSyCb7Yo6jbsA30D0P8eQEtWLkrNAMeuQw4U",
  authDomain: "marioblog-ad8e5.firebaseapp.com",
  projectId: "marioblog-ad8e5",
  storageBucket: "marioblog-ad8e5.appspot.com",
  messagingSenderId: "134259039673",
  appId: "1:134259039673:web:d7b32a238ef0492bbeea68"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const { Header, Content, Footer } = Layout;

function Navbar() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  const navigate = useNavigate()
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="10">
          <img 
          style={{
            width : "50px",
            height : "50px",
            margin : "6px"
          }}
          src="https://firebasestorage.googleapis.com/v0/b/marioblog-ad8e5.appspot.com/o/images%2FLOGO.png?alt=media&token=a7f044a5-dddb-4c54-baad-9a37d6b7d230"/>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/observations">Observations</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/flora">Flora</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/fauna">Fauna</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/habitats">Habitats</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/donations">Donations</Link>
        </Menu.Item>

        <Menu.Item key="6">
          {
            localStorage.getItem("uid") != null ?
              <Button
                onClick={(e) => {
                  localStorage.clear()
                  navigate("/signin")
                }}
              >
                Sign Out
              </Button>
              : <Button
                onClick={(e) => {
                  navigate("/signin")
                }}
              >
                Login
              </Button>
          }
        </Menu.Item>
      </Menu>



    </Header>
  );
}

function App() {
  return (
    <Router>
      <LoadingProvider>
        <UserProvider>
          <ObservationProvider>
            <FloraProvider>
              <FaunaProvider>
                <HabitatProvider>
                  <Layout className="layout">
                    <Navbar />
                    <Content style={{
                      position: "relative",
                      height: "auto",
                      overflow: "hidden",
                      backgroundImage: `url(${bgImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      minHeight :"100vh"

                    }}>
                      <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/observations" element={<ObservationPage />} />
                        <Route path="/flora" element={<FloraPage />} />
                        <Route path="/fauna" element={<FaunaDetailsPage />} />
                        <Route path="/fauna/:category" element={<FaunaPage />} />
                        <Route path="/habitats" element={<HabitatPage />} />
                        <Route path="/add-observation" element={<AddObservationPage />} />
                        <Route path="/add-flora" element={<AddFloraPage />} />
                        <Route path="/add-fauna" element={<AddFaunaPage />} />
                        <Route path="/add-habitat" element={<AddHabitatPage />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/donations" element={<DonationPage />} />
                        <Route path="/" element={<HomePage />} />
                      </Routes>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Life on Land Tracker ©2023 Created by You</Footer>
                  </Layout>
                </HabitatProvider>
              </FaunaProvider>
            </FloraProvider>
          </ObservationProvider>
        </UserProvider>
      </LoadingProvider>
    </Router >
  );
}

export default App;
