<script>
    export let id, name, startTime, endTime, plannedTime, toDo;
</script>

<a href="/tasks/task/{id}">{name}</a>
<p>Start time: {startTime}</p>
<p>End time: {endTime}</p>
<p>Planned time: {plannedTime}</p>
{#if toDo}
    To do:<input type="checkbox" disabled checked/>
{:else }
    To do:<input type="checkbox" disabled/>
{/if}
