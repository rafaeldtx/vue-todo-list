<template>
    <div class="task-grid">
        <div class="tasks-list">
            <template v-if="tasks.length">
                <task
                    v-for="(task, i) in tasks"
                    :key="task.name"
                    :task="task"
                    @taskDeleted="$emit('taskDeleted', i)"
                    @toggleDone="$emit('toggleDone', i)"
                >
                    {{ task.name }}
                </task>
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
