const queryKey = {
  searchBook: (name: string) => [
    "books",
    "search",
    { name },
  ],
};

export default queryKey;
