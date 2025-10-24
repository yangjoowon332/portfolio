//로딩 체크


window.addEventListener('load', function() {
    document.querySelector('.loading-overlay').style.display = 'none';
    document.querySelector('.main-content').style.opacity = '1';
    
});
function checkAllImagesLoaded() {
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.onload = () => {
                loadedCount++;
                updateProgress(loadedCount / images.length * 100);
            };
        }
    });
}


    $('.screen').mouseover(function(){
      let img6Screen = $(this).height();
      let img6Height = $(this).find('img').height();
      $(this).find('img').css({top:(img6Screen-img6Height)})
    }).mouseout(function(){
      $(this).find('img').css({top:0})
    });
    


//마우스 따라다니는 원
const circle = document.querySelector('.circle');

let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;
const speed = 0.12; // 부드러운 추종

document.addEventListener('mousemove', (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
});

function animate() {
circleX += (mouseX - circleX) * speed;
circleY += (mouseY - circleY) * speed;

// 원을 커서 위치에 정확히 맞추려면 translate(-50%,-50%)를 CSS에서 제거하거나,
// 아래처럼 보정값을 빼주면 됩니다. (여기선 CSS의 -50%를 제거하는 방법을 권장)
// circle.style.transform = `translate(${circleX - 15}px, ${circleY - 15}px)`;

    circle.style.marginLeft = (circleX - 15) + "px";
    circle.style.marginTop = (circleY - 15) + "px";

  requestAnimationFrame(animate);
}
animate();





$('.linkA').mouseover(function(){
  $('span.circle').css({width:'100px', height:'100px', transform:'translate(-50%,-50%)', marginLeft:0, marginTop:0})
}).mouseout(function(){
  $('span.circle').css({width:'', height:'', transform:'', marginLeft:'', marginTop:''})
})
//마우스 여기까지




gsap.registerPlugin(ScrollTrigger);



// ------------------------------------------------
// 01. 부드러운 스크롤 (Lenis)
// ------------------------------------------------
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



const visualImg = document.querySelector(".visual img");
let frame = 0;
const maxFrame = 36;
let played = false;

//클릭버전
// document.querySelector(".visual_box").addEventListener("click", () => {
//   if (played) return;
//   played = true;

//   const interval = setInterval(() => {
//     frame++;
//     visualImg.src = `img/visual/v${frame}.png`;

//     if (frame >= maxFrame) {
//       clearInterval(interval);
//       // 영상 끝난 뒤에 body 풀기
//       document.body.classList.remove("locked");
//     }
//   }, 30); // 50ms 간격
// });



let frameObj = { frame: 1 }; // 시작 프레임

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".visual",       
    start: "top top",         
    end: "+=2000",  // 스크롤 길이 (조정 가능)
    scrub: true, 
    pin:true,
    pinSpacing:true,   
  }
})
// gnb 첫번째 li의 span을 30deg에서 0deg로 회전 (텍스트 커짐과 동시)
.fromTo('.visual svg', {
  scale:0.2,
  rotation: -20
}, {
  scale:1,
  rotation: 0,
  fill:'#fff',
  ease: 'none'
}, 'visualSvg')
.to('.visual svg path', {
  fill:'#555',
}, 'visualSvg')

.from(".visual .text", {
  scale:0.8,
  y:-50
})

.to(".visual .text", {
  y:-200
},'visualLight')
.to(".ligth_top", {
  opacity:1
},'visualLight')

.to(".visual .text svg path", {
  duration: 1,
  fill: "#AF8645",
})
// 1) 프레임 애니메이션
tl.to(frameObj, {
  frame: maxFrame,
  ease: "none",
  onUpdate: () => {
    const frameIndex = Math.round(frameObj.frame);
    visualImg.src = `img/visual/v${frameIndex}.png`;
  }
},'letter')



// 2) 편지(letter) 애니메이션



.to('.letter', {
  opacity: 1,
  height:20,
  x: -80,
  y:-70,
  scale:2,
  delay:0.2
},'letter')

