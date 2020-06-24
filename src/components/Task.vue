<template>
    <div class="task" :class="stateClass()">
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        stateClass() {
            return {
                pending: !this.task.done,
                done: this.task.done
            }
        }
    }
}
</script>

<style scoped>
    .task {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        color: black;
        border-left: 12px solid #928d8d;
        background-color: #e7e7e7;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #076116;
        background-color: #1fc343;
        text-decoration: line-through;
    }
</style>
