<template>
    <div>
        <b-input-group>
            <div class="suggestion" :data-placeholder="getSuggestedInput">
                <b-form-input @keydown="onKeyDown" @keyup="onKeyUp" v-model="textInput" size="lg"></b-form-input>
            </div>
            <b-input-group-append>
                <button class="btn btn-lg btn-primary" @click="sendTextMessage" @>send</button>
            </b-input-group-append>

        </b-input-group>

    </div>
</template>

<script>

  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'AutoCompleteTextInput',
    props: {
      suggestion: String,
    },
    methods: {
      ...mapActions(['changeInputText', 'setSugesstedInput', 'sendTextUserMessage']),
      sendTextMessage: function() {
        this.sendTextUserMessage(this.textInput);
        this.changeInputText('');
      },
      onKeyUp: function(e) {
        if (event.keyCode === 9) {
          e.preventDefault();
          this.setSugesstedInput();
        }
        if (event.keyCode === 13)
          this.sendTextMessage();
      },
      onKeyDown: function(e) {
        if (event.keyCode === 9)
          e.preventDefault();
      },
    },
    computed: {
      ...mapState(['input']),
      ...mapGetters(['getSuggestedInput']),
      textInput: {
        get() {
          return this.input;
        },
        set(value) {
          this.changeInputText(value);
        },
      },
    },
  };
</script>

<style scoped>
    .suggestion {
        position: relative;
    }

    .suggestion::after {
        position: absolute;
        left: 17px;
        top: 9px;
        content: attr(data-placeholder);
        pointer-events: none;
        opacity: 0.6;
        font-size: 20px;
    }
</style>