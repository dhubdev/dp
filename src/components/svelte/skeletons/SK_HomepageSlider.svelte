<script lang="ts">
	import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<div class="flex flex-col gap-4 w-[95%]">
	<Skeleton
		class="aspect-video lg:aspect-[16/6] rounded-lg w-full"
	/>
	<div class="flex flex-col gap-4 relative mt-2">
		<div class="flex flex-col gap-1">
			<Skeleton class="w-[40%] h-7" />
			<Skeleton class="w-full h-12" />
		</div>
		<Skeleton class="w-full h-9 lg:w-[40%]" />
	</div>
</div>
