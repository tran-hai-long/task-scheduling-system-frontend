<script>
    export let data;
</script>

{#if data}
    <h1>User info</h1>
    <p>Username: {data.username}</p>
    <p>Email: {data.email}</p>
{:else }
    <p>Something went wrong.</p>
{/if}
