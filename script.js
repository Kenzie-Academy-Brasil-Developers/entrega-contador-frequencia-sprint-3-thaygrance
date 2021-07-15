
function letras(){
// teu código vai aqui ... 
      let typedText = document.getElementById("textInput").value;
      typedText = typedText.toLowerCase(); 
      // Isto muda todas as letras para minúsculas
      typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
      // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
      // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
   
      const letterCounts = {};
      for (let i = 0; i < typedText.length; i++) {
      currentLetter = typedText[i];
      
      
      if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1; 
      } else { 
      letterCounts[currentLetter]++; 
      }
      
      }  
      
   
      for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
      }

}

function palavras() {
   let typedText = document.getElementById("textInput").value;
   let words = typedText.split(/\s/);
 
   console.log(words)

      
   const wordsCounts = {};
   for (let i = 0; i < words.length; i++) {
   currentWord = words[i];
   
   console.log(currentWord)

   if (wordsCounts[currentWord] === undefined) {
   wordsCounts[currentWord] = 1; 
   } else { 
   wordsCounts[currentWord]++; 
   }
   }  

   console.log(wordsCounts)
 
   for (let word in wordsCounts) { 
   const span = document.createElement("span"); 
   const textContent = `"${word}": ${wordsCounts[word]}, `;
   span.innerText = textContent; 
   const words = document.getElementById("wordsDiv");
   words.appendChild(span); 
   }

}

const button = document.getElementById("countButton");
button.addEventListener("click", function() { 
letras()
palavras()
})


