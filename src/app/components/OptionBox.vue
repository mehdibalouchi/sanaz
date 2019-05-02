<!--<template>-->
<!---->
<!--<div class="option-box-toolbar">-->
<!--<div class="option-box-group">-->
<!--<button>Undo</button>-->
<!--</div>-->
<!--<div class="option-box-group">-->
<!--<button>Redo</button>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<template>
    <v-toolbar>
        <v-toolbar-title>Sanaz</v-toolbar-title>
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
      };

    },
    mounted: function() {
      this.redoUrl = chrome.extension.getURL('assets/redo.svg');
      this.undoUrl = chrome.extension.getURL('assets/undo.svg');
    },
  }
</script>

<style scoped>
    .option-box-toolbar {
        display: flex !important;
        flex-direction: row !important;
    }
</style>