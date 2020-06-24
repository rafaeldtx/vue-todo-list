<template>
    <div>
		<h1 class="title">To do List</h1>

        <task v-for="task in tasks" :key="task.name" :task="task">{{ task.name }}</task>
    </div>
</template>

<script>
import Task from '@/components/Task'
export default {
    components: { Task },
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
