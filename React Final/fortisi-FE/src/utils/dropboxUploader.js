import { Dropbox } from 'dropbox';
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const dropboxToken = import.meta.env.VITE_DROPBOX_TOKEN;

export const DropBoxUploader = async (file, category) => {
    try {
        const dbx = new Dropbox({ clientId, clientSecret, accessToken: dropboxToken });

        const response = await dbx.filesUpload({
            contents: file,
            path: `/uploads/${category}/${Date.now()}.${file.name.split('.')[1]}`,
            mode: { '.tag': 'overwrite' },
        });

        const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
            path: response.result.path_display,
        });

        return sharedLink.result.url
    } catch (err) {
        throw err.message;
    }
};
