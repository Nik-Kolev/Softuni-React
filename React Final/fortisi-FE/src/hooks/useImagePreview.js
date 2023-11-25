import { useState } from 'react'

export const useImagePreview = () => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleImage = (e) => {
        const imageFile = e.target.files[0]

        if (!imageFile) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };

        reader.readAsDataURL(imageFile);
    }

    return { previewImage, handleImage };
}
