<template>
    <v-layout row wrap>
        <v-flex pl-3 pt-3 xs12 space-around-justify-contant @click="setSuggestedCommand">
            <div>
                {{getSuggestedCommand}}
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'CommandHint',
    methods:{
      ...mapActions(['setSuggestedCommand']),
    },
    computed:{
      ...mapGetters(['getSuggestedCommand',])
    }
  };
</script>

<style scoped>

</style>