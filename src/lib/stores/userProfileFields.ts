import { writable } from "svelte/store";

const userProfileFields = writable<{
    bio: string;
    pronouns: string;
}>();

export default userProfileFields;