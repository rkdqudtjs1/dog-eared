import { ReadingBook } from "@/utils/firebase";

export const createReadingBook = (readingBook: ReadingBook) => {
  return ReadingBook.add(readingBook);
};

export const updateReadingBook = () => {};
export const deleteReadingBook = () => {};
export const getReadingBooks = () => {};

export const createReadingBookLog = () => {};
export const deleteReadingBookLog = () => {};
