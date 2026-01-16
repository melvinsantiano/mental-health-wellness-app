<template>
  <div class="breathing">
    <main class="content">
      <h2 class="title">Guide <span class="highlight">BREATHING</span></h2>
      <div class="steps">
        <div class="step">
          <h3>Step 1: Get Comfortable</h3>
          <p>Sit or lie down in a relaxed position. Close your eyes if you like.</p>
        </div>
        <div class="step">
          <h3>Step 2: Inhale (4 seconds)</h3>
          <p>Breathe in slowly through your nose for 4 seconds. Feel your lungs fill gently.</p>
        </div>
        <div class="step">
          <h3>Step 3: Hold (7 seconds)</h3>
          <p>Hold your breath for 7 seconds. Stay calm and still.</p>
        </div>
        <div class="step">
          <h3>Step 4: Exhale (8 seconds)</h3>
          <p>Breathe out slowly through your mouth for 8 seconds. Let the air flow out like a soft sigh.</p>
        </div>
        <div class="step">
          <h3>Step 5: Repeat</h3>
          <p>Do this cycle 4 times. You’ll feel calmer and more centered.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Breathing',
}
</script>

<style scoped>
.breathing {
  font-family: 'Segoe UI', sans-serif;
  background-color: #fef6f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #ff6f61;
  font-weight: bold;
}

.steps {
  max-width: 600px;
  margin-bottom: 2rem;
}

.step {
  background-color: #fff;
  border-left: 5px solid #ff6f61;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.step h3 {
  margin-bottom: 0.5rem;
}
</style>
