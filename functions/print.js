const generateHtml = require("./generateHtml")
const pdf = require("html-pdf")

exports.handler = (event, context, callback) => {
    try {
        let shortlist = JSON.parse(event.body)

        pdf.create(generateHtml(shortlist), {
            format: "Letter",
            orientation: "portrait",
            border: "1in"
        }).toBuffer((err, buffer) => {
            console.log("callback triggered")
            callback(null, {
                statusCode: 200,
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/pdf",
                },
                body: buffer.toString('base64')
            })
        })
    } catch(err) {
        return {
            statusCode: 500,
            body: err.toString()
        }
    }
}