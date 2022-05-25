import React from 'react';
//CSS-IN-JS
import styled from 'styled-components';
import PangImage from '../assets/raoul-droog-yMSecCHsIBc-unsplash.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home= () => {

    const navigate = useNavigate();
    const handleClickBtn = () => {
        //useHistory 약간 a태그처럼 이동하는 기능??
        navigate('/question');
     }

  return (
      <Wrapper>
    <Header>예비집사 판별기</Header>
    <Contents>
    <Title>나에게 맞는 주인님은?</Title>
    <LogoImage>
        <img alt="고양이사진" src={PangImage} className="rounded-circle" width={300} height={300}/>
    </LogoImage>
    <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
    <Button style={{fontFamily: "EarlyFontDiary"}} onClick={handleClickBtn}>테스트 시작하기</Button>
    </Contents>
  </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`

    height: 100vh;
    width: 100%;
    
`
const Header = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'EarlyFontDiary';
    
`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'EarlyFontDiary';
`

const Title = styled.div`
    font-size : 30px;
    margin-top: 40px;
    font-family: 'EarlyFontDiary';
`

const LogoImage = styled.div`
    margin-top: 10px;
`
const Desc = styled.div`
    font-size : 15px;
    margin-top: 20px;
    font-family: 'EarlyFontDiary';
    margin-bottom: 30px;
`