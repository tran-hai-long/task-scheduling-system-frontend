<script>
    export let data;
</script>

<form method="POST">
    <p>Username: </p> <input type="text" required name="username">
    <p>Email: </p> <input type="email" required name="email">
    <p>Password: </p> <input type="password" required name="password">
    <p>Retype password: </p><input type="password" required name="retyped-password">
    <button>Register</button>
</form>

{#if data.detail}
    <p>{data.detail}</p>
{/if}
