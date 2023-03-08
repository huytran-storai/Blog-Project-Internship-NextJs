import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
type Popular = {
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
  res: NextApiResponse<Popular>
) {
  const { Popular } = data;
  if (Popular) return res.status(200).json(Popular);
  return res.status(404).json([]);
}
