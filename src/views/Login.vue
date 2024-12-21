<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
        
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
        
        <button type="submit">Login</button>
      </form>
      <p v-if="error" style="color: red">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      handleLogin() {
        if (this.email === '' || this.password === '') {
          this.error = 'Email and Password are required';
          return;
        }
        // Example: Handle login logic here
        console.log('Email:', this.email, 'Password:', this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
  }
  </style>
  