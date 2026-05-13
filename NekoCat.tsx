import { useEffect } from "react";

const spriteSets: Record<string, [number, number][]> = {
  idle:        [[-3, -3]],
  alert:       [[-7, -3]],
  scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
  tired:       [[-3, -2]],
  sleeping:    [[-2, 0], [-2, -1]],
  N:           [[-1, -2], [-1, -3]],
  NE:          [[ 0, -2], [ 0, -3]],
  E:           [[-3,  0], [-3, -1]],
  SE:          [[-5, -1], [-5, -2]],
  S:           [[-6, -3], [-7, -3]],
  SW:          [[-5, -3], [-6, -3]],
  W:           [[-4, -2], [-4, -3]],
  NW:          [[-2, -2], [-2, -3]],
};

export default function NekoCat() {
  useEffect(() => {
    const el = document.createElement("div");
    Object.assign(el.style, {
      width: "32px",
      height: "32px",
      position: "fixed",
      pointerEvents: "none",
      imageRendering: "pixelated",
      zIndex: "999999",
      backgroundImage: "url(/oneko.png)",
      backgroundRepeat: "no-repeat",
      left: "0px",
      top: "0px",
    });
    document.body.appendChild(el);

    let posX = 32, posY = 32;
    let targetX = posX, targetY = posY;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnim: string | null = null;
    let idleFrame = 0;

    function setSprite(name: string, frame: number) {
      const set = spriteSets[name];
      if (!set) return;
      const [sx, sy] = set[frame % set.length];
      el.style.backgroundPosition = `${sx * 32}px ${sy * 32}px`;
    }

    function resetIdle() { idleAnim = null; idleFrame = 0; }

    function idle() {
      idleTime++;
      if (idleTime > 10 && Math.random() < 0.005 && !idleAnim) {
        idleAnim = Math.random() < 0.5 ? "sleeping" : "scratchSelf";
      }
      if (idleAnim === "sleeping") {
        if (idleFrame < 8) setSprite("tired", 0);
        else {
          setSprite("sleeping", Math.floor(idleFrame / 4));
          if (idleFrame > 192) resetIdle();
        }
        idleFrame++;
        return;
      }
      if (idleAnim === "scratchSelf") {
        setSprite("scratchSelf", idleFrame);
        idleFrame++;
        if (idleFrame > 9) resetIdle();
        return;
      }
      setSprite(Math.floor(idleTime / 32) % 2 === 0 ? "idle" : "alert", 0);
    }

    function tick() {
      frameCount++;
      const dx = targetX - posX;
      const dy = targetY - posY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 48) { idle(); return; }

      idleTime = 0;
      resetIdle();

      const speed = 10;
      const stepX = (dx / dist) * Math.min(speed, dist);
      const stepY = (dy / dist) * Math.min(speed, dist);

      let dir = "";
      if (Math.abs(dy) > Math.abs(dx) * 0.5) dir += dy < 0 ? "N" : "S";
      if (Math.abs(dx) > Math.abs(dy) * 0.5) dir += dx < 0 ? "W" : "E";
      if (!dir) dir = "S";

      setSprite(dir, Math.floor(frameCount / 2));

      posX += stepX;
      posY += stepY;
      el.style.left = (posX - 16) + "px";
      el.style.top  = (posY - 16) + "px";
    }

    const onMouse = (e: MouseEvent) => { targetX = e.clientX; targetY = e.clientY; };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0] ?? e.changedTouches[0];
      if (t) { targetX = t.clientX; targetY = t.clientY; }
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove",  onTouch, { passive: true });
    window.addEventListener("touchend",   onTouch, { passive: true });
    const interval = setInterval(tick, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove",  onTouch);
      window.removeEventListener("touchend",   onTouch);
      el.remove();
    };
  }, []);

  return null;
}
