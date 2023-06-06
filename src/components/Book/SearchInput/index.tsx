"use client";

import { useState } from "react";

const BookSearchInput = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="gap-1 flex items-center px-4 h-11 bg-grey-2">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        autoFocus
        className="flex-1 h-full outline-none"
        value={query}
        placeholder="검색어를 입력하세요."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default BookSearchInput;
