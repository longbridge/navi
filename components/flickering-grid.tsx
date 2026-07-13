'use client';

import { useEffect, useRef } from 'react';

interface FlickeringGridProps {
  /** Side length of each square dot, in CSS pixels. */
  squareSize?: number;
  /** Gap between dots, in CSS pixels. */
  gridGap?: number;
  /** Per-frame chance (0–1) that a dot changes its target opacity. */
  flickerChance?: number;
  /** Max opacity a dot can reach. */
  maxOpacity?: number;
  className?: string;
}

/**
 * Animated dot-grid canvas used behind the homepage hero (DESIGN.md §11).
 * Dot color follows the active theme by reading the `--lb-hero-dot` token,
 * re-sampled whenever the `.dark` class on <html> toggles — matching the
 * theme-detection pattern already used in components/navi-editor.tsx.
 */
export function FlickeringGrid({
  squareSize = 3,
  gridGap = 6,
  flickerChance = 0.25,
  maxOpacity = 0.35,
  className,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cols = 0;
    let rows = 0;
    let squares = new Float32Array(0);
    let dotColor = 'rgba(10, 14, 25, 0.28)';

    const readDotColor = () => {
      const value = getComputedStyle(container)
        .getPropertyValue('--lb-hero-dot')
        .trim();
      if (value) dotColor = value;
    };

    const setup = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const step = squareSize + gridGap;
      cols = Math.ceil(width / step);
      rows = Math.ceil(height / step);
      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const step = (squareSize + gridGap) * dpr;
      const size = squareSize * dpr;
      const rgb = dotColor.replace(/^rgba?\(/, '').replace(/\)$/, '');
      const parts = rgb.split(',').map((p) => p.trim());
      const base = `${parts[0]}, ${parts[1]}, ${parts[2]}`;
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const opacity = squares[x * rows + y];
          ctx.fillStyle = `rgba(${base}, ${opacity})`;
          ctx.fillRect(x * step, y * step, size, size);
        }
      }
    };

    let last = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      const chance = flickerChance * delta * 60;
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < chance) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
      draw();
      raf = requestAnimationFrame(loop);
    };

    readDotColor();
    setup();
    raf = requestAnimationFrame(loop);

    const resizeObserver = new ResizeObserver(() => setup());
    resizeObserver.observe(container);

    const themeObserver = new MutationObserver(() => readDotColor());
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
