const Groq = require('groq-sdk');

const groq = new Groq({apiKey:"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"});
async function main() {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [{
"role": "user",
"content": "create mern stack code of publish post"
}],
    "model": "llama-3.3-70b-versatile",
    "temperature": 1,
    "max_completion_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  for await (const chunk of chatCompletion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

main();
