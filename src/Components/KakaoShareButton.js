import React from 'react';
import Button from 'react-bootstrap/Button';
//↓ kakao를 인식하게 하기 위한 역할 
const {Kakao} = window;

const KakaoShareButton = ({data}) => {
    const url = 'https://catmbtimakeit.netlify.app/'
    //공유하고 싶은 우리 결과 URL 담을 변수
    const resultUrl = window.location.href;

    //console.log(resultUrl,url) 
    // public안에 _redirects라는 폴더 하나 만들어서 그 안에 /* /index.html 200 이라고 넣어주고 저장하기

    React.useEffect(()=>{
        //카카오 인증이 계속 되는것을 막아주기 위한 역할?
        Kakao.cleanup();
        Kakao.init('1932de940a9405ce799b75f1be5bc27d');
        console.log(Kakao.isInitialized());
    },[])

    //카카오톡 공유하기 눌렀을때 공유하는 함수를 또 만들어서 밑에 애들을 감싸줘야함
const shareKakao = () => {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '예비집사 판별기 결과',
          description: `예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${data.name}입니다. `,
          imageUrl:url + data.image,
          link: {
            mobileWebUrl: resultUrl,
            webUrl :resultUrl,
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러 가기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ]
      });
    }
    return(
        
         <Button onClick={shareKakao} style={{fontFamily: "EarlyFontDiary", width: 170, marginLeft:'20px'}}>카카오톡 공유하기</Button>
        
    )
}

export default KakaoShareButton;