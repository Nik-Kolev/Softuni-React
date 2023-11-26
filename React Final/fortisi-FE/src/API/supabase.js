import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAPI = import.meta.env.VITE_SUPABASE_API_KEY
const bucket = import.meta.env.VITE_SUPABASE_BUCKET

const supabase = createClient(
    supabaseURL,
    supabaseAPI
);

export const supabaseUploader = async (file, category) => {

    try {
        const { data, error } = await supabase.storage.from('fortisi_images').upload(`${category}/${Date.now()}.${file.name.split('.')[1]}`, file, {
            cacheControl: '3600',
            upsert: true
        })

        if (error) {
            throw new Error(error.message)
        }

        const imageLink = `${supabaseURL}${bucket}${data.path}`;
        return imageLink
    } catch (err) {
        throw err.message;
    }
};