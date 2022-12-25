<script>
    import Signal from "./Signal.svelte";
    import Battery from "./Battery.svelte";
  import Island from "./Island.svelte";
    let strength = 2;
    let color = "black";
    let battery = 100;
</script>


<div style="color:{color}" class=" topbar justify-center items-center font-[500] text-[1.7rem] def-font absolute w-[430px] h-[59px] left-1/2 -translate-x-1/2">
    <div class=" self-center  text-center ">2:00</div>
    <!-- Make the notch in Iphone 14 pro -->
    <Island />
    <div class="flex relative justify-center -end items-center flex-row gap-2">
        <Signal {strength} {color} />
        <div class=" self-center ">5G</div>
        <Battery {color} {battery}/>
    </div>
</div>

<style>
    .topbar {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
    }
</style>