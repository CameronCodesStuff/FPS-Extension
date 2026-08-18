(() => {
  if (document.getElementById('__fps_overlay__')) return;

  const overlay = document.createElement('div');
  overlay.id = '__fps_overlay__';
  overlay.style.cssText = `
    position: fixed;
    top: 8px;
    right: 8px;
    z-index: 2147483647;
    background: rgba(0, 0, 0, 0.75);
    color: #00ff88;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
    pointer-events: none;
    user-select: none;
    letter-spacing: 0.5px;
    min-width: 56px;
    text-align: center;
    border: 1px solid rgba(0,255,136,0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  `;
  overlay.textContent = '-- FPS';
  document.documentElement.appendChild(overlay);

  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;

  function update(now) {
    frames++;
    const delta = now - lastTime;
    if (delta >= 500) {
      fps = Math.round((frames * 1000) / delta);
      frames = 0;
      lastTime = now;

      let color;
      if (fps >= 55)       color = '#00ff88'; // green
      else if (fps >= 30)  color = '#ffcc00'; // yellow
      else                 color = '#ff4444'; // red

      overlay.style.color = color;
      overlay.style.borderColor = color.replace(')', ', 0.25)').replace('rgb', 'rgba').replace('#', 'rgba(').replace(/rgba\((..)(..)(..),/, (_, r, g, b) => {
        return `rgba(${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)},`;
      });
      overlay.textContent = `${fps} FPS`;
    }
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
})();
