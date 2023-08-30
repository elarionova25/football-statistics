<template>
  <div>
    <h1>Лиги</h1>
    <leagues-table :leagues="leagues"/>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import FootballData from "@/resources/Football";
import LeaguesTable from "@/components/LeaguesTable.vue";

export default {
    name: 'LeaguesList',
    components: {LeaguesTable},
    setup() {
        let leagues = ref({});
        onMounted(async () => {
            await fetchData();
        });
        const fetchData = async () => {
            leagues.value = await FootballData.competitions();
        };
        return {
            leagues,
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>