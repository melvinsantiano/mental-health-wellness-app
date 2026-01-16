import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
app.use(cors())

const HF_API_KEY = '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' // paste your token here

app.get('/ai', async (req, res) => {
  const query = req.query.query
  try {
    const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-3B', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: query }),
    })

    const data = await response.json()
    console.log('Hugging Face raw response:', data)

    const reply =
      data?.generated_text ||
      data?.[0]?.generated_text ||
      data?.error ||
      'No valid response from Hugging Face'

    res.json({ answer: reply })
  } catch (err) {
    console.error('Server error:', err)
    res.status(500).json({ answer: 'Error connecting to Hugging Face' })
  }
})

app.listen(3000, () => console.log('AI backend running on http://localhost:3000'))
