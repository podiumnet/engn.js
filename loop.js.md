# loop.js
Loop.js is a simple game loop management library.
It introduces the `Loop` class, which works as follows:

## engn.Loop (fps)
Establish the Loop object with the specified FPS for the loop.

## engn.Loop.onUpdate (callback)
Binds `callback` to be called whenever a game logic update (tick) occurs.

**Returns:** The original Loop object, to allow chaining

## engn.Loop.onRender (callback)
Binds `callback` to be called whenever a game rendering occurs.

**Returns:** The original Loop object, to allow chaining.

## engn.Loop.freeze ()
Freezes (pauses) the game loop at the next render.

**Returns:** The original Loop object, to allow chaining.

## engn.Loop.unfreeze ()
Unfreezes (plays) the game loop. This is also used to begin the game loop when it is first created.

**Returns:** The original Loop object, to allow chaining.
