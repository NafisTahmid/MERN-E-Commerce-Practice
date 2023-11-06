import React from 'react';

const footer = () => {
    return (
        <section className="pb-3">
            <p className='text-center text-muted text-decoration-none'>MERN E-Commerce | {(new Date()).getFullYear()}</p>
        </section>
    );
};

export default footer;
