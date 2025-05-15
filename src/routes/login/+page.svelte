<script>
	export let form;
</script>


<form method="POST">
    {#if form?.error}
        <p style="color:red;">{form.error}</p>
    {/if}
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <button>Login</button>
</form>