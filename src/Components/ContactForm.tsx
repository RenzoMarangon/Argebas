import { useId, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  // honeypot:
  "bot-field"?: string;
};

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function ContactForm() {
  const formId = useId();
  const [serverMsg, setServerMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      "bot-field": "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setServerMsg(null);

    // Si el bot completó el honeypot, cortamos silenciosamente.
    if (data["bot-field"]) return;

    const payload: Record<string, string> = {
      "form-name": "contact",
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload),
    });

    if (!res.ok) {
      setServerMsg(
        "No se pudo enviar el email. Pruebe de nuevo en unos minutos.",
      );
      return;
    }

    setServerMsg("Email enviado correctamente.");
    reset();
  };

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const subjectId = `${formId}-subject`;
  const messageId = `${formId}-message`;
  const botId = `${formId}-bot-field`;

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full">
      {/* Netlify Forms requires this hidden field */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot (oculto). Importante: que exista en el DOM. */}
      <div style={{ display: "none" }}>
        <label htmlFor={botId}>
          Don’t fill this out if you’re human:
          <input id={botId} {...register("bot-field")} />
        </label>
      </div>

      <div className="w-full  mb-4">
        <div className="border-b flex gap-2">
          <label className="text-gray-700" htmlFor={nameId}>
            Nombre
          </label>
          <input
            className="w-100 outline-none focus:outline-none focus:border-transparent"
            id={nameId}
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              required: "Nombre requerido",
              minLength: {
                value: 2,
                message: "El nombre debe contener al menos 2 caracteres",
              },
            })}
          />
        </div>
        {errors.name && (
          <p
            role="alert"
            className="p-1 inline-block text-sm rounded bg-red-500 text-white mt-2">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="w-full  mb-4">
        <div className="border-b flex gap-2">
          <label className="text-gray-700" htmlFor={emailId}>
            Email
          </label>
          <input
            className="w-100 outline-none focus:outline-none focus:border-transparent"
            id={emailId}
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El email no es válido",
              },
            })}
          />
        </div>
        {errors.email && (
          <p
            role="alert"
            className="p-1 inline-block text-sm rounded bg-red-500 text-white mt-2">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="w-full  mb-4">
        <div className="border-b flex gap-2">
          <label className="text-gray-700" htmlFor={subjectId}>
            Asunto
          </label>
          <input
            className="w-100 outline-none focus:outline-none focus:border-transparent"
            id={subjectId}
            aria-invalid={errors.subject ? "true" : "false"}
            {...register("subject", {
              required: "Asunto requerido",
              maxLength: { value: 150, message: "Máximo 150 caracteres" },
            })}
          />
        </div>
        {errors.subject && (
          <p
            role="alert"
            className="p-1 inline-block text-sm rounded bg-red-500 text-white mt-2">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="w-full  mb-4">
        <div className="border-b ">
          <label className="text-gray-700" htmlFor={messageId}>
            Mensaje
          </label>
          <textarea
            className="w-full outline-none focus:outline-none focus:border-transparent resize-none mt-2 pl-2"
            id={messageId}
            rows={5}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "Mensaje requerido",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
              maxLength: { value: 2000, message: "Máximo 2000 caracteres" },
            })}
          />
        </div>
        {errors.message && (
          <p
            role="alert"
            className="p-1 inline-block text-sm rounded bg-red-500 text-white mt-2">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 w-30 py-3 font-semibold bg-pink-500 text-white rounded">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>

      {serverMsg && <p role="status">{serverMsg}</p>}
    </form>
  );
}
