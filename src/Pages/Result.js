import React from 'react';
//CSS-IN-JS
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { ResultData } from '../assets/data/result';
import { useSearchParams } from 'react-router-dom';
import KakaoShareButton from '../Components/KakaoShareButton';


const Result= () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti'); 
    //최종적으로 도출한 결과 객체
    const [resultData, setResultData] = React.useState({});

    //useEffect(()=>{
    //이 안에 실행할 내용쓰기
    //},[])
    //[]여기 들어가는 값을 당연히 배열이여야하고 []생략하면 렌더링될때마다 실행되고 빈배열을 넣으면 한번만 실행된다
    //[]특정값을 넣으면 그특정값이 업데이트될때만 실행된다



    //결과 뽑아내기
    React.useEffect(()=>{
        //data에 담아놓은 ResultData를 말함
        const result = ResultData.find((d)=> d.best === mbti)
       
        //b.best === mbti와 같을 때 객체로 return 해줌  -> 그 받은 객체를 다시 저장해야 되기 때문에 
        // const [resultData, setResultData] = React.useState({}); 이 친구를 또 만들어준다.
        setResultData(result);
    
    },[mbti])
    //[mbti]역할은 mbti가 결정된 시점에 뽑아내야되서(업데이트되서 내용이 새로 나와야하기에) 넣어줌

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
    <ButtonGroup>
    <Button style={{fontFamily: "EarlyFontDiary", backgroundColor:"lightsalmon", outLine:"none", border:"none"}} onClick={()=>navigate('/')}>테스트 다시하기</Button>
    <KakaoShareButton data={resultData}/>
    </ButtonGroup>
    </Contents>
  </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
    background-color: salmon;
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
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
`