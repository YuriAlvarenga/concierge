import React, { useState, useEffect } from "react"

export default function Home() {
  const [extractedCode, setExtractedCode] = useState("")

  useEffect(() => {
    const verifyCode = async () => {
      setExtractedCode(window.location.href)
    }

    verifyCode()
  }, []) // Dependência vazia para executar apenas uma vez após a montagem

  return (
    <>
      hellooo
      {extractedCode}
    </>
  );
}
