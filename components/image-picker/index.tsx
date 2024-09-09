'use client';
import React, {useRef} from 'react';
import classes from './index.module.css'
const ImagePicker = ({label, name} : {label: string, name: string}) => {
    const imageInput = useRef<HTMLInputElement | null>();
    const handleClick = () => {
        imageInput &&  imageInput.current && imageInput.current.click()

    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input ref={imageInput} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name}/>
            <button className={classes.button} type={"button"} onClick={handleClick}>Upload</button>
            </div>
        </div>
    );
};

export default ImagePicker;
