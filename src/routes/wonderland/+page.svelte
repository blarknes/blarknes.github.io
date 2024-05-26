<script>
  import { WhiteRabbitLarge, WhiteRabbitSmall } from '$assets';
  import { ImageLoader, WonderlandNavbar } from '$components';

  const imageInformation = {
    largeImage: WhiteRabbitLarge,
    smallImage: WhiteRabbitSmall,
    imageText: 'white rabbit',
  };
</script>

<svelte:head>
  <title>wonderland</title>
</svelte:head>

<WonderlandNavbar />

<article>
  <p>If <span class='thin italic accent'>you</span> don't know</p>
  <p>where <span class='bold underline'>you're</span> <span class='bold'>going,</span></p>
  <p>any <span class='bold emphasis'>&nbsp;road&nbsp;</span><span class='thin italic'>&nbsp;will</span></p>
  <p>take <span class='bold accent'>you there.</span></p>
  <picture>
    <ImageLoader {imageInformation}/>
  </picture>
</article>

<style lang='scss'>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 22vh;
    font-size: calc(.8vw + 1.2rem);

    p, span {
      font-family: 'Noto Sans JP', sans-serif;
    }
  }

  picture {
    display: flex;
    width: fit-content;
    height: 15vh;
    margin-top: 8vh;
  }
</style>
