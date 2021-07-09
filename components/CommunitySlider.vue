<template>
  <div class="community-slider__container">
    <ul class="community-slider__nav-container">
      <li
        :class="{ active: sliderActiveIndex === 0 }"
        @click="setActiveIndex(0)"
      >
        Community Amenities
      </li>
      <li
        :class="{ active: sliderActiveIndex === 1 }"
        @click="setActiveIndex(1)"
      >
        Photo Gallery
      </li>
      <li
        :class="{ active: sliderActiveIndex === 2 }"
        @click="setActiveIndex(2)"
      >
        Care Services
      </li>
    </ul>
    <div
      :class="{ hidden: sliderActiveIndex > 0 }"
      class="community-slider__content-container"
    >
      <GenericTwoColumn />
    </div>
  </div>
</template>

<script>
import GenericTwoColumn from './GenericTwoColumn.vue'

export default {
  components: { GenericTwoColumn },
  data() {
    return {
      sliderActiveIndex: 0,
    }
  },
  methods: {
    setActiveIndex(index) {
      this.sliderActiveIndex = index
    },
  },
}
</script>


<style scoped lang="scss">
@import '@/assets/css/colors';

.community-slider__container {
  position: relative;
  margin: 50px 0;
  padding: 80px 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MTgiIHZpZXdCb3g9IjAgMCAxNjAwIDkxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjAwIDAuMjQ4MjkxQzE2MDAgMC4yNDgyOTEgMTE5OS4xMyAxOC43Njk5IDkxMy40NDMgNTMuNzkzNUM2MjcuNzU1IDg4LjgxNzEgMCAyOTIuNzc0IDAgMjkyLjc3NFY5MTcuNDEzSDE2MDBWMC4yNDgyOTFaIiBmaWxsPSIjRUJFOEU1Ii8+Cjwvc3ZnPgo=');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.community-slider__nav-container {
  max-width: 1041px;
  display: flex;
  padding: 0;
  margin: 0 auto;
  list-style-type: none;
  justify-content: space-evenly;
  border-radius: 16px;
  text-transform: uppercase;

  li {
    text-align: center;
    color: white;
    background-color: $brown;
    width: 33.333%;
    font-size: 2.1rem;
    padding: 30px 0;
    cursor: pointer;

    &:first-child {
      border-radius: 11px 0 0 11px;
      border-right: 1px solid white;
    }

    &:last-child {
      border-radius: 0 11px 11px 0;
      border-left: 1px solid white;
    }

    &.active {
      background-color: $green;
      color: $brown;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 45%;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid $green;
      }
    }
  }
}

.community-slider__content-container {
  margin-top: 80px;
}

.hidden {
  opacity: 0;
}
</style>