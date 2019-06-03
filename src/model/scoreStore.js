export default {
    state: {
        max: 50,
        score: 0
    },
    reset: function () {
        this.state.score = 0
    },
    score: function (score) {
        if (this.state.score < this.state.max) {
            this.state.score += score
        }
    },
    bumpScore: function () {
        this.score(10)
    }
}