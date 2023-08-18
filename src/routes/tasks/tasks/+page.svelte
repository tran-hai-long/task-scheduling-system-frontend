<script>
    import Task from "./Task.svelte";

    export let data;
    console.log(data);
</script>
<a href="/">Back to home page.</a>
<h1>List of tasks</h1>
{#each data.tasks as task}
    <Task id={task.id} name={task.name} startTime={task.startTime}
          endTime={task.endTime}
          plannedTime={task.plannedTime} toDo={task.toDo}/>
    <br>
{/each}
