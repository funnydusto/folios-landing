<script lang="ts">
    import tabState, { TabState } from "$lib/stores/tabState";

    import Icon from "./Icon.svelte";
    import NoteText from "$lib/icons/note-text.svg?raw";
    import FolderPaper from "$lib/icons/folder-paper.svg?raw";
    import ChainLink from "$lib/icons/chain-link-4.svg?raw";

    const updateTabState = (state: TabState) => tabState.set(state);
</script>

<div class="grid grid-cols-3 mt-3 overflow-hidden shadow-sm bg-slate-100 rounded-xl">

    <button class="flex items-center justify-center gap-2 px-3 py-2 border-b-4 hover:border-b-4 {$tabState === TabState.Details ? "border-blue-500" : "border-white"}" on:click={() => updateTabState(TabState.Details)}>
        <Icon data={NoteText} />
        <span>Details</span>
    </button>

    <button class="flex items-center justify-center gap-2 px-3 py-2 border-b-4 hover:border-b-4 {$tabState === TabState.Portfolio ? "border-blue-500" : "border-white"}" on:click={() => updateTabState(TabState.Portfolio)}>
        <Icon data={FolderPaper} />
        <span>Portfolio</span>
    </button>

    <button class="flex items-center justify-center gap-2 px-3 py-2 border-b-4 hover:border-b-4 {$tabState === TabState.Connect ? "border-blue-500" : "border-white"}" on:click={() => updateTabState(TabState.Connect)}>
        <Icon data={ChainLink} />
        <span>Connect</span>
    </button>

</div>