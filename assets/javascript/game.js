window.onload = function () {
    
    // Arrays to store the numbers and alphabet
    var numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
    // create numbers and alphabet buttons ul
    var buttons = function () 
    {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');
        numerical = document.createElement('ul');

        for (var i = 0; i < numbers.length; i++) 
        {
            numerical.id = 'numbers';
            list = document.createElement('li');
            list.id = 'numerical';
            list.innerHTML = numbers[i];
            check();
            myButtons.appendChild(numerical);
            numerical.appendChild(list);
        }
        for (var i = 0; i < alphabet.length; i++) 
        {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }
      
    
    // Select Catagory
    var selectCat = function () 
    {
        if (chosenCategory === categories[0]) 
        {
            catagoryName.innerHTML = "The Chosen Category Is Lightside Characters";
        } 
        else if (chosenCategory === categories[1]) 
        {
            catagoryName.innerHTML = "The Chosen Category Is Darkside Characters";
        }
        else if (chosenCategory === categories[2]) 
        {
            catagoryName.innerHTML = "The Chosen Category Is Movie Titles";
        }
    }
  
    // Create geusses ul
    result = function ()
    {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) 
        {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") 
            {
                guess.innerHTML = "-";
                space = 1;
            } 
            else 
            {
                guess.innerHTML = "_";
            }
            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        } // end of for loop
    }
    
    // Show lives
    comments = function () 
    {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) 
        {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) 
        {
            if (counter + space === geusses.length) 
            {
                showLives.innerHTML = "You Win!";
            }
        }
    }
  
    // Animate man
    var animate = function () 
    {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
    // Hangman
    canvas =  function()
    {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };
    
    head = function()
    {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // OnClick Function
    check = function () 
    {
        /* TRIED TO CREATE SOUND BUT WASN'T WORKING */
        // var correctSound = document.createElement("myAudio");
        // console.log("sound? " + correctSound);
        // correctSound.setAttribute("src", "../../audio/ding-sound-effect_2.mp3");

        list.onclick = function ()
        {
            var geuss = (this.innerHTML); // takes the letter the user has clicked on
            console.log(this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) 
            {
                if (word[i] === geuss) 
                {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                } 
            } // end of for loop
            var j = (word.indexOf(geuss));
            if (j === -1) 
            {
                lives -= 1;
                comments();
                animate();
            } 
            else 
            {
                comments();
            }
        }
    }
    
    // Play
    play = function () 
    {
        /* categories and their content */
        categories = ["lightSideCharacters", "darkSideCharacters", "titles"];
        
        lightSideCharacters = 
            ["chewbacca", "han-solo", "luke-skywalker", "yoda", "mace-windu", "anakin-skywalker", 
            "lando-calrissian", "princess-leia", "obi-wan-kenobi", "r2d2", "c3po"];

        darkSideCharacters = 
            ["darth-vader", "stormtropper", "jabba-the-hut", "darth-sidious", "karlo-ren", "general-grievous",
            "greedo", "darth-maul", "count-dooku", "boba-fett", "emperor-palpatine" ];

        titles =
            ["a-new-hope", "the-empire-strikes-back", "return-of-the-jedi", "the-phantom-menace", "attack-of-the-clones", 
            "revenge-of-the-sith", "the-force-awakens", "the-last-jedi", "The-rise-of-skywalker", "rogue-one" ]; 
        
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        console.log(chosenCategory);
        
        /* for the chosen category, randomly select a character from the array */
        if (chosenCategory === categories[0])
        {
            word = lightSideCharacters[Math.floor(Math.random() * chosenCategory.length)];
            word = word.replace(/\s/g, "-");
            console.log(lightSideCharacters.indexOf(word)); // used for testing purposes
        }
        else if (chosenCategory === categories[1])
        {
            word = darkSideCharacters[Math.floor(Math.random() * chosenCategory.length)];
            word = word.replace(/\s/g, "-");
            console.log(darkSideCharacters.indexOf(word)); // used for testing purposes
        }
        else if (chosenCategory === categories[2])
        {
            word = titles[Math.floor(Math.random() * chosenCategory.length)];
            word = word.replace(/\s/g, "-");
            console.log(titles.indexOf(word));
            console.log(word);
        }

        buttons();

        geusses = [ ];
        lives = 5;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    }
  
    play();
    
    // Hint
  
        // When hint button is pressed
        hint.onclick = function() {
        console.log("did i get here?");
        
        // Lightside character hints
        lsHints = ["very hairy!", "likes Princess Leia", "I am your father", "very old", "is in Pulp Fiction", "young jedi", "played a character in Rocky",
            "Qoute: Obi wan, you're my only hope", "wears a dressing gown with a hoody", "three legs", "gold"];
        
        // Darkside character hints
        dsHints =  ["deep breather", "danced on AGT", "morbidly obese", "darth but vader", "funny voice", "can hold four lightsabers",
            "big eyes", "darth but not vader", "wears a dressing gown with a hoody", "i think of fetta", "looks like the walking dead"];
        
        // Title hints
        titleHints =  ["IV", "V", "VI", "I", "II", "III", "VII", "VIII", "IX", "A Star Wars Story"];

        var hintIndex; // Index of word with chosen category array

        var catagoryIndex = categories.indexOf(chosenCategory);
        console.log("catagoryIndex is " + catagoryIndex);
        
        /* for the chosen category, show the relevant hint */
        if (chosenCategory === categories[0])
        {
            hintindex = lightSideCharacters.indexOf(word);
            showClue.innerHTML = "Clue:  " +  lsHints [hintindex];
        }

        else if (chosenCategory === categories[1])
        {
            hintindex = darkSideCharacters.indexOf(word);
            showClue.innerHTML = "Clue:  " +  dsHints [hintindex];
        }

        else if (chosenCategory === categories[2])
        {
            hintindex = titles.indexOf(word);
            showClue.innerHTML = "Clue:  " +  titleHints [hintindex];
        }
    
    };
  
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }