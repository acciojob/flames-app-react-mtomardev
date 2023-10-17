import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    let [firstName, setFirstName] = useState("");
    let [secondName, setSecondName] = useState("");
    let [relationshipStatus, setRelationshipStatus] = useState("");

    function relationshiohandler(){
        //check if any input is empty
        if(!firstName || !secondName){
            setRelationshipStatus("Please Enter valid input")
        }

        //compare input string Input should be considered case-sensitive.

        let commonChars = []; //empty array
        let name1Char = firstName.split("");//split input in aray
        let name2Char = secondName.split("")//split input in aray

        //for of loop to compare
        for(let char of name1Char){

            // Here, name2Chars is an array containing characters from the second name (name2), and char represents a character from the first name (name1). The indexOf method is used to check if the character char exists in the name2Chars array. If it does, index will be the position (index) of that character in name2Chars, and if it doesn't exist, index will be -1. This line effectively compares characters between name1 and name2 to find common characters.
            const index = name2Char.indexOf(char);

            if(index !== -1){
                commonChars.push(char);
//The line name2Chars.splice(index, 1); is used to remove a character from the name2Chars array at a specific index, which corresponds to the common character found in both name1 and name2.

// Here's a breakdown of how this line works:

//     name2Chars is an array that contains the characters from the second name, name2.

//     index represents the index (position) of a common character (found in both name1 and name2) within the name2Chars array.

//     The splice method is called on the name2Chars array. It is used to modify the contents of an array by adding or removing elements. In this case, we're using it to remove a single element from the array.

//     The first argument to splice is the index at which you want to start making changes.

//     The second argument is the number of elements to remove. In this case, we are removing only one element, which is the common character found at the specified index.

// So, when name2Chars.splice(index, 1); is executed, it removes the common character found at the index position from the name2Chars array. This ensures that each common character is counted only once, as specified in your original logic for the "FLAMES" relationship calculation.
                name2Char.splice(index, 1);
            }
        }

        const remainingCharCount = name1Char.length + name2Char.length;
        const relationshipValue = remainingCharCount % 6

        switch(relationshipValue){
            case 1:
                setRelationshipStatus("Friends");
                break;
            case 2:
                setRelationshipStatus("Love")
                break;
            case 3:
                setRelationshipStatus("Affection")
                break;
            case 4:
                setRelationshipStatus("Marriage")
                break;
            case 5:
                setRelationshipStatus("Enemy")
                break;
            case 0:
                setRelationshipStatus("Siblings")
                break;
            default:
                setRelationshipStatus("")
        }

    };

    function delethandle(){
        setFirstName("")
        setSecondName("")
        setRelationshipStatus("")
    }
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <h1>Flame app</h1>
               <input data-testid="input1"
                placeholder="First Name"
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
                name="name1"/>

               <input data-testid="input2"
               placeholder="Second Name"
               value={secondName}
               onChange={(e)=>setSecondName(e.target.value)}
               name="name2"/>
               
               <button data-testid="calculate_relationship" onClick={relationshiohandler}>
                Calculate Relationship Future</button>
               <button data-testid="clear" onClick={delethandle}>Clear</button>
               <h3 data-testid="answer">{relationshipStatus}</h3>
            </div>
        )
    }



export default App;
