<script lang="ts">
  type IconButtonProps = {
    info: IconButtonInfo;
  };

  let { info }: IconButtonProps = $props();

  const target: string = info.target;
  const href: string = info.href;
</script>

<a {href} {target}>
  <info.icon />
</a>

<style lang="scss">
  a {
    font-size: calc(0.45dvw + 1.2rem);
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }
</style>
