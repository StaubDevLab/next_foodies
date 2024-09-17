'use client';
import React, {useRef, useState} from 'react';
import classes from './index.module.css'
import Image from "next/image";

const ImagePicker = ({label, name}: { label: string, name: string }) => {
    const [pickedImage, setPickedImage] = useState<string|null>(null)
    const imageInput = useRef<HTMLInputElement | null>();
    const handleClick = () => {
        imageInput && imageInput.current && imageInput.current.click()

    }

    const handleImageChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null)
            return
        };
        const fileReader = new FileReader()
        fileReader.onload = () => {
            const fileReaderResult = fileReader.result as string;
            setPickedImage(fileReaderResult)
        }
        fileReader.readAsDataURL(file);

    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image</p>}
                    {pickedImage && <Image src={pickedImage} alt={"The image selected by the user"} fill></Image>}
                </div>
                <input ref={imageInput} className={classes.input} type="file" id={name} accept="image/png, image/jpeg"
                       name={name} onChange={handleImageChange}/>
                <button className={classes.button} type={"button"} onClick={handleClick}>Upload</button>
            </div>
        </div>
    );
};

export default ImagePicker;
