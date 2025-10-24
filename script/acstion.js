
        // 언어 선택
        
  
  (function(){
    const STORAGE_KEY = 'site.lang';

    function detectInitialLang(){
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ko' || saved === 'ja') return saved;
      const nav = navigator.language || '';
      if (/^ja/i.test(nav)) return 'ja';
      if (/^ko/i.test(nav)) return 'ko';
      return 'ko';
    }

    function setLang(lang){
      const html = document.documentElement;
      html.setAttribute('lang', lang === 'ja' ? 'ja' : 'ko');
      localStorage.setItem(STORAGE_KEY, lang);

      // 버튼 아이콘 업데이트
      const btn = document.getElementById('krjpLangBtn');
      const flag = btn ? btn.querySelector('.krjp-flag') : null;
      if (flag) {
        flag.textContent = (lang === 'ja') ? flag.dataset.flagJa : flag.dataset.flagKo;
      }

      // 커스텀 이벤트 (다른 스크립트에서 감지 가능)
      document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
    }

    function toggleLang(){
      const current = localStorage.getItem(STORAGE_KEY) || detectInitialLang();
      const next = (current === 'ko') ? 'ja' : 'ko';
      setLang(next);
    }

    // 초기화
    const initial = localStorage.getItem(STORAGE_KEY) || detectInitialLang();
    setLang(initial);

    // 이벤트 바인딩
    const btn = document.getElementById('krjpLangBtn');
    if (btn) {
      btn.addEventListener('click', toggleLang);
      btn.setAttribute('aria-label', '언어 전환 / 言語切替');
      btn.setAttribute('aria-pressed', 'false');
    }
  })();
        
        // About 섹션
        gsap.fromTo(".about-text", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".about",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".about-image", {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".about",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });


   //  스킬 섹션
        gsap.fromTo(".resume-left", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".resume-content",
                start: "top 100%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".resume-right", {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".resume-content",
                start: "top 100%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });


gsap.fromTo(".container_gemora .gemora ", 
    { x: -100, opacity: 0 }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".container_gemora .gemora_mo  ",
            start: "top 80%", 
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".container_Lunnav", 
    { x: 100, opacity: 0 }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".container_Lunnav",
            start: "top 80%", 
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".container_Cookie .Cookie ",
  { y: -200, opacity: 0 }, 
  { 
    y: 0, 
    opacity: 1, 
    duration: 1.2, 
    ease: "back.out(1.7)", 
    scrollTrigger: {
      trigger: ".Cookie_bg ",
      start: "top 80%",      
      toggleActions: "play none none reverse"
    }
  }
);


gsap.fromTo(".container_tyoumyou .tyoumyou ", 
  { y: 100, opacity: 0 }, 
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out",    
    scrollTrigger: {
      trigger: ".container_tyoumyou ",
      start: "top 85%",     
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".container_visualmaetaphor .visualmaetaphor", 
  { y: -100, opacity: 0 }, 
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out",      
    scrollTrigger: {
      trigger: ".visualmaetaphor_bg",
      start: "top 85%",     
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".projects6 .bannerimg", 
  { y: 100, opacity: 0 },   
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out",     
    scrollTrigger: {
      trigger: ".projects6 .bannerimg ul",
      start: "top 85%",      
      toggleActions: "play none none reverse"
    }
  }
);

 gsap.fromTo(".vmp_se2", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".container_vmp_logo",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".vmp_logome", {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".container_vmp_logo",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });


         gsap.fromTo(".visualmaetaphor_se2", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".container_visualmaetaphor_logo",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".visualmaetaphor_logobe", {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".container_visualmaetaphor_logo",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });
gsap.fromTo(".logoimg", 
  { y: 100, opacity: 0 },   
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out",     
    scrollTrigger: {
      trigger: ".logoimg",
      start: "top 85%",      
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".projects10 .you_logoimg ul", 
  { y: 100, opacity: 0 },   
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out",     
    scrollTrigger: {
      trigger: ".projects10 .you_bg",
      start: "top 85%",      
      toggleActions: "play none none reverse"
    }
  }
);





