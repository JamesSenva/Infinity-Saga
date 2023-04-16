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

// if  SOUL stone is clicked show the img of thanos and the posters of the movies it appeared and its info should show up
// do that for every stone


// the posters of infinity war and endgame will always be visible when nothing is clicked
const infinity = document.querySelector('#infinity');
const endgame = document.querySelector('#endgame');

// main thanos and info about infinity stones
const mainThanos = document.querySelector('#thanosMain');
const mainInfo = document.querySelector('#stoneInfo');


// stones nodelist
const stones = document.querySelectorAll('.stones');
console.log(stones);

// space stone
const space = document.querySelector('#space');
const spaceInfo = document.querySelectorAll('.space');
console.log(spaceInfo);

// mind stone
const mind = document.querySelector('#mind');
const mindInfo = document.querySelectorAll('.mind');

// reality stone
const reality = document.querySelector('#reality');
const realityInfo = document.querySelectorAll('.reality');

// power stone
const power = document.querySelector('#power');
const powerInfo = document.querySelectorAll('.power');

// time stone
const time = document.querySelector('#time');
const timeInfo = document.querySelectorAll('.time');

// soul stone
const soul = document.querySelector('#soul');
const soulInfo = document.querySelectorAll('.soul');

stones.forEach( stone => {
    stone.addEventListener('click', function(e) {
        if(e.target.id === 'space'){
            infinity.classList.remove('hide');
            endgame.classList.remove('hide');
            mainInfo.classList.add('hide');
            mainThanos.classList.add('hide');
            spaceInfo.forEach( s => s.classList.remove('hide'));
            mindInfo.forEach( m => m.classList.add('hide'));
            realityInfo.forEach( r => r.classList.add('hide'));
            powerInfo.forEach( p => p.classList.add('hide'));
            timeInfo.forEach( t => t.classList.add('hide'));
            soulInfo.forEach( sl => sl.classList.add('hide'));
        }else if(e.target.id === 'mind'){
            infinity.classList.remove('hide');
            endgame.classList.remove('hide');
            mainInfo.classList.add('hide');
            mainThanos.classList.add('hide');
            mindInfo.forEach( m => m.classList.remove('hide'));
            spaceInfo.forEach( s => s.classList.add('hide'));
            realityInfo.forEach( r => r.classList.add('hide'));
            powerInfo.forEach( p => p.classList.add('hide'));
            timeInfo.forEach( t => t.classList.add('hide'));
            soulInfo.forEach( sl => sl.classList.add('hide'));
        }else if(e.target.id === 'reality'){
            infinity.classList.remove('hide');
            endgame.classList.remove('hide');
            mainInfo.classList.add('hide');
            mainThanos.classList.add('hide');
            realityInfo.forEach( r => r.classList.remove('hide'));
            mindInfo.forEach( m => m.classList.add('hide'));
            spaceInfo.forEach( s => s.classList.add('hide'));
            powerInfo.forEach( p => p.classList.add('hide'));
            timeInfo.forEach( t => t.classList.add('hide'));
            soulInfo.forEach( sl => sl.classList.add('hide'));
        }else if(e.target.id === 'power'){
            infinity.classList.remove('hide');
            endgame.classList.remove('hide');
            mainInfo.classList.add('hide');
            mainThanos.classList.add('hide');
            powerInfo.forEach( p => p.classList.remove('hide'));
            realityInfo.forEach( r => r.classList.add('hide'));
            mindInfo.forEach( m => m.classList.add('hide'));
            spaceInfo.forEach( s => s.classList.add('hide'));
            timeInfo.forEach( t => t.classList.add('hide'));
            soulInfo.forEach( sl => sl.classList.add('hide'));
        }else if(e.target.id === 'time'){
            infinity.classList.remove('hide');
            endgame.classList.remove('hide');
            mainInfo.classList.add('hide');
            mainThanos.classList.add('hide');
            timeInfo.forEach( t => t.classList.remove('hide'));
            powerInfo.forEach( p => p.classList.add('hide'));
            realityInfo.forEach( r => r.classList.add('hide'));
            mindInfo.forEach( m => m.classList.add('hide'));
            spaceInfo.forEach( s => s.classList.add('hide'));
            soulInfo.forEach( sl => sl.classList.add('hide'));
        }else if(e.target.id === 'soul'){
            infinity.classList.remove('hide');
            endgame.classList.remove('hide');
            mainInfo.classList.add('hide');
            mainThanos.classList.add('hide');
            soulInfo.forEach( sl => sl.classList.remove('hide'));
            timeInfo.forEach( t => t.classList.add('hide'));
            powerInfo.forEach( p => p.classList.add('hide'));
            realityInfo.forEach( r => r.classList.add('hide'));
            mindInfo.forEach( m => m.classList.add('hide'));
            spaceInfo.forEach( s => s.classList.add('hide'));
        }
    })
})




