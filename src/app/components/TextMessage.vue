<template>
    <p class="message">{{text}}</p>
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
        padding: 15px;
        /*padding-top: 25px;*/
        /*font-size: large;*/
        min-height: 100px;
        word-break: break-all;
    }
</style>