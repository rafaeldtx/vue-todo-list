<template>
    <div>
        <h3 v-for="task in tasks" :key="task">{{ task.name }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks:[
                { name: 'Clean the house', done: false },
                { name: 'Walk with dog', done: false },
                { name: 'Buy food', done: false },
                { name: 'Pay ligth account', done: false }
            ]
        }
    }
}
</script>

<style scoped>

</style>
