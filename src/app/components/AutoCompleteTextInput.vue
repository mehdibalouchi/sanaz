<template>
    <div class="suggestion" :data-placeholder="getSuggestedInput">
        <input v-on:keyup.tab.stop.prevent="setSugesstedInput" v-on:keyup.enter="sendUserMessage"
               v-on:keydown.tab.stop.prevent="" v-on:keypress.tab.stop.prevent="" v-model="textInput">
    </div>
</template>

<script>

  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'AutoCompleteTextInput',
    methods: {
      ...mapActions(['changeInputText', 'setSugesstedInput', 'sendUserMessage']),
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