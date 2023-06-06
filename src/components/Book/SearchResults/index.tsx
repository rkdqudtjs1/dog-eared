"use client";

import Empty from "@/components/Common/Empty";
import InfiniteScrollContainer from "@/components/Common/InfiniteScrollContainer";
import Loading from "@/components/Common/Loading";
import Book from "..";
import BookDetailModal from "../DetailModal";
import { useEffect, useMemo, useState } from "react";
import useDebouncedValue from "@/hooks/useDebouncedValue";
import useSearchBooks from "@/hooks/useSearchBooks";

const BookSearchResults = () => {
  const name = "";
  const debouncedName = useDebouncedValue(name);
  const [isSearched, setIsSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const { books, isFetching, isLoading, hasNextPage, fetchNextPage } =
    useSearchBooks(debouncedName, { limit: 20 });

  const isEmpty = useMemo(
    () => !isLoading && isSearched && books.length === 0,
    [books.length, isLoading, isSearched]
  );

  const onCloseModal = () => setSelectedBook(null);

  useEffect(() => {
    if (!isSearched && isLoading) setIsSearched(true);
  }, [isLoading]);

  if (isLoading) return <Loading size="medium" />;
  if (isEmpty) return <Empty title="검색 결과가 없습니다." />;

  return (
    <>
      <InfiniteScrollContainer
        onReachedEnd={fetchNextPage}
        disabled={isFetching || !hasNextPage}
      >
        <div className="flex flex-col gap-4 p-4">
          {books.map((book) => (
            <Book key={book.isbn} book={book} onClick={setSelectedBook} />
          ))}
        </div>
      </InfiniteScrollContainer>

      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          visible={!!selectedBook}
          onClose={onCloseModal}
        />
      )}
    </>
  );
};
export default BookSearchResults;
