import React from 'react';

const footer = () => {
    return (
        <section className="pb-3">
            <p className='text-center'><a className="text-muted text-decoration-none" href="https://nafistahmid.github.io/my_portfolio/" target="_blank" rel="noreferrer">Nafis Tahmid</a> | {(new Date()).getFullYear()}</p>
        </section>
    );
};

export default footer;