<script lang="ts">
	import type { iSlider } from '$lib/modules';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import EmblaCarousel, { type EmblaOptionsType, type EmblaCarouselType } from 'embla-carousel';
	import {
		addThumbBtnsClickHandlers,
		addToggleThumbBtnsActive
	} from './scripts/EmblaCarouselThumbsButton';
	import { Button } from '$lib/components/ui/button';
	import Autoplay from 'embla-carousel-autoplay';

	let className: string;
	export { className as class };
	export let sliders: iSlider[] = []

	let slideViewport: HTMLElement;
	let thumbViewport: HTMLElement;
	let emblaApiMain: EmblaCarouselType;
	let emblaApiThumb: EmblaCarouselType;


	const OPTIONS: EmblaOptionsType = {};
	const OPTIONS_THUMBS: EmblaOptionsType = {
		containScroll: 'keepSnaps',
		dragFree: true
	};
	onMount(() => {
		const viewportNodeMainCarousel = <HTMLElement>slideViewport;

		emblaApiMain = EmblaCarousel(viewportNodeMainCarousel, OPTIONS, [
			Autoplay({ playOnInit: true, delay: 3000 })
		]);
	});

	const getStyle = (image: string) => `background: url("${image}") no-repeat;background-position:center;background-size:cover`
</script>

<div class={cn('embla w-full', className)}>
	<div bind:this={slideViewport} class="embla__viewport">
		<div class="embla__container w-full">
			{#each sliders as slider, i}
				<div
					aria-label="desktop"
					class="embla__slide hidden w-full lg:block relative"
				>
					<div class="aspect-[16/6] rounded-lg w-full" style={getStyle(slider.image)}></div>
					<div class="flex flex-col gap-4 relative mt-2">
						<div class="leading-[1]">
							<h2 class="text-lg font-semibold z-[1]">{slider.name}</h2>
							<p class="text-sm text-muted-foreground">
								{slider.subline}
							</p>
						</div>
						<Button class="w-full lg:w-fit self-start" href={slider.href}>{slider.cta}</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
