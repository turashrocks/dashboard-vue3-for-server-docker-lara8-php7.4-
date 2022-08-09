<template>
  <form class="form-signin w-100 m-auto" @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal text-center">Login</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="email" placeholder="name@example.com" required autofocus
           v-model="email">
      <label for="inputEmail">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="password" placeholder="Password" required autofocus
           v-model="password">
      <label for="inputPassword">Password</label>
    </div>

    <div class="mb-3">
        <!-- <input type="checkbox" value="remember-me"> Remember me -->
        <span> Dont have an account? <b><router-link to="/register" class="p-2 text-black">Register</router-link></b></span>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>

</template>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }

  .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }

  .b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
  }

  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

  .nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
  }

  .nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
  </style>


<script lang="ts">
import { defineComponent } from "vue";
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const submit = async () => {
      await axios.post('login', {
        email: email.value,
        password: password.value,
        scope: 'admin'
      });

      await router.push('/dashboard');
    }

    return {
      email,
      password,
      submit
    }
  }
});
</script>