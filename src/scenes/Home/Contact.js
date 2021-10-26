import React, { useState } from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import { init, send } from "emailjs-com";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    }
    
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const changeMessage = (e) => {
        setMessage(e.target.value);
    }

    const formSubmit = (e) => {
        alert(`Thank you for your message from ${email}`);
        sendMessage();
        setName("");
        setEmail("");
        setMessage("");
    }

    const sendMessage = () => {
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        init(userId);

        const variables = {
            from_name: name,
            message: message,
            reply_to: email,
        };

        send(
            serviceId, templateId, variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }

    return (
        <section className="section section-contact section-contact-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/contact/contact.JPEG)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">CONTACT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Get in touch with me today.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>If you have any questions, please feel free to drop me a line!</p>
                                </header>
                                <form className="form form-1 pt-15">
                                    <Row className="row">
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-name" onChange={changeName} value={name}/>
                                                <label htmlFor="form-item-name">Your Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="email" id="form-item-email" onChange={changeEmail} value={email}/>
                                                <label htmlFor="form-item-email">Your Email</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <textarea id="form-item-message" onChange={changeMessage} value={message}></textarea>
                                                <label htmlFor="form-item-message">Your Message</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <button className="button button-md button-primary" type="submit" onClick={formSubmit}>Send Message</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
