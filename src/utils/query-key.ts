const queryKey = {
  searchBook: (name: string) => ["books", "search", { name }],

  getReadingBooks: () => ["reading-books"],
};

export default queryKey;
