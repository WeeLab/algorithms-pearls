---
title: "Anagrams"
metaTitle: "Anagrams"
metaDescription: "Anagrams"
---

# Anagram: 
Word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example:
- "a gentleman" = "elegant man"
- "funeral" = "real fun"
- "William Shakespeare" = "I am a weakish speller"

## History:
- Originated int the 4th century BC with the greek poet Lycophron who use them to flatter the rich and mighty.
- In Roman and early Christian times, anagrams were often believed to have mystical or prophetic meaning.
- Anagrams started to become popular in Europe and Middle ages. The principal activity of anagrammatists was in forming anagrams on religious texts.
- In the 16th and 17th centuries, scientists ofter recorded their results in anagram form to stake their claim on a discovery and prevent anyone else claiming the credit.
- In recent decades, they are often inlcuded in the clues for cryptic crosswords.

## Applications: 
- **Establishment of priority:** Galileo used smaismrmilmepoetaleumibunenugttauiras for Altissimum planetam tergeminum observavi (Latin: I have observed the most distant planet to have a triple form) for discovering the rings of Saturn in 1610.
- **Pseudonyms:** opérate somewhere in between like a mask that can establish identity.
- **Titles:** used for titles afford scope for some types of wit.
- **Games and puzzles:** recreational activities.
- **Ciphers:** is a technique to solve some kinds of cryptograms.

## Algorithms: 
- **Checking off:** check the lenghts of the strings and then to see that each carácter in the first string actually occurs in the second.
    - Each n characters in s1 will cause an iteration through up to n characters in the list from s2.
    - Each of the n positions in the list will be visited once to match a character from s1.
    - The number of visits then becomes the sum of the integers from 1 to n.
    - O(n^2).
```java
anagramCheckingOff(String s1, String s2) {
		boolean isAnagram = true;
		
		if(s1.length()!=s2.length()) {
			return false;
		}
		
		int pos1 = 0;
		char[] string1 = s1.toCharArray();
		char[] string2 = s2.toCharArray();
		
		while(pos1 < string1.length && isAnagram) {
			int pos2 = 0;
			boolean found = false;
			while(pos2 < string2.length && found == false) {
				if(string1[pos1] == string2[pos2])
					found = true;
				else
					pos2++;				
			}
			
			if(found)
				string2[pos2] = 0;
			else
				isAnagram=false;
			
			pos1++;
		}
		
		
		return isAnagram;
	}
```

- **Sort and Compare:** s1 and s2 are anagrams only if they consist of exactly the same characters. Sorting each string, will end up with the same string if the original two strings are anagrams.
    - At first glance, this algorithm is O(n), since there is one simple iteration to compare n characters after the sorting process.
    - Sorting is typically either O(n^2) or O(n log n).
```java
sortAndCompare(String s1, String s2) {
		char[] string1 = s1.toCharArray();
		char[] string2 = s2.toCharArray(); 
		
		Arrays.sort(string1);
		Arrays.sort(string2);
		
		int pos = 0;
		boolean matches = true;
		
		while(pos < s1.length() && matches) {
			if(string1[pos] == string2[pos])
				pos++;
			else
				matches = false;
		}
		
		return matches;
	}
```

- **Brute force:** this technique tries to exhaust all posibilities. Generate a list of all posible strings using the characters from s1 and then see if s2 occurs. This means n! candidate strings, this is probably not going to be a good solution. 

- **Count and Compare:** Two anagrams will have the same number of a’s, the same number of b’s, the same number of c’s and so on. We can count the number of times each carácter occurs. Since there are 26 possible characters, we can use a list of 26 counters, one of each possible character. Increment the counter at that position and check the final counters.
    - O(n).
    - This algorithm sacrificed space in order to gain time.
```java
countAndCompare(String s1, String s2) {
		
		char[] string1 = s1.toCharArray();
		char[] string2 = s2.toCharArray();
		
		int[] c1 = new int[256];
		int[] c2 = new int[256];
		
		int pos = 0;
		
		for(int i = 0; i < string1.length; i++) {
			pos = string1[i];
			c1[pos] = c1[pos]+1;
		}
		
		for(int i = 0; i < string2.length; i++) {
			pos = string2[i];
			c2[pos] = c2[pos]+1;
		}
		
		int j = 0;
		boolean stillOK = true;
		while(j<256 && stillOK) {
			if(c1[j] == c2[j])
				j++;
			else
				stillOK = false;
		}
		
		return stillOK;
	}
```

## Practice: 
- [https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_r=internal-search](https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_r=internal-search)
- [https://www.hackerrank.com/challenges/ctci-making-anagrams/problem](https://www.hackerrank.com/challenges/ctci-making-anagrams/problem)
- [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)
- [https://www.hackerrank.com/challenges/java-anagrams/problem?h_r=internal-search](https://www.hackerrank.com/challenges/java-anagrams/problem?h_r=internal-search)
- [https://www.hackerrank.com/challenges/java-anagrams/problem?h_r=internal-search](https://www.hackerrank.com/challenges/java-anagrams/problem?h_r=internal-search)
- [https://www.hackerrank.com/challenges/anagram/problem?h_r=internal-search](https://www.hackerrank.com/challenges/anagram/problem?h_r=internal-search)


## Resources: 

- [Anagram](https://en.wikipedia.org/wiki/Anagram)
- [History of anagrams](http://www.fun-with-words.com/anag_history.html)
- [An algorithm for finding anagrams](https://skerritt.blog/an-algorithm-for-finding-anagrams/)
- [Algorithm analysis](https://runestone.academy/runestone/books/published/pythonds/AlgorithmAnalysis/AnAnagramDetectionExample.html)
- [Anagram solver (1)](https://www.thewordfinder.com/anagram-solver/)
- [Anagram solver (2)](https://anagram-solver.io)
- [Video explanation](https://www.youtube.com/watch?v=3MwRGPPB4tw)
