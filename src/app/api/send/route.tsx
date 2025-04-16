
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, subject, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'thiago201714@gmail.com',
      subject: `Nova mensagem de ${name}, assunto: ${subject}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
  }
}
