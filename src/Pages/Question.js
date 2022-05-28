import React from 'react';
import styled from 'styled-components';
import {ProgressBar,Button} from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';




const Question= () => {

    //(1)progress Bar 움직임을 위한 useState
    const [QuestionNo,setQuestionNo] = React.useState(0);
    //console.log(QuestionNo);

    //(2)답변 누를 때마다 올라가는 점수 계산하는 상태관리 useState
    const [TotalScore,setTotalScrore] = React.useState([
        {id: "EI", score: 0},
        {id: "SN", score: 0},
        {id: "TF", score: 0},
        {id: "JP", score: 0},
    ])

    //(4)문제 다 풀고 다음페이지로 넘어가는 역할 navegate 써주기 그리고 위에 import 해주기 
    const navigate = useNavigate();
   
    console.log(TotalScore);

   //원래 A/B 버튼 따로 써줬었고 그리고 그 안의 내용은 똑같아서 더 간결하게 코드를 짜기 위해 B버튼내용 주석처리하고
    // 버튼들도 AB나누지 않고 그냥 Button으로 통일시켜줘서 map 함수를 이용하기
    const handleClickButton = (no, type) => { 
        //새로 map을 써서 만든 내용 (1)
        const newScore = TotalScore.map((s)=>
            s.id === type  ? {id:s.id, score: s.score + no } : s
        );
        //(2)기존배열(TotalScore)을 새로운배열(newScore)로 바꿔주는 역할
        setTotalScrore(newScore);
        //(3)다음 문제로 문제수 증가하는 역할
        //(우리 문제는 12개이고 인덱스로 치면 0~11개 이기 때문에 길이(12) !== 1,2,3,4,5,6,7,8,9,10,11,12까진 되며 if문안에 +1을 더해서
        // 문제끝까지 가는거고 13번째가 되면 else문으로 내려와서 다음 페이지로 넘어갈수 있게 한다. )
        if(QuestionData.length !==QuestionNo + 1){
            setQuestionNo(QuestionNo + 1);
        }else  {
            //(1)결과페이지 만들어 놓고 와서 이제 아래와 같이 만듬
            //mbti 도출
            //새로 만든 newScore에 reduce 함수를 쓰는데 reduce(인자:acc, curr) 
            //누적 값(acc) 현재 값(cur) 아래와 같이 2점이거나 이상 일 경우는 mbti에 ex) "EI" 에 'E'를 아닌경우에는 'I'를! 
            const mbti = newScore.reduce(
                (acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0,1):curr.id.substring(1,2)),
                ""//초깃값 
            );
            //console.log(mbti);
            //마지막 문제까지 풀면 Result로 가야하는 역할
            //+로 도출된 mbti결과도 같이 가져가야되기 때문에 하는 밑에 작업!
            //(5)처음에는 navigate("/result")로 써서 다음페이지로 넘어갈 수 있게 저렇게 써줬음
            //파싱은 어떤 페이지(문서, html 등)에서 내가 원하는 데이터를 특정 패턴이나 순서로 추출해 가공하는 것을 말한다.
            navigate({
                pathname: '/result',
                search: `?${createSearchParams({
                    mbti:mbti,
                })}`
            });
        }
        
        //if( type === 'EI'){
        //기존 스코어에 더할 값을 계산(기존의 값 + 배점)
        //const addScore = TotalScore[0].score + no;
        //새로운 객체 만들기
       // const newObject = { id: "EI", score: addScore}
        //splice 이용해서 새로운 객체를 해당 객체 자리에 넣어줌
       // TotalScore.splice(0,1,newObject)
//     } else if( type === 'SN'){
//          const addScore = TotalScore[1].score + no;
//          const newObject = { id: "SN", score: addScore}
//          TotalScore.splice(1,1,newObject)
//     } else if( type === 'TF'){
//         const addScore = TotalScore[2].score + no;
//         const newObject = { id: "TF", score: addScore}
//         TotalScore.splice(2,1,newObject)
//    } else {
//     const addScore = TotalScore[3].score + no;
//     const newObject = { id: "JP", score: addScore}
//     TotalScore.splice(3,1,newObject)
//    }
       
     }



      //(7)no만 받았었는데 type도 비교해야하니까 type 추가해주기
    //  const handleClickButtonB = (no,type) => { 
        //(6)mbti 4덩어리의 조건을 걸어줘야하니깐 -> 
    //     if( type === 'EI'){
    //         //(3)기존 스코어에 더할 값을 계산(기존의 값 + 배점)
    //         const addScore = TotalScore[0].score + no;
    //         //(4)새로운 객체 만들기
    //         const newObject = { id: "EI", score: addScore}
    //         //(5)splice 이용해서 새로운 객체를 해당 객체 자리에 넣어줌
    //         TotalScore.splice(0,1,newObject)
    //     } (9)else if( type === 'SN'){
    //          const addScore = TotalScore[1].score + no;
    //          const newObject = { id: "SN", score: addScore}
    //          TotalScore.splice(1,1,newObject)
    //     } (10)else if( type === 'TF'){
    //         const addScore = TotalScore[2].score + no;
    //         const newObject = { id: "TF", score: addScore}
    //         TotalScore.splice(2,1,newObject)
    //    } (11)else {
    //     const addScore = TotalScore[3].score + no;
    //     const newObject = { id: "JP", score: addScore}
    //     TotalScore.splice(3,1,newObject)
    //    }
    //     setQuestionNo(QuestionNo + 1);
    //  }

    
  return (
    <Wrapper>
        <ProgressBar striped variant="danger" now={(QuestionNo/QuestionData.length *100)}/>
        <Title>{QuestionData[QuestionNo].title}</Title>
        <ButtonGroup>
            {/* (8)handleClickButton 숫자옆에 QuestionData[QuestionNo].type 써주기 */}
        <Button onClick={()=>handleClickButton(1, QuestionData[QuestionNo].type)} style={{width:'40%', minHeight: '200px', fontSize: '15px', backgroundColor:"lightsalmon", outLine:"none", border:"none"}}>{QuestionData[QuestionNo].answera}</Button>
        <Button onClick={()=>handleClickButton(0, QuestionData[QuestionNo].type)} style={{width:'40%', minHeight: '200px', fontSize: '15px', marginLeft:'20px', backgroundColor:"lightsalmon", outLine:"none", border:"none"}}>{QuestionData[QuestionNo].answerb}</Button>
        </ButtonGroup>
    </Wrapper>
  )
}

export default Question;

const Wrapper = styled.div`
    background-color: salmon;
    height: 100vh;
    width: 100%;
    
`
const Title = styled.div`
    font-size: 30px;
    font-family: 'EarlyFontDiary';
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'EarlyFontDiary';
`

