<script lang="ts">
    import { crossfade, scale } from 'svelte/transition';

    const [send, receive] = crossfade({
    duration: 1000,
    fallback: scale
});
</script>