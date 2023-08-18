<script>
    export let data;
</script>
<a href="/">Back to home page.</a>
<strong>{data.name}</strong>
<p>Description: {data.description}</p>
<p>Start time: {data.startTime}</p>
<p>End time: {data.endTime}</p>
<p>Planned time: {data.plannedTime}</p>
<p>Status: {data.status}</p>
<p>Priority: {data.priority}</p>
{#if data.toDo}
    To do:<input type="checkbox" disabled checked/>
{:else }
    To do:<input type="checkbox" disabled/>
{/if}
