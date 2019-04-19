<template>
    <PopupContainer></PopupContainer>
</template>

<script>
  import PopupContainer from './components/PopupContainer';

  export default {
    components: {
      PopupContainer,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
    p {
        font-size: 20px;
    }

    body {
        width: 450px;
        height: 100%;
    }
</style>
