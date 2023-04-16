// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchBooks } from "@/services/book";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { query, method } = req;

  const name = String(query.name);
  const pagination: Pagination = {
    page: Number(query.page) || 1,
    limit: Number(query.limit) || 10,
  };

  if (method === "GET") {
    const { data } = await searchBooks(name, pagination);
    res.status(200).json(data);
  }

  res.status(404);
};

export default handler;
