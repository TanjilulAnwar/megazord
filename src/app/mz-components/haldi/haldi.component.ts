import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

@Component({
  selector: 'app-haldi',
  templateUrl: './haldi.component.html',
  styleUrls: ['./haldi.component.scss']
})
export class HaldiComponent implements OnInit {
  ngOnInit(): void {
     this.setupGsap()
  }
  setupGsap(){
    //parallax
/* ------Great Horned Owl Sequence------  */

gsap.set(".left-lid", { yPercent: 350, xPercent:-90});
gsap.set(".center-lid", { yPercent: 330, xPercent:5});
gsap.set(".right-lid", { yPercent: 350, xPercent:95});
gsap.set(".plating", { yPercent: 0, xPercent:0});

gsap.to(".left-lid", {
  yPercent: 250,
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    start: "0% 50%",
    end: "bottom 100%",
    scrub: 2,
    trigger: ".fluster"

  }, 
});


gsap.to(".center-lid", {
  yPercent: 250,
  xPercent: 5,
  ease: "none",
  scrollTrigger: {
    start: "0% 50%",
    end: "bottom 100%",
    scrub: 2,
    trigger: ".fluster"

  }, 
});

gsap.to(".right-lid", {
  yPercent: 250,
  xPercent: 110,
  ease: "none",
  scrollTrigger: {
    start: "0% 50%",
    end: "bottom 100%",
    scrub: 2,
    trigger: ".fluster"

  }, 
});


//parallax
  }

}