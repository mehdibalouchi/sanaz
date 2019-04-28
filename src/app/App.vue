<template>
    <div class="app-container">
        <OptionBox></OptionBox>
        <hr/>
        <Conversation></Conversation>
        <hr/>
        <CommandHint></CommandHint>
        <hr/>
        <InputBox></InputBox>
    </div>
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
  };
</script>

<style scoped>
    .app-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>
