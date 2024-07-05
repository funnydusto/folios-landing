import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals, cookies }) => {
        const collection = locals.pb.collection("users");

        const authMethods = await collection.listAuthMethods();
        const provider = authMethods.authProviders[0];

        cookies.set("provider", provider.name, { path: "/" });
        cookies.set("verifier", provider.codeVerifier, { path: "/" });
        
        throw redirect(303, provider.authUrl);
    }
}