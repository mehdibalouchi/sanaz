<template>

    <div class="input-box-container">
        <div class="input-container">
            <AudioInput v-if="inputType === 'audio'"></AudioInput>
            <AutoCompleteTextInput v-if="inputType === 'text'"></AutoCompleteTextInput>
        </div>
        <div class="bottom-container">
            <button class="btn btn-lg btn-primary" @click="sendUserMessage">send</button>
            <!--<button class="button red-button" v-on:click.stop.prevent="toggleRecording">-->
            <!--<i class="stop icon" v-show="isRecording"></i>-->
            <!--<i class="record icon" v-show="!isRecording"></i>-->
            <!--<span v-show="!isRecording">Start recording</span>-->
            <!--<span v-show="isRecording">Stop recording</span>-->
            <!--</button>-->
        </div>

    </div>


</template>

<script>
  import AutoCompleteTextInput from './AutoCompleteTextInput';
  import AudioInput from './AudioInput';
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'InputBox',
    data: function() {
      return {
        isRecording: false,
        audioRecorder: null,
        recordingData: [],
        dataUrl: '',
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
              mimeType: 'audio/wav',
              audioBitsPerSecond: 96000,
            });
            this.audioRecorder.start();
            console.log('Media recorder started');
          }).catch((error) => {
            console.log(error);
            chrome.tabs.create({
              url: chrome.extension.getURL('welcome/welcome.html'),
              selected: true,
            });
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
      ...mapState(['inputType']),
      icon: function() {
        return null;
      },

    },
  };
</script>

<style scoped>
    .input-box-container {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
    }

</style>