"use client";

import { useRef, useEffect } from "react";

export function Particles({
  className,
  quantity = 50,
  staticity = 50,
  ease = 50,
  refresh = false,
}) {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const size = Math.floor(Math.random() * 2) + 1;
    return { x, y, size };
  };

  const drawParticles = () => {
    for (let i = 0; i < quantity; i++) {
      const { x, y, size } = circleParams();
      circles.current.push({
        x,
        y,
        size,
        alpha: 0,
        targetAlpha: Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        magnetism: 0.1 + Math.random() * 4,
      });
    }
  };

  const animate = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
      circles.current.forEach((circle) => {
        const edge = [
          circle.x + circle.size >= canvasSize.current.w,
          circle.x - circle.size <= 0,
          circle.y + circle.size >= canvasSize.current.h,
          circle.y - circle.size <= 0,
        ];

        if (edge[0] || edge[1]) circle.dx *= -1;
        if (edge[2] || edge[3]) circle.dy *= -1;

        circle.x += circle.dx;
        circle.y += circle.dy;

        if (Math.abs(circle.alpha - circle.targetAlpha) > 0.01) {
          circle.alpha += (circle.targetAlpha - circle.alpha) * 0.01;
        } else {
          circle.targetAlpha = Number.parseFloat(
            (Math.random() * 0.6 + 0.1).toFixed(1)
          );
        }

        context.current.beginPath();
        context.current.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        context.current.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`;
        context.current.fill();
      });
    }
    requestAnimationFrame(animate);
  };

  return (
    <div className={"absolute inset-0"} ref={canvasContainerRef}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
