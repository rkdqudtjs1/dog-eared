import usePagination from "@/hooks/usePagination";
import useSearchBooks from "@/hooks/useSearchBooks";
import queryKey from "@/utils/query-key";
import axios from "axios";
import { useState } from "react";

const BookSearchPage = () => {
  const [name, setName] = useState("");
  const [pagination, setPagination] = usePagination();

  const { books } = useSearchBooks(name, pagination);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      {books.map((book) => (
        <div key={book.isbn}>{book.title}</div>
      ))}
    </div>
  );
};

export default BookSearchPage;
