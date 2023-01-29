import React from 'react';

export default function Avatar({image, type}) {
    return (
        <div className='avatar'>
            <img
            className='photo'
             src={image}
             alt="avatar"
             />
             {type && <span className='new'>new</span>}

        </div>
    );
}

