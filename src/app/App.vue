<template>
    <v-container pa-0 ma-0 v-if="show==='true'">
        <OptionBox></OptionBox>
        <Conversation></Conversation>
        <CommandHint></CommandHint>
        <InputBox></InputBox>
    </v-container>

</template>

<script>

  import store from '../store';
  import OptionBox from './components/OptionBox.vue?shadow';
  import Conversation from './components/Conversation.vue?shadow';
  import InputBox from './components/InputBox.vue?shadow';
  import CommandHint from './components/CommandHint.vue?shadow';


  export default {
    store,
    components: {
      OptionBox,
      Conversation,
      InputBox,
      CommandHint,
    },
    props: [
      'show',
    ],

  };
</script>

<style>
    @import '~vuetify/dist/vuetify.min.css';

</style>
