<script lang="ts">
  import type { IconButtonInfo } from "$types";

  interface IconButtonProps {
    info: IconButtonInfo;
  };

  let { info }: IconButtonProps = $props();

  const target = info.target;
  const href = info.href;
</script>

<a {href} {target}>
  <info.icon />
</a>

<style lang="scss">
  a {
    font-size: calc(0.45dvw + 1.2rem);
    line-height: 0;
  }
</style>
