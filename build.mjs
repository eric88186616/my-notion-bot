import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function main() {
  const pageId = process.env.PARENT_PAGE_ID;
  console.log("开始建库...");
  
  await notion.databases.create({
    parent: { type: "page_id", page_id: pageId },
    title: [{ type: "text", text: { content: "AI灵感库" } }],
    properties: {
      "标题": { title: {} },
      "链接": { url: {} },
      "添加时间": { date: {} }
    }
  });
  console.log("灵感库建好了！请去 Notion 查看。");
}
main();
