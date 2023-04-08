const queryKey = {
  searchBook: (name: string, pagination: Pagination) => [
    "books",
    "search",
    { name, ...pagination },
  ],
};

export default queryKey;
