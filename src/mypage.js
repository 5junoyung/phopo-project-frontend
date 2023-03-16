import { useNavigate } from "react-router-dom";
import React from "react";
import Slider_img from "./slider_img";
import MypageTest from "./MypageTest";
import "./css/mypage.css";

export default function Mypage() {
  const movePage = useNavigate();

  function gobio() {
    movePage("/bio");
  }

  function gobuy() {
    movePage("/buy");
  }

  function gohome() {
    movePage("/");
  }

  return (
    <div>
      <header>
        <h2 className="mypage_header">pho_po</h2>
        <button onClick={gohome}>홈화면</button>
      </header>
      <div className="mypage_menu">
        <a href="http://localhost:3000/mypage">
          <h3 className="mypage_id">Han Yongjae</h3>
        </a>
        <button className="button_active" onClick={gobio}>
          작가소개
        </button>
        <button className="button_active" onClick={gobuy}>
          사진구매
        </button>
        <button className="button_active">업로드</button>
      </div>
      <div className="mypage_slider">
        <MypageTest />
      </div>
    </div>
  );
}
