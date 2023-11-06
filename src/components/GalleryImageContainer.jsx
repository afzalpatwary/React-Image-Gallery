/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react';
import ImageCard from './ImageCard';
import { GalleryContext } from '../contexts/GalleryContentProvider';
import { BiImageAdd } from "react-icons/bi";

const GalleryImageContainer = () => {
    const { allImages, setAllImages } = useContext(GalleryContext)
    const inputRef = useRef(null)
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleSort = (id) => {
        const newAllImages = [...allImages];
        const draggedItemContent = newAllImages.splice(dragItem.current, 1)[0];
        newAllImages.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setAllImages(newAllImages)
    };

    const handleInputChange = (e) => {
        let newImages = []
        const selectedFiles = e.target.files
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i]
            const id = allImages.length + i + 1
            const content = "LocalImage"
            const newFile = {
                id,
                image: file,
                content
            }
            newImages.push(newFile)
        }

        setAllImages(current => [...current, ...newImages])

    }

    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 px-[30px] py-[20px]'>
            {allImages.map((item, idx) => <ImageCard item={item} index={idx} key={idx} dragItem={dragItem}
                dragOverItem={dragOverItem} handleSort={handleSort} />)}
            <button className='flex flex-col items-center justify-center w-full h-full bg-[#fafbfb] rounded-[10px] gap-[15px] border-dashed border-2 p-[20px]' onClick={() => inputRef.current.click()}>
                <BiImageAdd className='text-[32px]' />
                <p className='text-[18px] font-[500]'>Add Images</p>
            </button>
            <input ref={inputRef} type="file" accept="image/jpeg, image/png, image/webp, image/jpg" multiple className='hidden' onChange={handleInputChange} />
        </div>
    );
};

export default GalleryImageContainer;