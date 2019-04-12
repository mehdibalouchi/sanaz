<template>
    <div>
        <span @click="setSuggestedCommand">{{getSuggestedCommand}}</span>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'CommandHint',
    methods:{
      ...mapActions('input', ['setSuggestedCommand']),
    },
    computed:{
      ...mapGetters('input',['getSuggestedCommand',])
    }
  };
</script>

<style scoped>

</style>