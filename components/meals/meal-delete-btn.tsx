'use client'
import React from 'react';

import {removeMeal} from "@/lib/actions";

const MealDeleteBtn = ({id}:{id:string}) => {
    const handleRemove = (mealId: string) => {
        removeMeal(mealId);
    }
    return (
        <div>
            <button onClick={() => handleRemove(id)}>Supprimer</button>
        </div>
    );
};

export default MealDeleteBtn;