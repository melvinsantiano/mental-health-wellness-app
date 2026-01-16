<template>
  <div class="ai-support">
    <main class="content">
      <section class="messages">
        <h2>You are not alone. Help is available.</h2>
        <p>Let’s break the stigma and support each other.</p>
      </section>

      <section class="search-box">
        <input v-model="query" type="text" placeholder="Search your concern here..." />
        <button @click="handleSearch"><span class="icon">🔍</span></button>
      </section>

      <section v-if="response" class="response">
        <h3>AI Response:</h3>
        <p>{{ response }}</p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AiSupport',
  data() {
    return {
      query: '',
      response: '',
    }
  },
  methods: {
    async handleSearch() {
      if (!this.query) return
      try {
        const res = await fetch(`http://localhost:3000/ai?query=${encodeURIComponent(this.query)}`)
        const data = await res.json()
        this.response = data.answer
      } catch (err) {
        this.response = 'Sorry, something went wrong.'
      }
    },
  },
}
</script>

<style scoped>
.ai-support {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.messages {
  text-align: center;
  margin-bottom: 2rem;
}

.messages h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.messages p {
  font-size: 1.3rem;
  color: #666;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
}

.search-box input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 1.1rem;
  padding: 0.5rem;
}

.search-box button {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.response {
  margin-top: 2rem;
  background-color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  max-width: 500px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: left;
}

.response h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #333;
}

.response p {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
}
</style>
