<template>
    <div>
        <h1>Команды</h1>
        <teams-table/>
    </div>
</template>

<script>
import CommandsTable from "@/components/TeamsTable.vue";
import TeamsTable from "@/components/TeamsTable.vue";

export default {
    name: "CommandsView",
    components: {TeamsTable, CommandsTable},
}
</script>

<style scoped>

</style>