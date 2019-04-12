<template>
    <div class="container">
        <b-row>
            <b-col sm="12">
                <OptionBox></OptionBox>
            </b-col>
        </b-row>
        <hr/>
        <b-row>
            <b-col sm="12">
                <Conversation></Conversation>
            </b-col>
        </b-row>
        <hr/>
        <b-row>
            <b-col sm="12">
                <CommandHint></CommandHint>
            </b-col>
        </b-row>
        <hr/>
        <b-row>
            <b-col sm="12">
                <InputBox></InputBox>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import OptionBox from './OptionBox';
  import Conversation from './Conversation';
  import InputBox from './InputBox';
  import CommandHint from './CommandHint';

  export default {
    name: 'PopupContainer',
    components: {
      OptionBox,
      Conversation,
      InputBox,
      CommandHint,
    },
  };
</script>

<style scoped>
    .container {
        margin-top: 3%;
        margin-bottom: 3%;
    }
</style>