import { ReadingBook, docToData } from "@/utils/server/firebase";

export const createReadingBook = (readingBook: ReadingBook) => {
  return ReadingBook.add(readingBook);
};

export const updateReadingBook = () => {};
export const deleteReadingBook = () => {};
export const getReadingBooks = async () => {
  const { docs } = await ReadingBook.get();
  return docs.map(docToData);
};

export const createReadingBookLog = () => {};
export const deleteReadingBookLog = () => {};
