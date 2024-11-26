const nodemailer = require('nodemailer');
require('dotenv').config();

class EmailController {
    static async contactUsEmail(req, res) {
        try {
    
            const { name, email, subject, message } = req.body;

            if (!name || !email || !subject || !message) {
                return res.status(400).json({
                    error: 'Email not sent',
                    message: 'Please provide all required fields: name, email, subject, message'
                });
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    error: 'Email not sent',
                    message: 'Please provide a valid email address'
                });
            }
            
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD
                },
                tls: {
                    ciphers:'SSLv3'
                }
            });
            
            const verification = await transporter.verify();
            
            const mailOptions = {
                from: process.env.EMAIL_USERNAME,
                to: process.env.RECIPIENT_EMAIL,
                subject: `${subject}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>From:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <h3>Message:</h3>
                    <p>${message}</p>
                `
            };
            
            await transporter.sendMail(mailOptions);

            return res.status(200).json({
                message: 'Email sent successfully'
            });

        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({
                error: 'Email not sent',
                details: 'Error sending email',
                errors: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
    
static async testMailtrap(req, res) {
    try {
        
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            },
            tls: {
                ciphers:'SSLv3'
            }
        });
        
        const verification = await transporter.verify();
        
        const testResult = await transporter.sendMail({
            from: '"Test" <test@example.com>',
            to: process.env.RECIPIENT_EMAIL,
            subject: "Test Email",
            text: "This is a test email from Mailtrap"
        });

        return res.status(200).json({
            success: true,
            message: 'Mailtrap connection successful',
            verification: verification,
            testEmail: testResult.messageId
        });
    } catch (error) {
        console.error('Mailtrap connection error:', error);
        return res.status(500).json({
            success: false,
            error: 'Mailtrap connection failed',
            info: {
                'Username': process.env.MAILTRAP_USERNAME,
                'Password': !!process.env.MAILTRAP_PASSWORD,
                'Recipient': process.env.RECIPIENT_EMAIL,
                'Error Type': error.code,
                'Error Message': error.message
            },
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
}

module.exports = EmailController;