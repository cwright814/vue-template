<template>
    <div class="api-example">
        <h1>The data below pulls from an external API.</h1>
        <APICall request="https://jsonplaceholder.typicode.com/todos/1"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import APICall from "@/components/APICall.vue"; // @ is an alias to /src

@Component({
    components: {
        APICall
    }
})
export default class APIExample extends Vue {}
</script>
