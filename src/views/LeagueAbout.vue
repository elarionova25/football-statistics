<template>
  <div>
      lol
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import FootballData from "@/resources/Football";

export default {
    name: 'LeagueAbout',
    setup() {
        let route = useRoute();
        let league = ref({});
        onMounted(async () => {
            let id = parseInt(route.params.leagueId, 10);
            await fetchData(id);
            console.log(id)
        });
        const fetchData = async (id) => {
            league.value = await FootballData.getAllCompetitionMatches(id);
        };
        return {
            league,
        }
    }
}
</script>

<style scoped>

</style>