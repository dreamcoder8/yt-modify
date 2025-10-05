function applyFourColumnsAndZoom() {
  const grid = document.querySelector("ytd-rich-grid-renderer");
  
  if (grid && location.pathname === "/") {
    // Force 4 columns
    grid.style.setProperty("--ytd-rich-grid-items-per-row", "5");

    // Zoom out grid only
    grid.style.zoom = "0.75";
  } else if (grid) {
    // Reset zoom on other pages
    grid.style.zoom = "1";
  }
}

// Apply once on load
applyFourColumnsAndZoom();

// Re-apply when YouTube updates dynamically (SPA navigation)
const observer = new MutationObserver(() => applyFourColumnsAndZoom());
observer.observe(document.body, { childList: true, subtree: true });

// Also re-apply when navigating between pages
window.addEventListener("yt-navigate-finish", applyFourColumnsAndZoom);
