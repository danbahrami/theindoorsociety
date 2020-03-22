<script>
	import { onMount } from 'svelte';

	let activities = [];

	onMount(async () => {
		const res = await fetch('/api/activities');
		activities = await res.json();
	});
</script>

<div>
	{#each activities as activity}
		<article>
			<h3>{activity.title}</h3>
      <p>{activity.description}</p>
		</article>
	{:else}
		<p>loading...</p>
	{/each}
</div>
