<template>
  <div>
    <span>{{ address }}</span>
    <button class="btn">{{ phoneNumber }}</button>
  </div>
</template>

<script>
export default {
  name: 'CommunitHeaderLocation',
  data() {
    return {
      address: '100 Landing Road, Roslyn, New York 11576',
      phoneNumber: '(516) 626-6900',
    }
  },
}
</script>

<style scoped>
span,
button {
  font-size: 1.8rem;
}

.btn {
  padding: 5px 20px;
  margin-left: 15px;
}
</style>