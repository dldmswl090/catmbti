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

    //결과 뽑아내기
    React.useEffect(()=>{
        //data에 담아놓은 ResultData를 말함
        const result = ResultData.find((b)=> b.best === mbti)
        //b.best === mbti와 같을 때 객체로 return 해줌  -> 그 받은 객체를 다시 저장해야 되기 때문에 
        // const [resultData, setResultData] = React.useState({}); 이 친구를 또 만들어준다.
        setResultData(result);
    
    },[mbti])
    //[mbti]역할은 mbti가 결정된 시점에 뽑아내야되서 넣어줌

    console.log(resultData);

    console.log(mbti)
  return (
    <Wrapper>
    <Header>예비집사 판별기</Header>
    <Contents>
    <Title>결과 보기</Title>
    <LogoImage>
        <img alt="결과이미지" src={resultData.image} className="rounded-circle" width={300} height={300}/>
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