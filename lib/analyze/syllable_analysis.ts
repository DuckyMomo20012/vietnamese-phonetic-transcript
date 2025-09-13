import { readFileSync } from 'fs';
import { join } from 'path';
import { phoneticTranscriptWord } from '@/phonetic_transcript/phonetic_transcript';

/**
 * Vietnamese Syllable Statistics Analysis
 * Using phonetic transcript to validate Vietnamese syllables
 */

function runCompleteAnalysis() {
  try {
    // Read the syllable list
    const filePath = join(__dirname, '../assets/MorphoSyllable_List.txt');
    const content = readFileSync(filePath, 'utf-8');

    const allLines = content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    // Use phonetic transcript to validate Vietnamese syllables
    const validVietnameseSyllables = allLines.filter((line) => {
      // Skip empty or very short/long lines
      if (line.length === 0 || line.length > 8) return false;

      // Use the phonetic transcript to test if it's a valid Vietnamese syllable
      const transcribed = phoneticTranscriptWord(line);

      // NOTE: Only keep words that can be transcribed
      return transcribed !== line;
    });

    // Create unique sets for both categories
    const allUniqueLines = [...new Set(allLines)];
    const uniqueValidSyllables = [...new Set(validVietnameseSyllables)];

    const totalDictionary = allUniqueLines.length;
    const totalValidSyllables = uniqueValidSyllables.length;

    // (b) Calculate theoretical combinations
    const initial = 27;
    const medial = 3;
    const main = 24;
    const final = 13;
    const tones = 6; // 6 Vietnamese tones

    const theoreticalTotal = initial * medial * main * final * tones;

    // Display results
    console.log('Vietnamese Syllable Statistics');
    console.log('==============================');

    console.log(`Dictionary (all lines): ${totalDictionary.toLocaleString()}`);
    console.log(
      `Valid syllables (transcribable): ${totalValidSyllables.toLocaleString()}`,
    );

    console.log(
      `\nTheoretical combinations: ${theoreticalTotal.toLocaleString()}`,
    );
    console.log(
      `    [${initial} initials] × [${medial} glides] × [${main} nuclei] × [${final} codas] × [${tones} tones]`,
    );

    console.log(`\nComparisons:`);
    console.log(
      `    Valid vs Dictionary: ${((totalValidSyllables / totalDictionary) * 100).toFixed(1)}%`,
    );
    console.log(
      `    Valid vs Theoretical: ${((totalValidSyllables / theoreticalTotal) * 100).toFixed(2)}%`,
    );
    console.log(
      `    Dictionary vs Theoretical: ${((totalDictionary / theoreticalTotal) * 100).toFixed(2)}%`,
    );

    console.log(`\nDifferences:`);
    console.log(
      `    Non-transcribable entries: ${(totalDictionary - totalValidSyllables).toLocaleString()}`,
    );
    console.log(
      `    Missing from dictionary: ${(theoreticalTotal - totalDictionary).toLocaleString()}`,
    );
  } catch (error) {
    console.error('Error:', error);
  }
}

runCompleteAnalysis();
