<script lang="ts">
    export let strength = -1;
    export let color = "black";
</script>

<!-- PROBABLY A BETTER WAY TO DO THIS, PLS DONT ROAST ME -->
<div class="device-signal h-full" style="--signal-color-bg: {color}; --signal-color-active: {color}">
    <div class="device-signal-bg">
        {#each {length: 4} as _, i}
            <div style="opacity:{(i+1)<=strength? 1 : 0.4}" class="device-signal-inner{i+1} signal-{i+1}"></div>
        {/each}
    </div>
</div>

<style>
.device-signal {
    position: relative;
}

.device-signal-bg {
    display: flex;
    flex-direction: row;
    gap: 0.1em;
    align-content: center;
    flex-wrap: nowrap;
    align-items: flex-end;
    position: relative;
}


.device-signal-bg > div  {
    width: calc(0.25rem * 1.2);
}

.signal-1 {
    height: calc(0.3rem * 1.3);
}

.signal-2 {
    height: calc(0.5333rem * 1.3);
}

.signal-3 {
    height: calc(0.7666rem * 1.3);
}

.signal-4 {
    height: calc(1rem * 1.3);
}

.device-signal-inner1 {
    border-radius: 0.07rem;
    background: var(--signal-color-bg);
    position: relative;
}
.device-signal-inner2 {
    border-radius: 0.07rem;
    background: var(--signal-color-bg);
    position: relative;
}
.device-signal-inner3 {
    border-radius: 0.07rem;
    background: var(--signal-color-bg);
    position: relative;
    bottom: 0;
}

.device-signal-inner4 {

    border-radius: 0.07rem;
    background: var(--signal-color-bg);
    position: relative;
    bottom: 0;
}
</style>