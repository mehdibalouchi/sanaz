<template>
    <v-toolbar color="#3a8eff">
        <v-toolbar-side-icon @click="collapse"><img :src="minimize" alt="" width="20px" height="20px">
        </v-toolbar-side-icon>
        <!--<v-toolbar-title>-</v-toolbar-title>-->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn small icon>
                <img :src="undoUrl" alt="" width="15px" height="15px">
            </v-btn>
            <v-btn small icon>
                <img :src="redoUrl" alt="" width="15px" height="15px">
            </v-btn>
            <v-btn small @click="clearMessageHistory" icon>
                <img :src="clear" alt="" width="15px" height="15px">
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'OptionBox',
    data() {
      return {
        undoUrl: null,
        redoUrl: null,
        minimize: null,
        clear: null,
        showSanaz: true,
      };

    },
    mounted: function() {
      this.redoUrl = chrome.extension.getURL('assets/redo.svg');
      this.undoUrl = chrome.extension.getURL('assets/undo.svg');
      this.minimize = chrome.extension.getURL('assets/minimize.svg');
      this.clear = chrome.extension.getURL('assets/clear.svg');
    },
    methods: {
      ...mapActions(['clearMessageHistory']),
      collapse() {
        this.showSanaz = !this.showSanaz;
        let sanazElement = document.getElementById('sanaz-container');
        sanazElement.style.display = 'none';
        sanazElement.show = 'none';
      },
    },
  }
</script>

<style scoped>

</style>