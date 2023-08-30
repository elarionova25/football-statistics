<template>
    <div class="container">
        <div class="table">
            <div class="table-header">
                <div class="header__item"><a id="name" class="filter__link" href="#">Название</a></div>
                <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Число
                    сезонов</a></div>
                <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Страна</a>
                </div>
                <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Код</a>
                </div>
                <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Тип</a></div>
            </div>
            <div v-if="isLoading">
                <div class="loader"></div>
            </div>
            <div class="table-content" v-else>
                <router-link
                    v-for="(competition, key) in leagues.competitions"
                    :key="key"
                    :to="`/leagues/${competition.id}`"
                    tag="div"
                >
                    <div class="table-row">
                        <div class="table-name">
                            <img
                                :src="competition.emblem"
                                class="table-image"
                            />
                            <h3>{{ competition.name }}</h3>
                        </div>
                        <div class="table-data"> {{ competition.numberOfAvailableSeasons }}</div>
                        <div class="table-data"> {{ competition.area.name }}</div>
                        <div class="table-data"> {{ competition.code }}</div>
                        <div class="table-data"> {{ competition.type }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import FootballData from "@/resources/Football";

export default {
    name: 'LeaguesTable',
    setup() {
        let leagues = ref({});
        let isLoading = ref(false);
        onMounted(async () => {
            await fetchData();
        });
        const fetchData = async () => {
            isLoading.value = true;
            leagues.value = await FootballData.competitions();
            isLoading.value = false;
        };
        return {
            leagues,
            isLoading
        }
    }
}
</script>

<style scoped>

</style>