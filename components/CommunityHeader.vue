<template>
  <header class="container">
    <div class="row">
      <div class="community-header__column-1 col-4">
        <CommunityHeaderLogo />
      </div>
      <div class="community-header__column-2 col-md-6 offset-md-1">
        <CommunityHeaderLocation />
        <nav>
          <CommunityHeaderNav />
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import CommunityHeaderNav from './CommunityHeaderNav.vue'
import CommunityHeaderLogo from './CommunityHeaderLogo.vue'
import CommunityHeaderLocation from './CommunityHeaderLocation.vue'

export default {
  components: {
    CommunityHeaderNav,
    CommunityHeaderLogo,
    CommunityHeaderLocation,
  },
}
</script>

<style scoped>
.container {
  padding: 15px 0;
}

.row {
  align-items: flex-end;
}

.community-header__column-1 {
  text-align: center;
}

.community-header__column-2 {
  text-align: right;
}

nav {
  margin-top: 20px;
}
</style>