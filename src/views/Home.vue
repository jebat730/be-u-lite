<template>
  <div class="landing-page">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="logo">Be U Lite</div>
      <ul class="nav-links">
        <li><a href="#products-services">Products & Services</a></li>
        <li><a href="#about">About Be U Lite</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li>
          <button class="nav-button" @click="navigateToLogin">Register / Login</button>
        </li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
      <div class="hero-content">
        <h1>Welcome to Be U Lite</h1>
        <p>Your ultimate platform for personalized experiences.</p>
        <button class="cta-button">Get Started</button>
      </div>
    </header>

    <!-- Products & Services Section -->
    <section id="products-services" class="section">
      <h2>Our Products & Services</h2>
      <p>Discover the amazing features and services that we offer.</p>
      <div class="cards">
        <div class="card">Product 1</div>
        <div class="card">Product 2</div>
        <div class="card">Service 1</div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <h2>About Be U Lite</h2>
      <p>
        Be U Lite is your one-stop solution for creating unique experiences tailored just for you. Our goal is to make your life easier with technology.
      </p>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq">
        <h4>What is Be U Lite?</h4>
        <p>Be U Lite is a platform designed to simplify your life with smart and innovative solutions.</p>

        <h4>How can I register?</h4>
        <p>Click the "Register / Login" button in the navigation bar to get started.</p>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'HomeView',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push('/login');
    },
  },
  async created() {
    try {
      const response = await api.get('/users');
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
};
</script>

<style scoped>
/* General Styles */
body {
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
  color: #333;
  background-color: #DE7C7D; /* Light background tone */
}

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #740938; /* Darkest tone */
  padding: 10px 20px;
  color: white;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navbar .nav-links li {
  display: inline-block;
}

.navbar .nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.navbar .nav-links a:hover {
  text-decoration: underline;
}

.navbar .nav-button {
  background-color: #AF1740; /* Medium red tone */
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.navbar .nav-button:hover {
  background-color: #CC2B52; /* Lighter red */
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #740938, #AF1740);
  color: white;
  padding: 50px 20px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #AF1740;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #CC2B52;
}

/* Section Styles */
.section {
  padding: 50px 20px;
  text-align: center;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #AF1740;
}

.section p {
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  border: 1px solid #DE7C7D;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 200px;
  text-align: center;
}

.faq h4 {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #AF1740;
}

.faq p {
  font-size: 1rem;
  margin: 5px 0 20px;
}
</style>
