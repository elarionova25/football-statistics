<template>
    <div class="container">
        <div class="table">
            <div class="table-header">
                <div class="header__item"><a id="name" class="filter__link" href="#">Название</a></div>
                <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Число сезонов</a></div>
                <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Страна</a></div>
                <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Код</a></div>
                <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Тип</a></div>
            </div>
            <div class="table-content">
                <div class="table-row"
                     v-for="(competition, key) in leagues.competitions"
                     :key="key"
                >
                        <div class="table-name">
                            <img
                                :src="competition.emblem"
                                class="table-image"
                            />
                            <h3>{{ competition.name }}</h3>
                        </div>
                    <div class="table-data"> {{ competition.numberOfAvailableSeasons }}</div>
                    <div class="table-data"> {{ competition.area.name }} </div>
                    <div class="table-data"> {{ competition.code }} </div>
                    <div class="table-data"> {{ competition.type }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeaguesTable',
    props: ['leagues'],
    setup(props) {

    }
}
</script>

<style scoped>

</style>