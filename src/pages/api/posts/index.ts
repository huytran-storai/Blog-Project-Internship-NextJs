import type { NextApiRequest, NextApiResponse } from "next";
import data from "../data";
type Posts = {
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
  res: NextApiResponse<Posts>
) {
  const { Posts } = data;
  if (Posts) return res.status(200).json(Posts);
  return res.status(404).json([]);
}
