import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onReachedEnd: () => void;
};

const InfiniteScrollContainer = ({
  children,
  disabled,
  onReachedEnd,
}: Props) => {
  const watcher = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (disabled || entries.length === 0) return;
      const entry = entries[0];

      if (entry.isIntersecting) {
        onReachedEnd();
      }
    });

    if (watcher.current) io.observe(watcher.current);

    return () => {
      io.disconnect();
    };
  }, [disabled]);

  return (
    <div>
      {children}
      <div ref={watcher} />
    </div>
  );
};

export default InfiniteScrollContainer;
