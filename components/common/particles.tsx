"use client";
import { useEffect, useRef } from "react";

export default function RisingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const mouse = {
            x: undefined as number | undefined,
            y: undefined as number | undefined,
            radius: 600,
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

        class Particle {
            x: number;
            y: number;
            size: number;
            baseSpeed: number;
            speed: number;
            opacity: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 0.5 + 0.6;
                this.baseSpeed = Math.random() * 0.3;
                this.speed = this.baseSpeed;
                this.opacity = Math.random() * 1 + 1;
            }

            update() {
                if (mouse.x !== undefined && mouse.y !== undefined) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const angle = Math.atan2(dy, dx);
                        const pushFactor = ((mouse.radius - distance) / mouse.radius) * 0.2;
                        this.x += Math.cos(angle) * pushFactor;
                    }
                }

                this.y -= this.speed;
                if (canvas) {
                    if (this.y < -10) {
                        this.y = canvas.height + 10;
                        this.x = Math.random() * canvas.width;
                    }

                    if (this.x < 0) this.x = canvas.width;
                    if (this.x > canvas.width) this.x = 0;
                }
            }

            draw() {
                if (ctx && canvas) {
                    const alphaFactor = 1 - this.y / canvas.height;
                    const adjustedOpacity = Math.min(1, this.opacity * alphaFactor);

                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${adjustedOpacity})`;
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        let particleArray: Particle[] = [];
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 3000);

        const initParticles = () => {
            particleArray = [];
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particleArray.push(new Particle(x, y));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].update();
                particleArray[i].draw();
            }
            requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        const handleResize = () => {
            resizeCanvas();
            initParticles();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                zIndex: -1,
                display: "block",
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                WebkitMaskImage: "linear-gradient(to right, transparent 4%, black 40%, black 60%, transparent 96%)",
                maskImage: "linear-gradient(to right, transparent 4%, black 40%, black 60%, transparent 96%)",
            }}
        />
    );
}
