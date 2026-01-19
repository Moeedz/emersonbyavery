/* ═══════════════════════════════════════════════════════════════
   EMERSON MEGA MENU — HOVER FIX (JavaScript)
   More reliable solution - adds delay before hiding menu
   ═══════════════════════════════════════════════════════════════ */

(function() {
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // Find all nav items with mega menus
    const navItems = document.querySelectorAll('.site-nav > li');
    
    navItems.forEach(function(item) {
      let hideTimeout = null;
      const megaMenu = item.querySelector('.mega-menu-block');
      
      if (!megaMenu) return;
      
      // When mouse enters nav item
      item.addEventListener('mouseenter', function() {
        // Clear any pending hide
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
        // Show menu immediately
        megaMenu.classList.add('is-visible');
      });
      
      // When mouse leaves nav item
      item.addEventListener('mouseleave', function() {
        // Delay hiding by 300ms
        hideTimeout = setTimeout(function() {
          megaMenu.classList.remove('is-visible');
        }, 300);
      });
      
      // When mouse enters mega menu directly
      megaMenu.addEventListener('mouseenter', function() {
        // Clear any pending hide
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
      });
      
      // When mouse leaves mega menu
      megaMenu.addEventListener('mouseleave', function() {
        // Delay hiding
        hideTimeout = setTimeout(function() {
          megaMenu.classList.remove('is-visible');
        }, 300);
      });
    });
    
  });
})();
