<template>
	<div id="app">
		<h1>Tarefas</h1>
        <tasks-progress :progress="progress" />
        <new-task @taskAdded="addTask" />
        <task-grid
            :tasks="tasks"
            @taskDeleted="removeTask"
            @toggleDone="toggleDone"
        />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid'
import NewTask from './components/NewTask'
import TasksProgress from './components/TasksProgress'

export default {
    components: { TaskGrid, NewTask, TasksProgress },
    data() {
        return {
            tasks: []
        }
    },
    computed: {
        progress() {
            const total = this.tasks.length
            const done = this.tasks.filter(t => t.done).length

            return Math.round(done / total * 100) || 0
        }
    },
    watch: {
        tasks: {
            deep: true,
            handler() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            }
        }
    },
    methods: {
        addTask(task) {
            const sameName = t => t.name === task.name
            const isNotPresent = this.tasks.filter(sameName).length === 0

            if (isNotPresent) {
                this.tasks.push({ name: task.name, done: false })
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    created() {
        const json = localStorage.getItem('tasks')
        const parsed_json = JSON.parse(json)

        if (Array.isArray(parsed_json)) {
            this.tasks = parsed_json
        }
    }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
