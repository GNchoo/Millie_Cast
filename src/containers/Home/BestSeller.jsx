import React from "react";
import { styled } from "styled-components";
import BestBooks from "../FirstMain/BestSeller/BestBooks";
import Interest from "../FirstMain/BestSeller/Interest";
import { TextBox } from "../../components/Common/TextBoxes";

export const BookItem = [
  {
    name: "지금 서점 베스트 셀러",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/179590093/2fa4ba51473f42d3962302d3ed3bcd77.jpg?w=145&f=webp&q=80",
        alt: "세이노의 가르침",
        text: "세이노의 가르침",
        writer: "세이노",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179599723/103e5936e3b540e6b8ab759ddfb1c3ba.jpg?w=145&f=webp&q=80",
        alt: "모든 삶은 흐른다",
        text: "모든 삶은 흐른다",
        writer: "로랑스 드빌레르",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179605344/7cd44b595c974b8984e5b8587ef7acbc.jpg?w=145&f=webp&q=80",
        alt: "챗 GPT, 질문이 돈이 되는 세상",
        text: "챗 GPT, 질문이 돈이 되는 세상",
        writer: "전상훈, 최서연",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179596683/679f4381cfac44099b64dd02a53e383d.jpg?w=145&f=webp&q=80",
        alt: "사장학개론",
        text: "사장학개론",
        writer: "김승호",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179599918/b5f0465395f9453c914ce378593ea485.jpg?w=145&f=webp&q=80",
        alt: "스즈메의 문단속",
        text: "스즈메의 문단속",
        writer: "신카이 마코토",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179598144/e055ce40893645c68aef88efff75d28a.jpg?w=145&f=webp&q=80",
        alt: "장하준의 경제학 레시피",
        text: "장하준의 경제학 레시피",
        writer: "장하준",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179593048/1e25ee98bc9e4f668cc1c0143750f2e1.jpg?w=145&f=webp&q=80",
        alt: "김미경의 마흔 수업",
        text: "김미경의 마흔 수업",
        writer: "김미경",
      },
    ],
  },

  {
    name: "한 달 이내 출간된 책",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/179599723/103e5936e3b540e6b8ab759ddfb1c3ba.jpg?w=145&f=webp&q=80",
        alt: "모든 삶은 흐른다",
        text: "모든 삶은 흐른다",
        writer: "로랑스 드빌레르",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179605619/271b1277b51e495aa0989ad33f18464c.jpg?w=145&f=webp&q=80",
        alt: "설득의 심리학",
        text: "설득의 심리학",
        writer: "로버트 치알디니",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179598842/323ad0b721a74c5ab5f26fad3fe07308.jpg?w=145&f=webp&q=80",
        alt: "마음을 사로잡는 말센스의 비밀",
        text: "마음을 사로잡는 말센스의 비밀",
        writer: "장차오",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179605361/6b6d0a316ea640d7a30695597e1797a1.jpg?w=145&f=webp&q=80",
        alt: "AI 이후의 세계",
        text: "AI 이후의 세계",
        writer: "헨리 A. 키신저",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179606118/52ccc3b04a604d6ab374b001b1bb62d1.jpg?w=145&f=webp&q=80",
        alt: "딸아, 돈 공부 절대 미루지 마라",
        text: "[독점] 딸아, 돈 공부 절대 미루지 마라",
        writer: "박소연",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179602782/8a67ca528e74430ca8dd1a61e6073116.jpg?w=145&f=webp&q=80",
        alt: "천년의 독서",
        text: "천년의 독서",
        writer: "미사고 요시아키",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179605344/7cd44b595c974b8984e5b8587ef7acbc.jpg?w=145&f=webp&q=80",
        alt: "챗 GPT, 질문이 돈이 되는 세상",
        text: "챗 GPT, 질문이 돈이 되는 세상",
        writer: "전상훈, 최서연",
      },
    ],
  },

  {
    name: "오디오북 BEST",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/179586758/dcbe94cb92ef4603ac1bc1bbf5695dea.jpg?w=145&f=webp&q=80",
        alt: "신경 끄기 연습",
        text: "신경 끄기 연습",
        writer: "나이토 요시히토",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179603134/79567a4640624acda7d08ac5acb05e3e.jpg?w=145&f=webp&q=80",
        alt: "어쩌면 우린 헤어졌는지 모른다",
        text: "어쩌면 우린 헤어졌는지 모른다",
        writer: "",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179606055/1f16997bd26c4e06ab0c928a5c2d1a21.jpg?w=145&f=webp&q=80",
        alt: "돈은, 너로부터다",
        text: "돈은, 너로부터다",
        writer: "김종봉, 제갈현열",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179605685/d870bbea177b4be68ef8b8159c7f98e3.jpg?w=145&f=webp&q=80",
        alt: "눈물을 마시는 새 1",
        text: "눈물을 마시는 새 1",
        writer: "이영도",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179603023/e84b81d8a8364be598c8a0e734d99995.jpg?w=145&f=webp&q=80",
        alt: "약속하건대, 분명 좋아질 거예요",
        text: "약속하건대, 분명 좋아질 거예요",
        writer: "나태주",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179537543/487088eda3c14770af3198d2751a005e.jpg?w=145&f=webp&q=80",
        alt: "불편한 편의점",
        text: "불편한 편의점",
        writer: "김호연",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179606007/961560dc0fc64a9a8c55578257fcfd8c.jpg?w=145&f=webp&q=80",
        alt: "괜찮은 어른이 되고 싶어서",
        text: "괜찮은 어른이 되고 싶어서",
        writer: "봉태규",
      },
    ],
  },

  {
    name: "독점 소설",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/179594318/9f85a4b99a46415dbde4c85e9fc93932.jpg",
        alt: "마지막 교차점",
        text: "[독점] 마지막 교차점",
        writer: "서정윤",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179589584/25a1d1c3e11d437797f4b3c3167baa79.jpg",
        alt: "기적 같은 일이야",
        text: "[독점] 기적 같은 일이야",
        writer: "이새인",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179586827/ea7974b952f747d39c52cd6500b67f65.jpg",
        alt: "그러니까, 너를",
        text: "[독점] 그러니까, 너를",
        writer: "일락",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179583622/b950be4a86fa4e34b29b467e60c13f14.jpg",
        alt: "이 동거는 망한 줄 알았는데",
        text: "[독점] 이 동거는 망한 줄 알았는데",
        writer: "이윤미",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179580984/9c4eac17efdc4b15a0c7225b17820f30.jpg",
        alt: "여름의 너",
        text: "[독점] 여름의 너",
        writer: "서혜은",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179579566/4d60820457f54241a5968aa8475678cc.jpg",
        alt: "수상한 손님",
        text: "[독점] 수상한 손님",
        writer: "이리",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179578270/fa61d8535efa45b8995a5136ac3bfa1c.jpg",
        alt: "우리 가까이 함께",
        text: "[독점] 우리 가까이 함께",
        writer: "진양",
      },
    ],
  },
];

