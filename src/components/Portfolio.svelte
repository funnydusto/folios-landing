<script lang="ts">
    import Icon from "./Icon.svelte";
    import CirclePlaceholder from "$lib/icons/circle-placeholder-dashed.svg?raw";

    const items = [0, 0, 0, 0, 0, 0]
</script>

<div class="p-3">
    <ul class="flex flex-col gap-3">
        
        {#each items as item}
            <li>
                <div class="flex gap-3">
                    <div class="w-24 h-24 rounded-lg bg-slate-800">
                        
                    </div>

                    <div class="flex flex-col gap-1">
                        <span class="text-lg">Server</span>

                        <div class="flex items-center gap-2">
                            <Icon data={CirclePlaceholder} />
                            <span class="text-sm">69,000 Members</span>
                        </div>

                        <div class="flex items-center gap-2">
                            <Icon data={CirclePlaceholder} />
                            <span class="text-sm">Job Title</span>
                        </div>
                    </div>
                </div>
            </li>
        {/each}

    </ul>
</div>