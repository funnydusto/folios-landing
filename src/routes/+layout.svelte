<script>
    import "../app.css";
    import Navbar from "$components/Navbar.svelte";
</script>

<div class="mx-auto max-w-screen-desktop px-3">
    <Navbar />
    <slot />
</div>