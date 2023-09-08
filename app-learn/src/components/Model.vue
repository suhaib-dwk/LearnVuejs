<template>
    <div class="backdrop" @click.self="closeModel">
        <!-- <div class="model" :class="{dark : theme === 'dark'}">
            <h1>{{ header }}}</h1>
            <p>{{ text }}}</p>
        </div> -->
        <div class="model" :class="{dark : theme === 'dark'}">
            <slot>Default content</slot>

            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // props: ['header', 'text' , 'theme'],
    props: ['theme'],
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

    .model .actions {
        text-align: center;
        margin: 30px 0 10px 0;
    }

    .model .actions a {
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }

    .model.dark {
        background: rgb(100, 103, 103);
        color: white;
    }
    .model.dark h1 {
        color: white;
    }
</style>