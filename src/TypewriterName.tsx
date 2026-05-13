import { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  delay?: number;
}

export default function TypewriterName({ name, delay = 0 }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          setTimeout(() => {
            const interval = setInterval(() => {
              i++;
              setDisplayed(name.slice(0, i));
              if (i >= name.length) {
                clearInterval(interval);
                setTimeout(() => setDone(true), 600);
              }
            }, 55);
          }, delay);
          observer.unobserve(wrap);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, [name, delay]);

  return (
    <span ref={wrapRef} style={{ display: "inline-flex", alignItems: "baseline", gap: 1 }}>
      <span className="participant-name">
        {displayed || "\u00A0"}
      </span>
      {!done && <span className="cursor-blink">|</span>}
    </span>
  );
}
