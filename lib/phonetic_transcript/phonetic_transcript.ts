export type PhoneticTranscript = {
  main: string;
  mainCharacter: string;
  medial?: string;
  medialCharacter?: string;
  initial?: string;
  initialCharacter?: string;
  final?: string;
  finalCharacter?: string;
  toneMark: number;
};

export type Constraint = {
  phoneme: string;
  character: string;
  initial?: Array<string>;
  notInitial?: Array<string>;
  medial?: Array<string>;
  notMedial?: Array<string>;
  main?: Array<string>;
  notMain?: Array<string>;
  final?: Array<string>;
  notFinal?: Array<string>;
};

// NOTE: Check the character orders, because "t" might be matched before "th"
const initialList = [
  { phoneme: 'b-', character: 'b' },
  { phoneme: 'm-', character: 'm' },
  { phoneme: 'f-', character: 'ph' },

  { phoneme: 'v-', character: 'v' },

  { phoneme: 'tʼ-', character: 'th' },

  { phoneme: 'ʈ-', character: 'tr' },

  { phoneme: 't-', character: 't' },

  { phoneme: 'd-', character: 'đ' },

  { phoneme: 'ɲ-', character: 'nh' },

  { phoneme: 'ŋ-', character: 'ngh', main: ['-i-', '-e-', '-ɛ-', '-ie-'] },
  { phoneme: 'ŋ-', character: 'ng' },

  { phoneme: 'n-', character: 'n' },

  { phoneme: 'z-', character: 'd' },
  { phoneme: 'z-', character: 'gi' },

  { phoneme: 'ʐ-', character: 'r' },

  { phoneme: 's-', character: 'x' },
  { phoneme: 'ʂ-', character: 's' },

  { phoneme: 'l-', character: 'l' },

  { phoneme: 'χ-', character: 'kh' },

  { phoneme: 'c-', character: 'ch' },

  { phoneme: 'k-', character: 'k', main: ['-i-', '-e-', '-ɛ-', '-ie-'] },
  { phoneme: 'k-', character: 'q', medial: ['-u-'] },
  { phoneme: 'k-', character: 'c' },

  { phoneme: 'ɣ-', character: 'gh', main: ['-i-', '-e-', '-ɛ-', '-ie-'] },
  { phoneme: 'ɣ-', character: 'g' },

  { phoneme: 'h-', character: 'h' },
] satisfies Constraint[];

const medialList = [
  {
    phoneme: '-u-',
    character: 'u',
    initial: ['k-'],
    main: ['-i-', '-e-', '-ɤ-', '-ɤ-', '-ie-'],
  },
  {
    phoneme: '-u-',
    character: 'o',
  },
] satisfies Constraint[];

const mainList = [
  {
    phoneme: '-i-',
    character: 'y',
    medial: ['-u-', 'zero'],
    initial: ['zero'],
    final: ['zero'],
  },
  { phoneme: '-i-', character: 'i' },

  { phoneme: '-e-', character: 'ê' },

  { phoneme: '-ɛ-', character: 'e' },

  { phoneme: '-ɯ-', character: 'ư' },

  { phoneme: '-ɤ-', character: 'ơ' },

  { phoneme: '-a-', character: 'a' },

  { phoneme: '-u-', character: 'u' },

  { phoneme: '-o-', character: 'ô' },
  { phoneme: '-o-', character: 'ôô' },

  { phoneme: '-ɔ-', character: 'o' },
  { phoneme: '-ɔ-', character: 'oo' },

  { phoneme: '-ɤ-', character: 'â' },

  { phoneme: '-ɛ-', character: 'a' },

  { phoneme: '-ă-', character: 'a', final: ['-w', '-j'] },
  { phoneme: '-ă-', character: 'ă' },

  { phoneme: '-ɔ-', character: 'o', final: ['-ŋ', '-k'] },

  { phoneme: '-ie-', character: 'iê', notFinal: ['zero'], medial: ['zero'] },
  {
    phoneme: '-ie-',
    character: 'yê',
    notFinal: ['zero'],
    medial: ['-u-'],
    initial: ['zero'],
  },
  { phoneme: '-ie-', character: 'ia', final: ['zero'], medial: ['zero'] },
  { phoneme: '-ie-', character: 'ya', final: ['zero'], medial: ['-u-'] },

  { phoneme: '-ɯɤ-', character: 'ươ', notFinal: ['zero'] },
  { phoneme: '-ɯɤ-', character: 'ưa', final: ['zero'] },

  { phoneme: '-uo-', character: 'uô', notFinal: ['zero'] },
  { phoneme: '-uo-', character: 'ua', final: ['zero'] },
] satisfies Constraint[];

