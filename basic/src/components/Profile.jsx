import React from 'react';
import Avatar from './Avatar';

export default function Profile({image, name, title, type}) {
    return (
        <div className='profile'>
            <Avatar image={image} type={type} />
             
             <h1>{name}</h1>
             <p>{title}</p>
        </div>
    );
}

