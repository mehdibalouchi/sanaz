<template>
    <v-layout row wrap>
        <v-flex xs12 space-around-justify-contant @click="setSuggestedCommand">
            <div class="command-suggestion">
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
    .command-suggestion {
        /*width: 100%;*/
        margin-left: 24px;
        margin-top: 15px;
        font-size: medium !important;
    }
</style>