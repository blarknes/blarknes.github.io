<script lang="ts">
  import { ImageLoader } from "$components";
  import { WhiteRabbitLarge, WhiteRabbitSmall } from "$images";

  const small: string = WhiteRabbitSmall;
  const large: string = WhiteRabbitLarge;
  const alt: string = "white rabbit";
  const image: ImageInfo = { small, large, alt };
</script>

<section>
  <p>If <span class="italic accent">you</span> don't know</p>
  <p>where <span class="underline">you're</span> <span class="bold">going,</span></p>
  <p>any <span class="highlight">&nbsp;road&nbsp;</span><span class="italic">&nbsp;will</span></p>
  <p>take <span class="bold accent">you there.</span></p>
</section>

<picture>
  <ImageLoader {image} />
</picture>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 21dvh 0 8dvh 0;
  }

  p, span {
    font-size: calc(.8dvw + 1.2rem);
    font-family: "Shantell Sans", cursive;
  }

  picture {
    height: 15dvh;
  }
</style>
