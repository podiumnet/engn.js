// intersect.js - A simple game intersection checker library.
// This file is part of podium's engn.js group of source files.
// Licensed under the MIT license.
// Copyright (C) 2015 Podium
// GitHub Repository: podiumnet/engn.js
(function(window, document, undefined){
  // Create the EngnJS object if it doesn't exist.
  window.engn = window.engn || {};
  // Check for intersection. Adapted from http://stackoverflow.com/questions/2752349/fast-rectangle-to-rectangle-intersection.
  window.engn.checkIntersection = function (xa, ya, wa, ha, xb, yb, wb, hb) {
    var xxa = xa + wa;
    var yya = ya + ha;
    var xxb = xb + wb;
    var yyb = yb + hb;
    return !(xb > xxa || xxb < xa || yb > yya || yyb < ya);
  };
})(this, this.document);
