<template>
    <div class="nav_wrap">
        <ul class="nav_lists">
            <li class="nav_list"><a href="#">Лиги</a></li>
            <li class="nav_list"><a href="#">Команды</a></li>
        </ul>
    </div>
</template>

<script>
import {onMounted} from "vue";
import FootballData from "@/resources/Football";

export default {
    name: 'Header',
    setup() {
        onMounted(async () => {
            await fetchData();
        });

        const fetchData = async () => {
            const data = await FootballData.competitions();
            console.log(data)
        };
    }
}
</script>

<style scoped>


</style>