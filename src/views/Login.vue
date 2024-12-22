<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Welcome Back</h1>
      <p class="login-subtitle">Login to access your account</p>

      <form @submit.prevent="handleLogin" class="login-form">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="form-input"
          required
        />

        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your password"
          class="form-input"
          required
        />

        <button type="submit" class="form-button">Login</button>
      </form>

      <p v-if="error" class="error-message">{{ error }}</p>
      <p class="register-link">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email === "" || this.password === "") {
        this.error = "Email and Password are required.";
        return;
      }
      // Handle login logic here
      console.log("Email:", this.email, "Password:", this.password);
    },
  },
};
</script>

<style scoped>
/* Login Container */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #740938, #af1740);
}

/* Login Card */
.login-card {
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  width: 100%;
}

/* Title and Subtitle */
.login-title {
  color: #740938;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.login-subtitle {
  color: #af1740;
  font-size: 1rem;
  margin-bottom: 20px;
}

/* Form Styles */
.form-label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  color: #740938;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cc2b52;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fdecec;
}

.form-input:focus {
  outline: none;
  border-color: #af1740;
}

/* Button Styles */
.form-button {
  background-color: #af1740;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #cc2b52;
}

/* Error Message */
.error-message {
  color: #cc2b52;
  margin-top: 10px;
  font-size: 0.9rem;
}

/* Register Link */
.register-link {
  margin-top: 15px;
  font-size: 0.9rem;
  color: #740938;
}

.register-link a {
  color: #af1740;
  font-weight: bold;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
