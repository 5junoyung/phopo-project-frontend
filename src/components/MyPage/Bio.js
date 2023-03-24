import React, { useState, useRef } from "react";
import "../../css/mypage.css";
import "../../css/Bio.css";
import Header from "../Layout/MyPageHeader";
import Footer from "../Layout/footer";
import { EditOutlined, CameraOutlined, SaveOutlined } from "@ant-design/icons";
// 버튼을 통해서만 편집이 가능하기 때문에
// 권한이 없는 사용자일 경우 버튼을 가리고
// 권한이 있는 사용자일 경우 버튼을 표시하여 구분할 예정
export default function Bio() {
  // ==== 이미지 부분 ====
  const [BioImage, setBioImage] = useState(
    "https://pbs.twimg.com/media/DumtB0bUwAA2k7U.jpg" // 임시 이미지
  );
  const BioFileInput = useRef(null);
  const [BioFile, setBioFile] = useState("");

  const onChangeBioImage = (e) => {
    if (e.target.files[0]) {
      setBioFile(e.target.files[0]);
    } else {
      setBioImage(BioImage); // 업로드 취소할 시 기존이미지 유지
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBioImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  //  ==== 텍스트 부분 ====
  const [text, setText] =
    useState(`압구정동 찻집에서 만난 백다흠 씨는 인근 로데오 거리에 어울리는 상큼한 모습으로 나타났다.
    김훈 고은 공지영 신경숙 은희경 윤대녕 김인숙 김경욱 김영하 등 내로라하는 문인 60여 명을 렌즈로 담아냈으니 자신감이 툭 배어나올 것 같은데 정반대였다.
    천천히 신중하게 말하는 스타일인 그는 “사진이 좋다는 얘기가 퍼지면서 의뢰가 많아진 거 아니냐”고 물어야 마지못해 “입소문이 재미있고 무섭던데요”라고 했다.
    “백 작가한테 안찍으면 일류가 아니라는 말 나오겠다”고 하자 “그렇게 생각해주시면 너무 고맙지요”라고 가까스로 대답했다.
    그러면서 “사람 찍는 게 가장 어려워요”라고 했다.`);
  //   editable은 읽기모드 또는 편집가능 상태로 만들기
  const [editable, setEditable] = useState(false);
  const editToggle = () => {
    setEditable(!editable);
  };
  //   handleChange는 input 상태일 때 내용의 변화를 감지해서 text를 바꾸어준다.
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="profile_author">
        <div>
          {/* 이미지 부분 */}
          <img src={BioImage} alt="BioImage" />
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/jpg,image/png,image/jpeg"
            name="profile_img"
            onChange={onChangeBioImage}
            ref={BioFileInput}
          />
          <div>
            {/* 이미지 편집 버튼 */}
            <span
              id="BioEditSpan"
              onClick={() => {
                BioFileInput.current.click();
              }}
            >
              <CameraOutlined style={{ fontSize: "40px" }} />
              &nbsp; 사진 변경
            </span>
            {/* 편집 On/Off 버튼*/}
            {editable ? (
              <span id="BioEditSpan" onClick={() => editToggle()}>
                <SaveOutlined style={{ fontSize: "40px" }} />
                &nbsp; 소개글 저장
              </span>
            ) : (
              <span id="BioEditSpan" onClick={() => editToggle()}>
                <EditOutlined style={{ fontSize: "40px" }} />
                &nbsp; 소개글 변경
              </span>
            )}
          </div>
        </div>
        <br />
        {/* 소개글 부분 */}
        {/* editable의 값에 따라 readOnly를 on/off 해줍니다 */}
        {editable ? (
          <textarea
            rows={10}
            value={text}
            onChange={(e) => handleChange(e)}
            id="BioTextareaEditOn"
          />
        ) : (
          <textarea id="BioTextareaEditOff" rows={10} readOnly>
            {text}
          </textarea>
        )}
      </div>
      <Footer />
    </div>
  );
}
