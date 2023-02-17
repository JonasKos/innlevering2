<template>
  <div>
    <h1>Leave feedback</h1>
    <form @submit.prevent="sendForm">
      <h3>Leave feedback for the calculator</h3>
      <div><BaseInput v-model="feedback.name" label="Name" type="text" :error="nameError"/></div>
      <div>
        <BaseInput v-model="feedback.email" label="Email" type="text" :error="emailError" />
      </div>
      <div>
        <BaseInput v-model="feedback.message" label="Message" type="text" :error="messageError" />
      </div>

      <button type="submit">Submit</button>
    </form>
    <div>{{  $store.state.name }}</div>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";
import axios from "axios";
import { useField, useForm } from "vee-validate";
export default {
  name: "SimpleForm",
  components: {
    BaseInput,
  },

  setup() {
    const validations = {
      
      name: (value) => {
        const requiredMessage = "This field is required";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;
        return true;
      },
      email: (value) => {
        if (!value) return "This field is required";
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(value).toLowerCase())) {
          return "Please enter a valid email address";
        }
        return true;
      },
      message: (value)=>{
        const requiredMessage = "This field is required";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;
        return true;
      }
    };
    useForm({
      validationSchema: validations,
    });

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: name, errorMessage: nameError } = useField("name");
    const { value: message, errorMessage: messageError } = useField("message");


    return {
      feedback: {
        name,
        nameError,
        email,
        emailError,
        message,
        messageError
      },
    };
  },
  
  methods: {
    sendForm() {
      var responseObject = {
        name : this.feedback.name,
        email : this.feedback.email,
        message: this.feedback.message
      }
      console.log(this.feedback)
      axios
        .post(
          "https://my-json-server.typicode.com/JonasKos/innlevering2/feedback",
          responseObject
        )
        .then(function (response) {
          alert("Success: " + response);
          console.log(response);
        })
        .catch(function (err) {
          alert("Error: " + err);
          console.log("error", err);
        });
    },
  },
};
</script>
