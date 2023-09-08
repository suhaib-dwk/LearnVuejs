<template>
    <div class="backdrop" @click.self="closeModel">
            <div class="model" >
                <h1>{{ header }}}</h1>
                <p>{{ text }}}</p>
            </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text'],
    methods: {
        closeModel() {
            this.$emit('close');
            },
    }
}
</script>

<style scoped>
    .model{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .model h1{
        color: #03cfb4;
        border: none;
        padding: 0;
    }
</style>