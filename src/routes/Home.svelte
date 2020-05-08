<script>
	import { spring } from 'svelte/motion';

	const initalBlobPosition = { top: window.innerHeight - window.innerHeight * 0.45, left: window.innerWidth - window.innerWidth * 0.4 };
	const blobPosition = spring(initalBlobPosition, {
		stiffness: 0.3,
		damping: 1.5
	});

	const handleMousemove = (event) => {
		blobPosition.set({ top: event.clientY, left: event.clientX });
	}
</script>

<main on:mousemove={handleMousemove}>
	<h1>The <br/>Indoor <br/>Society</h1>

	<div id="blob" class="blob" style='top:{$blobPosition.top}px; left:{$blobPosition.left}px'>
		<svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
			<path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
		</svg>
	</div>
</main>

<style>
	main {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		justify-content: center;

		overflow: hidden;
		padding: 20px;

		background-color: #EFEAE7;
	}

	h1 {
		margin: 0;
		margin-top: -30px;

		color: blue;
		font-size: 9em;
		font-weight: 700;
		line-height: 1;
	}

	.blob {
		position: absolute;
		top: 55%;
		left: 60%;
		width: 400px;
		margin-left: -200px;
		margin-top: -200px;

		transform-origin: 50% 50%;
		animation: blobMove 8s ease-in-out infinite;
		mix-blend-mode: difference;
		fill: yellow;
	}

	@keyframes blobMove {
		0%   { transform: scale(1); }
		38%  { transform: scale(0.8, 1) rotate(160deg); }
		40%  { transform: scale(0.8, 1) rotate(160deg); }
		78%  { transform: scale(1.3) rotate(-20deg); }
		80%  { transform: scale(1.3) rotate(-20deg); }
		100% { transform: scale(1); }
	}

	@media (min-width: 640px) {
		main {
			text-align: center;
		}
	}
</style>
