// click on the stone to get all the movies it appeared in and its info

// give all the movies posters, info and thanos img a class of that stone

/* 
space
----Thor
    Captain America: The First Avenger
    Marvel's The Avengers
    Thor: Ragnarok
    Avengers: Infinity War
    Captain Marvel
    Avengers: Endgame

mind
----Marvel's The Avengers
    Avengers: Age of Ultron
    Captain America: Civil War
    Avengers: Infinity War
    Avengers: Endgame

reality
----Thor: The Dark World
    Avengers: Infinity War
    Avengers: Endgame 

power
----Guardians of the Galaxy
    Avengers: Infinity War
    Avengers: Endgame

time
----Doctor Strange
    Avengers: Infinity War
    Avengers: Endgame

soul
----Avengers: Infinity War
    Avengers: Endgame

*/

// if  SOUL stone is clicked show the img of thanos and the posters of the movies it appeared and its info

const stones = document.querySelectorAll('.stones');
const stoneInfo = document.querySelectorAll('.stoneInfo');

console.log(stoneInfo);
console.log(stones);

stones.forEach( stone => {
    stone.addEventListener('click', e => {
        console.log(e);
        if(e.target.classList.includes('space')){
            console.log('space clicked');
        }
    })
})













