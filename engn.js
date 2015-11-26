// engn.js (v2.2.0) - A simple game utilities library.
// Licensed under the MIT license.
// Copyright (C) 2015 Podium
// GitHub Repository: podiumnet/engn.js
(function(window, document, undefined){
  // Create the EngnJS object if it doesn't exist.
  window.engn = engn = window.engn || {};

  engn.trap = function (thing, container) {
    // Contain the thing in the container.
    if (thing.x < container.x) thing.x = container.x;
    if (thing.x > container.x + container.width - thing.width) thing.x = container.x + container.width - thing.width;
    if (thing.y < container.y) thing.y = container.y;
    if (thing.y > container.y + container.height - thing.height) thing.y = container.x + container.height - thing.height;
  };

  engn.makeDPad = function (container) {
    if (!document.createTouch) return; // Exit if this is not a touchscreen.

    // A function to bind touch events to keys.
    var keyBind = function (elem, keyid) {
      elem.ontouchstart = function () {
        engn.keys.downEvt({keyCode: keyid, preventDefault: function(){}});
      };
      elem.ontouchend = function () {
        engn.keys.upEvt({keyCode: keyid, preventDefault: function(){}});
      };
    };

    // The DPad goes into this.
    var into = container || document.body;

    // Create the DPad DOM.
    var primary = document.createElement("div");
    primary.className = "edpad";
    var up = document.createElement("div");
    up.className = "edpadup";
    var row = document.createElement("div");
    row.className = "edpadrow";
    var left = document.createElement("div");
    left.className = "edpadleft";
    var right = document.createElement("div");
    right.className = "edpadright";
    var down = document.createElement("div");
    down.className = "edpaddown";

    // Bind the touch events to certain keys.
    keyBind(up, 38);
    keyBind(left, 37);
    keyBind(right, 39);
    keyBind(down, 40);

    // Append the DPad to the given container.
    row.appendChild(left);
    row.appendChild(right);
    primary.appendChild(up);
    primary.appendChild(row);
    primary.appendChild(down);
    into.appendChild(primary);

    // Insert the basic CSS styling for the DPad.
    var styling = document.createElement("style");
    styling.innerHTML = ".edpad {width: 250px;height: 250px;position: fixed;bottom: 10px;left: calc(50vw - 100px);background: rgba(0,0,0,0.3);padding: 5px;border-radius: 3px;} .edpadup, .edpaddown, .edpadleft, .edpadright {width: 33%;height: 33%;background: rgba(0,0,0,0.4);border-radius: 3px;}.edpadup, .edpaddown {margin: 0 auto;} .edpadleft {float: left;} .edpadright {float: right;} .edpadrow {width: 100%;height: 33%;} .edpadrow * {height: 100%;}";
    document.head.appendChild(styling);
  };

  // Checks for intersection. Adapted from
  // http://stackoverflow.com/questions/2752349/fast-rectangle-to-rectangle-intersection.
  engn.checkIntersection = function (a, b) {
    return !(b.x > a.x + a.width || b.x + b.width < a.x ||
    b.y > a.y + a.height || b.y + b.height <a.y);
  };

  engn.keys = new (function () {
    var keys = [];
    keys[8] = "backspace";
    keys[9] = "tab";
    keys[13] = "enter";
    keys[16] = "shift";
    keys[17] = "ctrl";
    keys[18] = "alt";
    keys[19] = "pausebreak";
    keys[20] = "caps";
    keys[27] = "escape";
    keys[33] = "pgup";
    keys[34] = "pgdown";
    keys[35] = "end";
    keys[36] = "home";
    keys[37] = "left";
    keys[38] = "up";
    keys[39] = "right";
    keys[40] = "down";
    keys[45] = "insert";
    keys[46] = "delete";
    keys[48] = "0";
    keys[49] = "1";
    keys[50] = "2";
    keys[51] = "3";
    keys[52] = "4";
    keys[53] = "5";
    keys[54] = "6";
    keys[55] = "7";
    keys[56] = "8";
    keys[57] = "9";
    keys[65] = "a";
    keys[66] = "b";
    keys[67] = "c";
    keys[68] = "d";
    keys[69] = "e";
    keys[70] = "f";
    keys[71] = "g";
    keys[72] = "h";
    keys[73] = "i";
    keys[74] = "j";
    keys[75] = "k";
    keys[76] = "l";
    keys[77] = "m";
    keys[78] = "n";
    keys[79] = "o";
    keys[80] = "p";
    keys[81] = "q";
    keys[82] = "r";
    keys[83] = "s";
    keys[84] = "t";
    keys[85] = "u";
    keys[86] = "v";
    keys[87] = "w";
    keys[88] = "x";
    keys[89] = "y";
    keys[90] = "z";
    keys[91] = "winleft";
    keys[92] = "winright";
    keys[93] = "select";
    keys[96] = "num0";
    keys[97] = "num1";
    keys[98] = "num2";
    keys[99] = "num3";
    keys[100] = "num4";
    keys[101] = "num5";
    keys[102] = "num6";
    keys[103] = "num7";
    keys[104] = "num8";
    keys[105] = "num9";
    keys[106] = "multiply";
    keys[107] = "add";
    keys[109] = "subtract";
    keys[110] = "decimal";
    keys[111] = "divide";
    keys[112] = "f1";
    keys[113] = "f2";
    keys[114] = "f3";
    keys[115] = "f4";
    keys[116] = "f5";
    keys[117] = "f6";
    keys[118] = "f7";
    keys[119] = "f8";
    keys[120] = "f9";
    keys[121] = "f10";
    keys[122] = "f11";
    keys[123] = "f12";
    keys[144] = "numlock";
    keys[145] = "scrolllock";
    keys[186] = "semicolon";
    keys[187] = "equals";
    keys[188] = "comma";
    keys[189] = "dash";
    keys[190] = "period";
    keys[191] = "slash";
    keys[192] = "grave accent";
    keys[219] = "openbracket";
    keys[220] = "backslash";
    keys[221] = "closebraket";
    keys[222] = "singlequote";
    var me = this;
    var prevdef = true;
    var ignores = [];
    var notIgnored = function (target) {
      if (!target) return true;
      ignores.each(function(ignored) {
        if (target.matches(ignored)) return false;
      });
      return true;
    };
    this.downEvt = function (e) {
      if (notIgnored(e.target)) {
        me[keys[e.keyCode]] = 1;
        if (prevdef && (e.keyCode < 112 || e.keyCode > 123)) e.preventDefault();
      }
    };
    this.upEvt = function (e) {
      if (notIgnored(e.target)) {
        me[keys[e.keyCode]] = 0;
        if (prevdef && (e.keyCode < 112 || e.keyCode > 123)) e.preventDefault();
      }
    };
    this.reset = function () {
      keys.forEach(function(keyname){
        if (keyname) this[keyname] = 0;
      });
    };
    this.noPreventDefault = function () {
      prevdef = false;
    };
    this.bind = function (subject) {
      subject.addEventListener("keydown", this.downEvt);
      subject.addEventListener("keyup", this.upEvt);
      subject.addEventListener("focus", this.reset);
    };
    this.ignore = function (selector) {
      ignores.push(selector);
    };
  })();

  // Create the Loop class.
  engn.Loop = function (fps) {
    var tUpdate = [], tRender = [], skipped, interval, skipUntil, next, frozen, render, update,
    loop, bindutil, maketrigger;

    bindutil = function (from) {
      return function () {
        from.forEach(function(callback) { callback(); });
        return this;
      };
    };
    triggerutil = function (to) {
      return function (callback) {
        to.push(callback);
        return this;
      };
    };
    render = bindutil(tRender); // Trigger the bindings for game renders.
    update = bindutil(tUpdate); // Trigger the bindings for game updates.

    // This is the loop function that is called repeatedly forever (or until frozen.)
    loop = function () {
      // Run the update bindings if the time set in next has come, and it will not permit any more
      // skipped renders.
      while (new Date().getTime() > next && skipped < skipUntil && !frozen) {
        update();
        next += interval;
        skipped++;
      }
      // Render if an update has been performed.
      if (skipped) render();
      skipped = 0;
      // Request to run loop() again unless the game has been frozen.
      if (!frozen) requestAnimationFrame(loop);
    };
    // Freezes (pauses) the game loop.
    this.freeze = function () {
      frozen = true;
      return this;
    };
    // Unfreezes (plays) the game loop.
    this.unfreeze = function () {
      // Add bindings for pausing game when focus is lost.
      window.addEventListener("blur", this.freeze);
      window.addEventListener("focus", this.unfreeze);

      // Reset data about the game loops for a fresh start.
      skipped = 0;
      interval = 1000 / fps;
      skipUntil = 10;
      next = new Date().getTime();
      frozen = false;
      requestAnimationFrame(loop);
      return this;
    };
    this.onUpdate = triggerutil(tUpdate); // Bind a new function to the update event.
    this.onRender = triggerutil(tRender); // Bind a new function to the render event.
  };
})(this, this.document);
