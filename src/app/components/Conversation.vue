<template>
    <div class="conversion-container" id="conversion-container" ref="conversion">
        <v-layout justify-center row wrap>
            <v-flex xs11 mt-4 row wrap v-for="message in sortedHistory" :key="message.id">
                <MessageCard :message="message"></MessageCard>
            </v-flex>
        </v-layout>
    </div>


</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import MessageCard from './MessageCard';

  export default {
    name: 'Conversation',
    components: { MessageCard },
    computed: {
      ...mapGetters(['sortedHistory']),
    },
    methods: {
      scroll() {
        this.$nextTick(function() {
          this.$refs.conversion.scrollTop = this.$refs.conversion.scrollHeight;
        });
      },
    },
    watch: {
      sortedHistory() {
        this.scroll();
      },
    },
    mounted() {
      this.scroll();

    },
  };
</script>

<style>
    .conversion-container {
        padding-top: 3px;
        padding-bottom: 3px;
        /*display: flex;*/
        /*justify-content: space-around;*/
        /*flex-direction: column;*/
        overflow: hidden;
        height: 500px;
        /*max-height: 00px;*/
        overflow-y: scroll;
        overflow-wrap: break-word;
        /*width: 100%;*/
    }
</style>