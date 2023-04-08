import queryKey from "@/utils/query-key";
import axios from "axios";
import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

type Options = { limit?: number };

const useSearchBooks = (name: string, { limit = 10 }: Options) => {
  const query = useInfiniteQuery(
    queryKey.searchBook(name),
    ({ pageParam = 1 }) =>
      axios.get<SearchBooksResponse>(`/api/books`, {
        params: { name, limit, page: pageParam },
      }),
    {
      getNextPageParam: ({ data }) => {
        const { start, display, total } = data;
        const hasNextPage = start + display < total;
        if (!hasNextPage) return;
        const nextPage = (start - 1) / limit + 1 + 1;
        return nextPage;
      },
      enabled: !!name,
    }
  );

  const books = useMemo(
    () => query.data?.pages.flatMap(({ data }) => data.items) || [],
    [query.data?.pages]
  );

  return { books, ...query };
};

export default useSearchBooks;
