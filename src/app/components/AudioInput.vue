<template>
    <audio ref="player" controls>
        <source :src="input">
        Your browser does not support the audio element.
    </audio>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'AudioInput',
    computed: {
      ...mapState(['input'])
    },
  };
</script>

<style scoped>

</style>