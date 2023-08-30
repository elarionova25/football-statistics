<template>
    <div class="container">
        <div class="table">
            <div class="table-header">
                <div class="header__item"><p id="name" class="filter__link">Название</p></div>
                <div class="header__item"><p id="wins" class="filter__link filter__link--number">Дата основания</p></div>
                <div class="header__item"><p id="draws" class="filter__link filter__link--number">TLA</p>
                </div>
                <div class="header__item"><p id="losses" class="filter__link filter__link--number">Место</p>
                </div>
                <div class="header__item"><p id="total" class="filter__link filter__link--number">Сайт</p></div>
            </div>
            <div v-if="isLoading">
                <div class="loader"></div>
            </div>
            <div class="table-content" v-else>
                <div class="table-row"
                     v-for="(team, key) in teams.teams"
                     :key="key"
                >
                    <div class="table-name">
                        <img
                                :src="team.crest"
                                class="table-image"
                        />
                        <h3>{{ team.name }}</h3>
                    </div>
                    <div class="table-data"> {{ team.founded }}</div>
                    <div class="table-data"> {{ team.tla }}</div>
                    <div class="table-data"> {{ team.venue }}</div>
                    <div class="table-data">
                        <a :href='team.website' target="_blank">
                            Ссылка
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import FootballData from "@/resources/Football";

export default {
    name: 'TeamsTable',
    setup() {
        let teams = ref({});
        let isLoading = ref(false);
        onMounted(async () => {
            await fetchData();
        });
        const fetchData = async () => {
            isLoading.value = true;
            teams.value = await FootballData.teams();
            isLoading.value = false;
        };
        return {
            teams,
            isLoading,
        }
    }
}
</script>

<style scoped>

</style>