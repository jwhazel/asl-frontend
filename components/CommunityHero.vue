<template>
  <div class="container">
    <div
      class="row community-hero__container"
      :style="{ 'background-image': 'url(' + background + ')' }"
    >
      <div class="col-5 community-hero__content-container">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <p>
          Starting at <strong>{{ startingAtPrice }}</strong> / month
        </p>
        <div><button class="btn">See Pricing and Floorplans</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '~/lib/utils'

export default {
  computed: {
    startingAtPrice() {
      return formatCurrency(this.$store.state.community.CommunityHero.price)
    },
    title() {
      return this.$store.state.community.CommunityHero.title
    },
    text() {
      return this.$store.state.community.CommunityHero.text
    },
    background() {
      return this.$store.state.community.CommunityHero.background_image
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';
@import '@/assets/css/fonts';

.container {
  margin-top: 20px;
}

h1 {
  font-family: $classico-urw;
  font-size: 5.3rem;
  line-height: 55px;
  font-weight: normal;
}

p {
  font-size: 2.4rem;
  line-height: 36px;
}

.community-hero__pricing-container {
  font-size: 2.4rem;
}

.community-hero__container {
  height: 670px;
  background-position: right;
  background-repeat: no-repeat;
  border-radius: 16px;
  overflow: hidden;
}

.community-hero__content-container {
  background-color: $brown;
  color: #fff;
  padding: 3em 4em;
  clip-path: polygon(
    100% 0,
    96% 24%,
    92% 50%,
    86% 76%,
    78% 100%,
    32% 100%,
    0 100%,
    0% 43%,
    0 0
  );

  .btn {
    color: inherit;
    margin-top: 10px;
    padding: 10px 60px;
  }
}
</style>