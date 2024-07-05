import userProfileFields from '$lib/stores/userProfileFields.js';

export async function load({ locals, params }) {
    try {
        const user = await locals.pb.collection("users").getFirstListItem(`username="${params.user}"`);
        const avatar = locals.pb.getFileUrl(user, user.avatar);
        const banner = locals.pb.getFileUrl(user, user.banner);

        return {
            user,
            files: { avatar, banner }
        }        
    } catch (error) {
        console.log(error);
    }
}

export const actions = {
    updateProfile: async ({ request }) => {
        const data = request.formData();

        console.log(data);
    }
}