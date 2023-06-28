const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    host: smtp.forwardemail.net,
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "Replace with userName ",
        pass: "Replace with pass",
    }
})


exports.mailsenders = async (req, res) => {
    try {
        const { email, body, subject } = req.body
        const info = await transporter.sendMail({
            from: " PLease add sender_id",
            to: email,
            subject: subject,
            text: body
        }, () => {

        })

    } catch (error) {
        res.send({
            message: error.message
        })
    }
}