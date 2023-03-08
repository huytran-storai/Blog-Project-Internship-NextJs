import data from "../data";

import type { NextApiRequest, NextApiResponse } from "next";

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
  const { postId } = req.query;
  const { Posts } = data;
  if (postId) {
    const post = Posts.find((value) => value.id === Number(postId));
    return res.status(200).json(post);
  }
  return res.status(404).json([]);
}
