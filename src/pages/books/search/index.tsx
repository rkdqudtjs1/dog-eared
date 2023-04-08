import Book from "@/components/Book";
import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import useDebouncedValue from "@/hooks/useDebouncedValue";
import useSearchBooks from "@/hooks/useSearchBooks";
import { NextPage } from "next";
import { useState } from "react";

const BookSearchPage: NextPage = () => {
  const [name, setName] = useState("");
  const debouncedName = useDebouncedValue(name);

  const { books, isFetching, hasNextPage, fetchNextPage } = useSearchBooks(
    debouncedName,
    { limit: 20 }
  );

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-10">
        <input
          className="w-full p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <InfiniteScrollContainer
        onReachedEnd={fetchNextPage}
        disabled={isFetching || !hasNextPage}
      >
        <div className="flex flex-col gap-4 p-4">
          {books.map((book) => (
            <Book key={book.isbn} book={book} />
          ))}
        </div>
      </InfiniteScrollContainer>
    </div>
  );
};

export default BookSearchPage;
