<template>
    <v-toolbar style="background-color: #3a8eff">
        <v-toolbar-side-icon @click="collapse"><img :src="minimize" alt="" width="20px" height="20px">
        </v-toolbar-side-icon>
        <!--<v-toolbar-title>-</v-toolbar-title>-->
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn small flat>

                <img :src="undoUrl" alt="" width="20px" height="20px">
            </v-btn>
            <v-btn small flat>

                <img :src="redoUrl" alt="" width="20px" height="20px">
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  export default {
    name: 'OptionBox',
    data() {
      return {
        undoUrl: null,
        redoUrl: null,
        showSanaz: true,
      };

    },
    mounted: function() {
      this.redoUrl = chrome.extension.getURL('assets/redo.svg');
      this.undoUrl = chrome.extension.getURL('assets/undo.svg');
      this.minimize = chrome.extension.getURL('assets/minimize.svg');
    },
    methods: {
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