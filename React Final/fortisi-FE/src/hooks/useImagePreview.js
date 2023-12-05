import { useCallback, useState } from 'react'


export const useImagePreview = () => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleImage = useCallback((input) => {
        if (!input) return

        if (typeof input === 'string') {
            setPreviewImage(input)
            return
        }

        if (input.target && input.target.files) {

            const reader = new FileReader();

            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };

            reader.readAsDataURL(input.target.files[0]);
        }
    }, [])

    return { previewImage, handleImage };
}