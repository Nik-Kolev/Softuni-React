import { useState } from "react";
import { Dropbox } from 'dropbox';
const temporaryToken = 'sl.Bqh9q6bilfQRD3zsxTyO_Q5ByyxsBN_eg7RuXtgTv34hfZdi-hIrFsqiC-ae9Wm7p1Vnxb_r4ZMtrGdbWK46AGKlkM6zGYO_OpcsOGzoYAgXB93xOTuwOeCXjoJ4BLUQBFnJMmsri2wLDgw'
const clientId = '8dqijm81lgh5uab';
const clientSecret = 'y1jud8rhuxnufa7y';
export const DropBoxUploader = () => {
    const [fileLink, setFileLink] = useState()

    const exchangeHandler = async (file, category) => {
        try {
            const dbx = new Dropbox({ clientId, clientSecret, accessToken: temporaryToken });
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
