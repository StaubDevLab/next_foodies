'use client';
import React from 'react';
import {useFormStatus} from 'react-dom'
const MealFormSubmit = () => {
    const status = useFormStatus()

    return (
        <button disabled={status.pending}>{status.pending ? 'Submitting...':'Share meal'}</button>
    );
};

export default MealFormSubmit;