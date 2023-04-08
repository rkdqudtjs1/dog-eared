const IndexPage = () => {
  const idea = [
    {
      title: "Calendar",
      contents: [
        "Log: book.readStartAt",
        "Log: book.readEndAt",
        "Log: comment.createdAt",
      ],
    },
    {
      title: "Book",
      contents: ["Func: Search Book", "Func: Add ReadingBook", "Func: "],
    },
    {
      title: "BookComment",
      contents: ["Func: Add BookComment (book, page, line, content)"],
    },
  ];

  return (
    <div>
      {idea.map(({ title, contents }) => (
        <section key={title}>
          <ul>
            <h2>{title}</h2>
            {contents.map((content) => (
              <li key={content}>{content}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default IndexPage;
