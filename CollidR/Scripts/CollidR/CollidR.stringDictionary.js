﻿/* CollidR.stringDictionary.js */
/*
 * stringDictionary for CollidR JavaScript Library v0.1.0
 * http://github.com/MisterJames/CollidR
 *
 * Copyright James Chambers and David Paquette. All rights reserved.
 * Licensed under Apache 2.0 https://github.com/MisterJames/CollidR/wiki/CollidR-License
 */
(function ($, window) {
    "use strict";

    $.stringDictionary = function () {
        this.data = {};

        // adds a unique value to the array stored in 'key'
        this.add = function (key, value) {

            var hasKey = this.data[key];
            if (hasKey) {
                if (!this.contains(key, value)) {
                    this.data[key].push(value);
                }
            } else {
                this.data[key] = new Array();
                this.data[key].push(value);
            }
        };

        // attempts to remove the value from the array in 'key'
        this.remove = function (key, value) {

            var values = this.data[key];
            var index = values.indexOf(value);

            if (index > -1) {
                values.splice(index, 1);
            }

        };

        // attempts to remove the value from all keys
        this.removeValue = function (value) {
            var result = new Array();
            for (var key in this.data) {
                var values = this.data[key];
                var index = values.indexOf(value);

                if (index > -1) {
                    values.splice(index, 1);
                    result.push(key);
                }
            }
            return result;
        }

        // dumps the entire map to the console
        this.dumpFields = function () {
            console.log(this.data);
            for (var key in this.data) {
                var values = this.data[key];
                for (var index in values) {
                    var msg = key + ':' + values[index];
                    console.log(msg);
                    $("#foo").append($('<p>').html(msg));
                }
            }
            console.log('-----');
        }

        // checks to see if a value is present in the map
        this.contains = function (key, value) {
            return (this.data[key].indexOf(value) > -1);
        }

        // helper method to get the list of keys
        this.keys = function () {
            var result = new Array();
            for (var key in this.data) {
                result.push(key);
            }
            return result;
        }

        // clears all the data
        this.clear = function () {
            this.data = {};
        }

    };
}(window.jQuery, window));