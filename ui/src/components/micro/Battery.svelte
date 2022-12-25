<script lang="ts">
  import { beforeUpdate } from "svelte";


    export let color = "black";
    export let battery = 100;
    let rgb = "rgb(0, 0, 0)"
    let rgba = "rgba(0, 0, 0, 0.4)"

beforeUpdate(() => {
        let c = document.createElement("canvas");
        c.width = 1;
        c.height = 1;
        let ctx = c.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
        let [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        rgb =  `${r}, ${g}, ${b}`;
        rgba = `rgba(${r}, ${g}, ${b}, 0.4)`
    })

    

</script>


<div class="device-battery" style="--color:{rgb}; --opaque: {rgba}; --battery: {battery * 0.95}%; --battery-col: {battery <= 20 ? "255,0,0" : rgb}"></div>


<style>
    .device-battery {
  width: 2.5rem;
  height: 1.4rem;
  border-radius: 0.4rem;
  /* background: rgba(142, 133, 133, 0); */
  position: relative;
  border: var(--opaque) solid 0.125rem;
}
.device-battery::before {
  content: "";
  width: var(--battery);
  height: 95%;
  top: 2.5%;
  left: 2.5%;
  background: rgb(var(--battery-col));
  position: absolute;
  border-radius: 0.3rem;
  opacity: 1 !important;
}
.device-battery::after {
  content: "";
  width: 0.1px;
  height: 3px;
  right: -0.35rem;
  top: 50%;
  transform: translateY(-50%);
  /* background: var(--opaque); */
  position: absolute;
  border-radius: 0.1rem;
  border-right: var(--opaque) solid 0.2rem;
}


</style>