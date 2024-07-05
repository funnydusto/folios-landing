<script lang="ts">
    export let label: string;
    export let icon: string;
    export let goTo: string;

    import Icon from "./Icon.svelte";
</script>

<button class="">
    <span id="leftIcon"><Icon data={icon} /></span>
    {label}
    <Icon data={icon} />
</button>