<script>
	import marked from 'marked';

	let title = '';
	let description = '';
</script>

<main>
	<section>
		<h1>Add an activity</h1>

		<form>
			<input bind:value={title} placeholder='Enter activity title'>
			<textarea bind:value={description}></textarea>
		</form>
	</section>
	<section>
		<h1>Preview</h1>

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
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
