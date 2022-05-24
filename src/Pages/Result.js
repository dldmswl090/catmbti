import React from 'react';
//CSS-IN-JS
import styled from 'styled-components';
import PangImage from '../assets/raoul-droog-yMSecCHsIBc-unsplash.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { ResultData } from '../assets/data/result';


const Result= () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
    <Header>예비집사 판별기</Header>
    <Contents>
    <Title>결과 보기</Title>
    <LogoImage>
        <img src={ResultData[0].image} className="rounded-circle" width={300} height={300}/>
    </LogoImage>
    <Desc>예비집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.</Desc>
    <Button style={{fontFamily: "EarlyFontDiary"}} onClick={()=>navigate('/')}>테스트 다시하기</Button>
    </Contents>
  </Wrapper>
  )
}

export default Result;

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