<template>
    <v-container mt-1 style="height: 50vh;background-color: #e1e2e1;" class="scroll-y" ref="conversion">
        <v-layout justify-center row wrap>
            <v-flex xs11 mt-4 row wrap v-for="message in sortedHistory" :key="message.id">
                <MessageCard :message="message"></MessageCard>
            </v-flex>
        </v-layout>
    </v-container>
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

</style>