/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { GalleryContext } from '../contexts/GalleryContentProvider';

const ImageCard = ({
    item,
    index,
    dragItem,
    dragOverItem,
    handleSort }) => {
    const { selectedImages, setSelectedImages, allImages, setAllImages } = useContext(GalleryContext)
    const [hoverItem, setHoveredItem] = useState(null)

    const handleClick = (id) => {
        if (selectedImages.includes(id)) {
            const updatedSelectedImages = selectedImages.filter(i => i !== id)
            setSelectedImages(updatedSelectedImages)
        }
        else {
            setSelectedImages(current => [...current, id])
        }
    }

    return (
        <div
            onMouseOver={() => setHoveredItem(item?.id)}
            onMouseOut={() => setHoveredItem(null)}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={() => handleSort(item?.id)}
            onDragOver={(e) => e.preventDefault()}
            className={`${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} border rounded-[10px] w-full h-full relative cursor-pointer`}

        >
            <img src={item?.content === "LocalImage" ? URL.createObjectURL(item?.image) : item?.image} alt="" className={`w-full h-full rounded-[10px] object-cover  `} />
            <input onClick={() => handleClick(item?.id)} type='checkbox' checked={selectedImages.includes(item?.id)} className={`checkbox h-[20px]  w-[20px] absolute top-5 left-5 cursor-pointer z-10 ${selectedImages.includes(item?.id) ? "opacity-100" : "opacity-0"} ease-in duration-500 ${hoverItem === item?.id && "opacity-100 "}`} />
            <div className={`absolute ${selectedImages?.includes(item?.id) ? "opacity-60" : "opacity-0"}  top-0 left-0 w-full h-full ${selectedImages.includes(item?.id) ? "bg-white" : "bg-black ease-in duration-500"} rounded-[10px]  ${hoverItem === item?.id && !selectedImages.includes(item?.id) && "opacity-50 "}`}></div>

        </div >
    );
};

export default ImageCard;