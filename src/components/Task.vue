<template>
    <h3>{{ task.name }}</h3>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
