<template>
    <v-layout justify-space-around row wrap>
        <v-flex xs10 pl-3>
            <AutoCompleteTextInput v-if="inputType === 'text'"></AutoCompleteTextInput>
        </v-flex>
        <v-flex xs2 justify-center row wrap>
            <div style="margin-top: 15%">
                <v-btn
                        icon dark color="indigo"
                        v-if="showSend"
                        @click="sendUserMessage"
                >
                    <img :src="sendUrl" alt="" width="16px" height="16px">
                </v-btn>
                <v-btn
                        v-if="!showSend"
                        dark
                        @click.stop.prevent="toggle ? endSpeechRecognition() : startSpeechRecognition()"
                        icon
                        :color="!toggle ? 'grey' : (speaking ? 'red' : 'red darken-3')"
                        :class="{'animated infinite pulse': toggle}"
                >
                    <img :src="micUrl" alt="" width="16px" height="16px">
                </v-btn>
            </div>

        </v-flex>

    </v-layout>
</template>

<script>
  import AutoCompleteTextInput from './AutoCompleteTextInput.vue?shadow';
  import AudioInput from './AudioInput.vue?shadow';
  import { mapActions, mapState } from 'vuex';

  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = SpeechRecognition ? new SpeechRecognition() : false;

  export default {
    name: 'InputBox',
    data: function() {
      return {
        dataUrl: '',
        sendUrl: null,
        micUrl: null,
        error: false,
        speaking: false,
        toggle: false,
        runtimeTranscription: '',
        sentences: [],
        lang: 'en-US',
      };
    },
    components: {
      AutoCompleteTextInput,
      AudioInput,
    },
    methods: {
      ...mapActions(['sendUserMessage', 'changeInputText', 'clearInput']),
      checkCompatibility() {
        if (!recognition) {
          this.error = 'Speech Recognition is not available on this browser. Please use Chrome or Firefox';
        }
      },
      endSpeechRecognition() {
        recognition.stop();
        this.toggle = false;
      },
      startSpeechRecognition() {
        if (!recognition) {
          this.error = 'Speech Recognition is not available on this browser. Please use Chrome or Firefox';
          return false;
        }
        this.toggle = true;
        recognition.lang = this.lang;
        recognition.interimResults = true;

        recognition.addEventListener('speechstart', event => {
          this.speaking = true;
        });

        recognition.addEventListener('speechend', event => {
          this.speaking = false;
        });

        recognition.addEventListener('result', event => {
          const text = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
          this.runtimeTranscription = text;

          console.log('its working');
          this.changeInputText(text);
        });

        recognition.addEventListener('end', () => {
          if (this.runtimeTranscription !== '') {
            this.sentences.push(this.capitalizeFirstLetter(this.runtimeTranscription));
            this.changeInputText(this.text + this.sentences.slice(-1)[0]);
          }
          this.runtimeTranscription = '';
          recognition.stop();
          if (this.toggle) {
            // keep it going.
            recognition.start();
          }
        });
        recognition.start();
      },
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
    },
    computed: {
      ...mapState(['inputType', 'input']),
      showSend: function() {
        if (!this.toggle && this.input && typeof this.input === 'string' && this.input.length > 0)
          return true;
      },

    },
    mounted: function() {
      this.checkCompatibility();
      this.sendUrl = chrome.extension.getURL('assets/send.svg');
      this.micUrl = chrome.extension.getURL('assets/microphone.svg');
      // this.clearInput();
    },
  };
</script>

<style scoped>


</style>