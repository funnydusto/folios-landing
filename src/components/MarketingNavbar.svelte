<script lang="ts">
    import Icon from "./Icon.svelte";
    import FoliosLogo from "$lib/icons/folios-logo-primary.svg?raw";
</script>

<nav class="flex w-full px-6 py-4 -mt-2 bg-gray-200 rounded-b-xl shadow">
    <!-- Left -->
    <div class="flex gap-1.5 text-gray-800 fill-gray-800">
        <Icon data={FoliosLogo}/>
        <p class="font-extrabold font-display">folios.cc</p>
    </div>
</nav>