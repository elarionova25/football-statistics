<template>
  <div>
    <h1>Лиги</h1>
    <leagues-table/>
  </div>
</template>

<script>
import LeaguesTable from "@/components/LeaguesTable.vue";

export default {
    name: 'LeaguesList',
    components: {LeaguesTable},

}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>