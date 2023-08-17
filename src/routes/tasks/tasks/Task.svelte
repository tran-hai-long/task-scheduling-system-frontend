<script>
    export let name, startTime, endTime, plannedTime, toDo;
</script>

<strong>{name}</strong>
<p>Start time: {startTime}</p>
<p>End time: {endTime}</p>
<p>Planned time: {plannedTime}</p>
{#if toDo}
    To do:<input type="checkbox" disabled checked/>
{:else }
    To do:<input type="checkbox" disabled/>
{/if}
