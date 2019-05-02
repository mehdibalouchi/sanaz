<template>

    <v-layout justify-space-around row wrap>
        <v-flex xs9 pl-3>
            <AudioInput v-if="inputType === 'audio'"></AudioInput>
            <AutoCompleteTextInput v-if="inputType === 'text'"></AutoCompleteTextInput>
        </v-flex>
        <v-flex xs2>
            <v-btn fab dark color="indigo" v-if="showSend" @click="sendUserMessage">
                <img :src="sendUrl" alt="" width="20px" height="20px">
            </v-btn>
            <v-btn fab dark :color="isRecording?'red':'indigo'" v-if="!showSend"
                   v-on:click.stop.prevent="toggleRecording">
                <img :src="micUrl" alt="" width="20px" height="20px">
            </v-btn>
        </v-flex>

    </v-layout>


</template>

<script>
  import AutoCompleteTextInput from './AutoCompleteTextInput.vue?shadow';
  import AudioInput from './AudioInput.vue?shadow';
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'InputBox',
    data: function() {
      return {
        isRecording: false,
        audioRecorder: null,
        recordingData: [],
        dataUrl: '',
        sendUrl: null,
        micUrl: null,
      };
    },
    components: {
      AutoCompleteTextInput,
      AudioInput,
    },
    methods: {
      ...mapActions(['sendUserMessage', 'startRecording', 'stopRecording', 'sendAudioUserMessage']),
      toggleRecording: function() {
        this.isRecording = !this.isRecording;
        if (this.isRecording) {
          // navigator.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia;

          navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
          }).then((stream) => {
            // this.stream = stream;
            this.audioRecorder = new MediaRecorder(stream, {
              mimeType: 'audio/webm',
              audioBitsPerSecond: 96000,
            });
            this.audioRecorder.start();
            console.log('Media recorder started');
          }).catch((error) => {
            console.log(error);
            this.isRecording = !this.isRecording;
          });
        }
        else {
          this.audioRecorder.stop();
          this.audioRecorder.ondataavailable = function(event) {
            this.recordingData.push(event.data);
          };
          this.audioRecorder.onstop = function(event) {
            console.log('Media recorder stopped');
            var blob = new Blob(that.recordingData, { type: 'audio/ogg' });
            this.dataUrl = window.URL.createObjectURL(blob);
          };
        }
      },
    },
    computed: {
      ...mapState(['inputType', 'input']),
      showSend: function() {
        if (this.input && typeof this.input === 'string' && this.input.length > 0)
          return true;
      },

    },
    mounted: function() {
      this.sendUrl = chrome.extension.getURL('assets/send.svg');
      this.micUrl = chrome.extension.getURL('assets/microphone.svg');
    },
  };
</script>

<style scoped>


</style>