const finalList = [
  { phoneme: '-m', character: 'm' },

  { phoneme: '-n', character: 'n' },

  { phoneme: '-p', character: 'p' },

  { phoneme: '-t', character: 't' },

  { phoneme: '-ŋ', character: 'nh', main: ['-i-', '-e-', '-ɛ-'] },
  { phoneme: '-ŋ', character: 'ng' },

  { phoneme: '-k', character: 'ch', main: ['-i-', '-e-', '-ɛ-'] },
  { phoneme: '-k', character: 'c' },

  { phoneme: '-w', character: 'o', main: ['-a-', '-ɛ-'] },
  { phoneme: '-w', character: 'u' },

  { phoneme: '-j', character: 'y', main: ['-ă-', '-ɤ-'] },
  { phoneme: '-j', character: 'i' },
] satisfies Constraint[];

const toneMarkList = [
  { character: 'a', originalCharacter: 'a', toneMark: 1 },
  { character: 'à', originalCharacter: 'a', toneMark: 2 },
  { character: 'ã', originalCharacter: 'a', toneMark: 3 },
  { character: 'ả', originalCharacter: 'a', toneMark: 4 },
  { character: 'á', originalCharacter: 'a', toneMark: 5 },
  { character: 'ạ', originalCharacter: 'a', toneMark: 6 },

  { character: 'ă', originalCharacter: 'ă', toneMark: 1 },
  { character: 'ằ', originalCharacter: 'ă', toneMark: 2 },
  { character: 'ẵ', originalCharacter: 'ă', toneMark: 3 },
  { character: 'ẳ', originalCharacter: 'ă', toneMark: 4 },
  { character: 'ắ', originalCharacter: 'ă', toneMark: 5 },
  { character: 'ặ', originalCharacter: 'ă', toneMark: 6 },

  { character: 'â', originalCharacter: 'â', toneMark: 1 },
  { character: 'ầ', originalCharacter: 'â', toneMark: 2 },
  { character: 'ẫ', originalCharacter: 'â', toneMark: 3 },
  { character: 'ẩ', originalCharacter: 'â', toneMark: 4 },
  { character: 'ấ', originalCharacter: 'â', toneMark: 5 },
  { character: 'ậ', originalCharacter: 'â', toneMark: 6 },

  { character: 'e', originalCharacter: 'e', toneMark: 1 },
  { character: 'è', originalCharacter: 'e', toneMark: 2 },
  { character: 'ẽ', originalCharacter: 'e', toneMark: 3 },
  { character: 'ẻ', originalCharacter: 'e', toneMark: 4 },
  { character: 'é', originalCharacter: 'e', toneMark: 5 },
  { character: 'ẹ', originalCharacter: 'e', toneMark: 6 },

  { character: 'ê', originalCharacter: 'ê', toneMark: 1 },
  { character: 'ề', originalCharacter: 'ê', toneMark: 2 },
  { character: 'ễ', originalCharacter: 'ê', toneMark: 3 },
  { character: 'ể', originalCharacter: 'ê', toneMark: 4 },
  { character: 'ế', originalCharacter: 'ê', toneMark: 5 },
  { character: 'ệ', originalCharacter: 'ê', toneMark: 6 },

  { character: 'i', originalCharacter: 'i', toneMark: 1 },
  { character: 'ì', originalCharacter: 'i', toneMark: 2 },
  { character: 'ĩ', originalCharacter: 'i', toneMark: 3 },
  { character: 'ỉ', originalCharacter: 'i', toneMark: 4 },
  { character: 'í', originalCharacter: 'i', toneMark: 5 },
  { character: 'ị', originalCharacter: 'i', toneMark: 6 },

  { character: 'o', originalCharacter: 'o', toneMark: 1 },
  { character: 'ò', originalCharacter: 'o', toneMark: 2 },
  { character: 'õ', originalCharacter: 'o', toneMark: 3 },
  { character: 'ỏ', originalCharacter: 'o', toneMark: 4 },
  { character: 'ó', originalCharacter: 'o', toneMark: 5 },
  { character: 'ọ', originalCharacter: 'o', toneMark: 6 },

  { character: 'ô', originalCharacter: 'ô', toneMark: 1 },
  { character: 'ồ', originalCharacter: 'ô', toneMark: 2 },
  { character: 'ỗ', originalCharacter: 'ô', toneMark: 3 },
  { character: 'ổ', originalCharacter: 'ô', toneMark: 4 },
  { character: 'ố', originalCharacter: 'ô', toneMark: 5 },
  { character: 'ộ', originalCharacter: 'ô', toneMark: 6 },

  { character: 'ơ', originalCharacter: 'ơ', toneMark: 1 },
  { character: 'ờ', originalCharacter: 'ơ', toneMark: 2 },
  { character: 'ỡ', originalCharacter: 'ơ', toneMark: 3 },
  { character: 'ở', originalCharacter: 'ơ', toneMark: 4 },
  { character: 'ớ', originalCharacter: 'ơ', toneMark: 5 },
  { character: 'ợ', originalCharacter: 'ơ', toneMark: 6 },

  { character: 'u', originalCharacter: 'u', toneMark: 1 },
  { character: 'ù', originalCharacter: 'u', toneMark: 2 },
  { character: 'ũ', originalCharacter: 'u', toneMark: 3 },
  { character: 'ủ', originalCharacter: 'u', toneMark: 4 },
  { character: 'ú', originalCharacter: 'u', toneMark: 5 },
  { character: 'ụ', originalCharacter: 'u', toneMark: 6 },

  { character: 'ư', originalCharacter: 'ư', toneMark: 1 },
  { character: 'ừ', originalCharacter: 'ư', toneMark: 2 },
  { character: 'ữ', originalCharacter: 'ư', toneMark: 3 },
  { character: 'ử', originalCharacter: 'ư', toneMark: 4 },
  { character: 'ứ', originalCharacter: 'ư', toneMark: 5 },
  { character: 'ự', originalCharacter: 'ư', toneMark: 6 },

  { character: 'y', originalCharacter: 'y', toneMark: 1 },
  { character: 'ỳ', originalCharacter: 'y', toneMark: 2 },
  { character: 'ỹ', originalCharacter: 'y', toneMark: 3 },
  { character: 'ỷ', originalCharacter: 'y', toneMark: 4 },
  { character: 'ý', originalCharacter: 'y', toneMark: 5 },
  { character: 'ỵ', originalCharacter: 'y', toneMark: 6 },
];

