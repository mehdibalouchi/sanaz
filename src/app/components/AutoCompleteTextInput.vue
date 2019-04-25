<template>
    <div class="suggestion" :data-placeholder="getSuggestedInput">
        <input @keydown="onKeyDown" @keyup="onKeyUp" v-model="textInput">
    </div>
</template>

<script>

  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'AutoCompleteTextInput',
    methods: {
      ...mapActions(['changeInputText', 'setSugesstedInput']),
      onKeyUp: function(e) {
        if (event.keyCode === 9) {
          e.preventDefault();
          this.setSugesstedInput();
        }
        if (event.keyCode === 13)
          this.sendTextUserMessage();
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
        position: relative !important;
    }

    .suggestion::after {
        position: absolute !important;
        left: 1px !important;
        top: 2px !important;
        content: attr(data-placeholder) !important;
        pointer-events: none !important;
        opacity: 0.6 !important;
        /*font-size: 20px !important;*/
    }
</style>