type Book = {
  isbn: string; // PK
  author: string;
  description: string;
  discount: string;
  image: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
};
type ReadingBook = {
  bookId: string;
  startAt: string;
  endAt: string;
  logs: {}[];

  createdAt: string;
  updatedAt: string;
};
type ReadingBookLog = {
  page: number;
  createdAt: string;
  updatedAt: string;
};
type BookComment = {
  bookId: string;
  page?: number;
  line?: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};
