/* 不蒜子数据同步脚本 */
/* 加载延迟 */
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      syncStatistics();
    }, 1000);
  });
  
  /* 全站数据同步 */
  function syncStatistics() {
    // 同步全站PV数据
    syncStatByType('busuanzi_value_site_pv');
    
    // 同步全站UV数据
    syncStatByType('busuanzi_value_site_uv');
    
    // 同步当前页面PV数据
    syncStatByType('busuanzi_value_page_pv');
  }
  
  /* 数据类型同步 */
  function syncStatByType(idType) {
    var elements = document.querySelectorAll('[id="' + idType + '"]');
    if (elements.length <= 1) return;
    var value = elements[0].textContent || '0';
    for (var i = 1; i < elements.length; i++) {
      elements[i].textContent = value;
    }
  }