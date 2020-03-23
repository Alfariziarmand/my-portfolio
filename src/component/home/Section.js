import React from 'react';

const Section = (props) => {
    return ( 
        <div id={props.idName} className='py-5'>
            {props.children}
        </div>
     );
}
 
export default Section;