import React from 'react';
//CSS-IN-JS
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { ResultData } from '../assets/data/result';
import { useSearchParams } from 'react-router-dom';


const Result= () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    //최종적으로 도출한 결과 객체
    const [resultData, setResultData] = React.useState({});

    React.useEffect(()=>{
        const result = ResultData.find((s)=> s.best === mbti)
        setResultData(result);
    },[mbti])

    console.log(resultData);

    console.log(mbti)
  return (
    <Wrapper>
    <Header>예비집사 판별기</Header>
    <Contents>
    <Title>결과 보기</Title>
    <LogoImage>
        <img src={resultData.image} className="rounded-circle" width={300} height={300}/>
    </LogoImage>
    <Desc>예비집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
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