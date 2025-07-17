import React, { useEffect, useState } from 'react';

// 영웅 이미지들
import dvaImg from '../assets/D.va.png';
import reinhardtImg from '../assets/라인하르트.png';
import reaperImg from '../assets/리퍼.png';
import mccreeImg from '../assets/맥크리.png';
import mercyImg from '../assets/메르시.png';
import meiImg from '../assets/메이.png';
import soldierImg from '../assets/솔져.png';
import symmetraImg from '../assets/시메트라.png';
import anaImg from '../assets/아나.png';
import widowmakerImg from '../assets/위도우메이커.png';
import winstonImg from '../assets/윈스턴.png';
import junkratImg from '../assets/정크랫.png';
import zenyattaImg from '../assets/젠야타.png';
import pharahImg from '../assets/파라.png';

const heroImages = [
  dvaImg, reinhardtImg, reaperImg, mccreeImg, mercyImg, meiImg,
  soldierImg, symmetraImg, anaImg, widowmakerImg, winstonImg,
  junkratImg, zenyattaImg, pharahImg
];

const PixelBackground = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    // 랜덤 영웅들 생성
    const newHeroes = [];
    for (let i = 0; i < 8; i++) {
      newHeroes.push({
        id: i,
        image: heroImages[Math.floor(Math.random() * heroImages.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 2.6,
        speedY: (Math.random() - 0.5) * 2.6,
        rotation: 0,
        rotationSpeed: 0,
        size: Math.random() * 60 + 80,
        opacity: Math.random() * 0.3 + 0.2
      });
    }
    setHeroes(newHeroes);

    // 애니메이션 루프
    const animate = () => {
      setHeroes(prev => prev.map(hero => {
        let newX = hero.x + hero.speedX;
        let newY = hero.y + hero.speedY;
        let newSpeedX = hero.speedX;
        let newSpeedY = hero.speedY;

        // 경계 반사
        if (newX <= 0 || newX >= window.innerWidth - hero.size) {
          newSpeedX *= -1;
        }
        if (newY <= 0 || newY >= window.innerHeight - hero.size) {
          newSpeedY *= -1;
        }

        return {
          ...hero,
          x: Math.max(0, Math.min(window.innerWidth - hero.size, newX)),
          y: Math.max(0, Math.min(window.innerHeight - hero.size, newY)),
          speedX: newSpeedX,
          speedY: newSpeedY,
          rotation: 0
        };
      }));
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {heroes.map(hero => (
        <img
          key={hero.id}
          src={hero.image}
          alt="hero"
          style={{
            position: 'absolute',
            left: `${hero.x}px`,
            top: `${hero.y}px`,
            width: `${hero.size}px`,
            height: `${hero.size}px`,
            opacity: hero.opacity,
            transform: 'none',
            pointerEvents: 'none',
            objectFit: 'contain'
          }}
        />
      ))}
    </div>
  );
};

export default PixelBackground;