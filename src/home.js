import { useNavigate } from "react-router-dom";
import Header from "./components/Layout/header";
import "./css/App.css";
import "./components/Layout/header.css";
import Footer from "./components/Layout/footer";
import Main from "./components/sidebar";
import Login from "./login";

export default function Home() {
  const movePage = useNavigate();

  function goMypage() {
    movePage("/mypage");
  }

  function goManager() {
    movePage("/manager");
  }
  function goBoard() {
    movePage("/Board");
  }
  function goAdmin() {
    movePage("/Admin");
  }
  function goApexcharts() {
    movePage("/apexcharts");
  }

  return (
    <div>
      <button onClick={goMypage}>마이페이지 이동</button>
<<<<<<< HEAD
      <Login />
      <button onClick={goManager}>관리자 페이지 이동</button>
=======
      <button onClick={goLogin}>로그인 페이지 이동</button>
      <button onClick={goBoard}>게시판</button>
      <button onClick={goAdmin}>관리자페이지</button>
      <button onClick={goApexcharts}>Apexcharts 페이지 이동</button>
>>>>>>> 4237240b1c83c8cd962d780a60de52a08b7ef61d
      <div className="header">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}
