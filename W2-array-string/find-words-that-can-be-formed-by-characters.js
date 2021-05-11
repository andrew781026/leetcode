/*

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

------------------------

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation:
    The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

-------------------------

Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation:
    The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

------------------------------

Note:

1.  1 <= words.length <= 1000
2.  1 <= words[i].length, chars.length <= 100
3.  All strings contain lowercase English letters only.

*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {

    let totalLength = 0;
    const charArr = chars.split('').sort();

    const canFormatArr = words.map(word => {

        const wordArr = word.split('').sort();

        let startPoint = 0;

        for (let wordCh of wordArr) {

            // 需要處理已到最後一個 charCh 但是後面還有的狀況
            if (wordCh && startPoint > charArr.length - 1) return false;

            for (let j = startPoint; j < charArr.length; j++) {

                const charCh = charArr[j];
                const nextCharCh = charArr[j + 1];

                if (charCh === wordCh) { // 兩個 ch 相同 => 確認下一個 wordCh

                    startPoint = j + 1;
                    break;
                }

                if (charCh < wordCh && wordCh < nextCharCh) { // 特定文字 , 夾在兩者中間

                    return false;
                }

                if (j === charArr.length - 1 && charCh !== wordCh) { // 最後一個 char , 全都不相符

                    return false;
                }

            }
        }


        // 追加長度
        totalLength += wordArr.length;
        return true;
    });

    return totalLength;
};

const length01 = countCharacters(["cat", "bt", "hat", "tree"], "atach");
console.log('length01=', length01);

const length02 = countCharacters(["hello", "world", "leetcode"], "welldonehoneyr");
console.log('length02=', length02);

const length03 = countCharacters([
        "skwgxuuuumkfurejmqrbipvlavdrozjyxhagbwetabjwevfsegqfpllgafm",
        "ufvpzzgpswnk", "tcouxmlrnfyoxvkeglchhryykmdvgvdxpookbtiyhuthoqsnqbowewpfgbcy",
        "qwpttmxzazkkfqqtrnkaejifligdvgnyvtmppjbkeuqryxzqyegttvhzolpztvigxygzvsppurijaekb",
        "vbtvbheurzbglzljczmziitkbmtoybiwhoyfrsxvfveaxchebjdzdnnispzwbrgrbcdaistps"
    ]
    , "avyteswqppomeojxoybotzriuvxolmllevluauwb");
console.log('length03=', length03);

const length04 = countCharacters(["p", "rp"], "cpkeee");
console.log('length04=', length04);
