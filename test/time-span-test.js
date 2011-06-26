/*
 * time-span-test.js: Tests for the TimeSpan module.
 *
 * (C) Charlie Robbins
 * MIT LICENSE
 *
 */

require.paths.unshift(require('path').join(__dirname, '..', 'lib'));

var vows = require('vows'),
    fs = require('fs'),
    path = require('path'),
    eyes = require('eyes'),
    assert = require('assert'),
    timeSpan = require('time-span');
    
vows.describe('time-span').addBatch({
  "When using the TimeSpan module": {
    "the parse() method": {
      "when passed a TimeSpan string with no days": {
        "should return a valid TimeSpan object": function () {
          var ts = timeSpan.parse("04:03:02.10");
          assert.equal(ts.hours, 4);
          assert.equal(ts.minutes, 3);
          assert.equal(ts.seconds, 2);
          assert.equal(ts.milliseconds, 100);
        }
      },
      "when passed a TimeSpan string with days": {
        "should return a valid TimeSpan object": function () {
          var ts = timeSpan.parse("01:04:03:02.10");
          assert.equal(ts.days, 1);
          assert.equal(ts.hours, 4);
          assert.equal(ts.minutes, 3);
          assert.equal(ts.seconds, 2);
          assert.equal(ts.milliseconds, 100);
        }
      }
    },
    "the test() method": {
      "when passed a TimeSpan string with no days": {
        "should return true": function () {
          assert.isTrue(timeSpan.test("04:03:02.10"));
        }
      },
      "when passed a TimeSpan string with days": {
        "should return true": function () {
          assert.isTrue(timeSpan.test("01:04:03:02.10"));
        }
      },
      "when passed an invalid TimeSpan string": {
        "should return false": function () {
          assert.isFalse(timeSpan.test('xx:00:invalid'));
        }
      }
    },
    "the parseDate() method": {
      "when passed a TimeSpan string with explicit time modifiers": {
        "which do not carry over": {
          "should return the correct value": function () {
            var target = new Date(Date.parse('2010-04-03T12:34:15Z-0230')),
                parsed = timeSpan.parseDate('2010-04-03T12:34:15Z-2HOURS30MINUTES');

            assert.equal(target.toString(), parsed.toString());
          }
        },
        "which carry under": {
          "should return the correct value": function () {
            var target = new Date(Date.parse('2010-03-29T12:34:15Z')),
                parsed = timeSpan.parseDate('2010-04-01T12:34:15Z-72HOURS');

            console.log(target);
            console.log(parsed);

            assert.equal(target.toString(), parsed.toString());
          }
        },
        "which carry over": {
          "should return the correct value": function () {
            var target = new Date(Date.parse('2013-04-03T12:34:15Z')),
                parsed = timeSpan.parseDate('2010-04-03T12:34:15Z+2YEARS365DAYS');

            assert.equal(target.toString(), parsed.toString());
          }
        }
      }
    }
  }
}).export(module);