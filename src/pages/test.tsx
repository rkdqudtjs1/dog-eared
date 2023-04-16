import useReadingBooks from "@/hooks/useReadingBooks";

const TestPage = () => {
  const { readingBooks } = useReadingBooks();

  return (
    <div>
      {readingBooks.map((rb) => {
        return <pre key={rb.id}>{JSON.stringify(rb, null, 2)}</pre>;
      })}
    </div>
  );
};

export default TestPage;
