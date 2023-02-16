<template>
  <div>
    <h1>Leave feedback</h1>
    <form @submit.prevent="sendForm">
      <h3>Leave feedback for the calculator</h3>
        <div><BaseInput v-model="feedback.name" label="Name" type="text" /></div>
        <div><BaseInput v-model="feedback.email" label="Email" type="email"/></div>
        <div><BaseInput v-model="feedback.message" label="Message" type="text" /></div>
      
      

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";
import axios from 'axios';
//import { useField, useForm } from "vee-validate";
export default {
    
  name: "SimpleForm",
  components: {
    BaseInput,
  },

  data() {

    return {
      feedback: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
    methods: {
        sendForm() {
            axios.post('https://my-json-server.typicode.com/JonasKos/innlevering2/feedback', this.feedback)
            .then(function(response){
                alert('Success: ' + response);
                console.log(response);
            })
            .catch(function(err){
                alert('Error: ' + err);
                console.log('error', err);
            });
        },

    },
};
</script>
