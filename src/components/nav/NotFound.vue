<template>
	<div class="alone">
		<h2>
			Page not found! Maybe view aot
			<router-link to="/teams">Teams</router-link>
		</h2>
	</div>
</template>

<script>
	export default {
		name: "NotFound",
	};
</script>

<style scoped>
	h2 {
		text-align: center;
	}
    .alone {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
