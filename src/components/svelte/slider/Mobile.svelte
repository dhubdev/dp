<script lang="ts">
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import EmblaCarousel, {
		type EmblaOptionsType,
		type EmblaCarouselType,
	} from "embla-carousel";
	import {
		addThumbBtnsClickHandlers,
		addToggleThumbBtnsActive,
	} from "./scripts/EmblaCarouselThumbsButton";
	import Button from "$lib/components/ui/button/button.svelte";
	import Autoplay from "embla-carousel-autoplay";
	import type { iSlider } from "$lib/modules";

	let className: string = "";
	export { className as class };
	export let sliders: iSlider[] = [];

	let slideViewport: HTMLElement;
	let thumbViewport: HTMLElement;
	let emblaApiMain: EmblaCarouselType;
	let emblaApiThumb: EmblaCarouselType;

	const OPTIONS: EmblaOptionsType = {};
	const OPTIONS_THUMBS: EmblaOptionsType = {
		containScroll: "keepSnaps",
		dragFree: true,
	};
	onMount(() => {
		const viewportNodeMainCarousel = <HTMLElement>slideViewport;
		const viewportNodeThumbCarousel = <HTMLElement>thumbViewport;

		emblaApiMain = EmblaCarousel(viewportNodeMainCarousel, OPTIONS, [
			Autoplay({ playOnInit: true, delay: 3000 }),
		]);
		// emblaApiThumb = EmblaCarousel(viewportNodeThumbCarousel, OPTIONS_THUMBS);

		// const removeThumbBtnsClickHandlers = addThumbBtnsClickHandlers(emblaApiMain, emblaApiThumb);
		// const removeToggleThumbBtnsActive = addToggleThumbBtnsActive(emblaApiMain, emblaApiThumb);

		// return () => {
		// 	emblaApiMain
		// 		.on('destroy', removeThumbBtnsClickHandlers)
		// 		.on('destroy', removeToggleThumbBtnsActive);

		// 	emblaApiThumb
		// 		.on('destroy', removeThumbBtnsClickHandlers)
		// 		.on('destroy', removeToggleThumbBtnsActive);
		// };
	});
</script>

<div class={cn("embla", className, "w-full")}>
	<div bind:this={slideViewport} class="embla__viewport">
		<div class="embla__container">
			{#each sliders as slider, i}
				<div
					aria-label="mobile"
					class="embla__slide relative flex w-full flex-col gap-4 overflow-hidden rounded-lg"
				>
					<div class="relative aspect-video w-full overflow-hidden">
						<img
							src={slider.image}
							class="absolute aspect-auto w-full"
							alt={slider.name}
						/>
					</div>
					<div class="flex w-full flex-col items-center justify-center gap-8">
						<div class="flex w-full flex-col gap-4 pt-0">
							<div class="leading-[1]">
								<h2 class="text-lg md:text-3xl lg:text-6xl font-semibold">
									{slider.name}
								</h2>
								<p class="text-muted-foreground text-sm">
									{slider.subline}
								</p>
							</div>
							<Button class="w-full sm:w-fit mt-auto opacity-0"
								>{slider.cta}</Button
							>
						</div>
					</div>
					<Button
						href={slider.href}
						class="absolute bottom-0 left-0 w-full lg:w-fit mt-auto"
						>{slider.cta}</Button
					>
				</div>
			{/each}
		</div>
	</div>
</div>
