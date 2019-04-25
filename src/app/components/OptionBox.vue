<template>
    <div class="option-box-toolbar">
        <div class="option-box-group">
            <button>Undo</button>
        </div>
        <div class="option-box-group">
            <button>Redo</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'OptionBox',
  };
</script>

<style scoped>
    .option-box-toolbar {
        display: flex !important;
        flex-direction: row !important;
    }
</style>