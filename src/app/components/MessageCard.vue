<template>

    <v-card mt-2 min-width="90%">


        <TextMessage v-if="message.contentType==='text'" :text="message.content"></TextMessage>


        <TableMessage v-if="message.contentType==='table'" :fields="message.content.fields"
                          :items="message.content.items"></TableMessage>
    </v-card>


</template>

<script>
  import TableMessage from './TableMessage.vue?shadow';
  import TextMessage from './TextMessage.vue?shadow';

  export default {
    name: 'MessageCard',
    components: {
      TableMessage,
      TextMessage,
    },
    props: {
      message: Object,
    },
  };
</script>

<style scoped>
    .message-card-container {
        /*width: 100%;*/
        /*min-height: 150px;*/
    }
</style>