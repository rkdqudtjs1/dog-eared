import { useState } from "react";

const usePagination = (initialPagination?: Partial<Pagination>) => {
  return useState<Pagination>({
    limit: 10,
    page: 1,
    ...initialPagination,
  });
};

export default usePagination;
