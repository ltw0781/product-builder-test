document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. Toast Notification System
  // ==========================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Add success or info icon based on type
    const icon = type === 'success' 
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--success);"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = `
      ${icon}
      <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);

    // Fade out and remove toast after 3.5 seconds
    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, 3500);
  }

  // ==========================================
  // 2. Dark Mode Toggle
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
      newTheme = 'dark';
    }
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    showToast(newTheme === 'dark' ? '다크 모드가 활성화되었습니다.' : '라이트 모드가 활성화되었습니다.', 'info');
  });

  // ==========================================
  // 3. Header Scroll Effect
  // ==========================================
  const mainHeader = document.getElementById('main-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 4. Responsive Mobile Navigation
  // ==========================================
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburgerMenu.addEventListener('click', () => {
    const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.setAttribute('aria-expanded', 'false');
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ==========================================
  // 5. Auth State & Login / Sign Up Modals
  // ==========================================
  const btnLoginOpen = document.getElementById('btn-login-open');
  const btnSignupOpen = document.getElementById('btn-signup-open');
  const btnMypage = document.getElementById('btn-mypage');
  const btnLogout = document.getElementById('btn-logout');

  const loginModal = document.getElementById('login-modal');
  const btnLoginClose = document.getElementById('btn-login-close');
  const loginForm = document.getElementById('login-form');

  const signupModal = document.getElementById('signup-modal');
  const btnSignupClose = document.getElementById('btn-signup-close');
  const signupForm = document.getElementById('signup-form');

  const linkToSignup = document.getElementById('link-to-signup');
  const linkToLogin = document.getElementById('link-to-login');

  // Check login status from localStorage
  let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  function updateAuthStateUI() {
    if (isLoggedIn) {
      btnLoginOpen.classList.add('hidden');
      btnSignupOpen.classList.add('hidden');
      btnMypage.classList.remove('hidden');
      btnLogout.classList.remove('hidden');
    } else {
      btnLoginOpen.classList.remove('hidden');
      btnSignupOpen.classList.remove('hidden');
      btnMypage.classList.add('hidden');
      btnLogout.classList.add('hidden');
    }
  }

  // Initial Auth UI Render
  updateAuthStateUI();

  // Open & Close Modals
  function openModal(modal) {
    modal.style.display = 'flex';
    // Small delay to trigger CSS transition opacity
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden'; // Disable page scrolling
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    // Wait for animation, then hide display
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
    document.body.style.overflow = ''; // Re-enable page scrolling
  }

  btnLoginOpen.addEventListener('click', () => openModal(loginModal));
  btnSignupOpen.addEventListener('click', () => openModal(signupModal));

  btnLoginClose.addEventListener('click', () => closeModal(loginModal));
  btnSignupClose.addEventListener('click', () => closeModal(signupModal));

  // Link toggles within modals
  linkToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(loginModal);
    setTimeout(() => openModal(signupModal), 300);
  });

  linkToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(signupModal);
    setTimeout(() => openModal(loginModal), 300);
  });

  // Modal Outer Click Close
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) closeModal(loginModal);
    if (e.target === signupModal) closeModal(signupModal);
  });

  // Handle Login Submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idValue = document.getElementById('login-id').value.trim();
    
    if (!idValue) {
      showToast('이메일 혹은 아이디를 입력해주세요.', 'info');
      return;
    }

    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', idValue);
    
    updateAuthStateUI();
    closeModal(loginModal);
    loginForm.reset();
    
    showToast(`${idValue.split('@')[0]}님, 환영합니다! 로그인되었습니다.`, 'success');
  });

  // Handle Sign Up Submit
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = document.getElementById('signup-name').value.trim();
    const emailValue = document.getElementById('signup-id').value.trim();
    const passwordValue = document.getElementById('signup-pw').value;

    if (passwordValue.length < 8) {
      showToast('비밀번호는 최소 8자 이상이어야 합니다.', 'info');
      return;
    }

    closeModal(signupModal);
    signupForm.reset();
    showToast('회원가입이 완료되었습니다! 가입하신 정보로 로그인해주세요.', 'success');
    
    // Auto trigger login modal
    setTimeout(() => {
      openModal(loginModal);
    }, 500);
  });

  // Handle Logout
  btnLogout.addEventListener('click', () => {
    isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    
    updateAuthStateUI();
    showToast('성공적으로 로그아웃되었습니다.', 'success');
  });

  // Mypage Interaction
  btnMypage.addEventListener('click', () => {
    const userEmail = localStorage.getItem('userEmail') || '고객';
    showToast(`${userEmail.split('@')[0]}님의 회원 등급은 [Gold Class] 입니다.`, 'info');
  });

  // ==========================================
  // 6. Timeline and Announcement Tabs
  // ==========================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all tabs & panels
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      // Add active to current
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // ==========================================
  // 7. Lightbox Image Gallery
  // ==========================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryLightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-image');
      const caption = item.getAttribute('data-caption');
      
      lightboxImg.src = src;
      lightboxCaption.textContent = caption;
      
      galleryLightbox.style.display = 'flex';
      setTimeout(() => {
        galleryLightbox.classList.add('active');
      }, 10);
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    galleryLightbox.classList.remove('active');
    setTimeout(() => {
      galleryLightbox.style.display = 'none';
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    }, 400);
    document.body.style.overflow = '';
  }

  lightboxCloseBtn.addEventListener('click', closeLightbox);
  galleryLightbox.addEventListener('click', (e) => {
    if (e.target === galleryLightbox) {
      closeLightbox();
    }
  });

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryLightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ==========================================
  // 8. Contact / Inquiry Form Handling
  // ==========================================
  const inquiryForm = document.getElementById('cafe-inquiry-form');
  const btnSubmitInquiry = document.getElementById('btn-submit-inquiry');

  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('inquiry-name').value.trim();
    const email = document.getElementById('inquiry-email').value.trim();
    const type = document.getElementById('inquiry-type').options[document.getElementById('inquiry-type').selectedIndex].text;
    const message = document.getElementById('inquiry-message').value.trim();

    // Basic Validation
    if (!name || !email || !message) {
      showToast('모든 필수 정보를 입력해 주세요.', 'info');
      return;
    }

    // Email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showToast('올바른 이메일 주소를 입력해 주세요.', 'info');
      return;
    }

    // Simulate sending state
    btnSubmitInquiry.disabled = true;
    btnSubmitInquiry.textContent = '문의 전송 중...';

    setTimeout(() => {
      btnSubmitInquiry.disabled = false;
      btnSubmitInquiry.textContent = '문의 접수하기';
      inquiryForm.reset();
      
      showToast(`${name}님의 [${type}] 문의가 성공적으로 접수되었습니다.`, 'success');
    }, 1500);
  });

  // ==========================================
  // 9. Scroll Reveal Animations (Intersection Observer)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once element is revealed, we stop observing it
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Reveal when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Offset to trigger a bit early/late
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

});
