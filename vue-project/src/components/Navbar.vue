<template>
  <header class="navbar">
    <div class="left">
      <router-link to="/" class="logo">WELLNESS BUDDY</router-link>
    </div>
    <nav class="center">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/breathing" exact-active-class="active">Breathing</router-link>
      <router-link to="/wellness" exact-active-class="active">Wellness</router-link>
      <router-link to="/ai-support" exact-active-class="active">AI Support</router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.navbar {
  font-family: 'Poppins', sans-serif;
  background-color: #6c63ff;
  color: white;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  position: relative;
}

.left {
  position: absolute;
  left: 2rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
}

.center {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}

.center a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: opacity 0.2s ease;
}

.center a:hover {
  opacity: 0.8;
}

.center a.active {
  text-decoration: underline;
}
</style>
