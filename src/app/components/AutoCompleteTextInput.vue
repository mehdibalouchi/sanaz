<template>
    <v-text-field style="font-size: medium !important;"
                  v-on:keyup.tab.stop.prevent="setSugesstedInput"
                  v-on:keyup.enter="sendUserMessage"
                  v-on:keydown.tab.stop.prevent=""
                  v-on:keypress.tab.stop.prevent=""
                  v-model="textInput"
                  :hint="getSuggestedInput"
                  persistent-hint></v-text-field>
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

</style>