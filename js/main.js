function processing() {
    let allWordsArray = [];
    let countVerbs = 0;
    let j = 0;

    let textWords = document.getElementById('inputText').value;
    // console.log(textWords);
    let arrayWords = textWords.split(',').join('').split('.').join('')
        .split('(').join('').split(')').join('').split(' –').join('')
        .split(';').join('').split('\n').join(' ')
        .split(' ');
    // console.log(arrayWords);

    let max = 100; let n = 1; let freeString = ''; let allCountVerbs = 0;
    Az.Morph.init('../node_modules/az/dicts', function() {
        for (let i = 0; arrayWords.length > i; i++) {
            let parses = Az.Morph(arrayWords[i]);
            // console.log(parses);
            // console.log(parses[0].tag.VERB);


            if (i < max) {
                if (parses.length == 0) {
                    continue;
                }
                else if (parses[0].tag.VERB || parses[0].tag.INFN) {
                    allWordsArray[j] = arrayWords[i];
                    j++;
                    // console.log(arrayWords[i]);
                    countVerbs++
                }
            } else {
                // document.getElementById('verbsCount').innerHTML = '&nbsp' + 'Первые 100 слов, глаголов ' + j ;
                let formDiv = document.querySelector("div.processing-form__count-verb");
                let elem = document.createElement("p");
                let elemText = document.createTextNode(n + ':' + '\u00A0' + j + '\u00A0\u00A0\u00A0\u00A0');
                freeString = freeString + n + ': ' + j + ' глагола(ов)' + '  ' + allWordsArray + '\r';
                n++;
                document.getElementById('outputText').innerHTML = freeString;
                elem.appendChild(elemText);
                formDiv.appendChild(elem);
                allCountVerbs = allCountVerbs + j;
                j = 0;
                max = max+100;
            }
        }

        // console.log('Всего глаголов: '+countVerbs);
        // console.log(allWordsArray.join('\n'));

        // document.getElementById('outputText').innerHTML = allWordsArray.join('\n');

        // document.getElementById('verbsCount').innerHTML = '&nbsp' + 'Первые 100 слов, глаголов ' + j ;
        document.getElementById('wordsCount').innerHTML = 'Всего слов: ' +'&nbsp' + arrayWords.length ;
        document.getElementById('verbsCount').innerHTML = 'Всего глаголов: ' + allCountVerbs;
    });



}




