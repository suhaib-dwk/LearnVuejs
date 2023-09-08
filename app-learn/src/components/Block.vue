<template>
    <div class="block" v-if="show" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            show: false,
            timer: null,
            reactionTime: 0
        }
    },
    mounted() {
        console.log("component mounted");
        setTimeout(() => {
            this.show = true;
            console.log(this.delay);
        }, this.delay)
    },
    // updated() {
    //     console.log('component update');
    // },
    // unmounted() {
    //     console.log('unmounted')
    // },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer);
            this.$emit('end', this.reactionTime);
            // console.log(this.reactionTime);
        }
    }
}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>