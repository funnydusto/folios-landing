<script lang="ts">
    import MarketingNavbar from "$components/MarketingNavbar.svelte";

    const genreArray = [
        {
            label: "moderator",
            color: "text-lightblue-400",
        },
        {
            label: "developer",
            color: "text-orange-400",
        },
        {
            label: "designer",
            color: "text-purple-400",
        },
        {
            label: "event host",
            color: "text-yellow-400",
        },
        {
            label: "manager",
            color: "text-blue-400",
        },
        {
            label: "researcher",
            color: "text-green-400",
        },
        {
            label: "creator",
            color: "text-pink-400",
        },
    ]

    let genre = genreArray[1]

</script>

<!-- Navbar -->
<MarketingNavbar/>

<!-- Hero -->
<div class="border-gray-200 border-2 rounded-xl px-6 py-24">
    <h1 class="font-display text-4xl text-center">Find your next <span class="text-wrap {genre.color}">{genre.label}</span> on folios.cc</h1>
    <p>Find & explore community builders for your Discord server.

        Request features & get updates in our server below</p>
    
</div>
