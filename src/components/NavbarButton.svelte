<script lang="ts">
    export let label: string;
    export let icon: string;
    export let goTo: string;

    import { page } from "$app/stores";
    import Icon from "./Icon.svelte";
</script>

<a href={goTo} class="flex flex-col items-center gap-1 px-6 py-3 rounded-xl desktop:flex-row desktop:w-fit {$page.route.id === goTo && "bg-blue-200"}">
    <Icon data={icon} />
    <span>{label}</span>
</a>