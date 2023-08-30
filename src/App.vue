<template>
    <Header/>
    <div class="wrapper">
        <div class="content">
            <RouterView/>
        </div>
    </div>
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