import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statData = [
  { value: '58%', text: 'Increase in pickup point use' },
  { value: '23%', text: 'Decrease in customer phone calls' },
  { value: '27%', text: 'Increase in pickup point use' },
  { value: '40%', text: 'Decrease in customer phone calls' }
];

export default function Hero() {
  const trackRef = useRef(null);
  const roadRef = useRef(null);
  const carRef = useRef(null);

  useLayoutEffect(() => {
    const title = '.title';
    const stats = '.stat';
    const car = '.car';
    const hint = '.hint';
    const stage = '.stage';

    gsap.from(title, {
      y: 50,
      duration: 1
    });

    gsap.from(stats, {
      y: 30,
      duration: 0.8,
      stagger: 0.15
    });

    gsap.set(car, {
      left: 0,
      x: 0,
      yPercent: -50,
      scale: 0.8
    });

    gsap.to(car, {
      left: () => {
        const road = roadRef.current;
        const carNode = carRef.current;

        return road.clientWidth - carNode.offsetWidth;
      },
      x: 0,
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: trackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    gsap.to(stage, {
      backgroundColor: '#1c2b3a',
      color: '#f2ece0',
      ease: 'none',
      scrollTrigger: {
        trigger: trackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    gsap.to(hint, {
      opacity: 0,
      scrollTrigger: {
        trigger: trackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    const carImage = document.querySelector('.car img');
    if (carImage) {
      carImage.addEventListener('load', onResize);
    }

    window.addEventListener('load', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (carImage) {
        carImage.removeEventListener('load', onResize);
      }
      window.removeEventListener('load', onResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="track" ref={trackRef}>
        <div className="stage">
          <h1 className="title">WELCOME ITZFIZZ</h1>

          <div className="stats">
            {statData.map((stat) => (
              <div className="stat" key={stat.value + stat.text}>
                <h2>{stat.value}</h2>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>

          <div className="road" ref={roadRef}>
            <div className="road-line" />

            <div className="car" ref={carRef}>
              <img src="/assets/car.png" alt="Orange sports car" />
            </div>
          </div>

          <p className="hint">SCROLL TO DRIVE ↓</p>
        </div>
      </section>

      <section className="end">
        <div>
          <h2>JOURNEY COMPLETED</h2>
          <p className="thank-you">
            <a href='#'>Thank you for visiting our site!</a>
          </p>
        </div>
      </section>
    </>
  );
}
