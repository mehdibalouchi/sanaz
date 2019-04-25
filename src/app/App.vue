<template>
    <div class="cleanslate app-container">
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
  import OptionBox from './components/OptionBox';
  import Conversation from './components/Conversation';
  import InputBox from './components/InputBox';
  import CommandHint from './components/CommandHint';

  export default {
    components: {
      OptionBox,
      Conversation,
      InputBox,
      CommandHint,
    },
  };
</script>

<style lang="scss">
    @import "cleanslate.css";

    .app-container {
        background-color: white !important;
        position: fixed !important;
        display: flex !important;
        flex-direction: column !important;
        top: 10% !important;
        right: 0 !important;
        height: 70% !important;
        width: 65% !important;
        max-width: 400px !important;
        padding: 8px !important;
        box-sizing: border-box !important;

        /*transform: translateX(100%);*/
        /*transition: transform .45s cubic-bezier(0, 0, 0.3, 1);*/
        z-index: 9999999999999999 !important;

    }


</style>
