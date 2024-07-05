import { redirect } from '@sveltejs/kit';

export async function GET({ locals, cookies, url }) {
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const verifier = cookies.get("verifier");
    const provider = cookies.get("provider");
    const redirectURL = `${url.origin}/auth/redirect`;

    if (code && state && verifier && provider) {   
        await locals.pb.collection("users").authWithOAuth2Code(
            provider,
            code,
            verifier,
            redirectURL,
            { }
        );
    }

    throw redirect(303, "/");
}