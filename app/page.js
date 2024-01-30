"use client";

import Output from "@/components/Output";
import CodeInput from "@/components/codeInput";
import { useState } from "react";

export default function Home() {
  const [rawCode, setRawCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const handleConvertion = (e) => {
    e.preventDefault();

    setConvertedCode(JSON.parse(rawCode));
  };
  return (
    <>
      <form onSubmit={handleConvertion}>
        <CodeInput rawCode={rawCode} setRawCode={setRawCode} />
        <button type="submit">Convert</button>
      </form>

      <Output extractedObject={convertedCode} />
    </>
  );
}
