"use client";

import { useEffect, useMemo, useState } from "react";

export default function AnimatedWord({
  words,
  typeSpeed = 74,
  deleteSpeed = 42,
  holdDelay = 1200,
}) {
  const stableWords = useMemo(() => words.filter(Boolean), [words]);
  const initialWord = stableWords[0] ?? "";
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(initialWord);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!stableWords.length) {
      return undefined;
    }

    const activeWord = stableWords[wordIndex % stableWords.length];
    const isFullWord = text === activeWord;
    const delay = isFullWord && !deleting ? holdDelay : deleting ? deleteSpeed : typeSpeed;

    const timer = window.setTimeout(() => {
      if (!deleting && !isFullWord) {
        setText(activeWord.slice(0, text.length + 1));
        return;
      }

      if (!deleting && isFullWord) {
        setDeleting(true);
        return;
      }

      if (deleting && text.length > 1) {
        setText(activeWord.slice(0, text.length - 1));
        return;
      }

      if (deleting) {
        const nextIndex = (wordIndex + 1) % stableWords.length;
        setDeleting(false);
        setWordIndex(nextIndex);
        setText(stableWords[nextIndex].slice(0, 1));
        return;
      }

      setDeleting(false);
      setWordIndex((index) => index + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleteSpeed, deleting, holdDelay, stableWords, text, typeSpeed, wordIndex]);

  return (
    <span className="animated-word" aria-live="polite">
      {text}
      <span className="animated-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
