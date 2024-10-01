import error from "../../../assets/img/commingsoon.png";
import MainLayout from "../layout/MainLayout";
import "./error.scss";
export default function ErrorPage() {
  return (
    <MainLayout>
      <div className="main-page-container">
        <img className="error-image" src={error} alt="" />
      </div>
    </MainLayout>
  );
}
