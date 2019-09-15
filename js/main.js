function processing() {
    let allWordsArray = [];
    let countVerbs = 0;
    let j = 0;

    let textWords = document.getElementById('inputText').value;
    // console.log(textWords);
    let arrayWords = textWords.split(',').join('').split('.').join('')
        .split('(').join('').split(')').join('').split(' – ').join('').split('\n').join(' ')
        .split(' ');
    // console.log(arrayWords);


    Az.Morph.init('js/dicts', function() {
        for (let i = 0; arrayWords.length > i; i++) {
            let parses = Az.Morph(arrayWords[i]);
            // console.log(parses);
            // console.log(parses[0].tag.VERB);
            if (parses[0].tag.VERB || parses[0].tag.INFN) {
                allWordsArray[j] = arrayWords[i];
                j++;
                // console.log(arrayWords[i]);
                countVerbs++
            }
        }

        // console.log('Всего глаголов: '+countVerbs);
        // console.log(allWordsArray.join('\n'));

        document.getElementById('outputText').innerHTML = allWordsArray.join('\n');
        document.getElementById('verbsCount').innerHTML = '&nbsp' + j ;
        document.getElementById('wordsCount').innerHTML = '&nbsp' + arrayWords.length ;

    });







};




