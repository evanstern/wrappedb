// Wrappedb.js
//
// (c) 2014 Evan Stern <evanmicahstern@gmail.com>
// WrappeDB may be freely distributed under the MIT license.

/* global define */
(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.Wrappedb = factory();
  }
}(this, function() {
  'use strict';

  // `extend` and `derive` taken from https://github.com/dfahlander/Dexie.js
  // implementation of the same.

  function extend(obj, extension) {
    if (typeof extension !== 'object') { extension = extension(); }
    Object.keys(extension).forEach(function(key) {
      obj[key] = extension[key];
    });
    return obj;
  }

  function derive(Child) {
    return {
      from: function(Parent) {
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
        return {
          extend: function(extension) {
            var xtend = typeof extension !== 'object' ? extension(Parent.prototype) : extension;
            extend(Child.prototype, xtend);
          }
        };
      }
    };
  }

  // Custom error class (test)
  var CustomError = function() {
  };
  derive(CustomError).from(Error);

  // Main exportable
  var Wrappedb = function(options) {
    options || (options = {});

    this.initialize(options);
  };

  // Basic table
  var Table = function() { };

  extend(Table.prototype, function() {
    return {
      initialize: function(options) {
        this._ = options._;
      }
    };
  });

  Wrappedb.Table = Table;

  // Basic collection representation of data
  var Collection = function() {
  };

  extend(Collection.prototype, function() {
    return {};
  });

  Wrappedb.Collection = Collection;

  return Wrappedb;
}));
