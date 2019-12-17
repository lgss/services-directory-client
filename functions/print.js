const generateHtml = require("./generateHtml")
const pdf = require("html-pdf")

exports.handler = async (event, context, callback) => {
    try {
        let shortlist = JSON.parse(event.body)

        await pdf.create(generateHtml(shortlist), {
            format: "Letter",
            orientation: "portrait",
            border: "1in"
        }).toBuffer(async (err, buffer) => {
            await {
                statusCode: 200,
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/pdf",
                },
                body: await Buffer.concat(buffer)
            }
        })


    } catch(err) {
        return {
            statusCode: 500,
            body: err.toString()
        }
    }
}