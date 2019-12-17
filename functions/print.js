const generateHtml = require("./generateHtml")
const pdf = require("html-pdf")

exports.handler = (event, context, callback) => {
        let shortlist = JSON.parse(event.body)
        pdf.create(generateHtml(shortlist), {
            format: "Letter",
            orientation: "portrait",
            border: "1in"
        }).toBuffer((err, buffer) => {
            if(err) callback(err)
            callback(null, {
                statusCode: 200,
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/pdf",
                },
                body: Buffer.toString("base64")
            })
        })
}