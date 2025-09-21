import { useEffect } from 'react';

export function ExternalLinkHandler() {
  useEffect(() => {
    const handleExternalLinks = () => {
      const links = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
      
      links.forEach(link => {
        if (!link.hasAttribute('target')) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
    };

    // Run on initial load
    handleExternalLinks();

    // Run when new content is added (for dynamic content)
    const observer = new MutationObserver(handleExternalLinks);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
