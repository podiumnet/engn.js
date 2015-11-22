# engn.js
Engn.js is a JS library to help you make your games in javascript.
It is **not** a full-blown game engine, just a library to help you create one.
It is licensed under the MIT license.

**Note:** All development must happen in the `devel` branch before being merged into master.

Everything is located in the `engn` namespace.

## engn.Loop (fps)
Establish a Loop object with the specified FPS for the loop. This is used for game loops.

### onUpdate (callback)
Binds `callback` to be called whenever a game logic update (tick) occurs.

**Returns:** The original Loop object, to allow chaining

### onRender (callback)
Binds `callback` to be called whenever a game rendering occurs.

**Returns:** The original Loop object, to allow chaining.

### freeze ()
Freezes (pauses) the game loop at the next render.

**Returns:** The original Loop object, to allow chaining.

### unfreeze ()
Unfreezes (plays) the game loop. This is also used to begin the game loop when it is first created.

**Returns:** The original Loop object, to allow chaining.

## engn.checkIntersection (a, b)
Check for the intersection of rectangle `a` and rectangle `b`.
`a` and `b` are objects with x, y, width, and height values.

**Returns:** A boolean value representing whether or not the rectangles intersect.

## engn.KeyMonitor ()
Establish a KeyMonitor object to monitor what keys are pressed.

### keyDown (keycode)
Check whether the key `keycode` is down.

**Returns:** A boolean value representing whether or not the key is pressed.
