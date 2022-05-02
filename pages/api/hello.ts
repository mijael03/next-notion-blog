// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NotionService from "../../notion/config";

type Data = {
  name: string;
};
const Client = new NotionService();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  Client.getPublishedBlogPosts();
  res.status(200).json({ name: "John Doe" });
}
