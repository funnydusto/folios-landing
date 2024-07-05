<script lang="ts">
    import Icon from "./Icon.svelte";
    import Calender from "$lib/icons/calendar-1.svg?raw";
    import MapPin from "$lib/icons/map-pin.svg?raw";
</script>

<div class="p-3">
    <span>
        This is a user's biography. This text area supports WYSIWYG markdown and can allow even line breaks!
        <br>
        <br>
        Add fun details, how you work with others, and other things.
    </span>

    <hr class="my-3 border-2 rounded-full border-slate-300">

    <ul class="flex flex-col gap-3">
        
        <li class="flex items-center gap-2">
            <Icon data={Calender} />
            <span>Joined Discord on June 2024</span>
        </li>

        <li class="flex items-center gap-2">
            <Icon data={MapPin} />
            <span>Location</span>
        </li>

    </ul>
</div>