<template>
    <AutoCompleteTextInput :suggestion="getSuggestedInput"></AutoCompleteTextInput>
</template>

<script>
  import AutoCompleteTextInput from './AutoCompleteTextInput';
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'InputBox',
    components: {
      AutoCompleteTextInput,
    },
    computed:{
      ...mapGetters(['getSuggestedInput'])
    },
  };
</script>

<style scoped>
    .container {
        margin: 3%;
    }
</style>