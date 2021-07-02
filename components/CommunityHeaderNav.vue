<template>
  <ul>
    <li v-for="(item, index) in navElements" :key="index">
      <a :href="item.url">{{ item.label }}</a>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'CommunityHeaderNav',
  data() {
    return {
      navElements: [
        
        { label: 'Apartments', url: '/' },
        { label: 'Amentities', url: '/' },
        { label: 'Events', url: '/' },
        { label: 'Galleries', url: '/' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/css/colors';
@import '~/assets/css/fonts';

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-family: $classico-urw;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: $brown;
  font-size: 2.1rem;

  &:hover {
    border-bottom: 3px solid $green;
  }
}
</style>