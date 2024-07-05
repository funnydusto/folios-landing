<script lang="ts">
    export let data;

    import Icon from "$components/Icon.svelte";
    import ThreeDots from "$lib/icons/dot-grid-1x3-horizontal.svg?raw";

    import Tabs from "$components/Tabs.svelte";
    import tabState, { TabState } from "$lib/stores/tabState";

    import Details from "$components/Details.svelte";
    import Connections from "$components/Connections.svelte";
    import Portfolio from "$components/Portfolio.svelte";
    import SettingsModal from "$components/SettingsModal.svelte";

    import settingsModalVisible from "$lib/stores/settingsModal.js";
</script>

{#if $settingsModalVisible}
    <SettingsModal />
{/if}

<div class="bg-slate-100 rounded-xl my-3 drop-shadow-sm overflow-hidden">

    <div class="flex flex-col">
        <!-- Banner -->
        <div class="relative flex justify-between h-24 bg-slate-800" style="background-image: url('{data.files?.banner}'); background-position: center; background-size: cover;">
    
            <!-- Avatar -->
            <div class="absolute w-24 h-24 bg-slate-800 rounded-full ring-4 ring-white top-[50%] left-3 overflow-hidden">
                <img src="{data.files?.avatar}" alt="">
            </div>
        </div>
    
        <!-- Buttons -->
        <div class="flex gap-2 p-2 place-self-end">
            <button class="px-3 py-2 rounded-lg ring-[1.5px] ring-slate-200 hover:bg-slate-200">Save</button>
            <button class="px-3 py-2 rounded-lg ring-[1.5px] ring-slate-200 hover:bg-slate-200">Rep</button>
            <button class="px-3 py-2 rounded-lg ring-[1.5px] ring-slate-200 hover:bg-slate-200" on:click={() => settingsModalVisible.set(true)}>
                <Icon data={ThreeDots} />
            </button>
        </div>
    </div>

    <!-- Details -->
    <div class="px-3 pb-3">

        <div class="flex flex-col">
            <span class="text-xl">{data.user?.name}</span>
            <span class="text-sm">@{data.user?.username} • {data.user?.pronouns} • {data.user?.points} pts</span>
        </div>

    </div>

</div>

<Tabs />

<div class="mt-3 shadow-sm bg-slate-100 rounded-xl">
    {#if $tabState === TabState.Details}
        <Details />
    {:else if $tabState === TabState.Portfolio}
        <Portfolio />
    {:else if $tabState === TabState.Connect}
        <Connections />
    {/if}
</div>