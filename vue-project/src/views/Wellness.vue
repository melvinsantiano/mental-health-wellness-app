<template>
  <div class="wellness">
    <main class="content">
      <h2 class="title">Wellness Tips</h2>
      <p class="intro">
        Simple practices to help you feel better, stay grounded, and support your mental health.
      </p>

      <ul class="tips-list">
        <li>
          <strong>🌿 Practice Mindful Breathing:</strong> Take a few minutes each day to focus on your breath.
        </li>
        <li>
          <strong>📵 Take Digital Breaks:</strong> Step away from screens to recharge your mind.
        </li>
        <li>
          <strong>💬 Talk to Someone:</strong> Share your thoughts with a trusted friend or counselor.
        </li>
        <li>
          <strong>🧘 Move Your Body:</strong> Gentle exercise like stretching or walking can boost your mood.
        </li>
        <li>
          <strong>📖 Journal Your Feelings:</strong> Writing helps you process emotions and gain clarity.
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Wellness',
}
</script>

<style scoped>
.wellness {
  font-family: 'Segoe UI', sans-serif;
  background-color: #fdfdfd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.tips-list {
  list-style: none;
  padding: 0;
}

.tips-list li {
  background-color: #f0f9f9;
  border-left: 5px solid #00b4d8;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
</style>
