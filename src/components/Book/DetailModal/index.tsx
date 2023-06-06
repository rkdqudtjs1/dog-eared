import Modal from "@/components/Common/Modal";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: Book;
  visible: boolean;
  onClose: () => void;
};

const BookDetailModal = ({ book, visible, onClose }: Props) => {
  const informations = [
    { label: "저자", value: book.author },
    { label: "출판", value: book.publisher },
    { label: "발행", value: dayjs(book.pubdate).format("YYYY.MM.DD") },
    {
      label: "금액",
      value: (
        <Link href={book.link} target="_blank">
          {Number(book.discount).toLocaleString("ko-KR")}
        </Link>
      ),
    },
  ];

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="flex flex-col p-8 pt-0 gap-4">
        <div className="relative w-full h-[300px] h-max-[30vh]">
          <Image
            className="object-contain"
            fill
            src={book.image}
            alt={book.title}
          />
        </div>
        <div className="text-xl font-bold">{book.title}</div>
        <div className="text-sm flex flex-wrap gap-y-1">
          {informations.map(({ label, value }) => (
            <div key={label} className="flex gap-2 w-3/6">
              <div className="text-grey-6">{label} </div>
              <div>{value}</div>
            </div>
          ))}
        </div>
        <hr className="text-grey-4" />
        <div className="text-sm font-thin">{book.description}</div>
      </div>
    </Modal>
  );
};

export default BookDetailModal;
