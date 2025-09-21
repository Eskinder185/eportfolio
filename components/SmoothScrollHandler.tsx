import { useEffect } from 'react';

export function SmoothScrollHandler() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (!link || !link.hash) return;
      
      const targetElement = document.querySelector(link.hash);
      if (!targetElement) return;
      
      e.preventDefault();
      
      // Calculate header offset
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const offset = 20; // Additional offset for breathing room
      
      const targetPosition = targetElement.getBoundingClientRect().top + 
                           window.pageYOffset - 
                           headerHeight - 
                           offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Focus management for accessibility
      const focusTarget = targetElement as HTMLElement;
      focusTarget.setAttribute('tabindex', '-1');
      
      // Small delay to ensure scroll completes
      setTimeout(() => {
        focusTarget.focus({ preventScroll: true });
        
        // Remove tabindex after focus
        setTimeout(() => {
          focusTarget.removeAttribute('tabindex');
        }, 600);
      }, 300);
    };

    // Handle escape key for mobile menu
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open mobile menus
        const openMenus = document.querySelectorAll('[aria-expanded="true"]');
        openMenus.forEach((menu) => {
          const button = menu as HTMLButtonElement;
          button.setAttribute('aria-expanded', 'false');
          button.focus();
          
          // Find and close associated menu
          const menuId = button.getAttribute('aria-controls');
          if (menuId) {
            const menuElement = document.getElementById(menuId);
            if (menuElement) {
              menuElement.classList.remove('open');
            }
          }
        });
      }
    };

    // Handle click outside for mobile menus
    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      const openMenus = document.querySelectorAll('.nav-menu.open, [data-nav-open="true"]');
      
      openMenus.forEach((menu) => {
        const menuElement = menu as HTMLElement;
        const toggle = document.querySelector(`[aria-controls="${menuElement.id}"]`) as HTMLButtonElement;
        
        if (toggle && !menuElement.contains(target) && !toggle.contains(target)) {
          menuElement.classList.remove('open');
          menuElement.removeAttribute('data-nav-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    };

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return null;
}
