import React from 'react';

const Contact = (props) => {
    return ( 
        <div className="px-4 my-3 my-lg-0">
            <a href={props.link} rel="noopener noreferrer" target="_blank" style={{color:"inherit"}}>
                <div className="py-1 center">
                    <img className='icon img-fluid' src={props.imgsrc} alt="" />
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                </div>
            </a>
        </div>
     );
}
 
export default Contact;