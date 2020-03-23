import React from 'react';

const Menucard = (props) => {
    let baseclass = "px-0 flex-column justify-content-end";
    let classes = (props.type === 'nasi') ? (baseclass + " food-card d-flex")
        :(props.type === 'minuman') ? (baseclass + " drink-card")
        :(baseclass + " mycard d-flex");
    let listjsx = (props.type === 'nasi' || props.type === 'minuman')? (<li>{props.nama}</li>) 
        : (<><li>{props.nama}</li><li>{props.rasa}</li></>)
    let specialclasses = (props.isedge)? (classes + " d-none d-lg-flex")
        :(props.iscenter)? (classes + " d-flex d-lg-none")
        :(classes + " d-flex")
    return ( 
        <div className={(props.type === 'minuman')? specialclasses : classes}>
            <img className='img-fluid' src={props.imgsrc} alt={(props.rasa)? props.rasa: props.nama}/>
            <ul>
                {listjsx}
            </ul>
        </div>
     );
}
 
export default Menucard;

