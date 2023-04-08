import Book from "@/components/Book";
import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import usePagination from "@/hooks/usePagination";
import useSearchBooks from "@/hooks/useSearchBooks";
import queryKey from "@/utils/query-key";
import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";

const BookSearchPage: NextPage = () => {
  const [name, setName] = useState("");
  const [pagination, setPagination] = usePagination();

  const { books, isFetching, hasNextPage, fetchNextPage } = useSearchBooks(
    name,
    pagination
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
        onReachedEnd={() => {
          console.log("fetch next");
          fetchNextPage();
        }}
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
