import queryKey from "@/utils/query-key";
import axios from "axios";
import { useMemo } from "react";
import { useQuery } from "react-query";

const useSearchBooks = (name: string, pagination: Pagination) => {
  const query = useQuery(
    queryKey.searchBook(name, pagination),
    () =>
      axios.get<SearchBooksResponse>(`/api/books`, {
        params: { name, ...pagination },
      }),
    { enabled: !!name }
  );

  const books = useMemo(
    () => query.data?.data.items || [],
    [query.data?.data.items]
  );

  return { books, ...query };
};

export default useSearchBooks;
