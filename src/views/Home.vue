<template>
    <div>
      <h1>Be U Lite - Home</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    name: 'HomeView', // Changed the name to a multi-word format
    data() {
      return {
        users: [],
      };
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
  