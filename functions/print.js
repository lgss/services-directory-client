const generateHtml = require("./generateHtml")
const pdf = require("html-pdf")

exports.handler = (event, context, callback) => {
    let shortlist = JSON.parse(event.queryStringParameters.data)

    pdf.create(generateHtml(shortlist), {
        format: "Letter",
        orientation: "portrait",
        border: "1in"
    }).toBuffer((err, buffer) => {
        if(err) callback(err)
        callback(null, {
            statusCode: 200,
            headers: {
                'Content-type': 'application/pdf',
                'content-disposition': 'attachment; filename=services-list.pdf'
            },
            body: buffer.toString('base64'),
            isBase64Encoded: true
            })
    })
}