type Props = { value: string; onChange: (value: string) => void };

const BookSearchInput = ({ value, onChange }: Props) => {
  return (
    <div className="gap-1 flex items-center px-4 h-11 bg-grey-2">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        autoFocus
        className="flex-1 h-full outline-none"
        value={value}
        placeholder="검색어를 입력하세요."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default BookSearchInput;
