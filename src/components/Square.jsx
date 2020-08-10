import React from 'react';

const Square = (props) => {
    return (<>
        <button className='sqbtn' onClick={props.onClick} >{props.value}</button>
    </>);
}

export default Square;