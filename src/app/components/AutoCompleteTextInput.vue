<template>
    <v-text-field style="font-size: medium !important;"
                  value=""
                  v-on:keyup.enter.stop.prevent="sendUserMessage"
                  v-on:keydown.enter.stop.prevent=""
                  v-on:keypress.enter.stop.prevent=""
                  v-on:keyup.tab.stop.prevent="setSugesstedInput"
                  v-on:keydown.tab.stop.prevent=""
                  v-on:keypress.tab.stop.prevent=""
                  v-on:keyup.up.stop.prevent="navigateCommandHistory('up')"
                  v-on:keydown.up.stop.prevent=""
                  v-on:keypress.up.stop.prevent=""
                  v-on:keyup.down.stop.prevent="navigateCommandHistory('down')"
                  v-on:keydown.down.stop.prevent=""
                  v-on:keypress.down.stop.prevent=""
                  v-model="textInput"
                  :hint="getSuggestedInput"
                  persistent-hint></v-text-field>
</template>

<script>

  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'AutoCompleteTextInput',
    methods: {
      ...mapActions(['changeInputText', 'navigateCommandHistory', 'setSugesstedInput', 'sendUserMessage']),
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