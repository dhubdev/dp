<script lang="ts">
	import SK_HomepageSlider from "../skeletons/SK_HomepageSlider.svelte";
	import "./css/base.css";
	import "./css/sandbox.css";
	import "./css/embla.css";
	import Mobile from "./Mobile.svelte";
	import Desktop from "./Desktop.svelte";
	import { onMount } from "svelte";
	import type { iSlider } from "$lib/modules";

	export let sliders: iSlider[] = [];

	$: isMobile = false;

	let mounted = new Promise((resolve) => {
		onMount(() => {
			isMobile = window.innerWidth < 1024 ? true : false;
			addEventListener(
				"resize",
				() => (isMobile = window.innerWidth < 1024 ? true : false),
			);
			resolve(true);
		});
	});
</script>

{#await mounted}
	<SK_HomepageSlider />
{:then value}
	{#if isMobile}
		<Mobile {sliders} class="block lg:hidden" />
	{:else}
		<Desktop {sliders} class="hidden lg:block" />
	{/if}
{/await}
