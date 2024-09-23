import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Sarvinoz = () => {
  useGSAP(() => {
    gsap.to("#js", {
      opacity: 1,
      y: 20,
      duration: 1,
      stagger: 0.5,
    });
    gsap.to("#js1", {
      opacity: 1,
      duration: 10,
      y: 20,
      ease: "bounce.inOut",
    });
  }, []);
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="js" className="hero-title pt-10">
          O'zlariga ham hayrli bo'lsin!
        </p>
        <p id="js" className="hero-title pt-10">
          Kunni yaxshi o'tkazsinlar!
        </p>
        <p id="js" className="hero-title pt-10">
          O'zlarini ham asrab,
        </p>
        <p id="js" className="hero-title pt-10">
          Ehtiyot bo'lib yursinlar!
        </p>
        <p id="js1" className="hero-title pt-10">
          )
        </p>
      </div>
    </section>
  );
};

export default Sarvinoz;
