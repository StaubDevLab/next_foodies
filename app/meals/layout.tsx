import React from 'react';

const MealsLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <p>Meals layout</p>
            {children}
        </>
    );
};

export default MealsLayout;
