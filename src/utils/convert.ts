const RU_TO_ENG: Record<string, string> = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'je',
  ё: 'jo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'j',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'kh',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '"',
  ы: 'y',
  ь: "'",
  э: 'e',
  ю: 'ju',
  я: 'ja',
};

const ENG_TO_RU: Record<string, string> = Object.entries(RU_TO_ENG)
  .sort((a, b) => b[1].length - a[1].length)
  .reduce((all, [value, key]) => ({ ...all, [key]: value }), {});
// console.log(ENG_TO_RU);

/**
 * Converts cyrillic text into latin string
 * @param s - text to parse
 * @returns transliterated string, 'щёчка' - 'schjochka'
 */
export function toLatin(s: string): string {
  const text = s.toLocaleLowerCase();
  let result = '';
  let output: string;
  for (const char of text) {
    output = RU_TO_ENG[char];
    if (output) {
      result += output;
    } else {
      result += char;
    }
  }
  return result;
}

/**
 * Converts latin transcription into cyrillic string
 * @param s - text to parse
 * @returns transliterated string, 'schjochka' - 'щёчка'
 */
export function toCyrillic(s: string): string {
  const text = s.toLocaleLowerCase();
  let result = '';
  // sch - щ, 0..2
  // jo - ё, 3..4
  // ch - ч, 5..6
  // k - к, 7..7
  // a - а, 8..8
  let i = 0;
  let input: string;
  let output: string;
  while (true) {
    if (i >= text.length) {
      break;
    }

    // 3 chars
    input = text.substring(i, i + 3);
    if (input.length === 3) {
      output = ENG_TO_RU[input];
      if (output) {
        result += output;
        i += 3;
        continue;
      }
    }

    // 2 chars
    input = text.substring(i, i + 2);
    if (input.length === 2) {
      output = ENG_TO_RU[input];
      if (output) {
        result += output;
        i += 2;
        continue;
      }
    }

    // 1 char
    input = text[i];
    output = ENG_TO_RU[input];
    if (output) {
      result += output;
      i += 1;
      continue;
    }

    // Char not found
    result += input;
    i += 1;
  }
  return result;
}
