<template>
    <div class="conversion-container">
        <template v-for="message in sortedHistory">
            <div class="conversion" :key="message.id">
                <MessageCard :message="message"></MessageCard>
            </div>
        </template>
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
  };
</script>

<style scoped>
    .conversion-container {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
        overflow-y: scroll;
        overflow-wrap: break-word;
        width: 100%;
    }
</style>