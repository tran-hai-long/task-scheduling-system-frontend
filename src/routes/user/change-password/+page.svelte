<script>
    export let data;
</script>
<a href="/">Back to home page.</a>
<form method="POST">
    Old password: <input type="password" required name="old-password">
    New password: <input type="password" required name="new-password">
    Retype password: <input type="password" required name="retyped-password">
    <button>Submit</button>
</form>

{#if data.detail}
    <p>{data.detail}</p>
{/if}
