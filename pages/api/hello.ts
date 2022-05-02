// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NotionService from "../../notion/config";

type Data = {
  results: Promise<void>;
};
const Client = new NotionService();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = Client.getPublishedBlogPosts();
  res.status(200).json({ results: data });
  console.log(data);
}
