// engn.js (v1.0.0) - A simple game utilities library.
// Licensed under the MIT license.
// Copyright (C) 2015 Podium
// GitHub Repository: podiumnet/engn.js
(function(window, document, undefined){
  // Create the EngnJS object if it doesn't exist.
  window.engn = window.engn || {};

  // Checks for intersection. Adapted from
  // http://stackoverflow.com/questions/2752349/fast-rectangle-to-rectangle-intersection.
  window.engn.checkIntersection = function (xa, ya, wa, ha, xb, yb, wb, hb) {
    return !(xb > xa + wa || xb + wb < xa || yb > ya + ha || yb + hb < ya);
  };

  // Create the Loop class.
  window.engn.Loop = function (fps) {
    var tUpdate = []; // Bindings for game updates.
    var tRender = []; // Bindings for game renders.
    // Trigger the bindings for game renders.
    var render = function () {
      tRender.forEach(function(callback) {
        callback();
      });
    };
    // Trigger the bindings for game updates.
    var update = function () {
      tUpdate.forEach(function(callback) {
        callback();
      });
    };
    // Reset data about the game loops for a fresh start.
    var resetLoopData = function () {
      skipped = 0;
      interval = 1000 / fps;
      skipUntil = 10;
      next = new Date().getTime();
      frozen = false;
    };
    // This is the loop function that is called repeatedly forever (or until frozen.)
    var loop = function () {
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
      resetLoopData();
      requestAnimationFrame(loop);
      return this;
    };
    // Bind a new function to the update event.
    this.onUpdate = function (callback) {
      tUpdate.push(callback);
      return this;
    };
    // Bind a new function to the render event.
    this.onRender = function (callback) {
      tRender.push(callback);
      return this;
    };
  };
})(this, this.document);