.to('.letter', {
  duration: 3,
    opacity: 0,
    rotate:0,
    marginTop: 800,
    xPercent: 20,
    scale:20,
    backgroundColor:'#111'
  })






  gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "-200 top",
      end: "bottom top",
      toggleClass: { targets: ".rose_bg", className: "on" },
      // markers: true,
      toggleActions: "restart none reverse none"
      // "onEnter onLeave onEnterBack onLeaveBack"
      // 다시 내려올 때도 restart 되도록 지정
    }
  })
  // .to('.letter', {
  //   opacity: 0,
  //   rotate: 180,
  //   marginTop: 1100,
  //   marginLeft: -20,
  //   scale: 28,
  //   backgroundColor: '#000'
  // }, 'sec1')
 
  gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "=-400 top",
      end: "75% top",
      scrub: true,
    }
  })

  .to(' #section2 video', {
    opacity:1,
    y:-400,
    scale:1.5
  }) 
  .from(' #section2 .centerbox .info ul li', {
    opacity:0,
    x:200,
    stagger: 0.2
  }, 'liText')
  
  .fromTo(' #section2 .centerbox .info ul li a', {
    delay:0.8,
    stagger: 0.2
  },{
    opacity:1,
    stagger: 0.2
  })
 
  gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "=-400 top",
      end: "30% top",
      scrub: true,
    }
  })
  .from(' .chess img', {
    opacity:0,
    y:-300,
    stagger: 0.7
  })
 
 
  gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  })
  .to('#section4 .gemora_info', {
    y:-300
  })




  gsap.timeline({
    scrollTrigger: {
      trigger: "#section5",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  })
  .to('#section5 .info_ji', {
    y:-300
  })


  gsap.timeline({
    scrollTrigger: {
      trigger: "#section6",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  })
  .to('#section6 .Cookie_info', {
    y:-300
  })


  gsap.timeline({
    scrollTrigger: {
      trigger: "#section7",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  })
  .to('#section7 .TyouMyou_info', {
    y:-300
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "#section8",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  })
  .to('#section8 .vmp_info', {
    y:-300
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "#section10",
      start: "-=200 top",
      end: "bottom top",
      pin:true,
      scrub: true
    }
  })
  .from('#section10 .mo_Banner_Design li', {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "#section11",
      start: "-=150 top",
      end: "center top",
      pin:true,
      scrub: true,
    }
  })
  .from('#section11 .vmp_logo_title, #section11 .vmp_img li', {
    x: 100,
    y:100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "#section12",
      start: "-=150 top",
      end: "center top",
      pin:true,
      scrub: true,
    }
  })
  .from('#section12 h2, #section12 p', {
    x: 100,
    y:100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  })
  .from('#section12 .logoimg .card', {
    marginTop:100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  })
  .from('#section12 .sample_box .card', {
    marginTop:100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "#section13",
      start: "-=150 top",
      end: "center top",
      pin:true,
      scrub: true,
    }
  })
  .from('#section13 .tyoumyoulogobox, #section13 .tyoumyou_box', {
    x: -100,
    y:100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top top",
      end: "center top",
      scrub: true,
      onEnter: () => document.querySelector('footer .footer_chess')?.classList.add('footerChess'),
      onLeaveBack: () => document.querySelector('footer .footer_chess')?.classList.remove('footerChess')
    }
  })
  .from('footer .footer_chess', {
    y:-300,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  })


// 빛 효과 애니메이션 (스크롤 시 한 번만)
function setupLightEffect() {
  const lightElements = document.querySelectorAll('.light-effect');
  
  lightElements.forEach(element => {
    // 각 요소의 부모 섹션 찾기
    const section = element.closest('section');
    
    if (section) {
      // ScrollTrigger로 해당 섹션에 도달했을 때 빛 효과 실행
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // 섹션이 화면 상단 80% 지점에 도달했을 때
          end: "bottom 20%",
          onEnter: () => {
            // 빛 효과 실행
            element.classList.add('active');
            
            setTimeout(() => {
              element.classList.remove('active');
            }, 500); // 0.5초 후 빛 효과 제거
          }
        }
      });
    }
  });
}

// 페이지 로드 후 빛 효과 설정
window.addEventListener('load', () => {
  setTimeout(setupLightEffect, 1000); // 1초 후 시작
});
 








