<template>

    <v-card>


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

</style>