/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { images } from "../utils/utils";

export const GalleryContext = createContext()

const GalleryContentProvider = ({ children }) => {
    const [selectedImages, setSelectedImages] = useState([])
    const [allImages, setAllImages] = useState([...images])
    const info = {
        selectedImages,
        setSelectedImages,
        allImages,
        setAllImages
    }
    return <GalleryContext.Provider value={info}>{children}</GalleryContext.Provider>
}

export default GalleryContentProvider