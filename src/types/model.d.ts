type ModelBase = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

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
type ReadingBook = ModelBase & {
  isbn: string;
  startAt: string;
  endAt: string;
  logs?: ReadingBookLog[];
};
type ReadingBookLog = ModelBase & {
  page: number;
};
type BookComment = ModelBase & {
  isbn: string;
  page?: number;
  line?: number;
  content: string;
};
