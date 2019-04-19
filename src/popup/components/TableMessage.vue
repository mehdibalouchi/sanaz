<template>
    <b-table :items="items" :fields="fields"></b-table>
</template>

<script>
  export default {
    name: 'TableMessage',
    props: {
      fields: Array,
      items: Array,
    },
  };
</script>

<style scoped>

</style>