const viteUrl = import.meta.env.VITE_SITE_URL;
const vercelUrl = import.meta.env.VITE_VERCEL_URL;

const localhostPort = import.meta.env.VITE_LOCALHOST_PORT;
const localhostUrl = `http://localhost:${localhostPort}/`;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export {
    viteUrl,
    vercelUrl,
    localhostUrl,
    supabaseUrl,
    supabaseKey
}