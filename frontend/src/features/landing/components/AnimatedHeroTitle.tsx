import React, { useEffect, useState } from "react";
import type { AnimatedHeroTitleProps } from "../types";

export function AnimatedHeroTitle({
  line1,
  line2,
  className,
  style,
}: AnimatedHeroTitleProps): React.JSX.Element {
  const totalChars = line1.length + line2.length;
  const [count, setCount] = useState(0);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsReduced(true);
      return;
    }

    let intervalId: any;
    let timeoutId: any;
    let isCancelled = false;

    const startTyping = () => {
      if (isCancelled) return;
      setCount(0);
      let current = 0;
      // Animate text reveal progressively across ~1.7 seconds
      const charDelay = Math.max(26, Math.round(1700 / Math.max(1, totalChars)));

      intervalId = setInterval(() => {
        if (isCancelled) return;
        current += 1;
        setCount(current);

        if (current >= totalChars) {
          clearInterval(intervalId);
          // Hold full title visible for ~1.15 seconds so visitor can easily read it
          timeoutId = setTimeout(() => {
            if (isCancelled) return;
            // Smoothly reset and pause ~150ms before repeating (total ~3.0s cycle)
            setCount(0);
            timeoutId = setTimeout(() => {
              if (isCancelled) return;
              startTyping();
            }, 150);
          }, 1150);
        }
      }, charDelay);
    };

    startTyping();

    return () => {
      isCancelled = true;
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [totalChars]);

  if (isReduced) {
    return (
      <h1 className={`hero-animated-title ${className || ""}`} style={style}>
        <span className="title-line title-line-1">{line1}</span>
        <br />
        <em>
          <span className="title-line title-line-2">{line2}</span>
        </em>
      </h1>
    );
  }

  const renderLine = (lineText: string, offset: number) => {
    const words = lineText.split(" ");
    let currentOffset = offset;

    return words.map((word, wIdx) => {
      const wordStart = currentOffset;
      const chars = word.split("");
      currentOffset += chars.length;
      const isNotLastWord = wIdx < words.length - 1;
      const spaceIndex = currentOffset;
      if (isNotLastWord) {
        currentOffset += 1;
      }

      return (
        <React.Fragment key={wIdx}>
          <span
            className="title-word"
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {chars.map((char, cIdx) => {
              const charIdx = wordStart + cIdx;
              const isVisible = charIdx < count;
              return (
                <span
                  key={cIdx}
                  className={`title-char ${isVisible ? "char-visible" : "char-hidden"
                    }`}
                >
                  {char}
                </span>
              );
            })}
          </span>
          {isNotLastWord && (
            <span
              className={`title-char title-space ${spaceIndex < count ? "char-visible" : "char-hidden"
                }`}
            >
              {" "}
            </span>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <h1
      className={`hero-animated-title ${className || ""}`}
      style={style}
      aria-label={`${line1} ${line2}`}
    >
      <span className="title-line title-line-1">{renderLine(line1, 0)}</span>
      <br />
      <em>
        <span className="title-line title-line-2">
          {renderLine(line2, line1.length)}
        </span>
      </em>
    </h1>
  );
}

