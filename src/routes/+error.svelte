<script lang="ts">
    import { page } from '$app/stores';
    import { error } from '@sveltejs/kit';
    import MarketingNavbar from "$components/MarketingNavbar.svelte";
    import Button from "$components/Button.svelte";
</script>

<!-- Navbar -->
<MarketingNavbar/>

<div class="flex flex-col items-center h-full gap-4 px-6 py-24 text-center bg-gray-200 shadow rounded-xl">
    <h1 class="font-display text-8xl font-extrabold text-blue-400">{$page.status}</h1>
    <h2 class="text-xl text-gray-1000">{$page.error.message}</h2>
    <Button showIcon={false} hug={true} iconLeft="" iconRight="" label="Go home" goTo="/"/>
</div>