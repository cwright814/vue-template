<template>
    <div class="api-call">
        <p><strong>{{ request }} =</strong> {{ response }}</p>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {HttpResponse} from "vue-resource/types/vue_resource";

@Component
export default class APICall extends Vue {
    // Property example
    @Prop() private request!: string;

    // Data example
    private response: string = "...";

    // Inherited method example (async optional)
    private async mounted(): Promise<void> {
        const testResponse = await this.requestTest();
        const responseText = await testResponse.text();
        this.response = responseText;
    }

    // Custom method example (async optional)
    private async requestTest(): Promise<HttpResponse> {
        return this.$http.get(this.request);
    }
}
</script>
