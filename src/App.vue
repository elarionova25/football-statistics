<template>
    <Header></Header>
    <RouterView/>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    components: {
        Header
    },
    setup() {
        // ...
    }
}
</script>