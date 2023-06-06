import BookSearchInput from "@/components/Book/SearchInput";
import BookSearchResults from "@/components/Book/SearchResults";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Search Book | Dog Eared",
};

const BookSearchPage: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-10 ">
        <BookSearchInput />
      </div>

      <BookSearchResults />
    </div>
  );
};

export default BookSearchPage;
