## Desestructuración

Cuando tenemos una constante con multiples variables porque sale de un interface, podemos llamarlo de una forma más reducida con la desestructuración.

```const { song } = audioPlayer; 
const { songDuration } = audioPlayer;
const { author } = audioPlayer.details;

console.log('Song: ', song)
console.log('Duration: ', songDuration)
console.log('Author: ', author)
```

Con "const { author } = audioPlayer", estamos sacando la variable author de la cosntante audioPlayer. Es como si escribieramos "const author = audioPlayer.author"