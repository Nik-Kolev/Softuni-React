import { useState } from "react";
import { Dropbox } from 'dropbox';
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const dropboxToken = import.meta.env.VITE_DROPBOX_TOKEN;
export const DropBoxUploader = () => {
    const [fileLink, setFileLink] = useState()

    const exchangeHandler = async (file, category) => {
        try {
            const dbx = new Dropbox({ clientId, clientSecret, accessToken: dropboxToken });
            const response = await dbx.filesUpload({
                contents: file,
                path: `/uploads/${category}/${file.name}`,
                mode: { '.tag': 'overwrite' },
            });
            const sharedLink = await dbx.sharingCreateSharedLink({
                path: response.result.path_display,
            });
            setFileLink(sharedLink.result.url);

        } catch (err) {
            console.log(err)
            throw err.message
        }
    }
    return { fileLink, exchangeHandler }
}
