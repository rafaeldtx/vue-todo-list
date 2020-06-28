<template>
	<div id="app">
        <new-task @taskAdded="addTask" />
        <task-grid
            :tasks="tasks"
            @taskDeleted="removeTask"
        />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid'
import NewTask from './components/NewTask'

export default {
    components: { TaskGrid, NewTask },
    data() {
        return {
            tasks: []
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
