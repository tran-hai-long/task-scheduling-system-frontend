<script>
    import Task from "./Task.svelte";

    export let data;
</script>

<h1>List of tasks</h1>
{#each data.results as task}
    <Task id={task.id} name={task.name} startTime={task.startTime}
          endTime={task.endTime}
          plannedTime={task.plannedTime} toDo={task.toDo}/>
    <br>
{/each}
