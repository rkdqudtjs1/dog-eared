import { useRouter } from "next/router";
import { useCallback } from "react";

const items = [
  { path: "/", label: "Calendar", icon: "fa-regular fa-calendar-days" },
  {
    path: "/books/search",
    label: "Search",
    icon: "fa-solid fa-magnifying-glass",
  },
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
      {items.map(({ label, icon, path }) => {
        const isActive = route === path;

        return (
          <button
            type="button"
            key={path}
            onClick={() => onClickItem(path)}
            className={`flex flex-col items-center justify-center gap-1 flex-1 text-center ${
              isActive ? "font-bold" : "opacity-60"
            }`}
          >
            <span className="text-lg">
              <i className={icon} />
            </span>
            <span className="text-xs">{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default GlobalNavigation;
