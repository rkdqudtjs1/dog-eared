import naverAPI from "@/utils/naver-api";

export const searchBooks = (name: string, { limit, page }: Pagination) => {
  const start = (page - 1) * limit + 1;
  return naverAPI.get("/search/book.json", {
    params: {
      query: name,
      display: limit,
      start,
      sort: "sim",
    },
  });
};
