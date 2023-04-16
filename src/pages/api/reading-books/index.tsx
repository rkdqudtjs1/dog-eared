import { createReadingBook, getReadingBooks } from "@/services/reading-book";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { query, method } = req;

  if (method === "GET") {
    const result = await getReadingBooks();

    res.status(200).json(result);
  }

  if (method === "POST") {
    const result = await createReadingBook({
      isbn: "9791197021688",
      startAt: "2023-04-16",
      endAt: "",
      logs: [],
      createdAt: "",
      updatedAt: "",
    });

    res.status(200).json(result);
  }

  res.status(404);
};

export default handler;
