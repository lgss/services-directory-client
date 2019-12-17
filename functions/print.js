const generateHtml = require("./generateHtml")
const pdf = require("html-pdf")

exports.handler = (event, context, callback) => {
    try {
        let shortlist = JSON.parse(event.body)

        let response

        pdf.create(generateHtml(shortlist), {
            format: "Letter",
            orientation: "portrait",
            border: "1in"
        })
            .toFile("./downloadable.pdf", function(err, buffer){
                response = {
                    statusCode: 200,
                    headers: {
                        "Cache-Control": "no-cache",
                        "Content-Type": "application/pdf",
                    },
                    body: buffer
                }
            });

        return response
    } catch(err) {
        return {
            statusCode: 500,
            body: e.toString()
        }
    }
}