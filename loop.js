// loop.js - A simple game loop library.
// This file is part of podium's engn.js group of source files.
// Licensed under the MIT license.
// Copyright (C) 2015 Podium
// GitHub Repository: podiumnet/engn.js
(function(window, document, undefined){
  // Create the Loop class.
  window.Loop = function (fps) {
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
