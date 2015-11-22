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

## engn.makeDPad (container = document.body)
Create a game DPad and insert it into the given `container`.
This is for use on touchscreen devices and the function will do nothing on
non-touchscreens. The four arrows of the DPad are mapped to the keyboard arrow
keys through `engn.keys`.

### Default Styling/Appearance
The D-Pad looks like this:

![ddd](http://s24.postimg.org/hc4a5wh3p/Dpad_screenshot.png)

It is positioned at the bottom center of the screen, overlaying other content.
It is semi-transparent so that the content below it is visible.

### Classes
* **edpad** - The D-Pad container.
* **edpadup**, **edpaddown**, **edpadleft**, **edpadright** - The up, down, left, and right buttons.
* **edpadrow** - A container for the **edpadleft** and **edpadright** elements.

## engn.keys
A key monitor to determine which keys are pressed.

### [keyname]
`engn.keys[keyname]` represents whether the key with that key name is pressed.
The following keys are included:
* backspace
* tab
* enter
* shift
* ctrl
* alt
* pausebreak
* caps
* escape
* pgup
* pgdown
* end
* home
* left
* up
* right
* down
* insert
* delete
* 0
* 1
* 2
* 3
* 4
* 5
* 6
* 7
* 8
* 9
* a
* b
* c
* d
* e
* f
* g
* h
* i
* j
* k
* l
* m
* n
* o
* p
* q
* r
* s
* t
* u
* v
* w
* x
* y
* z
* winleft
* winright
* select
* num0
* num1
* num2
* num3
* num4
* num5
* num6
* num7
* num8
* num9
* multiply
* add
* subtract
* decimal
* divide
* f1
* f2
* f3
* f4
* f5
* f6
* f7
* f8
* f9
* f10
* f11
* f12
* numlock
* scrolllock
* semicolon
* equals
* comma
* dash
* period
* slash
* grave accent
* openbracket
* backslash
* closebraket
* singlequote

### reset ()
Reset the statuses of all keys.

### noPreventDefault ()
Stop the key monitor from using preventDefault.

### downEvt (e)
Trigger a simulated onkeydown event. `e` is an object with a `keyCode` property
representing the key to be pressed.

### upEvt (e)
Trigger a simulated onkeyup event. `e` is an object with a `keyCode` property
representing the key to be released.

**Returns:** A boolean value representing whether or not the key is pressed.
