"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

type RevealState = "idle" | "hidden" | "visible";

type RevealOwnProps<T extends ElementType> = {
  as?: T;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

/**
 * Fades and rises an element into view the first time it scrolls onscreen.
 * Content already above the fold on load is never hidden, and a 4s safety
 * timeout un-hides anything the observer misses (e.g. if the page never scrolls).
 */
export function Reveal<T extends ElementType = "div">({
  as,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
      setState("hidden");

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            setState("visible");
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
      );
      io.observe(el);

      let fired = false;
      const onScroll = () => {
        fired = true;
      };
      document.addEventListener("scroll", onScroll, { once: true, passive: true });

      const safety = setTimeout(() => {
        if (!fired) setState("visible");
      }, 4000);

      return () => {
        io.disconnect();
        clearTimeout(safety);
        document.removeEventListener("scroll", onScroll);
      };
    }

    setState("visible");
  }, []);

  const revealStyle =
    state === "hidden"
      ? { opacity: 0 }
      : state === "visible"
      ? { animation: "df-rise 700ms cubic-bezier(.2,.7,.2,1) both" }
      : undefined;

  return (
    <Tag ref={ref} style={{ ...style, ...revealStyle }} {...rest} />
  );
}
