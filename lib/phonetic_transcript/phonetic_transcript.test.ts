import { describe, it, expect } from 'vitest';
import {
  phoneticTranscriptWord,
  phoneticTranscriptSentence,
} from './phonetic_transcript';

describe('Vietnamese Phonetic Transcript', () => {
  describe('Full sentence transcription - Main Example', () => {
    it('should correctly transcribe the Vietnamese sentence from the PDF example', () => {
      const inputSentence =
        'Nếu biết rằng em đã có chồng, trời ơi người ấy có buồn không';
      const expectedOutput =
        'new5 biet5 ʐăŋ2 ɛm1 da3 kɔ5 coŋ2, ʈɤj2 ɤj1 ŋɯɤj2 ɤj5 kɔ5 buon2 χoŋ1';

      const result = phoneticTranscriptSentence(inputSentence);
      expect(result).toBe(expectedOutput);
    });
  });

  describe('Individual word transcription from sentence', () => {
    // Test each word from the main sentence
    it('should correctly transcribe "nếu" as "new5"', () => {
      expect(phoneticTranscriptWord('nếu')).toBe('new5');
    });

    it('should correctly transcribe "biết" as "biet5"', () => {
      expect(phoneticTranscriptWord('biết')).toBe('biet5');
    });

    it('should correctly transcribe "rằng" as "ʐăŋ2"', () => {
      expect(phoneticTranscriptWord('rằng')).toBe('ʐăŋ2');
    });

    it('should correctly transcribe "em" as "ɛm1"', () => {
      expect(phoneticTranscriptWord('em')).toBe('ɛm1');
    });

    it('should correctly transcribe "đã" as "da3"', () => {
      expect(phoneticTranscriptWord('đã')).toBe('da3');
    });

    it('should correctly transcribe "có" as "kɔ5"', () => {
      expect(phoneticTranscriptWord('có')).toBe('kɔ5');
    });

    it('should correctly transcribe "chồng" as "coŋ2"', () => {
      expect(phoneticTranscriptWord('chồng')).toBe('coŋ2');
    });

    it('should correctly transcribe "trời" as "ʈɤj2"', () => {
      expect(phoneticTranscriptWord('trời')).toBe('ʈɤj2');
    });

    it('should correctly transcribe "ơi" as "ɤj1"', () => {
      expect(phoneticTranscriptWord('ơi')).toBe('ɤj1');
    });

    it('should correctly transcribe "người" as "ŋɯɤj2"', () => {
      expect(phoneticTranscriptWord('người')).toBe('ŋɯɤj2');
    });

    it('should correctly transcribe "ấy" as "ɤj5"', () => {
      expect(phoneticTranscriptWord('ấy')).toBe('ɤj5');
    });

    it('should correctly transcribe "buồn" as "buon2"', () => {
      expect(phoneticTranscriptWord('buồn')).toBe('buon2');
    });

    it('should correctly transcribe "không" as "χoŋ1"', () => {
      expect(phoneticTranscriptWord('không')).toBe('χoŋ1');
    });
  });

  describe('Common Vietnamese words from MorphoSyllable list', () => {
    it('should transcribe basic single vowels', () => {
      expect(phoneticTranscriptWord('a')).toBe('a1');
      expect(phoneticTranscriptWord('á')).toBe('a5');
      expect(phoneticTranscriptWord('à')).toBe('a2');
      expect(phoneticTranscriptWord('â')).toBe('ɤ1');
      expect(phoneticTranscriptWord('ă')).toBe('ă1');
      expect(phoneticTranscriptWord('ã')).toBe('a3');
      expect(phoneticTranscriptWord('ả')).toBe('a4');
      expect(phoneticTranscriptWord('ạ')).toBe('a6');
    });

    it('should transcribe words with initial consonants', () => {
      expect(phoneticTranscriptWord('ba')).toBe('ba1');
      expect(phoneticTranscriptWord('ca')).toBe('ka1');
      expect(phoneticTranscriptWord('da')).toBe('za1');
      expect(phoneticTranscriptWord('ga')).toBe('ɣa1');
      expect(phoneticTranscriptWord('ha')).toBe('ha1');
      expect(phoneticTranscriptWord('la')).toBe('la1');
      expect(phoneticTranscriptWord('ma')).toBe('ma1');
      expect(phoneticTranscriptWord('na')).toBe('na1');
      expect(phoneticTranscriptWord('pha')).toBe('fa1');
      expect(phoneticTranscriptWord('ta')).toBe('ta1');
      expect(phoneticTranscriptWord('va')).toBe('va1');
      expect(phoneticTranscriptWord('xa')).toBe('sa1');
    });

    it('should transcribe words with final consonants', () => {
      expect(phoneticTranscriptWord('am')).toBe('am1');
      expect(phoneticTranscriptWord('an')).toBe('an1');
      expect(phoneticTranscriptWord('ang')).toBe('aŋ1');
      expect(phoneticTranscriptWord('anh')).toBe('aŋ1');
      expect(phoneticTranscriptWord('ao')).toBe('aw1');
      expect(phoneticTranscriptWord('ay')).toBe('aj1');
    });

    it('should transcribe words with tone marks', () => {
      expect(phoneticTranscriptWord('bán')).toBe('ban5');
      expect(phoneticTranscriptWord('bàn')).toBe('ban2');
      expect(phoneticTranscriptWord('bân')).toBe('bɤn1');
      expect(phoneticTranscriptWord('bãn')).toBe('ban3');
      expect(phoneticTranscriptWord('bản')).toBe('ban4');
      expect(phoneticTranscriptWord('bạn')).toBe('ban6');
    });

    it('should transcribe compound consonants', () => {
      expect(phoneticTranscriptWord('cha')).toBe('ca1');
      expect(phoneticTranscriptWord('gha')).toBe('ɣa1');
      expect(phoneticTranscriptWord('kha')).toBe('χa1');
      expect(phoneticTranscriptWord('nha')).toBe('ɲa1');
      expect(phoneticTranscriptWord('pha')).toBe('fa1');
      expect(phoneticTranscriptWord('tha')).toBe('tʼa1');
    });

    it('should transcribe complex syllables', () => {
      expect(phoneticTranscriptWord('cháy')).toBe('caj5');
      expect(phoneticTranscriptWord('chiếc')).toBe('ciek5');
      expect(phoneticTranscriptWord('chuẩn')).toBe('cuɤn4');
      expect(phoneticTranscriptWord('đương')).toBe('dɯɤŋ1');
      expect(phoneticTranscriptWord('nghiêm')).toBe('ŋiem1');
      expect(phoneticTranscriptWord('quyền')).toBe('kuien2');
    });
  });

  describe('Tone mark patterns', () => {
    it('should correctly identify all 6 tone marks', () => {
      expect(phoneticTranscriptWord('ma')).toContain('1'); // no diacritic
      expect(phoneticTranscriptWord('mà')).toContain('2'); // grave accent
      expect(phoneticTranscriptWord('mã')).toContain('3'); // tilde
      expect(phoneticTranscriptWord('mả')).toContain('4'); // hook above
      expect(phoneticTranscriptWord('má')).toContain('5'); // acute accent
      expect(phoneticTranscriptWord('mạ')).toContain('6'); // dot below
    });
  });

  describe('Punctuation and sentence handling', () => {
    it('should preserve punctuation in sentence transcription', () => {
      const inputWithPunctuation = 'Xin chào, tôi tên là Nam!';
      const result = phoneticTranscriptSentence(inputWithPunctuation);

      expect(result).toContain(',');
      expect(result).toContain('!');
    });

    it('should handle multiple sentences', () => {
      const multiSentence = 'Hôm nay trời đẹp. Tôi đi chơi.';
      const result = phoneticTranscriptSentence(multiSentence);

      expect(result).toContain('.');
      expect(result).toContain(' ');
    });
  });

  describe('Text casing handling', () => {
    it('should handle uppercase words correctly', () => {
      expect(phoneticTranscriptWord('NẾU')).toBe('new5');
      expect(phoneticTranscriptWord('NGƯỜI')).toBe('ŋɯɤj2');
      expect(phoneticTranscriptWord('KHÔNG')).toBe('χoŋ1');
    });

    it('should handle mixed case words correctly', () => {
      expect(phoneticTranscriptWord('Nếu')).toBe('new5');
      expect(phoneticTranscriptWord('NgƯời')).toBe('ŋɯɤj2');
      expect(phoneticTranscriptWord('KhÔng')).toBe('χoŋ1');
    });

    it('should handle uppercase sentence correctly', () => {
      const upperCaseSentence =
        'NẾU BIẾT RẰNG EM ĐÃ CÓ CHỒNG, TRỜI ƠI NGƯỜI ẤY CÓ BUỒN KHÔNG';
      const expectedOutput =
        'new5 biet5 ʐăŋ2 ɛm1 da3 kɔ5 coŋ2, ʈɤj2 ɤj1 ŋɯɤj2 ɤj5 kɔ5 buon2 χoŋ1';

      const result = phoneticTranscriptSentence(upperCaseSentence);
      expect(result).toBe(expectedOutput);
    });
  });

  describe('Edge cases', () => {
    it('should handle single character words', () => {
      expect(phoneticTranscriptWord('a')).toBe('a1');
      expect(phoneticTranscriptWord('A')).toBe('a1');
      expect(phoneticTranscriptWord('ă')).toBe('ă1');
      expect(phoneticTranscriptWord('Ă')).toBe('ă1');
    });

    it('should handle words with multiple vowels', () => {
      expect(phoneticTranscriptWord('oai')).toBe('uaj1');
      expect(phoneticTranscriptWord('OAI')).toBe('uaj1');
    });

    it('should handle empty string', () => {
      expect(phoneticTranscriptWord('')).toBe('');
    });
  });
});
