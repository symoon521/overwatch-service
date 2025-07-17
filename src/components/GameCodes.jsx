import React, { useState } from 'react';

const GameCodes = () => {
  const [copiedCode, setCopiedCode] = useState('');

  const gameCodes = [
    { title: "겐지 아나 1:1 모드", code: "cSZNY" },
    { title: "벼룩 트레이서 잡기", code: "41ATN9" },
    { title: "천하제일 스킨 자랑 대회", code: "55WGG" },
    { title: "무한의계단", code: "HYXC5" },
    { title: "개척파쿠르", code: "X8080" },
    { title: "보스 잡기", code: "FBQS2" },
    { title: "SSSS 뽑기", code: "M0KC0" },
    { title: "랜덤크기 숨바꼭질", code: "NY16R" },
    { title: "랜덤 능력", code: "AJ93T" },
    { title: "랜덤 영웅 1:1", code: "7HF2S" },
    { title: "드래곤 보스 레이드", code: "3V026" },
    { title: "호텔 수면방", code: "MZBQY" },
    { title: "노답워치", code: "N5E8C" },
    { title: "포켓몬빵 뽑기", code: "R3Y5T" },
    { title: "로봇 탑승 데스매치", code: "KQVSK" },
    { title: "64가지 미니게임", code: "YZNNN" },
    { title: "AI가 날 따라해", code: "N5YRP" },
    { title: "프레디의 피자가게(1인용)", code: "72TP0" },
    { title: "WASD 컨트롤 올라가기", code: "QBQCD" },
    { title: "데이 바이 데이라이트(데바데) 베타 버전", code: "66H14" },
    { title: "검은 마법사 레이드", code: "0GQYC" },
    { title: "OX퀴즈", code: "TJQ0V" },
    { title: "상어 피하기", code: "N0CGC" },
    { title: "힐러전쟁", code: "MYZ36" },
    { title: "펫키우기", code: "7408E" },
    { title: "원카드", code: "T0PHZ" },
    { title: "숨막히는 폭탄 피하기", code: "R2YYA" },
    { title: "감정표현 크기 커지기", code: "VB12FP" },
    { title: "에임 + ESP 핵", code: "XRTN2" },
    { title: "라인 다리 건너기", code: "616X9" },
    { title: "술래잡기", code: "5005S" },
    { title: "시그마 술래잡기", code: "Q5ERV" },
    { title: "1000딜", code: "KMFPA" },
    { title: "빙빙 디펜스", code: "AA3BZ" },
    { title: "도장깨기", code: "XYAT8" },
    { title: "좁아지는 방 피하기", code: "ET6RB" },
    { title: "아나 배그", code: "MA2JW" },
    { title: "레킹의 롤코월드", code: "K5054" },
    { title: "놀이공원 워크샵", code: "7Z2PJ" },
    { title: "블랙홀", code: "C9Q58" },
    { title: "국산 4인용 비행슈팅 디펜스", code: "7W2W2" },
    { title: "포탑 키우기", code: "751M4P" },
    { title: "겐지 피구 대회용", code: "PBP5C" },
    { title: "아누비스 피라미드 등반하기", code: "140YZ" },
    { title: "봇처럼 연기하기", code: "4071J" },
    { title: "똥피하기", code: "Z9EYP" },
    { title: "진격의 거인", code: "GK385" },
    { title: "원수는 외나무 다리에서", code: "1TB71" },
    { title: "모두의 마블", code: "1SF5C" },
    { title: "샌즈", code: "915GG" },
    { title: "어몽어스", code: "5858A" },
    { title: "오버워치 레지스탕스 아발론", code: "2659F" },
    { title: "빌딩탈출", code: "B19WF" },
    { title: "젠야타볼", code: "8KBYD" },
    { title: "혈압 커비레이스", code: "MQ3BF" },
    { title: "합체", code: "H4XHQ" },
    { title: "기본 RPG 모드", code: "51T0H" },
    { title: "RPG 리뉴얼 버전", code: "AENWVC" },
    { title: "던전 RPG", code: "PCZHA" },
    { title: "영혼 RPG", code: "BYVWW" },
    { title: "미로 탈출", code: "GFMVM" },
    { title: "미로 술래잡기", code: "7JRQ1" },
    { title: "미로 좀비", code: "S6DAC" },
    { title: "노래방", code: "KARAY" },
    { title: "강퇴 기능이 추가된 노래방", code: "H69QS" },
    { title: "포켓몬 골라서 키우기", code: "PC8C8" },
    { title: "좀비 아포칼립스", code: "MPJFR" },
    { title: "객관식 상식 퀴즈", code: "X8700" },
    { title: "디바의 꼬치가게", code: "T4YGY" },
    { title: "파라 리듬게임", code: "RR3NT" },
    { title: "발로란트", code: "CD5F6" },
    { title: "오버워치2 레이드", code: "3AMCX" },
    { title: "각폭의 정석", code: "QHQ9E" },
    { title: "오버워치 감도찾기", code: "05FPY" },
    { title: "222스크림", code: "E8G1N" },
    { title: "오늘의 운세", code: "92N8P" },
    { title: "피아노 치는 방", code: "C4884" },
    { title: "악보입력 워크샵", code: "P9ZQA" },
    { title: "가챠뽑기", code: "Q0K1R" },
    { title: "고급 훈련장", code: "BTRZE" },
    { title: "최신 훈련장", code: "AJERA" },
    { title: "둠피스트 기술 가이드 테크닉 배우기", code: "6H3ND" },
    { title: "라인하르트 트레이닝 모드", code: "440GD" },
    { title: "아나 수면총 연습", code: "REX9G" },
    { title: "아나 수면총 연습2", code: "DVYNR" },
    { title: "아나 수면총 궁카운터 연습", code: "Q280E" },
    { title: "아나 힐벤 연습", code: "1ZH9V" },
    { title: "아나 힐벤 연습2", code: "498NV" },
    { title: "아나 페인트총", code: "TQQF0" },
    { title: "위도우 에임 연습", code: "D9SDC" },
    { title: "위도우 에임 연습 (실전)", code: "4SB19" },
    { title: "겐지 뽕검 연습", code: "WKGYV" },
    { title: "끌어치기 연습", code: "2S2VY" },
    { title: "에임트레이너", code: "G3K8V" },
    { title: "고급 에임핵", code: "KAP77" },
    { title: "에임핵 (ESP포함)", code: "6R00D" },
    { title: "딜러 에임 아레나", code: "SR1P0" },
    { title: "위도우 헤드 아레나", code: "Q9T0J" },
    { title: "언제 어디서든 영웅 변경 가능", code: "A1K6H" },
    { title: "용검대전", code: "4MTBY" },
    { title: "1000킬", code: "JCR7T" },
    { title: "역겨운 둠피스트 둠피 너프 필수", code: "7X31K" },
    { title: "호그 우물 낚시", code: "08GTJ" },
    { title: "버섯캐기", code: "V4BQ6" },
    { title: "루시우 인내의 숲", code: "ZT9QY" },
    { title: "위도우 CCTV (훈련장)", code: "JBY6W" },
    { title: "유저가 만든 루시우볼", code: "YFPHM" },
    { title: "루시우볼", code: "PAN76" },
    { title: "둠피 개척 파쿠르", code: "KBQ78" }
  ];

  const copyToClipboard = async (code, title) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <div className="game-codes">
      <h3 className="section-title">
        <span className="section-icon">🎮</span>
        오버워치 게임 코드 모음
      </h3>
      <p className="game-codes-subtitle">
        제목을 클릭하면 게임 코드가 자동으로 복사됩니다
      </p>
      
      <div className="game-codes-grid">
        {gameCodes.map((game, index) => (
          <div 
            key={index} 
            className={`game-code-card ${copiedCode === game.code ? 'copied' : ''}`}
            onClick={() => copyToClipboard(game.code, game.title)}
          >
            <div className="game-code-header">
              <h4 className="game-code-title">{game.title}</h4>
              <div className="game-code-badge">
                {copiedCode === game.code ? '복사됨!' : game.code}
              </div>
            </div>
            <div className="game-code-footer">
              <span className="copy-hint">
                {copiedCode === game.code ? '✓ 복사완료' : '📋 클릭하여 복사'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCodes;