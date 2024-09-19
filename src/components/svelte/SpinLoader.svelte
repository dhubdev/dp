<script lang="ts">
	let className: string = ""
	import { cn } from "$lib/utils";

	export { className as class }
</script>
<span class={cn("w-4 h-4 rounded-full bg-transparent border-2 border-font spin-loader", className, "border-l-transparent border-r-transparent")}></span>

<style>
	.spin-loader {
		animation: spinLoader 0.3s infinite linear;
	}
	@keyframes spinLoader {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
