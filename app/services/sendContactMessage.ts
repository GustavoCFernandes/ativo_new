export async function sendContactMessage(form: HTMLFormElement): Promise<'ok' | string> {
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xeokarwb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) return 'ok';

      const response = await res.json();
      return response?.error || 'Erro ao enviar. Verifique os campos.';
    } catch {
      return 'Erro ao enviar. Tente novamente.';
    }
  }
