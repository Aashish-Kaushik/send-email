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
const info = await transporter.sendMail({
    from:"sender emai Id",
    to:"reciver id ",
    subject:"hello",
    text:"dummay"
},()=>{
    
})

    } catch (error) {
        res.send({
            message: error.message
        })
    }
}