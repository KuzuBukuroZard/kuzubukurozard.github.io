document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和语言内容
    const zhBtn = document.getElementById('zh-btn');
    const enBtn = document.getElementById('en-btn');
    const zhElements = document.querySelectorAll('.zh');
    const enElements = document.querySelectorAll('.en');
    
    // 显示中文，隐藏英文
    function showChinese() {
      zhElements.forEach(el => {
        if (el.tagName === 'H2') {
          el.style.display = 'block';
          el.style.textAlign = 'center';
        } else if (el.classList.contains('intro')) {
          el.style.display = 'block';
          el.style.textAlign = 'center';
        } else {
          el.style.display = 'inline-block';
        }
      });
      enElements.forEach(el => el.style.display = 'none');
      zhBtn.classList.add('active');
      enBtn.classList.remove('active');
      localStorage.setItem('language', 'zh');
    }
  
    // 切换到英文
    function showEnglish() {
      zhElements.forEach(el => el.style.display = 'none');
      
      enElements.forEach(el => {
        if (el.tagName === 'H2') {
          el.style.display = 'block';
          el.style.textAlign = 'center';
        } else if (el.classList.contains('intro')) {
          el.style.display = 'block';
          el.style.textAlign = 'center';
        } else {
          el.style.display = 'inline-block';
        }
      });
      enBtn.classList.add('active');
      zhBtn.classList.remove('active');
      localStorage.setItem('language', 'en');
    }
      
    // 检查之前选择的语言并应用
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
      showEnglish();
    } else {
      showChinese();
    }
      
    // 添加按钮事件监听器
    if (zhBtn) zhBtn.addEventListener('click', showChinese);
    if (enBtn) enBtn.addEventListener('click', showEnglish);
  });