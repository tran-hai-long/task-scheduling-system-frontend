<script>
    export let data;
</script>

{#if data.success}
    <p>Email verified. Registration complete!</p>
    <a href="/">Click here to return to homepage.</a>
{:else }
    <p>Something went wrong.</p>
{/if}
