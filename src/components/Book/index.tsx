import Image from "next/image";

type Props = {
  book: Book;
  onClick?: (book: Book) => void;
};

const Book = ({ book, onClick = () => undefined }: Props) => {
  return (
    <div className="flex" onClick={() => onClick(book)}>
      <div className="relative" style={{ width: "100px", height: "100px" }}>
        <Image
          fill
          src={book.image}
          alt={book.title}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="font-bold text-xl">
          {book.title} / {book.author} / {book.publisher}
        </div>
        <div className="line-clamp-3">{book.description}</div>
      </div>
    </div>
  );
};

export default Book;
