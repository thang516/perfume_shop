import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import "./main_page.scss";
import { useEffect } from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/introduction");
    }
  }, [location, navigate]);
  return (
    <MainLayout>
      <Header />
      <div className="main-page-container">
        <Outlet />  
      </div>
     <Footer/>
    </MainLayout>
  );
};

export default MainPage;
