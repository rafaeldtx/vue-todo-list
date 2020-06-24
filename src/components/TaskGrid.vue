<template>
    <div class="task-grid">
		<h1 class="title">To do List</h1>

        <div class="tasks-list">
            <template v-if="tasks.length">
                <task v-for="task in tasks" :key="task.name" :task="task">{{ task.name }}</task>
            </template>

            <p v-else class="empty-state">Sua vida está em dia :)</p>
        </div>
    </div>
</template>

<script>
import Task from '@/components/Task'
export default {
    components: { Task },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    .task-grid .tasks-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .empty-state {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
