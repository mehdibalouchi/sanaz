<template>
    <p>{{itemsString}}</p>
</template>

<script>
  export default {
    name: 'TableMessage',
    props: {
      fields: Array,
      items: Array,
    },
    computed: {
      itemsString: () => {
        return JSON.stringify(this.items);
      },
    },
  };
</script>

<style scoped>

</style>