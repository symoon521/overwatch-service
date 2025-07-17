import React from 'react';

const OverwatchTips = () => {
  const overwatchTips = [
    {
      category: "기본 플레이 팁",
      tips: [
        { title: "음성 채팅 활용하기", description: "팀원과의 소통이 승패를 결정합니다. 중요한 정보를 적극적으로 공유하세요." },
        { title: "궁극기 타이밍", description: "팀 파이트에서 궁극기를 아껴두지 말고 적절한 타이밍에 사용하세요." },
        { title: "포지셔닝 중요성", description: "안전한 위치에서 최대한의 영향력을 발휘할 수 있는 자리를 찾으세요." },
        { title: "팀 구성 이해하기", description: "우리 팀과 상대 팀의 구성을 파악하고 그에 맞는 전략을 세우세요." }
      ]
    },
    {
      category: "탱커 플레이 팁",
      tips: [
        { title: "방벽 관리", description: "방벽을 무작정 전개하지 말고 팀원을 보호할 때만 사용하세요." },
        { title: "공간 확보", description: "팀이 유리한 포지션을 잡을 수 있도록 공간을 만들어주세요." },
        { title: "어그로 끌기", description: "적의 주의를 자신에게 집중시켜 딜러와 힐러를 보호하세요." },
        { title: "이니시에이팅", description: "팀 파이트의 시작을 알리는 신호를 명확하게 보내세요." }
      ]
    },
    {
      category: "딜러 플레이 팁", 
      tips: [
        { title: "우선 순위 타겟", description: "힐러 → 딜러 → 탱커 순으로 타겟 우선순위를 정하세요." },
        { title: "안전한 딜링", description: "무리해서 킬을 노리지 말고 생존을 우선시하세요." },
        { title: "맵 이해", description: "높은 곳과 엄폐물을 적극 활용하여 유리한 각도를 만드세요." },
        { title: "쿨다운 관리", description: "스킬 쿨다운을 계산하여 적절한 타이밍에 공격하세요." }
      ]
    },
    {
      category: "힐러 플레이 팁",
      tips: [
        { title: "생존이 최우선", description: "자신이 죽으면 팀 전체가 위험해집니다. 생존을 최우선으로 하세요." },
        { title: "힐 우선순위", description: "탱커 → 다른 힐러 → 딜러 순으로 힐 우선순위를 정하세요." },
        { title: "적 위치 파악", description: "적의 위치를 지속적으로 확인하고 팀원에게 정보를 제공하세요." },
        { title: "궁극기 활용", description: "생존기나 힐링 궁극기는 팀 파이트에서 적절히 사용하세요." }
      ]
    },
    {
      category: "경쟁전 팁",
      tips: [
        { title: "멘탈 관리", description: "연패해도 감정적으로 플레이하지 말고 냉정함을 유지하세요." },
        { title: "영웅 풀 확장", description: "최소 2-3개 역할에서 플레이할 수 있는 영웅을 늘려보세요." },
        { title: "VOD 리뷰", description: "자신의 게임을 녹화해서 실수를 분석하고 개선점을 찾으세요." },
        { title: "워밍업", description: "경쟁전 전에 연습장이나 빠른 대전으로 충분히 워밍업하세요." }
      ]
    },
    {
      category: "팀 플레이 팁",
      tips: [
        { title: "그룹업 중요성", description: "혼자 돌격하지 말고 팀원과 함께 움직이세요." },
        { title: "콜아웃 하기", description: "적의 위치, 체력, 스킬 사용 등을 팀원에게 알려주세요." },
        { title: "궁극기 연계", description: "팀원과 궁극기 연계를 통해 시너지를 만들어내세요." },
        { title: "백라인 보호", description: "힐러와 딜러를 노리는 적으로부터 보호해주세요." }
      ]
    }
  ];

  return (
    <div className="overwatch-tips">
      <h3 className="section-title">
        <span className="section-icon">🎯</span>
        오버워치 플레이 팁 모음
      </h3>
      <p className="tips-subtitle">
        프로들이 사용하는 실전 팁들을 확인해보세요
      </p>
      
      <div className="tips-categories">
        {overwatchTips.map((category, categoryIndex) => (
          <div key={categoryIndex} className="tip-category">
            <h4 className="category-title">{category.category}</h4>
            <div className="tips-grid">
              {category.tips.map((tip, tipIndex) => (
                <div key={tipIndex} className="tip-card-simple">
                  <div className="tip-header">
                    <div className="tip-icon">💡</div>
                    <h5 className="tip-title">{tip.title}</h5>
                  </div>
                  <div className="tip-description">
                    {tip.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverwatchTips;