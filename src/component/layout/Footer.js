import React from 'react';
import tel from '../../img/tel.png';
import ig from '../../img/ig.png';
import mail from '../../img/mail.png';
import Contact from './Contact';


const Footer = () => {
    const data = [
        {
            imgsrc : tel,
            text1 : "Admin",
            text2 : "082198427558",
            link : "https://api.whatsapp.com/send?phone=6282198427558"
        },
        {
            imgsrc : tel,
            text1 : "Manager Waralaba",
            text2 : "089530066713",
            link : "https://api.whatsapp.com/send?phone=6289530066713"
        },
        {
            imgsrc : ig,
            text1 : "instagram",
            text2 : "@martabakjepangjony",
            link : "https://www.instagram.com/martabakjepangjony/"
        },
        {
            imgsrc : mail,
            text1 : "email",
            text2: "martabakjepangjony@gmail.com",
            link : "mailto:martabakjepangjony@gmail.com"
        }
    ]
    const contactlist = data.map(a => <Contact link={a.link} imgsrc={a.imgsrc} text1={a.text1} text2={a.text2}/>)
    
    return (
            <div id="lastsection" className="py-1">
                <div className="container midsectioncontainer py-5">
                    <div className="px-4 pt-4 d-lg-none">
                        <span className="header">Kontak</span>
                    </div>
                    <div className="d-flex flex-column flex-lg-row justify-content-center flex-wrap flex-lg-nowrap">
                        <div className="px-4 pt-4 d-none d-lg-block">
                            <span className="header">Kontak</span>
                        </div>
                        {contactlist}                        
                    </div>
                </div>
            </div>
    );
}
 
export default Footer;


    