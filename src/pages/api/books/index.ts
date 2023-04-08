// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import naverAPI from "@/utils/naver-api";

const searchBooks = (name: string, { limit, page }: Pagination) => {
  const start = (page - 1) * limit + 1;
  return naverAPI.get("/search/book.json", {
    params: {
      query: name,
      display: limit,
      start,
      sort: "sim",
    },
  });
};

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
