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
  isbn: string;
  startAt: string;
  endAt: string;
  logs?: ReadingBookLog[];

  createdAt: string;
  updatedAt: string;
};
type ReadingBookLog = {
  page: number;
  createdAt: string;
  updatedAt: string;
};
type BookComment = {
  isbn: string;
  page?: number;
  line?: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};