export const BookItem2 = [
  {
    name: "주식",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/179491025/e3c210dc19274acfb987968134836a6e.jpg?w=145&f=webp&q=80",
        alt: "주린이가 가장 알고 싶은 최다질문 TOP 77",
        text: "주린이가 가장 알고 싶은 최다질문 TOP 77",
        writer: "원앤원컨텐츠그룹",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179471112/9ffade7f3d8049aa89dea56d8c8a82fd.jpg?w=145&f=webp&q=80",
        alt: "주린이도 술술 읽는 친절한 주식책",
        text: "주린이도 술술 읽는 친절한 주식책",
        writer: "원앤원컨텐츠그룹",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15643037/54eb3dba6fef4e5cbec303d62e1769dc.jpg?w=145&f=webp&q=80",
        alt: "난생 처음 주식 투자",
        text: "난생 처음 주식 투자",
        writer: "라온북",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179485693/dd3594ff816746038b1a2d026780fdb2.jpg?w=145&f=webp&q=80",
        alt: "만화 주식투자 무작정 따라하기",
        text: "만화 주식투자 무작정 따라하기",
        writer: "e-KPC",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15949376/c1aa2cde31114bf9b3a7c32dd602486f.jpg?w=145&f=webp&q=80",
        alt: "슈퍼개미의 왕초보 주식수업",
        text: "슈퍼개미의 왕초보 주식수업",
        writer: "이레미디어",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179468045/c46c57909cd44bd4acfaa46fe9fbb58c.jpg?w=145&f=webp&q=80",
        alt: "내 인생의 첫 주식 공부",
        text: "내 인생의 첫 주식 공부",
        writer: "원앤원컨텐츠그룹",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179472908/693451b3752d4226b5dabeaff7bbe4db.jpg?w=145&f=webp&q=80",
        alt: "한 권으로 끝내는 배당주 투자",
        text: "한 권으로 끝내는 배당주 투자",
        writer: "황금부엉이",
      },
    ],
  },
  {
    name: "영어",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/17223287/f5ba371aed014564bb61b3f35fc0c314.jpg?w=145&f=webp&q=80",
        alt: "야나두 영어회화",
        text: "야나두 영어회화",
        writer: "타인의 취향",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179465687/d03dcd10b6414d95897294cd352ee859.jpg?w=145&f=webp&q=80",
        alt: "혼자 공부하는 영어 습관의 힘 : 영어패턴 + 영어회화편",
        text: "혼자 공부하는 영어 습관의 힘 : 영어패턴 + 영어회화편",
        writer: "키출판사",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179461201/01cdc6b96b284279b5799df217d8b1ad.jpg?w=145&f=webp&q=80",
        alt: "나 혼자만 알고 싶은 영어책 : 순한 맛",
        text: "나 혼자만 알고 싶은 영어책 : 순한 맛",
        writer: "e-kpc(2)",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179495667/0ac24c544a0a4e5396d7b305d2a6c3ae.jpg?w=145&f=webp&q=80",
        alt: "한국인 화자 시점 영어 회화",
        text: "한국인 화자 시점 영어 회화",
        writer: "사람in",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179497365/6a3485d370ca4e64a9779837e21da913.jpg?w=145&f=webp&q=80",
        alt: "사용빈도 1억 영어회화 표현",
        text: "사용빈도 1억 영어회화 표현",
        writer: "사람in",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15788262/39fe18381b2e44f1a233e7afdfb99fa2.jpg?w=145&f=webp&q=80",
        alt: "영어, 이제는 잘할 때도 됐다",
        text: "영어, 이제는 잘할 때도 됐다",
        writer: "넥서스",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15851422/98a61b6d54974652912799d97f5da4a5.jpg?w=145&f=webp&q=80",
        alt: "나혼자 끝내는 독학 영어 첫걸음",
        text: "나혼자 끝내는 독학 영어 첫걸음",
        writer: "넥서스",
      },
    ],
  },
  {
    name: "고전",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/3057012/8a74d98f0bf344fe944a883dd3b55894.jpg?w=145&f=webp&q=80",
        alt: "까라마조프 씨네 형제들 (상)",
        text: "까라마조프 씨네 형제들 (상)",
        writer: "열린책들",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15875344/6d8baf401b7b4388a59bb2fa96ce150a.jpg?w=145&f=webp&q=80",
        alt: "이방인",
        text: "이방인",
        writer: "비전팩토리",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179500876/f893536979d74e9ab879b0f24b1e237f.jpg?w=145&f=webp&q=80",
        alt: "데미안",
        text: "데미안",
        writer: "을유문화사",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/358928/211806386edf4b009f7a37c4b9c455a4.jpg?w=145&f=webp&q=80",
        alt: "인간실격·사양",
        text: "인간실격·사양",
        writer: "문예출판사",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/420694/88a49ed28b3641efa7af0e702d8a6a64.jpg?w=145&f=webp&q=80",
        alt: "변신·시골의사",
        text: "변신·시골의사",
        writer: "문예출판사",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15853714/c686d50ed2e14157a6f664ef65e9a8bb.jpg?w=145&f=webp&q=80",
        alt: "1984: 에디터스 컬렉션",
        text: "1984: 에디터스 컬렉션",
        writer: "넥서스",
      },
    ],
  },
  {
    name: "인테리어",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/179491599/33c0a35433e943e99daf96884e621537.jpg?w=145&f=webp&q=80",
        alt: "블루체크의 코바늘 손뜨개 수업",
        text: "블루체크의 코바늘 손뜨개 수업",
        writer: "알에이치코리아(RHK)",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/9941437/bf50904e4d6740a0bd4df7e208e84baa.jpg?w=145&f=webp&q=80",
        alt: "패브릭 손뜨개",
        text: "패브릭 손뜨개",
        writer: "한빛미디어",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179464632/b70cb1890f914bf6b89fd063fe141bdc.jpg?w=145&f=webp&q=80",
        alt: "로제의 모티브 손뜨개 소품",
        text: "로제의 모티브 손뜨개 소품",
        writer: "팜파스",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/16795418/3f2cb6972b7e48fba14e36bb237c9c2b.jpg?w=145&f=webp&q=80",
        alt: "코코지니의 친절한 재봉틀 교실",
        text: "코코지니의 친절한 재봉틀 교실",
        writer: "비전비엔피",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/5710772/e7a8327c1b2f4026ad32fe17fd6bcb11.jpg?w=145&f=webp&q=80",
        alt: "까막의 감성 인테리어",
        text: "까막의 감성 인테리어",
        writer: "팜파스",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179451125/9c119af849d045d88be1a38500da0da8.jpg?w=145&f=webp&q=80",
        alt: "낭만 가득 프랑스 자수",
        text: "낭만 가득 프랑스 자수",
        writer: "42미디어콘텐츠",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/10999124/5b811a27222d4f2882378cc4aa63b155.jpg?w=145&f=webp&q=80",
        alt: "로제의 빈티지 손뜨개",
        text: "로제의 빈티지 손뜨개",
        writer: "팜파스",
      },
    ],
  },
  {
    name: "다이어트",
    contents: [
      {
        src: "https://cover.millie.co.kr/service/cover/179471054/32cd63b390644baf8698a42e4fa77b8e.jpg?w=145&f=webp&q=80",
        alt: "헬스의 정석 : 근력운동 편",
        text: "헬스의 정석 : 근력운동 편",
        writer: "한문화",
      },
      {
        src: "https://gpbqopmikmnr903351.cdn.ntruss.com/15000k_16000k/c199483f86d8ccb68bb3b115c1bf7efe.jpg?type=w&w=200&extopt=3&quality=100",
        alt: "죄수 운동법",
        text: "죄수 운동법",
        writer: "헬스조선",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179486697/94456e0deef2471d8748bce63daffeb4.jpg?w=145&f=webp&q=80",
        alt: "근육저승사자 양치승의 지옥 트레이닝",
        text: "근육저승사자 양치승의 지옥 트레이닝",
        writer: "헬스조선",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15650260/f4b46d3b81ca47c5a8c7fae230854ed9.jpg?w=145&f=webp&q=80",
        alt: "불량헬스",
        text: "불량헬스",
        writer: "롤링다이스",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/15863662/a7363250be924d18901a74ec0a15bca3.jpg?w=145&f=webp&q=80",
        alt: "닥치고 데스런 스트레칭",
        text: "닥치고 데스런 스트레칭",
        writer: "더디퍼런스",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/179470871/9f96fe5fe8044a438b5d70f35ac5514c.jpg?w=145&f=webp&q=80",
        alt: "근육이 튼튼한 여자가 되고 싶어",
        text: "근육이 튼튼한 여자가 되고 싶어",
        writer: "웅진씽크빅",
      },
      {
        src: "https://cover.millie.co.kr/service/cover/9453063/74d82265e0f2468e8ad85bfa4e0dee5f.jpg?w=145&f=webp&q=80",
        alt: "헬스보이의 지속가능한 운동법",
        text: "헬스보이의 지속가능한 운동법",
        writer: "한빛미디어",
      },
    ],
  },
];

const BestSellerContainer = styled.div`
  width: 100%;
  letter-spacing: -1.2px;
`;

const Inner = styled.div`
  width: 1100px;
  height: 2700px;
  margin: 0 auto;
`;

const BestSeller = () => {
  return (
    <BestSellerContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            <p>모든 책이 무제한</p>
            <p>9,900원</p>
          </div>
          <div className="text2">
            <p>10년치 베스트셀러</p>
            <p>신간 오디오북 장르 소설까지</p>
          </div>
        </TextBox>
        <BestBooks />
        <TextBox>
          <div className="text1">
            <p>관심 분야에 있는 책도</p>
            <p>딱 골라드려요</p>
          </div>
          <div className="text2">
            <p>검색어 순위를 통해 뽑은</p>
            <p>인기 분야 책들을 확인해보세요</p>
          </div>
        </TextBox>
        <Interest />
      </Inner>
    </BestSellerContainer>
  );
};

export default BestSeller;
