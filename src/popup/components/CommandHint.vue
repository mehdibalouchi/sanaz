<template>
    <div>
        <span>{{getSuggestedCommand}}</span>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'CommandHint',
    computed:{
      ...mapGetters('input',['getSuggestedCommand'])
    }
  };
</script>

<style scoped>

</style>