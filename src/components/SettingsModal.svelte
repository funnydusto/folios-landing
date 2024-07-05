<script lang="ts">
    import settingsModalVisible from "$lib/stores/settingsModal";
    import userProfileFields from "$lib/stores/userProfileFields";

    import { onMount, onDestroy } from "svelte";
    import { fade, fly } from "svelte/transition";

    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";
    import type { Editor as EditorType } from "@tiptap/core";

    let element: HTMLElement;
    let editor: EditorType;

    onMount(async () => {
        editor = new Editor({
            element: element,
            extensions: [StarterKit],
            content: '<p>Hello World! 🌍️ </p>',
            editorProps: {
                attributes: {
                    class: "h-52 rounded-lg ring-1 ring-slate-300 p-3 prose w-full max-w-full focus:outline-none focus:ring-slate-500"
                }
            },
            onTransaction: () => {
                editor = editor;
            }
        })
    });

    onDestroy(() => {
        if (editor) {
            editor.destroy();
        }
    });

    let pronounsInput: HTMLInputElement;

    async function saveData() {
        const bio = editor.getHTML();
        const pronouns = pronounsInput.value;

        userProfileFields.set({
            bio: bio,
            pronouns: pronouns
        });

        // try {
        //     const collection = pb.collection("users");
    
        //     const user = await collection.getFirstListItem(`username="ronykax"`);
        //     await collection.update(user.id, { "pronouns": pronouns });
        // } catch (error) {
        //     console.log(error);
        // }
    }
</script>

<div class="z-10 fixed bg-black bg-opacity-50 left-0 top-0 w-full h-screen flex items-center justify-center" transition:fade={{ duration: 62.5 }}>

    <div class="bg-slate-100 max-w-screen-desktop mx-auto w-full rounded-xl p-3 flex flex-col gap-3 drop-shadow-sm" in:fly={{ x: "0", y: "-50", duration: 125 }} out:fly={{ x: "0", y: "50", duration: 125 }}>
        <h1 class="text-2xl m-1">Edit Profile</h1>

        <form method="post" action="?/updateProfile">
            <div class="flex flex-col gap-1">
                <span class="text-slate-600">About me</span>
                <div class="w-full" bind:this={element}></div>
            </div>

            <div class="flex flex-col gap-1">
                <span class="text-slate-600">Pronouns</span>
                <input bind:this={pronounsInput} name="pronouns" class="rounded-lg ring-1 ring-slate-300 p-3 bg-transparent focus:outline-none focus:ring-slate-500" type="text" placeholder="they/them">
            </div>

            <div class="flex gap-3">
                <button class="w-full border-[1.5px] border-slate-300 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200" on:click={() => settingsModalVisible.set(false)}>Close</button>
                <button class="w-full bg-blue-200 border-[1.5px] border-blue-400 px-3 py-2 rounded-lg" type="submit" on:click={() => saveData()}>Save</button>
            </div>
        </form>

    </div>

</div>