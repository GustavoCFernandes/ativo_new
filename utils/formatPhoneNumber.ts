export function formatPhoneNumber(number: string) {
    const cleaned = number.replace(/\D/g, '');

    // 🇧🇷 Brasil
    if (cleaned.startsWith('55') && cleaned.length === 13) {
      const ddd = cleaned.slice(2, 4);
      const part1 = cleaned.slice(4, 9);
      const part2 = cleaned.slice(9);
      return `(${ddd}) ${part1}-${part2}`;
    }
    if (cleaned.length === 11 && cleaned[2] === '9') {
      const ddd = cleaned.slice(0, 2);
      const part1 = cleaned.slice(2, 7);
      const part2 = cleaned.slice(7);
      return `(${ddd}) ${part1}-${part2}`;
    }

    // 🇵🇹 Portugal
    if (cleaned.startsWith('351') && cleaned.length === 12) {
      const p1 = cleaned.slice(3, 6);
      const p2 = cleaned.slice(6, 9);
      const p3 = cleaned.slice(9);
      return `+351 ${p1} ${p2} ${p3}`;
    }
    if (cleaned.length === 9 && cleaned.startsWith('9')) {
      return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    }

    // 🇮🇹 Itália
    if (cleaned.startsWith('39') && cleaned.length >= 11 && cleaned.length <= 13) {
      const national = cleaned.slice(2);
      if (national.length === 10) {
        return `+39 ${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
      } else {
        return `+39 ${national.slice(0, 3)} ${national.slice(3, 7)} ${national.slice(7)}`;
      }
    }

    // 🇩🇪 Alemanha (10 a 13 dígitos após o 49)
    if (cleaned.startsWith('49') && cleaned.length >= 11 && cleaned.length <= 14) {
      const national = cleaned.slice(2);
      return `+49 ${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
    }

    // 🇪🇸 Espanha (9 dígitos após +34)
    if (cleaned.startsWith('34') && cleaned.length === 11) {
      const national = cleaned.slice(2);
      return `+34 ${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
    }

    // 🇺🇸 EUA (formato: +1 NNN-NNN-NNNN)
    if (cleaned.startsWith('1') && cleaned.length === 11) {
      const national = cleaned.slice(1);
      return `+1 (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
    }

    return 'Número inválido ou país não suportado';
  }
