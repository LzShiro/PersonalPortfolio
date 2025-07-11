"use client";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { status, sendMessage } = useContactForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await sendMessage({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
    if (status === "success") e.currentTarget.reset();
  };

  return (
    <section className="max-w-xl mx-auto py-20 px-4" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full border rounded px-4 py-2 bg-background"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="w-full border rounded px-4 py-2 bg-background"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          className="w-full border rounded px-4 py-2 h-32 bg-background"
        />

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar"}
        </Button>

        {status === "success" && (
          <p className="mt-2 text-sm text-green-600 bg-green-100 rounded px-4 py-2">
            ✉️ Mensaje enviado correctamente.
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600 bg-red-100 rounded px-4 py-2">
            ❌ Hubo un error al enviar tu mensaje. Intenta de nuevo.
          </p>
        )}
      </form>
    </section>
  );
}
