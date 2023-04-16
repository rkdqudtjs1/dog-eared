import queryKey from "@/utils/query-key";
import axios from "axios";
import { useMemo } from "react";
import { useQuery } from "react-query";

const useReadingBooks = () => {
  const query = useQuery(queryKey.getReadingBooks(), () =>
    axios.get<ReadingBook[]>("/api/reading-books")
  );

  const readingBooks = useMemo((): ReadingBook[] => {
    if (!query.data) return [];
    return query.data.data;
  }, [query.data]);

  return { ...query, readingBooks };
};

export default useReadingBooks;
