type SearchBooksResponse = {
  display: number;
  start: number;
  total: number;
  items: Book[];
  lastBuildDate: string;
};
