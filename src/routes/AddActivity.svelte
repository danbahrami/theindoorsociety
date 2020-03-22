<script>
	import marked from 'marked';

	let title = '';
	let description = '';

	const handleClick = (event) => {
		event.preventDefault();

		fetch('/api/activities', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify({
				title: title,
				description: description,
			})
		});
	}
</script>

<main>
	<section class="addActivity">
		<h2>Add an activity</h2>

		<form>
			<input bind:value={title} placeholder='Enter activity title' class="activityTitle">
			<textarea bind:value={description} class="activityDescription"></textarea>
			<button type="submit" on:click={handleClick}>Add activity</button>
		</form>
	</section>
	<section>
		<h2>Preview</h2>

		<article>
			<h2>{title}</h2>
			{@html marked(description)}
		</article>
	</section>
</main>

<style>
	main {
		display: flex;
	}

	section {
		flex: 1;
		padding: 20px;
	}

	.activityTitle {
		width: 100%;
	}
	.activityDescription {
		width: 100%;
		height: 200px;
	}
</style>
