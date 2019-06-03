<template>
    <div>
        <p class="card-text">
            <b-progress :max="scoreState.max" height="1.75rem" style="font-size: 1.15rem;" show-progress>
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
    import { globalData } from '../../main'

    export default {
        name: 'Two',
        data() {
            return {
                scoreState: globalData.state,
            }
        },
        methods: {
            advance: function () {
                if (this.scoreState.score < this.scoreState.max) {
                    this.scoreState.score += 10
                }
            },
            reset: function () {
                this.scoreState.score = 0
            }
        }
    }
</script>