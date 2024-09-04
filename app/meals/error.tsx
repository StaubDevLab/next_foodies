'use client';
import React from 'react';
interface ErrorProps{
    error?: Error
}
const Error = ({error} : {error: ErrorProps}) => {
    return (
        <main className={"error"}>
            <h1>An error occured ! </h1>
            <p>Please try again later</p>
        </main>
    );
};

export default Error;
