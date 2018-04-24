'use strict';
// caracteristica do es6: declaração let 

const sentences = [
    { subject: 'C', verb: 'is', object: 'AWESOME' },
    { subject: 'Lions', verb: 'are', obect: 'Dangerous' },
];
// carecteristica do es6: desestruturação de objecto
function say({ subject, verb, object }) {
    // caracteristica do es6: template de strings
    console.log(`${subject} ${verb} ${object}`);
}

//caracteristica do es6: for...of
for(let s of sentences) {
    say(s);
}