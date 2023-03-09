<template>
  <div>
    <h1>Leave feedback</h1>
    <form @submit.prevent="sendForm">
      <h3>Leave feedback for the calculator</h3>
      <div class="former">
        <!-- Name -->
        <div
          class="form-group"
          :class="{ error: v$.feedback.name.$errors.length }"
        >
          <label for="">Name</label>
          <input
            class="form-control"
            placeholder="Enter your name"
            type="text"
            v-model="v$.feedback.name.$model"
          />

          <!-- name error message -->
          <div class="input-container">
            <div
              class="input-errors"
              v-for="(error, index) of v$.feedback.name.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>

        <!-- Email -->
        <div
          class="form-group"
          :class="{ error: v$.feedback.email.$errors.length }"
        >
          <label for="">Email</label>
          <input
            class="form-control"
            placeholder="Enter your email"
            type="email"
            v-model="v$.feedback.email.$model"
          />

          <!-- email error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.feedback.email.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
        <!-- feedback -->
        <div
          class="form-group"
          :class="{ error: v$.feedback.message.$errors.length }"
        >
          <label for="">Message</label>
          <input
            class="form-control"
            placeholder="Enter your feedback"
            type="text"
            v-model="v$.feedback.message.$model"
          />
          <!-- feedback error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.feedback.message.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          :disabled="v$.feedback.$invalid"
          class="submit-button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import store from "../store";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export default {
  name: "SimpleForm",

  setup() {
    return { v$: useVuelidate() };
  },
  
  data() {
    return {
      feedback: {
        name: store.state.name,
        email: store.state.email,
        message: "",
      },
    };
  },

  validations() {
    return {
      feedback: {
        name: {
          required,
          minLength: minLength(3),
          name_validation: {
            $validator: validName,
            $message:
              "Please enter a valid name. No special characters, numbers or spaces at the start or the end of the name are allowed.",
          },
        },
        email: {
          required,
          email,
        },
        message: {
          required,
          minLength: minLength(30),
        },
      },
    };
  },

  methods: {
    sendForm() {
      store.commit("setName", this.feedback.name);
      store.commit("setEmail", this.feedback.email);

      console.log(store.state.name + ", store.name");
      console.log(store.state.email + ", store.email");

      axios
        .post(
          "http://localhost:3000/feedback",
          console.log(this.feedback),
          this.feedback
        )
        .then(function (response) {
          alert("Form successfully submitted, Status code: " + response.status);
          console.log("response");
          console.log(response);
        })
        .catch(function (err) {
          alert(err);
          console.log(err);
        });
    },
  },
};
</script>

<style>

.input-errors {
  color: red;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}
</style>