const transcriptToString = (transcript: PhoneticTranscript): string => {
  if (!transcript.main || !transcript.toneMark) {
    throw new Error('Invalid phonetic transcript');
  }

  return (
    (transcript.initial?.replaceAll('-', '') || '') +
    (transcript?.medial?.replaceAll('-', '') || '') +
    transcript.main.replaceAll('-', '') +
    (transcript.final?.replaceAll('-', '') || '') +
    transcript.toneMark.toString()
  );
};

const buildPhoneticTranscript = (word: string): PhoneticTranscript => {
  word = word.toLowerCase();

  let transcript = {
    toneMark: 1,
  } as PhoneticTranscript;

  // NOTE: Check tone mark
  toneMarkList.forEach((toneMark) => {
    if (toneMark.toneMark !== 1 && word.includes(toneMark.character)) {
      transcript.toneMark = toneMark.toneMark;

      word = word.replace(toneMark.character, toneMark.originalCharacter);
    }
  });

  // NOTE: Check initial
  initialList.forEach((initial) => {
    if (
      word.startsWith(initial.character) &&
      word.length - initial.character.length > 0
    ) {
      transcript.initial = initial.phoneme;
      transcript.initialCharacter = initial.character;

      word = word.slice(initial.character.length);
    }
  });

  // NOTE: Check final
  finalList.forEach((final) => {
    if (
      word.endsWith(final.character) &&
      word.length - final.character.length > 0
    ) {
      transcript.final = final.phoneme;
      transcript.finalCharacter = final.character;

      word = word.slice(0, word.length - final.character.length);
    }
  });

  // NOTE: Check medial
  if (word.length > 1 && word !== 'oo') {
    if (
      word.startsWith('u') &&
      (transcript.initialCharacter === 'q' ||
        ['y', 'i', 'ê', 'ơ', 'â', 'iê', 'yê', 'ia', 'ya'].includes(
          word.slice(1),
        ))
    ) {
      transcript.medial = medialList[0]!.phoneme;
      transcript.medialCharacter = medialList[0]!.character;

      word = word.slice(1);
    } else if (word.startsWith('o')) {
      transcript.medial = medialList[1]!.phoneme;
      transcript.medialCharacter = medialList[1]!.character;

      word = word.slice(1);
    }
  }

  if (
    word === 'o' &&
    transcript.finalCharacter &&
    ['nh', 'ng', 'ch', 'c'].includes(transcript.finalCharacter)
  ) {
    const main = mainList.filter((main) => main.phoneme === '-ɔ-');

    transcript.main = main[0]!.phoneme;
    transcript.mainCharacter = main[0]!.character;

    word = word.slice(1);
  } else {
    // NOTE: Check main
    mainList.forEach((main) => {
      if (word === main.character) {
        transcript.main = main.phoneme;
        transcript.mainCharacter = main.character;

        word = word.slice(main.character.length);
      }
    });
  }

  return transcript;
};

export const phoneticTranscriptWord = (word: string) => {
  return word.replaceAll(/[^\P{L}]+/gmu, (word) => {
    try {
      return transcriptToString(buildPhoneticTranscript(word));
    } catch (e) {
      return word;
    }
  });
};

export const phoneticTranscriptSentence = (sentence: string): string => {
  return sentence
    .split(' ')
    .map((word) => phoneticTranscriptWord(word))
    .join(' ');
};
