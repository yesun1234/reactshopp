import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const imgs = [
  './images/main01.jpg',
  './images/main02.jpg',
  './images/main03.jpg',
  './images/main04.jpg',
  './images/main05.jpg'
];

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(()=>{
    //imgIndex를 일정간격을 두고 업데이트 한다.
    const timer = setInterval(()=>{
      setImgIndex( prevIndex => (prevIndex + 1) % imgs.length);
    }, 5000); //3초 마다 이미지 변경
    return () => clearInterval(timer);  //컴포넌트 언마운트시 자동실행 제거
  }, [imgs.length]);
 
  return (
    <div className="carousel">
        <TransitionGroup>
           <CSSTransition
              key={imgs[imgIndex]}
              timeout={500}
              classNames="slide">
              <img src={imgs[imgIndex]} alt="slideImg" />
           </CSSTransition>
        </TransitionGroup>
    </div>
  )
}

export default Carousel