// src/api/sendNotification.ts
export async function sendNotificationEmail(form: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-notification`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        platform: "Airbridge Devs Website",
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        subject: form.subject,
        message: form.message,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to send notification email");
  }
  return response.json();
}
