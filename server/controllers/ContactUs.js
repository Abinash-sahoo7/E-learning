const { contactUsEmail } = require("../mail/templates/contactFormRes")
const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
    const { email, firstname, lastname, message, phoneNo, countrycode } =
        req.body
    console.log(req.body)
    try {
        const emailRes = await mailSender(
            email + `, ${process.env.MAIL_USER}`,
            "Your Data send successfully",
            contactUsEmail(
                email,
                firstname,
                lastname,
                message,
                phoneNo,
                countrycode
            )
        )
        return res.json({
            success: true,
            message: "Email send successfully",
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong...",
        })
    }
}
