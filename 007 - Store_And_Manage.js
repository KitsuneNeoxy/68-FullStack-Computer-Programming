function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const CensoredTex = sentence.replace(regex, '***');
    return CensoredTex;

}

const originalPost = "Javascript is fun but sometime javascript be tricky.";
const cleanPost = censorWord(originalPost, "javascript");
console.log(cleanPost);

// ไอหน้าหี ??