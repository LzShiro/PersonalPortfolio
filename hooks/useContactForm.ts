import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const sendMessage = async (payload: {
    name: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    message: FormDataEntryValue | null;
  }) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return { status, sendMessage };
}
