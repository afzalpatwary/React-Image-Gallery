/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { GalleryContext } from '../contexts/GalleryContentProvider';

const Header = () => {
    const { selectedImages, setSelectedImages, allImages, setAllImages } = useContext(GalleryContext)
    const handleDeleteFiles = () => {
        const updatedAllImages = allImages.filter(i => !selectedImages.includes(i.id))
        setAllImages(updatedAllImages)
        setSelectedImages([])
    }
    return (
        <div className='border-b px-[30px] py-[15px]'>
            {selectedImages?.length > 0 ? <div className='flex items-center justify-between'>
                <div className='flex gap-3 items-center text-[24px] font-[600]'>
                    <input type="checkbox" checked className='w-[20px] h-[20px]' />
                    <p>{selectedImages?.length} {selectedImages?.length > 1 ? "Files" : "File"} Selected</p>
                </div>
                <button onClick={handleDeleteFiles} className='text-[18px] text-red-600 font-[500]'>Delete {selectedImages?.length > 1 ? "files" : "file"}</button>
            </div> : <p className='text-[24px] font-[600]'>Gallery</p>}
        </div>
    );
};

export default Header;