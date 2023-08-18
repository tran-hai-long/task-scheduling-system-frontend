<script>
    export let data;
</script>
<a href="/">Back to home page.</a>
{#if data}
    <h1>User info</h1>
    <p>Username: {data.username}</p>
    <p>Email: {data.email}</p>
    <a href="/user/change-password">Change password</a>
{:else }
    <p>Something went wrong.</p>
{/if}
