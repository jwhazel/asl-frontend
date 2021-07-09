<template>
  <div>
    <CommunityHeader />
    <component
      :is="componentName"
      v-for="(componentName, index) in layoutOrder"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  computed: {
    layoutOrder() {
      return this.$store.state.community.layout
    },
  },
  created() {
    this.$store.dispatch('community/getCommunityData')
  },
}
</script>
