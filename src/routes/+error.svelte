<script lang="ts">
  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { onMount } from "svelte";

  function setup(): void {
    const url: ResolvedPath = resolve("/404");
    goto(url);
  }

  onMount(setup);
</script>
