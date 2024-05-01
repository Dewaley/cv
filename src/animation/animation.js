// import { IO } from "./obeserve";
import { IO } from "./observe";
import { gsap } from "gsap";

const animations = () => {
  // const items = document.querySelectorAll("[data-animation]");
  const f = document.querySelectorAll("[data-animation='fadeIn']");
  const fSlow = document.querySelectorAll("[data-animation='fadeInSlow']");
  const fUp = document.querySelectorAll("[data-animation='fadeInUp']");
  const fDown = document.querySelectorAll("[data-animation='fadeInDown']");
  const fLeft = document.querySelectorAll("[data-animation='fadeInLeft']");
  const fRight = document.querySelectorAll("[data-animation='fadeInRight']");

  f.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      // yPercent: 20,
    });
    IO(item, { threshold: 1 }).then(() => {
      gsap.to(item, {
        opacity: 1,
        // delay: 0.5,
        duration: 2,
        // yPercent: 0,
        ease: "easeOut",
      });
    });
  });

  fSlow.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      // yPercent: 20,
    });
    IO(item, { threshold: 1 }).then(() => {
      gsap.to(item, {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        // yPercent: 0,
        ease: "easeOut",
      });
    });
  });

  fUp.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      yPercent: 30,
    });
    IO(item, { threshold: 1 }).then(() => {
      gsap.to(item, {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        yPercent: 0,
        ease: "easeOut",
      });
    });
  });

  fDown.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      yPercent: -20,
    });
    IO(item, { threshold: 1 }).then(() => {
      gsap.to(item, {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        yPercent: 0,
        ease: "easeOut",
      });
    });
  });

  fLeft.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      xPercent: -20,
    });
    IO(item, { threshold: 0.5 }).then(() => {
      gsap.to(item, {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        xPercent: 0,
        ease: "easeOut",
      });
    });
  });

  fRight.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      xPercent: 20,
    });
    IO(item, { threshold: 1 }).then(() => {
      gsap.to(item, {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        xPercent: 0,
        ease: "easeOut",
      });
    });
  });
};

export { animations };
