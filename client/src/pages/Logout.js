
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


// 모달 로그아웃 버튼
const L = styled.button`
  width: 100px;
  height: 100px;
  padding: 10px;
  color: white;
  font-size: 13px;
  background: rgb(88 101 242);
  border-radius: 10px;
`;

// 모달 실행시 배경이미지
const ModalBackdrop = styled.div`
//위치 고정
position: fixed;

// 넣을지 말지 고민해보기 서비스이름(근로그)가 가려짐
// z-index: 1000;
top: 0;
left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  
  
`;

const BtnContainer = styled.div`
// 화면 중앙 고정
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 20px;
  width: 200px;
  height: 150px;
  
  background-color: #ffffff;
  border-radius: 10px;

  //버튼 가운데 정렬
  display: flex;
  align-items: center;

`;

const LogoutBtn = styled.button`
  width: 100%;
  height: 50%;
  padding: 10px;
  color: white;
  background: rgb(88 101 242);
  font-size: 13px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  font-weight: 600;
  border: 0;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 20px;

  &:hover {
    background: rgb(71 82 196)
  };
`;

const CancleBtn = styled.button`
  width: 100%;
  height: 50%;
  padding: 10px;
  color: rgb(88 101 242);
  background: white;
  font-size: 13px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  font-weight: 600;
  // border: 0px;
  border: 1px solid ;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgb(241, 242, 244);
  };
`;



const Container = styled.div`
  // padding-top: 90px;
  // width: 100vw;

  height: 100%;

  display: flex;
	flex-direction : column;
  align-items: center;
  justify-content: center;
  

  // 확인하고 지우기
  // padding-top: 60px;

`;

const Logout = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <>
      <div className="bg-d-dark w-full z-[1] h-12 max-w-lg justify-center text-lg px-10 font-medium fixed text-white border-b border-[#2C2F33] top-0  flex items-center">근로그</div>
      <div className="h-screen bg-d-lighter pt-14">
        <Container>
          
          <L onClick={openModalHandler}>logout</L>
 
          {isOpen ? (<ModalBackdrop onClick={openModalHandler}>
            <BtnContainer>
              {/* <LogoutBtn  onClick={openModalHandler} >Logout</LogoutBtn> */}
              {/* <LogoutBtn  onClick={navigate('/map')} >Logout</LogoutBtn> */}
              {/* 로그인 버튼 클릭 시 홈으로 페이지 이동 */}
              <LogoutBtn  onClick={() => navigate('/login')} >Logout</LogoutBtn>
              <CancleBtn >Cancle</CancleBtn>
            </BtnContainer>
          </ModalBackdrop>
          ) : null}

        </Container>


      </div>
  

    </>
  );
};
export default Logout;
