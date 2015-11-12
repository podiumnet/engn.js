# engn.js
Engn.js is a set of JS libraries to help you make your games in javascript.
It is **not** a full-blown game engine, just small libraries to help you create one.
They are all licensed under the MIT license.

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

## engn.checkIntersection (x1, y1, w1, h1, x2, y2, w2, h2)
Check for the intersection of rectangle 1
(x1 = x, y1 = y, w1 = width, h1 = height) and rectangle 2 (x2 = x, y2 = y, w2 = width, h2 = height).

**Returns:** A boolean value representing whether or not the rectangles intersect.
