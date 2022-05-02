import { Client } from "@notionhq/client";
export default class NotionService {
  client: Client;
  constructor() {
    this.client = new Client({
      auth: "secret_eiIcTzHhaWKCY0x5NaelaxLp3DLRuCYk6AzfNvEcxBc",
    });
  }

  async getPublishedBlogPosts() {
    const database = "3d577111c927434f8688bf48ccb01dda" ?? "";
    // list blog posts
    const response = await this.client.databases.query({
      database_id: database,
    });
    console.log(response.results[0]);
  }
}
