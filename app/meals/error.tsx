'use client';
import React from 'react';

const Error = ({error} : {error: Error}) => {
    return (
        <main className={"error"}>
            <h1>An error occured ! </h1>
            <p>Please try again later</p>
        </main>
    );
};

export default Error;
