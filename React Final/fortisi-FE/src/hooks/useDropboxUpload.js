import { useState } from "react";
import { Dropbox } from 'dropbox';
const temporaryToken = 'sl.Bqj3PsJLBpkpFIJQfv58jt6kmCAJmlWvhpCj6pocTUzIGI_x6Ai8bP_LYJilY6oxs_Aj3rduHshQI0zhJYC1oXqfjcwj4u6KRlXnDv8uCJFZPZBzJ4sN3kfmcIeJtRVAwR4Rx4DWD3iaAG4'

export const DropBoxUploader = () => {
    const [fileLink, setFileLink] = useState(null)

    const exchangeHandler = async (file, category) => {

        try {
            const dbx = new Dropbox({ accessToken: temporaryToken });
            const response = await dbx.filesUpload({
                contents: file[0],
                path: `/uploads/${category}/${file[0].name}`,
                mode: { '.tag': 'overwrite' },
            });
            const sharedLink = await dbx.sharingCreateSharedLink({
                path: response.result.path_display,
            });
            setFileLink(sharedLink.result.url);
        } catch (err) {
            throw err.message
        }
    }
    return { fileLink, exchangeHandler }
}
