<template>
  <div class="container">
    <div class="header">See for yourself. Schedule a tour!</div>
    <div class="row">
      <div class="col-5">
        <label>First Name</label>
        <input type="text" />
      </div>
      <div class="col-5">
        <label>Last Name</label>
        <input type="text" />
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <label>Email</label>
        <input type="text" />
      </div>
      <div class="col-5">
        <label>Phone Number</label>
        <input type="text" />
      </div>
    </div>
    <div class="button-container">
      <button class="btn">Schedule My Tour</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityScheduleTour',
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';
@import '@/assets/css/fonts';

.container {
  max-width: 800px;
  background-color: $brown;
  color: white;
  border-radius: 16px;
  padding: 2em;
  margin: 50px auto;
}

.header {
  text-align: center;
  font-family: $classico-urw;
  font-size: 3.4rem;
  margin-bottom: 30px;
}

input {
  display: block;
  width: 90%;
  border-radius: 4px;
  padding: 1em;
  border: 0;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}
.btn {
  background-color: $green;
}

.col-5 {
  width: 48%;
  margin-bottom: 20px;
}
</style>