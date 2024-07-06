<script lang="ts">
    import MarketingNavbar from "$components/MarketingNavbar.svelte";
    import Button from "$components/Button.svelte";
    import Discord from "$lib/icons/discord.svg?raw";
    import { slide } from "svelte/transition";
    import { sineInOut } from "svelte/easing";

    const easing = sineInOut;


    interface Genre {
        label: string;
        color: string;
    }

    const genreArray: Genre[] = [
        { label: "moderator", color: "text-lightblue-500" },
        { label: "developer", color: "text-orange-400" },
        { label: "designer", color: "text-purple-400" },
        { label: "event host", color: "text-yellow-500" },
        { label: "manager", color: "text-blue-400" },
        { label: "researcher", color: "text-green-600" },
        { label: "creator", color: "text-pink-400" }, ]

    let index = 0;

    $: genre = genreArray[index];

    setInterval(() => {
        index = (index + 1) % genreArray.length;
    }, 5000);


</script>

<!-- Navbar -->
<MarketingNavbar/>

<!-- Hero -->
<div class="flex flex-col items-center h-full gap-4 px-6 py-24 text-center md:text-left bg-[url('landing_bg_mobile.png')] bg-bottom md:bg-[url('landing_bg_desktop.png')] md:bg-right md:items-start bg-cover border-2 md:px-6 lg:px-24 md:py-6 border-gray-200 shadow rounded-xl">
    
    <!-- Heading -->
    <h1 class="text-4xl font-extrabold max-w-[384px]  font-display text-gray-1400">Find your next<br>
        <!-- Interactive Genres -->
        {#key genre}
            <span>
                <h1 class="text-wrap max-w-[384px]  {genre.color}" transition:slide={{ easing: easing, duration: 250 }}>{genre.label}</h1>
            </span>
        {/key}

        on folios.cc</h1>

    <!-- Subheading -->
    <p class="text-xl max-w-[384px] text-gray-800 text-pretty">Find & explore community builders for your Discord server.<br><br>Request features & get updates in our server below</p>
    
    <!-- CTA -->
    <Button showIcon={true} hug={false} iconLeft="" iconRight={Discord} label="Join our Server" goTo="https://discord.gg/2ftBjsTePC"/>
</div>
