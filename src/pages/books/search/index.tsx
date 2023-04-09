import Book from "@/components/Book";
import BookDetailModal from "@/components/Book/DetailModal";
import BookSearchInput from "@/components/Book/SearchInput";
import Empty from "@/components/Empty";
import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";
import useDebouncedValue from "@/hooks/useDebouncedValue";
import useSearchBooks from "@/hooks/useSearchBooks";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

const BookSearchPage: NextPage = () => {
  const [name, setName] = useState("");
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

  return (
    <>
      <Head>
        <title>Search Book | Dog Eared</title>
      </Head>
      <div className="flex flex-col">
        <div className="sticky top-0 z-10 ">
          <BookSearchInput value={name} onChange={setName} />
        </div>

        {isLoading && <Loading size="medium" />}
        {isEmpty && <Empty title="검색 결과가 없습니다." />}

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
      </div>

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

export default BookSearchPage;
