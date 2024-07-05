<script lang="ts">
    import Icon from "./Icon.svelte";
    import CirclePlaceholder from "$lib/icons/circle-placeholder-dashed.svg?raw";

    const connections = [0, 0, 0, 0, 0]
</script>

<div class="p-3">

    <div class="flex flex-wrap gap-3">

        {#each connections as item}
            <div class="flex-[1_0_auto]">
                <a href="/" class="flex flex-col items-center gap-1 px-6 py-3 bg-blue-200 rounded-xl hover:bg-blue-300">
                    <Icon data={CirclePlaceholder} />
                    <span>Reddit</span>
                </a>
            </div>
        {/each}
        
    </div>

</div>