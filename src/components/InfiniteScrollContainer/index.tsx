import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onReachedStart?: () => void;
  onReachedEnd?: () => void;
};

const InfiniteScrollContainer = ({
  children,
  disabled,
  onReachedStart,
  onReachedEnd,
}: Props) => {
  const start = useRef<HTMLDivElement>(null);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (disabled || entries.length === 0) return;

      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        if (target === start.current && onReachedStart) onReachedStart();
        if (target === end.current && onReachedEnd) onReachedEnd();
      });
    });

    if (start.current) io.observe(start.current);
    if (end.current) io.observe(end.current);

    return () => {
      io.disconnect();
    };
  }, [disabled, onReachedEnd, onReachedStart]);

  return (
    <div>
      <div ref={start} />
      {children}
      <div ref={end} />
    </div>
  );
};

export default InfiniteScrollContainer;
