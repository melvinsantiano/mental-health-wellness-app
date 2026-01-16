<template>
  <div class="home">
    <main class="content">
      <section class="message-box">
        <h2>Importance of <span class="highlight">SEEKING HELP</span></h2>
        <p>
          Seeking help is a sign of <strong>strength</strong>, not weakness.<br />
          Early support can lead to better recovery outcomes.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.home {
  font-family: 'Poppins', sans-serif;
  background-color: #fef6f0; /* same calming tone as Breathing.vue */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.message-box {
  max-width: 700px;
  text-align: center;
  background-color: #fff;
  border-left: 6px solid #ff6f61;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.message-box h2 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #333;
}

.highlight {
  color: #ff6f61;
  font-weight: 600;
}

.message-box p {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #555;
}
</style>
