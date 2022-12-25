<script lang="ts">
    import Home from "./Home.svelte";
    import TopBar from "./micro/TopBar.svelte";

</script>


<div class="relative box-content w-[430px] h-[932px] rounded-[70px] border-[1.5rem] border-black bg-white  my-16 mx-auto hidden md:block">
    <!-- Make the top part of the phone where is shows the battery, time and service provider -->
    <TopBar />
    <Home />
</div>

<style>

</style>
    
