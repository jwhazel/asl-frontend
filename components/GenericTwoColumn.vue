<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-md-1">
        <img src="~/assets/images/roslyn-harbor-1.jpg" />
      </div>
      <div class="col-4">
        <h2>
          Curabitur pretium sed felis eget blandit feugiat pretium sed este.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit in elei fend
          venenatis libero a conse ctetur. Lorem ipsum dolor sit amet, conse
          ctetur adipiscing elit.
        </p>
        <div><button class="btn">Learn More</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenericTwoColumn',
}
</script>

<style scoped lang="scss">
@import '@/assets/css/fonts';

h2 {
  font-family: $classico-urw;
  font-weight: normal;
}

p {
  line-height: 30px;
}

img {
  border-radius: 16px;
  max-width: 100%;
}
</style>