// engn.js (v1.0.1) - A simple game utilities library.
// Licensed under the MIT license.
// Copyright (C) 2015 Podium
// GitHub Repository: podiumnet/engn.js
(function(window, document, undefined){
  // Create the EngnJS object if it doesn't exist.
  window.engn = engn = window.engn || {};

  // Checks for intersection. Adapted from
  // http://stackoverflow.com/questions/2752349/fast-rectangle-to-rectangle-intersection.
  engn.checkIntersection = function (a, b) {
    return !(b.x > a.x + a.width || b.x + b.width < a.x ||
    b.y > a.y + a.height || b.y + b.height <a.y);
  };

  engn.keys = new (function () {
    var keys = [];
    var prevdef = true;
    this.down = function (e) {
      keys[e.keyCode] = 1;
      if (prevdef && (e.keyCode < 112 || e.keyCode > 123)) e.preventDefault();
    };
    this.up = function (e) {
      keys[e.keyCode] = 0;
      if (prevdef && (e.keyCode < 112 || e.keyCode > 123)) e.preventDefault();
    };
    window.addEventListener("keydown", this.down);
    window.addEventListener("keyup", this.up);
    this.keyDown = function (keycode) {
      return keys[keycode];
    }
    this.reset = function () {
      keys = [];
    };
    this.noPreventDefault = function () {
      prevdef = false;
    }
  });

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
      while (new Date().getTime() > next && skipped < skipUntil) {
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
