<template>
    <div class="message-card-container">
        <b-card>
            <TextMessage v-if="message.contentType==='text'" :text="message.content"></TextMessage>
            <TableMessage v-if="message.contentType==='table'" :fields="message.content.fields"
                          :items="message.content.items"></TableMessage>
        </b-card>
    </div>
</template>

<script>
  import TableMessage from './TableMessage';
  import TextMessage from './TextMessage';

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
        margin-bottom: 2%;
    }
</style>