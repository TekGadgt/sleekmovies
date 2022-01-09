exports.handler = async function (event, context) {
    const { Client } = require("@notionhq/client")

    const notion = new Client({
        auth: process.env.NOTION_SECRET,
    })

    var myPage = await notion.databases.query({
        database_id: process.env.NOTION_DB,
        sorts: [{ property: "name", direction: "ascending" }],
    })

    return {
        statusCode: 200,
        body: JSON.stringify(myPage),
    }
}