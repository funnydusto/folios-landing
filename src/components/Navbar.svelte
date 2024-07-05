<script lang="ts">
    import NavbarButton from "./NavbarButton.svelte";
    
    import Icon from "./Icon.svelte";
    import HomeIcon from "$lib/icons/home.svg?raw";
    import ExploreIcon from "$lib/icons/compass-round.svg?raw";
    import CreateIcon from "$lib/icons/square-plus.svg?raw";
    import PersonIcon from "$lib/icons/Person.svg?raw";
    import FoliosLogoPrimary from "$lib/icons/folios-logo-primary.svg?raw";
</script>

<div class="px-6 py-1 w-full fixed bottom-0 left-0 bg-slate-100 desktop:static desktop:flex desktop:justify-between desktop:items-center drop-shadow-sm rounded-t-xl desktop:rounded-b-xl desktop:rounded-t-none desktop:py-1.5">
    <a href="/" class="desktop:items-center desktop:gap-1 hidden desktop:flex">
        <Icon data={FoliosLogoPrimary} />

        <span class="text-xl font-extrabold font-display">
            folios.cc
        </span>
    </a>

    <div class="w-full grid grid-cols-4 desktop:flex desktop:w-fit">
        <NavbarButton goTo="/" label="Home" icon={HomeIcon} />
        <NavbarButton goTo="/explore" label="Explore" icon={ExploreIcon} />
        <NavbarButton goTo="/create" label="Create" icon={CreateIcon} />
        <NavbarButton goTo="/ronykax" label="You" icon={PersonIcon} />
    </div>
</div>