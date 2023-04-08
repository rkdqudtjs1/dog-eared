import { useRouter } from "next/router";
import { useCallback } from "react";

const items = [
  { path: "/", label: "Calendar" },
  { path: "/books/search", label: "Search" },
];

const GlobalNavigation = () => {
  const { push, route } = useRouter();
  const onClickItem = useCallback(
    (path: string) => {
      if (route === path) return;
      push(path);
    },
    [route]
  );

  return (
    <nav className={`flex h-16 w-full fixed bottom-0 left-0 bg-grey-2`}>
      {items.map(({ label, path }) => (
        <button
          type="button"
          key={path}
          onClick={() => onClickItem(path)}
          className="flex-1 text-center"
        >
          {route === path ? <b className="font-bold">{label}</b> : label}
        </button>
      ))}
    </nav>
  );
};

export default GlobalNavigation;
