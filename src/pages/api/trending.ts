import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
type Trending = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  img: string;
  description: string;
  published: string;
  author: {
    name: string;
    img: string;
    designation: string;
  };
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trending>
) {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending);
  return res.status(404).json([]);
}
