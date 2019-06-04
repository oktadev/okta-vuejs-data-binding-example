<template>
    <div>
        <p class="card-text">
            <b-progress :max="scoreState.max" class="big-progress" show-progress>
                <b-progress-bar :value="scoreState.score"/>
            </b-progress>
            <br/>
        </p>
        <b-button @click="advance" variant="success" class="m-1">
            Advance progress bar
        </b-button>
        <b-button @click="reset" variant="danger" class="m-1">
            Reset progress bar
        </b-button>
    </div>
</template>
<script>
    import scoreStoreVuex from '../../model/scoreStoreVuex'

    export default {
        name: 'Two',
        data() {
            return {
                scoreState: scoreStoreVuex.state
            }
        },
        methods: {
            advance: () => scoreStoreVuex.commit('bumpScore'),
            reset: () => scoreStoreVuex.commit('reset')
        }
    }
</script>