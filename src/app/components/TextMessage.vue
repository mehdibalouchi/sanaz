<template>
    <div class="message">{{text}}</div>
</template>

<script>
  export default {
    name: 'TextMessage',
    props: {
      text: String,
    },
  };
</script>

<style scoped>
    .message {
        width: 100%;
        padding-left: 20px;
        padding-top: 25px;
        font-size: large;
        /*text-align: right;*/
        min-height: 100px;
    }
</style>