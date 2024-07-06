<script lang="ts">
    export let label: string;
    export let showIcon: boolean;
    export let iconLeft: string;
    export let iconRight: string;
    export let goTo: string;
    export let hug: boolean;

    import Icon from "./Icon.svelte";
    import CirclePlaceholder from "$lib/icons/circle-placeholder-dashed.svg?raw";
</script>

<a href={goTo} class="flex bg-blue-400 text-gray-100 px-3 py-2 gap-2 md:max-w-[384px] rounded-xl justify-center hover:bg-blue-500 focus:ring-inset focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50 {hug === true ? "w-fit" : "w-full"}">
    <span class="{showIcon ? "visible" : "hidden"}" id="leftIcon"><Icon data={iconLeft} /></span>
    {label}
    <span class="{showIcon ? "visible" : "hidden"}" id="rightIcon"><Icon data={iconRight} /></span>
</a>