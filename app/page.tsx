"use client"

import { useState } from "react"

export default function Home() {
  const [prompts, setPrompts] = useState([
    "Write a LinkedIn post about AI",
    "Generate startup ideas for students",
    "iyp9yfef9fgf"])

  const [newPrompt, setNewPrompt] = useState("")

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h1 style={{ fontSize: "40px" }}>PromptShelf</h1>

      <input
        type="text"
        placeholder="Enter a new prompt"
        value={newPrompt}
        onChange={(e) => setNewPrompt(e.target.value)}
        style={{ width: "100%", padding: "10px", marginTop: "20px" }}
      />

      <button
        style={{ marginTop: "10px", padding: "10px", width: "100%" }}
        onClick={() => {
          if (newPrompt.trim() === "") return
          setPrompts([...prompts, newPrompt])
          setNewPrompt("")
        }}
      >
        Add Prompt
      </button>

      <ul style={{ marginTop: "30px" }}>
        {prompts.map((prompt, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {prompt}
          </li>
        ))}
      </ul>
    </div>
  )
}

