<template>
    <div>
        <b-input-group>
            <div class="suggestion" :data-placeholder="suggestion">
                <b-form-input v-model="textInput" size="lg"></b-form-input>
            </div>
            <b-input-group-append>
                <button class="btn btn-lg btn-primary" @click="onClick">send</button>
            </b-input-group-append>

        </b-input-group>

    </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';
  import { changeInputText } from '../../store/modules/input/actions';

  export default {
    name: 'AutoCompleteTextInput',
    props: {
      suggestion: String,
    },
    methods: {
      ...mapActions('input', ['changeInputText']),
      ...mapActions('chat', ['sendTextUserMessage']),
      onClick: function() {
        this.sendTextUserMessage(this.textInput);
        this.changeInputText('');
      },
    },
    computed: {
      ...mapState('input', ['input']),
      textInput: {
        get() {
          return this.input;
        },
        set(value) {
          console.log('r u valled');
          this.changeInputText(value);
        },
      },
    },
  };
</script>

<style scoped>
    .suggestion {
        position: relative;
    }

    .suggestion::after {
        position: absolute;
        left: 17px;
        top: 9px;
        content: attr(data-placeholder);
        pointer-events: none;
        opacity: 0.6;
        font-size: 20px;
    }
</style>