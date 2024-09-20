<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import type { iServiceCard } from "$lib/modules";
    import { cn } from "$lib/utils";

  export let service: iServiceCard

  const { name, content, image } = service

  let className: string = ""

  export { className as class }

  const style = `background:url(${image}) no-repeat;background-size:cover;background-position:center`
 </script>
  
 <Resizable.PaneGroup direction="horizontal" class={cn("w-full rounded-lg border", className)}>
  <Resizable.Pane defaultSize={30}>
   <div class="flex h-[200px] items-center justify-center" { style } />
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={70}>
   <Resizable.PaneGroup direction="vertical">
    <Resizable.Pane defaultSize={25}>
      <h2 class="h-full flex items-center p-4">{name}</h2>
    </Resizable.Pane>
    <Resizable.Handle />
    <Resizable.Pane defaultSize={75}>
      <p class="overflow-auto p-4">{content}</p>
    </Resizable.Pane>
   </Resizable.PaneGroup>
  </Resizable.Pane>
 </Resizable.PaneGroup>