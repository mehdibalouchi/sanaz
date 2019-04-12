<template>
    <div class="container conversion-container">
        <b-row v-for="message in sortedHistory" :key="message.id">
            <b-col sm="12">
                <MessageCard :message="message"></MessageCard>
            </b-col>

        </b-row>
    </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import MessageCard from './MessageCard'

  export default {
    name: 'Conversation',
    components: { MessageCard },
    computed:{
      ...mapGetters('chat',['sortedHistory'])
    }
  };
</script>

<style scoped>
    .conversion-container{
        height: 300px;
        overflow-y: scroll;
        overflow-wrap: break-word;
        /*width: 100%;*/
    }
</style>