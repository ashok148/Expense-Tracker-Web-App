import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS
} from "/build/_shared/chunk-O7YBTOWT.js";

// node_modules/mongoose/dist/browser.umd.js
var require_browser_umd = __commonJS({
  "node_modules/mongoose/dist/browser.umd.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.mongoose = e() : t.mongoose = e();
    }("undefined" != typeof self ? self : exports, () => (() => {
      var t = { 5507: (t2, e2, r2) => {
        "use strict";
        t2.exports = r2(1735);
      }, 1735: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === o(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        r2(9906).set(r2(6333));
        var u = r2(4304), c = r2(6755);
        u.setBrowser(true), Object.defineProperty(e2, "Promise", { get: function() {
          return c.get();
        }, set: function(t3) {
          c.set(t3);
        } }), e2.PromiseProvider = c, e2.Error = r2(4888), e2.Schema = r2(5506), e2.Types = r2(8941), e2.VirtualType = r2(459), e2.SchemaType = r2(4289), e2.utils = r2(6872), e2.Document = u(), e2.model = function(t3, r3) {
          var n2 = function(t4) {
            !function(t5, e4) {
              if ("function" != typeof e4 && null !== e4)
                throw new TypeError("Super expression must either be null or a function");
              t5.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t5, writable: true, configurable: true } }), Object.defineProperty(t5, "prototype", { writable: false }), e4 && i(t5, e4);
            }(c2, t4);
            var e3, n3, o2, u2 = (n3 = c2, o2 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (t5) {
                return false;
              }
            }(), function() {
              var t5, e4 = a(n3);
              if (o2) {
                var r4 = a(this).constructor;
                t5 = Reflect.construct(e4, arguments, r4);
              } else
                t5 = e4.apply(this, arguments);
              return s(this, t5);
            });
            function c2(t5, e4) {
              return function(t6, e5) {
                if (!(t6 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, c2), u2.call(this, t5, r3, e4);
            }
            return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
          }(e2.Document);
          return n2.modelName = t3, n2;
        }, "undefined" != typeof window && (window.mongoose = t2.exports, window.Buffer = n);
      }, 3434: (t2, e2, r2) => {
        "use strict";
        var n = r2(8727), o = r2(9620).EventEmitter, i = r2(4888), s = r2(5506), a = r2(6079), u = i.ValidationError, c = r2(8859), f = r2(5721);
        function l(t3, e3, r3, o2, u2) {
          if (!(this instanceof l))
            return new l(t3, e3, r3, o2, u2);
          if (f(e3) && !e3.instanceOfSchema && (e3 = new s(e3)), e3 = this.schema || e3, !this.schema && e3.options._id && void 0 === (t3 = t3 || {})._id && (t3._id = new a()), !e3)
            throw new i.MissingSchemaError();
          for (var p in this.$__setSchema(e3), n.call(this, t3, r3, o2, u2), c(this, e3, { decorateDoc: true }), e3.methods)
            this[p] = e3.methods[p];
          for (var h in e3.statics)
            this[h] = e3.statics[h];
        }
        l.prototype = Object.create(n.prototype), l.prototype.constructor = l, l.events = new o(), l.$emitter = new o(), ["on", "once", "emit", "listeners", "removeListener", "setMaxListeners", "removeAllListeners", "addListener"].forEach(function(t3) {
          l[t3] = function() {
            return l.$emitter[t3].apply(l.$emitter, arguments);
          };
        }), l.ValidationError = u, t2.exports = l;
      }, 6787: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return o(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, i2 = function() {
              };
              return { s: i2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: i2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function i(t3) {
          return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, i(t3);
        }
        var s = r2(1795), a = r2(3328), u = r2(5251), c = r2(9739), f = r2(6495), l = r2(9981), p = r2(1981), h = r2(2392), y = r2(9627), d = r2(8751), m = r2(5721), v = r2(6584), b = ["Polygon", "MultiPolygon"];
        function g(t3, e3, r3) {
          if (Array.isArray(t3))
            t3.forEach(function(n3, o3) {
              if (Array.isArray(n3) || m(n3))
                return g(n3, e3, r3);
              t3[o3] = e3.castForQueryWrapper({ val: n3, context: r3 });
            });
          else
            for (var n2 = Object.keys(t3), o2 = n2.length; o2--; ) {
              var i2 = n2[o2], s2 = t3[i2];
              Array.isArray(s2) || m(s2) ? (g(s2, e3, r3), t3[i2] = s2) : t3[i2] = e3.castForQuery({ val: s2, context: r3 });
            }
        }
        function _(t3, e3, r3, n2) {
          if ("strictQuery" in t3)
            return t3.strictQuery;
          if ("strict" in t3)
            return t3.strict;
          if ("strictQuery" in e3)
            return e3.strictQuery;
          if ("strict" in e3)
            return e3.strict;
          var o2 = n2.mongooseCollection && n2.mongooseCollection.conn && n2.mongooseCollection.conn.base && n2.mongooseCollection.conn.base.options;
          if (o2) {
            if ("strictQuery" in o2)
              return o2.strictQuery;
            if ("strict" in o2)
              return o2.strict;
          }
          return r3.strictQuery;
        }
        t2.exports = function t3(e3, r3, o2, w) {
          if (Array.isArray(r3))
            throw new Error("Query filter must be an object, got an array ", d.inspect(r3));
          if (null == r3)
            return r3;
          null != e3 && null != e3.discriminators && null != r3[e3.options.discriminatorKey] && (e3 = h(e3, r3[e3.options.discriminatorKey]) || e3);
          var O, $, S, j, A, P, E = Object.keys(r3), x = E.length;
          for (o2 = o2 || {}; x--; )
            if (P = r3[j = E[x]], "$or" === j || "$nor" === j || "$and" === j) {
              if (!Array.isArray(P))
                throw new s("Array", P, j);
              for (var k = 0; k < P.length; ++k) {
                if (null == P[k] || "object" !== i(P[k]))
                  throw new s("Object", P[k], j + "." + k);
                P[k] = t3(e3, P[k], o2, w);
              }
            } else {
              if ("$where" === j) {
                if ("string" !== (A = i(P)) && "function" !== A)
                  throw new Error("Must have a string or function for $where");
                "function" === A && (r3[j] = P.toString());
                continue;
              }
              if ("$expr" === j) {
                P = c(P, e3);
                continue;
              }
              if ("$elemMatch" === j)
                P = t3(e3, P, o2, w);
              else if ("$text" === j)
                P = f(P, j);
              else {
                if (!e3)
                  continue;
                if (!($ = e3.path(j)))
                  for (var M = j.split("."), T = M.length; T--; ) {
                    var N = M.slice(0, T).join("."), R = M.slice(T).join("."), I = e3.path(N), D = I && I.schema && I.schema.options && I.schema.options.discriminatorKey;
                    if (null != I && null != (I.schema && I.schema.discriminators) && null != D && R !== D) {
                      var C = l(r3, N + "." + D);
                      null != C && ($ = I.schema.discriminators[C].path(R));
                    }
                  }
                if ($) {
                  if (null == P)
                    continue;
                  if ("Object" === p(P))
                    if (Object.keys(P).some(y))
                      for (var B = Object.keys(P), U = void 0, F = B.length; F--; )
                        if (S = P[U = B[F]], "$not" === U) {
                          if (S && $) {
                            if ((O = Object.keys(S)).length && y(O[0]))
                              for (var L in S)
                                S[L] = $.castForQueryWrapper({ $conditional: L, val: S[L], context: w });
                            else
                              P[U] = $.castForQueryWrapper({ $conditional: U, val: S, context: w });
                            continue;
                          }
                        } else
                          P[U] = $.castForQueryWrapper({ $conditional: U, val: S, context: w });
                    else
                      r3[j] = $.castForQueryWrapper({ val: P, context: w });
                  else if (Array.isArray(P) && -1 === ["Buffer", "Array"].indexOf($.instance)) {
                    var q, V = [], W = n(P);
                    try {
                      for (W.s(); !(q = W.n()).done; ) {
                        var J = q.value;
                        V.push($.castForQueryWrapper({ val: J, context: w }));
                      }
                    } catch (t4) {
                      W.e(t4);
                    } finally {
                      W.f();
                    }
                    r3[j] = { $in: V };
                  } else
                    r3[j] = $.castForQueryWrapper({ val: P, context: w });
                } else {
                  for (var H = j.split("."), K = H.length, z = void 0, Q = void 0, G = void 0; K-- && (z = H.slice(0, K).join("."), !($ = e3.path(z))); )
                    ;
                  if ($) {
                    if ($.caster && $.caster.schema) {
                      (G = {})[Q = H.slice(K).join(".")] = P;
                      var Y = t3($.caster.schema, G, o2, w)[Q];
                      void 0 === Y ? delete r3[j] : r3[j] = Y;
                    } else
                      r3[j] = P;
                    continue;
                  }
                  if (m(P)) {
                    var Z = "";
                    if (P.$near ? Z = "$near" : P.$nearSphere ? Z = "$nearSphere" : P.$within ? Z = "$within" : P.$geoIntersects ? Z = "$geoIntersects" : P.$geoWithin && (Z = "$geoWithin"), Z) {
                      var X = new u.Number("__QueryCasting__"), tt = P[Z];
                      if (null != P.$maxDistance && (P.$maxDistance = X.castForQueryWrapper({ val: P.$maxDistance, context: w })), null != P.$minDistance && (P.$minDistance = X.castForQueryWrapper({ val: P.$minDistance, context: w })), "$within" === Z) {
                        var et = tt.$center || tt.$centerSphere || tt.$box || tt.$polygon;
                        if (!et)
                          throw new Error("Bad $within parameter: " + JSON.stringify(P));
                        tt = et;
                      } else if ("$near" === Z && "string" == typeof tt.type && Array.isArray(tt.coordinates))
                        tt = tt.coordinates;
                      else if (("$near" === Z || "$nearSphere" === Z || "$geoIntersects" === Z) && tt.$geometry && "string" == typeof tt.$geometry.type && Array.isArray(tt.$geometry.coordinates))
                        null != tt.$maxDistance && (tt.$maxDistance = X.castForQueryWrapper({ val: tt.$maxDistance, context: w })), null != tt.$minDistance && (tt.$minDistance = X.castForQueryWrapper({ val: tt.$minDistance, context: w })), v(tt.$geometry) && (tt.$geometry = tt.$geometry.toObject({ transform: false, virtuals: false })), tt = tt.$geometry.coordinates;
                      else if ("$geoWithin" === Z)
                        if (tt.$geometry) {
                          v(tt.$geometry) && (tt.$geometry = tt.$geometry.toObject({ virtuals: false }));
                          var rt = tt.$geometry.type;
                          if (-1 === b.indexOf(rt))
                            throw new Error('Invalid geoJSON type for $geoWithin "' + rt + '", must be "Polygon" or "MultiPolygon"');
                          tt = tt.$geometry.coordinates;
                        } else
                          tt = tt.$box || tt.$polygon || tt.$center || tt.$centerSphere, v(tt) && (tt = tt.toObject({ virtuals: false }));
                      g(tt, X, w);
                      continue;
                    }
                  }
                  if (e3.nested[j])
                    continue;
                  var nt = "strict" in o2 ? o2.strict : e3.options.strict, ot = _(o2, e3._userProvidedOptions, e3.options, w);
                  if (o2.upsert && nt) {
                    if ("throw" === nt)
                      throw new a(j);
                    throw new a(j, 'Path "' + j + '" is not in schema, strict mode is `true`, and upsert is `true`.');
                  }
                  if ("throw" === ot)
                    throw new a(j, 'Path "' + j + `" is not in schema and strictQuery is 'throw'.`);
                  ot && delete r3[j];
                }
              }
            }
          return r3;
        };
      }, 6670: (t2, e2, r2) => {
        "use strict";
        var n = r2(1795);
        t2.exports = function(e3, r3) {
          if (t2.exports.convertToTrue.has(e3))
            return true;
          if (t2.exports.convertToFalse.has(e3))
            return false;
          if (null == e3)
            return e3;
          throw new n("boolean", e3, r3);
        }, t2.exports.convertToTrue = /* @__PURE__ */ new Set([true, "true", 1, "1", "yes"]), t2.exports.convertToFalse = /* @__PURE__ */ new Set([false, "false", 0, "0", "no"]);
      }, 195: (t2, e2, r2) => {
        "use strict";
        var n = r2(9373);
        t2.exports = function(t3) {
          return null == t3 || "" === t3 ? null : t3 instanceof Date ? (n.ok(!isNaN(t3.valueOf())), t3) : (n.ok("boolean" != typeof t3), e3 = t3 instanceof Number || "number" == typeof t3 ? new Date(t3) : "string" == typeof t3 && !isNaN(Number(t3)) && (Number(t3) >= 275761 || Number(t3) < -271820) ? new Date(Number(t3)) : "function" == typeof t3.valueOf ? new Date(t3.valueOf()) : new Date(t3), isNaN(e3.valueOf()) ? void n.ok(false) : e3);
          var e3;
        };
      }, 6209: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        var i = r2(5003), s = r2(9373);
        t2.exports = function(t3) {
          return null == t3 ? t3 : "object" === o(t3) && "string" == typeof t3.$numberDecimal ? i.fromString(t3.$numberDecimal) : t3 instanceof i ? t3 : "string" == typeof t3 ? i.fromString(t3) : n.isBuffer(t3) ? new i(t3) : "number" == typeof t3 ? i.fromString(String(t3)) : "function" == typeof t3.valueOf && "string" == typeof t3.valueOf() ? i.fromString(t3.valueOf()) : void s.ok(false);
        };
      }, 3065: (t2, e2, r2) => {
        "use strict";
        var n = r2(9373);
        t2.exports = function(t3) {
          return null == t3 ? t3 : "" === t3 ? null : ("string" != typeof t3 && "boolean" != typeof t3 || (t3 = Number(t3)), n.ok(!isNaN(t3)), t3 instanceof Number ? t3.valueOf() : "number" == typeof t3 ? t3 : Array.isArray(t3) || "function" != typeof t3.valueOf ? t3.toString && !Array.isArray(t3) && t3.toString() == Number(t3) ? Number(t3) : void n.ok(false) : Number(t3.valueOf()));
        };
      }, 4731: (t2, e2, r2) => {
        "use strict";
        var n = r2(1563), o = r2(9906).get().ObjectId;
        t2.exports = function(t3) {
          if (null == t3)
            return t3;
          if (n(t3, "ObjectID"))
            return t3;
          if (t3._id) {
            if (n(t3._id, "ObjectID"))
              return t3._id;
            if (t3._id.toString instanceof Function)
              return new o(t3._id.toString());
          }
          return t3.toString instanceof Function ? new o(t3.toString()) : new o(t3);
        };
      }, 2417: (t2, e2, r2) => {
        "use strict";
        var n = r2(1795);
        t2.exports = function(t3, e3) {
          if (null == t3)
            return t3;
          if (t3._id && "string" == typeof t3._id)
            return t3._id;
          if (t3.toString && t3.toString !== Object.prototype.toString && !Array.isArray(t3))
            return t3.toString();
          throw new n("string", t3, e3);
        };
      }, 8727: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t3);
            e3 && (n2 = n2.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r3.push.apply(r3, n2);
          }
          return r3;
        }
        function o(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? n(Object(r3), true).forEach(function(e4) {
              i(t3, e4, r3[e4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : n(Object(r3)).forEach(function(e4) {
              Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
            });
          }
          return t3;
        }
        function i(t3, e3, r3) {
          return (e3 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== u(t5) || null === t5)
                return t5;
              var r4 = t5[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var n2 = r4.call(t5, "string");
                if ("object" !== u(n2))
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t5);
            }(t4);
            return "symbol" === u(e4) ? e4 : String(e4);
          }(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        function s(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return a(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? a(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, s2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return s2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, i2 = t4;
          }, f: function() {
            try {
              s2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw i2;
            }
          } };
        }
        function a(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function u(t3) {
          return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, u(t3);
        }
        var c, f, l, p = r2(9620).EventEmitter, h = r2(6379), y = r2(4888), d = r2(3861), m = r2(4107), v = r2(900), b = r2(7962), g = r2(5506), _ = r2(3328), w = r2(122), O = r2(2037), $ = r2(459), S = r2(7427), j = r2(8486), A = r2(3065), P = r2(2874), E = r2(4134), x = r2(8724).M, k = r2(8724).c, M = r2(2829).x, T = r2(207), N = r2(9981), R = r2(111), I = r2(37), D = r2(719), C = r2(1490), B = r2(2183), U = r2(9098), F = r2(8751).inspect, L = r2(4962).h, q = r2(5837), V = r2(3564), W = r2(2888), J = r2(6872), H = r2(5543), K = J.clone, z = J.deepEqual, Q = J.isMongooseObject, G = r2(8770).arrayAtomicsBackupSymbol, Y = r2(8770).arrayAtomicsSymbol, Z = r2(8770).documentArrayParent, X = r2(8770).documentIsModified, tt = r2(8770).documentModifiedPaths, et = r2(8770).documentSchemaSymbol, rt = r2(8770).getSymbol, nt = r2(8770).populateModelSymbol, ot = r2(8770).scopeSymbol, it = r2(8107).schemaMixedSymbol, st = r2(251), at = J.specialProperties;
        function ut(t3, e3, r3, n2) {
          if ("object" === u(r3) && null != r3 && (r3 = (n2 = r3).skipId), n2 = Object.assign({}, n2), null == this.$__schema) {
            var o2 = J.isObject(e3) && !e3.instanceOfSchema ? new g(e3) : e3;
            this.$__setSchema(o2), e3 = r3, r3 = n2, n2 = arguments[4] || {};
          }
          if (this.$__ = new h(), null != n2.isNew && true !== n2.isNew && (this.$isNew = n2.isNew), null != n2.priorDoc && (this.$__.priorDoc = n2.priorDoc), r3 && (this.$__.skipId = r3), null != t3 && "object" !== u(t3))
            throw new v(t3, "obj", "Document");
          var i2 = true;
          void 0 !== n2.defaults && (this.$__.defaults = n2.defaults, i2 = n2.defaults);
          var a2 = this.$__schema;
          "boolean" == typeof e3 || "throw" === e3 ? (true !== e3 && (this.$__.strictMode = e3), e3 = void 0) : true !== a2.options.strict && (this.$__.strictMode = a2.options.strict);
          var c2, f2 = a2.requiredPaths(true), l2 = s(f2);
          try {
            for (l2.s(); !(c2 = l2.n()).done; ) {
              var p2 = c2.value;
              this.$__.activePaths.require(p2);
            }
          } catch (t4) {
            l2.e(t4);
          } finally {
            l2.f();
          }
          var y2 = null;
          J.isPOJO(e3) && Object.keys(e3).length > 0 && (y2 = U(e3), this.$__.selected = e3, this.$__.exclude = y2);
          var d2 = false === y2 && e3 ? S(e3) : null;
          if (null == this._doc && (this.$__buildDoc(t3, e3, r3, y2, d2, false), i2 && P(this, e3, y2, d2, true, null)), t3 && (this.$__original_set ? this.$__original_set(t3, void 0, true, n2) : this.$set(t3, void 0, true, n2), t3 instanceof ut && (this.$isNew = t3.$isNew)), n2.willInit && i2 ? n2.skipDefaults && (this.$__.skipDefaults = n2.skipDefaults) : i2 && P(this, e3, y2, d2, false, n2.skipDefaults), !this.$__.strictMode && t3) {
            var m2 = this, b2 = Object.keys(this._doc);
            b2.forEach(function(t4) {
              t4 in a2.tree || t4 in a2.methods || t4 in a2.virtuals || t4.startsWith("$") || k({ prop: t4, subprops: null, prototype: m2 });
            });
          }
          mt(this);
        }
        for (var ct in Object.defineProperty(ut.prototype, "isNew", { get: function() {
          return this.$isNew;
        }, set: function(t3) {
          this.$isNew = t3;
        } }), Object.defineProperty(ut.prototype, "errors", { get: function() {
          return this.$errors;
        }, set: function(t3) {
          this.$errors = t3;
        } }), ut.prototype.$isNew = true, J.each(["on", "once", "emit", "listeners", "removeListener", "setMaxListeners", "removeAllListeners", "addListener"], function(t3) {
          ut.prototype[t3] = function() {
            if (!this.$__.emitter) {
              if ("emit" === t3)
                return;
              this.$__.emitter = new p(), this.$__.emitter.setMaxListeners(0);
            }
            return this.$__.emitter[t3].apply(this.$__.emitter, arguments);
          }, ut.prototype["$".concat(t3)] = ut.prototype[t3];
        }), ut.prototype.constructor = ut, p.prototype)
          ut[ct] = p.prototype[ct];
        function ft(t3, e3, r3) {
          if (null != t3) {
            T(t3);
            for (var n2 = Object.keys(r3.$__schema.paths), o2 = n2.length, i2 = -1 === e3.indexOf(".") ? [e3] : e3.split("."), s2 = 0; s2 < o2; ++s2) {
              var a2 = "", u2 = n2[s2];
              if (u2.startsWith(e3 + ".")) {
                var c2 = r3.$__schema.paths[u2], f2 = c2.splitPath().slice(i2.length), l2 = f2.length;
                if (void 0 !== c2.defaultValue)
                  for (var p2 = t3, h2 = 0; h2 < l2 && null != p2; ++h2) {
                    var y2 = f2[h2];
                    if (h2 === l2 - 1) {
                      if (void 0 !== p2[y2])
                        break;
                      try {
                        var d2 = c2.getDefault(r3, false);
                        void 0 !== d2 && (p2[y2] = d2);
                      } catch (t4) {
                        r3.invalidate(e3 + "." + a2, t4);
                        break;
                      }
                      break;
                    }
                    a2 += (a2.length ? "." : "") + y2, p2[y2] = p2[y2] || {}, p2 = p2[y2];
                  }
              }
            }
          }
        }
        function lt(t3, e3, r3, n2, o2) {
          o2 = o2 || "";
          for (var i2, s2, a2, u2 = Object.keys(e3), c2 = u2.length, f2 = 0, l2 = t3.$__.strictMode, p2 = t3.$__schema; f2 < c2; )
            h2(f2++);
          function h2(c3) {
            if (a2 = u2[c3], s2 = o2 + a2, i2 = p2.path(s2), !p2.$isRootDiscriminator || t3.$__isSelected(s2))
              if (!i2 && J.isPOJO(e3[a2]))
                r3[a2] || (r3[a2] = {}, l2 || a2 in p2.tree || a2 in p2.methods || a2 in p2.virtuals || (t3[a2] = r3[a2])), lt(t3, e3[a2], r3[a2], n2, s2 + ".");
              else if (i2) {
                if (r3.hasOwnProperty(a2) && void 0 !== e3[a2] && delete r3[a2], null === e3[a2])
                  r3[a2] = i2._castNullish(null);
                else if (void 0 !== e3[a2]) {
                  var f3 = null == e3[a2].$__ ? null : e3[a2].$__.wasPopulated;
                  if (i2 && !f3)
                    try {
                      n2 && n2.setters ? r3[a2] = i2.applySetters(e3[a2], t3, false) : r3[a2] = i2.cast(e3[a2], t3, true);
                    } catch (e4) {
                      t3.invalidate(e4.path, new O({ path: e4.path, message: e4.message, type: "cast", value: e4.value, reason: e4 }));
                    }
                  else
                    r3[a2] = e3[a2];
                }
                t3.$isModified(s2) || t3.$__.activePaths.init(s2);
              } else
                r3[a2] = e3[a2], l2 || o2 || (t3[a2] = e3[a2]);
          }
        }
        function pt(t3) {
          if (null == t3)
            return true;
          if ("object" !== u(t3) || Array.isArray(t3))
            return false;
          for (var e3 = 0, r3 = Object.keys(t3); e3 < r3.length; e3++)
            if (!pt(t3[r3[e3]]))
              return false;
          return true;
        }
        function ht(t3) {
          var e3 = {};
          !function(t4) {
            var e4 = Object.keys(t4.$__.activePaths.getStatePaths("require")), r4 = 0, n3 = e4.length;
            for (r4 = 0; r4 < n3; ++r4) {
              var o3 = e4[r4], i3 = t4.$__schema.path(o3);
              if (null != i3 && "function" == typeof i3.originalRequiredValue) {
                t4.$__.cachedRequired = t4.$__.cachedRequired || {};
                try {
                  t4.$__.cachedRequired[o3] = i3.originalRequiredValue.call(t4, t4);
                } catch (e5) {
                  t4.invalidate(o3, e5);
                }
              }
            }
          }(t3);
          var r3 = new Set(Object.keys(t3.$__.activePaths.getStatePaths("require")).filter(function(e4) {
            return !(!t3.$__isSelected(e4) && !t3.$isModified(e4)) && (null == t3.$__.cachedRequired || !(e4 in t3.$__.cachedRequired) || t3.$__.cachedRequired[e4]);
          }));
          function n2(t4) {
            r3.add(t4);
          }
          Object.keys(t3.$__.activePaths.getStatePaths("init")).forEach(n2), Object.keys(t3.$__.activePaths.getStatePaths("modify")).forEach(n2), Object.keys(t3.$__.activePaths.getStatePaths("default")).forEach(n2);
          var o2, i2 = t3.$getAllSubdocs(), a2 = t3.modifiedPaths(), u2 = s(i2);
          try {
            for (u2.s(); !(o2 = u2.n()).done; ) {
              var c2 = o2.value;
              if (c2.$basePath) {
                var f2, l2 = c2.$__fullPathWithIndexes(), p2 = s(r3);
                try {
                  for (p2.s(); !(f2 = p2.n()).done; ) {
                    var h2 = f2.value;
                    (null == h2 || h2.startsWith(l2 + ".")) && r3.delete(h2);
                  }
                } catch (t4) {
                  p2.e(t4);
                } finally {
                  p2.f();
                }
                !t3.$isModified(l2, a2) || t3.isDirectModified(l2) || t3.$isDefault(l2) || (r3.add(l2), e3[l2] = true);
              }
            }
          } catch (t4) {
            u2.e(t4);
          } finally {
            u2.f();
          }
          var y2, d2 = s(r3);
          try {
            for (d2.s(); !(y2 = d2.n()).done; ) {
              var m2 = y2.value, v2 = t3.$__schema.path(m2);
              if (v2) {
                if (v2.$isMongooseDocumentArray) {
                  var b2, g2 = s(r3);
                  try {
                    for (g2.s(); !(b2 = g2.n()).done; ) {
                      var _2 = b2.value;
                      (null == _2 || _2.startsWith(v2.path + ".")) && r3.delete(_2);
                    }
                  } catch (t4) {
                    g2.e(t4);
                  } finally {
                    g2.f();
                  }
                }
                (v2.caster || 0 !== v2.validators.length) && (!v2.$isMongooseArray || v2.$isMongooseDocumentArray || v2.$embeddedSchemaType.$isMongooseArray || 0 !== v2.validators.length || 0 !== v2.$embeddedSchemaType.validators.length) || r3.delete(m2);
              }
            }
          } catch (t4) {
            d2.e(t4);
          } finally {
            d2.f();
          }
          var w2, O2 = s(r3);
          try {
            for (O2.s(); !(w2 = O2.n()).done; ) {
              var $2 = w2.value, S2 = t3.$__schema.path($2);
              S2 && S2.$isMongooseArray && (Array.isArray(S2) || !S2.$isMongooseDocumentArray || S2 && S2.schemaOptions && S2.schemaOptions.required) && (!S2.$isMongooseArray || S2.$isMongooseDocumentArray || S2.$embeddedSchemaType.$isMongooseArray || 0 !== S2.$embeddedSchemaType.validators.length) && j2(t3.$__getValue($2), r3, $2);
            }
          } catch (t4) {
            O2.e(t4);
          } finally {
            O2.f();
          }
          function j2(t4, e4, r4) {
            if (null != t4)
              for (var n3 = t4.length, o3 = 0; o3 < n3; ++o3)
                Array.isArray(t4[o3]) ? j2(t4[o3], e4, r4 + "." + o3) : e4.add(r4 + "." + o3);
          }
          var A2, P2 = { skipArrays: true }, E2 = s(r3);
          try {
            for (E2.s(); !(A2 = E2.n()).done; ) {
              var x2 = A2.value;
              if (t3.$__schema.nested[x2]) {
                var k2 = t3.$__getValue(x2);
                Q(k2) && (k2 = k2.toObject({ transform: false }));
                var T2 = M(k2, x2, P2, t3.$__schema);
                Object.keys(T2).forEach(n2);
              }
            }
          } catch (t4) {
            E2.e(t4);
          } finally {
            E2.f();
          }
          var N2, R2 = s(r3);
          try {
            for (R2.s(); !(N2 = R2.n()).done; ) {
              var I2 = N2.value;
              if (t3.$__schema.singleNestedPaths.hasOwnProperty(I2))
                r3.delete(I2);
              else {
                var D2 = t3.$__schema.path(I2);
                if (D2 && D2.$isSchemaMap) {
                  var C2 = t3.$__getValue(I2);
                  if (null != C2) {
                    var B2, U2 = s(C2.keys());
                    try {
                      for (U2.s(); !(B2 = U2.n()).done; ) {
                        var F2 = B2.value;
                        r3.add(I2 + "." + F2);
                      }
                    } catch (t4) {
                      U2.e(t4);
                    } finally {
                      U2.f();
                    }
                  }
                }
              }
            }
          } catch (t4) {
            R2.e(t4);
          } finally {
            R2.f();
          }
          return [r3 = Array.from(r3), e3];
        }
        function yt(t3, e3) {
          var r3, n2 = new Set(e3), o2 = /* @__PURE__ */ new Map([]), i2 = s(e3);
          try {
            for (i2.s(); !(r3 = i2.n()).done; ) {
              var a2 = r3.value;
              if (-1 !== a2.indexOf("."))
                for (var u2 = a2.split("."), c2 = u2[0], f2 = 1; f2 < u2.length; ++f2)
                  o2.set(c2, a2), c2 = c2 + "." + u2[f2];
            }
          } catch (t4) {
            i2.e(t4);
          } finally {
            i2.f();
          }
          var l2, p2 = [], h2 = s(t3);
          try {
            for (h2.s(); !(l2 = h2.n()).done; ) {
              var y2 = l2.value;
              n2.has(y2) ? p2.push(y2) : o2.has(y2) && p2.push(o2.get(y2));
            }
          } catch (t4) {
            h2.e(t4);
          } finally {
            h2.f();
          }
          return p2;
        }
        function dt(t3, e3) {
          return e3 = new Set(e3), t3.filter(function(t4) {
            return !e3.has(t4);
          });
        }
        function mt(t3) {
          var e3 = t3.$__schema && t3.$__schema.callQueue;
          if (e3.length) {
            var r3, n2 = s(e3);
            try {
              for (n2.s(); !(r3 = n2.n()).done; ) {
                var o2 = r3.value;
                "pre" !== o2[0] && "post" !== o2[0] && "on" !== o2[0] && t3[o2[0]].apply(t3, o2[1]);
              }
            } catch (t4) {
              n2.e(t4);
            } finally {
              n2.f();
            }
          }
        }
        function vt(t3) {
          for (var e3, r3, n2, o2 = Object.keys(t3), i2 = o2.length; i2--; )
            n2 = t3[r3 = o2[i2]], J.isPOJO(n2) && (t3[r3] = vt(n2)), void 0 !== t3[r3] ? e3 = true : delete t3[r3];
          return e3 ? t3 : void 0;
        }
        function bt(t3, e3, r3, n2) {
          var o2, i2, s2, a2 = t3.$__schema, u2 = Object.keys(a2.virtuals), c2 = u2.length, f2 = c2, l2 = t3._doc, p2 = "boolean" != typeof (n2 && n2.aliases) || n2.aliases, h2 = null;
          if (Array.isArray(r3.virtuals))
            h2 = new Set(r3.virtuals);
          else if (r3.virtuals && r3.virtuals.pathsToSkip) {
            h2 = new Set(u2);
            for (var y2 = 0; y2 < r3.virtuals.pathsToSkip.length; y2++)
              h2.has(r3.virtuals.pathsToSkip[y2]) && h2.delete(r3.virtuals.pathsToSkip[y2]);
          }
          if (!l2)
            return e3;
          for (r3 = r3 || {}, c2 = 0; c2 < f2; ++c2)
            if (o2 = u2[c2], (null == h2 || h2.has(o2)) && (p2 || !a2.aliases.hasOwnProperty(o2))) {
              if (i2 = o2, null != r3.path) {
                if (!o2.startsWith(r3.path + "."))
                  continue;
                i2 = o2.substring(r3.path.length + 1);
              }
              var d2 = i2.split(".");
              if (void 0 !== (s2 = K(t3.get(o2), r3))) {
                var m2 = d2.length;
                l2 = e3;
                for (var v2 = 0; v2 < m2 - 1; ++v2)
                  l2[d2[v2]] = l2[d2[v2]] || {}, l2 = l2[d2[v2]];
                l2[d2[m2 - 1]] = s2;
              }
            }
          return e3;
        }
        function gt(t3, e3) {
          if (H(e3))
            throw new Error("`transform` function must be synchronous, but the transform on path `" + t3 + "` returned a promise.");
        }
        ut.prototype.$__schema, ut.prototype.schema, Object.defineProperty(ut.prototype, "$locals", { configurable: false, enumerable: false, get: function() {
          return null == this.$__.locals && (this.$__.locals = {}), this.$__.locals;
        }, set: function(t3) {
          this.$__.locals = t3;
        } }), ut.prototype.isNew, Object.defineProperty(ut.prototype, "$where", { configurable: false, enumerable: false, writable: true }), ut.prototype.id, ut.prototype.$errors, Object.defineProperty(ut.prototype, "$op", { get: function() {
          return this.$__.op || null;
        }, set: function(t3) {
          this.$__.op = t3;
        } }), ut.prototype.$__buildDoc = function(t3, e3, r3, n2, o2) {
          for (var i2 = {}, s2 = Object.keys(this.$__schema.paths).filter(function(t4) {
            return !t4.includes("$*");
          }), a2 = s2.length, u2 = 0; u2 < a2; ++u2) {
            var c2 = s2[u2];
            if ("_id" === c2) {
              if (r3)
                continue;
              if (t3 && "_id" in t3)
                continue;
            }
            for (var f2 = this.$__schema.paths[c2].splitPath(), l2 = f2.length, p2 = l2 - 1, h2 = "", y2 = i2, d2 = false, m2 = 0; m2 < l2; ++m2) {
              var v2 = f2[m2];
              if (h2.length ? h2 += "." + v2 : h2 = v2, true === n2) {
                if (h2 in e3)
                  break;
              } else if (false === n2 && e3 && !d2) {
                if (h2 in e3)
                  d2 = true;
                else if (!o2[h2])
                  break;
              }
              m2 < p2 && (y2 = y2[v2] || (y2[v2] = {}));
            }
          }
          this._doc = i2;
        }, ut.prototype.toBSON = function() {
          return this.toObject(L);
        }, ut.prototype.init = function(t3, e3, r3) {
          return "function" == typeof e3 && (r3 = e3, e3 = null), this.$__init(t3, e3), r3 && r3(null, this), this;
        }, ut.prototype.$init = function() {
          return this.constructor.prototype.init.apply(this, arguments);
        }, ut.prototype.$__init = function(t3, e3) {
          if (this.$isNew = false, e3 = e3 || {}, null != t3._id && e3.populated && e3.populated.length) {
            var r3, n2 = String(t3._id), o2 = s(e3.populated);
            try {
              for (o2.s(); !(r3 = o2.n()).done; ) {
                var i2 = r3.value;
                if (i2.isVirtual ? this.$populated(i2.path, J.getValue(i2.path, t3), i2) : this.$populated(i2.path, i2._docs[n2], i2), null != i2._childDocs) {
                  var a2, u2 = s(i2._childDocs);
                  try {
                    for (u2.s(); !(a2 = u2.n()).done; ) {
                      var c2 = a2.value;
                      null != c2 && null != c2.$__ && (c2.$__.parent = this);
                    }
                  } catch (t4) {
                    u2.e(t4);
                  } finally {
                    u2.f();
                  }
                  i2._childDocs = [];
                }
              }
            } catch (t4) {
              o2.e(t4);
            } finally {
              o2.f();
            }
          }
          lt(this, t3, this._doc, e3), q(this, e3.populated), this.$emit("init", this), this.constructor.emit("init", this);
          var f2 = false === this.$__.exclude && this.$__.selected ? S(this.$__.selected) : null;
          return P(this, this.$__.selected, this.$__.exclude, f2, false, this.$__.skipDefaults), this;
        }, ut.prototype.update = function() {
          var t3 = Array.prototype.slice.call(arguments);
          t3.unshift({ _id: this._id });
          var e3 = this.constructor.update.apply(this.constructor, t3);
          return null != this.$session() && ("session" in e3.options || (e3.options.session = this.$session())), e3;
        }, ut.prototype.updateOne = function(t3, e3, r3) {
          var n2 = this.constructor.updateOne({ _id: this._id }, t3, e3), o2 = this;
          return n2.pre(function(t4) {
            o2.constructor._middleware.execPre("updateOne", o2, [o2], t4);
          }), n2.post(function(t4) {
            o2.constructor._middleware.execPost("updateOne", o2, [o2], {}, t4);
          }), null != this.$session() && ("session" in n2.options || (n2.options.session = this.$session())), null != r3 ? n2.exec(r3) : n2;
        }, ut.prototype.replaceOne = function() {
          var t3 = Array.prototype.slice.call(arguments);
          return t3.unshift({ _id: this._id }), this.constructor.replaceOne.apply(this.constructor, t3);
        }, ut.prototype.$session = function(t3) {
          if (0 === arguments.length)
            return null != this.$__.session && this.$__.session.hasEnded ? (this.$__.session = null, null) : this.$__.session;
          if (null != t3 && t3.hasEnded)
            throw new y("Cannot set a document's session to a session that has ended. Make sure you haven't called `endSession()` on the session you are passing to `$session()`.");
          if (null != t3 || null != this.$__.session) {
            if (this.$__.session = t3, !this.$isSubdocument) {
              var e3, r3 = this.$getAllSubdocs(), n2 = s(r3);
              try {
                for (n2.s(); !(e3 = n2.n()).done; ) {
                  var o2 = e3.value;
                  o2.$session(t3);
                }
              } catch (t4) {
                n2.e(t4);
              } finally {
                n2.f();
              }
            }
            return t3;
          }
        }, ut.prototype.$timestamps = function(t3) {
          if (0 === arguments.length)
            return null != this.$__.timestamps ? this.$__.timestamps : this.$__schema ? this.$__schema.options.timestamps : void 0;
          var e3 = this.$timestamps();
          return t3 !== e3 && (this.$__.timestamps = t3), this;
        }, ut.prototype.overwrite = function(t3) {
          for (var e3 = 0, r3 = Array.from(new Set(Object.keys(this._doc).concat(Object.keys(t3)))); e3 < r3.length; e3++) {
            var n2 = r3[e3];
            "_id" !== n2 && (this.$__schema.options.versionKey && n2 === this.$__schema.options.versionKey || this.$__schema.options.discriminatorKey && n2 === this.$__schema.options.discriminatorKey || this.$set(n2, t3[n2]));
          }
          return this;
        }, ut.prototype.$set = function(t3, e3, r3, n2) {
          var o2 = this;
          J.isPOJO(r3) && (n2 = r3, r3 = void 0);
          var a2, c2, f2, l2, p2 = n2 && n2.merge, h2 = r3 && true !== r3, v2 = true === r3, b2 = 0, g2 = n2 && "strict" in n2 ? n2.strict : this.$__.strictMode;
          if (h2 && ((this.$__.adhocPaths || (this.$__.adhocPaths = {}))[t3] = this.$__schema.interpretAsType(t3, r3, this.$__schema.options)), null == t3) {
            var w2 = [e3, t3];
            t3 = w2[0], e3 = w2[1];
          } else if ("string" != typeof t3) {
            if (t3 instanceof ut && (t3 = t3.$__isNested ? t3.toObject() : t3._doc), null == t3) {
              var O2 = [e3, t3];
              t3 = O2[0], e3 = O2[1];
            }
            l2 = e3 ? e3 + "." : "";
            var $2 = (a2 = I(this.$__schema, t3)).length, S2 = n2 && n2._skipMinimizeTopLevel || false;
            if (0 === $2 && S2)
              return delete n2._skipMinimizeTopLevel, e3 && this.$set(e3, {}), this;
            for (var j2 = 0; j2 < $2; ++j2) {
              var A2 = l2 + (f2 = a2[j2]);
              c2 = this.$__schema.pathType(A2);
              var P2 = t3[f2];
              if (true !== r3 || l2 || null == P2 || "nested" !== c2 || null == this._doc[f2] ? n2 = Object.assign({}, n2, { _skipMinimizeTopLevel: false }) : (delete this._doc[f2], n2 = Object.assign({}, n2, { _skipMinimizeTopLevel: true })), J.isNonBuiltinObject(P2) && "nested" === c2)
                this.$set(l2 + f2, t3[f2], v2, Object.assign({}, n2, { _skipMarkModified: true })), ft(this.$get(l2 + f2), l2 + f2, this);
              else if (g2) {
                if (v2 && void 0 === t3[f2] && void 0 !== this.$get(A2))
                  continue;
                if ("adhocOrUndefined" === c2 && (c2 = R(this, A2, { typeOnly: true })), "real" === c2 || "virtual" === c2) {
                  var x2 = t3[f2];
                  this.$set(l2 + f2, x2, v2, n2);
                } else if ("nested" === c2 && t3[f2] instanceof ut)
                  this.$set(l2 + f2, t3[f2].toObject({ transform: false }), v2, n2);
                else if ("throw" === g2)
                  throw "nested" === c2 ? new m(f2, t3[f2]) : new _(f2);
              } else
                void 0 !== t3[f2] && this.$set(l2 + f2, t3[f2], v2, n2);
            }
            for (var k2 = {}, M2 = Object.keys(this.$__schema.tree), T2 = 0, N2 = M2.length; T2 < N2; ++T2)
              (f2 = M2[T2]) && this._doc.hasOwnProperty(f2) && (k2[f2] = void 0);
            return this._doc = Object.assign(k2, this._doc), this;
          }
          var C2 = this.$__schema.pathType(t3);
          "adhocOrUndefined" === C2 && (C2 = R(this, t3, { typeOnly: true })), e3 = D(e3);
          var B2, U2 = null != o2.$__.priorDoc ? o2.$__.priorDoc.$__getValue(t3) : v2 ? void 0 : o2.$__getValue(t3);
          if ("nested" === C2 && e3) {
            if ("object" === u(e3) && null != e3) {
              if (null != e3.$__ && (e3 = e3.toObject(L)), null == e3)
                return this.invalidate(t3, new y.CastError("Object", e3, t3)), this;
              var F2 = null != this.$__.savedState && this.$__.savedState.hasOwnProperty(t3);
              if (null != this.$__.savedState && !this.$isNew && !this.$__.savedState.hasOwnProperty(t3)) {
                var q2 = this.$__getValue(t3);
                this.$__.savedState[t3] = q2;
                for (var W2 = 0, H2 = Object.keys(q2 || {}); W2 < H2.length; W2++) {
                  var K2 = H2[W2];
                  this.$__.savedState[t3 + "." + K2] = q2[K2];
                }
              }
              if (p2)
                return this.$set(e3, t3, v2);
              this.$__setValue(t3, null), E(this, t3);
              var z2 = I(this.$__schema, e3, t3);
              this.$__setValue(t3, {});
              var Q2, G2 = s(z2);
              try {
                for (G2.s(); !(Q2 = G2.n()).done; ) {
                  var Y2 = Q2.value;
                  this.$set(t3 + "." + Y2, e3[Y2], v2, n2);
                }
              } catch (t4) {
                G2.e(t4);
              } finally {
                G2.f();
              }
              return null != U2 && J.deepEqual(F2 ? this.$__.savedState[t3] : U2, e3) ? this.unmarkModified(t3) : this.markModified(t3), this;
            }
            return this.invalidate(t3, new y.CastError("Object", e3, t3)), this;
          }
          var Z2 = -1 === t3.indexOf(".") ? [t3] : t3.split(".");
          if ("string" == typeof this.$__schema.aliases[Z2[0]] && (Z2[0] = this.$__schema.aliases[Z2[0]]), "adhocOrUndefined" === C2 && g2) {
            var X2;
            for (b2 = 0; b2 < Z2.length; ++b2) {
              var tt2 = Z2.slice(0, b2 + 1).join(".");
              if (b2 + 1 < Z2.length && "virtual" === this.$__schema.pathType(tt2))
                return V.set(t3, e3, this), this;
              if (null != (B2 = this.$__schema.path(tt2)) && B2 instanceof d) {
                X2 = true;
                break;
              }
            }
            if (null == B2 && (B2 = R(this, t3)), !X2 && !B2) {
              if ("throw" === g2)
                throw new _(t3);
              return this;
            }
          } else {
            if ("virtual" === C2)
              return (B2 = this.$__schema.virtualpath(t3)).applySetters(e3, this), this;
            B2 = this.$__path(t3);
          }
          var et2, rt2 = this._doc, ot2 = "";
          for (b2 = 0; b2 < Z2.length - 1; ++b2)
            rt2 = rt2[Z2[b2]], ot2 += (0 !== ot2.length ? "." : "") + Z2[b2], rt2 || (this.$set(ot2, {}), this.$__isSelected(ot2) || this.unmarkModified(ot2), rt2 = this.$__getValue(ot2));
          if (Z2.length <= 1)
            et2 = t3;
          else {
            var it2 = Z2.length;
            for (b2 = 0; b2 < it2; ++b2) {
              var st2 = Z2.slice(0, b2 + 1).join(".");
              if (null === this.$get(st2, null, { getters: false })) {
                et2 = st2;
                break;
              }
            }
            et2 || (et2 = t3);
          }
          if (!B2)
            return this.$__set(et2, t3, n2, v2, Z2, B2, e3, U2), "nested" === C2 && null == e3 && E(this, t3), this;
          if ((B2.$isSingleNested || B2.$isMongooseArray) && function(t4, e4) {
            if (t4.$__.validationError) {
              for (var r4 = 0, n3 = Object.keys(t4.$__.validationError.errors); r4 < n3.length; r4++) {
                var o3 = n3[r4];
                o3.startsWith(e4 + ".") && delete t4.$__.validationError.errors[o3];
              }
              0 === Object.keys(t4.$__.validationError.errors).length && (t4.$__.validationError = null);
            }
          }(this, t3), null != e3 && p2 && B2.$isSingleNested) {
            e3 instanceof ut && (e3 = e3.toObject({ virtuals: false, transform: false }));
            for (var at2 = 0, ct2 = Object.keys(e3); at2 < ct2.length; at2++) {
              var lt2 = ct2[at2];
              this.$set(t3 + "." + lt2, e3[lt2], v2, n2);
            }
            return this;
          }
          var pt2 = true;
          try {
            var ht2, yt2 = function() {
              if (null == B2.options)
                return false;
              if (!(e3 instanceof ut))
                return false;
              var t4 = e3.constructor, r4 = B2.options.ref;
              if (null != r4 && (r4 === t4.modelName || r4 === t4.baseModelName))
                return true;
              var n3 = B2.options.refPath;
              if (null == n3)
                return false;
              var o3 = e3.get(n3);
              return o3 === t4.modelName || o3 === t4.baseModelName;
            }(), dt2 = false;
            if (yt2 && e3 instanceof ut && (!e3.$__.wasPopulated || J.deepEqual(e3.$__.wasPopulated.value, e3._id))) {
              var mt2 = B2 && B2.$isSingleNested ? B2.cast(e3, this) : e3._id;
              this.$populated(t3, mt2, i({}, nt, e3.constructor)), e3.$__.wasPopulated = { value: mt2 }, dt2 = true;
            }
            var vt2 = this.$__schema.options.typeKey;
            if (B2.options && Array.isArray(B2.options[vt2]) && B2.options[vt2].length && B2.options[vt2][0].ref && function(t4, e4) {
              if (!Array.isArray(t4))
                return false;
              if (0 === t4.length)
                return false;
              var r4, n3 = s(t4);
              try {
                for (n3.s(); !(r4 = n3.n()).done; ) {
                  var o3 = r4.value;
                  if (!(o3 instanceof ut))
                    return false;
                  if (null == o3.constructor.modelName)
                    return false;
                  if (o3.constructor.modelName != e4 && o3.constructor.baseModelName != e4)
                    return false;
                }
              } catch (t5) {
                n3.e(t5);
              } finally {
                n3.f();
              }
              return true;
            }(e3, B2.options[vt2][0].ref)) {
              ht2 = i({}, nt, e3[0].constructor), this.$populated(t3, e3.map(function(t4) {
                return t4._id;
              }), ht2);
              var bt2, gt2 = s(e3);
              try {
                for (gt2.s(); !(bt2 = gt2.n()).done; ) {
                  var _t = bt2.value;
                  _t.$__.wasPopulated = { value: _t._id };
                }
              } catch (t4) {
                gt2.e(t4);
              } finally {
                gt2.f();
              }
              dt2 = true;
            }
            if (null != this.$__schema.singleNestedPaths[t3] || yt2 && B2.$isSingleNested && e3.$__ || (e3 = null != n2 && n2.overwriteImmutable ? B2.applySetters(e3, this, false, U2, { overwriteImmutable: true }) : B2.applySetters(e3, this, false, U2)), Array.isArray(e3) && !Array.isArray(B2) && B2.$isMongooseDocumentArray && 0 !== e3.length && null != e3[0] && null != e3[0].$__ && null != e3[0].$__.populated) {
              for (var wt = Object.keys(e3[0].$__.populated), Ot = function() {
                var r4 = St[$t];
                o2.$populated(t3 + "." + r4, e3.map(function(t4) {
                  return t4.$populated(r4);
                }), e3[0].$__.populated[r4].options);
              }, $t = 0, St = wt; $t < St.length; $t++)
                Ot();
              dt2 = true;
            }
            if (!dt2 && this.$__.populated) {
              if (Array.isArray(e3) && this.$__.populated[t3])
                for (var jt = 0; jt < e3.length; ++jt)
                  e3[jt] instanceof ut && e3.set(jt, e3[jt]._id, true);
              delete this.$__.populated[t3];
            }
            null != e3 && B2.$isSingleNested && function(t4, e4, r4) {
              var n3 = e4.schema;
              if (null != n3)
                for (var o3 = 0, i2 = Object.keys(n3.paths); o3 < i2.length; o3++) {
                  var s2 = i2[o3], a3 = n3.paths[s2];
                  if (null != a3.$immutableSetter) {
                    var u2 = null == r4 ? void 0 : r4.$__getValue(s2);
                    a3.$immutableSetter.call(t4, u2);
                  }
                }
            }(e3, B2, U2), this.$markValid(t3);
          } catch (r4) {
            r4 instanceof y.StrictModeError && r4.isImmutableError ? this.invalidate(t3, r4) : r4 instanceof y.CastError ? (this.invalidate(r4.path, r4), r4.$originalErrorPath && this.invalidate(t3, new y.CastError(B2.instance, e3, t3, r4.$originalErrorPath))) : this.invalidate(t3, new y.CastError(B2.instance, e3, t3, r4)), pt2 = false;
          }
          if (pt2) {
            var At = null, Pt = null;
            if (!v2) {
              var Et = this.$isSubdocument ? this.ownerDocument() : this;
              At = Et.$__.savedState, Pt = this.$isSubdocument ? this.$__.fullPath + "." + t3 : t3, Et.$__saveInitialState(Pt);
            }
            this.$__set(et2, t3, n2, v2, Z2, B2, e3, U2), null != At && At.hasOwnProperty(Pt) && J.deepEqual(e3, At[Pt]) && this.unmarkModified(t3);
          }
          return B2.$isSingleNested && (this.isDirectModified(t3) || null == e3) && E(this, t3), this;
        }, ut.prototype.set = ut.prototype.$set, ut.prototype.$__shouldModify = function(t3, e3, r3, n2, o2, i2, s2, a2) {
          return !(r3 && r3._skipMarkModified || !this.$isNew && !(e3 in this.$__.activePaths.getStatePaths("modify")) && (null != this.$__schema.singleNestedPaths[e3] || (void 0 !== s2 || this.$__isSelected(e3)) && (void 0 === s2 && e3 in this.$__.activePaths.getStatePaths("default") || this.$populated(e3) && s2 instanceof ut && z(s2._id, a2) || z(s2, a2 || J.getValue(e3, this)) && (n2 || null == s2 || !(e3 in this.$__.activePaths.getStatePaths("default")) || !z(s2, i2.getDefault(this, n2))))));
        }, ut.prototype.$__set = function(t3, e3, n2, o2, i2, s2, a2, u2) {
          l = l || r2(1568), this.$__shouldModify(t3, e3, n2, o2, i2, s2, a2, u2) ? (this.$__.primitiveAtomics && this.$__.primitiveAtomics[e3] && (delete this.$__.primitiveAtomics[e3], 0 === Object.keys(this.$__.primitiveAtomics).length && delete this.$__.primitiveAtomics), this.markModified(t3), f || (f = r2(1362)), a2 && J.isMongooseArray(a2) && (a2._registerAtomic("$set", a2), J.isMongooseDocumentArray(a2) && a2.forEach(function(t4) {
            t4 && t4.__parentArray && (t4.__parentArray = a2);
          }))) : Array.isArray(a2) && Array.isArray(u2) && J.isMongooseArray(a2) && J.isMongooseArray(u2) && (a2[Y] = u2[Y], a2[G] = u2[G], J.isMongooseDocumentArray(a2) && a2.forEach(function(t4) {
            t4.isNew = false;
          }));
          for (var c2 = this._doc, p2 = 0, h2 = i2.length, y2 = ""; p2 < h2; p2++) {
            var d2 = p2 + 1 === h2;
            if (y2 += y2 ? "." + i2[p2] : i2[p2], at.has(i2[p2]))
              return;
            d2 ? c2 instanceof Map ? c2.set(i2[p2], a2) : c2[i2[p2]] = a2 : (J.isPOJO(c2[i2[p2]]) || c2[i2[p2]] && c2[i2[p2]] instanceof l || c2[i2[p2]] && !Array.isArray(c2[i2[p2]]) && c2[i2[p2]].$isSingleNested || c2[i2[p2]] && Array.isArray(c2[i2[p2]]) || (c2[i2[p2]] = c2[i2[p2]] || {}), c2 = c2[i2[p2]]);
          }
        }, ut.prototype.$__getValue = function(t3) {
          return J.getValue(t3, this._doc);
        }, ut.prototype.$inc = function(t3, e3) {
          var r3 = this;
          if (null == e3 && (e3 = 1), Array.isArray(t3))
            return t3.forEach(function(t4) {
              return r3.$inc(t4, e3);
            }), this;
          var n2 = this.$__path(t3);
          if (null == n2) {
            if ("throw" === this.$__.strictMode)
              throw new _(t3);
            if (true === this.$__.strictMode)
              return this;
          } else if ("Number" !== n2.instance)
            return this.invalidate(t3, new y.CastError(n2.instance, e3, t3)), this;
          try {
            e3 = A(e3);
          } catch (r4) {
            this.invalidate(t3, new y.CastError("number", e3, t3, r4));
          }
          var o2 = this.$__getValue(t3) || 0;
          return this.$__.primitiveAtomics = this.$__.primitiveAtomics || {}, this.$__.primitiveAtomics[t3] = { $inc: e3 }, this.markModified(t3), this.$__setValue(t3, o2 + e3), this;
        }, ut.prototype.$__setValue = function(t3, e3) {
          return J.setValue(t3, e3, this._doc), this;
        }, ut.prototype.get = function(t3, e3, r3) {
          var n2;
          r3 = r3 || {}, e3 && (n2 = this.$__schema.interpretAsType(t3, e3, this.$__schema.options));
          var o2 = this.$__path(t3);
          if (null == o2 && (o2 = this.$__schema.virtualpath(t3)), o2 instanceof d) {
            var i2 = this.$__schema.virtualpath(t3);
            null != i2 && (o2 = i2);
          }
          var s2 = -1 === t3.indexOf(".") ? [t3] : t3.split("."), a2 = this._doc;
          if (o2 instanceof $)
            return o2.applyGetters(void 0, this);
          "string" == typeof this.$__schema.aliases[s2[0]] && (s2[0] = this.$__schema.aliases[s2[0]]);
          for (var u2 = 0, c2 = s2.length; u2 < c2; u2++)
            a2 && a2._doc && (a2 = a2._doc), a2 = null == a2 ? void 0 : a2 instanceof Map ? a2.get(s2[u2], { getters: false }) : u2 === c2 - 1 ? J.getValue(s2[u2], a2) : a2[s2[u2]];
          if (n2 && (a2 = n2.cast(a2)), null != o2 && false !== r3.getters)
            a2 = o2.applyGetters(a2, this);
          else if (this.$__schema.nested[t3] && r3.virtuals)
            return bt(this, J.clone(a2) || {}, { path: t3 });
          return a2;
        }, ut.prototype[rt] = ut.prototype.get, ut.prototype.$get = ut.prototype.get, ut.prototype.$__path = function(t3) {
          var e3 = this.$__.adhocPaths;
          return (e3 && e3.hasOwnProperty(t3) ? e3[t3] : null) || this.$__schema.path(t3);
        }, ut.prototype.markModified = function(t3, e3) {
          this.$__saveInitialState(t3), this.$__.activePaths.modify(t3), null == e3 || this.$isSubdocument || (this.$__.pathsToScopes = this.$__pathsToScopes || {}, this.$__.pathsToScopes[t3] = e3);
        }, ut.prototype.$__saveInitialState = function(t3) {
          var e3 = this.$__.savedState, r3 = t3;
          if (null != e3) {
            var n2 = r3.indexOf("."), o2 = -1 === n2 ? r3 : r3.slice(0, n2);
            e3.hasOwnProperty(o2) || (e3[o2] = J.clone(this.$__getValue(o2)));
          }
        }, ut.prototype.unmarkModified = function(t3) {
          this.$__.activePaths.init(t3), null != this.$__.pathsToScopes && delete this.$__.pathsToScopes[t3];
        }, ut.prototype.$ignore = function(t3) {
          this.$__.activePaths.ignore(t3);
        }, ut.prototype.directModifiedPaths = function() {
          return Object.keys(this.$__.activePaths.getStatePaths("modify"));
        }, ut.prototype.$isEmpty = function(t3) {
          var e3 = { minimize: true, virtuals: false, getters: false, transform: false };
          if (0 !== arguments.length) {
            var r3 = this.$get(t3);
            return null == r3 || "object" === u(r3) && (J.isPOJO(r3) ? pt(r3) : 0 === Object.keys(r3.toObject(e3)).length);
          }
          return 0 === Object.keys(this.toObject(e3)).length;
        }, ut.prototype.modifiedPaths = function(t3) {
          t3 = t3 || {};
          var e3 = Object.keys(this.$__.activePaths.getStatePaths("modify")), r3 = /* @__PURE__ */ new Set(), n2 = 0, o2 = 0, i2 = e3.length;
          for (n2 = 0; n2 < i2; ++n2) {
            var s2 = e3[n2], a2 = st(s2), c2 = a2.length;
            for (o2 = 0; o2 < c2; ++o2)
              r3.add(a2[o2]);
            if (t3.includeChildren) {
              var f2 = 0, l2 = this.$get(s2);
              if ("object" === u(l2) && null !== l2) {
                l2._doc && (l2 = l2._doc);
                var p2 = l2.length;
                if (Array.isArray(l2))
                  for (f2 = 0; f2 < p2; ++f2) {
                    var h2 = s2 + "." + f2;
                    if (!r3.has(h2) && (r3.add(h2), null != l2[f2] && l2[f2].$__)) {
                      var y2 = l2[f2].modifiedPaths(), d2 = 0, m2 = y2.length;
                      for (d2 = 0; d2 < m2; ++d2)
                        r3.add(h2 + "." + y2[d2]);
                    }
                  }
                else {
                  var v2 = Object.keys(l2), b2 = 0, g2 = v2.length;
                  for (b2 = 0; b2 < g2; ++b2)
                    r3.add(s2 + "." + v2[b2]);
                }
              }
            }
          }
          return Array.from(r3);
        }, ut.prototype[tt] = ut.prototype.modifiedPaths, ut.prototype.isModified = function(t3, e3) {
          if (t3) {
            var r3 = Object.keys(this.$__.activePaths.getStatePaths("modify"));
            if (0 === r3.length)
              return false;
            Array.isArray(t3) || (t3 = -1 === t3.indexOf(" ") ? [t3] : t3.split(" "));
            var n2 = e3 || this[tt]();
            return t3.some(function(t4) {
              return !!~n2.indexOf(t4);
            }) || t3.some(function(t4) {
              return r3.some(function(e4) {
                return e4 === t4 || t4.startsWith(e4 + ".");
              });
            });
          }
          return this.$__.activePaths.some("modify");
        }, ut.prototype.$isModified = ut.prototype.isModified, ut.prototype[X] = ut.prototype.isModified, ut.prototype.$isDefault = function(t3) {
          var e3 = this;
          if (null == t3)
            return this.$__.activePaths.some("default");
          if ("string" == typeof t3 && -1 === t3.indexOf(" "))
            return this.$__.activePaths.getStatePaths("default").hasOwnProperty(t3);
          var r3 = t3;
          return Array.isArray(r3) || (r3 = r3.split(" ")), r3.some(function(t4) {
            return e3.$__.activePaths.getStatePaths("default").hasOwnProperty(t4);
          });
        }, ut.prototype.$isDeleted = function(t3) {
          return 0 === arguments.length ? !!this.$__.isDeleted : (this.$__.isDeleted = !!t3, this);
        }, ut.prototype.isDirectModified = function(t3) {
          var e3 = this;
          if (null == t3)
            return this.$__.activePaths.some("modify");
          if ("string" == typeof t3 && -1 === t3.indexOf(" "))
            return this.$__.activePaths.getStatePaths("modify").hasOwnProperty(t3);
          var r3 = t3;
          return Array.isArray(r3) || (r3 = r3.split(" ")), r3.some(function(t4) {
            return e3.$__.activePaths.getStatePaths("modify").hasOwnProperty(t4);
          });
        }, ut.prototype.isInit = function(t3) {
          var e3 = this;
          if (null == t3)
            return this.$__.activePaths.some("init");
          if ("string" == typeof t3 && -1 === t3.indexOf(" "))
            return this.$__.activePaths.getStatePaths("init").hasOwnProperty(t3);
          var r3 = t3;
          return Array.isArray(r3) || (r3 = r3.split(" ")), r3.some(function(t4) {
            return e3.$__.activePaths.getStatePaths("init").hasOwnProperty(t4);
          });
        }, ut.prototype.isSelected = function(t3) {
          var e3 = this;
          if (null == this.$__.selected)
            return true;
          if (!t3)
            return false;
          if ("_id" === t3)
            return 0 !== this.$__.selected._id;
          if (-1 !== t3.indexOf(" ") && (t3 = t3.split(" ")), Array.isArray(t3))
            return t3.some(function(t4) {
              return e3.$__isSelected(t4);
            });
          var r3 = Object.keys(this.$__.selected), n2 = null;
          if (1 === r3.length && "_id" === r3[0])
            return 0 === this.$__.selected._id;
          for (var o2 = 0, i2 = r3; o2 < i2.length; o2++) {
            var s2 = i2[o2];
            if ("_id" !== s2 && B(this.$__.selected[s2])) {
              n2 = !!this.$__.selected[s2];
              break;
            }
          }
          if (null === n2)
            return true;
          if (t3 in this.$__.selected)
            return n2;
          for (var a2 = t3 + ".", u2 = 0, c2 = r3; u2 < c2.length; u2++) {
            var f2 = c2[u2];
            if ("_id" !== f2) {
              if (f2.startsWith(a2))
                return n2 || f2 !== a2;
              if (a2.startsWith(f2 + "."))
                return n2;
            }
          }
          return !n2;
        }, ut.prototype.$__isSelected = ut.prototype.isSelected, ut.prototype.isDirectSelected = function(t3) {
          var e3 = this;
          if (null == this.$__.selected)
            return true;
          if ("_id" === t3)
            return 0 !== this.$__.selected._id;
          if (-1 !== t3.indexOf(" ") && (t3 = t3.split(" ")), Array.isArray(t3))
            return t3.some(function(t4) {
              return e3.isDirectSelected(t4);
            });
          var r3 = Object.keys(this.$__.selected), n2 = null;
          if (1 === r3.length && "_id" === r3[0])
            return 0 === this.$__.selected._id;
          for (var o2 = 0, i2 = r3; o2 < i2.length; o2++) {
            var s2 = i2[o2];
            if ("_id" !== s2 && B(this.$__.selected[s2])) {
              n2 = !!this.$__.selected[s2];
              break;
            }
          }
          return null === n2 || (this.$__.selected.hasOwnProperty(t3) ? n2 : !n2);
        }, ut.prototype.validate = function(t3, e3, r3) {
          var n2, o2 = this;
          if (this.$op = "validate", null != this.$isSubdocument || (this.$__.validating ? n2 = new b(this, { parentStack: e3 && e3.parentStack, conflictStack: this.$__.validating.stack }) : this.$__.validating = new b(this, { parentStack: e3 && e3.parentStack })), 1 === arguments.length ? "object" !== u(arguments[0]) || Array.isArray(arguments[0]) ? "function" == typeof arguments[0] && (r3 = arguments[0], e3 = null, t3 = null) : (e3 = arguments[0], r3 = null, t3 = null) : "function" == typeof t3 ? (r3 = t3, e3 = null, t3 = null) : "function" == typeof e3 && (r3 = e3, e3 = t3, t3 = null), e3 && "string" == typeof e3.pathsToSkip) {
            var i2 = -1 === e3.pathsToSkip.indexOf(" ");
            e3.pathsToSkip = i2 ? [e3.pathsToSkip] : e3.pathsToSkip.split(" ");
          }
          return j(r3, function(r4) {
            if (null != n2)
              return r4(n2);
            o2.$__validate(t3, e3, function(t4) {
              o2.$op = null, o2.$__.validating = null, r4(t4);
            });
          }, this.constructor.events);
        }, ut.prototype.$validate = ut.prototype.validate, ut.prototype.$__validate = function(t3, e3, r3) {
          var n2 = this;
          "function" == typeof t3 ? (r3 = t3, e3 = null, t3 = null) : "function" == typeof e3 && (r3 = e3, e3 = null);
          var o2, i2 = e3 && "object" === u(e3) && "validateModifiedOnly" in e3, a2 = e3 && e3.pathsToSkip || null;
          o2 = i2 ? !!e3.validateModifiedOnly : this.$__schema.options.validateModifiedOnly;
          var c2 = this, f2 = function() {
            var t4 = n2.$__.validationError;
            if (n2.$__.validationError = null, n2.$__.validating = null, o2 && null != t4) {
              for (var e4 = 0, r4 = Object.keys(t4.errors); e4 < r4.length; e4++) {
                var i3 = r4[e4];
                n2.$isModified(i3) || delete t4.errors[i3];
              }
              0 === Object.keys(t4.errors).length && (t4 = void 0);
            }
            if (n2.$__.cachedRequired = {}, n2.$emit("validate", c2), n2.constructor.emit("validate", c2), t4) {
              for (var s2 in t4.errors)
                !n2[Z] && t4.errors[s2] instanceof y.CastError && n2.invalidate(s2, t4.errors[s2]);
              return t4;
            }
          }, l2 = ht(this), p2 = o2 ? l2[0].filter(function(t4) {
            return n2.$isModified(t4);
          }) : l2[0], h2 = l2[1];
          if ("string" == typeof t3 && (t3 = t3.split(" ")), Array.isArray(t3) ? p2 = yt(p2, t3) : a2 && (p2 = dt(p2, a2)), 0 === p2.length)
            return C(function() {
              var t4 = f2();
              if (t4)
                return c2.$__schema.s.hooks.execPost("validate:error", c2, [c2], { error: t4 }, function(t5) {
                  r3(t5);
                });
              r3(null, c2);
            });
          var d2, m2 = {}, v2 = 0, b2 = s(p2);
          try {
            for (b2.s(); !(d2 = b2.n()).done; )
              g2(d2.value);
          } catch (t4) {
            b2.e(t4);
          } finally {
            b2.f();
          }
          function g2(t4) {
            null == t4 || m2[t4] || (m2[t4] = true, v2++, C(function() {
              var e4 = c2.$__schema.path(t4);
              if (!e4)
                return --v2 || _2();
              if (c2.$isValid(t4)) {
                if (null != e4[it] && t4 !== e4.path)
                  return --v2 || _2();
                var r4, n3 = c2.$__getValue(t4);
                (r4 = c2.$populated(t4)) ? n3 = r4 : null != n3 && null != n3.$__ && n3.$__.wasPopulated && (n3 = n3._id);
                var i3 = null != c2.$__.pathsToScopes && t4 in c2.$__.pathsToScopes ? c2.$__.pathsToScopes[t4] : c2, s2 = { skipSchemaValidators: h2[t4], path: t4, validateModifiedOnly: o2 };
                e4.doValidate(n3, function(r5) {
                  if (r5) {
                    if ((e4.$isSingleNested || e4.$isArraySubdocument || e4.$isMongooseDocumentArray) && r5 instanceof w)
                      return --v2 || _2();
                    c2.invalidate(t4, r5, void 0, true);
                  }
                  --v2 || _2();
                }, i3, s2);
              } else
                --v2 || _2();
            }));
          }
          function _2() {
            var t4 = f2();
            if (t4)
              return c2.$__schema.s.hooks.execPost("validate:error", c2, [c2], { error: t4 }, function(t5) {
                r3(t5);
              });
            r3(null, c2);
          }
        }, ut.prototype.validateSync = function(t3, e3) {
          var r3 = this, n2 = this;
          1 !== arguments.length || "object" !== u(arguments[0]) || Array.isArray(arguments[0]) || (e3 = arguments[0], t3 = null);
          var o2, i2 = e3 && "object" === u(e3) && "validateModifiedOnly" in e3;
          o2 = i2 ? !!e3.validateModifiedOnly : this.$__schema.options.validateModifiedOnly;
          var s2 = e3 && e3.pathsToSkip;
          if ("string" == typeof t3) {
            var a2 = -1 === t3.indexOf(" ");
            t3 = a2 ? [t3] : t3.split(" ");
          } else
            "string" == typeof s2 && -1 !== s2.indexOf(" ") && (s2 = s2.split(" "));
          var c2 = ht(this), f2 = o2 ? c2[0].filter(function(t4) {
            return r3.$isModified(t4);
          }) : c2[0], l2 = c2[1];
          Array.isArray(t3) ? f2 = yt(f2, t3) : Array.isArray(s2) && (f2 = dt(f2, s2));
          for (var p2 = {}, h2 = 0, d2 = f2.length; h2 < d2; ++h2) {
            var m2 = f2[h2];
            if (!p2[m2]) {
              p2[m2] = true;
              var v2 = n2.$__schema.path(m2);
              if (v2 && n2.$isValid(m2)) {
                var b2 = n2.$__getValue(m2), g2 = v2.doValidateSync(b2, n2, { skipSchemaValidators: l2[m2], path: m2, validateModifiedOnly: o2 });
                if (g2) {
                  var _2 = v2.$isSingleNested || v2.$isArraySubdocument || v2.$isMongooseDocumentArray;
                  if (_2 && g2 instanceof w)
                    continue;
                  n2.invalidate(m2, g2, void 0, true);
                }
              }
            }
          }
          var O2 = n2.$__.validationError;
          if (n2.$__.validationError = void 0, n2.$emit("validate", n2), n2.constructor.emit("validate", n2), O2)
            for (var $2 in O2.errors)
              O2.errors[$2] instanceof y.CastError && n2.invalidate($2, O2.errors[$2]);
          return O2;
        }, ut.prototype.invalidate = function(t3, e3, r3, n2) {
          if (this.$__.validationError || (this.$__.validationError = new w(this)), !this.$__.validationError.errors[t3])
            return e3 && "string" != typeof e3 || (e3 = new O({ path: t3, message: e3, type: n2 || "user defined", value: r3 })), this.$__.validationError === e3 || this.$__.validationError.addError(t3, e3), this.$__.validationError;
        }, ut.prototype.$markValid = function(t3) {
          this.$__.validationError && this.$__.validationError.errors[t3] && (delete this.$__.validationError.errors[t3], 0 === Object.keys(this.$__.validationError.errors).length && (this.$__.validationError = null));
        }, ut.prototype.$isValid = function(t3) {
          var e3 = this;
          return null == this.$__.validationError || 0 === Object.keys(this.$__.validationError.errors).length || null != t3 && (-1 !== t3.indexOf(" ") && (t3 = t3.split(" ")), Array.isArray(t3) ? t3.some(function(t4) {
            return null == e3.$__.validationError.errors[t4];
          }) : null == this.$__.validationError.errors[t3]);
        }, ut.prototype.$__reset = function() {
          var t3, e3 = this, r3 = this.$parent() === this ? this.$getAllSubdocs() : [], n2 = /* @__PURE__ */ new Set(), o2 = s(r3);
          try {
            for (o2.s(); !(t3 = o2.n()).done; ) {
              var i2 = t3.value, a2 = i2.$__fullPathWithIndexes();
              if (this.isModified(a2) || c2(a2))
                if (i2.$__reset(), i2.$isDocumentArrayElement) {
                  if (!n2.has(i2.parentArray())) {
                    var u2 = i2.parentArray();
                    this.$__.activePaths.clearPath(a2.replace(/\.\d+$/, "").slice(-i2.$basePath - 1)), u2[G] = u2[Y], u2[Y] = {}, n2.add(u2);
                  }
                } else
                  i2.$parent() === this ? this.$__.activePaths.clearPath(i2.$basePath) : null != i2.$parent() && i2.$parent().$isSubdocument && i2.$parent().$__reset();
            }
          } catch (t4) {
            o2.e(t4);
          } finally {
            o2.f();
          }
          function c2(t4) {
            t4 = -1 === t4.indexOf(".") ? [t4] : t4.split(".");
            for (var r4 = "", n3 = 0; n3 < t4.length; ++n3)
              if (r4 += (r4.length ? "." : "") + t4[n3], "init" === e3.$__.activePaths[r4])
                return true;
            return false;
          }
          return this.$__dirty().forEach(function(t4) {
            var e4 = t4.value;
            e4 && e4[Y] && (e4[G] = e4[Y], e4[Y] = {});
          }), this.$__.backup = {}, this.$__.backup.activePaths = { modify: Object.assign({}, this.$__.activePaths.getStatePaths("modify")), default: Object.assign({}, this.$__.activePaths.getStatePaths("default")) }, this.$__.backup.validationError = this.$__.validationError, this.$__.backup.errors = this.$errors, this.$__.activePaths.clear("modify"), this.$__.activePaths.clear("default"), this.$__.validationError = void 0, this.$errors = void 0, e3 = this, this.$__schema.requiredPaths().forEach(function(t4) {
            e3.$__.activePaths.require(t4);
          }), this;
        }, ut.prototype.$__undoReset = function() {
          if (null != this.$__.backup && null != this.$__.backup.activePaths) {
            this.$__.activePaths.states.modify = this.$__.backup.activePaths.modify, this.$__.activePaths.states.default = this.$__.backup.activePaths.default, this.$__.validationError = this.$__.backup.validationError, this.$errors = this.$__.backup.errors;
            var t3, e3 = s(this.$__dirty());
            try {
              for (e3.s(); !(t3 = e3.n()).done; ) {
                var r3 = t3.value.value;
                r3 && r3[Y] && r3[G] && (r3[Y] = r3[G]);
              }
            } catch (t4) {
              e3.e(t4);
            } finally {
              e3.f();
            }
            var n2, o2 = s(this.$getAllSubdocs());
            try {
              for (o2.s(); !(n2 = o2.n()).done; )
                n2.value.$__undoReset();
            } catch (t4) {
              o2.e(t4);
            } finally {
              o2.f();
            }
          }
        }, ut.prototype.$__dirty = function() {
          var t3 = this, e3 = this.$__.activePaths.map("modify", function(e4) {
            return { path: e4, value: t3.$__getValue(e4), schema: t3.$__path(e4) };
          });
          e3 = e3.concat(this.$__.activePaths.map("default", function(e4) {
            if ("_id" !== e4 && null != t3.$__getValue(e4))
              return { path: e4, value: t3.$__getValue(e4), schema: t3.$__path(e4) };
          }));
          var r3 = new Map(e3.filter(function(t4) {
            return null != t4;
          }).map(function(t4) {
            return [t4.path, t4.value];
          })), n2 = [];
          return e3.forEach(function(t4) {
            if (t4) {
              for (var e4 = null, o2 = st(t4.path), i2 = 0; i2 < o2.length - 1; i2++)
                if (r3.has(o2[i2])) {
                  e4 = r3.get(o2[i2]);
                  break;
                }
              null == e4 ? n2.push(t4) : null != e4 && null != e4[Y] && e4.hasAtomics() && (e4[Y] = {}, e4[Y].$set = e4);
            }
          }), n2;
        }, ut.prototype.$__setSchema = function(t3) {
          x(t3.tree, this, void 0, t3.options);
          for (var e3 = 0, r3 = Object.keys(t3.virtuals); e3 < r3.length; e3++) {
            var n2 = r3[e3];
            t3.virtuals[n2]._applyDefaultGetters();
          }
          null == t3.path("schema") && (this.schema = t3), this.$__schema = t3, this[et] = t3;
        }, ut.prototype.$__getArrayPathsToValidate = function() {
          return c || (c = r2(6077)), this.$__.activePaths.map("init", "modify", function(t3) {
            return this.$__getValue(t3);
          }.bind(this)).filter(function(t3) {
            return t3 && Array.isArray(t3) && J.isMongooseDocumentArray(t3) && t3.length;
          }).reduce(function(t3, e3) {
            return t3.concat(e3);
          }, []).filter(function(t3) {
            return t3;
          });
        }, ut.prototype.$getAllSubdocs = function() {
          function t3(e4, r3, n3) {
            var o3 = e4, i2 = false;
            if (n3 && (e4 instanceof ut && e4[et].paths[n3] ? o3 = e4._doc[n3] : e4 instanceof ut && e4[et].nested[n3] ? (o3 = e4._doc[n3], i2 = true) : o3 = e4[n3]), o3 instanceof l)
              r3.push(o3);
            else if (o3 instanceof Map)
              r3 = Array.from(o3.keys()).reduce(function(e5, r4) {
                return t3(o3.get(r4), e5, null);
              }, r3);
            else if (o3 && !Array.isArray(o3) && o3.$isSingleNested)
              r3 = Object.keys(o3._doc).reduce(function(e5, r4) {
                return t3(o3, e5, r4);
              }, r3), r3.push(o3);
            else if (o3 && J.isMongooseDocumentArray(o3))
              o3.forEach(function(e5) {
                e5 && e5._doc && (r3 = Object.keys(e5._doc).reduce(function(r4, n4) {
                  return t3(e5._doc, r4, n4);
                }, r3), e5 instanceof l && r3.push(e5));
              });
            else if (i2 && null != o3)
              for (var s2 = 0, a2 = Object.keys(o3); s2 < a2.length; s2++) {
                var u2 = a2[s2];
                t3(o3, r3, u2);
              }
            return r3;
          }
          c || (c = r2(6077)), l = l || r2(1568);
          for (var e3 = [], n2 = 0, o2 = Object.keys(this._doc); n2 < o2.length; n2++)
            t3(this, e3, o2[n2]);
          return e3;
        }, ut.prototype.$__handleReject = function(t3) {
          this.$listeners("error").length ? this.$emit("error", t3) : this.constructor.listeners && this.constructor.listeners("error").length && this.constructor.emit("error", t3);
        }, ut.prototype.$toObject = function(t3, e3) {
          var r3, n2, i2 = { transform: true, flattenDecimals: true }, s2 = e3 ? "toJSON" : "toObject", a2 = this.constructor && this.constructor.base && this.constructor.base.options && N(this.constructor.base.options, s2) || {}, u2 = this.$__schema && this.$__schema.options || {};
          i2 = J.options(i2, K(a2)), i2 = J.options(i2, K(u2[s2] || {})), (t3 = J.isPOJO(t3) ? o({}, t3) : {})._calledWithOptions = t3._calledWithOptions || o({}, t3), r3 = null != t3._calledWithOptions.minimize ? t3.minimize : null != i2.minimize ? i2.minimize : u2.minimize, n2 = null != t3._calledWithOptions.flattenMaps ? t3.flattenMaps : null != i2.flattenMaps ? i2.flattenMaps : u2.flattenMaps;
          var c2 = Object.assign({}, t3, { _isNested: true, json: e3, minimize: r3, flattenMaps: n2, _seen: t3 && t3._seen || /* @__PURE__ */ new Map() });
          if (J.hasUserDefinedProperty(t3, "getters") && (c2.getters = t3.getters), J.hasUserDefinedProperty(t3, "virtuals") && (c2.virtuals = t3.virtuals), (t3.depopulate || t3._parentOptions && t3._parentOptions.depopulate) && t3._isNested && this.$__.wasPopulated)
            return K(this.$__.wasPopulated.value || this._id, c2);
          (t3 = J.options(i2, t3))._isNested = true, t3.json = e3, t3.minimize = r3, c2._parentOptions = t3, c2._skipSingleNestedGetters = false;
          var f2 = Object.assign({}, c2);
          f2._skipSingleNestedGetters = true;
          var l2 = t3.transform, p2 = K(this._doc, c2) || {};
          t3.getters && (function(t4, e4, r4) {
            var n3, o2, i3 = t4.$__schema, s3 = Object.keys(i3.paths), a3 = s3.length, u3 = t4._doc;
            if (!u3)
              return e4;
            for (; a3--; ) {
              var c3 = (n3 = s3[a3]).split("."), f3 = c3.length, l3 = f3 - 1, p3 = e4, h3 = void 0;
              if (u3 = t4._doc, t4.$__isSelected(n3))
                for (var y3 = 0; y3 < f3; ++y3) {
                  if (o2 = u3[h3 = c3[y3]], y3 === l3) {
                    var d3 = t4.$get(n3);
                    p3[h3] = K(d3, r4);
                  } else {
                    if (null == o2) {
                      h3 in u3 && (p3[h3] = o2);
                      break;
                    }
                    p3 = p3[h3] || (p3[h3] = {});
                  }
                  u3 = o2;
                }
            }
          }(this, p2, f2), t3.minimize && (p2 = vt(p2) || {})), (t3.virtuals || t3.getters && false !== t3.virtuals) && bt(this, p2, f2, t3), false === t3.versionKey && this.$__schema.options.versionKey && delete p2[this.$__schema.options.versionKey];
          var h2 = t3.transform;
          if (h2 && function(t4, e4) {
            var r4 = t4.$__schema, n3 = Object.keys(r4.paths || {});
            if (!t4._doc)
              return e4;
            for (var o2 = 0, i3 = n3; o2 < i3.length; o2++) {
              var s3 = i3[o2], a3 = r4.paths[s3];
              if ("function" == typeof a3.options.transform) {
                var u3 = t4.$get(s3);
                if (void 0 === u3)
                  continue;
                var c3 = a3.options.transform.call(t4, u3);
                gt(s3, c3), J.setValue(s3, c3, e4);
              } else if (null != a3.$embeddedSchemaType && "function" == typeof a3.$embeddedSchemaType.options.transform) {
                var f3 = t4.$get(s3);
                if (void 0 === f3)
                  continue;
                for (var l3 = [].concat(f3), p3 = a3.$embeddedSchemaType.options.transform, h3 = 0; h3 < l3.length; ++h3) {
                  var y3 = p3.call(t4, l3[h3]);
                  l3[h3] = y3, gt(s3, y3);
                }
                e4[s3] = l3;
              }
            }
          }(this, p2), t3.useProjection && function(t4, e4) {
            var r4 = t4.$__schema, n3 = Object.keys(r4.paths || {});
            if (!t4._doc)
              return e4;
            var o2 = t4.$__.selected;
            if (void 0 === o2 && (o2 = {}, W.applyPaths(o2, r4)), null == o2 || 0 === Object.keys(o2).length)
              return e4;
            for (var i3 = 0, s3 = n3; i3 < s3.length; i3++) {
              var a3 = s3[i3];
              null == o2[a3] || o2[a3] || delete e4[a3];
            }
          }(this, p2), true === h2 || u2.toObject && h2) {
            var y2 = t3.json ? u2.toJSON : u2.toObject;
            y2 && (h2 = "function" == typeof t3.transform ? t3.transform : y2.transform);
          } else
            t3.transform = l2;
          if ("function" == typeof h2) {
            var d2 = h2(this, p2, t3);
            void 0 !== d2 && (p2 = d2);
          }
          return p2;
        }, ut.prototype.toObject = function(t3) {
          return this.$toObject(t3);
        }, ut.prototype.toJSON = function(t3) {
          return this.$toObject(t3, true);
        }, ut.prototype.ownerDocument = function() {
          return this;
        }, ut.prototype.parent = function() {
          return this.$isSubdocument || this.$__.wasPopulated ? this.$__.parent : this;
        }, ut.prototype.$parent = ut.prototype.parent, ut.prototype.inspect = function(t3) {
          var e3;
          J.isPOJO(t3) && ((e3 = t3).minimize = false);
          var r3 = this.toObject(e3);
          return null == r3 ? "MongooseDocument { " + r3 + " }" : r3;
        }, F.custom && (ut.prototype[F.custom] = ut.prototype.inspect), ut.prototype.toString = function() {
          var t3 = this.inspect();
          return "string" == typeof t3 ? t3 : F(t3);
        }, ut.prototype.equals = function(t3) {
          if (!t3)
            return false;
          var e3 = this.$__getValue("_id"), r3 = null != t3.$__ ? t3.$__getValue("_id") : t3;
          return e3 || r3 ? e3 && e3.equals ? e3.equals(r3) : e3 === r3 : z(this, t3);
        }, ut.prototype.populate = function() {
          var t3, e3 = {}, r3 = Array.prototype.slice.call(arguments);
          if (0 !== r3.length) {
            "function" == typeof r3[r3.length - 1] && (t3 = r3.pop());
            var n2, o2 = J.populate.apply(null, r3), i2 = s(o2);
            try {
              for (i2.s(); !(n2 = i2.n()).done; ) {
                var a2 = n2.value;
                e3[a2.path] = a2;
              }
            } catch (t4) {
              i2.e(t4);
            } finally {
              i2.f();
            }
          }
          var u2 = J.object.vals(e3), c2 = this.constructor;
          if (this.$__isNested) {
            c2 = this.$__[ot].constructor;
            var f2 = this.$__.nestedPath;
            u2.forEach(function(t4) {
              t4.path = f2 + "." + t4.path;
            });
          }
          if (null != this.$session()) {
            var l2 = this.$session();
            u2.forEach(function(t4) {
              null != t4.options ? "session" in t4.options || (t4.options.session = l2) : t4.options = { session: l2 };
            });
          }
          return u2.forEach(function(t4) {
            t4._localModel = c2;
          }), c2.populate(this, u2, t3);
        }, ut.prototype.$getPopulatedDocs = function() {
          var t3 = [];
          null != this.$__.populated && (t3 = t3.concat(Object.keys(this.$__.populated)));
          var e3, r3 = [], n2 = s(t3);
          try {
            for (n2.s(); !(e3 = n2.n()).done; ) {
              var o2 = e3.value, i2 = this.$get(o2);
              Array.isArray(i2) ? r3 = r3.concat(i2) : i2 instanceof ut && r3.push(i2);
            }
          } catch (t4) {
            n2.e(t4);
          } finally {
            n2.f();
          }
          return r3;
        }, ut.prototype.populated = function(t3, e3, r3) {
          if (null == e3 || true === e3) {
            if (!this.$__.populated)
              return;
            if ("string" != typeof t3)
              return;
            var n2 = t3.endsWith(".$*") ? t3.replace(/\.\$\*$/, "") : t3, o2 = this.$__.populated[n2];
            return o2 ? true === e3 ? o2 : o2.value : void 0;
          }
          this.$__.populated || (this.$__.populated = {}), this.$__.populated[t3] = { value: e3, options: r3 };
          for (var i2 = t3.split("."), s2 = 0; s2 < i2.length - 1; ++s2) {
            var a2 = i2.slice(0, s2 + 1).join("."), u2 = this.$get(a2);
            if (null != u2 && null != u2.$__ && this.$populated(a2)) {
              var c2 = i2.slice(s2 + 1).join(".");
              u2.$populated(c2, e3, r3);
              break;
            }
          }
          return e3;
        }, ut.prototype.$populated = ut.prototype.populated, ut.prototype.$assertPopulated = function(t3, e3) {
          var r3 = this;
          if (Array.isArray(t3))
            return t3.forEach(function(t4) {
              return r3.$assertPopulated(t4, e3);
            }), this;
          if (arguments.length > 1 && this.$set(e3), !this.$populated(t3))
            throw new y('Expected path "'.concat(t3, '" to be populated'));
          return this;
        }, ut.prototype.depopulate = function(t3) {
          var e3;
          "string" == typeof t3 && (t3 = -1 === t3.indexOf(" ") ? [t3] : t3.split(" "));
          var r3 = this.$$populatedVirtuals ? Object.keys(this.$$populatedVirtuals) : [], n2 = this.$__ && this.$__.populated || {};
          if (0 === arguments.length) {
            var o2, i2 = s(r3);
            try {
              for (i2.s(); !(o2 = i2.n()).done; ) {
                var a2 = o2.value;
                delete this.$$populatedVirtuals[a2], delete this._doc[a2], delete n2[a2];
              }
            } catch (t4) {
              i2.e(t4);
            } finally {
              i2.f();
            }
            for (var u2 = Object.keys(n2), c2 = 0, f2 = u2; c2 < f2.length; c2++) {
              var l2 = f2[c2];
              (e3 = this.$populated(l2)) && (delete n2[l2], J.setValue(l2, e3, this._doc));
            }
            return this;
          }
          var p2, h2 = s(t3);
          try {
            for (h2.s(); !(p2 = h2.n()).done; ) {
              var y2 = p2.value;
              e3 = this.$populated(y2), delete n2[y2], -1 !== r3.indexOf(y2) ? (delete this.$$populatedVirtuals[y2], delete this._doc[y2]) : e3 && J.setValue(y2, e3, this._doc);
            }
          } catch (t4) {
            h2.e(t4);
          } finally {
            h2.f();
          }
          return this;
        }, ut.prototype.$__fullPath = function(t3) {
          return t3 || "";
        }, ut.prototype.getChanges = function() {
          var t3 = this.$__delta();
          return t3 ? t3[1] : {};
        }, ut.prototype.$clone = function() {
          var t3 = new (0, this.constructor)();
          if (t3.$isNew = this.$isNew, this._doc && (t3._doc = K(this._doc)), this.$__) {
            var e3, r3 = new (0, this.$__.constructor)(), n2 = s(Object.getOwnPropertyNames(this.$__));
            try {
              for (n2.s(); !(e3 = n2.n()).done; ) {
                var i2 = e3.value;
                "activePaths" !== i2 && (r3[i2] = K(this.$__[i2]));
              }
            } catch (t4) {
              n2.e(t4);
            } finally {
              n2.f();
            }
            Object.assign(r3.activePaths, K(o({}, this.$__.activePaths))), t3.$__ = r3;
          }
          return t3;
        }, ut.ValidationError = w, t2.exports = ut;
      }, 4304: (t2, e2, r2) => {
        "use strict";
        var n = r2(8727), o = r2(3434), i = false;
        t2.exports = function() {
          return i ? o : n;
        }, t2.exports.setBrowser = function(t3) {
          i = t3;
        };
      }, 9906: (t2) => {
        "use strict";
        var e2 = null;
        t2.exports.get = function() {
          return e2;
        }, t2.exports.set = function(t3) {
          e2 = t3;
        };
      }, 5427: (t2) => {
        "use strict";
        t2.exports = function() {
        };
      }, 655: (t2, e2, r2) => {
        "use strict";
        var n = r2(3873).Kb;
        t2.exports = n;
      }, 4267: (t2, e2, r2) => {
        "use strict";
        t2.exports = r2(3873).Decimal128;
      }, 6333: (t2, e2, r2) => {
        "use strict";
        e2.Binary = r2(655), e2.Collection = function() {
          throw new Error("Cannot create a collection from browser library");
        }, e2.getConnection = function() {
          return function() {
            throw new Error("Cannot create a connection from browser library");
          };
        }, e2.Decimal128 = r2(4267), e2.ObjectId = r2(7906), e2.ReadPreference = r2(5427);
      }, 7906: (t2, e2, r2) => {
        "use strict";
        var n = r2(3873).t4;
        Object.defineProperty(n.prototype, "_id", { enumerable: false, configurable: true, get: function() {
          return this;
        } }), t2.exports = n;
      }, 1795: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function s(t3, e3) {
          return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, s(t3, e3);
        }
        function a(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function u(t3) {
          return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, u(t3);
        }
        var c = r2(5202), f = r2(8751), l = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && s(t4, e4);
          }(l2, t3);
          var e3, r3, n2, c2, f2 = (n2 = l2, c2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = u(n2);
            if (c2) {
              var r4 = u(this).constructor;
              t4 = Reflect.construct(e4, arguments, r4);
            } else
              t4 = e4.apply(this, arguments);
            return a(this, t4);
          });
          function l2(t4, e4, r4, n3, i2) {
            var s2;
            if (o(this, l2), arguments.length > 0) {
              var u2 = p(e4), c3 = h(e4), m = y(i2), v = d(null, t4, u2, r4, m, c3, n3);
              (s2 = f2.call(this, v)).init(t4, e4, r4, n3, i2);
            } else
              s2 = f2.call(this, d());
            return a(s2);
          }
          return e3 = l2, (r3 = [{ key: "toJSON", value: function() {
            return { stringValue: this.stringValue, valueType: this.valueType, kind: this.kind, value: this.value, path: this.path, reason: this.reason, name: this.name, message: this.message };
          } }, { key: "init", value: function(t4, e4, r4, n3, o2) {
            this.stringValue = p(e4), this.messageFormat = y(o2), this.kind = t4, this.value = e4, this.path = r4, this.reason = n3, this.valueType = h(e4);
          } }, { key: "copy", value: function(t4) {
            this.messageFormat = t4.messageFormat, this.stringValue = t4.stringValue, this.kind = t4.kind, this.value = t4.value, this.path = t4.path, this.reason = t4.reason, this.message = t4.message, this.valueType = t4.valueType;
          } }, { key: "setModel", value: function(t4) {
            this.model = t4, this.message = d(t4, this.kind, this.stringValue, this.path, this.messageFormat, this.valueType);
          } }]) && i(e3.prototype, r3), Object.defineProperty(e3, "prototype", { writable: false }), l2;
        }(c);
        function p(t3) {
          var e3 = f.inspect(t3);
          return (e3 = e3.replace(/^'|'$/g, '"')).startsWith('"') || (e3 = '"' + e3 + '"'), e3;
        }
        function h(t3) {
          if (null == t3)
            return "" + t3;
          var e3 = n(t3);
          return "object" !== e3 || "function" != typeof t3.constructor ? e3 : t3.constructor.name;
        }
        function y(t3) {
          var e3 = t3 && t3.options && t3.options.cast || null;
          if ("string" == typeof e3)
            return e3;
        }
        function d(t3, e3, r3, n2, o2, i2, s2) {
          if (null != o2) {
            var a2 = o2.replace("{KIND}", e3).replace("{VALUE}", r3).replace("{PATH}", n2);
            return null != t3 && (a2 = a2.replace("{MODEL}", t3.modelName)), a2;
          }
          var u2 = "Cast to " + e3 + " failed for value " + r3 + (i2 ? " (type " + i2 + ")" : "") + ' at path "' + n2 + '"';
          return null != t3 && (u2 += ' for model "' + t3.modelName + '"'), null != s2 && "function" == typeof s2.constructor && "AssertionError" !== s2.constructor.name && "Error" !== s2.constructor.name && (u2 += ' because of "' + s2.constructor.name + '"'), u2;
        }
        Object.defineProperty(l.prototype, "name", { value: "CastError" }), t2.exports = l;
      }, 6067: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4) {
            !function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, u);
            var e4 = "For your own good, using `document.save()` to update an array which was selected using an $elemMatch projection OR populated using skip, limit, query conditions, or exclusion of the _id field when the operation results in a $pop or $set of the entire array is not supported. The following path(s) would have been modified unsafely:\n  " + t4.join("\n  ") + "\nUse Model.update() to update these arrays instead.";
            return a2.call(this, e4);
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "DivergentArrayError" }), t2.exports = a;
      }, 4888: (t2, e2, r2) => {
        "use strict";
        var n = r2(5202);
        t2.exports = n, n.messages = r2(983), n.Messages = n.messages, n.DocumentNotFoundError = r2(3640), n.CastError = r2(1795), n.ValidationError = r2(122), n.ValidatorError = r2(2037), n.VersionError = r2(8809), n.ParallelSaveError = r2(5007), n.OverwriteModelError = r2(5676), n.MissingSchemaError = r2(1511), n.MongooseServerSelectionError = r2(1870), n.DivergentArrayError = r2(6067), n.StrictModeError = r2(3328);
      }, 983: (t2, e2) => {
        "use strict";
        var r2 = t2.exports = {};
        r2.DocumentNotFoundError = null, r2.general = {}, r2.general.default = "Validator failed for path `{PATH}` with value `{VALUE}`", r2.general.required = "Path `{PATH}` is required.", r2.Number = {}, r2.Number.min = "Path `{PATH}` ({VALUE}) is less than minimum allowed value ({MIN}).", r2.Number.max = "Path `{PATH}` ({VALUE}) is more than maximum allowed value ({MAX}).", r2.Number.enum = "`{VALUE}` is not a valid enum value for path `{PATH}`.", r2.Date = {}, r2.Date.min = "Path `{PATH}` ({VALUE}) is before minimum allowed value ({MIN}).", r2.Date.max = "Path `{PATH}` ({VALUE}) is after maximum allowed value ({MAX}).", r2.String = {}, r2.String.enum = "`{VALUE}` is not a valid enum value for path `{PATH}`.", r2.String.match = "Path `{PATH}` is invalid ({VALUE}).", r2.String.minlength = "Path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).", r2.String.maxlength = "Path `{PATH}` (`{VALUE}`) is longer than the maximum allowed length ({MAXLENGTH}).";
      }, 1511: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4) {
            !function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, u);
            var e4 = `Schema hasn't been registered for model "` + t4 + '".\nUse mongoose.model(name, schema)';
            return a2.call(this, e4);
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "MissingSchemaError" }), t2.exports = a;
      }, 5202: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        function r2(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t3, r3) {
          if (r3 && ("object" === e2(r3) || "function" == typeof r3))
            return r3;
          if (void 0 !== r3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function o(t3) {
          var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return o = function(t4) {
            if (null === t4 || (r3 = t4, -1 === Function.toString.call(r3).indexOf("[native code]")))
              return t4;
            var r3;
            if ("function" != typeof t4)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e3) {
              if (e3.has(t4))
                return e3.get(t4);
              e3.set(t4, n2);
            }
            function n2() {
              return i(t4, arguments, u(this).constructor);
            }
            return n2.prototype = Object.create(t4.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), a(n2, t4);
          }, o(t3);
        }
        function i(t3, e3, r3) {
          return i = s() ? Reflect.construct.bind() : function(t4, e4, r4) {
            var n2 = [null];
            n2.push.apply(n2, e4);
            var o2 = new (Function.bind.apply(t4, n2))();
            return r4 && a(o2, r4.prototype), o2;
          }, i.apply(null, arguments);
        }
        function s() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }
        function a(t3, e3) {
          return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, a(t3, e3);
        }
        function u(t3) {
          return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, u(t3);
        }
        var c = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && a(t4, e4);
          }(f, t3);
          var e3, o2, i2, c2 = (e3 = f, o2 = s(), function() {
            var t4, r3 = u(e3);
            if (o2) {
              var i3 = u(this).constructor;
              t4 = Reflect.construct(r3, arguments, i3);
            } else
              t4 = r3.apply(this, arguments);
            return n(this, t4);
          });
          function f() {
            return r2(this, f), c2.apply(this, arguments);
          }
          return i2 = f, Object.defineProperty(i2, "prototype", { writable: false }), i2;
        }(o(Error));
        Object.defineProperty(c.prototype, "name", { value: "MongooseError" }), t2.exports = c;
      }, 3640: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = r2(4888), u = r2(8751), c = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(f, t3);
          var e3, r3, n2, c2 = (r3 = f, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function f(t4, e4, r4, n3) {
            var o2, i2;
            !function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, f);
            var s2 = a.messages;
            return i2 = null != s2.DocumentNotFoundError ? "function" == typeof s2.DocumentNotFoundError ? s2.DocumentNotFoundError(t4, e4) : s2.DocumentNotFoundError : 'No document found for query "' + u.inspect(t4) + '" on model "' + e4 + '"', (o2 = c2.call(this, i2)).result = n3, o2.numAffected = r4, o2.filter = t4, o2.query = t4, o2;
          }
          return e3 = f, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(a);
        Object.defineProperty(c.prototype, "name", { value: "DocumentNotFoundError" }), t2.exports = c;
      }, 4107: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4, e4) {
            var r4;
            !function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, u);
            var n3 = Array.isArray(e4) ? "array" : "primitive value";
            return (r4 = a2.call(this, "Tried to set nested object field `" + t4 + "` to ".concat(n3, " `") + e4 + "`")).path = t4, r4;
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "ObjectExpectedError" }), t2.exports = a;
      }, 900: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4, e4, r4) {
            return function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, u), a2.call(this, 'Parameter "' + e4 + '" to ' + r4 + "() must be an object, got " + t4.toString());
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "ObjectParameterError" }), t2.exports = a;
      }, 5676: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4) {
            return function(t5, e4) {
              if (!(t5 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, u), a2.call(this, "Cannot overwrite `" + t4 + "` model once compiled.");
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "OverwriteModelError" }), t2.exports = a;
      }, 5007: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4) {
            return function(t5, e4) {
              if (!(t5 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, u), a2.call(this, "Can't save() the same doc multiple times in parallel. Document: " + t4._id);
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "ParallelSaveError" }), t2.exports = a;
      }, 7962: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4) {
            return function(t5, e4) {
              if (!(t5 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, u), a2.call(this, "Can't validate() the same doc multiple times in parallel. Document: " + t4._id);
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(5202));
        Object.defineProperty(a.prototype, "name", { value: "ParallelValidateError" }), t2.exports = a;
      }, 1870: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function s(t3, e3) {
          return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, s(t3, e3);
        }
        function a(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function u(t3) {
          return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, u(t3);
        }
        var c = r2(5202), f = r2(5285), l = r2(2082), p = r2(3871), h = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && s(t4, e4);
          }(y, t3);
          var e3, r3, n2, c2, h2 = (n2 = y, c2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = u(n2);
            if (c2) {
              var r4 = u(this).constructor;
              t4 = Reflect.construct(e4, arguments, r4);
            } else
              t4 = e4.apply(this, arguments);
            return a(this, t4);
          });
          function y() {
            return o(this, y), h2.apply(this, arguments);
          }
          return e3 = y, (r3 = [{ key: "assimilateError", value: function(t4) {
            var e4 = t4.reason, r4 = l(e4) && f(e4) && -1 === t4.message.indexOf("bad auth") && -1 === t4.message.indexOf("Authentication failed");
            for (var n3 in r4 ? this.message = "Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/" : p(e4) ? this.message = "Mongoose is connecting with SSL enabled, but the server is not accepting SSL connections. Please ensure that the MongoDB server you are connecting to is configured to accept SSL connections. Learn more: https://mongoosejs.com/docs/tutorials/ssl.html" : this.message = t4.message, t4)
              "name" !== n3 && (this[n3] = t4[n3]);
            return this;
          } }]) && i(e3.prototype, r3), Object.defineProperty(e3, "prototype", { writable: false }), y;
        }(c);
        Object.defineProperty(h.prototype, "name", { value: "MongooseServerSelectionError" }), t2.exports = h;
      }, 3328: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4, e4, r4) {
            var n3;
            return function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, u), e4 = e4 || "Field `" + t4 + "` is not in schema and strict mode is set to throw.", (n3 = a2.call(this, e4)).isImmutableError = !!r4, n3.path = t4, n3;
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "StrictModeError" }), t2.exports = a;
      }, 122: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = r2(5202), c = r2(1981), f = r2(8751), l = r2(198), p = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(p2, t3);
          var e3, r3, n2, u2, f2 = (n2 = p2, u2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(n2);
            if (u2) {
              var r4 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, r4);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function p2(t4) {
            var e4, r4;
            return function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, p2), r4 = "model" === c(t4) ? t4.constructor.modelName + " validation failed" : "Validation failed", (e4 = f2.call(this, r4)).errors = {}, e4._message = r4, t4 && (t4.$errors = e4.errors), e4;
          }
          return e3 = p2, (r3 = [{ key: "toString", value: function() {
            return this.name + ": " + l(this);
          } }, { key: "inspect", value: function() {
            return Object.assign(new Error(this.message), this);
          } }, { key: "addError", value: function(t4, e4) {
            if (e4 instanceof p2)
              for (var r4 = e4.errors, n3 = 0, o2 = Object.keys(r4); n3 < o2.length; n3++) {
                var i2 = o2[n3];
                this.addError("".concat(t4, ".").concat(i2), r4[i2]);
              }
            else
              this.errors[t4] = e4, this.message = this._message + ": " + l(this);
          } }]) && o(e3.prototype, r3), Object.defineProperty(e3, "prototype", { writable: false }), p2;
        }(u);
        f.inspect.custom && (p.prototype[f.inspect.custom] = p.prototype.inspect), Object.defineProperty(p.prototype, "toJSON", { enumerable: false, writable: false, configurable: true, value: function() {
          return Object.assign({}, this, { name: this.name, message: this.message });
        } }), Object.defineProperty(p.prototype, "name", { value: "ValidationError" }), t2.exports = p;
      }, 2037: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = r2(4888), c = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(p, t3);
          var e3, r3, n2, c2, l = (n2 = p, c2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(n2);
            if (c2) {
              var r4 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, r4);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function p(t4, e4) {
            var r4;
            !function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, p);
            var n3 = t4.message;
            n3 || (n3 = u.messages.general.default);
            var o2 = f(n3, t4, e4);
            return r4 = l.call(this, o2), t4 = Object.assign({}, t4, { message: o2 }), r4.properties = t4, r4.kind = t4.type, r4.path = t4.path, r4.value = t4.value, r4.reason = t4.reason, r4;
          }
          return e3 = p, (r3 = [{ key: "toString", value: function() {
            return this.message;
          } }, { key: "toJSON", value: function() {
            return Object.assign({ name: this.name, message: this.message }, this);
          } }]) && o(e3.prototype, r3), Object.defineProperty(e3, "prototype", { writable: false }), p;
        }(u);
        function f(t3, e3, r3) {
          if ("function" == typeof t3)
            return t3(e3, r3);
          for (var n2 = 0, o2 = Object.keys(e3); n2 < o2.length; n2++) {
            var i2 = o2[n2];
            "message" !== i2 && (t3 = t3.replace("{" + i2.toUpperCase() + "}", e3[i2]));
          }
          return t3;
        }
        Object.defineProperty(c.prototype, "name", { value: "ValidatorError" }), Object.defineProperty(c.prototype, "properties", { enumerable: false, writable: true, value: null }), c.prototype.formatMessage = f, t2.exports = c;
      }, 8809: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, o(t3, e3);
        }
        function i(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function s(t3) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, s(t3);
        }
        var a = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && o(t4, e4);
          }(u, t3);
          var e3, r3, n2, a2 = (r3 = u, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = s(r3);
            if (n2) {
              var o2 = s(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return i(this, t4);
          });
          function u(t4, e4, r4) {
            var n3;
            !function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, u);
            var o2 = r4.join(", ");
            return (n3 = a2.call(this, 'No matching document found for id "' + t4._id + '" version ' + e4 + ' modifiedPaths "' + o2 + '"')).version = e4, n3.modifiedPaths = r4, n3;
          }
          return e3 = u, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4888));
        Object.defineProperty(a.prototype, "name", { value: "VersionError" }), t2.exports = a;
      }, 6069: (t2) => {
        "use strict";
        t2.exports = function t3(e2) {
          if (!Array.isArray(e2))
            return { min: 0, max: 0, containsNonArrayItem: true };
          if (0 === e2.length)
            return { min: 1, max: 1, containsNonArrayItem: false };
          if (1 === e2.length && !Array.isArray(e2[0]))
            return { min: 1, max: 1, containsNonArrayItem: false };
          for (var r2 = t3(e2[0]), n = 1; n < e2.length; ++n) {
            var o = t3(e2[n]);
            o.min < r2.min && (r2.min = o.min), o.max > r2.max && (r2.max = o.max), r2.containsNonArrayItem = r2.containsNonArrayItem || o.containsNonArrayItem;
          }
          return r2.min = r2.min + 1, r2.max = r2.max + 1, r2;
        };
      }, 1973: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(5003), i = r2(6079), s = r2(2862), a = r2(6584), u = r2(6749), c = r2(1563), f = r2(5721), l = r2(8770), p = r2(3636).trustedSymbol, h = r2(6872);
        function y(t3, e3, r3) {
          if (null == t3)
            return t3;
          if (Array.isArray(t3))
            return function(t4, e4) {
              var r4 = 0, n2 = t4.length, o2 = new Array(n2);
              for (r4 = 0; r4 < n2; ++r4)
                o2[r4] = y(t4[r4], e4, true);
              return o2;
            }(h.isMongooseArray(t3) ? t3.__array : t3, e3);
          if (a(t3)) {
            e3 && e3._skipSingleNestedGetters && t3.$isSingleNested && (e3 = Object.assign({}, e3, { getters: false }));
            var s2, p2 = t3.$isSingleNested;
            if (h.isPOJO(t3) && null != t3.$__ && null != t3._doc)
              return t3._doc;
            if (s2 = e3 && e3.json && "function" == typeof t3.toJSON ? t3.toJSON(e3) : t3.toObject(e3), e3 && e3.minimize && p2 && 0 === Object.keys(s2).length)
              return;
            return s2;
          }
          var m = t3.constructor;
          if (m)
            switch (u(m)) {
              case "Object":
                return d(t3, e3, r3);
              case "Date":
                return new m(+t3);
              case "RegExp":
                return function(t4) {
                  var e4 = new RegExp(t4.source, t4.flags);
                  return e4.lastIndex !== t4.lastIndex && (e4.lastIndex = t4.lastIndex), e4;
                }(t3);
            }
          return c(t3, "ObjectID") ? new i(t3.id) : c(t3, "Decimal128") ? e3 && e3.flattenDecimals ? t3.toJSON() : o.fromString(t3.toString()) : !m && f(t3) ? d(t3, e3, r3) : "object" === n(t3) && t3[l.schemaTypeSymbol] ? t3.clone() : e3 && e3.bson && "function" == typeof t3.toBSON ? t3 : "function" == typeof t3.valueOf ? t3.valueOf() : d(t3, e3, r3);
        }
        function d(t3, e3, r3) {
          var n2, o2 = e3 && e3.minimize, i2 = e3 && e3.omitUndefined, a2 = e3 && e3._seen, u2 = {};
          if (a2 && a2.has(t3))
            return a2.get(t3);
          a2 && a2.set(t3, u2), p in t3 && (u2[p] = t3[p]);
          var c2 = 0, f2 = "", l2 = Object.keys(t3), h2 = l2.length;
          for (c2 = 0; c2 < h2; ++c2)
            if (!s.has(f2 = l2[c2])) {
              var d2 = y(t3[f2], e3, false);
              false !== o2 && !i2 || void 0 !== d2 ? true === o2 && void 0 === d2 || (n2 || (n2 = true), u2[f2] = d2) : delete u2[f2];
            }
          return o2 && !r3 ? n2 && u2 : u2;
        }
        t2.exports = y;
      }, 2829: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        var i = r2(9906).get().Binary, s = r2(1563), a = r2(6584);
        r2(4888), r2(8751);
        function u(t3) {
          return t3 && "object" === o(t3) && !(t3 instanceof Date) && !s(t3, "ObjectID") && (!Array.isArray(t3) || 0 !== t3.length) && !(t3 instanceof n) && !s(t3, "Decimal128") && !(t3 instanceof i);
        }
        e2.x = function t3(e3, r3, o2, i2) {
          var s2, c = (s2 = e3 && a(e3) && !n.isBuffer(e3) ? Object.keys(e3.toObject({ transform: false, virtuals: false }) || {}) : Object.keys(e3 || {})).length, f = {};
          r3 = r3 ? r3 + "." : "";
          for (var l = 0; l < c; ++l) {
            var p = s2[l], h = e3[p];
            f[r3 + p] = h;
            var y = i2 && i2.path && i2.path(r3 + p), d = i2 && i2.nested && i2.nested[r3 + p];
            if (!y || "Mixed" !== y.instance) {
              if (u(h)) {
                if (o2 && o2.skipArrays && Array.isArray(h))
                  continue;
                var m = t3(h, r3 + p, o2, i2);
                for (var v in m)
                  f[v] = m[v];
                Array.isArray(h) && (f[r3 + p] = h);
              }
              if (d)
                for (var b = 0, g = Object.keys(i2.paths); b < g.length; b++) {
                  var _ = g[b];
                  _.startsWith(r3 + p + ".") && !f.hasOwnProperty(_) && (f[_] = void 0);
                }
            }
          }
          return f;
        };
      }, 2794: (t2, e2, r2) => {
        "use strict";
        var n = r2(1563);
        t2.exports = function(t3, e3) {
          return "string" == typeof t3 && "string" == typeof e3 || "number" == typeof t3 && "number" == typeof e3 ? t3 === e3 : !(!n(t3, "ObjectID") || !n(e3, "ObjectID")) && t3.toString() === e3.toString();
        };
      }, 4531: (t2) => {
        "use strict";
        t2.exports = function(t3, e2, r2, n, o) {
          var i = Object.keys(t3).reduce(function(t4, r3) {
            return t4 || r3.startsWith(e2 + ".");
          }, false), s = e2 + "." + r2.options.discriminatorKey;
          i || 1 !== o.length || o[0] !== s || n.splice(n.indexOf(s), 1);
        };
      }, 8413: (t2, e2, r2) => {
        "use strict";
        var n = r2(7291);
        t2.exports = function(t3, e3) {
          var r3 = t3.schema.options.discriminatorKey;
          if (null != e3 && t3.discriminators && null != e3[r3])
            if (t3.discriminators[e3[r3]])
              t3 = t3.discriminators[e3[r3]];
            else {
              var o = n(t3.discriminators, e3[r3]);
              o && (t3 = o);
            }
          return t3;
        };
      }, 7291: (t2, e2, r2) => {
        "use strict";
        var n = r2(2794);
        t2.exports = function(t3, e3) {
          if (null == t3)
            return null;
          for (var r3 = 0, o = Object.keys(t3); r3 < o.length; r3++) {
            var i = t3[o[r3]];
            if (i.schema && i.schema.discriminatorMapping && n(i.schema.discriminatorMapping.value, e3))
              return i;
          }
          return null;
        };
      }, 2392: (t2, e2, r2) => {
        "use strict";
        var n = r2(2794);
        t2.exports = function(t3, e3) {
          if (null == t3 || null == t3.discriminators)
            return null;
          for (var r3 = 0, o = Object.keys(t3.discriminators); r3 < o.length; r3++) {
            var i = o[r3], s = t3.discriminators[i];
            if (null != s.discriminatorMapping && n(s.discriminatorMapping.value, e3))
              return s;
          }
          return null;
        };
      }, 2462: (t2, e2, r2) => {
        "use strict";
        var n = r2(4913), o = r2(2862), i = r2(1563), s = r2(6079), a = r2(5721);
        t2.exports = function t3(e3, r3, u) {
          var c, f = Object.keys(r3), l = 0, p = f.length;
          for (u = u || ""; l < p; )
            if ("discriminators" !== (c = f[l++]) && "base" !== c && "_applyDiscriminators" !== c && !("tree" === u && null != r3 && r3.instanceOfSchema || o.has(c))) {
              if (null == e3[c])
                e3[c] = r3[c];
              else if (a(r3[c])) {
                if (a(e3[c]) || (e3[c] = {}), null != r3[c]) {
                  if (r3[c].$isSingleNested && e3[c].$isMongooseDocumentArray || r3[c].$isMongooseDocumentArray && e3[c].$isSingleNested)
                    continue;
                  if (r3[c].instanceOfSchema) {
                    e3[c].instanceOfSchema ? n(e3[c], r3[c].clone(), true) : e3[c] = r3[c].clone();
                    continue;
                  }
                  if (i(r3[c], "ObjectID")) {
                    e3[c] = new s(r3[c]);
                    continue;
                  }
                }
                t3(e3[c], r3[c], u ? u + "." + c : c);
              }
            }
        };
      }, 2874: (t2) => {
        "use strict";
        t2.exports = function(t3, e2, r2, n, o, i) {
          for (var s = Object.keys(t3.$__schema.paths), a = s.length, u = 0; u < a; ++u) {
            var c = void 0, f = "", l = s[u];
            if ("_id" !== l || !t3.$__.skipId)
              for (var p = t3.$__schema.paths[l], h = p.splitPath(), y = h.length, d = false, m = t3._doc, v = 0; v < y && null != m; ++v) {
                var b = h[v];
                if (f += (f.length ? "." : "") + b, true === r2) {
                  if (f in e2)
                    break;
                } else if (false === r2 && e2 && !d) {
                  var g = p.$isSingleNested || p.$isMongooseDocumentArray;
                  if (f in e2 || g && null != n && n[f])
                    d = true;
                  else if (null != n && !n[f])
                    break;
                }
                if (v === y - 1) {
                  if (void 0 !== m[b])
                    break;
                  if (null != o) {
                    if ("function" == typeof p.defaultValue) {
                      if (!p.defaultValue.$runBeforeSetters && o)
                        break;
                      if (p.defaultValue.$runBeforeSetters && !o)
                        break;
                    } else if (!o)
                      continue;
                  }
                  if (i && i[f])
                    break;
                  if (e2 && null !== r2) {
                    if (true === r2) {
                      if (l in e2)
                        continue;
                      try {
                        c = p.getDefault(t3, false);
                      } catch (e3) {
                        t3.invalidate(l, e3);
                        break;
                      }
                      void 0 !== c && (m[b] = c, t3.$__.activePaths.default(l));
                    } else if (d) {
                      try {
                        c = p.getDefault(t3, false);
                      } catch (e3) {
                        t3.invalidate(l, e3);
                        break;
                      }
                      void 0 !== c && (m[b] = c, t3.$__.activePaths.default(l));
                    }
                  } else {
                    try {
                      c = p.getDefault(t3, false);
                    } catch (e3) {
                      t3.invalidate(l, e3);
                      break;
                    }
                    void 0 !== c && (m[b] = c, t3.$__.activePaths.default(l));
                  }
                } else
                  m = m[b];
              }
          }
        };
      }, 4134: (t2) => {
        "use strict";
        t2.exports = function(t3, e2, r2) {
          var n = (r2 = r2 || {}).skipDocArrays, o = 0;
          if (!t3)
            return o;
          for (var i = 0, s = Object.keys(t3.$__.activePaths.getStatePaths("modify")); i < s.length; i++) {
            var a = s[i];
            if (n) {
              var u = t3.$__schema.path(a);
              if (u && u.$isMongooseDocumentArray)
                continue;
            }
            if (a.startsWith(e2 + ".") && (t3.$__.activePaths.clearPath(a), ++o, t3.$isSubdocument)) {
              var c = t3.ownerDocument(), f = t3.$__fullPath(a);
              c.$__.activePaths.clearPath(f);
            }
          }
          return o;
        };
      }, 8724: (t2, e2, r2) => {
        "use strict";
        var n, o = r2(8770).documentSchemaSymbol, i = r2(4962).h, s = r2(6872), a = r2(8770).getSymbol, u = r2(8770).scopeSymbol, c = s.isPOJO;
        e2.M = l, e2.c = p;
        var f = Object.freeze({ minimize: true, virtuals: false, getters: false, transform: false });
        function l(t3, e3, o2, i2) {
          n = n || r2(8727);
          for (var s2 = i2.typeKey, a2 = 0, u2 = Object.keys(t3); a2 < u2.length; a2++) {
            var f2 = u2[a2], l2 = t3[f2];
            p({ prop: f2, subprops: c(l2) && Object.keys(l2).length > 0 && (!l2[s2] || "type" === s2 && c(l2.type) && l2.type.type) ? l2 : null, prototype: e3, prefix: o2, options: i2 });
          }
        }
        function p(t3) {
          var e3 = t3.prop, c2 = t3.subprops, p2 = t3.prototype, h = t3.prefix, y = t3.options;
          n = n || r2(8727);
          var d = (h ? h + "." : "") + e3;
          h = h || "", c2 ? Object.defineProperty(p2, e3, { enumerable: true, configurable: true, get: function() {
            var t4, e4, r3 = this;
            if (this.$__.getters || (this.$__.getters = {}), !this.$__.getters[d]) {
              var i2 = Object.create(n.prototype, (t4 = this, e4 = {}, Object.getOwnPropertyNames(t4).forEach(function(r4) {
                -1 === ["isNew", "$__", "$errors", "errors", "_doc", "$locals", "$op", "__parentArray", "__index", "$isDocumentArrayElement"].indexOf(r4) || (e4[r4] = Object.getOwnPropertyDescriptor(t4, r4), e4[r4].enumerable = false);
              }), e4));
              h || (i2.$__[u] = this), i2.$__.nestedPath = d, Object.defineProperty(i2, "schema", { enumerable: false, configurable: true, writable: false, value: p2.schema }), Object.defineProperty(i2, "$__schema", { enumerable: false, configurable: true, writable: false, value: p2.schema }), Object.defineProperty(i2, o, { enumerable: false, configurable: true, writable: false, value: p2.schema }), Object.defineProperty(i2, "toObject", { enumerable: false, configurable: true, writable: false, value: function() {
                return s.clone(r3.get(d, null, { virtuals: this && this.schema && this.schema.options && this.schema.options.toObject && this.schema.options.toObject.virtuals || null }));
              } }), Object.defineProperty(i2, "$__get", { enumerable: false, configurable: true, writable: false, value: function() {
                return r3.get(d, null, { virtuals: this && this.schema && this.schema.options && this.schema.options.toObject && this.schema.options.toObject.virtuals || null });
              } }), Object.defineProperty(i2, "toJSON", { enumerable: false, configurable: true, writable: false, value: function() {
                return r3.get(d, null, { virtuals: this && this.schema && this.schema.options && this.schema.options.toJSON && this.schema.options.toJSON.virtuals || null });
              } }), Object.defineProperty(i2, "$__isNested", { enumerable: false, configurable: true, writable: false, value: true }), Object.defineProperty(i2, "$isEmpty", { enumerable: false, configurable: true, writable: false, value: function() {
                return 0 === Object.keys(this.get(d, null, f) || {}).length;
              } }), Object.defineProperty(i2, "$__parent", { enumerable: false, configurable: true, writable: false, value: this }), l(c2, i2, d, y), this.$__.getters[d] = i2;
            }
            return this.$__.getters[d];
          }, set: function(t4) {
            null != t4 && t4.$__isNested ? t4 = t4.$__get() : t4 instanceof n && !t4.$__isNested && (t4 = t4.$toObject(i)), (this.$__[u] || this).$set(d, t4);
          } }) : Object.defineProperty(p2, e3, { enumerable: true, configurable: true, get: function() {
            return this[a].call(this.$__[u] || this, d);
          }, set: function(t4) {
            this.$set.call(this.$__[u] || this, d, t4);
          } });
        }
      }, 111: (t2, e2, r2) => {
        "use strict";
        var n = r2(9981), o = r2(2392);
        t2.exports = function t3(e3, r3, i) {
          for (var s = (i = i || {}).typeOnly, a = -1 === r3.indexOf(".") ? [r3] : r3.split("."), u = null, c = "adhocOrUndefined", f = o(e3.schema, e3.get(e3.schema.options.discriminatorKey)) || e3.schema, l = 0; l < a.length; ++l) {
            var p = a.slice(0, l + 1).join(".");
            if (null != (u = f.path(p))) {
              if ("Mixed" === u.instance)
                return s ? "real" : u;
              if (c = f.pathType(p), (u.$isSingleNested || u.$isMongooseDocumentArrayElement) && null != u.schema.discriminators) {
                var h = u.schema.discriminators, y = e3.get(p + "." + n(u, "schema.options.discriminatorKey"));
                if (null == y || null == h[y])
                  continue;
                var d = a.slice(l + 1).join(".");
                return t3(e3.get(p), d, i);
              }
            } else
              c = "adhocOrUndefined";
          }
          return s ? c : u;
        };
      }, 719: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t3);
            e3 && (n2 = n2.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r3.push.apply(r3, n2);
          }
          return r3;
        }
        function o(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? n(Object(r3), true).forEach(function(e4) {
              i(t3, e4, r3[e4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : n(Object(r3)).forEach(function(e4) {
              Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
            });
          }
          return t3;
        }
        function i(t3, e3, r3) {
          return (e3 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== s(t5) || null === t5)
                return t5;
              var r4 = t5[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var n2 = r4.call(t5, "string");
                if ("object" !== s(n2))
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t5);
            }(t4);
            return "symbol" === s(e4) ? e4 : String(e4);
          }(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        function s(t3) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, s(t3);
        }
        var a = r2(6872), u = /* @__PURE__ */ new Set(["__index", "__parentArray", "_doc"]);
        t2.exports = function(t3, e3) {
          if (a.isPOJO(t3) && null != t3.$__ && null != t3._doc) {
            if (e3) {
              for (var r3 = {}, n2 = 0, i2 = Object.keys(t3); n2 < i2.length; n2++) {
                var c = i2[n2];
                "symbol" !== s(c) && "$" !== c[0] && (u.has(c) || (r3[c] = t3[c]));
              }
              return o(o({}, t3._doc), r3);
            }
            return t3._doc;
          }
          return t3;
        };
      }, 9449: (t2) => {
        "use strict";
        function e2(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r2 = 0, n = new Array(e3); r2 < e3; r2++)
            n[r2] = t3[r2];
          return n;
        }
        t2.exports = function(t3, r2, n) {
          if (0 === t3.length)
            return n();
          var o, i = t3.length, s = null, a = function(t4, r3) {
            var n2 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
            if (!n2) {
              if (Array.isArray(t4) || (n2 = function(t5, r4) {
                if (t5) {
                  if ("string" == typeof t5)
                    return e2(t5, r4);
                  var n3 = Object.prototype.toString.call(t5).slice(8, -1);
                  return "Object" === n3 && t5.constructor && (n3 = t5.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(t5) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? e2(t5, r4) : void 0;
                }
              }(t4)) || r3 && t4 && "number" == typeof t4.length) {
                n2 && (t4 = n2);
                var o2 = 0, i2 = function() {
                };
                return { s: i2, n: function() {
                  return o2 >= t4.length ? { done: true } : { done: false, value: t4[o2++] };
                }, e: function(t5) {
                  throw t5;
                }, f: i2 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var s2, a2 = true, u = false;
            return { s: function() {
              n2 = n2.call(t4);
            }, n: function() {
              var t5 = n2.next();
              return a2 = t5.done, t5;
            }, e: function(t5) {
              u = true, s2 = t5;
            }, f: function() {
              try {
                a2 || null == n2.return || n2.return();
              } finally {
                if (u)
                  throw s2;
              }
            } };
          }(t3);
          try {
            for (a.s(); !(o = a.n()).done; )
              r2(o.value, function(t4) {
                if (null == s)
                  return null != t4 ? n(s = t4) : --i <= 0 ? n() : void 0;
              });
          } catch (s2) {
            a.e(s2);
          } finally {
            a.f();
          }
        };
      }, 198: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          for (var e2, r2 = Object.keys(t3.errors || {}), n = r2.length, o = [], i = 0; i < n; ++i)
            e2 = r2[i], t3 !== t3.errors[e2] && o.push(e2 + ": " + t3.errors[e2].message);
          return o.join(", ");
        };
      }, 9981: (t2) => {
        "use strict";
        function e2(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n = new Array(e3); r3 < e3; r3++)
            n[r3] = t3[r3];
          return n;
        }
        function r2(t3, e3) {
          return null == t3 ? t3 : t3 instanceof Map ? t3.get(e3) : t3[e3];
        }
        t2.exports = function(t3, n, o) {
          var i, s = false;
          if ("string" == typeof n) {
            if (-1 === n.indexOf(".")) {
              var a = r2(t3, n);
              return null == a ? o : a;
            }
            i = n.split(".");
          } else if (s = true, 1 === (i = n).length) {
            var u = r2(t3, i[0]);
            return null == u ? o : u;
          }
          var c, f = n, l = t3, p = function(t4, r3) {
            var n2 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
            if (!n2) {
              if (Array.isArray(t4) || (n2 = function(t5, r4) {
                if (t5) {
                  if ("string" == typeof t5)
                    return e2(t5, r4);
                  var n3 = Object.prototype.toString.call(t5).slice(8, -1);
                  return "Object" === n3 && t5.constructor && (n3 = t5.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(t5) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? e2(t5, r4) : void 0;
                }
              }(t4)) || r3 && t4 && "number" == typeof t4.length) {
                n2 && (t4 = n2);
                var o2 = 0, i2 = function() {
                };
                return { s: i2, n: function() {
                  return o2 >= t4.length ? { done: true } : { done: false, value: t4[o2++] };
                }, e: function(t5) {
                  throw t5;
                }, f: i2 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var s2, a2 = true, u2 = false;
            return { s: function() {
              n2 = n2.call(t4);
            }, n: function() {
              var t5 = n2.next();
              return a2 = t5.done, t5;
            }, e: function(t5) {
              u2 = true, s2 = t5;
            }, f: function() {
              try {
                a2 || null == n2.return || n2.return();
              } finally {
                if (u2)
                  throw s2;
              }
            } };
          }(i);
          try {
            for (p.s(); !(c = p.n()).done; ) {
              var h = c.value;
              if (null == l)
                return o;
              if (!s && null != l[f])
                return l[f];
              l = r2(l, h), s || (f = f.substr(h.length + 1));
            }
          } catch (t4) {
            p.e(t4);
          } finally {
            p.f();
          }
          return null == l ? o : l;
        };
      }, 1981: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          if (null != t3 && "function" == typeof t3.constructor)
            return t3.constructor.name;
        };
      }, 6749: (t2) => {
        "use strict";
        var e2 = /^function\s*([^\s(]+)/;
        t2.exports = function(t3) {
          return t3.name || (t3.toString().trim().match(e2) || [])[1];
        };
      }, 1490: (t2) => {
        "use strict";
        var e2 = void 0 !== { env: {} } && "function" == typeof { env: {} }.nextTick ? { env: {} }.nextTick.bind({ env: {} }) : function(t3) {
          return setTimeout(t3, 0);
        };
        t2.exports = function(t3) {
          return e2(t3);
        };
      }, 1605: (t2) => {
        "use strict";
        t2.exports = function(t3, e2) {
          var r2 = t3.discriminatorMapping && t3.discriminatorMapping.value;
          if (r2 && !("sparse" in e2)) {
            var n = t3.options.discriminatorKey;
            e2.partialFilterExpression = e2.partialFilterExpression || {}, e2.partialFilterExpression[n] = r2;
          }
          return e2;
        };
      }, 8857: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          return "function" == typeof t3 && t3.constructor && "AsyncFunction" === t3.constructor.name;
        };
      }, 1563: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        t2.exports = function(t3, r2) {
          return "object" === e2(t3) && null !== t3 && t3._bsontype === r2;
        };
      }, 6584: (t2, e2, r2) => {
        "use strict";
        var n = r2(7339).isMongooseArray;
        t2.exports = function(t3) {
          return null != t3 && (n(t3) || null != t3.$__ || t3.isMongooseBuffer || t3.$isMongooseMap);
        };
      }, 5721: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        t2.exports = function(t3) {
          return n.isBuffer(t3) || "[object Object]" === Object.prototype.toString.call(t3);
        };
      }, 5543: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        t2.exports = function(t3) {
          return !!t3 && ("object" === e2(t3) || "function" == typeof t3) && "function" == typeof t3.then;
        };
      }, 9130: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        t2.exports = function(t3) {
          for (var r2 = Object.keys(t3), n = true, o = 0, i = r2.length; o < i; ++o)
            if ("object" === e2(t3[r2[o]]) && null !== t3[r2[o]]) {
              n = false;
              break;
            }
          return n;
        };
      }, 8859: (t2, e2, r2) => {
        "use strict";
        var n = r2(8107), o = r2(8486);
        t2.exports = s, s.middlewareFunctions = ["deleteOne", "save", "validate", "remove", "updateOne", "init"];
        var i = new Set(s.middlewareFunctions.flatMap(function(t3) {
          return [t3, "$__".concat(t3)];
        }));
        function s(t3, e3, r3) {
          var a = { useErrorHandlers: true, numCallbackParams: 1, nullResultByDefault: true, contextParameter: true }, u = (r3 = r3 || {}).decorateDoc ? t3 : t3.prototype;
          t3.$appliedHooks = true;
          for (var c = 0, f = Object.keys(e3.paths); c < f.length; c++) {
            var l = f[c], p = e3.paths[l], h = null;
            if (p.$isSingleNested)
              h = p.caster;
            else {
              if (!p.$isMongooseDocumentArray)
                continue;
              h = p.Constructor;
            }
            if (!h.$appliedHooks && (s(h, p.schema, r3), null != h.discriminators))
              for (var y = 0, d = Object.keys(h.discriminators); y < d.length; y++) {
                var m = d[y];
                s(h.discriminators[m], h.discriminators[m].schema, r3);
              }
          }
          var v = e3.s.hooks.filter(function(t4) {
            return "updateOne" === t4.name || "deleteOne" === t4.name ? !!t4.document : "remove" === t4.name || "init" === t4.name ? null == t4.document || !!t4.document : null == t4.query && null == t4.document || false !== t4.document;
          }).filter(function(t4) {
            return !e3.methods[t4.name] || !t4.fn[n.builtInMiddleware];
          });
          t3._middleware = v, u.$__originalValidate = u.$__originalValidate || u.$__validate;
          for (var b = 0, g = ["save", "validate", "remove", "deleteOne"]; b < g.length; b++) {
            var _ = g[b], w = "validate" === _ ? "$__originalValidate" : "$__".concat(_), O = v.createWrapper(_, u[w], null, a);
            u["$__".concat(_)] = O;
          }
          u.$__init = v.createWrapperSync("init", u.$__init, null, a);
          for (var $ = Object.keys(e3.methods), S = Object.assign({}, a, { checkForPromise: true }), j = function() {
            var e4 = P[A];
            if (i.has(e4))
              return "continue";
            if (!v.hasHooks(e4))
              return "continue";
            var r4 = u[e4];
            u[e4] = function() {
              var r5 = this, n2 = Array.prototype.slice.call(arguments), i2 = n2.slice(-1).pop(), s2 = "function" == typeof i2 ? n2.slice(0, n2.length - 1) : n2;
              return o(i2, function(t4) {
                return r5["$__".concat(e4)].apply(r5, s2.concat([t4]));
              }, t3.events);
            }, u["$__".concat(e4)] = v.createWrapper(e4, r4, null, S);
          }, A = 0, P = $; A < P.length; A++)
            j();
        }
      }, 9181: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return o(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, i2 = function() {
              };
              return { s: i2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: i2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var i = r2(3861), s = r2(6956), a = r2(8724).c, u = r2(9981), c = r2(6872), f = r2(2462), l = { toJSON: true, toObject: true, _id: true, id: true, virtuals: true, methods: true };
        t2.exports = function(t3, e3, r3, o2, p, h) {
          if (!r3 || !r3.instanceOfSchema)
            throw new Error("You must pass a valid discriminator Schema");
          if (h = null == h || h, t3.schema.discriminatorMapping && !t3.schema.discriminatorMapping.isRoot)
            throw new Error('Discriminator "' + e3 + '" can only be a discriminator of the root model');
          if (p) {
            var y = u(t3.base, "options.applyPluginsToDiscriminators", false) || !h;
            t3.base._applyPlugins(r3, { skipTopLevel: !y });
          } else
            h || s(r3);
          var d = t3.schema.options.discriminatorKey, m = t3.schema.path(d);
          if (null != m)
            c.hasUserDefinedProperty(m.options, "select") || (m.options.select = true), m.options.$skipDiscriminatorCheck = true;
          else {
            var v = {};
            v[d] = { default: void 0, select: true, $skipDiscriminatorCheck: true }, v[d][t3.schema.options.typeKey] = String, t3.schema.add(v), a({ prop: d, prototype: t3.prototype, options: t3.schema.options });
          }
          if (r3.path(d) && true !== r3.path(d).options.$skipDiscriminatorCheck)
            throw new Error('Discriminator "' + e3 + '" cannot have field with name "' + d + '"');
          var b = e3;
          if (("string" == typeof o2 && o2.length || null != o2) && (b = o2), function(e4, r4) {
            e4._baseSchema = r4, r4.paths._id && r4.paths._id.options && !r4.paths._id.options.auto && e4.remove("_id");
            for (var o3 = [], s2 = 0, a2 = Object.keys(r4.paths); s2 < a2.length; s2++) {
              var u2 = a2[s2];
              if (e4.nested[u2])
                o3.push(u2);
              else if (-1 !== u2.indexOf(".")) {
                var y2, v2 = "", g = n(u2.split(".").slice(0, -1));
                try {
                  for (g.s(); !(y2 = g.n()).done; ) {
                    var _ = y2.value;
                    v2 += (v2.length ? "." : "") + _, (e4.paths[v2] instanceof i || e4.singleNestedPaths[v2] instanceof i) && o3.push(u2);
                  }
                } catch (t4) {
                  g.e(t4);
                } finally {
                  g.f();
                }
              }
            }
            f(e4, r4, { omit: { discriminators: true, base: true, _applyDiscriminators: true }, omitNested: o3.reduce(function(t4, e5) {
              return t4["tree." + e5] = true, t4;
            }, {}) });
            for (var w = 0, O = o3; w < O.length; w++) {
              var $ = O[w];
              delete e4.paths[$];
            }
            e4.childSchemas.forEach(function(t4) {
              t4.model.prototype.$__setSchema(t4.schema);
            });
            var S = {};
            S[d] = { default: b, select: true, set: function(t4) {
              if (t4 === b || Array.isArray(b) && c.deepEqual(t4, b))
                return b;
              throw new Error(`Can't set discriminator key "` + d + '"');
            }, $skipDiscriminatorCheck: true }, S[d][e4.options.typeKey] = m ? m.options[e4.options.typeKey] : String, e4.add(S), e4.discriminatorMapping = { key: d, value: b, isRoot: false }, r4.options.collection && (e4.options.collection = r4.options.collection);
            var j = e4.options.toJSON, A = e4.options.toObject, P = e4.options._id, E = e4.options.id, x = Object.keys(e4.options);
            e4.options.discriminatorKey = r4.options.discriminatorKey;
            for (var k = 0, M = x; k < M.length; k++) {
              var T = M[k];
              if (!l[T]) {
                if ("pluralization" === T && 1 == e4.options[T] && null == r4.options[T])
                  continue;
                if (!c.deepEqual(e4.options[T], r4.options[T]))
                  throw new Error("Can't customize discriminator option " + T + " (can only modify " + Object.keys(l).join(", ") + ")");
              }
            }
            e4.options = c.clone(r4.options), j && (e4.options.toJSON = j), A && (e4.options.toObject = A), void 0 !== P && (e4.options._id = P), e4.options.id = E, h && (e4.s.hooks = t3.schema.s.hooks.merge(e4.s.hooks)), p && (e4.plugins = Array.prototype.slice.call(r4.plugins)), e4.callQueue = r4.callQueue.concat(e4.callQueue), delete e4._requiredpaths;
          }(r3, t3.schema), t3.discriminators || (t3.discriminators = {}), t3.schema.discriminatorMapping || (t3.schema.discriminatorMapping = { key: d, value: null, isRoot: true }), t3.schema.discriminators || (t3.schema.discriminators = {}), t3.schema.discriminators[e3] = r3, t3.discriminators[e3] && !r3.options.overwriteModels)
            throw new Error('Discriminator with name "' + e3 + '" already exists');
          return r3;
        };
      }, 207: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(5202), i = r2(6584), s = r2(2736), a = r2(8751);
        t2.exports = function t3(e3) {
          if (null != e3 && "object" === n(e3) && !Array.isArray(e3) && !i(e3))
            for (var r3 = 0, u = Object.keys(e3); r3 < u.length; r3++) {
              var c = u[r3], f = e3[c];
              if (-1 === c.indexOf("."))
                t3(e3[c]);
              else
                try {
                  delete e3[c], s(e3, c, f);
                } catch (t4) {
                  if (!(t4 instanceof TypeError))
                    throw t4;
                  throw new o('Conflicting dotted paths when setting document path, key: "'.concat(c, '", value: ').concat(a.inspect(f)));
                }
            }
        };
      }, 251: (t2) => {
        "use strict";
        var e2 = /\./g;
        t2.exports = function(t3) {
          if (-1 === t3.indexOf("."))
            return [t3];
          for (var r2 = t3.split(e2), n = r2.length, o = new Array(n), i = "", s = 0; s < n; ++s)
            i += 0 !== i.length ? "." + r2[s] : r2[s], o[s] = i;
          return o;
        };
      }, 2736: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var o = r2(2862);
        t2.exports = function(t3, e3, r3) {
          if (-1 !== e3.indexOf(".")) {
            var i, s = e3.split("."), a = s.pop(), u = t3, c = function(t4, e4) {
              var r4 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
              if (!r4) {
                if (Array.isArray(t4) || (r4 = function(t5, e5) {
                  if (t5) {
                    if ("string" == typeof t5)
                      return n(t5, e5);
                    var r5 = Object.prototype.toString.call(t5).slice(8, -1);
                    return "Object" === r5 && t5.constructor && (r5 = t5.constructor.name), "Map" === r5 || "Set" === r5 ? Array.from(t5) : "Arguments" === r5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r5) ? n(t5, e5) : void 0;
                  }
                }(t4)) || e4 && t4 && "number" == typeof t4.length) {
                  r4 && (t4 = r4);
                  var o2 = 0, i2 = function() {
                  };
                  return { s: i2, n: function() {
                    return o2 >= t4.length ? { done: true } : { done: false, value: t4[o2++] };
                  }, e: function(t5) {
                    throw t5;
                  }, f: i2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var s2, a2 = true, u2 = false;
              return { s: function() {
                r4 = r4.call(t4);
              }, n: function() {
                var t5 = r4.next();
                return a2 = t5.done, t5;
              }, e: function(t5) {
                u2 = true, s2 = t5;
              }, f: function() {
                try {
                  a2 || null == r4.return || r4.return();
                } finally {
                  if (u2)
                    throw s2;
                }
              } };
            }(s);
            try {
              for (c.s(); !(i = c.n()).done; ) {
                var f = i.value;
                o.has(f) || (null == u[f] && (u[f] = {}), u = u[f]);
              }
            } catch (t4) {
              c.e(t4);
            } finally {
              c.f();
            }
            o.has(a) || (u[a] = r3);
          } else {
            if (o.has(e3))
              return;
            t3[e3] = r3;
          }
        };
      }, 5837: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var o = r2(6872);
        t2.exports = function(t3, e3) {
          if (null != t3._id && null != e3 && 0 !== e3.length) {
            var r3, i = String(t3._id), s = function(t4, e4) {
              var r4 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
              if (!r4) {
                if (Array.isArray(t4) || (r4 = function(t5, e5) {
                  if (t5) {
                    if ("string" == typeof t5)
                      return n(t5, e5);
                    var r5 = Object.prototype.toString.call(t5).slice(8, -1);
                    return "Object" === r5 && t5.constructor && (r5 = t5.constructor.name), "Map" === r5 || "Set" === r5 ? Array.from(t5) : "Arguments" === r5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r5) ? n(t5, e5) : void 0;
                  }
                }(t4)) || e4 && t4 && "number" == typeof t4.length) {
                  r4 && (t4 = r4);
                  var o2 = 0, i2 = function() {
                  };
                  return { s: i2, n: function() {
                    return o2 >= t4.length ? { done: true } : { done: false, value: t4[o2++] };
                  }, e: function(t5) {
                    throw t5;
                  }, f: i2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var s2, a2 = true, u2 = false;
              return { s: function() {
                r4 = r4.call(t4);
              }, n: function() {
                var t5 = r4.next();
                return a2 = t5.done, t5;
              }, e: function(t5) {
                u2 = true, s2 = t5;
              }, f: function() {
                try {
                  a2 || null == r4.return || r4.return();
                } finally {
                  if (u2)
                    throw s2;
                }
              } };
            }(e3);
            try {
              for (s.s(); !(r3 = s.n()).done; ) {
                var a = r3.value;
                if (!a.isVirtual)
                  for (var u = a.path.split("."), c = 0; c < u.length - 1; ++c) {
                    var f = u.slice(0, c + 1).join("."), l = u.slice(c + 1).join("."), p = t3.get(f);
                    if (null != p && o.isMongooseDocumentArray(p)) {
                      for (var h = 0; h < p.length; ++h)
                        p[h].populated(l, null == a._docs[i] ? void 0 : a._docs[i][h], a);
                      break;
                    }
                  }
              }
            } catch (t4) {
              s.e(t4);
            } finally {
              s.f();
            }
          }
        };
      }, 6870: (t2, e2, r2) => {
        "use strict";
        var n = r2(5202), o = r2(8751);
        t2.exports = function(t3, e3) {
          if ("string" != typeof t3 && "function" != typeof t3)
            throw new n('Invalid ref at path "' + e3 + '". Got ' + o.inspect(t3, { depth: 0 }));
        };
      }, 7427: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          for (var e2 = {}, r2 = 0, n = Object.keys(t3); r2 < n.length; r2++) {
            var o = n[r2];
            if (-1 !== o.indexOf("."))
              for (var i = o.split("."), s = i[0], a = 0; a < i.length; ++a)
                e2[s] = 1, a + 1 < i.length && (s = s + "." + i[a + 1]);
            else
              e2[o] = 1;
          }
          return e2;
        };
      }, 2183: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        t2.exports = function(t3) {
          return null == t3 || "object" !== e2(t3) || !("$meta" in t3) && !("$slice" in t3);
        };
      }, 9098: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(2183);
        t2.exports = function t3(e3) {
          if (null == e3)
            return null;
          var r3 = Object.keys(e3), i = r3.length, s = null;
          if (1 === i && "_id" === r3[0])
            s = !e3._id;
          else
            for (; i--; ) {
              var a = r3[i];
              if ("_id" !== a && o(e3[a])) {
                s = null != e3[a] && "object" === n(e3[a]) ? t3(e3[a]) : !e3[a];
                break;
              }
            }
          return s;
        };
      }, 8486: (t2, e2, r2) => {
        "use strict";
        var n = r2(6755), o = r2(1490), i = Symbol("mongoose:emitted");
        t2.exports = function(t3, e3, r3, s) {
          if ("function" == typeof t3)
            try {
              return e3(function(e4) {
                if (null == e4)
                  t3.apply(this, arguments);
                else {
                  null != r3 && null != r3.listeners && r3.listeners("error").length > 0 && !e4[i] && (e4[i] = true, r3.emit("error", e4));
                  try {
                    t3(e4);
                  } catch (e5) {
                    return o(function() {
                      throw e5;
                    });
                  }
                }
              });
            } catch (e4) {
              return null != r3 && null != r3.listeners && r3.listeners("error").length > 0 && !e4[i] && (e4[i] = true, r3.emit("error", e4)), t3(e4);
            }
          return new (s = s || n.get())(function(t4, n2) {
            e3(function(e4, o2) {
              return null != e4 ? (null != r3 && null != r3.listeners && r3.listeners("error").length > 0 && !e4[i] && (e4[i] = true, r3.emit("error", e4)), n2(e4)) : arguments.length > 2 ? t4(Array.prototype.slice.call(arguments, 1)) : void t4(o2);
            });
          });
        };
      }, 5130: (t2, e2, r2) => {
        "use strict";
        t2.exports = o;
        var n = r2(9853);
        function o(t3, e3) {
          var r3 = { useErrorHandlers: true, numCallbackParams: 1, nullResultByDefault: true }, n2 = e3.hooks.filter(function(t4) {
            var e4 = function(t5) {
              var e5 = {};
              return t5.hasOwnProperty("query") && (e5.query = t5.query), t5.hasOwnProperty("document") && (e5.document = t5.document), e5;
            }(t4);
            return "updateOne" === t4.name ? null == e4.query || !!e4.query : "deleteOne" === t4.name ? !!e4.query || 0 === Object.keys(e4).length : "validate" === t4.name || "remove" === t4.name ? !!e4.query : null == t4.query && null == t4.document || !!t4.query;
          });
          t3.prototype._execUpdate = n2.createWrapper("update", t3.prototype._execUpdate, null, r3), t3.prototype.__distinct = n2.createWrapper("distinct", t3.prototype.__distinct, null, r3), t3.prototype.validate = n2.createWrapper("validate", t3.prototype.validate, null, r3), o.middlewareFunctions.filter(function(t4) {
            return "update" !== t4 && "distinct" !== t4 && "validate" !== t4;
          }).forEach(function(e4) {
            t3.prototype["_".concat(e4)] = n2.createWrapper(e4, t3.prototype["_".concat(e4)], null, r3);
          });
        }
        o.middlewareFunctions = n.concat(["validate"]);
      }, 9739: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(1795), i = r2(3328), s = r2(3065), a = /* @__PURE__ */ new Set(["$and", "$or"]), u = /* @__PURE__ */ new Set(["$cmp", "$eq", "$lt", "$lte", "$gt", "$gte"]), c = /* @__PURE__ */ new Set(["$multiply", "$divide", "$log", "$mod", "$trunc", "$avg", "$max", "$min", "$stdDevPop", "$stdDevSamp", "$sum"]), f = /* @__PURE__ */ new Set(["$abs", "$exp", "$ceil", "$floor", "$ln", "$log10", "$round", "$sqrt", "$sin", "$cos", "$tan", "$asin", "$acos", "$atan", "$atan2", "$asinh", "$acosh", "$atanh", "$sinh", "$cosh", "$tanh", "$degreesToRadians", "$radiansToDegrees"]), l = /* @__PURE__ */ new Set(["$arrayElemAt", "$first", "$last"]), p = /* @__PURE__ */ new Set(["$year", "$month", "$week", "$dayOfMonth", "$dayOfYear", "$hour", "$minute", "$second", "$isoDayOfWeek", "$isoWeekYear", "$isoWeek", "$millisecond"]), h = /* @__PURE__ */ new Set(["$not"]);
        function y(t3, e3, r3) {
          if (b(t3) || null === t3)
            return t3;
          null != t3.$cond ? Array.isArray(t3.$cond) ? t3.$cond = t3.$cond.map(function(t4) {
            return y(t4, e3, r3);
          }) : (t3.$cond.if = y(t3.$cond.if, e3, r3), t3.$cond.then = y(t3.$cond.then, e3, r3), t3.$cond.else = y(t3.$cond.else, e3, r3)) : null != t3.$ifNull ? t3.$ifNull.map(function(t4) {
            return y(t4, e3, r3);
          }) : null != t3.$switch && (t3.branches.map(function(t4) {
            return y(t4, e3, r3);
          }), t3.default = y(t3.default, e3, r3));
          for (var n2 = 0, o2 = Object.keys(t3); n2 < o2.length; n2++) {
            var s2 = o2[n2];
            a.has(s2) ? t3[s2] = t3[s2].map(function(t4) {
              return y(t4, e3, r3);
            }) : u.has(s2) ? t3[s2] = v(t3[s2], e3, r3) : c.has(s2) ? t3[s2] = m(t3[s2]) : f.has(s2) ? t3[s2] = d(t3[s2]) : h.has(s2) && (t3[s2] = y(t3[s2], e3, r3));
          }
          return t3.$in && (t3.$in = function(t4, e4, r4) {
            var n3 = t4[1];
            if (!b(n3))
              return t4;
            var o3 = t4[0], s3 = e4.path(n3.slice(1));
            if (null !== s3) {
              if (!s3.$isMongooseArray)
                throw new Error("Path must be an array for $in");
              return [s3.$isMongooseDocumentArray ? s3.$embeddedSchemaType.cast(o3) : s3.caster.cast(o3), n3];
            }
            if (false === r4)
              return t4;
            if ("throw" === r4)
              throw new i("$in");
          }(t3.$in, e3, r3)), t3.$size && (t3.$size = d(t3.$size)), function(t4) {
            for (var e4 = Object.keys(t4), r4 = 0, n3 = e4.length; r4 < n3; ++r4)
              void 0 === t4[e4[r4]] && delete t4[e4[r4]];
          }(t3), t3;
        }
        function d(t3) {
          if (!g(t3))
            return t3;
          try {
            return s(t3);
          } catch (e3) {
            throw new o("Number", t3);
          }
        }
        function m(t3) {
          if (!Array.isArray(t3)) {
            if (!g(t3))
              return t3;
            try {
              return s(t3);
            } catch (e3) {
              throw new o("Number", t3);
            }
          }
          return t3.map(function(t4) {
            if (!g(t4))
              return t4;
            try {
              return s(t4);
            } catch (e3) {
              throw new o("Number", t4);
            }
          });
        }
        function v(t3, e3, r3) {
          if (!Array.isArray(t3) || 2 !== t3.length)
            throw new Error("Comparison operator must be an array of length 2");
          t3[0] = y(t3[0], e3, r3);
          var a2 = t3[0];
          if (g(t3[1])) {
            var u2 = null, c2 = null, f2 = null;
            if (b(a2))
              u2 = a2.slice(1), c2 = e3.path(u2);
            else if ("object" === n(a2) && null != a2)
              for (var h2 = 0, d2 = Object.keys(a2); h2 < d2.length; h2++) {
                var m2 = d2[h2];
                p.has(m2) && b(a2[m2]) ? (u2 = a2[m2].slice(1) + "." + m2, f2 = s) : l.has(m2) && b(a2[m2]) && (u2 = a2[m2].slice(1) + "." + m2, null != (c2 = e3.path(a2[m2].slice(1))) && (c2.$isMongooseDocumentArray ? c2 = c2.$embeddedSchemaType : c2.$isMongooseArray && (c2 = c2.caster)));
              }
            var v2 = "object" === n(t3[1]) && null != t3[1] && null != t3[1].$literal;
            if (null != c2)
              t3[1] = v2 ? { $literal: c2.cast(t3[1].$literal) } : c2.cast(t3[1]);
            else if (null != f2)
              if (v2)
                try {
                  t3[1] = { $literal: f2(t3[1].$literal) };
                } catch (e4) {
                  throw new o(f2.name.replace(/^cast/, ""), t3[1], u2 + ".$literal");
                }
              else
                try {
                  t3[1] = f2(t3[1]);
                } catch (e4) {
                  throw new o(f2.name.replace(/^cast/, ""), t3[1], u2);
                }
            else {
              if (null != u2 && true === r3)
                return;
              if (null != u2 && "throw" === r3)
                throw new i(u2);
            }
          } else
            t3[1] = y(t3[1]);
          return t3;
        }
        function b(t3) {
          return "string" == typeof t3 && "$" === t3[0];
        }
        function g(t3) {
          return !("string" == typeof t3 && "$" === t3[0] || "object" === n(t3) && null !== t3 && Object.keys(t3).find(function(t4) {
            return "$" === t4[0];
          }) && null == t3.$literal);
        }
        t2.exports = function(t3, e3, r3) {
          if ("object" !== n(t3) || null === t3)
            throw new Error("`$expr` must be an object");
          return y(t3, e3, r3);
        };
      }, 9627: (t2) => {
        "use strict";
        var e2 = /* @__PURE__ */ new Set(["$ref", "$id", "$db"]);
        t2.exports = function(t3) {
          return "$" === t3[0] && !e2.has(t3);
        };
      }, 3636: (t2, e2) => {
        "use strict";
        function r2(t3) {
          return r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, r2(t3);
        }
        var n = Symbol("mongoose#trustedSymbol");
        e2.trustedSymbol = n, e2.trusted = function(t3) {
          return null == t3 || "object" !== r2(t3) || (t3[n] = true), t3;
        };
      }, 9853: (t2) => {
        "use strict";
        t2.exports = Object.freeze(["count", "countDocuments", "distinct", "estimatedDocumentCount", "find", "findOne", "findOneAndReplace", "findOneAndUpdate", "replaceOne", "update", "updateMany", "updateOne", "deleteMany", "deleteOne", "findOneAndDelete", "findOneAndRemove", "remove"]);
      }, 4133: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = { _id: { auto: true } };
          e2._id[t3.options.typeKey] = "ObjectId", t3.add(e2);
        };
      }, 6956: (t2, e2, r2) => {
        "use strict";
        var n = r2(4292);
        t2.exports = function(t3) {
          for (var e3 = 0, r3 = Object.values(n); e3 < r3.length; e3++)
            (0, r3[e3])(t3, { deduplicate: true });
          t3.plugins = Object.values(n).map(function(t4) {
            return { fn: t4, opts: { deduplicate: true } };
          }).concat(t3.plugins);
        };
      }, 7658: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          return t3.replace(/\.\$(\[[^\]]*\])?(?=\.)/g, ".0").replace(/\.\$(\[[^\]]*\])?$/g, ".0");
        };
      }, 5379: (t2, e2, r2) => {
        "use strict";
        var n = r2(9981), o = r2(5721), i = r2(1605);
        t2.exports = function(t3) {
          var e3 = [], r3 = /* @__PURE__ */ new WeakMap(), s = t3.constructor.indexTypes, a = /* @__PURE__ */ new Map();
          return function t4(u, c, f) {
            if (!r3.has(u)) {
              r3.set(u, true), c = c || "";
              for (var l = 0, p = Object.keys(u.paths); l < p.length; l++) {
                var h = p[l], y = u.paths[h];
                if (null == f || !f.paths[h]) {
                  if (y.$isMongooseDocumentArray || y.$isSingleNested) {
                    if (true !== n(y, "options.excludeIndexes") && true !== n(y, "schemaOptions.excludeIndexes") && true !== n(y, "schema.options.excludeIndexes") && t4(y.schema, c + h + "."), null != y.schema.discriminators)
                      for (var d = y.schema.discriminators, m = 0, v = Object.keys(d); m < v.length; m++) {
                        t4(d[v[m]], c + h + ".", y.schema);
                      }
                    if (y.$isMongooseDocumentArray)
                      continue;
                  }
                  var b = y._index || y.caster && y.caster._index;
                  if (false !== b && null != b) {
                    var g = {}, _ = o(b), w = _ ? b : {}, O = "string" == typeof b ? b : !!_ && b.type;
                    if (O && -1 !== s.indexOf(O))
                      g[c + h] = O;
                    else if (w.text)
                      g[c + h] = "text", delete w.text;
                    else {
                      var $ = -1 === Number(b);
                      g[c + h] = $ ? -1 : 1;
                    }
                    delete w.type, "background" in w || (w.background = true), null != u.options.autoIndex && (w._autoIndex = u.options.autoIndex);
                    var S = w && w.name;
                    "string" == typeof S && a.has(S) ? Object.assign(a.get(S), g) : (e3.push([g, w]), a.set(S, g));
                  }
                }
              }
              r3.delete(u), c ? function(t5, r4) {
                for (var n2 = t5._indexes, o2 = n2.length, i2 = 0; i2 < o2; ++i2) {
                  for (var s2 = n2[i2][0], a2 = n2[i2][1], u2 = Object.keys(s2), c2 = u2.length, f2 = {}, l2 = 0; l2 < c2; ++l2) {
                    var p2 = u2[l2];
                    f2[r4 + p2] = s2[p2];
                  }
                  var h2 = Object.assign({}, a2);
                  if (null != a2 && null != a2.partialFilterExpression) {
                    h2.partialFilterExpression = {};
                    for (var y2 = a2.partialFilterExpression, d2 = 0, m2 = Object.keys(y2); d2 < m2.length; d2++) {
                      var v2 = m2[d2];
                      h2.partialFilterExpression[r4 + v2] = y2[v2];
                    }
                  }
                  e3.push([f2, h2]);
                }
              }(u, c) : (u._indexes.forEach(function(t5) {
                var e4 = t5[1];
                "background" in e4 || (e4.background = true), i(u, e4);
              }), e3 = e3.concat(u._indexes));
            }
          }(t3), e3;
        };
      }, 37: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return o(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, i2 = function() {
              };
              return { s: i2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: i2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s, a = true, u = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a = t4.done, t4;
          }, e: function(t4) {
            u = true, s = t4;
          }, f: function() {
            try {
              a || null == r3.return || r3.return();
            } finally {
              if (u)
                throw s;
            }
          } };
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var i = r2(9981);
        t2.exports = function(t3, e3, r3) {
          var o2, s = null != r3 ? Object.keys(i(t3.tree, r3, {})) : Object.keys(t3.tree), a = new Set(Object.keys(e3));
          if (a.size > 1) {
            o2 = /* @__PURE__ */ new Set();
            var u, c = n(s);
            try {
              for (c.s(); !(u = c.n()).done; ) {
                var f = u.value;
                a.has(f) && o2.add(f);
              }
            } catch (t4) {
              c.e(t4);
            } finally {
              c.f();
            }
            var l, p = n(a);
            try {
              for (p.s(); !(l = p.n()).done; ) {
                var h = l.value;
                o2.has(h) || o2.add(h);
              }
            } catch (t4) {
              p.e(t4);
            } finally {
              p.f();
            }
            o2 = Array.from(o2);
          } else
            o2 = Array.from(a);
          return o2;
        };
      }, 9691: (t2, e2, r2) => {
        "use strict";
        var n = r2(4133);
        t2.exports = function(t3, e3) {
          return null == e3 || null == e3._id || (t3 = t3.clone(), e3._id ? t3.paths._id || (n(t3), t3.options._id = true) : (t3.remove("_id"), t3.options._id = false)), t3;
        };
      }, 6370: (t2) => {
        "use strict";
        t2.exports = function(t3, e2) {
          return null == t3 ? null : "boolean" == typeof t3 ? e2 : "boolean" == typeof t3[e2] ? t3[e2] ? e2 : null : e2 in t3 ? t3[e2] : e2;
        };
      }, 1879: (t2) => {
        "use strict";
        function e2() {
          return null != this._id ? String(this._id) : null;
        }
        t2.exports = function(t3) {
          return !t3.paths.id && t3.paths._id && t3.options.id ? (t3.virtual("id").get(e2), t3) : t3;
        };
      }, 4913: (t2) => {
        "use strict";
        t2.exports = function(t3, e2, r2) {
          for (var n = {}, o = 0, i = Object.keys(e2.tree); o < i.length; o++) {
            var s = i[o];
            r2 && (t3.paths[s] || t3.nested[s] || t3.singleNestedPaths[s]) || (n[s] = e2.tree[s]);
          }
          for (var a in t3.add(n), t3.callQueue = t3.callQueue.concat(e2.callQueue), t3.method(e2.methods), t3.static(e2.statics), e2.query)
            t3.query[a] = e2.query[a];
          for (var u in e2.virtuals)
            t3.virtuals[u] = e2.virtuals[u].clone();
          t3._indexes = t3._indexes.concat(e2._indexes || []), t3.s.hooks.merge(e2.s.hooks, false);
        };
      }, 8828: (t2, e2, r2) => {
        "use strict";
        var n = r2(3328);
        t2.exports = function(t3) {
          var e3, r3;
          t3.$immutable ? (t3.$immutableSetter = (e3 = t3.path, r3 = t3.options.immutable, function(t4, o, i, s) {
            if (null == this || null == this.$__)
              return t4;
            if (this.isNew)
              return t4;
            if (s && s.overwriteImmutable)
              return t4;
            if (!("function" == typeof r3 ? r3.call(this, this) : r3))
              return t4;
            var a = null != this.$__.priorDoc ? this.$__.priorDoc.$__getValue(e3) : this.$__getValue(e3);
            if ("throw" === this.$__.strictMode && t4 !== a)
              throw new n(e3, "Path `" + e3 + "` is immutable and strict mode is set to throw.", true);
            return a;
          }), t3.set(t3.$immutableSetter)) : t3.$immutableSetter && (t3.setters = t3.setters.filter(function(e4) {
            return e4 !== t3.$immutableSetter;
          }), delete t3.$immutableSetter);
        };
      }, 2862: (t2) => {
        "use strict";
        t2.exports = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
      }, 8770: (t2, e2) => {
        "use strict";
        e2.arrayAtomicsBackupSymbol = Symbol("mongoose#Array#atomicsBackup"), e2.arrayAtomicsSymbol = Symbol("mongoose#Array#_atomics"), e2.arrayParentSymbol = Symbol("mongoose#Array#_parent"), e2.arrayPathSymbol = Symbol("mongoose#Array#_path"), e2.arraySchemaSymbol = Symbol("mongoose#Array#_schema"), e2.documentArrayParent = Symbol("mongoose:documentArrayParent"), e2.documentIsSelected = Symbol("mongoose#Document#isSelected"), e2.documentIsModified = Symbol("mongoose#Document#isModified"), e2.documentModifiedPaths = Symbol("mongoose#Document#modifiedPaths"), e2.documentSchemaSymbol = Symbol("mongoose#Document#schema"), e2.getSymbol = Symbol("mongoose#Document#get"), e2.modelSymbol = Symbol("mongoose#Model"), e2.objectIdSymbol = Symbol("mongoose#ObjectId"), e2.populateModelSymbol = Symbol("mongoose.PopulateOptions#Model"), e2.schemaTypeSymbol = Symbol("mongoose#schemaType"), e2.sessionNewDocuments = Symbol("mongoose:ClientSession#newDocuments"), e2.scopeSymbol = Symbol("mongoose#Document#scope"), e2.validatorErrorSymbol = Symbol("mongoose:validatorError");
      }, 4922: (t2) => {
        "use strict";
        t2.exports = function(t3, e2, r2, n, o) {
          var i = null != e2 && false === e2.updatedAt, s = null != e2 && false === e2.createdAt, a = null != r2 ? r2() : t3.ownerDocument().constructor.base.now();
          if (!s && (t3.isNew || t3.$isSubdocument) && n && !t3.$__getValue(n) && t3.$__isSelected(n) && t3.$set(n, a, void 0, { overwriteImmutable: true }), !i && o && (t3.isNew || t3.$isModified())) {
            var u = a;
            t3.isNew && null != n && (u = t3.$__getValue(n)), t3.$set(o, u);
          }
        };
      }, 3767: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function i(t3, e3, r3) {
          return (e3 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== n(t5) || null === t5)
                return t5;
              var r4 = t5[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o2 = r4.call(t5, "string");
                if ("object" !== n(o2))
                  return o2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t5);
            }(t4);
            return "symbol" === n(e4) ? e4 : String(e4);
          }(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        var s = r2(4843), a = r2(6434), u = r2(9981), c = r2(6370), f = r2(4922), l = r2(8107);
        t2.exports = function(t3, e3) {
          var r3 = t3.childSchemas.find(function(t4) {
            return !!t4.schema.options.timestamps;
          });
          if (e3 || r3) {
            var n2 = c(e3, "createdAt"), p = c(e3, "updatedAt"), h = null != e3 && e3.hasOwnProperty("currentTime") ? e3.currentTime : null, y = {};
            if (t3.$timestamps = { createdAt: n2, updatedAt: p }, n2 && !t3.paths[n2]) {
              var d, m = null != t3.base ? t3.base.get("timestamps.createdAt.immutable") : null, v = null == m || m;
              y[n2] = (i(d = {}, t3.options.typeKey || "type", Date), i(d, "immutable", v), d);
            }
            p && !t3.paths[p] && (y[p] = Date), t3.add(y), t3.pre("save", function(t4) {
              var e4 = u(this, "$__.saveOptions.timestamps");
              if (false === e4)
                return t4();
              f(this, e4, h, n2, p), t4();
            }), t3.methods.initializeTimestamps = function() {
              var t4 = null != h ? h() : this.constructor.base.now();
              if (n2 && !this.get(n2) && this.$set(n2, t4), p && !this.get(p) && this.$set(p, t4), this.$isSubdocument)
                return this;
              var e4, r4 = function(t5, e5) {
                var r5 = "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
                if (!r5) {
                  if (Array.isArray(t5) || (r5 = function(t6, e6) {
                    if (t6) {
                      if ("string" == typeof t6)
                        return o(t6, e6);
                      var r6 = Object.prototype.toString.call(t6).slice(8, -1);
                      return "Object" === r6 && t6.constructor && (r6 = t6.constructor.name), "Map" === r6 || "Set" === r6 ? Array.from(t6) : "Arguments" === r6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r6) ? o(t6, e6) : void 0;
                    }
                  }(t5)) || e5 && t5 && "number" == typeof t5.length) {
                    r5 && (t5 = r5);
                    var n3 = 0, i3 = function() {
                    };
                    return { s: i3, n: function() {
                      return n3 >= t5.length ? { done: true } : { done: false, value: t5[n3++] };
                    }, e: function(t6) {
                      throw t6;
                    }, f: i3 };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var s2, a2 = true, u2 = false;
                return { s: function() {
                  r5 = r5.call(t5);
                }, n: function() {
                  var t6 = r5.next();
                  return a2 = t6.done, t6;
                }, e: function(t6) {
                  u2 = true, s2 = t6;
                }, f: function() {
                  try {
                    a2 || null == r5.return || r5.return();
                  } finally {
                    if (u2)
                      throw s2;
                  }
                } };
              }(this.$getAllSubdocs());
              try {
                for (r4.s(); !(e4 = r4.n()).done; ) {
                  var i2 = e4.value;
                  i2.initializeTimestamps && i2.initializeTimestamps();
                }
              } catch (t5) {
                r4.e(t5);
              } finally {
                r4.f();
              }
              return this;
            }, g[l.builtInMiddleware] = true;
            var b = { query: true, model: false };
            t3.pre("findOneAndReplace", b, g), t3.pre("findOneAndUpdate", b, g), t3.pre("replaceOne", b, g), t3.pre("update", b, g), t3.pre("updateOne", b, g), t3.pre("updateMany", b, g);
          }
          function g(t4) {
            var e4 = null != h ? h() : this.model.base.now();
            "findOneAndReplace" === this.op && null == this.getUpdate() && this.setUpdate({}), a(e4, n2, p, this.getUpdate(), this.options, this.schema), s(e4, this.getUpdate(), this.model.schema), t4();
          }
        };
      }, 5285: (t2, e2, r2) => {
        "use strict";
        var n = r2(1981);
        t2.exports = function(t3) {
          if ("TopologyDescription" !== n(t3))
            return false;
          var e3 = Array.from(t3.servers.values());
          return e3.length > 0 && e3.every(function(t4) {
            return "Unknown" === t4.type;
          });
        };
      }, 2082: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var o = r2(1981);
        t2.exports = function(t3) {
          if ("TopologyDescription" !== o(t3))
            return false;
          if (0 === t3.servers.size)
            return false;
          var e3, r3 = function(t4, e4) {
            var r4 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
            if (!r4) {
              if (Array.isArray(t4) || (r4 = function(t5, e5) {
                if (t5) {
                  if ("string" == typeof t5)
                    return n(t5, e5);
                  var r5 = Object.prototype.toString.call(t5).slice(8, -1);
                  return "Object" === r5 && t5.constructor && (r5 = t5.constructor.name), "Map" === r5 || "Set" === r5 ? Array.from(t5) : "Arguments" === r5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r5) ? n(t5, e5) : void 0;
                }
              }(t4)) || e4 && t4 && "number" == typeof t4.length) {
                r4 && (t4 = r4);
                var o2 = 0, i2 = function() {
                };
                return { s: i2, n: function() {
                  return o2 >= t4.length ? { done: true } : { done: false, value: t4[o2++] };
                }, e: function(t5) {
                  throw t5;
                }, f: i2 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var s, a = true, u = false;
            return { s: function() {
              r4 = r4.call(t4);
            }, n: function() {
              var t5 = r4.next();
              return a = t5.done, t5;
            }, e: function(t5) {
              u = true, s = t5;
            }, f: function() {
              try {
                a || null == r4.return || r4.return();
              } finally {
                if (u)
                  throw s;
              }
            } };
          }(t3.servers.values());
          try {
            for (r3.s(); !(e3 = r3.n()).done; ) {
              var i = e3.value;
              if (false === i.host.endsWith(".mongodb.net") || 27017 !== i.port)
                return false;
            }
          } catch (t4) {
            r3.e(t4);
          } finally {
            r3.f();
          }
          return true;
        };
      }, 3871: (t2, e2, r2) => {
        "use strict";
        var n = r2(1981);
        t2.exports = function(t3) {
          if ("TopologyDescription" !== n(t3))
            return false;
          var e3 = Array.from(t3.servers.values());
          return e3.length > 0 && e3.every(function(t4) {
            return t4.error && -1 !== t4.error.message.indexOf("Client network socket disconnected before secure TLS connection was established");
          });
        };
      }, 4843: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return o(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, i2 = function() {
              };
              return { s: i2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: i2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var i = r2(7658), s = r2(6370);
        function a(t3, e3, r3) {
          if (null != e3) {
            var o2 = Object.keys(e3).some(function(t4) {
              return "$" === t4[0];
            });
            if (o2) {
              if (e3.$push && b(e3.$push), e3.$addToSet && b(e3.$addToSet), null != e3.$set)
                for (var i2 = 0, c = Object.keys(e3.$set); i2 < c.length; i2++) {
                  var f = c[i2];
                  u(r3, f, e3.$set, t3);
                }
              if (null != e3.$setOnInsert)
                for (var l = 0, p = Object.keys(e3.$setOnInsert); l < p.length; l++) {
                  var h = p[l];
                  u(r3, h, e3.$setOnInsert, t3);
                }
            }
            var y, d = Object.keys(e3).filter(function(t4) {
              return "$" !== t4[0];
            }), m = n(d);
            try {
              for (m.s(); !(y = m.n()).done; ) {
                var v = y.value;
                u(r3, v, e3, t3);
              }
            } catch (t4) {
              m.e(t4);
            } finally {
              m.f();
            }
          }
          function b(e4) {
            for (var n2 = function() {
              var n3 = i3[o3], u2 = r3.path(n3.replace(/\.\$\./i, ".").replace(/.\$$/, ""));
              if (e4[n3] && u2 && u2.$isMongooseDocumentArray && u2.schema.options.timestamps) {
                var c2 = u2.schema.options.timestamps, f2 = s(c2, "createdAt"), l2 = s(c2, "updatedAt");
                e4[n3].$each ? e4[n3].$each.forEach(function(e5) {
                  null != l2 && (e5[l2] = t3), null != f2 && (e5[f2] = t3), a(t3, e5, u2.schema);
                }) : (null != l2 && (e4[n3][l2] = t3), null != f2 && (e4[n3][f2] = t3), a(t3, e4[n3], u2.schema));
              }
            }, o3 = 0, i3 = Object.keys(e4); o3 < i3.length; o3++)
              n2();
          }
        }
        function u(t3, e3, r3, o2) {
          var u2 = i(e3), c = t3.path(u2);
          if (c) {
            for (var f = [], l = u2.split("."), p = l.length - 1; p > 0; --p) {
              var h = t3.path(l.slice(0, p).join("."));
              null != h && (h.$isMongooseDocumentArray || h.$isSingleNested) && f.push({ parentPath: e3.split(".").slice(0, p).join("."), parentSchemaType: h });
            }
            if (Array.isArray(r3[e3]) && c.$isMongooseDocumentArray)
              !function(t4, e4, r4) {
                var n2 = e4.schema.options.timestamps, o3 = t4.length;
                if (n2)
                  for (var i2 = s(n2, "createdAt"), u3 = s(n2, "updatedAt"), c2 = 0; c2 < o3; ++c2)
                    null != u3 && (t4[c2][u3] = r4), null != i2 && (t4[c2][i2] = r4), a(r4, t4[c2], e4.schema);
                else
                  for (var f2 = 0; f2 < o3; ++f2)
                    a(r4, t4[f2], e4.schema);
              }(r3[e3], c, o2);
            else if (r3[e3] && c.$isSingleNested)
              !function(t4, e4, r4) {
                var n2 = e4.schema.options.timestamps;
                if (n2) {
                  var o3 = s(n2, "createdAt"), i2 = s(n2, "updatedAt");
                  null != i2 && (t4[i2] = r4), null != o3 && (t4[o3] = r4), a(r4, t4, e4.schema);
                } else
                  a(r4, t4, e4.schema);
              }(r3[e3], c, o2);
            else if (f.length > 0) {
              var y, d = n(f);
              try {
                for (d.s(); !(y = d.n()).done; ) {
                  var m = y.value, v = m.parentPath, b = m.parentSchemaType, g = b.schema.options.timestamps, _ = s(g, "updatedAt");
                  if (g && null != _) {
                    if (b.$isSingleNested)
                      r3[v + "." + _] = o2;
                    else if (b.$isMongooseDocumentArray) {
                      var w = e3.substring(v.length + 1);
                      if (/^\d+$/.test(w)) {
                        r3[v + "." + w][_] = o2;
                        continue;
                      }
                      var O = w.indexOf(".");
                      r3[v + "." + (w = -1 !== O ? w.substring(0, O) : w) + "." + _] = o2;
                    }
                  }
                }
              } catch (t4) {
                d.e(t4);
              } finally {
                d.f();
              }
            } else if (null != c.schema && c.schema != t3 && r3[e3]) {
              var $ = c.schema.options.timestamps, S = s($, "createdAt"), j = s($, "updatedAt");
              if (!$)
                return;
              null != j && (r3[e3][j] = o2), null != S && (r3[e3][S] = o2);
            }
          }
        }
        t2.exports = a;
      }, 6434: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(9981);
        t2.exports = function(t3, e3, r3, i, s) {
          var a = i, u = a, c = o(s, "overwrite", false), f = o(s, "timestamps", true);
          if (!f || null == a)
            return i;
          var l, p, h, y = null != f && false === f.createdAt, d = null != f && false === f.updatedAt;
          if (c)
            return i && i.$set && (i = i.$set, a.$set = {}, u = a.$set), d || !r3 || i[r3] || (u[r3] = t3), y || !e3 || i[e3] || (u[e3] = t3), a;
          if (i = i || {}, Array.isArray(a))
            return a.push({ $set: (l = {}, p = r3, h = t3, (p = function(t4) {
              var e4 = function(t5, e5) {
                if ("object" !== n(t5) || null === t5)
                  return t5;
                var r4 = t5[Symbol.toPrimitive];
                if (void 0 !== r4) {
                  var o2 = r4.call(t5, "string");
                  if ("object" !== n(o2))
                    return o2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t5);
              }(t4);
              return "symbol" === n(e4) ? e4 : String(e4);
            }(p)) in l ? Object.defineProperty(l, p, { value: h, enumerable: true, configurable: true, writable: true }) : l[p] = h, l) }), a;
          if (a.$set = a.$set || {}, !d && r3 && (!i.$currentDate || !i.$currentDate[r3])) {
            var m = false;
            if (-1 !== r3.indexOf("."))
              for (var v = r3.split("."), b = 1; b < v.length; ++b) {
                var g = v.slice(-b).join("."), _ = v.slice(0, -b).join(".");
                if (null != i[_]) {
                  i[_][g] = t3, m = true;
                  break;
                }
                if (i.$set && i.$set[_]) {
                  i.$set[_][g] = t3, m = true;
                  break;
                }
              }
            m || (a.$set[r3] = t3), a.hasOwnProperty(r3) && delete a[r3];
          }
          if (!y && e3) {
            i[e3] && delete i[e3], i.$set && i.$set[e3] && delete i.$set[e3];
            var w = false;
            if (-1 !== e3.indexOf("."))
              for (var O = e3.split("."), $ = 1; $ < O.length; ++$) {
                var S = O.slice(-$).join("."), j = O.slice(0, -$).join(".");
                if (null != i[j]) {
                  i[j][S] = t3, w = true;
                  break;
                }
                if (i.$set && i.$set[j]) {
                  i.$set[j][S] = t3, w = true;
                  break;
                }
              }
            w || (a.$setOnInsert = a.$setOnInsert || {}, a.$setOnInsert[e3] = t3);
          }
          return 0 === Object.keys(a.$set).length && delete a.$set, a;
        };
      }, 6379: (t2, e2, r2) => {
        "use strict";
        var n = r2(489).ctor("require", "modify", "init", "default", "ignore");
        function o() {
          this.activePaths = new n();
        }
        t2.exports = o, o.prototype.strictMode = true, o.prototype.fullPath = void 0, o.prototype.selected = void 0, o.prototype.shardval = void 0, o.prototype.saveError = void 0, o.prototype.validationError = void 0, o.prototype.adhocPaths = void 0, o.prototype.removing = void 0, o.prototype.inserting = void 0, o.prototype.saving = void 0, o.prototype.version = void 0, o.prototype._id = void 0, o.prototype.ownerDocument = void 0, o.prototype.populate = void 0, o.prototype.populated = void 0, o.prototype.primitiveAtomics = void 0, o.prototype.wasPopulated = false, o.prototype.scope = void 0, o.prototype.session = null, o.prototype.pathsToScopes = null, o.prototype.cachedRequired = null;
      }, 4962: (t2, e2) => {
        "use strict";
        e2.h = { transform: false, virtuals: false, getters: false, _skipDepopulateTopLevel: true, depopulate: true, flattenDecimals: false, useProjection: false };
      }, 4034: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function i(t3, e3, r3) {
          return e3 && o(t3.prototype, e3), r3 && o(t3, r3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
        }
        var s = r2(1973), a = i(function t3(e3) {
          if (function(t4, e4) {
            if (!(t4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), this._docs = {}, this._childDocs = [], null != e3 && (e3 = s(e3), Object.assign(this, e3), "object" === n(e3.subPopulate) && (this.populate = e3.subPopulate), null != e3.perDocumentLimit && null != e3.limit))
            throw new Error("Can not use `limit` and `perDocumentLimit` at the same time. Path: `" + e3.path + "`.");
        });
        t2.exports = a;
      }, 4756: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "enum", c), Object.defineProperty(u.prototype, "of", c), Object.defineProperty(u.prototype, "castNonArrays", c), t2.exports = u;
      }, 9586: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "subtype", c), t2.exports = u;
      }, 2869: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "min", c), Object.defineProperty(u.prototype, "max", c), Object.defineProperty(u.prototype, "expires", c), t2.exports = u;
      }, 887: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "excludeIndexes", c), Object.defineProperty(u.prototype, "_id", c), t2.exports = u;
      }, 8227: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "of", c), t2.exports = u;
      }, 8491: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "min", c), Object.defineProperty(u.prototype, "max", c), Object.defineProperty(u.prototype, "enum", c), Object.defineProperty(u.prototype, "populate", c), t2.exports = u;
      }, 8172: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "auto", c), Object.defineProperty(u.prototype, "populate", c), t2.exports = u;
      }, 3209: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "enum", c), Object.defineProperty(u.prototype, "match", c), Object.defineProperty(u.prototype, "lowercase", c), Object.defineProperty(u.prototype, "trim", c), Object.defineProperty(u.prototype, "uppercase", c), Object.defineProperty(u.prototype, "minLength", c), Object.defineProperty(u.prototype, "minlength", c), Object.defineProperty(u.prototype, "maxLength", c), Object.defineProperty(u.prototype, "maxlength", c), Object.defineProperty(u.prototype, "populate", c), t2.exports = u;
      }, 5446: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(c2, t3);
          var e3, r3, n2, u2 = (r3 = c2, n2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(r3);
            if (n2) {
              var o2 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, o2);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function c2() {
            return o(this, c2), u2.apply(this, arguments);
          }
          return e3 = c2, Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }(r2(4364)), c = r2(3439);
        Object.defineProperty(u.prototype, "_id", c), t2.exports = u;
      }, 4364: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function i(t3, e3, r3) {
          return e3 && o(t3.prototype, e3), r3 && o(t3, r3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
        }
        var s = r2(1973), a = i(function t3(e3) {
          if (function(t4, e4) {
            if (!(t4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), null == e3)
            return this;
          Object.assign(this, s(e3));
        }), u = r2(3439);
        Object.defineProperty(a.prototype, "type", u), Object.defineProperty(a.prototype, "validate", u), Object.defineProperty(a.prototype, "cast", u), Object.defineProperty(a.prototype, "required", u), Object.defineProperty(a.prototype, "default", u), Object.defineProperty(a.prototype, "ref", u), Object.defineProperty(a.prototype, "refPath", u), Object.defineProperty(a.prototype, "select", u), Object.defineProperty(a.prototype, "index", u), Object.defineProperty(a.prototype, "unique", u), Object.defineProperty(a.prototype, "immutable", u), Object.defineProperty(a.prototype, "sparse", u), Object.defineProperty(a.prototype, "text", u), Object.defineProperty(a.prototype, "transform", u), t2.exports = a;
      }, 1902: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function i(t3, e3, r3) {
          return e3 && o(t3.prototype, e3), r3 && o(t3, r3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
        }
        var s = r2(3439), a = i(function t3(e3) {
          !function(t4, e4) {
            if (!(t4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), Object.assign(this, e3), null != e3 && null != e3.options && (this.options = Object.assign({}, e3.options));
        });
        Object.defineProperty(a.prototype, "ref", s), Object.defineProperty(a.prototype, "refPath", s), Object.defineProperty(a.prototype, "localField", s), Object.defineProperty(a.prototype, "foreignField", s), Object.defineProperty(a.prototype, "justOne", s), Object.defineProperty(a.prototype, "count", s), Object.defineProperty(a.prototype, "match", s), Object.defineProperty(a.prototype, "options", s), Object.defineProperty(a.prototype, "skip", s), Object.defineProperty(a.prototype, "limit", s), Object.defineProperty(a.prototype, "perDocumentLimit", s), t2.exports = a;
      }, 3439: (t2) => {
        "use strict";
        t2.exports = Object.freeze({ enumerable: true, configurable: true, writable: true, value: void 0 });
      }, 4292: (t2, e2, r2) => {
        "use strict";
        e2.removeSubdocs = r2(4393), e2.saveSubdocs = r2(535), e2.sharding = r2(7472), e2.trackTransaction = r2(442), e2.validateBeforeSave = r2(9888);
      }, 4393: (t2, e2, r2) => {
        "use strict";
        var n = r2(9449);
        t2.exports = function(t3) {
          t3.s.hooks.pre("remove", false, function(t4) {
            if (this.$isSubdocument)
              t4();
            else {
              var e3 = this, r3 = this.$getAllSubdocs();
              n(r3, function(t5, e4) {
                t5.$__remove(e4);
              }, function(r4) {
                if (r4)
                  return e3.$__schema.s.hooks.execPost("remove:error", e3, [e3], { error: r4 }, function(e4) {
                    t4(e4);
                  });
                t4();
              });
            }
          }, null, true);
        };
      }, 535: (t2, e2, r2) => {
        "use strict";
        var n = r2(9449);
        t2.exports = function(t3) {
          t3.s.hooks.pre("save", false, function(t4) {
            if (this.$isSubdocument)
              t4();
            else {
              var e3 = this, r3 = this.$getAllSubdocs();
              r3.length ? n(r3, function(t5, e4) {
                t5.$__schema.s.hooks.execPre("save", t5, function(t6) {
                  e4(t6);
                });
              }, function(r4) {
                if (r4)
                  return e3.$__schema.s.hooks.execPost("save:error", e3, [e3], { error: r4 }, function(e4) {
                    t4(e4);
                  });
                t4();
              }) : t4();
            }
          }, null, true), t3.s.hooks.post("save", function(t4, e3) {
            if (this.$isSubdocument)
              e3();
            else {
              var r3 = this, o = this.$getAllSubdocs();
              o.length ? n(o, function(t5, e4) {
                t5.$__schema.s.hooks.execPost("save", t5, [t5], function(t6) {
                  e4(t6);
                });
              }, function(t5) {
                if (t5)
                  return r3.$__schema.s.hooks.execPost("save:error", r3, [r3], { error: t5 }, function(t6) {
                    e3(t6);
                  });
                e3();
              }) : e3();
            }
          }, null, true);
        };
      }, 7472: (t2, e2, r2) => {
        "use strict";
        var n = r2(8770).objectIdSymbol, o = r2(6872);
        function i() {
          var t3, e3;
          if (this.$__.shardval) {
            e3 = (t3 = Object.keys(this.$__.shardval)).length, this.$where = this.$where || {};
            for (var r3 = 0; r3 < e3; ++r3)
              this.$where[t3[r3]] = this.$__.shardval[t3[r3]];
          }
        }
        function s() {
          var t3 = this.$__schema.options.shardKey || this.$__schema.options.shardkey;
          if (o.isPOJO(t3))
            for (var e3, r3 = this.$__.shardval = {}, i2 = Object.keys(t3), s2 = i2.length, a = 0; a < s2; ++a)
              null == (e3 = this.$__getValue(i2[a])) ? r3[i2[a]] = e3 : o.isMongooseObject(e3) ? r3[i2[a]] = e3.toObject({ depopulate: true, _isNested: true }) : e3 instanceof Date || e3[n] ? r3[i2[a]] = e3 : "function" == typeof e3.valueOf ? r3[i2[a]] = e3.valueOf() : r3[i2[a]] = e3;
        }
        t2.exports = function(t3) {
          t3.post("init", function() {
            return s.call(this), this;
          }), t3.pre("save", function(t4) {
            i.call(this), t4();
          }), t3.pre("remove", function(t4) {
            i.call(this), t4();
          }), t3.post("save", function() {
            s.call(this);
          });
        }, t2.exports.storeShard = s;
      }, 442: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return o(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, i2 = function() {
              };
              return { s: i2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: i2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var i = r2(8770).arrayAtomicsSymbol, s = r2(8770).sessionNewDocuments, a = r2(6872);
        function u(t3, e3) {
          var r3 = /* @__PURE__ */ new Map();
          e3 = e3 || /* @__PURE__ */ new Map();
          var o2, s2 = n(Object.keys(t3.$__.activePaths.init).concat(Object.keys(t3.$__.activePaths.modify)));
          try {
            for (s2.s(); !(o2 = s2.n()).done; ) {
              var u2 = o2.value, f = t3.$__getValue(u2);
              if (null != f && Array.isArray(f) && a.isMongooseDocumentArray(f) && f.length && null != f[i] && 0 !== Object.keys(f[i]).length) {
                var l = e3.get(u2) || {};
                r3.set(u2, c(l, f[i]));
              }
            }
          } catch (t4) {
            s2.e(t4);
          } finally {
            s2.f();
          }
          var p, h = n(t3.$__dirty());
          try {
            for (h.s(); !(p = h.n()).done; ) {
              var y = p.value, d = y.path, m = y.value;
              if (null != m && null != m[i] && 0 !== Object.keys(m[i]).length) {
                var v = e3.get(d) || {};
                r3.set(d, c(v, m[i]));
              }
            }
          } catch (t4) {
            h.e(t4);
          } finally {
            h.f();
          }
          return r3;
        }
        function c(t3, e3) {
          return t3 = t3 || {}, null != e3.$pullAll && (t3.$pullAll = (t3.$pullAll || []).concat(e3.$pullAll)), null != e3.$push && (t3.$push = t3.$push || {}, t3.$push.$each = (t3.$push.$each || []).concat(e3.$push.$each)), null != e3.$addToSet && (t3.$addToSet = (t3.$addToSet || []).concat(e3.$addToSet)), null != e3.$set && (t3.$set = Object.assign(t3.$set || {}, e3.$set)), t3;
        }
        t2.exports = function(t3) {
          t3.pre("save", function() {
            var t4 = this.$session();
            if (null != t4 && null != t4.transaction && null != t4[s])
              if (t4[s].has(this)) {
                for (var e3 = t4[s].get(this), r3 = 0, n2 = Object.keys(this.$__.activePaths.getStatePaths("modify")); r3 < n2.length; r3++) {
                  var o2 = n2[r3];
                  e3.modifiedPaths.add(o2);
                }
                e3.atomics = u(this, e3.atomics);
              } else {
                var i2 = {};
                this.isNew && (i2.isNew = true), this.$__schema.options.versionKey && (i2.versionKey = this.get(this.$__schema.options.versionKey)), i2.modifiedPaths = new Set(Object.keys(this.$__.activePaths.getStatePaths("modify"))), i2.atomics = u(this), t4[s].set(this, i2);
              }
          });
        };
      }, 9888: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        t2.exports = function(t3) {
          t3.pre("save", false, function(t4, r2) {
            var n = this;
            if (this.$isSubdocument)
              return t4();
            if (r2 && "object" === e2(r2) && "validateBeforeSave" in r2 ? r2.validateBeforeSave : this.$__schema.options.validateBeforeSave) {
              var o = r2 && "object" === e2(r2) && "validateModifiedOnly" in r2 ? { validateModifiedOnly: r2.validateModifiedOnly } : null;
              this.$validate(o, function(e3) {
                return n.$__schema.s.hooks.execPost("save:error", n, [n], { error: e3 }, function(e4) {
                  n.$op = "save", t4(e4);
                });
              });
            } else
              t4();
          }, null, true);
        };
      }, 6755: (t2, e2, r2) => {
        "use strict";
        var n = r2(9373), o = r2(5417), i = { _promise: null, get: function() {
          return i._promise;
        }, set: function(t3) {
          n.ok("function" == typeof t3, "mongoose.Promise must be a function, got ".concat(t3)), i._promise = t3, o.Promise = t3;
        } };
        i.set(r2.g.Promise), t2.exports = i;
      }, 2888: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return i(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? i(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function i(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var s = r2(4531), a = r2(9981), u = r2(7291), c = r2(2183), f = r2(1973);
        function l(t3) {
          return function(e3) {
            e3.options || (e3.options = {}), null != t3 && Array.isArray(t3.virtuals) && ((t3 = Object.assign({}, t3)).virtuals = t3.virtuals.filter(function(t4) {
              return "string" == typeof t4 && t4.startsWith(e3.path + ".");
            }).map(function(t4) {
              return t4.slice(e3.path.length + 1);
            })), e3.options.lean = t3;
          };
        }
        e2.preparePopulationOptions = function(t3, e3) {
          var r3 = t3.options.populate, n2 = Object.keys(r3).reduce(function(t4, e4) {
            return t4.concat([r3[e4]]);
          }, []);
          return null != e3.lean && n2.filter(function(t4) {
            return null == (t4 && t4.options && t4.options.lean);
          }).forEach(l(e3.lean)), n2.forEach(function(e4) {
            e4._localModel = t3.model;
          }), n2;
        }, e2.preparePopulationOptionsMQ = function(t3, e3) {
          var r3 = t3._mongooseOptions.populate, n2 = Object.keys(r3).reduce(function(t4, e4) {
            return t4.concat([r3[e4]]);
          }, []);
          null != e3.lean && n2.filter(function(t4) {
            return null == (t4 && t4.options && t4.options.lean);
          }).forEach(l(e3.lean));
          var o2 = t3 && t3.options && t3.options.session || null;
          null != o2 && n2.forEach(function(t4) {
            null != t4.options ? "session" in t4.options || (t4.options.session = o2) : t4.options = { session: o2 };
          });
          var i2 = t3._fieldsForExec();
          return n2.forEach(function(t4) {
            t4._queryProjection = i2;
          }), n2.forEach(function(e4) {
            e4._localModel = t3.model;
          }), n2;
        }, e2.createModel = function(t3, r3, n2, o2, i2) {
          t3.hooks.execPreSync("createModel", r3);
          var s2 = t3.schema ? t3.schema.discriminatorMapping : null, a2 = s2 && s2.isRoot ? s2.key : null, c2 = r3[a2];
          if (a2 && c2 && t3.discriminators) {
            var l2 = t3.discriminators[c2] || u(t3.discriminators, c2);
            if (l2) {
              var p = f(o2);
              return e2.applyPaths(p, l2.schema), new l2(void 0, p, true);
            }
          }
          var h = { skipId: true, isNew: false, willInit: true };
          return null != i2 && "defaults" in i2 && (h.defaults = i2.defaults), new t3(void 0, n2, h);
        }, e2.createModelAndInit = function(t3, r3, n2, o2, i2, s2, a2) {
          var u2 = s2 ? { populated: s2 } : void 0, c2 = e2.createModel(t3, r3, n2, o2, i2);
          try {
            c2.$init(r3, u2, a2);
          } catch (t4) {
            a2(t4, c2);
          }
        }, e2.applyPaths = function(t3, e3) {
          var r3, i2, u2;
          if (t3) {
            for (u2 = (i2 = Object.keys(t3)).length; u2--; )
              if ("+" !== i2[u2][0]) {
                var f2 = t3[i2[u2]];
                if (c(f2) && !("_id" === i2[u2] && i2.length > 1)) {
                  r3 = !f2;
                  break;
                }
              }
          }
          var l2 = [], p = [], h = [];
          switch (function e4(n2, o2) {
            if (o2 || (o2 = ""), -1 !== h.indexOf(n2))
              return [];
            h.push(n2);
            var i3 = [];
            return n2.eachPath(function(n3, a2) {
              if (o2 && (n3 = o2 + "." + n3), a2.$isSchemaMap || n3.endsWith(".$*")) {
                var u3 = t3 && "+" + n3 in t3;
                a2.options && false === a2.options.select && !u3 && p.push(n3);
              } else {
                var c2 = A(n3, a2);
                if (null != c2 || Array.isArray(a2) || !a2.$isMongooseArray || a2.$isMongooseDocumentArray || (c2 = A(n3, a2.caster)), null != c2 && i3.push(c2), a2.schema) {
                  var f3 = e4(a2.schema, n3);
                  false === r3 && s(t3, n3, a2.schema, l2, f3);
                }
              }
            }), h.pop(), i3;
          }(e3), r3) {
            case true:
              var y, d = o(p);
              try {
                for (d.s(); !(y = d.n()).done; ) {
                  var m = y.value;
                  t3[m] = 0;
                }
              } catch (t4) {
                d.e(t4);
              } finally {
                d.f();
              }
              break;
            case false:
              e3 && e3.paths._id && e3.paths._id.options && false === e3.paths._id.options.select && (t3._id = 0);
              var v, b = o(l2);
              try {
                for (b.s(); !(v = b.n()).done; ) {
                  var g = v.value;
                  t3[g] = t3[g] || 1;
                }
              } catch (t4) {
                b.e(t4);
              } finally {
                b.f();
              }
              break;
            case void 0:
              if (null == t3)
                break;
              for (var _ = 0, w = Object.keys(t3 || {}); _ < w.length; _++) {
                var O = w[_];
                O.startsWith("+") && delete t3[O];
              }
              var $, S = o(p);
              try {
                for (S.s(); !($ = S.n()).done; ) {
                  var j = $.value;
                  null == t3[j] && (t3[j] = 0);
                }
              } catch (t4) {
                S.e(t4);
              } finally {
                S.f();
              }
          }
          function A(o2, s2) {
            var u3 = "+" + o2, c2 = t3 && u3 in t3;
            if (c2 && delete t3[u3], "boolean" == typeof s2.selected) {
              if (!r3 || !s2.selected || o2 !== e3.options.discriminatorKey || null == t3[o2] || t3[o2]) {
                if (c2)
                  return delete t3[u3], void (false === r3 && i2.length > 1 && !~i2.indexOf(o2) && (t3[o2] = 1));
                for (var f3 = o2.split("."), h2 = "", y2 = 0; y2 < f3.length; ++y2)
                  if (h2 += h2.length ? "." + f3[y2] : f3[y2], -1 !== p.indexOf(h2))
                    return;
                if (!r3 && s2 && s2.options && s2.options.$skipDiscriminatorCheck)
                  for (var d2 = "", m2 = 0; m2 < f3.length; ++m2) {
                    d2 += (0 === d2.length ? "" : ".") + f3[m2];
                    var v2 = a(t3, d2, false) || a(t3, d2 + ".$", false);
                    if (v2 && "object" !== n(v2))
                      return;
                  }
                return (s2.selected ? l2 : p).push(o2), o2;
              }
              delete t3[o2];
            }
          }
        };
      }, 5506: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3, e3, r3) {
          return (e3 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== i(t5) || null === t5)
                return t5;
              var r4 = t5[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var n2 = r4.call(t5, "string");
                if ("object" !== i(n2))
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t5);
            }(t4);
            return "symbol" === i(e4) ? e4 : String(e4);
          }(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        function i(t3) {
          return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, i(t3);
        }
        function s(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = a(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, s2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return s2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, i2 = t4;
          }, f: function() {
            try {
              s2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw i2;
            }
          } };
        }
        function a(t3, e3) {
          if (t3) {
            if ("string" == typeof t3)
              return u(t3, e3);
            var r3 = Object.prototype.toString.call(t3).slice(8, -1);
            return "Object" === r3 && t3.constructor && (r3 = t3.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t3) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? u(t3, e3) : void 0;
          }
        }
        function u(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var c, f = r2(9620).EventEmitter, l = r2(3138), p = r2(5202), h = r2(4289), y = r2(4364), d = r2(1902), m = r2(459), v = r2(4133), b = r2(9981), g = r2(1981), _ = r2(5379), w = r2(1879), O = r2(4913), $ = r2(3564), S = r2(9906).get().ReadPreference, j = r2(3767), A = r2(6872), P = r2(6870), E = r2(8751), x = r2(5130).middlewareFunctions, k = r2(8859).middlewareFunctions, M = x.concat(k).reduce(function(t3, e3) {
          return t3.add(e3);
        }, /* @__PURE__ */ new Set()), T = A.isPOJO, N = 0;
        function R(t3, e3) {
          if (!(this instanceof R))
            return new R(t3, e3);
          if (this.obj = t3, this.paths = {}, this.aliases = {}, this.subpaths = {}, this.virtuals = {}, this.singleNestedPaths = {}, this.nested = {}, this.inherits = {}, this.callQueue = [], this._indexes = [], this.methods = e3 && e3.methods || {}, this.methodOptions = {}, this.statics = e3 && e3.statics || {}, this.tree = {}, this.query = e3 && e3.query || {}, this.childSchemas = [], this.plugins = [], this.$id = ++N, this.mapPaths = [], this.s = { hooks: new l() }, this.options = this.defaultOptions(e3), Array.isArray(t3)) {
            var r3, n2 = s(t3);
            try {
              for (n2.s(); !(r3 = n2.n()).done; ) {
                var o2 = r3.value;
                this.add(o2);
              }
            } catch (t4) {
              n2.e(t4);
            } finally {
              n2.f();
            }
          } else
            t3 && this.add(t3);
          if (e3 && e3.virtuals)
            for (var i2 = e3.virtuals, a2 = 0, u2 = Object.keys(i2); a2 < u2.length; a2++) {
              var c2 = u2[a2], f2 = i2[c2].options ? i2[c2].options : void 0, p2 = this.virtual(c2, f2);
              i2[c2].get && p2.get(i2[c2].get), i2[c2].set && p2.set(i2[c2].set);
            }
          var h2 = t3 && t3._id && A.isObject(t3._id);
          !this.paths._id && this.options._id && !h2 && v(this), this.setupTimestamp(this.options.timestamps);
        }
        function I(t3, e3) {
          for (var r3 = 0, n2 = Object.keys(e3); r3 < n2.length; r3++) {
            var o2 = n2[r3], i2 = null;
            if (null != e3[o2])
              i2 = e3[o2];
            else {
              var a2 = b(t3.paths[o2], "options");
              if (null == a2)
                continue;
              i2 = a2.alias;
            }
            if (i2) {
              var u2 = t3.paths[o2].path;
              if (Array.isArray(i2)) {
                var c2, f2 = s(i2);
                try {
                  for (f2.s(); !(c2 = f2.n()).done; ) {
                    var l2 = c2.value;
                    if ("string" != typeof l2)
                      throw new Error("Invalid value for alias option on " + u2 + ", got " + l2);
                    t3.aliases[l2] = u2, t3.virtual(l2).get(function(t4) {
                      return function() {
                        return "function" == typeof this.get ? this.get(t4) : this[t4];
                      };
                    }(u2)).set(function(t4) {
                      return function(e4) {
                        return this.$set(t4, e4);
                      };
                    }(u2));
                  }
                } catch (t4) {
                  f2.e(t4);
                } finally {
                  f2.f();
                }
              } else {
                if ("string" != typeof i2)
                  throw new Error("Invalid value for alias option on " + u2 + ", got " + i2);
                t3.aliases[i2] = u2, t3.virtual(i2).get(function(t4) {
                  return function() {
                    return "function" == typeof this.get ? this.get(t4) : this[t4];
                  };
                }(u2)).set(function(t4) {
                  return function(e4) {
                    return this.$set(t4, e4);
                  };
                }(u2));
              }
            }
          }
        }
        R.prototype = Object.create(f.prototype), R.prototype.constructor = R, R.prototype.instanceOfSchema = true, Object.defineProperty(R.prototype, "$schemaType", { configurable: false, enumerable: false, writable: true }), Object.defineProperty(R.prototype, "childSchemas", { configurable: false, enumerable: true, writable: true }), Object.defineProperty(R.prototype, "virtuals", { configurable: false, enumerable: true, writable: true }), R.prototype.obj, R.prototype.paths, R.prototype.tree, R.prototype.clone = function() {
          var t3 = this, e3 = this._clone();
          return e3.on("init", function(e4) {
            return t3.emit("init", e4);
          }), e3;
        }, R.prototype._clone = function(t3) {
          var e3 = new (t3 = t3 || (null == this.base ? R : this.base.Schema))({}, this._userProvidedOptions);
          return e3.base = this.base, e3.obj = this.obj, e3.options = A.clone(this.options), e3.callQueue = this.callQueue.map(function(t4) {
            return t4;
          }), e3.methods = A.clone(this.methods), e3.methodOptions = A.clone(this.methodOptions), e3.statics = A.clone(this.statics), e3.query = A.clone(this.query), e3.plugins = Array.prototype.slice.call(this.plugins), e3._indexes = A.clone(this._indexes), e3.s.hooks = this.s.hooks.clone(), e3.tree = A.clone(this.tree), e3.paths = A.clone(this.paths), e3.nested = A.clone(this.nested), e3.subpaths = A.clone(this.subpaths), e3.singleNestedPaths = A.clone(this.singleNestedPaths), e3.childSchemas = function(t4) {
            for (var e4 = [], r3 = 0, n2 = Object.keys(t4.paths); r3 < n2.length; r3++) {
              var o2 = n2[r3], i2 = t4.paths[o2];
              (i2.$isMongooseDocumentArray || i2.$isSingleNested) && e4.push({ schema: i2.schema, model: i2.caster });
            }
            return e4;
          }(e3), e3.virtuals = A.clone(this.virtuals), e3.$globalPluginsApplied = this.$globalPluginsApplied, e3.$isRootDiscriminator = this.$isRootDiscriminator, e3.$implicitlyCreated = this.$implicitlyCreated, e3.$id = ++N, e3.$originalSchemaId = this.$id, e3.mapPaths = [].concat(this.mapPaths), null != this.discriminatorMapping && (e3.discriminatorMapping = Object.assign({}, this.discriminatorMapping)), null != this.discriminators && (e3.discriminators = Object.assign({}, this.discriminators)), null != this._applyDiscriminators && (e3._applyDiscriminators = Object.assign({}, this._applyDiscriminators)), e3.aliases = Object.assign({}, this.aliases), e3;
        }, R.prototype.pick = function(t3, e3) {
          var r3 = new R({}, e3 || this.options);
          if (!Array.isArray(t3))
            throw new p('Schema#pick() only accepts an array argument, got "' + i(t3) + '"');
          var n2, a2 = s(t3);
          try {
            for (a2.s(); !(n2 = a2.n()).done; ) {
              var u2 = n2.value;
              if (this.nested[u2])
                r3.add(o({}, u2, b(this.tree, u2)));
              else {
                var c2 = this.path(u2);
                if (null == c2)
                  throw new p("Path `" + u2 + "` is not in the schema");
                r3.add(o({}, u2, c2));
              }
            }
          } catch (t4) {
            a2.e(t4);
          } finally {
            a2.f();
          }
          return r3;
        }, R.prototype.defaultOptions = function(t3) {
          this._userProvidedOptions = null == t3 ? {} : A.clone(t3);
          var e3 = this.base && this.base.options || {}, r3 = !("strict" in e3) || e3.strict, n2 = !("id" in e3) || e3.id;
          if ((t3 = A.options({ strict: r3, strictQuery: "strict" in this._userProvidedOptions ? this._userProvidedOptions.strict : "strictQuery" in e3 ? e3.strictQuery : r3, bufferCommands: true, capped: false, versionKey: "__v", optimisticConcurrency: false, minimize: true, autoIndex: null, discriminatorKey: "__t", shardKey: null, read: null, validateBeforeSave: true, _id: true, id: n2, typeKey: "type" }, A.clone(t3))).read && (t3.read = S(t3.read)), t3.versionKey && "string" != typeof t3.versionKey)
            throw new p("`versionKey` must be falsy or string, got `" + i(t3.versionKey) + "`");
          if (t3.optimisticConcurrency && !t3.versionKey)
            throw new p("Must set `versionKey` if using `optimisticConcurrency`");
          return t3;
        }, R.prototype.discriminator = function(t3, e3) {
          return this._applyDiscriminators = Object.assign(this._applyDiscriminators || {}, o({}, t3, e3)), this;
        }, R.prototype.add = function(t3, e3) {
          if (t3 instanceof R || null != t3 && t3.instanceOfSchema)
            return O(this, t3), this;
          if (false === t3._id && null == e3 && (this.options._id = false), "__proto__." === (e3 = e3 || "") || "constructor." === e3 || "prototype." === e3)
            return this;
          for (var r3 = Object.keys(t3), n2 = this.options.typeKey, o2 = 0, i2 = r3; o2 < i2.length; o2++) {
            var s2 = i2[o2];
            if (!A.specialProperties.has(s2)) {
              var u2 = e3 + s2, c2 = t3[s2];
              if (null == c2)
                throw new TypeError("Invalid value for schema path `" + u2 + '`, got value "' + c2 + '"');
              if ("_id" !== s2 || false !== c2)
                if (c2 instanceof m || "VirtualType" === (c2.constructor && c2.constructor.name || null))
                  this.virtual(c2);
                else {
                  if (Array.isArray(c2) && 1 === c2.length && null == c2[0])
                    throw new TypeError("Invalid value for schema Array path `" + u2 + '`, got value "' + c2[0] + '"');
                  if (T(c2) || c2 instanceof y)
                    if (Object.keys(c2).length < 1)
                      e3 && (this.nested[e3.substring(0, e3.length - 1)] = true), this.path(u2, c2);
                    else if (!c2[n2] || "type" === n2 && T(c2.type) && c2.type.type)
                      this.nested[u2] = true, this.add(c2, u2 + ".");
                    else {
                      var f2 = c2[n2];
                      if (T(f2) && Object.keys(f2).length > 0) {
                        e3 && (this.nested[e3.substring(0, e3.length - 1)] = true);
                        var l2 = new R(f2), p2 = Object.assign({}, c2, { type: l2 });
                        this.path(e3 + s2, p2);
                      } else if (e3 && (this.nested[e3.substring(0, e3.length - 1)] = true), this.path(e3 + s2, c2), null != c2 && !c2.instanceOfSchema && A.isPOJO(c2.discriminators)) {
                        var h2 = this.path(e3 + s2);
                        for (var d2 in c2.discriminators)
                          h2.discriminator(d2, c2.discriminators[d2]);
                      }
                    }
                  else if (e3 && (this.nested[e3.substring(0, e3.length - 1)] = true), this.path(e3 + s2, c2), null != c2[0] && !c2[0].instanceOfSchema && A.isPOJO(c2[0].discriminators)) {
                    var v2 = this.path(e3 + s2);
                    for (var b2 in c2[0].discriminators)
                      v2.discriminator(b2, c2[0].discriminators[b2]);
                  } else if (null != c2[0] && c2[0].instanceOfSchema && A.isPOJO(c2[0]._applyDiscriminators)) {
                    var g2 = c2[0]._applyDiscriminators || [], _2 = this.path(e3 + s2);
                    for (var w2 in g2)
                      _2.discriminator(w2, g2[w2]);
                  } else if (null != c2 && c2.instanceOfSchema && A.isPOJO(c2._applyDiscriminators)) {
                    var $2 = c2._applyDiscriminators || [], S2 = this.path(e3 + s2);
                    for (var j2 in $2)
                      S2.discriminator(j2, $2[j2]);
                  }
                }
            }
          }
          var P2 = Object.fromEntries(Object.entries(t3).map(function(t4) {
            var r4, n3, o3 = (r4 = t4, n3 = 1, function(t5) {
              if (Array.isArray(t5))
                return t5;
            }(r4) || function(t5, e4) {
              var r5 = null == t5 ? null : "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
              if (null != r5) {
                var n4, o4, i3, s3, a2 = [], u3 = true, c3 = false;
                try {
                  if (i3 = (r5 = r5.call(t5)).next, 0 === e4) {
                    if (Object(r5) !== r5)
                      return;
                    u3 = false;
                  } else
                    for (; !(u3 = (n4 = i3.call(r5)).done) && (a2.push(n4.value), a2.length !== e4); u3 = true)
                      ;
                } catch (t6) {
                  c3 = true, o4 = t6;
                } finally {
                  try {
                    if (!u3 && null != r5.return && (s3 = r5.return(), Object(s3) !== s3))
                      return;
                  } finally {
                    if (c3)
                      throw o4;
                  }
                }
                return a2;
              }
            }(r4, n3) || a(r4, n3) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }())[0];
            return [e3 + o3, null];
          }));
          return I(this, P2), this;
        }, R.prototype.alias = function(t3, e3) {
          return I(this, o({}, t3, e3)), this;
        }, R.prototype.removeIndex = function(t3) {
          if (arguments.length > 1)
            throw new Error("removeIndex() takes only 1 argument");
          if ("object" !== i(t3) && "string" != typeof t3)
            throw new Error("removeIndex() may only take either an object or a string as an argument");
          if ("object" === i(t3))
            for (var e3 = this._indexes.length - 1; e3 >= 0; --e3)
              E.isDeepStrictEqual(this._indexes[e3][0], t3) && this._indexes.splice(e3, 1);
          else
            for (var r3 = this._indexes.length - 1; r3 >= 0; --r3)
              null != this._indexes[r3][1] && this._indexes[r3][1].name === t3 && this._indexes.splice(r3, 1);
          return this;
        }, R.prototype.clearIndexes = function() {
          return this._indexes.length = 0, this;
        }, R.reserved = /* @__PURE__ */ Object.create(null), R.prototype.reserved = R.reserved;
        var D = R.reserved;
        function C(t3) {
          return /\.\d+/.test(t3) ? t3.replace(/\.\d+\./g, ".$.").replace(/\.\d+$/, ".$") : t3;
        }
        function B(t3, e3) {
          if (0 === t3.mapPaths.length)
            return null;
          var r3, n2 = s(t3.mapPaths);
          try {
            for (n2.s(); !(r3 = n2.n()).done; ) {
              var o2 = r3.value.path;
              if (new RegExp("^" + o2.replace(/\.\$\*/g, "\\.[^.]+") + "$").test(e3))
                return t3.paths[o2];
            }
          } catch (t4) {
            n2.e(t4);
          } finally {
            n2.f();
          }
          return null;
        }
        function U(t3, e3) {
          var r3 = e3.split(/\.(\d+)\.|\.(\d+)$/).filter(Boolean);
          if (r3.length < 2)
            return t3.paths.hasOwnProperty(r3[0]) ? t3.paths[r3[0]] : "adhocOrUndefined";
          var n2 = t3.path(r3[0]), o2 = false;
          if (!n2)
            return "adhocOrUndefined";
          for (var i2 = r3.length - 1, s2 = 1; s2 < r3.length; ++s2) {
            o2 = false;
            var a2 = r3[s2];
            if (s2 === i2 && n2 && !/\D/.test(a2)) {
              n2 = n2.$isMongooseDocumentArray ? n2.$embeddedSchemaType : n2 instanceof c.Array ? n2.caster : void 0;
              break;
            }
            if (/\D/.test(a2)) {
              if (!n2 || !n2.schema) {
                n2 = void 0;
                break;
              }
              o2 = "nested" === n2.schema.pathType(a2), n2 = n2.schema.path(a2);
            } else
              n2 instanceof c.Array && s2 !== i2 && (n2 = n2.caster);
          }
          return t3.subpaths[e3] = n2, n2 ? "real" : o2 ? "nested" : "adhocOrUndefined";
        }
        D.prototype = D.emit = D.listeners = D.removeListener = D.collection = D.errors = D.get = D.init = D.isModified = D.isNew = D.populated = D.remove = D.save = D.toObject = D.validate = 1, D.collection = 1, R.prototype.path = function(t3, e3) {
          var r3 = C(t3);
          if (void 0 === e3) {
            var n2 = function(t4, e4, r4) {
              return t4.paths.hasOwnProperty(e4) ? t4.paths[e4] : t4.subpaths.hasOwnProperty(r4) ? t4.subpaths[r4] : t4.singleNestedPaths.hasOwnProperty(r4) && "object" === i(t4.singleNestedPaths[r4]) ? t4.singleNestedPaths[r4] : null;
            }(this, t3, r3);
            if (null != n2)
              return n2;
            var o2 = B(this, t3);
            return null != o2 ? o2 : null != (n2 = this.hasMixedParent(r3)) ? n2 : /\.\d+\.?.*$/.test(t3) ? function(t4, e4) {
              return U(t4, e4), t4.subpaths[e4];
            }(this, t3) : void 0;
          }
          var a2 = t3.split(".")[0];
          if (D[a2] && !this.options.supressReservedKeysWarning) {
            var u2 = "`".concat(a2, "` is a reserved schema pathname and may break some functionality. ") + "You are allowed to use it, but use at your own risk. To disable this warning pass `supressReservedKeysWarning` as a schema option.";
            A.warn(u2);
          }
          "object" === i(e3) && A.hasUserDefinedProperty(e3, "ref") && P(e3.ref, t3);
          var c2, f2 = t3.split(/\./), l2 = f2.pop(), p2 = this.tree, y2 = "", d2 = s(f2);
          try {
            for (d2.s(); !(c2 = d2.n()).done; ) {
              var m2 = c2.value;
              if (A.specialProperties.has(m2))
                throw new Error("Cannot set special property `" + m2 + "` on a schema");
              if (y2 = y2 += (y2.length > 0 ? "." : "") + m2, p2[m2] || (this.nested[y2] = true, p2[m2] = {}), "object" !== i(p2[m2])) {
                var v2 = "Cannot set nested path `" + t3 + "`. Parent path `" + y2 + "` already set to type " + p2[m2].name + ".";
                throw new Error(v2);
              }
              p2 = p2[m2];
            }
          } catch (t4) {
            d2.e(t4);
          } finally {
            d2.f();
          }
          p2[l2] = A.clone(e3), this.paths[t3] = this.interpretAsType(t3, e3, this.options);
          var b2 = this.paths[t3];
          if (b2.$isSchemaMap) {
            var g2 = t3 + ".$*";
            this.paths[g2] = b2.$__schemaType, this.mapPaths.push(this.paths[g2]);
          }
          if (b2.$isSingleNested) {
            for (var _2 = 0, w2 = Object.keys(b2.schema.paths); _2 < w2.length; _2++) {
              var O2 = w2[_2];
              this.singleNestedPaths[t3 + "." + O2] = b2.schema.paths[O2];
            }
            for (var $2 = 0, S2 = Object.keys(b2.schema.singleNestedPaths); $2 < S2.length; $2++) {
              var j2 = S2[$2];
              this.singleNestedPaths[t3 + "." + j2] = b2.schema.singleNestedPaths[j2];
            }
            for (var E2 = 0, x2 = Object.keys(b2.schema.subpaths); E2 < x2.length; E2++) {
              var k2 = x2[E2];
              this.singleNestedPaths[t3 + "." + k2] = b2.schema.subpaths[k2];
            }
            for (var M2 = 0, T2 = Object.keys(b2.schema.nested); M2 < T2.length; M2++) {
              var N2 = T2[M2];
              this.singleNestedPaths[t3 + "." + N2] = "nested";
            }
            Object.defineProperty(b2.schema, "base", { configurable: true, enumerable: false, writable: false, value: this.base }), b2.caster.base = this.base, this.childSchemas.push({ schema: b2.schema, model: b2.caster });
          } else
            b2.$isMongooseDocumentArray && (Object.defineProperty(b2.schema, "base", { configurable: true, enumerable: false, writable: false, value: this.base }), b2.casterConstructor.base = this.base, this.childSchemas.push({ schema: b2.schema, model: b2.casterConstructor }));
          if (b2.$isMongooseArray && b2.caster instanceof h) {
            for (var R2 = t3, I2 = b2, F2 = []; I2.$isMongooseArray; )
              R2 += ".$", I2.$isMongooseDocumentArray ? (I2.$embeddedSchemaType._arrayPath = R2, I2.$embeddedSchemaType._arrayParentPath = t3, I2 = I2.$embeddedSchemaType.clone()) : (I2.caster._arrayPath = R2, I2.caster._arrayParentPath = t3, I2 = I2.caster.clone()), I2.path = R2, F2.push(I2);
            for (var L2 = 0, q2 = F2; L2 < q2.length; L2++) {
              var V = q2[L2];
              this.subpaths[V.path] = V;
            }
          }
          if (b2.$isMongooseDocumentArray) {
            for (var W = 0, J = Object.keys(b2.schema.paths); W < J.length; W++) {
              var H = J[W], K = b2.schema.paths[H];
              this.subpaths[t3 + "." + H] = K, "object" === i(K) && null != K && (K.$isUnderneathDocArray = true);
            }
            for (var z = 0, Q = Object.keys(b2.schema.subpaths); z < Q.length; z++) {
              var G = Q[z], Y = b2.schema.subpaths[G];
              this.subpaths[t3 + "." + G] = Y, "object" === i(Y) && null != Y && (Y.$isUnderneathDocArray = true);
            }
            for (var Z = 0, X = Object.keys(b2.schema.singleNestedPaths); Z < X.length; Z++) {
              var tt = X[Z], et = b2.schema.singleNestedPaths[tt];
              this.subpaths[t3 + "." + tt] = et, "object" === i(et) && null != et && (et.$isUnderneathDocArray = true);
            }
          }
          return this;
        }, Object.defineProperty(R.prototype, "base", { configurable: true, enumerable: false, writable: true, value: null }), R.prototype.interpretAsType = function(t3, e3, s2) {
          if (e3 instanceof h) {
            if (e3.path === t3)
              return e3;
            var a2 = e3.clone();
            return a2.path = t3, a2;
          }
          var u2 = null != this.base ? this.base.Schema.Types : R.Types, c2 = null != this.base ? this.base.Types : r2(8941);
          if (!(A.isPOJO(e3) || e3 instanceof y) && "Object" !== A.getFunctionName(e3.constructor)) {
            var f2 = e3;
            (e3 = {})[s2.typeKey] = f2;
          }
          var l2, d2 = e3[s2.typeKey] && (e3[s2.typeKey] instanceof Function || "type" !== s2.typeKey || !e3.type.type) ? e3[s2.typeKey] : {};
          if (A.isPOJO(d2) || "mixed" === d2)
            return new u2.Mixed(t3, e3);
          if (Array.isArray(d2) || d2 === Array || "array" === d2 || d2 === u2.Array) {
            var m2 = d2 === Array || "array" === d2 ? e3.cast || e3.of : d2[0];
            if (m2 && m2.instanceOfSchema) {
              if (!(m2 instanceof R))
                throw new TypeError("Schema for array path `" + t3 + "` is from a different copy of the Mongoose module. Please make sure you're using the same version of Mongoose everywhere with `npm list mongoose`. If you are still getting this error, please add `new Schema()` around the path: " + "".concat(t3, ": new Schema(...)"));
              return new u2.DocumentArray(t3, m2, e3);
            }
            if (m2 && m2[s2.typeKey] && m2[s2.typeKey].instanceOfSchema) {
              if (!(m2[s2.typeKey] instanceof R))
                throw new TypeError("Schema for array path `" + t3 + "` is from a different copy of the Mongoose module. Please make sure you're using the same version of Mongoose everywhere with `npm list mongoose`. If you are still getting this error, please add `new Schema()` around the path: " + "".concat(t3, ": new Schema(...)"));
              return new u2.DocumentArray(t3, m2[s2.typeKey], e3, m2);
            }
            if (Array.isArray(m2))
              return new u2.Array(t3, this.interpretAsType(t3, m2, s2), e3);
            var v2 = null == m2 || !m2[s2.typeKey] || "type" === s2.typeKey && m2.type.type ? m2 : m2[s2.typeKey];
            if ("string" == typeof m2)
              m2 = u2[m2.charAt(0).toUpperCase() + m2.substring(1)];
            else if (A.isPOJO(v2)) {
              if (Object.keys(v2).length) {
                var b2 = { minimize: s2.minimize };
                s2.typeKey && (b2.typeKey = s2.typeKey), s2.hasOwnProperty("strict") && (b2.strict = s2.strict), s2.hasOwnProperty("strictQuery") && (b2.strictQuery = s2.strictQuery), this._userProvidedOptions.hasOwnProperty("_id") ? b2._id = this._userProvidedOptions._id : null != R.Types.DocumentArray.defaultOptions._id && (b2._id = R.Types.DocumentArray.defaultOptions._id);
                var g2 = new R(v2, b2);
                return g2.$implicitlyCreated = true, new u2.DocumentArray(t3, g2, e3);
              }
              return new u2.Array(t3, u2.Mixed, e3);
            }
            if (m2) {
              if (d2 = !m2[s2.typeKey] || "type" === s2.typeKey && m2.type.type ? m2 : m2[s2.typeKey], Array.isArray(d2))
                return new u2.Array(t3, this.interpretAsType(t3, d2, s2), e3);
              if ("ClockDate" === (l2 = "string" == typeof d2 ? d2 : d2.schemaName || A.getFunctionName(d2)) && (l2 = "Date"), void 0 === l2)
                throw new TypeError("Invalid schema configuration: " + "Could not determine the embedded type for array `".concat(t3, "`. ") + "See https://mongoosejs.com/docs/guide.html#definition for more info on supported schema syntaxes.");
              if (!u2.hasOwnProperty(l2))
                throw new TypeError("Invalid schema configuration: " + "`".concat(l2, "` is not a valid type within the array `").concat(t3, "`.") + "See https://bit.ly/mongoose-schematypes for a list of valid schema types.");
            }
            return new u2.Array(t3, m2 || u2.Mixed, e3, s2);
          }
          if (d2 && d2.instanceOfSchema)
            return new u2.Subdocument(d2, t3, e3);
          if ((l2 = n.isBuffer(d2) ? "Buffer" : "function" == typeof d2 || "object" === i(d2) ? d2.schemaName || A.getFunctionName(d2) : d2 === c2.ObjectId ? "ObjectId" : d2 === c2.Decimal128 ? "Decimal128" : null == d2 ? "" + d2 : d2.toString()) && (l2 = l2.charAt(0).toUpperCase() + l2.substring(1)), "ObjectID" === l2 && (l2 = "ObjectId"), "ClockDate" === l2 && (l2 = "Date"), void 0 === l2)
            throw new TypeError("Invalid schema configuration: `".concat(t3, "` schematype definition is ") + "invalid. See https://mongoosejs.com/docs/guide.html#definition for more info on supported schema syntaxes.");
          if (null == u2[l2])
            throw new TypeError("Invalid schema configuration: `".concat(l2, "` is not ") + "a valid type at path `".concat(t3, "`. See ") + "https://bit.ly/mongoose-schematypes for a list of valid schema types.");
          var _2 = new u2[l2](t3, e3);
          return _2.$isSchemaMap && function(t4, e4, r3, n2, i2) {
            var s3 = r3 + ".$*", a3 = { type: {} };
            A.hasUserDefinedProperty(n2, "of") && ((a3 = A.isPOJO(n2.of) && Object.keys(n2.of).length > 0 && !A.hasUserDefinedProperty(n2.of, t4.options.typeKey) ? o({}, t4.options.typeKey, new R(n2.of)) : A.isPOJO(n2.of) ? Object.assign({}, n2.of) : o({}, t4.options.typeKey, n2.of))[t4.options.typeKey] && a3[t4.options.typeKey].instanceOfSchema && a3[t4.options.typeKey].eachPath(function(t5, e5) {
              if (true === e5.options.select || false === e5.options.select)
                throw new p('Cannot use schema-level projections (`select: true` or `select: false`) within maps at path "' + r3 + "." + t5 + '"');
            }), A.hasUserDefinedProperty(n2, "ref") && (a3.ref = n2.ref)), e4.$__schemaType = t4.interpretAsType(s3, a3, i2);
          }(this, _2, t3, e3, s2), _2;
        }, R.prototype.eachPath = function(t3) {
          for (var e3 = Object.keys(this.paths), r3 = e3.length, n2 = 0; n2 < r3; ++n2)
            t3(e3[n2], this.paths[e3[n2]]);
          return this;
        }, R.prototype.requiredPaths = function(t3) {
          if (this._requiredpaths && !t3)
            return this._requiredpaths;
          for (var e3 = Object.keys(this.paths), r3 = e3.length, n2 = []; r3--; ) {
            var o2 = e3[r3];
            this.paths[o2].isRequired && n2.push(o2);
          }
          return this._requiredpaths = n2, this._requiredpaths;
        }, R.prototype.indexedPaths = function() {
          return this._indexedpaths || (this._indexedpaths = this.indexes()), this._indexedpaths;
        }, R.prototype.pathType = function(t3) {
          var e3 = C(t3);
          if (this.paths.hasOwnProperty(t3))
            return "real";
          if (this.virtuals.hasOwnProperty(t3))
            return "virtual";
          if (this.nested.hasOwnProperty(t3))
            return "nested";
          if (this.subpaths.hasOwnProperty(e3) || this.subpaths.hasOwnProperty(t3))
            return "real";
          var r3 = this.singleNestedPaths.hasOwnProperty(e3) || this.singleNestedPaths.hasOwnProperty(t3);
          return r3 ? "nested" === r3 ? "nested" : "real" : null != B(this, t3) ? "real" : /\.\d+\.|\.\d+$/.test(t3) ? U(this, t3) : "adhocOrUndefined";
        }, R.prototype.hasMixedParent = function(t3) {
          var e3 = t3.split(/\./g);
          t3 = "";
          for (var r3 = 0; r3 < e3.length; ++r3)
            if (t3 = r3 > 0 ? t3 + "." + e3[r3] : e3[r3], this.paths.hasOwnProperty(t3) && this.paths[t3] instanceof c.Mixed)
              return this.paths[t3];
          return null;
        }, R.prototype.setupTimestamp = function(t3) {
          return j(this, t3);
        }, R.prototype.queue = function(t3, e3) {
          return this.callQueue.push([t3, e3]), this;
        }, R.prototype.pre = function(t3) {
          if (t3 instanceof RegExp) {
            var e3, r3 = Array.prototype.slice.call(arguments, 1), n2 = s(M);
            try {
              for (n2.s(); !(e3 = n2.n()).done; ) {
                var o2 = e3.value;
                t3.test(o2) && this.pre.apply(this, [o2].concat(r3));
              }
            } catch (t4) {
              n2.e(t4);
            } finally {
              n2.f();
            }
            return this;
          }
          if (Array.isArray(t3)) {
            var i2, a2 = Array.prototype.slice.call(arguments, 1), u2 = s(t3);
            try {
              for (u2.s(); !(i2 = u2.n()).done; ) {
                var c2 = i2.value;
                this.pre.apply(this, [c2].concat(a2));
              }
            } catch (t4) {
              u2.e(t4);
            } finally {
              u2.f();
            }
            return this;
          }
          return this.s.hooks.pre.apply(this.s.hooks, arguments), this;
        }, R.prototype.post = function(t3) {
          if (t3 instanceof RegExp) {
            var e3, r3 = Array.prototype.slice.call(arguments, 1), n2 = s(M);
            try {
              for (n2.s(); !(e3 = n2.n()).done; ) {
                var o2 = e3.value;
                t3.test(o2) && this.post.apply(this, [o2].concat(r3));
              }
            } catch (t4) {
              n2.e(t4);
            } finally {
              n2.f();
            }
            return this;
          }
          if (Array.isArray(t3)) {
            var i2, a2 = Array.prototype.slice.call(arguments, 1), u2 = s(t3);
            try {
              for (u2.s(); !(i2 = u2.n()).done; ) {
                var c2 = i2.value;
                this.post.apply(this, [c2].concat(a2));
              }
            } catch (t4) {
              u2.e(t4);
            } finally {
              u2.f();
            }
            return this;
          }
          return this.s.hooks.post.apply(this.s.hooks, arguments), this;
        }, R.prototype.plugin = function(t3, e3) {
          if ("function" != typeof t3)
            throw new Error('First param to `schema.plugin()` must be a function, got "' + i(t3) + '"');
          if (e3 && e3.deduplicate) {
            var r3, n2 = s(this.plugins);
            try {
              for (n2.s(); !(r3 = n2.n()).done; )
                if (r3.value.fn === t3)
                  return this;
            } catch (t4) {
              n2.e(t4);
            } finally {
              n2.f();
            }
          }
          return this.plugins.push({ fn: t3, opts: e3 }), t3(this, e3), this;
        }, R.prototype.method = function(t3, e3, r3) {
          if ("string" != typeof t3)
            for (var n2 in t3)
              this.methods[n2] = t3[n2], this.methodOptions[n2] = A.clone(r3);
          else
            this.methods[t3] = e3, this.methodOptions[t3] = A.clone(r3);
          return this;
        }, R.prototype.static = function(t3, e3) {
          if ("string" != typeof t3)
            for (var r3 in t3)
              this.statics[r3] = t3[r3];
          else
            this.statics[t3] = e3;
          return this;
        }, R.prototype.index = function(t3, e3) {
          return t3 || (t3 = {}), e3 || (e3 = {}), e3.expires && A.expires(e3), this._indexes.push([t3, e3]), this;
        }, R.prototype.set = function(t3, e3, r3) {
          if (1 === arguments.length)
            return this.options[t3];
          switch (t3) {
            case "read":
              this.options[t3] = S(e3, r3), this._userProvidedOptions[t3] = this.options[t3];
              break;
            case "timestamps":
              this.setupTimestamp(e3), this.options[t3] = e3, this._userProvidedOptions[t3] = this.options[t3];
              break;
            case "_id":
              this.options[t3] = e3, this._userProvidedOptions[t3] = this.options[t3], e3 && !this.paths._id ? v(this) : !e3 && null != this.paths._id && this.paths._id.auto && this.remove("_id");
              break;
            default:
              this.options[t3] = e3, this._userProvidedOptions[t3] = this.options[t3];
          }
          return this;
        }, R.prototype.get = function(t3) {
          return this.options[t3];
        };
        var F = "2d 2dsphere hashed text".split(" ");
        function L(t3, e3) {
          var r3, n2 = e3.split("."), o2 = n2.pop(), i2 = t3.tree, a2 = s(n2);
          try {
            for (a2.s(); !(r3 = a2.n()).done; )
              i2 = i2[r3.value];
          } catch (t4) {
            a2.e(t4);
          } finally {
            a2.f();
          }
          delete i2[o2];
        }
        function q(t3) {
          return t3.startsWith("$[") && t3.endsWith("]");
        }
        Object.defineProperty(R, "indexTypes", { get: function() {
          return F;
        }, set: function() {
          throw new Error("Cannot overwrite Schema.indexTypes");
        } }), R.prototype.indexes = function() {
          return _(this);
        }, R.prototype.virtual = function(t3, e3) {
          if (t3 instanceof m || "VirtualType" === g(t3))
            return this.virtual(t3.path, t3.options);
          if (e3 = new d(e3), A.hasUserDefinedProperty(e3, ["ref", "refPath"])) {
            if (null == e3.localField)
              throw new Error("Reference virtuals require `localField` option");
            if (null == e3.foreignField)
              throw new Error("Reference virtuals require `foreignField` option");
            this.pre("init", function(r4) {
              if ($.has(t3, r4)) {
                var n3 = $.get(t3, r4);
                this.$$populatedVirtuals || (this.$$populatedVirtuals = {}), e3.justOne || e3.count ? this.$$populatedVirtuals[t3] = Array.isArray(n3) ? n3[0] : n3 : this.$$populatedVirtuals[t3] = Array.isArray(n3) ? n3 : null == n3 ? [] : [n3], $.unset(t3, r4);
              }
            });
            var r3 = this.virtual(t3);
            r3.options = e3, r3.set(function(r4) {
              this.$$populatedVirtuals || (this.$$populatedVirtuals = {}), e3.justOne || e3.count ? (this.$$populatedVirtuals[t3] = Array.isArray(r4) ? r4[0] : r4, "object" !== i(this.$$populatedVirtuals[t3]) && (this.$$populatedVirtuals[t3] = e3.count ? r4 : null)) : (this.$$populatedVirtuals[t3] = Array.isArray(r4) ? r4 : null == r4 ? [] : [r4], this.$$populatedVirtuals[t3] = this.$$populatedVirtuals[t3].filter(function(t4) {
                return t4 && "object" === i(t4);
              }));
            }), "function" == typeof e3.get && r3.get(e3.get);
            for (var n2 = t3.split("."), o2 = n2[0], s2 = 0; s2 < n2.length - 1; ++s2) {
              if (null != this.paths[o2] && this.paths[o2].$isMongooseDocumentArray) {
                var a2 = n2.slice(s2 + 1).join(".");
                this.paths[o2].schema.virtual(a2, e3);
                break;
              }
              o2 += "." + n2[s2 + 1];
            }
            return r3;
          }
          var u2 = this.virtuals, c2 = t3.split(".");
          if ("real" === this.pathType(t3))
            throw new Error('Virtual path "' + t3 + '" conflicts with a real path in the schema');
          return u2[t3] = c2.reduce(function(r4, n3, o3) {
            return r4[n3] || (r4[n3] = o3 === c2.length - 1 ? new m(e3, t3) : {}), r4[n3];
          }, this.tree), u2[t3];
        }, R.prototype.virtualpath = function(t3) {
          return this.virtuals.hasOwnProperty(t3) ? this.virtuals[t3] : null;
        }, R.prototype.remove = function(t3) {
          return "string" == typeof t3 && (t3 = [t3]), Array.isArray(t3) && t3.forEach(function(t4) {
            if (null != this.path(t4) || this.nested[t4]) {
              if (this.nested[t4]) {
                var e3, r3 = s(Object.keys(this.paths).concat(Object.keys(this.nested)));
                try {
                  for (r3.s(); !(e3 = r3.n()).done; ) {
                    var n2 = e3.value;
                    n2.startsWith(t4 + ".") && (delete this.paths[n2], delete this.nested[n2], L(this, n2));
                  }
                } catch (t5) {
                  r3.e(t5);
                } finally {
                  r3.f();
                }
                return delete this.nested[t4], void L(this, t4);
              }
              delete this.paths[t4], L(this, t4);
            }
          }, this), this;
        }, R.prototype.loadClass = function(t3, e3) {
          return t3 === Object.prototype || t3 === Function.prototype || t3.prototype.hasOwnProperty("$isMongooseModelPrototype") || (this.loadClass(Object.getPrototypeOf(t3), e3), e3 || Object.getOwnPropertyNames(t3).forEach(function(e4) {
            if (!e4.match(/^(length|name|prototype|constructor|__proto__)$/)) {
              var r3 = Object.getOwnPropertyDescriptor(t3, e4);
              r3.hasOwnProperty("value") && this.static(e4, r3.value);
            }
          }, this), Object.getOwnPropertyNames(t3.prototype).forEach(function(r3) {
            if (!r3.match(/^(constructor)$/)) {
              var n2 = Object.getOwnPropertyDescriptor(t3.prototype, r3);
              e3 || "function" == typeof n2.value && this.method(r3, n2.value), "function" == typeof n2.get && (this.virtuals[r3] && (this.virtuals[r3].getters = []), this.virtual(r3).get(n2.get)), "function" == typeof n2.set && (this.virtuals[r3] && (this.virtuals[r3].setters = []), this.virtual(r3).set(n2.set));
            }
          }, this)), this;
        }, R.prototype._getSchema = function(t3) {
          var e3 = this.path(t3), r3 = [];
          if (e3)
            return e3.$fullPath = t3, e3;
          for (var n2 = t3.split("."), o2 = 0; o2 < n2.length; ++o2)
            ("$" === n2[o2] || q(n2[o2])) && (n2[o2] = "0");
          return function t4(e4, n3) {
            for (var o3, i2, s2 = e4.length + 1; s2--; )
              if (i2 = e4.slice(0, s2).join("."), o3 = n3.path(i2)) {
                if (r3.push(i2), o3.caster) {
                  if (o3.caster instanceof c.Mixed)
                    return o3.caster.$fullPath = r3.join("."), o3.caster;
                  if (s2 !== e4.length && o3.schema) {
                    var a2 = void 0;
                    return "$" === e4[s2] || q(e4[s2]) ? s2 + 1 === e4.length ? o3 : ((a2 = t4(e4.slice(s2 + 1), o3.schema)) && (a2.$isUnderneathDocArray = a2.$isUnderneathDocArray || !o3.schema.$isSingleNested), a2) : ((a2 = t4(e4.slice(s2), o3.schema)) && (a2.$isUnderneathDocArray = a2.$isUnderneathDocArray || !o3.schema.$isSingleNested), a2);
                  }
                } else if (o3.$isSchemaMap) {
                  if (s2 >= e4.length)
                    return o3;
                  if (s2 + 1 >= e4.length)
                    return o3.$__schemaType;
                  if (o3.$__schemaType instanceof c.Mixed)
                    return o3.$__schemaType;
                  if (null != o3.$__schemaType.schema)
                    return t4(e4.slice(s2 + 1), o3.$__schemaType.schema);
                }
                return o3.$fullPath = r3.join("."), o3;
              }
          }(n2, this);
        }, R.prototype._getPathType = function(t3) {
          return this.path(t3) ? "real" : function t4(e3, r3) {
            for (var n2, o2, i2 = e3.length + 1; i2--; ) {
              if (o2 = e3.slice(0, i2).join("."), n2 = r3.path(o2))
                return n2.caster ? n2.caster instanceof c.Mixed ? { schema: n2, pathType: "mixed" } : i2 !== e3.length && n2.schema ? "$" === e3[i2] || q(e3[i2]) ? i2 === e3.length - 1 ? { schema: n2, pathType: "nested" } : t4(e3.slice(i2 + 1), n2.schema) : t4(e3.slice(i2), n2.schema) : { schema: n2, pathType: n2.$isSingleNested ? "nested" : "array" } : { schema: n2, pathType: "real" };
              if (i2 === e3.length && r3.nested[o2])
                return { schema: r3, pathType: "nested" };
            }
            return { schema: n2 || r3, pathType: "undefined" };
          }(t3.split("."), this);
        }, R.prototype._preCompile = function() {
          w(this);
        }, t2.exports = e2 = R, R.Types = c = r2(5251), e2.ObjectId = c.ObjectId;
      }, 3617: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o, i = r2(1795), s = r2(9620).EventEmitter, a = r2(4107), u = r2(5446), c = r2(4289), f = r2(2874), l = r2(8702), p = r2(1521).W, h = r2(9181), y = r2(5008), d = r2(8413), m = r2(9691), v = r2(4962).h, b = r2(6872);
        function g(t3, e3, r3) {
          var n2 = g.defaultOptions && g.defaultOptions._id;
          null != n2 && ((r3 = r3 || {})._id = n2), t3 = m(t3, r3), this.caster = _(t3), this.caster.path = e3, this.caster.prototype.$basePath = e3, this.schema = t3, this.$isSingleNested = true, this.base = t3.base, c.call(this, e3, r3, "Embedded");
        }
        function _(t3, e3) {
          o || (o = r2(2591));
          var n2 = function(t4, e4, r3) {
            this.$__parent = r3, o.apply(this, arguments), null != r3 && this.$session(r3.$session());
          };
          t3._preCompile();
          var i2 = null != e3 ? e3.prototype : o.prototype;
          for (var a2 in (n2.prototype = Object.create(i2)).$__setSchema(t3), n2.prototype.constructor = n2, n2.schema = t3, n2.$isSingleNested = true, n2.events = new s(), n2.prototype.toBSON = function() {
            return this.toObject(v);
          }, t3.methods)
            n2.prototype[a2] = t3.methods[a2];
          for (var u2 in t3.statics)
            n2[u2] = t3.statics[u2];
          for (var c2 in s.prototype)
            n2[c2] = s.prototype[c2];
          return n2;
        }
        t2.exports = g, g.prototype = Object.create(c.prototype), g.prototype.constructor = g, g.prototype.OptionsConstructor = u, g.prototype.$conditionalHandlers.$geoWithin = function(t3) {
          return { $geometry: this.castForQuery(t3.$geometry) };
        }, g.prototype.$conditionalHandlers.$near = g.prototype.$conditionalHandlers.$nearSphere = y.cast$near, g.prototype.$conditionalHandlers.$within = g.prototype.$conditionalHandlers.$geoWithin = y.cast$within, g.prototype.$conditionalHandlers.$geoIntersects = y.cast$geoIntersects, g.prototype.$conditionalHandlers.$minDistance = p, g.prototype.$conditionalHandlers.$maxDistance = p, g.prototype.$conditionalHandlers.$exists = l, g.prototype.cast = function(t3, e3, r3, o2, i2) {
          if (t3 && t3.$isSingleNested && t3.parent === e3)
            return t3;
          if (null != t3 && ("object" !== n(t3) || Array.isArray(t3)))
            throw new a(this.path, t3);
          var s2, u2 = d(this.caster, t3), c2 = e3 && e3.$__ && e3.$__.selected || {}, l2 = this.path, p2 = Object.keys(c2).reduce(function(t4, e4) {
            return e4.startsWith(l2 + ".") && ((t4 = t4 || {})[e4.substring(l2.length + 1)] = c2[e4]), t4;
          }, null);
          return i2 = Object.assign({}, i2, { priorDoc: o2 }), r3 ? (delete (s2 = new u2(void 0, p2, e3, false, { defaults: false })).$__.defaults, s2.$init(t3), f(s2, p2), s2) : 0 === Object.keys(t3).length ? new u2({}, p2, e3, void 0, i2) : new u2(t3, p2, e3, void 0, i2);
        }, g.prototype.castForQuery = function(t3, e3, r3) {
          var n2;
          if (2 === arguments.length) {
            if (!(n2 = this.$conditionalHandlers[t3]))
              throw new Error("Can't use " + t3);
            return n2.call(this, e3);
          }
          if (null == (e3 = t3))
            return e3;
          this.options.runSetters && (e3 = this._applySetters(e3));
          var o2 = d(this.caster, e3), s2 = null != r3 && null != r3.strict ? r3.strict : void 0;
          try {
            e3 = new o2(e3, s2);
          } catch (t4) {
            if (!(t4 instanceof i))
              throw new i("Embedded", e3, this.path, t4, this);
            throw t4;
          }
          return e3;
        }, g.prototype.doValidate = function(t3, e3, r3, n2) {
          var o2 = d(this.caster, t3);
          if (!t3 || t3 instanceof o2 || (t3 = new o2(t3, null, null != r3 && null != r3.$__ ? r3 : null)), n2 && n2.skipSchemaValidators)
            return t3 ? t3.validate(e3) : e3(null);
          c.prototype.doValidate.call(this, t3, function(r4) {
            return r4 ? e3(r4) : t3 ? void t3.validate(e3) : e3(null);
          }, r3, n2);
        }, g.prototype.doValidateSync = function(t3, e3, r3) {
          if (!r3 || !r3.skipSchemaValidators) {
            var n2 = c.prototype.doValidateSync.call(this, t3, e3);
            if (n2)
              return n2;
          }
          if (t3)
            return t3.validateSync();
        }, g.prototype.discriminator = function(t3, e3, r3) {
          r3 = r3 || {};
          var n2 = b.isPOJO(r3) ? r3.value : r3, o2 = "boolean" != typeof r3.clone || r3.clone;
          return e3.instanceOfSchema && o2 && (e3 = e3.clone()), e3 = h(this.caster, t3, e3, n2), this.caster.discriminators[t3] = _(e3, this.caster), this.caster.discriminators[t3];
        }, g.defaultOptions = {}, g.set = c.set, g.prototype.toJSON = function() {
          return { path: this.path, options: this.options };
        }, g.prototype.clone = function() {
          var t3 = Object.assign({}, this.options), e3 = new this.constructor(this.schema, this.path, t3);
          return e3.validators = this.validators.slice(), void 0 !== this.requiredValidator && (e3.requiredValidator = this.requiredValidator), e3.caster.discriminators = Object.assign({}, this.caster.discriminators), e3;
        };
      }, 94: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        var i, s, a = r2(8702), u = r2(3053), c = r2(5202), f = r2(4756), l = r2(4289), p = l.CastError, h = r2(3861), y = r2(6069), d = r2(6787), m = r2(9627), v = r2(8751), b = r2(6872), g = r2(1521).W, _ = r2(5008), w = r2(7291), O = Symbol("mongoose#isNestedArray"), $ = Object.freeze({});
        function S(t3, e3, n2, o2) {
          s || (s = r2(8941).Embedded);
          var i2, a2, u2 = "type";
          if (o2 && o2.typeKey && (u2 = o2.typeKey), this.schemaOptions = o2, e3) {
            var c2 = {};
            b.isPOJO(e3) && (e3[u2] ? (delete (c2 = b.clone(e3))[u2], e3 = e3[u2]) : e3 = h), null != n2 && null != n2.ref && null == c2.ref && (c2.ref = n2.ref), e3 === Object && (e3 = h);
            var f2 = "string" == typeof e3 ? e3 : b.getFunctionName(e3), p2 = r2(5251), y2 = p2.hasOwnProperty(f2) ? p2[f2] : e3;
            if (this.casterConstructor = y2, this.casterConstructor instanceof S && (this.casterConstructor[O] = true), "function" != typeof y2 || y2.$isArraySubdocument || y2.$isSchemaMap)
              this.caster = y2, this.caster instanceof s || (this.caster.path = t3);
            else {
              var d2 = this.caster instanceof s ? null : t3;
              this.caster = new y2(d2, c2);
            }
            this.$embeddedSchemaType = this.caster;
          }
          if (this.$isMongooseArray = true, l.call(this, t3, n2, "Array"), null != this.defaultValue && (i2 = this.defaultValue, a2 = "function" == typeof i2), !("defaultValue" in this) || void 0 !== this.defaultValue) {
            var m2 = function() {
              return a2 ? i2.call(this) : null != i2 ? [].concat(i2) : [];
            };
            m2.$runBeforeSetters = !a2, this.default(m2);
          }
        }
        S.schemaName = "Array", S.options = { castNonArrays: true }, S.defaultOptions = {}, S.set = l.set, S.prototype = Object.create(l.prototype), S.prototype.constructor = S, S.prototype.OptionsConstructor = f, S._checkRequired = l.prototype.checkRequired, S.checkRequired = l.checkRequired, S.prototype.checkRequired = function(t3, e3) {
          return "object" === o(t3) && l._isRef(this, t3, e3, true) ? !!t3 : ("function" == typeof this.constructor.checkRequired ? this.constructor.checkRequired() : S.checkRequired())(t3);
        }, S.prototype.enum = function() {
          for (var t3 = this; ; ) {
            var e3 = t3 && t3.caster && t3.caster.instance;
            if ("Array" !== e3) {
              if ("String" !== e3 && "Number" !== e3)
                throw new Error("`enum` can only be set on an array of strings or numbers , not " + e3);
              break;
            }
            t3 = t3.caster;
          }
          var r3 = arguments;
          return !Array.isArray(arguments) && b.isObject(arguments) && (r3 = b.object.vals(r3)), t3.caster.enum.apply(t3.caster, r3), this;
        }, S.prototype.applyGetters = function(t3, e3) {
          if (null != e3 && null != e3.$__ && e3.$populated(this.path))
            return t3;
          var r3 = l.prototype.applyGetters.call(this, t3, e3);
          if (Array.isArray(r3))
            for (var n2 = b.isMongooseArray(r3) ? r3.__array : r3, o2 = n2.length, i2 = 0; i2 < o2; ++i2)
              n2[i2] = this.caster.applyGetters(n2[i2], e3);
          return r3;
        }, S.prototype._applySetters = function(t3, e3, r3, n2) {
          if (this.casterConstructor.$isMongooseArray && S.options.castNonArrays && !this[O]) {
            for (var o2 = 0, i2 = this; null != i2 && i2.$isMongooseArray && !i2.$isMongooseDocumentArray; )
              ++o2, i2 = i2.casterConstructor;
            if (null != t3 && 0 !== t3.length) {
              var s2 = y(t3);
              if (s2.min === s2.max && s2.max < o2 && s2.containsNonArrayItem)
                for (var a2 = s2.max; a2 < o2; ++a2)
                  t3 = [t3];
            }
          }
          return l.prototype._applySetters.call(this, t3, e3, r3, n2);
        }, S.prototype.cast = function(t3, e3, n2, o2, s2) {
          var a2, u2;
          if (i || (i = r2(8941).Array), Array.isArray(t3)) {
            if (!t3.length && e3) {
              var c2 = e3.schema.indexedPaths(), f2 = this.path;
              for (a2 = 0, u2 = c2.length; a2 < u2; ++a2) {
                var l2 = c2[a2][0][f2];
                if ("2dsphere" === l2 || "2d" === l2)
                  return;
              }
              var y2 = this.path.endsWith(".coordinates") ? this.path.substring(0, this.path.lastIndexOf(".")) : null;
              if (null != y2) {
                for (a2 = 0, u2 = c2.length; a2 < u2; ++a2)
                  if ("2dsphere" === c2[a2][0][y2])
                    return;
              }
            }
            s2 = s2 || $;
            var d2 = b.isMongooseArray(t3) ? t3.__array : t3;
            if (d2 = (t3 = i(d2, s2.path || this._arrayPath || this.path, e3, this)).__array, n2 && null != e3 && null != e3.$__ && e3.$populated(this.path))
              return t3;
            var m2 = this.caster, g2 = m2.$isMongooseArray;
            if (m2 && this.casterConstructor !== h)
              try {
                var _2 = d2.length;
                for (a2 = 0; a2 < _2; a2++) {
                  var w2 = {};
                  g2 && (null != s2.arrayPath || null != m2._arrayParentPath) && (w2.arrayPathIndex = a2), d2[a2] = m2.applySetters(d2[a2], e3, n2, void 0, w2);
                }
              } catch (e4) {
                throw new p("[" + e4.kind + "]", v.inspect(t3), this.path + "." + a2, e4, this);
              }
            return t3;
          }
          var O2 = null != this.options.castNonArrays ? this.options.castNonArrays : S.options.castNonArrays;
          if (n2 || O2)
            return e3 && n2 && e3.markModified(this.path), this.cast([t3], e3, n2);
          throw new p("Array", v.inspect(t3), this.path, null, this);
        }, S.prototype._castForPopulate = function(t3, e3) {
          if (i || (i = r2(8941).Array), Array.isArray(t3)) {
            var n2, o2 = t3.__array ? t3.__array : t3, s2 = o2.length, a2 = this.caster;
            if (a2 && this.casterConstructor !== h)
              try {
                for (n2 = 0; n2 < s2; n2++) {
                  var u2 = {};
                  a2.$isMongooseArray && null != a2._arrayParentPath && (u2.arrayPathIndex = n2), o2[n2] = a2.cast(o2[n2], e3, false, void 0, u2);
                }
              } catch (e4) {
                throw new p("[" + e4.kind + "]", v.inspect(t3), this.path + "." + n2, e4, this);
              }
            return t3;
          }
          throw new p("Array", v.inspect(t3), this.path, null, this);
        }, S.prototype.$toObject = S.prototype.toObject, S.prototype.discriminator = function(t3, e3) {
          for (var r3 = this; r3.$isMongooseArray && !r3.$isMongooseDocumentArray; )
            if (null == (r3 = r3.casterConstructor) || "function" == typeof r3)
              throw new c("You can only add an embedded discriminator on a document array, " + this.path + " is a plain array");
          return r3.discriminator(t3, e3);
        }, S.prototype.clone = function() {
          var t3 = Object.assign({}, this.options), e3 = new this.constructor(this.path, this.caster, t3, this.schemaOptions);
          return e3.validators = this.validators.slice(), void 0 !== this.requiredValidator && (e3.requiredValidator = this.requiredValidator), e3;
        }, S.prototype.castForQuery = function(t3, e3) {
          var r3, n2, o2 = this;
          if (2 === arguments.length) {
            if (!(r3 = this.$conditionalHandlers[t3]))
              throw new Error("Can't use " + t3 + " with Array.");
            n2 = r3.call(this, e3);
          } else {
            n2 = t3;
            var i2 = this.casterConstructor;
            if (n2 && i2.discriminators && i2.schema && i2.schema.options && i2.schema.options.discriminatorKey)
              if ("string" == typeof n2[i2.schema.options.discriminatorKey] && i2.discriminators[n2[i2.schema.options.discriminatorKey]])
                i2 = i2.discriminators[n2[i2.schema.options.discriminatorKey]];
              else {
                var s2 = w(i2.discriminators, n2[i2.schema.options.discriminatorKey]);
                s2 && (i2 = s2);
              }
            var a2 = this.casterConstructor.prototype, u2 = a2 && (a2.castForQuery || a2.cast);
            !u2 && i2.castForQuery && (u2 = i2.castForQuery);
            var c2 = this.caster;
            Array.isArray(n2) ? (this.setters.reverse().forEach(function(t4) {
              n2 = t4.call(o2, n2, o2);
            }), n2 = n2.map(function(t4) {
              return b.isObject(t4) && t4.$elemMatch ? t4 : u2 ? t4 = u2.call(c2, t4) : null != t4 ? t4 = new i2(t4) : t4;
            })) : u2 ? n2 = u2.call(c2, n2) : null != n2 && (n2 = new i2(n2));
          }
          return n2;
        };
        var j = S.prototype.$conditionalHandlers = {};
        function A(t3) {
          return function(e3) {
            if (!Array.isArray(e3))
              throw new TypeError("conditional " + t3 + " requires an array");
            var r3, o2 = [], i2 = function(t4, e4) {
              var r4 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
              if (!r4) {
                if (Array.isArray(t4) || (r4 = function(t5, e5) {
                  if (t5) {
                    if ("string" == typeof t5)
                      return n(t5, e5);
                    var r5 = Object.prototype.toString.call(t5).slice(8, -1);
                    return "Object" === r5 && t5.constructor && (r5 = t5.constructor.name), "Map" === r5 || "Set" === r5 ? Array.from(t5) : "Arguments" === r5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r5) ? n(t5, e5) : void 0;
                  }
                }(t4)) || e4 && t4 && "number" == typeof t4.length) {
                  r4 && (t4 = r4);
                  var o3 = 0, i3 = function() {
                  };
                  return { s: i3, n: function() {
                    return o3 >= t4.length ? { done: true } : { done: false, value: t4[o3++] };
                  }, e: function(t5) {
                    throw t5;
                  }, f: i3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var s3, a2 = true, u2 = false;
              return { s: function() {
                r4 = r4.call(t4);
              }, n: function() {
                var t5 = r4.next();
                return a2 = t5.done, t5;
              }, e: function(t5) {
                u2 = true, s3 = t5;
              }, f: function() {
                try {
                  a2 || null == r4.return || r4.return();
                } finally {
                  if (u2)
                    throw s3;
                }
              } };
            }(e3);
            try {
              for (i2.s(); !(r3 = i2.n()).done; ) {
                var s2 = r3.value;
                o2.push(d(this.casterConstructor.schema, s2));
              }
            } catch (t4) {
              i2.e(t4);
            } finally {
              i2.f();
            }
            return o2;
          };
        }
        j.$all = function(t3) {
          return Array.isArray(t3) || (t3 = [t3]), t3 = t3.map(function(t4) {
            if (!b.isObject(t4))
              return t4;
            if (null != t4.$elemMatch)
              return { $elemMatch: d(this.casterConstructor.schema, t4.$elemMatch) };
            var e3 = {};
            return e3[this.path] = t4, d(this.casterConstructor.schema, e3)[this.path];
          }, this), this.castForQuery(t3);
        }, j.$options = String, j.$elemMatch = function(t3) {
          for (var e3 = Object.keys(t3), r3 = e3.length, n2 = 0; n2 < r3; ++n2) {
            var o2 = e3[n2], i2 = t3[o2];
            m(o2) && null != i2 && (t3[o2] = this.castForQuery(o2, i2));
          }
          var s2 = this && this.casterConstructor && this.casterConstructor.schema && this.casterConstructor.schema.options && this.casterConstructor.schema.options.discriminatorKey, a2 = this && this.casterConstructor && this.casterConstructor.schema && this.casterConstructor.schema.discriminators || {};
          return null != s2 && null != t3[s2] && null != a2[t3[s2]] ? d(a2[t3[s2]], t3) : d(this.casterConstructor.schema, t3);
        }, j.$geoIntersects = _.cast$geoIntersects, j.$or = A("$or"), j.$and = A("$and"), j.$nor = A("$nor"), j.$near = j.$nearSphere = _.cast$near, j.$within = j.$geoWithin = _.cast$within, j.$size = j.$minDistance = j.$maxDistance = g, j.$exists = a, j.$type = u, j.$eq = j.$gt = j.$gte = j.$lt = j.$lte = j.$ne = j.$not = j.$regex = S.prototype.castForQuery, j.$nin = l.prototype.$conditionalHandlers.$nin, j.$in = l.prototype.$conditionalHandlers.$in, t2.exports = S;
      }, 6470: (t2, e2, r2) => {
        "use strict";
        var n = r2(1795), o = r2(4289), i = r2(6670), s = r2(6872);
        function a(t3, e3) {
          o.call(this, t3, e3, "Boolean");
        }
        a.schemaName = "Boolean", a.defaultOptions = {}, a.prototype = Object.create(o.prototype), a.prototype.constructor = a, a._cast = i, a.set = o.set, a.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this._defaultCaster), this._cast = t3), this._cast;
        }, a._defaultCaster = function(t3) {
          if (null != t3 && "boolean" != typeof t3)
            throw new Error();
          return t3;
        }, a._checkRequired = function(t3) {
          return true === t3 || false === t3;
        }, a.checkRequired = o.checkRequired, a.prototype.checkRequired = function(t3) {
          return this.constructor._checkRequired(t3);
        }, Object.defineProperty(a, "convertToTrue", { get: function() {
          return i.convertToTrue;
        }, set: function(t3) {
          i.convertToTrue = t3;
        } }), Object.defineProperty(a, "convertToFalse", { get: function() {
          return i.convertToFalse;
        }, set: function(t3) {
          i.convertToFalse = t3;
        } }), a.prototype.cast = function(t3) {
          var e3;
          e3 = "function" == typeof this._castFunction ? this._castFunction : "function" == typeof this.constructor.cast ? this.constructor.cast() : a.cast();
          try {
            return e3(t3);
          } catch (e4) {
            throw new n("Boolean", t3, this.path, e4, this);
          }
        }, a.$conditionalHandlers = s.options(o.prototype.$conditionalHandlers, {}), a.prototype.castForQuery = function(t3, e3) {
          var r3;
          return 2 === arguments.length ? (r3 = a.$conditionalHandlers[t3]) ? r3.call(this, e3) : this._castForQuery(e3) : this._castForQuery(t3);
        }, a.prototype._castNullish = function(t3) {
          if (void 0 === t3)
            return t3;
          var e3 = "function" == typeof this.constructor.cast ? this.constructor.cast() : a.cast();
          return null == e3 ? t3 : !(e3.convertToFalse instanceof Set && e3.convertToFalse.has(t3)) && (!!(e3.convertToTrue instanceof Set && e3.convertToTrue.has(t3)) || t3);
        }, t2.exports = a;
      }, 8800: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        var i = r2(4051), s = r2(9586), a = r2(4289), u = r2(4282), c = r2(6872), f = i.Binary, l = a.CastError;
        function p(t3, e3) {
          a.call(this, t3, e3, "Buffer");
        }
        function h(t3) {
          return this.castForQuery(t3);
        }
        p.schemaName = "Buffer", p.defaultOptions = {}, p.prototype = Object.create(a.prototype), p.prototype.constructor = p, p.prototype.OptionsConstructor = s, p._checkRequired = function(t3) {
          return !(!t3 || !t3.length);
        }, p.set = a.set, p.checkRequired = a.checkRequired, p.prototype.checkRequired = function(t3, e3) {
          return a._isRef(this, t3, e3, true) ? !!t3 : this.constructor._checkRequired(t3);
        }, p.prototype.cast = function(t3, e3, r3) {
          var s2;
          if (a._isRef(this, t3, e3, r3)) {
            if (t3 && t3.isMongooseBuffer)
              return t3;
            if (n.isBuffer(t3))
              return t3 && t3.isMongooseBuffer || (t3 = new i(t3, [this.path, e3]), null != this.options.subtype && (t3._subtype = this.options.subtype)), t3;
            if (t3 instanceof f) {
              if (s2 = new i(t3.value(true), [this.path, e3]), "number" != typeof t3.sub_type)
                throw new l("Buffer", t3, this.path, null, this);
              return s2._subtype = t3.sub_type, s2;
            }
            if (null == t3 || c.isNonBuiltinObject(t3))
              return this._castRef(t3, e3, r3);
          }
          if (t3 && t3._id && (t3 = t3._id), t3 && t3.isMongooseBuffer)
            return t3;
          if (n.isBuffer(t3))
            return t3 && t3.isMongooseBuffer || (t3 = new i(t3, [this.path, e3]), null != this.options.subtype && (t3._subtype = this.options.subtype)), t3;
          if (t3 instanceof f) {
            if (s2 = new i(t3.value(true), [this.path, e3]), "number" != typeof t3.sub_type)
              throw new l("Buffer", t3, this.path, null, this);
            return s2._subtype = t3.sub_type, s2;
          }
          if (null === t3)
            return t3;
          var u2 = o(t3);
          if ("string" === u2 || "number" === u2 || Array.isArray(t3) || "object" === u2 && "Buffer" === t3.type && Array.isArray(t3.data))
            return "number" === u2 && (t3 = [t3]), s2 = new i(t3, [this.path, e3]), null != this.options.subtype && (s2._subtype = this.options.subtype), s2;
          throw new l("Buffer", t3, this.path, null, this);
        }, p.prototype.subtype = function(t3) {
          return this.options.subtype = t3, this;
        }, p.prototype.$conditionalHandlers = c.options(a.prototype.$conditionalHandlers, { $bitsAllClear: u, $bitsAnyClear: u, $bitsAllSet: u, $bitsAnySet: u, $gt: h, $gte: h, $lt: h, $lte: h }), p.prototype.castForQuery = function(t3, e3) {
          var r3;
          if (2 === arguments.length) {
            if (!(r3 = this.$conditionalHandlers[t3]))
              throw new Error("Can't use " + t3 + " with Buffer.");
            return r3.call(this, e3);
          }
          e3 = t3;
          var n2 = this._castForQuery(e3);
          return n2 ? n2.toObject({ transform: false, virtuals: false }) : n2;
        }, t2.exports = p;
      }, 6535: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(4888), i = r2(2869), s = r2(4289), a = r2(195), u = r2(1981), c = r2(6872), f = s.CastError;
        function l(t3, e3) {
          s.call(this, t3, e3, "Date");
        }
        function p(t3) {
          return this.cast(t3);
        }
        l.schemaName = "Date", l.defaultOptions = {}, l.prototype = Object.create(s.prototype), l.prototype.constructor = l, l.prototype.OptionsConstructor = i, l._cast = a, l.set = s.set, l.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this._defaultCaster), this._cast = t3), this._cast;
        }, l._defaultCaster = function(t3) {
          if (null != t3 && !(t3 instanceof Date))
            throw new Error();
          return t3;
        }, l.prototype.expires = function(t3) {
          return "Object" !== u(this._index) && (this._index = {}), this._index.expires = t3, c.expires(this._index), this;
        }, l._checkRequired = function(t3) {
          return t3 instanceof Date;
        }, l.checkRequired = s.checkRequired, l.prototype.checkRequired = function(t3, e3) {
          return "object" === n(t3) && s._isRef(this, t3, e3, true) ? null != t3 : ("function" == typeof this.constructor.checkRequired ? this.constructor.checkRequired() : l.checkRequired())(t3);
        }, l.prototype.min = function(t3, e3) {
          if (this.minValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.minValidator;
          }, this)), t3) {
            var r3 = e3 || o.messages.Date.min;
            "string" == typeof r3 && (r3 = r3.replace(/{MIN}/, t3 === Date.now ? "Date.now()" : t3.toString()));
            var n2 = this;
            this.validators.push({ validator: this.minValidator = function(e4) {
              var r4 = t3;
              "function" == typeof t3 && t3 !== Date.now && (r4 = r4.call(this));
              var o2 = r4 === Date.now ? r4() : n2.cast(r4);
              return null === e4 || e4.valueOf() >= o2.valueOf();
            }, message: r3, type: "min", min: t3 });
          }
          return this;
        }, l.prototype.max = function(t3, e3) {
          if (this.maxValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.maxValidator;
          }, this)), t3) {
            var r3 = e3 || o.messages.Date.max;
            "string" == typeof r3 && (r3 = r3.replace(/{MAX}/, t3 === Date.now ? "Date.now()" : t3.toString()));
            var n2 = this;
            this.validators.push({ validator: this.maxValidator = function(e4) {
              var r4 = t3;
              "function" == typeof r4 && r4 !== Date.now && (r4 = r4.call(this));
              var o2 = r4 === Date.now ? r4() : n2.cast(r4);
              return null === e4 || e4.valueOf() <= o2.valueOf();
            }, message: r3, type: "max", max: t3 });
          }
          return this;
        }, l.prototype.cast = function(t3) {
          var e3;
          e3 = "function" == typeof this._castFunction ? this._castFunction : "function" == typeof this.constructor.cast ? this.constructor.cast() : l.cast();
          try {
            return e3(t3);
          } catch (e4) {
            throw new f("date", t3, this.path, e4, this);
          }
        }, l.prototype.$conditionalHandlers = c.options(s.prototype.$conditionalHandlers, { $gt: p, $gte: p, $lt: p, $lte: p }), l.prototype.castForQuery = function(t3, e3) {
          if (2 !== arguments.length)
            return this._castForQuery(t3);
          var r3 = this.$conditionalHandlers[t3];
          if (!r3)
            throw new Error("Can't use " + t3 + " with Date.");
          return r3.call(this, e3);
        }, t2.exports = l;
      }, 6621: (t2, e2, r2) => {
        "use strict";
        var n = r2(4289), o = n.CastError, i = r2(6209), s = r2(6872), a = r2(1563);
        function u(t3, e3) {
          n.call(this, t3, e3, "Decimal128");
        }
        function c(t3) {
          return this.cast(t3);
        }
        u.schemaName = "Decimal128", u.defaultOptions = {}, u.prototype = Object.create(n.prototype), u.prototype.constructor = u, u._cast = i, u.set = n.set, u.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this._defaultCaster), this._cast = t3), this._cast;
        }, u._defaultCaster = function(t3) {
          if (null != t3 && !a(t3, "Decimal128"))
            throw new Error();
          return t3;
        }, u._checkRequired = function(t3) {
          return a(t3, "Decimal128");
        }, u.checkRequired = n.checkRequired, u.prototype.checkRequired = function(t3, e3) {
          return n._isRef(this, t3, e3, true) ? !!t3 : ("function" == typeof this.constructor.checkRequired ? this.constructor.checkRequired() : u.checkRequired())(t3);
        }, u.prototype.cast = function(t3, e3, r3) {
          if (n._isRef(this, t3, e3, r3))
            return a(t3, "Decimal128") ? t3 : this._castRef(t3, e3, r3);
          var i2;
          i2 = "function" == typeof this._castFunction ? this._castFunction : "function" == typeof this.constructor.cast ? this.constructor.cast() : u.cast();
          try {
            return i2(t3);
          } catch (e4) {
            throw new o("Decimal128", t3, this.path, e4, this);
          }
        }, u.prototype.$conditionalHandlers = s.options(n.prototype.$conditionalHandlers, { $gt: c, $gte: c, $lt: c, $lte: c }), t2.exports = u;
      }, 4504: (t2, e2, r2) => {
        "use strict";
        var n, o, i = r2(94), s = r2(1795), a = r2(9620).EventEmitter, u = r2(887), c = r2(4289), f = r2(3617), l = r2(9181), p = r2(9691), h = r2(719), y = r2(6872), d = r2(8413), m = r2(8770).arrayAtomicsSymbol, v = r2(8770).arrayPathSymbol, b = r2(8770).documentArrayParent;
        function g(t3, e3, r3, n2) {
          var o2 = g.defaultOptions && g.defaultOptions._id;
          null != o2 && ((n2 = n2 || {})._id = o2), null != n2 && null != n2._id ? e3 = p(e3, n2) : null != r3 && null != r3._id && (e3 = p(e3, r3));
          var s2 = _(e3, r3);
          s2.prototype.$basePath = t3, i.call(this, t3, s2, r3), this.schema = e3, this.schemaOptions = n2 || {}, this.$isMongooseDocumentArray = true, this.Constructor = s2, s2.base = e3.base;
          var a2 = this.defaultValue;
          "defaultValue" in this && void 0 === a2 || this.default(function() {
            var t4 = a2.call(this);
            return null == t4 || Array.isArray(t4) || (t4 = [t4]), t4;
          });
          var u2 = this;
          this.$embeddedSchemaType = new c(t3 + ".$", { required: this && this.schemaOptions && this.schemaOptions.required || false }), this.$embeddedSchemaType.cast = function(t4, e4, r4) {
            return u2.cast(t4, e4, r4)[0];
          }, this.$embeddedSchemaType.doValidate = function(t4, e4, r4, n3) {
            var o3 = d(this.caster, t4);
            return !t4 || t4 instanceof o3 || (t4 = new o3(t4, r4, null, null, n3 && null != n3.index ? n3.index : null)), f.prototype.doValidate.call(this, t4, e4, r4, n3);
          }, this.$embeddedSchemaType.$isMongooseDocumentArrayElement = true, this.$embeddedSchemaType.caster = this.Constructor, this.$embeddedSchemaType.schema = this.schema;
        }
        function _(t3, e3, n2) {
          function i2() {
            o.apply(this, arguments), null != this.__parentArray && null != this.__parentArray.getArrayParent() && this.$session(this.__parentArray.getArrayParent().$session());
          }
          o || (o = r2(1568)), t3._preCompile();
          var s2 = null != n2 ? n2.prototype : o.prototype;
          for (var u2 in i2.prototype = Object.create(s2), i2.prototype.$__setSchema(t3), i2.schema = t3, i2.prototype.constructor = i2, i2.$isArraySubdocument = true, i2.events = new a(), i2.base = t3.base, t3.methods)
            i2.prototype[u2] = t3.methods[u2];
          for (var c2 in t3.statics)
            i2[c2] = t3.statics[c2];
          for (var f2 in a.prototype)
            i2[f2] = a.prototype[f2];
          return i2.options = e3, i2;
        }
        g.schemaName = "DocumentArray", g.options = { castNonArrays: true }, g.prototype = Object.create(i.prototype), g.prototype.constructor = g, g.prototype.OptionsConstructor = u, g.prototype.discriminator = function(t3, e3, r3) {
          "function" == typeof t3 && (t3 = y.getFunctionName(t3)), r3 = r3 || {};
          var n2 = y.isPOJO(r3) ? r3.value : r3, o2 = "boolean" != typeof r3.clone || r3.clone;
          e3.instanceOfSchema && o2 && (e3 = e3.clone());
          var i2 = _(e3 = l(this.casterConstructor, t3, e3, n2), null, this.casterConstructor);
          i2.baseCasterConstructor = this.casterConstructor;
          try {
            Object.defineProperty(i2, "name", { value: t3 });
          } catch (t4) {
          }
          return this.casterConstructor.discriminators[t3] = i2, this.casterConstructor.discriminators[t3];
        }, g.prototype.doValidate = function(t3, e3, i2, s2) {
          n || (n = r2(6077));
          var a2 = this;
          try {
            c.prototype.doValidate.call(this, t3, function(r3) {
              if (r3)
                return e3(r3);
              var u2, c2 = t3 && t3.length;
              if (!c2)
                return e3();
              if (s2 && s2.updateValidator)
                return e3();
              function f2(t4) {
                null != t4 && (u2 = t4), --c2 || e3(u2);
              }
              y.isMongooseDocumentArray(t3) || (t3 = new n(t3, a2.path, i2));
              for (var l2 = 0, p2 = c2; l2 < p2; ++l2) {
                var h2 = t3[l2];
                if (null != h2) {
                  if (!(h2 instanceof o)) {
                    var m2 = d(a2.casterConstructor, t3[l2]);
                    h2 = t3[l2] = new m2(h2, t3, void 0, void 0, l2);
                  }
                  null == s2 || !s2.validateModifiedOnly || h2.$isModified() ? h2.$__validate(f2) : --c2 || e3(u2);
                } else
                  --c2 || e3(u2);
              }
            }, i2);
          } catch (t4) {
            return e3(t4);
          }
        }, g.prototype.doValidateSync = function(t3, e3, r3) {
          var n2 = c.prototype.doValidateSync.call(this, t3, e3);
          if (null != n2)
            return n2;
          var i2 = t3 && t3.length, s2 = null;
          if (i2) {
            for (var a2 = 0, u2 = i2; a2 < u2; ++a2) {
              var f2 = t3[a2];
              if (f2) {
                if (!(f2 instanceof o)) {
                  var l2 = d(this.casterConstructor, t3[a2]);
                  f2 = t3[a2] = new l2(f2, t3, void 0, void 0, a2);
                }
                if (null == r3 || !r3.validateModifiedOnly || f2.$isModified()) {
                  var p2 = f2.validateSync();
                  p2 && null == s2 && (s2 = p2);
                }
              }
            }
            return s2;
          }
        }, g.prototype.getDefault = function(t3, e3, o2) {
          var i2 = "function" == typeof this.defaultValue ? this.defaultValue.call(t3) : this.defaultValue;
          if (null == i2)
            return i2;
          if (o2 && o2.skipCast)
            return i2;
          n || (n = r2(6077)), Array.isArray(i2) || (i2 = [i2]), i2 = new n(i2, this.path, t3);
          for (var s2 = 0; s2 < i2.length; ++s2) {
            var a2 = new (d(this.casterConstructor, i2[s2]))({}, i2, void 0, void 0, s2);
            a2.$init(i2[s2]), a2.isNew = true, Object.assign(a2.$__.activePaths.default, a2.$__.activePaths.init), a2.$__.activePaths.init = {}, i2[s2] = a2;
          }
          return i2;
        };
        var w = Object.freeze({ transform: false, virtuals: false }), O = Object.freeze({ skipId: false, willInit: true });
        function $(t3, e3, r3) {
          if (r3 && e3) {
            for (var n2, o2, i2, s2 = t3.path + ".", a2 = Object.keys(e3), u2 = a2.length, c2 = {}; u2--; )
              if ((o2 = a2[u2]).startsWith(s2)) {
                if ("$" === (i2 = o2.substring(s2.length)))
                  continue;
                i2.startsWith("$.") && (i2 = i2.substring(2)), n2 || (n2 = true), c2[i2] = e3[o2];
              }
            return n2 && c2 || void 0;
          }
        }
        g.prototype.cast = function(t3, e3, i2, a2, u2) {
          if (n || (n = r2(6077)), null != t3 && null != t3[v] && t3 === a2)
            return t3;
          var c2, f2;
          if (u2 = u2 || {}, !Array.isArray(t3)) {
            if (!i2 && !g.options.castNonArrays)
              throw new s("DocumentArray", t3, this.path, null, this);
            return e3 && i2 && e3.markModified(this.path), this.cast([t3], e3, i2, a2, u2);
          }
          u2.skipDocumentArrayCast && !y.isMongooseDocumentArray(t3) || (t3 = new n(t3, this.path, e3)), null != a2 && (t3[m] = a2[m] || {}), null != u2.arrayPathIndex && (t3[v] = this.path + "." + u2.arrayPathIndex);
          for (var l2 = y.isMongooseDocumentArray(t3) ? t3.__array : t3, p2 = l2.length, _2 = 0; _2 < p2; ++_2)
            if (l2[_2]) {
              var S = d(this.casterConstructor, l2[_2]);
              if (null != l2[_2].$__ && !(l2[_2] instanceof S)) {
                var j = h(l2[_2], true);
                l2[_2] !== j ? l2[_2] = j : l2[_2] = l2[_2].toObject({ transform: false, virtuals: l2[_2].schema === S.schema });
              }
              if (l2[_2] instanceof o) {
                if (l2[_2][b] !== e3)
                  if (i2) {
                    var A = new S(null, t3, O, c2, _2);
                    l2[_2] = A.$init(l2[_2]);
                  } else {
                    var P = new S(l2[_2], t3, void 0, void 0, _2);
                    l2[_2] = P;
                  }
                null == l2[_2].__index && l2[_2].$setIndex(_2);
              } else if (null != l2[_2])
                if (i2)
                  e3 ? c2 || (c2 = $(this, e3.$__.selected, i2)) : c2 = true, f2 = new S(null, t3, O, c2, _2), l2[_2] = f2.$init(l2[_2]);
                else if (a2 && "function" == typeof a2.id && (f2 = a2.id(l2[_2]._id)), a2 && f2 && y.deepEqual(f2.toObject(w), l2[_2]))
                  f2.set(l2[_2]), l2[_2] = f2;
                else
                  try {
                    f2 = new S(l2[_2], t3, void 0, void 0, _2), l2[_2] = f2;
                  } catch (e4) {
                    throw new s("embedded", l2[_2], t3[v], e4, this);
                  }
            }
          return t3;
        }, g.prototype.clone = function() {
          var t3 = Object.assign({}, this.options), e3 = new this.constructor(this.path, this.schema, t3, this.schemaOptions);
          return e3.validators = this.validators.slice(), void 0 !== this.requiredValidator && (e3.requiredValidator = this.requiredValidator), e3.Constructor.discriminators = Object.assign({}, this.Constructor.discriminators), e3;
        }, g.prototype.applyGetters = function(t3, e3) {
          return c.prototype.applyGetters.call(this, t3, e3);
        }, g.defaultOptions = {}, g.set = c.set, t2.exports = g;
      }, 5251: (t2, e2, r2) => {
        "use strict";
        e2.String = r2(6542), e2.Number = r2(1751), e2.Boolean = r2(6470), e2.DocumentArray = r2(4504), e2.Subdocument = r2(3617), e2.Array = r2(94), e2.Buffer = r2(8800), e2.Date = r2(6535), e2.ObjectId = r2(7116), e2.Mixed = r2(3861), e2.Decimal128 = e2.Decimal = r2(6621), e2.Map = r2(71), e2.UUID = r2(2729), e2.Oid = e2.ObjectId, e2.Object = e2.Mixed, e2.Bool = e2.Boolean, e2.ObjectID = e2.ObjectId;
      }, 71: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function i(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function s() {
          return s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t3, e3, r3) {
            var n2 = a(t3, e3);
            if (n2) {
              var o2 = Object.getOwnPropertyDescriptor(n2, e3);
              return o2.get ? o2.get.call(arguments.length < 3 ? t3 : r3) : o2.value;
            }
          }, s.apply(this, arguments);
        }
        function a(t3, e3) {
          for (; !Object.prototype.hasOwnProperty.call(t3, e3) && null !== (t3 = f(t3)); )
            ;
          return t3;
        }
        function u(t3, e3) {
          return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, u(t3, e3);
        }
        function c(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function f(t3) {
          return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, f(t3);
        }
        var l = r2(3828), p = r2(8227), h = r2(4289), y = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && u(t4, e4);
          }(d, t3);
          var e3, n2, a2, p2, y2 = (a2 = d, p2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = f(a2);
            if (p2) {
              var r3 = f(this).constructor;
              t4 = Reflect.construct(e4, arguments, r3);
            } else
              t4 = e4.apply(this, arguments);
            return c(this, t4);
          });
          function d(t4, e4) {
            var r3;
            return function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, d), (r3 = y2.call(this, t4, e4, "Map")).$isSchemaMap = true, r3;
          }
          return e3 = d, (n2 = [{ key: "set", value: function(t4, e4) {
            return h.set(t4, e4);
          } }, { key: "cast", value: function(t4, e4, n3) {
            if (t4 instanceof l)
              return t4;
            var i2 = this.path;
            if (n3) {
              var s2 = new l({}, i2, e4, this.$__schemaType);
              if (t4 instanceof r2.g.Map) {
                var a3, u2 = function(t5, e5) {
                  var r3 = "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
                  if (!r3) {
                    if (Array.isArray(t5) || (r3 = function(t6, e6) {
                      if (t6) {
                        if ("string" == typeof t6)
                          return o(t6, e6);
                        var r4 = Object.prototype.toString.call(t6).slice(8, -1);
                        return "Object" === r4 && t6.constructor && (r4 = t6.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t6) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t6, e6) : void 0;
                      }
                    }(t5)) || e5 && t5 && "number" == typeof t5.length) {
                      r3 && (t5 = r3);
                      var n4 = 0, i3 = function() {
                      };
                      return { s: i3, n: function() {
                        return n4 >= t5.length ? { done: true } : { done: false, value: t5[n4++] };
                      }, e: function(t6) {
                        throw t6;
                      }, f: i3 };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  var s3, a4 = true, u3 = false;
                  return { s: function() {
                    r3 = r3.call(t5);
                  }, n: function() {
                    var t6 = r3.next();
                    return a4 = t6.done, t6;
                  }, e: function(t6) {
                    u3 = true, s3 = t6;
                  }, f: function() {
                    try {
                      a4 || null == r3.return || r3.return();
                    } finally {
                      if (u3)
                        throw s3;
                    }
                  } };
                }(t4.keys());
                try {
                  for (u2.s(); !(a3 = u2.n()).done; ) {
                    var c2 = a3.value, f2 = t4.get(c2);
                    f2 = null == f2 ? s2.$__schemaType._castNullish(f2) : s2.$__schemaType.cast(f2, e4, true, null, { path: i2 + "." + c2 }), s2.$init(c2, f2);
                  }
                } catch (t5) {
                  u2.e(t5);
                } finally {
                  u2.f();
                }
              } else
                for (var p3 = 0, h2 = Object.keys(t4); p3 < h2.length; p3++) {
                  var y3 = h2[p3], d2 = t4[y3];
                  d2 = null == d2 ? s2.$__schemaType._castNullish(d2) : s2.$__schemaType.cast(d2, e4, true, null, { path: i2 + "." + y3 }), s2.$init(y3, d2);
                }
              return s2;
            }
            return new l(t4, i2, e4, this.$__schemaType);
          } }, { key: "clone", value: function() {
            var t4 = s(f(d.prototype), "clone", this).call(this);
            return null != this.$__schemaType && (t4.$__schemaType = this.$__schemaType.clone()), t4;
          } }]) && i(e3.prototype, n2), Object.defineProperty(e3, "prototype", { writable: false }), d;
        }(h);
        y.schemaName = "Map", y.prototype.OptionsConstructor = p, y.defaultOptions = {}, t2.exports = y;
      }, 3861: (t2, e2, r2) => {
        "use strict";
        var n = r2(4289), o = r2(8107), i = r2(5721), s = r2(6872);
        function a(t3, e3) {
          if (e3 && e3.default) {
            var r3 = e3.default;
            Array.isArray(r3) && 0 === r3.length ? e3.default = Array : !e3.shared && i(r3) && 0 === Object.keys(r3).length && (e3.default = function() {
              return {};
            });
          }
          n.call(this, t3, e3, "Mixed"), this[o.schemaMixedSymbol] = true;
        }
        a.schemaName = "Mixed", a.defaultOptions = {}, a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.get = n.get, a.set = n.set, a.prototype.cast = function(t3) {
          return t3 instanceof Error ? s.errorToPOJO(t3) : t3;
        }, a.prototype.castForQuery = function(t3, e3) {
          return 2 === arguments.length ? e3 : t3;
        }, t2.exports = a;
      }, 1751: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(4888), i = r2(8491), s = r2(4289), a = r2(3065), u = r2(4282), c = r2(6872), f = s.CastError;
        function l(t3, e3) {
          s.call(this, t3, e3, "Number");
        }
        function p(t3) {
          return this.cast(t3);
        }
        l.get = s.get, l.set = s.set, l._cast = a, l.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this._defaultCaster), this._cast = t3), this._cast;
        }, l._defaultCaster = function(t3) {
          if ("number" != typeof t3)
            throw new Error();
          return t3;
        }, l.schemaName = "Number", l.defaultOptions = {}, l.prototype = Object.create(s.prototype), l.prototype.constructor = l, l.prototype.OptionsConstructor = i, l._checkRequired = function(t3) {
          return "number" == typeof t3 || t3 instanceof Number;
        }, l.checkRequired = s.checkRequired, l.prototype.checkRequired = function(t3, e3) {
          return "object" === n(t3) && s._isRef(this, t3, e3, true) ? null != t3 : ("function" == typeof this.constructor.checkRequired ? this.constructor.checkRequired() : l.checkRequired())(t3);
        }, l.prototype.min = function(t3, e3) {
          if (this.minValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.minValidator;
          }, this)), null != t3) {
            var r3 = e3 || o.messages.Number.min;
            r3 = r3.replace(/{MIN}/, t3), this.validators.push({ validator: this.minValidator = function(e4) {
              return null == e4 || e4 >= t3;
            }, message: r3, type: "min", min: t3 });
          }
          return this;
        }, l.prototype.max = function(t3, e3) {
          if (this.maxValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.maxValidator;
          }, this)), null != t3) {
            var r3 = e3 || o.messages.Number.max;
            r3 = r3.replace(/{MAX}/, t3), this.validators.push({ validator: this.maxValidator = function(e4) {
              return null == e4 || e4 <= t3;
            }, message: r3, type: "max", max: t3 });
          }
          return this;
        }, l.prototype.enum = function(t3, e3) {
          if (this.enumValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.enumValidator;
          }, this)), !Array.isArray(t3)) {
            var r3 = c.isPOJO(t3) && null != t3.values;
            r3 ? (e3 = t3.message, t3 = t3.values) : "number" == typeof t3 && (t3 = Array.prototype.slice.call(arguments), e3 = null), c.isPOJO(t3) && (t3 = Object.values(t3)), e3 = e3 || o.messages.Number.enum;
          }
          return e3 = null == e3 ? o.messages.Number.enum : e3, this.enumValidator = function(e4) {
            return null == e4 || -1 !== t3.indexOf(e4);
          }, this.validators.push({ validator: this.enumValidator, message: e3, type: "enum", enumValues: t3 }), this;
        }, l.prototype.cast = function(t3, e3, r3) {
          if ("number" != typeof t3 && s._isRef(this, t3, e3, r3) && (null == t3 || c.isNonBuiltinObject(t3)))
            return this._castRef(t3, e3, r3);
          var n2, o2 = t3 && void 0 !== t3._id ? t3._id : t3;
          n2 = "function" == typeof this._castFunction ? this._castFunction : "function" == typeof this.constructor.cast ? this.constructor.cast() : l.cast();
          try {
            return n2(o2);
          } catch (t4) {
            throw new f("Number", o2, this.path, t4, this);
          }
        }, l.prototype.$conditionalHandlers = c.options(s.prototype.$conditionalHandlers, { $bitsAllClear: u, $bitsAnyClear: u, $bitsAllSet: u, $bitsAnySet: u, $gt: p, $gte: p, $lt: p, $lte: p, $mod: function(t3) {
          var e3 = this;
          return Array.isArray(t3) ? t3.map(function(t4) {
            return e3.cast(t4);
          }) : [this.cast(t3)];
        } }), l.prototype.castForQuery = function(t3, e3) {
          var r3;
          if (2 === arguments.length) {
            if (!(r3 = this.$conditionalHandlers[t3]))
              throw new f("number", e3, this.path, null, this);
            return r3.call(this, e3);
          }
          return this._castForQuery(t3);
        }, t2.exports = l;
      }, 7116: (t2, e2, r2) => {
        "use strict";
        var n, o = r2(8172), i = r2(4289), s = r2(4731), a = r2(1981), u = r2(6079), c = r2(1563), f = r2(6872), l = i.CastError;
        function p(t3, e3) {
          var r3 = "string" == typeof t3 && 24 === t3.length && /^[a-f0-9]+$/i.test(t3), n2 = e3 && e3.suppressWarning;
          !r3 && void 0 !== t3 || n2 || f.warn("mongoose: To create a new ObjectId please try `Mongoose.Types.ObjectId` instead of using `Mongoose.Schema.ObjectId`. Set the `suppressWarning` option if you're trying to create a hex char path in your schema."), i.call(this, t3, e3, "ObjectID");
        }
        function h(t3) {
          return this.cast(t3);
        }
        function y() {
          return new u();
        }
        function d(t3) {
          return n || (n = r2(8727)), this instanceof n && void 0 === t3 ? new u() : t3;
        }
        p.schemaName = "ObjectId", p.defaultOptions = {}, p.prototype = Object.create(i.prototype), p.prototype.constructor = p, p.prototype.OptionsConstructor = o, p.get = i.get, p.set = i.set, p.prototype.auto = function(t3) {
          return t3 && (this.default(y), this.set(d)), this;
        }, p._checkRequired = function(t3) {
          return c(t3, "ObjectID");
        }, p._cast = s, p.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this._defaultCaster), this._cast = t3), this._cast;
        }, p._defaultCaster = function(t3) {
          if (!c(t3, "ObjectID"))
            throw new Error(t3 + " is not an instance of ObjectId");
          return t3;
        }, p.checkRequired = i.checkRequired, p.prototype.checkRequired = function(t3, e3) {
          return i._isRef(this, t3, e3, true) ? !!t3 : ("function" == typeof this.constructor.checkRequired ? this.constructor.checkRequired() : p.checkRequired())(t3);
        }, p.prototype.cast = function(t3, e3, r3) {
          if (!c(t3, "ObjectID") && i._isRef(this, t3, e3, r3)) {
            if ("objectid" === (a(t3) || "").toLowerCase())
              return new u(t3.toHexString());
            if (null == t3 || f.isNonBuiltinObject(t3))
              return this._castRef(t3, e3, r3);
          }
          var n2;
          n2 = "function" == typeof this._castFunction ? this._castFunction : "function" == typeof this.constructor.cast ? this.constructor.cast() : p.cast();
          try {
            return n2(t3);
          } catch (e4) {
            throw new l("ObjectId", t3, this.path, e4, this);
          }
        }, p.prototype.$conditionalHandlers = f.options(i.prototype.$conditionalHandlers, { $gt: h, $gte: h, $lt: h, $lte: h }), y.$runBeforeSetters = true, t2.exports = p;
      }, 4282: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW, o = r2(1795);
        function i(t3, e3) {
          var r3 = Number(e3);
          if (isNaN(r3))
            throw new o("number", e3, t3);
          return r3;
        }
        t2.exports = function(t3) {
          var e3 = this;
          return Array.isArray(t3) ? t3.map(function(t4) {
            return i(e3.path, t4);
          }) : n.isBuffer(t3) ? t3 : i(e3.path, t3);
        };
      }, 8702: (t2, e2, r2) => {
        "use strict";
        var n = r2(6670);
        t2.exports = function(t3) {
          var e3 = null != this ? this.path : null;
          return n(t3, e3);
        };
      }, 5008: (t2, e2, r2) => {
        "use strict";
        var n = r2(1521).i, o = r2(1521).W;
        function i(t3, e3) {
          switch (t3.$geometry.type) {
            case "Polygon":
            case "LineString":
            case "Point":
              n(t3.$geometry.coordinates, e3);
          }
          return s(e3, t3), t3;
        }
        function s(t3, e3) {
          e3.$maxDistance && (e3.$maxDistance = o.call(t3, e3.$maxDistance)), e3.$minDistance && (e3.$minDistance = o.call(t3, e3.$minDistance));
        }
        e2.cast$geoIntersects = function(t3) {
          if (t3.$geometry)
            return i(t3, this), t3;
        }, e2.cast$near = function(t3) {
          var e3 = r2(94);
          if (Array.isArray(t3))
            return n(t3, this), t3;
          if (s(this, t3), t3 && t3.$geometry)
            return i(t3, this);
          if (!Array.isArray(t3))
            throw new TypeError("$near must be either an array or an object with a $geometry property");
          return e3.prototype.castForQuery.call(this, t3);
        }, e2.cast$within = function(t3) {
          var e3 = this;
          if (s(this, t3), t3.$box || t3.$polygon) {
            var r3 = t3.$box ? "$box" : "$polygon";
            t3[r3].forEach(function(t4) {
              if (!Array.isArray(t4))
                throw new TypeError("Invalid $within $box argument. Expected an array, received " + t4);
              t4.forEach(function(r4, n3) {
                t4[n3] = o.call(e3, r4);
              });
            });
          } else if (t3.$center || t3.$centerSphere) {
            var n2 = t3.$center ? "$center" : "$centerSphere";
            t3[n2].forEach(function(r4, i2) {
              Array.isArray(r4) ? r4.forEach(function(t4, n3) {
                r4[n3] = o.call(e3, t4);
              }) : t3[n2][i2] = o.call(e3, r4);
            });
          } else
            t3.$geometry && i(t3, this);
          return t3;
        };
      }, 1521: (t2, e2, r2) => {
        "use strict";
        var n = r2(1751);
        function o(t3) {
          return n.cast()(t3);
        }
        e2.W = o, e2.i = function t3(e3, r3) {
          e3.forEach(function(n2, i) {
            Array.isArray(n2) ? t3(n2, r3) : e3[i] = o.call(r3, n2);
          });
        };
      }, 6495: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(1795), i = r2(6670), s = r2(2417);
        t2.exports = function(t3, e3) {
          if (null == t3 || "object" !== n(t3))
            throw new o("$text", t3, e3);
          return null != t3.$search && (t3.$search = s(t3.$search, e3 + ".$search")), null != t3.$language && (t3.$language = s(t3.$language, e3 + ".$language")), null != t3.$caseSensitive && (t3.$caseSensitive = i(t3.$caseSensitive, e3 + ".$castSensitive")), null != t3.$diacriticSensitive && (t3.$diacriticSensitive = i(t3.$diacriticSensitive, e3 + ".$diacriticSensitive")), t3;
        };
      }, 3053: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          if (Array.isArray(t3)) {
            if (!t3.every(function(t4) {
              return "number" == typeof t4 || "string" == typeof t4;
            }))
              throw new Error("$type array values must be strings or numbers");
            return t3;
          }
          if ("number" != typeof t3 && "string" != typeof t3)
            throw new Error("$type parameter must be number, string, or array of numbers and strings");
          return t3;
        };
      }, 6542: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return i(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? i(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function i(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var s = r2(4289), a = r2(4888), u = r2(3209), c = r2(2417), f = r2(6872), l = r2(1563), p = s.CastError;
        function h(t3, e3) {
          this.enumValues = [], this.regExp = null, s.call(this, t3, e3, "String");
        }
        function y(t3) {
          return this.castForQuery(t3);
        }
        function d(t3) {
          return null == t3 ? this._castNullish(t3) : this.cast(t3, this);
        }
        h.schemaName = "String", h.defaultOptions = {}, h.prototype = Object.create(s.prototype), h.prototype.constructor = h, Object.defineProperty(h.prototype, "OptionsConstructor", { configurable: false, enumerable: false, writable: false, value: u }), h._cast = c, h.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this._defaultCaster), this._cast = t3), this._cast;
        }, h._defaultCaster = function(t3) {
          if (null != t3 && "string" != typeof t3)
            throw new Error();
          return t3;
        }, h.get = s.get, h.set = s.set, h._checkRequired = function(t3) {
          return (t3 instanceof String || "string" == typeof t3) && t3.length;
        }, h.checkRequired = s.checkRequired, h.prototype.enum = function() {
          if (this.enumValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.enumValidator;
          }, this), this.enumValidator = false), void 0 === arguments[0] || false === arguments[0])
            return this;
          var t3, e3;
          f.isObject(arguments[0]) ? Array.isArray(arguments[0].values) ? (t3 = arguments[0].values, e3 = arguments[0].message) : (t3 = f.object.vals(arguments[0]), e3 = a.messages.String.enum) : (t3 = arguments, e3 = a.messages.String.enum);
          var r3, n2 = o(t3);
          try {
            for (n2.s(); !(r3 = n2.n()).done; ) {
              var i2 = r3.value;
              void 0 !== i2 && this.enumValues.push(this.cast(i2));
            }
          } catch (t4) {
            n2.e(t4);
          } finally {
            n2.f();
          }
          var s2 = this.enumValues;
          return this.enumValidator = function(t4) {
            return void 0 === t4 || ~s2.indexOf(t4);
          }, this.validators.push({ validator: this.enumValidator, message: e3, type: "enum", enumValues: s2 }), this;
        }, h.prototype.lowercase = function(t3) {
          var e3 = this;
          return arguments.length > 0 && !t3 ? this : this.set(function(t4) {
            return "string" != typeof t4 && (t4 = e3.cast(t4)), t4 ? t4.toLowerCase() : t4;
          });
        }, h.prototype.uppercase = function(t3) {
          var e3 = this;
          return arguments.length > 0 && !t3 ? this : this.set(function(t4) {
            return "string" != typeof t4 && (t4 = e3.cast(t4)), t4 ? t4.toUpperCase() : t4;
          });
        }, h.prototype.trim = function(t3) {
          var e3 = this;
          return arguments.length > 0 && !t3 ? this : this.set(function(t4) {
            return "string" != typeof t4 && (t4 = e3.cast(t4)), t4 ? t4.trim() : t4;
          });
        }, h.prototype.minlength = function(t3, e3) {
          if (this.minlengthValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.minlengthValidator;
          }, this)), null != t3) {
            var r3 = e3 || a.messages.String.minlength;
            r3 = r3.replace(/{MINLENGTH}/, t3), this.validators.push({ validator: this.minlengthValidator = function(e4) {
              return null === e4 || e4.length >= t3;
            }, message: r3, type: "minlength", minlength: t3 });
          }
          return this;
        }, h.prototype.minLength = h.prototype.minlength, h.prototype.maxlength = function(t3, e3) {
          if (this.maxlengthValidator && (this.validators = this.validators.filter(function(t4) {
            return t4.validator !== this.maxlengthValidator;
          }, this)), null != t3) {
            var r3 = e3 || a.messages.String.maxlength;
            r3 = r3.replace(/{MAXLENGTH}/, t3), this.validators.push({ validator: this.maxlengthValidator = function(e4) {
              return null === e4 || e4.length <= t3;
            }, message: r3, type: "maxlength", maxlength: t3 });
          }
          return this;
        }, h.prototype.maxLength = h.prototype.maxlength, h.prototype.match = function(t3, e3) {
          var r3 = e3 || a.messages.String.match;
          return this.validators.push({ validator: function(e4) {
            return !!t3 && (t3.lastIndex = 0, null == e4 || "" === e4 || t3.test(e4));
          }, message: r3, type: "regexp", regexp: t3 }), this;
        }, h.prototype.checkRequired = function(t3, e3) {
          return "object" === n(t3) && s._isRef(this, t3, e3, true) ? null != t3 : ("function" == typeof this.constructor.checkRequired ? this.constructor.checkRequired() : h.checkRequired())(t3);
        }, h.prototype.cast = function(t3, e3, r3) {
          if ("string" != typeof t3 && s._isRef(this, t3, e3, r3))
            return this._castRef(t3, e3, r3);
          var n2;
          n2 = "function" == typeof this._castFunction ? this._castFunction : "function" == typeof this.constructor.cast ? this.constructor.cast() : h.cast();
          try {
            return n2(t3);
          } catch (e4) {
            throw new p("string", t3, this.path, null, this);
          }
        };
        var m = f.options(s.prototype.$conditionalHandlers, { $all: function(t3) {
          var e3 = this;
          return Array.isArray(t3) ? t3.map(function(t4) {
            return e3.castForQuery(t4);
          }) : [this.castForQuery(t3)];
        }, $gt: y, $gte: y, $lt: y, $lte: y, $options: d, $regex: function(t3) {
          return "[object RegExp]" === Object.prototype.toString.call(t3) ? t3 : d.call(this, t3);
        }, $not: y });
        Object.defineProperty(h.prototype, "$conditionalHandlers", { configurable: false, enumerable: false, writable: false, value: Object.freeze(m) }), h.prototype.castForQuery = function(t3, e3) {
          var r3;
          if (2 === arguments.length) {
            if (!(r3 = this.$conditionalHandlers[t3]))
              throw new Error("Can't use " + t3 + " with String.");
            return r3.call(this, e3);
          }
          return e3 = t3, "[object RegExp]" === Object.prototype.toString.call(e3) || l(e3, "BSONRegExp") ? e3 : this._castForQuery(e3);
        }, t2.exports = h;
      }, 8107: (t2, e2) => {
        "use strict";
        e2.schemaMixedSymbol = Symbol.for("mongoose:schema_mixed"), e2.builtInMiddleware = Symbol.for("mongoose:built-in-middleware");
      }, 2729: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW, o = r2(4051), i = r2(4289), s = i.CastError, a = r2(6872), u = r2(1563), c = r2(4282), f = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i, l = o.Binary;
        function p(t3) {
          "string" != typeof t3 && (t3 = "");
          var e3, r3 = (e3 = t3.replace(/[{}-]/g, ""), n.from(e3, "hex")), i2 = new o(r3);
          return i2._subtype = 4, i2;
        }
        function h(t3) {
          var e3;
          return "string" != typeof t3 ? (e3 = t3.toString("hex")).substring(0, 8) + "-" + e3.substring(8, 12) + "-" + e3.substring(12, 16) + "-" + e3.substring(16, 20) + "-" + e3.substring(20, 32) : t3;
        }
        function y(t3, e3) {
          i.call(this, t3, e3, "UUID"), this.getters.push(h);
        }
        function d(t3) {
          return this.cast(t3);
        }
        function m(t3) {
          var e3 = this;
          return t3.map(function(t4) {
            return e3.cast(t4);
          });
        }
        y.schemaName = "UUID", y.defaultOptions = {}, y.prototype = Object.create(i.prototype), y.prototype.constructor = y, y._cast = function(t3) {
          if (null === t3)
            return t3;
          function e3(t4) {
            var e4 = new o(t4);
            return e4._subtype = 4, e4;
          }
          if ("string" == typeof t3) {
            if (f.test(t3))
              return p(t3);
            throw new s(y.schemaName, t3, this.path);
          }
          if (n.isBuffer(t3))
            return e3(t3);
          if (t3 instanceof l)
            return e3(t3.value(true));
          if (t3.toString && t3.toString !== Object.prototype.toString && f.test(t3.toString()))
            return p(t3.toString());
          throw new s(y.schemaName, t3, this.path);
        }, y.set = i.set, y.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this._defaultCaster), this._cast = t3), this._cast;
        }, y._checkRequired = function(t3) {
          return null != t3;
        }, y.checkRequired = i.checkRequired, y.prototype.checkRequired = function(t3) {
          return f.test(t3);
        }, y.prototype.cast = function(t3, e3, r3) {
          if (i._isRef(this, t3, e3, r3))
            return u(t3, "UUID") ? t3 : this._castRef(t3, e3, r3);
          var n2;
          n2 = "function" == typeof this._castFunction ? this._castFunction : "function" == typeof this.constructor.cast ? this.constructor.cast() : y.cast();
          try {
            return n2(t3);
          } catch (e4) {
            throw new s(y.schemaName, t3, this.path, e4, this);
          }
        }, y.prototype.$conditionalHandlers = a.options(i.prototype.$conditionalHandlers, { $bitsAllClear: c, $bitsAnyClear: c, $bitsAllSet: c, $bitsAnySet: c, $all: m, $gt: d, $gte: d, $in: m, $lt: d, $lte: d, $ne: d, $nin: m }), y.prototype.castForQuery = function(t3, e3) {
          var r3;
          if (2 === arguments.length) {
            if (!(r3 = this.$conditionalHandlers[t3]))
              throw new Error("Can't use " + t3 + " with UUID.");
            return r3.call(this, e3);
          }
          return this.cast(t3);
        }, t2.exports = y;
      }, 4289: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        var i = r2(4888), s = r2(4364), a = r2(8702), u = r2(3053), c = r2(8828), f = r2(8857), l = r2(9130), p = r2(1490), h = r2(8770).schemaTypeSymbol, y = r2(6872), d = r2(8770).validatorErrorSymbol, m = r2(8770).documentIsModified, v = r2(8770).populateModelSymbol, b = i.CastError, g = i.ValidatorError, _ = { _skipMarkModified: true };
        function w(t3, e3, r3) {
          this[h] = true, this.path = t3, this.instance = r3, this.validators = [], this.getters = this.constructor.hasOwnProperty("getters") ? this.constructor.getters.slice() : [], this.setters = [], this.splitPath(), e3 = e3 || {};
          for (var n2 = this.constructor.defaultOptions || {}, i2 = 0, a2 = Object.keys(n2); i2 < a2.length; i2++) {
            var u2 = a2[i2];
            n2.hasOwnProperty(u2) && !Object.prototype.hasOwnProperty.call(e3, u2) && (e3[u2] = n2[u2]);
          }
          null == e3.select && delete e3.select;
          var f2 = this.OptionsConstructor || s;
          this.options = new f2(e3), this._index = null, y.hasUserDefinedProperty(this.options, "immutable") && (this.$immutable = this.options.immutable, c(this));
          for (var l2 = 0, p2 = Object.keys(this.options); l2 < p2.length; l2++) {
            var d2 = p2[l2];
            if ("cast" !== d2) {
              if (y.hasUserDefinedProperty(this.options, d2) && "function" == typeof this[d2]) {
                if ("index" === d2 && this._index) {
                  if (false === e3.index) {
                    var m2 = this._index;
                    if ("object" === o(m2) && null != m2) {
                      if (m2.unique)
                        throw new Error('Path "' + this.path + '" may not have `index` set to false and `unique` set to true');
                      if (m2.sparse)
                        throw new Error('Path "' + this.path + '" may not have `index` set to false and `sparse` set to true');
                    }
                    this._index = false;
                  }
                  continue;
                }
                var v2 = e3[d2];
                if ("default" === d2) {
                  this.default(v2);
                  continue;
                }
                var b2 = Array.isArray(v2) ? v2 : [v2];
                this[d2].apply(this, b2);
              }
            } else
              this.castFunction(this.options[d2]);
          }
          Object.defineProperty(this, "$$context", { enumerable: false, configurable: false, writable: true, value: null });
        }
        function O(t3, e3) {
          if (void 0 !== t3 && !t3) {
            var r3 = new (e3.ErrorConstructor || g)(e3);
            return r3[d] = true, r3;
          }
        }
        function $(t3) {
          return this.castForQuery(t3);
        }
        function S(t3) {
          var e3 = this;
          return Array.isArray(t3) ? t3.map(function(t4) {
            return Array.isArray(t4) && 0 === t4.length ? t4 : e3.castForQuery(t4);
          }) : [this.castForQuery(t3)];
        }
        w.prototype.OptionsConstructor = s, w.prototype.path, w.prototype.validators, w.prototype.validators, w.prototype.splitPath = function() {
          return null != this._presplitPath ? this._presplitPath : null != this.path ? (this._presplitPath = -1 === this.path.indexOf(".") ? [this.path] : this.path.split("."), this._presplitPath) : void 0;
        }, w.cast = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = function(t4) {
            return t4;
          }), this._cast = t3), this._cast;
        }, w.prototype.castFunction = function(t3) {
          return 0 === arguments.length || (false === t3 && (t3 = this.constructor._defaultCaster || function(t4) {
            return t4;
          }), this._castFunction = t3), this._castFunction;
        }, w.prototype.cast = function() {
          throw new Error("Base SchemaType class does not implement a `cast()` function");
        }, w.set = function(t3, e3) {
          this.hasOwnProperty("defaultOptions") || (this.defaultOptions = Object.assign({}, this.defaultOptions)), this.defaultOptions[t3] = e3;
        }, w.get = function(t3) {
          this.getters = this.hasOwnProperty("getters") ? this.getters : [], this.getters.push(t3);
        }, w.prototype.default = function(t3) {
          if (1 === arguments.length) {
            if (void 0 === t3)
              return void (this.defaultValue = void 0);
            if (null != t3 && t3.instanceOfSchema)
              throw new i("Cannot set default value of path `" + this.path + "` to a mongoose Schema instance.");
            return this.defaultValue = t3, this.defaultValue;
          }
          return arguments.length > 1 && (this.defaultValue = Array.prototype.slice.call(arguments)), this.defaultValue;
        }, w.prototype.index = function(t3) {
          return this._index = t3, y.expires(this._index), this;
        }, w.prototype.unique = function(t3) {
          if (false === this._index) {
            if (!t3)
              return;
            throw new Error('Path "' + this.path + '" may not have `index` set to false and `unique` set to true');
          }
          return this.options.hasOwnProperty("index") || false !== t3 ? (null == this._index || true === this._index ? this._index = {} : "string" == typeof this._index && (this._index = { type: this._index }), this._index.unique = t3, this) : this;
        }, w.prototype.text = function(t3) {
          if (false === this._index) {
            if (!t3)
              return this;
            throw new Error('Path "' + this.path + '" may not have `index` set to false and `text` set to true');
          }
          return this.options.hasOwnProperty("index") || false !== t3 ? (null === this._index || void 0 === this._index || "boolean" == typeof this._index ? this._index = {} : "string" == typeof this._index && (this._index = { type: this._index }), this._index.text = t3, this) : this;
        }, w.prototype.sparse = function(t3) {
          if (false === this._index) {
            if (!t3)
              return this;
            throw new Error('Path "' + this.path + '" may not have `index` set to false and `sparse` set to true');
          }
          return this.options.hasOwnProperty("index") || false !== t3 ? (null == this._index || "boolean" == typeof this._index ? this._index = {} : "string" == typeof this._index && (this._index = { type: this._index }), this._index.sparse = t3, this) : this;
        }, w.prototype.immutable = function(t3) {
          return this.$immutable = t3, c(this), this;
        }, w.prototype.transform = function(t3) {
          return this.options.transform = t3, this;
        }, w.prototype.set = function(t3) {
          if ("function" != typeof t3)
            throw new TypeError("A setter must be a function.");
          return this.setters.push(t3), this;
        }, w.prototype.get = function(t3) {
          if ("function" != typeof t3)
            throw new TypeError("A getter must be a function.");
          return this.getters.push(t3), this;
        }, w.prototype.validate = function(t3, e3, r3) {
          var n2, s2, a2, u2;
          if ("function" == typeof t3 || t3 && "RegExp" === y.getFunctionName(t3.constructor))
            return "function" == typeof e3 ? (n2 = { validator: t3, message: e3 }).type = r3 || "user defined" : e3 instanceof Object && !r3 ? ((n2 = l(e3) ? Object.assign({}, e3) : y.clone(e3)).message || (n2.message = n2.msg), n2.validator = t3, n2.type = n2.type || "user defined") : (null == e3 && (e3 = i.messages.general.default), r3 || (r3 = "user defined"), n2 = { message: e3, type: r3, validator: t3 }), this.validators.push(n2), this;
          for (s2 = 0, a2 = arguments.length; s2 < a2; s2++) {
            if (u2 = arguments[s2], !y.isPOJO(u2)) {
              var c2 = "Invalid validator. Received (" + o(u2) + ") " + u2 + ". See https://mongoosejs.com/docs/api/schematype.html#schematype_SchemaType-validate";
              throw new Error(c2);
            }
            this.validate(u2.validator, u2);
          }
          return this;
        }, w.prototype.required = function(t3, e3) {
          var r3 = {};
          if (arguments.length > 0 && null == t3)
            return this.validators = this.validators.filter(function(t4) {
              return t4.validator !== this.requiredValidator;
            }, this), this.isRequired = false, delete this.originalRequiredValue, this;
          if ("object" === o(t3) && (e3 = (r3 = t3).message || e3, t3 = t3.isRequired), false === t3)
            return this.validators = this.validators.filter(function(t4) {
              return t4.validator !== this.requiredValidator;
            }, this), this.isRequired = false, delete this.originalRequiredValue, this;
          var n2 = this;
          this.isRequired = true, this.requiredValidator = function(e4) {
            var r4 = this && this.$__ && this.$__.cachedRequired;
            if (null != r4 && !this.$__isSelected(n2.path) && !this[m](n2.path))
              return true;
            if (null != r4 && n2.path in r4) {
              var o2 = !r4[n2.path] || n2.checkRequired(e4, this);
              return delete r4[n2.path], o2;
            }
            return "function" == typeof t3 && !t3.apply(this) || n2.checkRequired(e4, this);
          }, this.originalRequiredValue = t3, "string" == typeof t3 && (e3 = t3, t3 = void 0);
          var s2 = e3 || i.messages.general.required;
          return this.validators.unshift(Object.assign({}, r3, { validator: this.requiredValidator, message: s2, type: "required" })), this;
        }, w.prototype.ref = function(t3) {
          return this.options.ref = t3, this;
        }, w.prototype.getDefault = function(t3, e3, r3) {
          var n2;
          if (null != (n2 = "function" == typeof this.defaultValue ? this.defaultValue === Date.now || this.defaultValue === Array || "objectid" === this.defaultValue.name.toLowerCase() ? this.defaultValue.call(t3) : this.defaultValue.call(t3, t3) : this.defaultValue)) {
            if ("object" !== o(n2) || this.options && this.options.shared || (n2 = y.clone(n2)), r3 && r3.skipCast)
              return this._applySetters(n2, t3);
            var i2 = this.applySetters(n2, t3, e3, void 0, _);
            return i2 && !Array.isArray(i2) && i2.$isSingleNested && (i2.$__parent = t3), i2;
          }
          return n2;
        }, w.prototype._applySetters = function(t3, e3, r3, n2, o2) {
          var i2 = t3;
          if (r3)
            return i2;
          for (var s2 = this.setters, a2 = s2.length - 1; a2 >= 0; a2--)
            i2 = s2[a2].call(e3, i2, n2, this, o2);
          return i2;
        }, w.prototype._castNullish = function(t3) {
          return t3;
        }, w.prototype.applySetters = function(t3, e3, r3, n2, o2) {
          var i2 = this._applySetters(t3, e3, r3, n2, o2);
          return null == i2 ? this._castNullish(i2) : i2 = this.cast(i2, e3, r3, n2, o2);
        }, w.prototype.applyGetters = function(t3, e3) {
          var r3 = t3, n2 = this.getters, o2 = n2.length;
          if (0 === o2)
            return r3;
          for (var i2 = 0; i2 < o2; ++i2)
            r3 = n2[i2].call(e3, r3, this);
          return r3;
        }, w.prototype.select = function(t3) {
          return this.selected = !!t3, this;
        }, w.prototype.doValidate = function(t3, e3, r3, n2) {
          var i2 = this, s2 = false, a2 = this.path, u2 = this.validators.filter(function(t4) {
            return "object" === o(t4) && null !== t4;
          }), c2 = u2.length;
          if (!c2)
            return e3(null);
          for (var f2 = function() {
            if (s2)
              return "break";
            var e4, o2 = u2[h2], c3 = o2.validator, f3 = l(o2) ? Object.assign({}, o2) : y.clone(o2);
            if (f3.path = n2 && n2.path ? n2.path : a2, f3.value = t3, c3 instanceof RegExp)
              return v2(c3.test(t3), f3, r3), "continue";
            if ("function" != typeof c3)
              return "continue";
            if (void 0 === t3 && c3 !== i2.requiredValidator)
              return v2(true, f3, r3), "continue";
            try {
              e4 = f3.propsParameter ? c3.call(r3, t3, f3) : c3.call(r3, t3);
            } catch (t4) {
              e4 = false, f3.reason = t4, t4.message && (f3.message = t4.message);
            }
            null != e4 && "function" == typeof e4.then ? e4.then(function(t4) {
              v2(t4, f3, r3);
            }, function(t4) {
              f3.reason = t4, f3.message = t4.message, v2(e4 = false, f3, r3);
            }) : v2(e4, f3, r3);
          }, h2 = 0, m2 = u2.length; h2 < m2; ++h2) {
            if ("break" === f2())
              break;
          }
          function v2(t4, r4, n3) {
            if (!s2)
              if (void 0 === t4 || t4)
                --c2 <= 0 && p(function() {
                  e3(null);
                });
              else {
                var o2 = r4.ErrorConstructor || g;
                (s2 = new o2(r4, n3))[d] = true, p(function() {
                  e3(s2);
                });
              }
          }
        }, w.prototype.doValidateSync = function(t3, e3, r3) {
          var n2 = this.path;
          if (!this.validators.length)
            return null;
          var i2 = this.validators;
          if (void 0 === t3) {
            if (0 === this.validators.length || "required" !== this.validators[0].type)
              return null;
            i2 = [this.validators[0]];
          }
          var s2 = null, a2 = 0, u2 = i2.length;
          for (a2 = 0; a2 < u2; ++a2) {
            var c2 = i2[a2];
            if (null !== c2 && "object" === o(c2)) {
              var p2 = c2.validator, h2 = l(c2) ? Object.assign({}, c2) : y.clone(c2);
              h2.path = r3 && r3.path ? r3.path : n2, h2.value = t3;
              var d2 = false;
              if (!f(p2)) {
                if (p2 instanceof RegExp)
                  s2 = O(p2.test(t3), h2);
                else if ("function" == typeof p2) {
                  try {
                    d2 = h2.propsParameter ? p2.call(e3, t3, h2) : p2.call(e3, t3);
                  } catch (t4) {
                    d2 = false, h2.reason = t4;
                  }
                  if ((null == d2 || "function" != typeof d2.then) && (s2 = O(d2, h2)))
                    break;
                }
              }
            }
          }
          return s2;
        }, w._isRef = function(t3, e3, r3, o2) {
          var i2 = o2 && t3.options && (t3.options.ref || t3.options.refPath);
          if (!i2 && r3 && null != r3.$__) {
            var s2 = r3.$__fullPath(t3.path, true), a2 = r3.ownerDocument();
            i2 = null != s2 && a2.$populated(s2) || r3.$populated(t3.path);
          }
          return !!i2 && (null == e3 || !(n.isBuffer(e3) || "Binary" === e3._bsontype || !y.isObject(e3)) || o2);
        }, w.prototype._castRef = function(t3, e3, r3) {
          if (null == t3)
            return t3;
          if (null != t3.$__)
            return t3.$__.wasPopulated = t3.$__.wasPopulated || true, t3;
          if (n.isBuffer(t3) || !y.isObject(t3)) {
            if (r3)
              return t3;
            throw new b(this.instance, t3, this.path, null, this);
          }
          var o2 = e3.$__fullPath(this.path, true), i2 = e3.ownerDocument().$populated(o2, true), s2 = t3;
          return e3.$__.populated && e3.$__.populated[o2] && e3.$__.populated[o2].options && e3.$__.populated[o2].options.options && e3.$__.populated[o2].options.options.lean || ((s2 = new i2.options[v](t3)).$__.wasPopulated = true), s2;
        }, w.prototype.$conditionalHandlers = { $all: function(t3) {
          var e3 = this;
          return Array.isArray(t3) ? t3.map(function(t4) {
            return e3.castForQuery(t4);
          }) : [this.castForQuery(t3)];
        }, $eq: $, $in: S, $ne: $, $nin: S, $exists: a, $type: u }, w.prototype.castForQueryWrapper = function(t3) {
          if (this.$$context = t3.context, "$conditional" in t3) {
            var e3 = this.castForQuery(t3.$conditional, t3.val);
            return this.$$context = null, e3;
          }
          if (t3.$skipQueryCastForUpdate || t3.$applySetters) {
            var r3 = this._castForQuery(t3.val);
            return this.$$context = null, r3;
          }
          var n2 = this.castForQuery(t3.val);
          return this.$$context = null, n2;
        }, w.prototype.castForQuery = function(t3, e3) {
          var r3;
          if (2 === arguments.length) {
            if (!(r3 = this.$conditionalHandlers[t3]))
              throw new Error("Can't use " + t3);
            return r3.call(this, e3);
          }
          return e3 = t3, this._castForQuery(e3);
        }, w.prototype._castForQuery = function(t3) {
          return this.applySetters(t3, this.$$context);
        }, w.checkRequired = function(t3) {
          return 0 !== arguments.length && (this._checkRequired = t3), this._checkRequired;
        }, w.prototype.checkRequired = function(t3) {
          return null != t3;
        }, w.prototype.clone = function() {
          var t3 = Object.assign({}, this.options), e3 = new this.constructor(this.path, t3, this.instance);
          return e3.validators = this.validators.slice(), void 0 !== this.requiredValidator && (e3.requiredValidator = this.requiredValidator), void 0 !== this.defaultValue && (e3.defaultValue = this.defaultValue), void 0 !== this.$immutable && void 0 === this.options.immutable && (e3.$immutable = this.$immutable, c(e3)), void 0 !== this._index && (e3._index = this._index), void 0 !== this.selected && (e3.selected = this.selected), void 0 !== this.isRequired && (e3.isRequired = this.isRequired), void 0 !== this.originalRequiredValue && (e3.originalRequiredValue = this.originalRequiredValue), e3.getters = this.getters.slice(), e3.setters = this.setters.slice(), e3;
        }, t2.exports = e2 = w, e2.CastError = b, e2.ValidatorError = g;
      }, 489: (t2, e2, r2) => {
        "use strict";
        r2(6872);
        var n = t2.exports = function() {
        };
        n.ctor = function() {
          var t3 = Array.prototype.slice.call(arguments), e3 = function() {
            n.apply(this, arguments), this.paths = {}, this.states = {};
          };
          return e3.prototype = new n(), e3.prototype.stateNames = t3, t3.forEach(function(t4) {
            e3.prototype[t4] = function(e4) {
              this._changeState(e4, t4);
            };
          }), e3;
        }, n.prototype._changeState = function(t3, e3) {
          var r3 = this.states[this.paths[t3]];
          r3 && delete r3[t3], this.paths[t3] = e3, this.states[e3] = this.states[e3] || {}, this.states[e3][t3] = true;
        }, n.prototype.clear = function(t3) {
          if (null != this.states[t3])
            for (var e3, r3 = Object.keys(this.states[t3]), n2 = r3.length; n2--; )
              e3 = r3[n2], delete this.states[t3][e3], delete this.paths[e3];
        }, n.prototype.clearPath = function(t3) {
          var e3 = this.paths[t3];
          e3 && (delete this.paths[t3], delete this.states[e3][t3]);
        }, n.prototype.getStatePaths = function(t3) {
          return null != this.states[t3] ? this.states[t3] : {};
        }, n.prototype.some = function() {
          var t3 = this, e3 = arguments.length ? arguments : this.stateNames;
          return Array.prototype.some.call(e3, function(e4) {
            return null != t3.states[e4] && Object.keys(t3.states[e4]).length;
          });
        }, n.prototype._iter = function(t3) {
          return function() {
            var e3 = Array.prototype.slice.call(arguments), r3 = e3.pop();
            e3.length || (e3 = this.stateNames);
            var n2 = this, o = e3.reduce(function(t4, e4) {
              return null == n2.states[e4] ? t4 : t4.concat(Object.keys(n2.states[e4]));
            }, []);
            return o[t3](function(t4, e4, n3) {
              return r3(t4, e4, n3);
            });
          };
        }, n.prototype.forEach = function() {
          return this.forEach = this._iter("forEach"), this.forEach.apply(this, arguments);
        }, n.prototype.map = function() {
          return this.map = this._iter("map"), this.map.apply(this, arguments);
        };
      }, 1568: (t2, e2, r2) => {
        "use strict";
        var n = r2(9620).EventEmitter, o = r2(2591), i = r2(6872), s = r2(8770).documentArrayParent;
        function a(t3, e3, r3, n2, a2) {
          i.isMongooseDocumentArray(e3) ? (this.__parentArray = e3, this[s] = e3.$parent()) : (this.__parentArray = void 0, this[s] = void 0), this.$setIndex(a2), this.$__parent = this[s], o.call(this, t3, n2, this[s], r3, { isNew: true });
        }
        for (var u in a.prototype = Object.create(o.prototype), a.prototype.constructor = a, Object.defineProperty(a.prototype, "$isSingleNested", { configurable: false, writable: false, value: false }), Object.defineProperty(a.prototype, "$isDocumentArrayElement", { configurable: false, writable: false, value: true }), n.prototype)
          a[u] = n.prototype[u];
        a.prototype.$setIndex = function(t3) {
          if (this.__index = t3, null != this.$__ && null != this.$__.validationError)
            for (var e3 = 0, r3 = Object.keys(this.$__.validationError.errors); e3 < r3.length; e3++) {
              var n2 = r3[e3];
              this.invalidate(n2, this.$__.validationError.errors[n2]);
            }
        }, a.prototype.populate = function() {
          throw new Error('Mongoose does not support calling populate() on nested docs. Instead of `doc.arr[0].populate("path")`, use `doc.populate("arr.0.path")`');
        }, a.prototype.$__removeFromParent = function() {
          var t3 = this._doc._id;
          if (!t3)
            throw new Error("For your own good, Mongoose does not know how to remove an ArraySubdocument that has no _id");
          this.__parentArray.pull({ _id: t3 });
        }, a.prototype.$__fullPath = function(t3, e3) {
          return null == this.__index ? null : (this.$__.fullPath || this.ownerDocument(), e3 ? t3 ? this.$__.fullPath + "." + t3 : this.$__.fullPath : t3 ? this.$__.fullPath + "." + this.__index + "." + t3 : this.$__.fullPath + "." + this.__index);
        }, a.prototype.$__pathRelativeToParent = function(t3, e3) {
          return null == this.__index ? null : e3 ? null == t3 ? this.__parentArray.$path() : this.__parentArray.$path() + "." + t3 : null == t3 ? this.__parentArray.$path() + "." + this.__index : this.__parentArray.$path() + "." + this.__index + "." + t3;
        }, a.prototype.$parent = function() {
          return this[s];
        }, a.prototype.parentArray = function() {
          return this.__parentArray;
        }, t2.exports = a;
      }, 6077: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3, r3) {
          return (e3 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== n(t5) || null === t5)
                return t5;
              var r4 = t5[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o2 = r4.call(t5, "string");
                if ("object" !== n(o2))
                  return o2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t5);
            }(t4);
            return "symbol" === n(e4) ? e4 : String(e4);
          }(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        var i = r2(8075), s = r2(9261), a = r2(8727), u = r2(8770).arrayAtomicsSymbol, c = r2(8770).arrayAtomicsBackupSymbol, f = r2(8770).arrayParentSymbol, l = r2(8770).arrayPathSymbol, p = r2(8770).arraySchemaSymbol, h = Array.prototype.push, y = /^\d+$/;
        t2.exports = function(t3, e3, r3) {
          var n2, d = [], m = (o(n2 = {}, u, {}), o(n2, c, void 0), o(n2, l, e3), o(n2, p, void 0), o(n2, f, void 0), n2);
          if (Array.isArray(t3) && (t3[l] === e3 && t3[f] === r3 && (m[u] = Object.assign({}, t3[u])), t3.forEach(function(t4) {
            h.call(d, t4);
          })), m[l] = e3, m.__array = d, r3 && r3 instanceof a)
            for (m[f] = r3, m[p] = r3.$__schema.path(e3); null != m[p] && m[p].$isMongooseArray && !m[p].$isMongooseDocumentArray; )
              m[p] = m[p].casterConstructor;
          var v = new Proxy(d, { get: function(t4, e4) {
            return "isMongooseArray" === e4 || "isMongooseArrayProxy" === e4 || "isMongooseDocumentArray" === e4 || "isMongooseDocumentArrayProxy" === e4 || (m.hasOwnProperty(e4) ? m[e4] : s.hasOwnProperty(e4) ? s[e4] : i.hasOwnProperty(e4) ? i[e4] : d[e4]);
          }, set: function(t4, e4, r4) {
            return "string" == typeof e4 && y.test(e4) ? s.set.call(v, e4, r4, false) : m.hasOwnProperty(e4) ? m[e4] = r4 : d[e4] = r4, true;
          } });
          return v;
        };
      }, 1255: (t2, e2) => {
        "use strict";
        e2.isMongooseDocumentArray = function(t3) {
          return Array.isArray(t3) && t3.isMongooseDocumentArray;
        };
      }, 9261: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return i(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? i(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function i(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var s = r2(8075), a = r2(8727), u = r2(4731), c = r2(7291), f = r2(4962).h, l = r2(6872), p = r2(1563), h = r2(8770).arrayParentSymbol, y = r2(8770).arrayPathSymbol, d = r2(8770).arraySchemaSymbol, m = r2(8770).documentArrayParent, v = { toBSON: function() {
          return this.toObject(f);
        }, getArrayParent: function() {
          return this[h];
        }, _cast: function(t3, e3) {
          if (null == this[d])
            return t3;
          var r3 = this[d].casterConstructor;
          if ((r3.$isMongooseDocumentArray ? l.isMongooseDocumentArray(t3) : t3 instanceof r3) || t3 && t3.constructor && t3.constructor.baseCasterConstructor === r3)
            return t3[m] && t3.__parentArray || (t3[m] = this[h], t3.__parentArray = this), t3.$setIndex(e3), t3;
          if (null == t3)
            return null;
          if ((n.isBuffer(t3) || p(t3, "ObjectID") || !l.isObject(t3)) && (t3 = { _id: t3 }), t3 && r3.discriminators && r3.schema && r3.schema.options && r3.schema.options.discriminatorKey)
            if ("string" == typeof t3[r3.schema.options.discriminatorKey] && r3.discriminators[t3[r3.schema.options.discriminatorKey]])
              r3 = r3.discriminators[t3[r3.schema.options.discriminatorKey]];
            else {
              var o2 = c(r3.discriminators, t3[r3.schema.options.discriminatorKey]);
              o2 && (r3 = o2);
            }
          if (r3.$isMongooseDocumentArray)
            return r3.cast(t3, this, void 0, void 0, e3);
          var i2 = new r3(t3, this, void 0, void 0, e3);
          return i2.isNew = true, i2;
        }, id: function(t3) {
          var e3, r3, n2;
          try {
            e3 = u(t3).toString();
          } catch (t4) {
            e3 = null;
          }
          var i2, s2 = o(this);
          try {
            for (s2.s(); !(i2 = s2.n()).done; ) {
              var c2 = i2.value;
              if (c2 && null != (n2 = c2.get("_id"))) {
                if (n2 instanceof a) {
                  if (r3 || (r3 = String(t3)), r3 == n2._id)
                    return c2;
                } else if (p(t3, "ObjectID") || p(n2, "ObjectID")) {
                  if (e3 == n2)
                    return c2;
                } else if (t3 == n2 || l.deepEqual(t3, n2))
                  return c2;
              }
            }
          } catch (t4) {
            s2.e(t4);
          } finally {
            s2.f();
          }
          return null;
        }, toObject: function(t3) {
          return [].concat(this.map(function(e3) {
            return null == e3 ? null : "function" != typeof e3.toObject ? e3 : e3.toObject(t3);
          }));
        }, $toObject: function() {
          return this.constructor.prototype.toObject.apply(this, arguments);
        }, push: function() {
          var t3 = s.push.apply(this, arguments);
          return b(this), t3;
        }, pull: function() {
          var t3 = s.pull.apply(this, arguments);
          return b(this), t3;
        }, shift: function() {
          var t3 = s.shift.apply(this, arguments);
          return b(this), t3;
        }, splice: function() {
          var t3 = s.splice.apply(this, arguments);
          return b(this), t3;
        }, inspect: function() {
          return this.toObject();
        }, create: function(t3) {
          var e3 = this[d].casterConstructor;
          if (t3 && e3.discriminators && e3.schema && e3.schema.options && e3.schema.options.discriminatorKey)
            if ("string" == typeof t3[e3.schema.options.discriminatorKey] && e3.discriminators[t3[e3.schema.options.discriminatorKey]])
              e3 = e3.discriminators[t3[e3.schema.options.discriminatorKey]];
            else {
              var r3 = c(e3.discriminators, t3[e3.schema.options.discriminatorKey]);
              r3 && (e3 = r3);
            }
          return new e3(t3, this);
        }, notify: function(t3) {
          var e3 = this;
          return function r3(n2, o2) {
            for (var i2 = (o2 = o2 || e3).length; i2--; )
              null != o2[i2] && ("save" === t3 && (n2 = e3[i2]), l.isMongooseArray(o2[i2]) ? r3(n2, o2[i2]) : o2[i2] && o2[i2].emit(t3, n2));
          };
        }, set: function(t3, e3, r3) {
          var n2 = this.__array;
          if (r3)
            return n2[t3] = e3, this;
          var o2 = v._cast.call(this, e3, t3);
          return v._markModified.call(this, t3), n2[t3] = o2, this;
        }, _markModified: function(t3, e3) {
          var r3, n2 = this[h];
          if (n2) {
            if (r3 = this[y], arguments.length)
              if (null != e3) {
                var o2 = t3.__index;
                r3 = r3 + "." + o2 + "." + e3;
              } else
                r3 = r3 + "." + t3;
            if (null != r3 && r3.endsWith(".$"))
              return this;
            n2.markModified(r3, 0 !== arguments.length ? t3 : n2);
          }
          return this;
        } };
        function b(t3) {
          var e3 = t3[h];
          if (e3 && null != e3.$__.populated) {
            var r3, n2 = o(Object.keys(e3.$__.populated).filter(function(e4) {
              return e4.startsWith(t3[y] + ".");
            }));
            try {
              var i2 = function() {
                var n3 = r3.value, o2 = n3.slice((t3[y] + ".").length);
                if (!Array.isArray(e3.$__.populated[n3].value))
                  return "continue";
                e3.$__.populated[n3].value = t3.map(function(t4) {
                  return t4.$populated(o2);
                });
              };
              for (n2.s(); !(r3 = n2.n()).done; )
                i2();
            } catch (t4) {
              n2.e(t4);
            } finally {
              n2.f();
            }
          }
        }
        t2.exports = v;
      }, 1362: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3, r3) {
          return (e3 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== n(t5) || null === t5)
                return t5;
              var r4 = t5[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o2 = r4.call(t5, "string");
                if ("object" !== n(o2))
                  return o2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t5);
            }(t4);
            return "symbol" === n(e4) ? e4 : String(e4);
          }(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        var i = r2(8727), s = r2(8075), a = r2(8770).arrayAtomicsSymbol, u = r2(8770).arrayAtomicsBackupSymbol, c = r2(8770).arrayParentSymbol, f = r2(8770).arrayPathSymbol, l = r2(8770).arraySchemaSymbol, p = Array.prototype.push, h = /^\d+$/;
        t2.exports = function(t3, e3, r3, n2) {
          var y, d;
          if (Array.isArray(t3)) {
            var m = t3.length;
            if (0 === m)
              d = new Array();
            else if (1 === m)
              (d = new Array(1))[0] = t3[0];
            else if (m < 1e4)
              d = new Array(), p.apply(d, t3);
            else {
              d = new Array();
              for (var v = 0; v < m; ++v)
                p.call(d, t3[v]);
            }
          } else
            d = [];
          var b = (o(y = {}, a, {}), o(y, u, void 0), o(y, f, e3), o(y, l, n2), o(y, c, void 0), o(y, "isMongooseArray", true), o(y, "isMongooseArrayProxy", true), o(y, "__array", d), y);
          t3 && null != t3[a] && (b[a] = t3[a]), null != r3 && r3 instanceof i && (b[c] = r3, b[l] = n2 || r3.schema.path(e3));
          var g = new Proxy(d, { get: function(t4, e4) {
            return b.hasOwnProperty(e4) ? b[e4] : s.hasOwnProperty(e4) ? s[e4] : d[e4];
          }, set: function(t4, e4, r4) {
            return "string" == typeof e4 && h.test(e4) ? s.set.call(g, e4, r4, false) : b.hasOwnProperty(e4) ? b[e4] = r4 : d[e4] = r4, true;
          } });
          return g;
        };
      }, 7339: (t2, e2) => {
        "use strict";
        e2.isMongooseArray = function(t3) {
          return Array.isArray(t3) && t3.isMongooseArray;
        };
      }, 8075: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        function i(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var s = r2(8727), a = r2(1568), u = r2(5202), c = r2(4134), f = r2(4962).h, l = r2(3564), p = r2(6872), h = r2(1563), y = r2(8770).arrayAtomicsSymbol, d = r2(8770).arrayParentSymbol, m = r2(8770).arrayPathSymbol, v = r2(8770).arraySchemaSymbol, b = r2(8770).populateModelSymbol, g = Symbol("mongoose#Array#sliced"), _ = Array.prototype.push, w = { $__getAtomics: function() {
          var t3 = [], e3 = Object.keys(this[y] || {}), r3 = e3.length, n2 = Object.assign({}, f, { _isNested: true });
          if (0 === r3)
            return t3[0] = ["$set", this.toObject(n2)], t3;
          for (; r3--; ) {
            var o2 = e3[r3], i2 = this[y][o2];
            p.isMongooseObject(i2) ? i2 = i2.toObject(n2) : Array.isArray(i2) ? i2 = this.toObject.call(i2, n2) : null != i2 && Array.isArray(i2.$each) ? i2.$each = this.toObject.call(i2.$each, n2) : null != i2 && "function" == typeof i2.valueOf && (i2 = i2.valueOf()), "$addToSet" === o2 && (i2 = { $each: i2 }), t3.push([o2, i2]);
          }
          return t3;
        }, $atomics: function() {
          return this[y];
        }, $parent: function() {
          return this[d];
        }, $path: function() {
          return this[m];
        }, $shift: function() {
          if (this._registerAtomic("$pop", -1), this._markModified(), !this._shifted)
            return this._shifted = true, [].shift.call(this);
        }, $pop: function() {
          if (this._registerAtomic("$pop", 1), this._markModified(), !this._popped)
            return this._popped = true, [].pop.call(this);
        }, $schema: function() {
          return this[v];
        }, _cast: function(t3) {
          var e3, r3 = false, o2 = this[d];
          return o2 && (r3 = o2.$populated(this[m], true)), r3 && null != t3 ? (e3 = r3.options[b], (n.isBuffer(t3) || h(t3, "ObjectID") || !p.isObject(t3)) && (t3 = { _id: t3 }), t3.schema && t3.schema.discriminatorMapping && void 0 !== t3.schema.discriminatorMapping.key || (t3 = new e3(t3)), this[v].caster.applySetters(t3, o2, true)) : this[v].caster.applySetters(t3, o2, false);
        }, _mapCast: function(t3, e3) {
          return this._cast(t3, this.length + e3);
        }, _markModified: function(t3) {
          var e3, r3 = this[d];
          if (r3) {
            if (e3 = this[m], arguments.length && (e3 = e3 + "." + t3), null != e3 && e3.endsWith(".$"))
              return this;
            r3.markModified(e3, 0 !== arguments.length ? t3 : r3);
          }
          return this;
        }, _registerAtomic: function(t3, e3) {
          if (!this[g]) {
            if ("$set" === t3)
              return this[y] = { $set: e3 }, c(this[d], this[m]), this._markModified(), this;
            var r3, n2 = this[y];
            if ("$pop" === t3 && !("$pop" in n2)) {
              var o2 = this;
              this[d].once("save", function() {
                o2._popped = o2._shifted = null;
              });
            }
            if (n2.$set || Object.keys(n2).length && !(t3 in n2))
              return this[y] = { $set: this }, this;
            if ("$pullAll" === t3 || "$addToSet" === t3)
              n2[t3] || (n2[t3] = []), n2[t3] = n2[t3].concat(e3);
            else if ("$pullDocs" === t3) {
              var i2 = n2.$pull || (n2.$pull = {});
              e3[0] instanceof a ? (r3 = i2.$or || (i2.$or = []), Array.prototype.push.apply(r3, e3.map(function(t4) {
                return t4.toObject({ transform: function(e4, r4) {
                  return null == t4 || null == t4.$__ || Object.keys(t4.$__.activePaths.getStatePaths("default")).forEach(function(t5) {
                    l.unset(t5, r4), O(r4, t5);
                  }), r4;
                }, virtuals: false });
              }))) : (r3 = i2._id || (i2._id = { $in: [] })).$in = r3.$in.concat(e3);
            } else
              "$push" === t3 ? (n2.$push = n2.$push || { $each: [] }, null != e3 && p.hasUserDefinedProperty(e3, "$each") ? n2.$push = e3 : n2.$push.$each = n2.$push.$each.concat(e3)) : n2[t3] = e3;
            return this;
          }
        }, addToSet: function() {
          $(this, arguments);
          var t3 = [].map.call(arguments, this._mapCast, this);
          t3 = this[v].applySetters(t3, this[d]);
          var e3 = [], r3 = "";
          t3[0] instanceof a ? r3 = "doc" : t3[0] instanceof Date && (r3 = "date");
          var n2 = p.isMongooseArray(t3) ? t3.__array : this, o2 = p.isMongooseArray(this) ? this.__array : this;
          return n2.forEach(function(t4) {
            var n3, i2 = +t4;
            switch (r3) {
              case "doc":
                n3 = this.some(function(e4) {
                  return e4.equals(t4);
                });
                break;
              case "date":
                n3 = this.some(function(t5) {
                  return +t5 === i2;
                });
                break;
              default:
                n3 = ~this.indexOf(t4);
            }
            n3 || (this._markModified(), o2.push(t4), this._registerAtomic("$addToSet", t4), [].push.call(e3, t4));
          }, this), e3;
        }, hasAtomics: function() {
          return p.isPOJO(this[y]) ? Object.keys(this[y]).length : 0;
        }, includes: function(t3, e3) {
          return -1 !== this.indexOf(t3, e3);
        }, indexOf: function(t3, e3) {
          h(t3, "ObjectID") && (t3 = t3.toString()), e3 = null == e3 ? 0 : e3;
          for (var r3 = this.length, n2 = e3; n2 < r3; ++n2)
            if (t3 == this[n2])
              return n2;
          return -1;
        }, inspect: function() {
          return JSON.stringify(this);
        }, nonAtomicPush: function() {
          var t3 = [].map.call(arguments, this._mapCast, this);
          this._markModified();
          var e3 = [].push.apply(this, t3);
          return this._registerAtomic("$set", this), e3;
        }, pop: function() {
          this._markModified();
          var t3 = [].pop.call(this);
          return this._registerAtomic("$set", this), t3;
        }, pull: function() {
          var t3, e3 = [].map.call(arguments, this._cast, this), r3 = this[d].get(this[m]), n2 = r3.length;
          for (this._markModified(); n2--; )
            if ((t3 = r3[n2]) instanceof s) {
              var o2 = e3.some(function(e4) {
                return t3.equals(e4);
              });
              o2 && [].splice.call(r3, n2, 1);
            } else
              ~r3.indexOf.call(e3, t3) && [].splice.call(r3, n2, 1);
          return e3[0] instanceof a ? this._registerAtomic("$pullDocs", e3.map(function(t4) {
            var e4 = t4.$__getValue("_id");
            return void 0 === e4 || t4.$isDefault("_id") ? t4 : e4;
          })) : this._registerAtomic("$pullAll", e3), c(this[d], this[m]) > 0 && this._registerAtomic("$set", this), this;
        }, push: function() {
          var t3 = arguments, e3 = t3, r3 = null != t3[0] && p.hasUserDefinedProperty(t3[0], "$each"), n2 = p.isMongooseArray(this) ? this.__array : this;
          if (r3 && (e3 = t3[0], t3 = t3[0].$each), null == this[v])
            return _.apply(this, t3);
          $(this, t3);
          var o2, i2 = this[d];
          t3 = [].map.call(t3, this._mapCast, this), t3 = this[v].applySetters(t3, i2, void 0, void 0, { skipDocumentArrayCast: true });
          var s2 = this[y];
          if (this._markModified(), r3) {
            if (e3.$each = t3, 0 !== (s2.$push && s2.$push.$each && s2.$push.$each.length || 0) && s2.$push.$position != e3.$position)
              throw new u("Cannot call `Array#push()` multiple times with different `$position`");
            null != e3.$position ? ([].splice.apply(n2, [e3.$position, 0].concat(t3)), o2 = this.length) : o2 = [].push.apply(n2, t3);
          } else {
            if (0 !== (s2.$push && s2.$push.$each && s2.$push.$each.length || 0) && null != s2.$push.$position)
              throw new u("Cannot call `Array#push()` multiple times with different `$position`");
            e3 = t3, o2 = [].push.apply(n2, t3);
          }
          return this._registerAtomic("$push", e3), o2;
        }, remove: function() {
          return this.pull.apply(this, arguments);
        }, set: function(t3, e3, r3) {
          var n2 = this.__array;
          if (r3)
            return n2[t3] = e3, this;
          var o2 = w._cast.call(this, e3, t3);
          return w._markModified.call(this, t3), n2[t3] = o2, this;
        }, shift: function() {
          var t3 = p.isMongooseArray(this) ? this.__array : this;
          this._markModified();
          var e3 = [].shift.call(t3);
          return this._registerAtomic("$set", this), e3;
        }, sort: function() {
          var t3 = p.isMongooseArray(this) ? this.__array : this, e3 = [].sort.apply(t3, arguments);
          return this._registerAtomic("$set", this), e3;
        }, splice: function() {
          var t3, e3 = p.isMongooseArray(this) ? this.__array : this;
          if (this._markModified(), $(this, Array.prototype.slice.call(arguments, 2)), arguments.length) {
            var r3;
            if (null == this[v])
              r3 = arguments;
            else {
              r3 = [];
              for (var n2 = 0; n2 < arguments.length; ++n2)
                r3[n2] = n2 < 2 ? arguments[n2] : this._cast(arguments[n2], arguments[0] + (n2 - 2));
            }
            t3 = [].splice.apply(e3, r3), this._registerAtomic("$set", this);
          }
          return t3;
        }, toBSON: function() {
          return this.toObject(f);
        }, toObject: function(t3) {
          var e3 = p.isMongooseArray(this) ? this.__array : this;
          return t3 && t3.depopulate ? ((t3 = p.clone(t3))._isNested = true, [].concat(e3).map(function(e4) {
            return e4 instanceof s ? e4.toObject(t3) : e4;
          })) : [].concat(e3);
        }, $toObject: function() {
          return this.constructor.prototype.toObject.apply(this, arguments);
        }, unshift: function() {
          var t3;
          $(this, arguments), null == this[v] ? t3 = arguments : (t3 = [].map.call(arguments, this._cast, this), t3 = this[v].applySetters(t3, this[d]));
          var e3 = p.isMongooseArray(this) ? this.__array : this;
          return this._markModified(), [].unshift.apply(e3, t3), this._registerAtomic("$set", this), this.length;
        } };
        function O(t3, e3, r3) {
          if ("string" == typeof e3) {
            if (-1 === e3.indexOf("."))
              return;
            e3 = l.stringToParts(e3);
          }
          (r3 = r3 || 0) >= e3.length || null != t3 && "object" === o(t3) && (O(t3[e3[0]], e3, r3 + 1), null != t3[e3[0]] && "object" === o(t3[e3[0]]) && 0 === Object.keys(t3[e3[0]]).length && delete t3[e3[0]]);
        }
        function $(t3, e3) {
          var r3, n2, a2, u2 = null == t3 ? null : t3[v] && t3[v].caster && t3[v].caster.options && t3[v].caster.options.ref || null;
          0 === t3.length && 0 !== e3.length && function(t4, e4) {
            if (!e4)
              return false;
            var r4, n3 = function(t5, e5) {
              var r5 = "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
              if (!r5) {
                if (Array.isArray(t5) || (r5 = function(t6, e6) {
                  if (t6) {
                    if ("string" == typeof t6)
                      return i(t6, e6);
                    var r6 = Object.prototype.toString.call(t6).slice(8, -1);
                    return "Object" === r6 && t6.constructor && (r6 = t6.constructor.name), "Map" === r6 || "Set" === r6 ? Array.from(t6) : "Arguments" === r6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r6) ? i(t6, e6) : void 0;
                  }
                }(t5)) || e5 && t5 && "number" == typeof t5.length) {
                  r5 && (t5 = r5);
                  var n4 = 0, o3 = function() {
                  };
                  return { s: o3, n: function() {
                    return n4 >= t5.length ? { done: true } : { done: false, value: t5[n4++] };
                  }, e: function(t6) {
                    throw t6;
                  }, f: o3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var s2, a4 = true, u3 = false;
              return { s: function() {
                r5 = r5.call(t5);
              }, n: function() {
                var t6 = r5.next();
                return a4 = t6.done, t6;
              }, e: function(t6) {
                u3 = true, s2 = t6;
              }, f: function() {
                try {
                  a4 || null == r5.return || r5.return();
                } finally {
                  if (u3)
                    throw s2;
                }
              } };
            }(t4);
            try {
              for (n3.s(); !(r4 = n3.n()).done; ) {
                var o2 = r4.value;
                if (null == o2)
                  return false;
                var a3 = o2.constructor;
                if (!(o2 instanceof s) || a3.modelName !== e4 && a3.baseModelName !== e4)
                  return false;
              }
            } catch (t5) {
              n3.e(t5);
            } finally {
              n3.f();
            }
            return true;
          }(e3, u2) && t3[d].$populated(t3[m], [], (r3 = {}, n2 = b, a2 = e3[0].constructor, (n2 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== o(t5) || null === t5)
                return t5;
              var r4 = t5[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var n3 = r4.call(t5, "string");
                if ("object" !== o(n3))
                  return n3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t5);
            }(t4);
            return "symbol" === o(e4) ? e4 : String(e4);
          }(n2)) in r3 ? Object.defineProperty(r3, n2, { value: a2, enumerable: true, configurable: true, writable: true }) : r3[n2] = a2, r3));
        }
        for (var S = function() {
          var t3 = A[j];
          if (null == Array.prototype[t3])
            return "continue";
          w[t3] = function() {
            var e3 = p.isMongooseArray(this) ? this.__array : this, r3 = [].concat(e3);
            return r3[t3].apply(r3, arguments);
          };
        }, j = 0, A = ["filter", "flat", "flatMap", "map", "slice"]; j < A.length; j++)
          S();
        t2.exports = w;
      }, 4051: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW, o = r2(9906).get().Binary, i = r2(6872);
        function s(t3, e3, r3) {
          var o2, a2, c, f, l = t3;
          return null == t3 && (l = 0), Array.isArray(e3) ? (a2 = e3[0], c = e3[1]) : o2 = e3, f = "number" == typeof l || l instanceof Number ? n.alloc(l) : n.from(l, o2, r3), i.decorate(f, s.mixin), f.isMongooseBuffer = true, f[s.pathSymbol] = a2, f[u] = c, f._subtype = 0, f;
        }
        var a = Symbol.for("mongoose#Buffer#_path"), u = Symbol.for("mongoose#Buffer#_parent");
        s.pathSymbol = a, s.mixin = { _subtype: void 0, _markModified: function() {
          var t3 = this[u];
          return t3 && t3.markModified(this[s.pathSymbol]), this;
        }, write: function() {
          var t3 = n.prototype.write.apply(this, arguments);
          return t3 > 0 && this._markModified(), t3;
        }, copy: function(t3) {
          var e3 = n.prototype.copy.apply(this, arguments);
          return t3 && t3.isMongooseBuffer && t3._markModified(), e3;
        } }, i.each(["writeUInt8", "writeUInt16", "writeUInt32", "writeInt8", "writeInt16", "writeInt32", "writeFloat", "writeDouble", "fill", "utf8Write", "binaryWrite", "asciiWrite", "set", "writeUInt16LE", "writeUInt16BE", "writeUInt32LE", "writeUInt32BE", "writeInt16LE", "writeInt16BE", "writeInt32LE", "writeInt32BE", "writeFloatLE", "writeFloatBE", "writeDoubleLE", "writeDoubleBE"], function(t3) {
          n.prototype[t3] && (s.mixin[t3] = function() {
            var e3 = n.prototype[t3].apply(this, arguments);
            return this._markModified(), e3;
          });
        }), s.mixin.toObject = function(t3) {
          var e3 = "number" == typeof t3 ? t3 : this._subtype || 0;
          return new o(n.from(this), e3);
        }, s.mixin.$toObject = s.mixin.toObject, s.mixin.toBSON = function() {
          return new o(this, this._subtype || 0);
        }, s.mixin.equals = function(t3) {
          if (!n.isBuffer(t3))
            return false;
          if (this.length !== t3.length)
            return false;
          for (var e3 = 0; e3 < this.length; ++e3)
            if (this[e3] !== t3[e3])
              return false;
          return true;
        }, s.mixin.subtype = function(t3) {
          if ("number" != typeof t3)
            throw new TypeError("Invalid subtype. Expected a number");
          this._subtype !== t3 && this._markModified(), this._subtype = t3;
        }, s.Binary = o, t2.exports = s;
      }, 5003: (t2, e2, r2) => {
        "use strict";
        t2.exports = r2(9906).get().Decimal128;
      }, 8941: (t2, e2, r2) => {
        "use strict";
        e2.Array = r2(1362), e2.Buffer = r2(4051), e2.Document = e2.Embedded = r2(1568), e2.DocumentArray = r2(6077), e2.Decimal128 = r2(5003), e2.ObjectId = r2(6079), e2.Map = r2(3828), e2.Subdocument = r2(2591);
      }, 3828: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return i(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? i(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function i(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function s(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function a() {
          return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t3, e3, r3) {
            var n2 = u(t3, e3);
            if (n2) {
              var o2 = Object.getOwnPropertyDescriptor(n2, e3);
              return o2.get ? o2.get.call(arguments.length < 3 ? t3 : r3) : o2.value;
            }
          }, a.apply(this, arguments);
        }
        function u(t3, e3) {
          for (; !Object.prototype.hasOwnProperty.call(t3, e3) && null !== (t3 = y(t3)); )
            ;
          return t3;
        }
        function c(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function f(t3) {
          var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return f = function(t4) {
            if (null === t4 || (r3 = t4, -1 === Function.toString.call(r3).indexOf("[native code]")))
              return t4;
            var r3;
            if ("function" != typeof t4)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e3) {
              if (e3.has(t4))
                return e3.get(t4);
              e3.set(t4, n2);
            }
            function n2() {
              return l(t4, arguments, y(this).constructor);
            }
            return n2.prototype = Object.create(t4.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), h(n2, t4);
          }, f(t3);
        }
        function l(t3, e3, r3) {
          return l = p() ? Reflect.construct.bind() : function(t4, e4, r4) {
            var n2 = [null];
            n2.push.apply(n2, e4);
            var o2 = new (Function.bind.apply(t4, n2))();
            return r4 && h(o2, r4.prototype), o2;
          }, l.apply(null, arguments);
        }
        function p() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }
        function h(t3, e3) {
          return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, h(t3, e3);
        }
        function y(t3) {
          return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, y(t3);
        }
        var d = r2(3861), m = r2(5202), v = r2(1973), b = r2(6872).deepEqual, g = r2(1981), _ = r2(719), w = r2(8751), O = r2(2862), $ = r2(1563), S = r2(8770).populateModelSymbol, j = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && h(t4, e4);
          }(f2, t3);
          var e3, r3, n2, i2, u2 = (e3 = f2, r3 = p(), function() {
            var t4, n3 = y(e3);
            if (r3) {
              var o2 = y(this).constructor;
              t4 = Reflect.construct(n3, arguments, o2);
            } else
              t4 = n3.apply(this, arguments);
            return c(this, t4);
          });
          function f2(t4, e4, r4, n3) {
            var o2;
            return function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, f2), "Object" === g(t4) && (t4 = Object.keys(t4).reduce(function(e5, r5) {
              return e5.concat([[r5, t4[r5]]]);
            }, [])), (o2 = u2.call(this, t4)).$__parent = null != r4 && null != r4.$__ ? r4 : null, o2.$__path = e4, o2.$__schemaType = null == n3 ? new d(e4) : n3, o2.$__runDeferred(), o2;
          }
          return n2 = f2, i2 = [{ key: "$init", value: function(t4, e4) {
            A(t4), a(y(f2.prototype), "set", this).call(this, t4, e4), null != e4 && e4.$isSingleNested && (e4.$basePath = this.$__path + "." + t4);
          } }, { key: "$__set", value: function(t4, e4) {
            a(y(f2.prototype), "set", this).call(this, t4, e4);
          } }, { key: "get", value: function(t4, e4) {
            return $(t4, "ObjectID") && (t4 = t4.toString()), false === (e4 = e4 || {}).getters ? a(y(f2.prototype), "get", this).call(this, t4) : this.$__schemaType.applyGetters(a(y(f2.prototype), "get", this).call(this, t4), this.$__parent);
          } }, { key: "set", value: function(t4, e4) {
            if ($(t4, "ObjectID") && (t4 = t4.toString()), A(t4), e4 = _(e4), null == this.$__schemaType)
              return this.$__deferred = this.$__deferred || [], void this.$__deferred.push({ key: t4, value: e4 });
            var r4 = this.$__path + "." + t4, n3 = null != this.$__parent && this.$__parent.$__ ? this.$__parent.$populated(r4, true) || this.$__parent.$populated(this.$__path, true) : null, o2 = this.get(t4);
            if (null != n3) {
              if (this.$__schemaType.$isSingleNested)
                throw new m("Cannot manually populate single nested subdoc underneath Map " + 'at path "'.concat(this.$__path, '". Try using an array instead of a Map.'));
              Array.isArray(e4) && this.$__schemaType.$isMongooseArray ? e4 = e4.map(function(t5) {
                return null == t5.$__ && (t5 = new n3.options[S](t5)), t5.$__.wasPopulated = { value: t5._id }, t5;
              }) : (null == e4.$__ && (e4 = new n3.options[S](e4)), e4.$__.wasPopulated = { value: e4._id });
            } else
              try {
                e4 = this.$__schemaType.applySetters(e4, this.$__parent, false, this.get(t4), { path: r4 });
              } catch (t5) {
                if (null != this.$__parent && null != this.$__parent.$__)
                  return void this.$__parent.invalidate(r4, t5);
                throw t5;
              }
            a(y(f2.prototype), "set", this).call(this, t4, e4), null != e4 && e4.$isSingleNested && (e4.$basePath = this.$__path + "." + t4);
            var i3 = this.$__parent;
            null == i3 || null == i3.$__ || b(e4, o2) || i3.markModified(this.$__path + "." + t4);
          } }, { key: "clear", value: function() {
            a(y(f2.prototype), "clear", this).call(this);
            var t4 = this.$__parent;
            null != t4 && t4.markModified(this.$__path);
          } }, { key: "delete", value: function(t4) {
            return $(t4, "ObjectID") && (t4 = t4.toString()), this.set(t4, void 0), a(y(f2.prototype), "delete", this).call(this, t4);
          } }, { key: "toBSON", value: function() {
            return new Map(this);
          } }, { key: "toObject", value: function(t4) {
            if (t4 && t4.flattenMaps) {
              var e4, r4 = {}, n3 = o(this.keys());
              try {
                for (n3.s(); !(e4 = n3.n()).done; ) {
                  var i3 = e4.value;
                  r4[i3] = v(this.get(i3), t4);
                }
              } catch (t5) {
                n3.e(t5);
              } finally {
                n3.f();
              }
              return r4;
            }
            return new Map(this);
          } }, { key: "$toObject", value: function() {
            return this.constructor.prototype.toObject.apply(this, arguments);
          } }, { key: "toJSON", value: function(t4) {
            if ("boolean" != typeof (t4 && t4.flattenMaps) || t4.flattenMaps) {
              var e4, r4 = {}, n3 = o(this.keys());
              try {
                for (n3.s(); !(e4 = n3.n()).done; ) {
                  var i3 = e4.value;
                  r4[i3] = v(this.get(i3), t4);
                }
              } catch (t5) {
                n3.e(t5);
              } finally {
                n3.f();
              }
              return r4;
            }
            return new Map(this);
          } }, { key: "inspect", value: function() {
            return new Map(this);
          } }, { key: "$__runDeferred", value: function() {
            if (this.$__deferred) {
              var t4, e4 = o(this.$__deferred);
              try {
                for (e4.s(); !(t4 = e4.n()).done; ) {
                  var r4 = t4.value;
                  this.set(r4.key, r4.value);
                }
              } catch (t5) {
                e4.e(t5);
              } finally {
                e4.f();
              }
              this.$__deferred = null;
            }
          } }], i2 && s(n2.prototype, i2), Object.defineProperty(n2, "prototype", { writable: false }), f2;
        }(f(Map));
        function A(t3) {
          var e3 = n(t3);
          if ("string" !== e3)
            throw new TypeError("Mongoose maps only support string keys, got ".concat(e3));
          if (t3.startsWith("$"))
            throw new Error('Mongoose maps do not support keys that start with "$", got "'.concat(t3, '"'));
          if (t3.includes("."))
            throw new Error('Mongoose maps do not support keys that contain ".", got "'.concat(t3, '"'));
          if (O.has(t3))
            throw new Error('Mongoose maps do not support reserved key name "'.concat(t3, '"'));
        }
        w.inspect.custom && Object.defineProperty(j.prototype, w.inspect.custom, { enumerable: false, writable: false, configurable: false, value: j.prototype.inspect }), Object.defineProperty(j.prototype, "$__set", { enumerable: false, writable: true, configurable: false }), Object.defineProperty(j.prototype, "$__parent", { enumerable: false, writable: true, configurable: false }), Object.defineProperty(j.prototype, "$__path", { enumerable: false, writable: true, configurable: false }), Object.defineProperty(j.prototype, "$__schemaType", { enumerable: false, writable: true, configurable: false }), Object.defineProperty(j.prototype, "$isMongooseMap", { enumerable: false, writable: false, configurable: false, value: true }), Object.defineProperty(j.prototype, "$__deferredCalls", { enumerable: false, writable: false, configurable: false, value: true }), t2.exports = j;
      }, 6079: (t2, e2, r2) => {
        "use strict";
        var n = r2(9906).get().ObjectId, o = r2(8770).objectIdSymbol;
        Object.defineProperty(n.prototype, "_id", { enumerable: false, configurable: true, get: function() {
          return this;
        } }), n.prototype.hasOwnProperty("valueOf") || (n.prototype.valueOf = function() {
          return this.toString();
        }), n.prototype[o] = true, t2.exports = n;
      }, 2591: (t2, e2, r2) => {
        "use strict";
        var n = r2(8727), o = r2(1490), i = r2(4962).h, s = r2(8486), a = r2(8751), u = r2(6872);
        function c(t3, e3, r3, o2, i2) {
          if (null != r3) {
            var s2 = { isNew: r3.isNew };
            "defaults" in r3.$__ && (s2.defaults = r3.$__.defaults), i2 = Object.assign(s2, i2);
          }
          null != i2 && null != i2.path && (this.$basePath = i2.path), n.call(this, t3, e3, o2, i2), delete this.$__.priorDoc;
        }
        t2.exports = c, c.prototype = Object.create(n.prototype), Object.defineProperty(c.prototype, "$isSubdocument", { configurable: false, writable: false, value: true }), Object.defineProperty(c.prototype, "$isSingleNested", { configurable: false, writable: false, value: true }), c.prototype.toBSON = function() {
          return this.toObject(i);
        }, c.prototype.save = function(t3, e3) {
          var r3 = this;
          return "function" == typeof t3 && (e3 = t3, t3 = {}), (t3 = t3 || {}).suppressWarning || u.warn("mongoose: calling `save()` on a subdoc does **not** save the document to MongoDB, it only runs save middleware. Use `subdoc.save({ suppressWarning: true })` to hide this warning if you're sure this behavior is right for your app."), s(e3, function(t4) {
            r3.$__save(t4);
          });
        }, c.prototype.$__fullPath = function(t3) {
          return this.$__.fullPath || this.ownerDocument(), t3 ? this.$__.fullPath + "." + t3 : this.$__.fullPath;
        }, c.prototype.$__pathRelativeToParent = function(t3) {
          return null == t3 ? this.$basePath : [this.$basePath, t3].join(".");
        }, c.prototype.$__save = function(t3) {
          var e3 = this;
          return o(function() {
            return t3(null, e3);
          });
        }, c.prototype.$isValid = function(t3) {
          var e3 = this.$parent(), r3 = this.$__pathRelativeToParent(t3);
          return null != e3 && null != r3 ? e3.$isValid(r3) : n.prototype.$isValid.call(this, t3);
        }, c.prototype.markModified = function(t3) {
          n.prototype.markModified.call(this, t3);
          var e3 = this.$parent(), r3 = this.$__pathRelativeToParent(t3);
          if (null != e3 && null != r3) {
            var o2 = this.$__pathRelativeToParent().replace(/\.$/, "");
            e3.isDirectModified(o2) || this.isNew || this.$__parent.markModified(r3, this);
          }
        }, c.prototype.isModified = function(t3, e3) {
          var r3 = this, o2 = this.$parent();
          return null != o2 ? (Array.isArray(t3) || "string" == typeof t3 ? t3 = (t3 = Array.isArray(t3) ? t3 : t3.split(" ")).map(function(t4) {
            return r3.$__pathRelativeToParent(t4);
          }).filter(function(t4) {
            return null != t4;
          }) : t3 || (t3 = this.$__pathRelativeToParent()), o2.$isModified(t3, e3)) : n.prototype.isModified.call(this, t3, e3);
        }, c.prototype.$markValid = function(t3) {
          n.prototype.$markValid.call(this, t3);
          var e3 = this.$parent(), r3 = this.$__pathRelativeToParent(t3);
          null != e3 && null != r3 && e3.$markValid(r3);
        }, c.prototype.invalidate = function(t3, e3, r3) {
          n.prototype.invalidate.call(this, t3, e3, r3);
          var o2 = this.$parent(), i2 = this.$__pathRelativeToParent(t3);
          if (null != o2 && null != i2)
            o2.invalidate(i2, e3, r3);
          else if ("cast" === e3.kind || "CastError" === e3.name || null == i2)
            throw e3;
          return this.ownerDocument().$__.validationError;
        }, c.prototype.$ignore = function(t3) {
          n.prototype.$ignore.call(this, t3);
          var e3 = this.$parent(), r3 = this.$__pathRelativeToParent(t3);
          null != e3 && null != r3 && e3.$ignore(r3);
        }, c.prototype.ownerDocument = function() {
          if (this.$__.ownerDocument)
            return this.$__.ownerDocument;
          for (var t3 = this, e3 = [], r3 = /* @__PURE__ */ new Set([t3]); "function" == typeof t3.$__pathRelativeToParent; ) {
            e3.unshift(t3.$__pathRelativeToParent(void 0, true));
            var n2 = t3.$parent();
            if (null == n2)
              break;
            if (t3 = n2, r3.has(t3))
              throw new Error("Infinite subdocument loop: subdoc with _id " + t3._id + " is a parent of itself");
            r3.add(t3);
          }
          return this.$__.fullPath = e3.join("."), this.$__.ownerDocument = t3, this.$__.ownerDocument;
        }, c.prototype.$__fullPathWithIndexes = function() {
          for (var t3 = this, e3 = [], r3 = /* @__PURE__ */ new Set([t3]); "function" == typeof t3.$__pathRelativeToParent; ) {
            e3.unshift(t3.$__pathRelativeToParent(void 0, false));
            var n2 = t3.$parent();
            if (null == n2)
              break;
            if (t3 = n2, r3.has(t3))
              throw new Error("Infinite subdocument loop: subdoc with _id " + t3._id + " is a parent of itself");
            r3.add(t3);
          }
          return e3.join(".");
        }, c.prototype.parent = function() {
          return this.$__parent;
        }, c.prototype.$parent = c.prototype.parent, c.prototype.$__remove = function(t3) {
          if (null != t3)
            return t3(null, this);
        }, c.prototype.$__removeFromParent = function() {
          this.$__parent.set(this.$basePath, null);
        }, c.prototype.remove = function(t3, e3) {
          return "function" == typeof t3 && (e3 = t3, t3 = null), function(t4) {
            var e4 = t4.ownerDocument();
            function r3() {
              e4.$removeListener("save", r3), e4.$removeListener("remove", r3), t4.emit("remove", t4), t4.constructor.emit("remove", t4), e4 = t4 = null;
            }
            e4.$on("save", r3), e4.$on("remove", r3);
          }(this), t3 && t3.noop || this.$__removeFromParent(), this.$__remove(e3);
        }, c.prototype.populate = function() {
          throw new Error('Mongoose does not support calling populate() on nested docs. Instead of `doc.nested.populate("path")`, use `doc.populate("nested.path")`');
        }, c.prototype.inspect = function() {
          return this.toObject({ transform: false, virtuals: false, flattenDecimals: false });
        }, a.inspect.custom && (c.prototype[a.inspect.custom] = c.prototype.inspect);
      }, 6872: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW;
        function o(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return i(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? i(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function i(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function s(t3) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, s(t3);
        }
        var a, u = r2(2068), c = r2(3564), f = r2(6079), l = r2(4034), p = r2(1973), h = r2(1490), y = r2(5721), d = r2(7339), m = r2(1255), v = r2(1563), b = r2(6749), g = r2(6584), _ = r2(8486), w = r2(4913), O = r2(2862), $ = r2(3636).trustedSymbol;
        function S(t3) {
          if (Array.isArray(t3.populate)) {
            var r3 = [];
            t3.populate.forEach(function(t4) {
              if (/[\s]/.test(t4.path)) {
                var n3 = Object.assign({}, t4);
                n3.path.split(" ").forEach(function(t5) {
                  n3.path = t5, r3.push(e2.populate(n3)[0]);
                });
              } else
                r3.push(e2.populate(t4)[0]);
            }), t3.populate = e2.populate(r3);
          } else
            null != t3.populate && "object" === s(t3.populate) && (t3.populate = e2.populate(t3.populate));
          var n2 = [], i2 = t3.path.split(" ");
          null != t3.options && (t3.options = e2.clone(t3.options));
          var a2, u2 = o(i2);
          try {
            for (u2.s(); !(a2 = u2.n()).done; ) {
              var c2 = a2.value;
              n2.push(new l(Object.assign({}, t3, { path: c2 })));
            }
          } catch (t4) {
            u2.e(t4);
          } finally {
            u2.f();
          }
          return n2;
        }
        e2.specialProperties = O, e2.isMongooseArray = d.isMongooseArray, e2.isMongooseDocumentArray = m.isMongooseDocumentArray, e2.registerMongooseArray = d.registerMongooseArray, e2.registerMongooseDocumentArray = m.registerMongooseDocumentArray, e2.toCollectionName = function(t3, e3) {
          return "system.profile" === t3 || "system.indexes" === t3 ? t3 : "function" == typeof e3 ? e3(t3) : t3;
        }, e2.deepEqual = function t3(r3, o2) {
          if (r3 === o2)
            return true;
          if ("object" !== s(r3) || "object" !== s(o2))
            return r3 === o2;
          if (r3 instanceof Date && o2 instanceof Date)
            return r3.getTime() === o2.getTime();
          if (v(r3, "ObjectID") && v(o2, "ObjectID") || v(r3, "Decimal128") && v(o2, "Decimal128"))
            return r3.toString() === o2.toString();
          if (r3 instanceof RegExp && o2 instanceof RegExp)
            return r3.source === o2.source && r3.ignoreCase === o2.ignoreCase && r3.multiline === o2.multiline && r3.global === o2.global && r3.dotAll === o2.dotAll && r3.unicode === o2.unicode && r3.sticky === o2.sticky && r3.hasIndices === o2.hasIndices;
          if (null == r3 || null == o2)
            return false;
          if (r3.prototype !== o2.prototype)
            return false;
          if (r3 instanceof Map || o2 instanceof Map)
            return r3 instanceof Map && o2 instanceof Map && t3(Array.from(r3.keys()), Array.from(o2.keys())) && t3(Array.from(r3.values()), Array.from(o2.values()));
          if (r3 instanceof Number && o2 instanceof Number)
            return r3.valueOf() === o2.valueOf();
          if (n.isBuffer(r3))
            return e2.buffer.areEqual(r3, o2);
          if (Array.isArray(r3) || Array.isArray(o2)) {
            if (!Array.isArray(r3) || !Array.isArray(o2))
              return false;
            var i2 = r3.length;
            if (i2 !== o2.length)
              return false;
            for (var a2 = 0; a2 < i2; ++a2)
              if (!t3(r3[a2], o2[a2]))
                return false;
            return true;
          }
          null != r3.$__ ? r3 = r3._doc : g(r3) && (r3 = r3.toObject()), null != o2.$__ ? o2 = o2._doc : g(o2) && (o2 = o2.toObject());
          var u2 = Object.keys(r3), c2 = Object.keys(o2), f2 = u2.length;
          if (f2 !== c2.length)
            return false;
          for (var l2 = f2 - 1; l2 >= 0; l2--)
            if (u2[l2] !== c2[l2])
              return false;
          for (var p2 = 0, h2 = u2; p2 < h2.length; p2++) {
            var y2 = h2[p2];
            if (!t3(r3[y2], o2[y2]))
              return false;
          }
          return true;
        }, e2.last = function(t3) {
          if (t3.length > 0)
            return t3[t3.length - 1];
        }, e2.clone = p, e2.promiseOrCallback = _, e2.cloneArrays = function(t3) {
          return Array.isArray(t3) ? t3.map(function(t4) {
            return e2.cloneArrays(t4);
          }) : t3;
        }, e2.omit = function(t3, e3) {
          if (null == e3)
            return Object.assign({}, t3);
          Array.isArray(e3) || (e3 = [e3]);
          var r3, n2 = Object.assign({}, t3), i2 = o(e3);
          try {
            for (i2.s(); !(r3 = i2.n()).done; )
              delete n2[r3.value];
          } catch (t4) {
            i2.e(t4);
          } finally {
            i2.f();
          }
          return n2;
        }, e2.options = function(t3, e3) {
          var r3, n2 = Object.keys(t3), o2 = n2.length;
          for (e3 = e3 || {}; o2--; )
            (r3 = n2[o2]) in e3 || (e3[r3] = t3[r3]);
          return e3;
        }, e2.merge = function t3(r3, n2, o2, i2) {
          o2 = o2 || {};
          var s2, a2 = Object.keys(n2), u2 = 0, c2 = a2.length;
          n2[$] && (r3[$] = n2[$]), i2 = i2 || "";
          for (var l2 = o2.omitNested || {}; u2 < c2; )
            if (s2 = a2[u2++], !(o2.omit && o2.omit[s2] || l2[i2] || O.has(s2)))
              if (null == r3[s2])
                r3[s2] = n2[s2];
              else if (e2.isObject(n2[s2])) {
                if (e2.isObject(r3[s2]) || (r3[s2] = {}), null != n2[s2]) {
                  if (o2.isDiscriminatorSchemaMerge && n2[s2].$isSingleNested && r3[s2].$isMongooseDocumentArray || n2[s2].$isMongooseDocumentArray && r3[s2].$isSingleNested)
                    continue;
                  if (n2[s2].instanceOfSchema) {
                    r3[s2].instanceOfSchema ? w(r3[s2], n2[s2].clone(), o2.isDiscriminatorSchemaMerge) : r3[s2] = n2[s2].clone();
                    continue;
                  }
                  if (v(n2[s2], "ObjectID")) {
                    r3[s2] = new f(n2[s2]);
                    continue;
                  }
                }
                t3(r3[s2], n2[s2], o2, i2 ? i2 + "." + s2 : s2);
              } else
                o2.overwrite && (r3[s2] = n2[s2]);
        }, e2.toObject = function t3(n2) {
          var i2;
          if (a || (a = r2(8727)), null == n2)
            return n2;
          if (n2 instanceof a)
            return n2.toObject();
          if (Array.isArray(n2)) {
            i2 = [];
            var s2, u2 = o(n2);
            try {
              for (u2.s(); !(s2 = u2.n()).done; ) {
                var c2 = s2.value;
                i2.push(t3(c2));
              }
            } catch (t4) {
              u2.e(t4);
            } finally {
              u2.f();
            }
            return i2;
          }
          if (e2.isPOJO(n2)) {
            i2 = {}, n2[$] && (i2[$] = n2[$]);
            for (var f2 = 0, l2 = Object.keys(n2); f2 < l2.length; f2++) {
              var p2 = l2[f2];
              O.has(p2) || (i2[p2] = t3(n2[p2]));
            }
            return i2;
          }
          return n2;
        }, e2.isObject = y, e2.isPOJO = function(t3) {
          if (null == t3 || "object" !== s(t3))
            return false;
          var e3 = Object.getPrototypeOf(t3);
          return !e3 || "Object" === e3.constructor.name;
        }, e2.isNonBuiltinObject = function(t3) {
          return "object" === s(t3) && !e2.isNativeObject(t3) && !e2.isMongooseType(t3) && null != t3;
        }, e2.isNativeObject = function(t3) {
          return Array.isArray(t3) || t3 instanceof Date || t3 instanceof Boolean || t3 instanceof Number || t3 instanceof String;
        }, e2.isEmptyObject = function(t3) {
          return null != t3 && "object" === s(t3) && 0 === Object.keys(t3).length;
        }, e2.hasKey = function(t3, r3) {
          for (var n2 = 0, o2 = Object.keys(t3); n2 < o2.length; n2++) {
            var i2 = o2[n2];
            if (i2 === r3)
              return true;
            if (e2.isPOJO(t3[i2]) && e2.hasKey(t3[i2], r3))
              return true;
          }
          return false;
        }, e2.tick = function(t3) {
          if ("function" == typeof t3)
            return function() {
              try {
                t3.apply(this, arguments);
              } catch (t4) {
                h(function() {
                  throw t4;
                });
              }
            };
        }, e2.isMongooseType = function(t3) {
          return v(t3, "ObjectID") || v(t3, "Decimal128") || t3 instanceof n;
        }, e2.isMongooseObject = g, e2.expires = function(t3) {
          t3 && "Object" === t3.constructor.name && "expires" in t3 && (t3.expireAfterSeconds = "string" != typeof t3.expires ? t3.expires : Math.round(u(t3.expires) / 1e3), delete t3.expires);
        }, e2.populate = function(t3, r3, n2, o2, i2, a2, u2, c2) {
          var f2 = null;
          if (1 === arguments.length) {
            if (t3 instanceof l)
              return t3._docs = [], t3._childDocs = [], [t3];
            if (Array.isArray(t3)) {
              var p2 = h2(t3);
              return p2.map(function(t4) {
                return e2.populate(t4)[0];
              });
            }
            f2 = e2.isObject(t3) ? Object.assign({}, t3) : { path: t3 };
          } else
            f2 = "object" === s(n2) ? { path: t3, select: r3, match: n2, options: o2 } : { path: t3, select: r3, model: n2, match: o2, options: i2, populate: a2, justOne: u2, count: c2 };
          if ("string" != typeof f2.path)
            throw new TypeError("utils.populate: invalid path. Expected string. Got typeof `" + s(t3) + "`");
          return S(f2);
          function h2(t4) {
            var e3 = [];
            return t4.forEach(function(t5) {
              /[\s]/.test(t5.path) ? t5.path.split(" ").forEach(function(r4) {
                var n3 = Object.assign({}, t5);
                n3.path = r4, e3.push(n3);
              }) : e3.push(t5);
            }), e3;
          }
        }, e2.getValue = function(t3, e3, r3) {
          return c.get(t3, e3, "_doc", r3);
        }, e2.setValue = function(t3, e3, r3, n2, o2) {
          c.set(t3, e3, r3, "_doc", n2, o2);
        }, e2.object = {}, e2.object.vals = function(t3) {
          for (var e3 = Object.keys(t3), r3 = e3.length, n2 = []; r3--; )
            n2.push(t3[e3[r3]]);
          return n2;
        }, e2.object.shallowCopy = e2.options;
        var j = Object.prototype.hasOwnProperty;
        e2.object.hasOwnProperty = function(t3, e3) {
          return j.call(t3, e3);
        }, e2.isNullOrUndefined = function(t3) {
          return null == t3;
        }, e2.array = {}, e2.array.flatten = function t3(e3, r3, n2) {
          return n2 || (n2 = []), e3.forEach(function(e4) {
            Array.isArray(e4) ? t3(e4, r3, n2) : r3 && !r3(e4) || n2.push(e4);
          }), n2;
        };
        var A = Object.prototype.hasOwnProperty;
        e2.hasUserDefinedProperty = function(t3, r3) {
          if (null == t3)
            return false;
          if (Array.isArray(r3)) {
            var n2, i2 = o(r3);
            try {
              for (i2.s(); !(n2 = i2.n()).done; ) {
                var a2 = n2.value;
                if (e2.hasUserDefinedProperty(t3, a2))
                  return true;
              }
            } catch (t4) {
              i2.e(t4);
            } finally {
              i2.f();
            }
            return false;
          }
          if (A.call(t3, r3))
            return true;
          if ("object" === s(t3) && r3 in t3) {
            var u2 = t3[r3];
            return u2 !== Object.prototype[r3] && u2 !== Array.prototype[r3];
          }
          return false;
        };
        var P = Math.pow(2, 32) - 1;
        e2.isArrayIndex = function(t3) {
          return "number" == typeof t3 ? t3 >= 0 && t3 <= P : "string" == typeof t3 && !!/^\d+$/.test(t3) && (t3 = +t3) >= 0 && t3 <= P;
        }, e2.array.unique = function(t3) {
          var e3, r3 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), i2 = [], s2 = o(t3);
          try {
            for (s2.s(); !(e3 = s2.n()).done; ) {
              var a2 = e3.value;
              if ("number" == typeof a2 || "string" == typeof a2 || null == a2) {
                if (r3.has(a2))
                  continue;
                i2.push(a2), r3.add(a2);
              } else if (v(a2, "ObjectID")) {
                if (n2.has(a2.toString()))
                  continue;
                i2.push(a2), n2.add(a2.toString());
              } else
                i2.push(a2);
            }
          } catch (t4) {
            s2.e(t4);
          } finally {
            s2.f();
          }
          return i2;
        }, e2.buffer = {}, e2.buffer.areEqual = function(t3, e3) {
          if (!n.isBuffer(t3))
            return false;
          if (!n.isBuffer(e3))
            return false;
          if (t3.length !== e3.length)
            return false;
          for (var r3 = 0, o2 = t3.length; r3 < o2; ++r3)
            if (t3[r3] !== e3[r3])
              return false;
          return true;
        }, e2.getFunctionName = b, e2.decorate = function(t3, e3) {
          for (var r3 in e3)
            O.has(r3) || (t3[r3] = e3[r3]);
        }, e2.mergeClone = function(t3, r3) {
          g(r3) && (r3 = r3.toObject({ transform: false, virtuals: false, depopulate: true, getters: false, flattenDecimals: false }));
          for (var o2, i2 = Object.keys(r3), s2 = i2.length, a2 = 0; a2 < s2; )
            if (o2 = i2[a2++], !O.has(o2))
              if (void 0 === t3[o2])
                t3[o2] = e2.clone(r3[o2], { transform: false, virtuals: false, depopulate: true, getters: false, flattenDecimals: false });
              else {
                var u2 = r3[o2];
                if (null == u2 || !u2.valueOf || u2 instanceof Date || (u2 = u2.valueOf()), e2.isObject(u2)) {
                  var c2 = u2;
                  g(u2) && !u2.isMongooseBuffer && (c2 = c2.toObject({ transform: false, virtuals: false, depopulate: true, getters: false, flattenDecimals: false })), u2.isMongooseBuffer && (c2 = n.from(c2)), e2.mergeClone(t3[o2], c2);
                } else
                  t3[o2] = e2.clone(u2, { flattenDecimals: false });
              }
        }, e2.each = function(t3, e3) {
          var r3, n2 = o(t3);
          try {
            for (n2.s(); !(r3 = n2.n()).done; )
              e3(r3.value);
          } catch (t4) {
            n2.e(t4);
          } finally {
            n2.f();
          }
        }, e2.getOption = function(t3) {
          var e3, r3 = Array.prototype.slice.call(arguments, 1), n2 = o(r3);
          try {
            for (n2.s(); !(e3 = n2.n()).done; ) {
              var i2 = e3.value;
              if (null != i2 && null != i2[t3])
                return i2[t3];
            }
          } catch (t4) {
            n2.e(t4);
          } finally {
            n2.f();
          }
          return null;
        }, e2.noop = function() {
        }, e2.errorToPOJO = function(t3) {
          if (!(t3 instanceof Error))
            throw new Error("`error` must be `instanceof Error`.");
          var e3, r3 = {}, n2 = o(Object.getOwnPropertyNames(t3));
          try {
            for (n2.s(); !(e3 = n2.n()).done; ) {
              var i2 = e3.value;
              r3[i2] = t3[i2];
            }
          } catch (t4) {
            n2.e(t4);
          } finally {
            n2.f();
          }
          return r3;
        }, e2.warn = function(t3) {
          return { env: {} }.emitWarning(t3, { code: "MONGOOSE" });
        }, e2.injectTimestampsOption = function(t3, e3) {
          null != e3 && (t3.timestamps = e3);
        };
      }, 459: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = function(t4, e4) {
              if (t4) {
                if ("string" == typeof t4)
                  return o(t4, e4);
                var r4 = Object.prototype.toString.call(t4).slice(8, -1);
                return "Object" === r4 && t4.constructor && (r4 = t4.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t4) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t4, e4) : void 0;
              }
            }(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var n2 = 0, i2 = function() {
              };
              return { s: i2, n: function() {
                return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
              }, e: function(t4) {
                throw t4;
              }, f: i2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a = true, u = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a = t4.done, t4;
          }, e: function(t4) {
            u = true, s2 = t4;
          }, f: function() {
            try {
              a || null == r3.return || r3.return();
            } finally {
              if (u)
                throw s2;
            }
          } };
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        var i = r2(6872);
        function s(t3, e3) {
          this.path = e3, this.getters = [], this.setters = [], this.options = Object.assign({}, t3);
        }
        s.prototype._applyDefaultGetters = function() {
          if (!(this.getters.length > 0 || this.setters.length > 0)) {
            var t3 = "$" + this.path;
            this.getters.push(function() {
              return this.$locals[t3];
            }), this.setters.push(function(e3) {
              this.$locals[t3] = e3;
            });
          }
        }, s.prototype.clone = function() {
          var t3 = new s(this.options, this.path);
          return t3.getters = [].concat(this.getters), t3.setters = [].concat(this.setters), t3;
        }, s.prototype.get = function(t3) {
          return this.getters.push(t3), this;
        }, s.prototype.set = function(t3) {
          return this.setters.push(t3), this;
        }, s.prototype.applyGetters = function(t3, e3) {
          i.hasUserDefinedProperty(this.options, ["ref", "refPath"]) && e3.$$populatedVirtuals && e3.$$populatedVirtuals.hasOwnProperty(this.path) && (t3 = e3.$$populatedVirtuals[this.path]);
          var r3, o2 = t3, s2 = n(this.getters);
          try {
            for (s2.s(); !(r3 = s2.n()).done; )
              o2 = r3.value.call(e3, o2, this, e3);
          } catch (t4) {
            s2.e(t4);
          } finally {
            s2.f();
          }
          return o2;
        }, s.prototype.applySetters = function(t3, e3) {
          var r3, o2 = t3, i2 = n(this.setters);
          try {
            for (i2.s(); !(r3 = i2.n()).done; )
              o2 = r3.value.call(e3, o2, this, e3);
          } catch (t4) {
            i2.e(t4);
          } finally {
            i2.f();
          }
          return o2;
        }, t2.exports = s;
      }, 9373: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t4) {
            return n(t4);
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : n(t4);
          }, o(t3);
        }
        var i, s, a = r2(9978).codes, u = a.ERR_AMBIGUOUS_ARGUMENT, c = a.ERR_INVALID_ARG_TYPE, f = a.ERR_INVALID_ARG_VALUE, l = a.ERR_INVALID_RETURN_VALUE, p = a.ERR_MISSING_ARGS, h = r2(1935), y = r2(8751).inspect, d = r2(8751).types, m = d.isPromise, v = d.isRegExp, b = Object.assign ? Object.assign : r2(8028).assign, g = Object.is ? Object.is : r2(4710);
        function _() {
          var t3 = r2(9015);
          i = t3.isDeepEqual, s = t3.isDeepStrictEqual;
        }
        /* @__PURE__ */ new Map();
        var w = false, O = t2.exports = A, $ = {};
        function S(t3) {
          if (t3.message instanceof Error)
            throw t3.message;
          throw new h(t3);
        }
        function j(t3, e3, r3, n2) {
          if (!r3) {
            var o2 = false;
            if (0 === e3)
              o2 = true, n2 = "No value argument passed to `assert.ok()`";
            else if (n2 instanceof Error)
              throw n2;
            var i2 = new h({ actual: r3, expected: true, message: n2, operator: "==", stackStartFn: t3 });
            throw i2.generatedMessage = o2, i2;
          }
        }
        function A() {
          for (var t3 = arguments.length, e3 = new Array(t3), r3 = 0; r3 < t3; r3++)
            e3[r3] = arguments[r3];
          j.apply(void 0, [A, e3.length].concat(e3));
        }
        O.fail = function t3(e3, r3, n2, o2, i2) {
          var s2, a2 = arguments.length;
          if (0 === a2)
            s2 = "Failed";
          else if (1 === a2)
            n2 = e3, e3 = void 0;
          else {
            if (false === w) {
              w = true;
              var u2 = { env: {} }.emitWarning ? { env: {} }.emitWarning : console.warn.bind(console);
              u2("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
            }
            2 === a2 && (o2 = "!=");
          }
          if (n2 instanceof Error)
            throw n2;
          var c2 = { actual: e3, expected: r3, operator: void 0 === o2 ? "fail" : o2, stackStartFn: i2 || t3 };
          void 0 !== n2 && (c2.message = n2);
          var f2 = new h(c2);
          throw s2 && (f2.message = s2, f2.generatedMessage = true), f2;
        }, O.AssertionError = h, O.ok = A, O.equal = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          e3 != r3 && S({ actual: e3, expected: r3, message: n2, operator: "==", stackStartFn: t3 });
        }, O.notEqual = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          e3 == r3 && S({ actual: e3, expected: r3, message: n2, operator: "!=", stackStartFn: t3 });
        }, O.deepEqual = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          void 0 === i && _(), i(e3, r3) || S({ actual: e3, expected: r3, message: n2, operator: "deepEqual", stackStartFn: t3 });
        }, O.notDeepEqual = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          void 0 === i && _(), i(e3, r3) && S({ actual: e3, expected: r3, message: n2, operator: "notDeepEqual", stackStartFn: t3 });
        }, O.deepStrictEqual = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          void 0 === i && _(), s(e3, r3) || S({ actual: e3, expected: r3, message: n2, operator: "deepStrictEqual", stackStartFn: t3 });
        }, O.notDeepStrictEqual = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          void 0 === i && _(), s(e3, r3) && S({ actual: e3, expected: r3, message: n2, operator: "notDeepStrictEqual", stackStartFn: t3 });
        }, O.strictEqual = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          g(e3, r3) || S({ actual: e3, expected: r3, message: n2, operator: "strictEqual", stackStartFn: t3 });
        }, O.notStrictEqual = function t3(e3, r3, n2) {
          if (arguments.length < 2)
            throw new p("actual", "expected");
          g(e3, r3) && S({ actual: e3, expected: r3, message: n2, operator: "notStrictEqual", stackStartFn: t3 });
        };
        var P = function t3(e3, r3, n2) {
          var o2 = this;
          !function(t4, e4) {
            if (!(t4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), r3.forEach(function(t4) {
            t4 in e3 && (void 0 !== n2 && "string" == typeof n2[t4] && v(e3[t4]) && e3[t4].test(n2[t4]) ? o2[t4] = n2[t4] : o2[t4] = e3[t4]);
          });
        };
        function E(t3, e3, r3, n2, o2, i2) {
          if (!(r3 in t3) || !s(t3[r3], e3[r3])) {
            if (!n2) {
              var a2 = new P(t3, o2), u2 = new P(e3, o2, t3), c2 = new h({ actual: a2, expected: u2, operator: "deepStrictEqual", stackStartFn: i2 });
              throw c2.actual = t3, c2.expected = e3, c2.operator = i2.name, c2;
            }
            S({ actual: t3, expected: e3, message: n2, operator: i2.name, stackStartFn: i2 });
          }
        }
        function x(t3, e3, r3, n2) {
          if ("function" != typeof e3) {
            if (v(e3))
              return e3.test(t3);
            if (2 === arguments.length)
              throw new c("expected", ["Function", "RegExp"], e3);
            if ("object" !== o(t3) || null === t3) {
              var s2 = new h({ actual: t3, expected: e3, message: r3, operator: "deepStrictEqual", stackStartFn: n2 });
              throw s2.operator = n2.name, s2;
            }
            var a2 = Object.keys(e3);
            if (e3 instanceof Error)
              a2.push("name", "message");
            else if (0 === a2.length)
              throw new f("error", e3, "may not be an empty object");
            return void 0 === i && _(), a2.forEach(function(o2) {
              "string" == typeof t3[o2] && v(e3[o2]) && e3[o2].test(t3[o2]) || E(t3, e3, o2, r3, a2, n2);
            }), true;
          }
          return void 0 !== e3.prototype && t3 instanceof e3 || !Error.isPrototypeOf(e3) && true === e3.call({}, t3);
        }
        function k(t3) {
          if ("function" != typeof t3)
            throw new c("fn", "Function", t3);
          try {
            t3();
          } catch (t4) {
            return t4;
          }
          return $;
        }
        function M(t3) {
          return m(t3) || null !== t3 && "object" === o(t3) && "function" == typeof t3.then && "function" == typeof t3.catch;
        }
        function T(t3) {
          return Promise.resolve().then(function() {
            var e3;
            if ("function" == typeof t3) {
              if (!M(e3 = t3()))
                throw new l("instance of Promise", "promiseFn", e3);
            } else {
              if (!M(t3))
                throw new c("promiseFn", ["Function", "Promise"], t3);
              e3 = t3;
            }
            return Promise.resolve().then(function() {
              return e3;
            }).then(function() {
              return $;
            }).catch(function(t4) {
              return t4;
            });
          });
        }
        function N(t3, e3, r3, n2) {
          if ("string" == typeof r3) {
            if (4 === arguments.length)
              throw new c("error", ["Object", "Error", "Function", "RegExp"], r3);
            if ("object" === o(e3) && null !== e3) {
              if (e3.message === r3)
                throw new u("error/message", 'The error message "'.concat(e3.message, '" is identical to the message.'));
            } else if (e3 === r3)
              throw new u("error/message", 'The error "'.concat(e3, '" is identical to the message.'));
            n2 = r3, r3 = void 0;
          } else if (null != r3 && "object" !== o(r3) && "function" != typeof r3)
            throw new c("error", ["Object", "Error", "Function", "RegExp"], r3);
          if (e3 === $) {
            var i2 = "";
            r3 && r3.name && (i2 += " (".concat(r3.name, ")")), i2 += n2 ? ": ".concat(n2) : ".";
            var s2 = "rejects" === t3.name ? "rejection" : "exception";
            S({ actual: void 0, expected: r3, operator: t3.name, message: "Missing expected ".concat(s2).concat(i2), stackStartFn: t3 });
          }
          if (r3 && !x(e3, r3, n2, t3))
            throw e3;
        }
        function R(t3, e3, r3, n2) {
          if (e3 !== $) {
            if ("string" == typeof r3 && (n2 = r3, r3 = void 0), !r3 || x(e3, r3)) {
              var o2 = n2 ? ": ".concat(n2) : ".", i2 = "doesNotReject" === t3.name ? "rejection" : "exception";
              S({ actual: e3, expected: r3, operator: t3.name, message: "Got unwanted ".concat(i2).concat(o2, "\n") + 'Actual message: "'.concat(e3 && e3.message, '"'), stackStartFn: t3 });
            }
            throw e3;
          }
        }
        function I() {
          for (var t3 = arguments.length, e3 = new Array(t3), r3 = 0; r3 < t3; r3++)
            e3[r3] = arguments[r3];
          j.apply(void 0, [I, e3.length].concat(e3));
        }
        O.throws = function t3(e3) {
          for (var r3 = arguments.length, n2 = new Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
            n2[o2 - 1] = arguments[o2];
          N.apply(void 0, [t3, k(e3)].concat(n2));
        }, O.rejects = function t3(e3) {
          for (var r3 = arguments.length, n2 = new Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
            n2[o2 - 1] = arguments[o2];
          return T(e3).then(function(e4) {
            return N.apply(void 0, [t3, e4].concat(n2));
          });
        }, O.doesNotThrow = function t3(e3) {
          for (var r3 = arguments.length, n2 = new Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
            n2[o2 - 1] = arguments[o2];
          R.apply(void 0, [t3, k(e3)].concat(n2));
        }, O.doesNotReject = function t3(e3) {
          for (var r3 = arguments.length, n2 = new Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
            n2[o2 - 1] = arguments[o2];
          return T(e3).then(function(e4) {
            return R.apply(void 0, [t3, e4].concat(n2));
          });
        }, O.ifError = function t3(e3) {
          if (null != e3) {
            var r3 = "ifError got unwanted exception: ";
            "object" === o(e3) && "string" == typeof e3.message ? 0 === e3.message.length && e3.constructor ? r3 += e3.constructor.name : r3 += e3.message : r3 += y(e3);
            var n2 = new h({ actual: e3, expected: null, operator: "ifError", message: r3, stackStartFn: t3 }), i2 = e3.stack;
            if ("string" == typeof i2) {
              var s2 = i2.split("\n");
              s2.shift();
              for (var a2 = n2.stack.split("\n"), u2 = 0; u2 < s2.length; u2++) {
                var c2 = a2.indexOf(s2[u2]);
                if (-1 !== c2) {
                  a2 = a2.slice(0, c2);
                  break;
                }
              }
              n2.stack = "".concat(a2.join("\n"), "\n").concat(s2.join("\n"));
            }
            throw n2;
          }
        }, O.strict = b(I, O, { equal: O.strictEqual, deepEqual: O.deepStrictEqual, notEqual: O.notStrictEqual, notDeepEqual: O.notDeepStrictEqual }), O.strict.strict = O.strict;
      }, 1935: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        function i(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var n2 = e3[r3];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
          }
        }
        function s(t3, e3) {
          return !e3 || "object" !== h(e3) && "function" != typeof e3 ? a(t3) : e3;
        }
        function a(t3) {
          if (void 0 === t3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }
        function u(t3) {
          var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return u = function(t4) {
            if (null === t4 || (r3 = t4, -1 === Function.toString.call(r3).indexOf("[native code]")))
              return t4;
            var r3;
            if ("function" != typeof t4)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e3) {
              if (e3.has(t4))
                return e3.get(t4);
              e3.set(t4, n2);
            }
            function n2() {
              return f(t4, arguments, p(this).constructor);
            }
            return n2.prototype = Object.create(t4.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), l(n2, t4);
          }, u(t3);
        }
        function c() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }
        function f(t3, e3, r3) {
          return f = c() ? Reflect.construct : function(t4, e4, r4) {
            var n2 = [null];
            n2.push.apply(n2, e4);
            var o2 = new (Function.bind.apply(t4, n2))();
            return r4 && l(o2, r4.prototype), o2;
          }, f.apply(null, arguments);
        }
        function l(t3, e3) {
          return l = Object.setPrototypeOf || function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, l(t3, e3);
        }
        function p(t3) {
          return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, p(t3);
        }
        function h(t3) {
          return h = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t4) {
            return n(t4);
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : n(t4);
          }, h(t3);
        }
        var y = r2(8751).inspect, d = r2(9978).codes.ERR_INVALID_ARG_TYPE;
        function m(t3, e3, r3) {
          return (void 0 === r3 || r3 > t3.length) && (r3 = t3.length), t3.substring(r3 - e3.length, r3) === e3;
        }
        var v = "", b = "", g = "", _ = "", w = { deepStrictEqual: "Expected values to be strictly deep-equal:", strictEqual: "Expected values to be strictly equal:", strictEqualObject: 'Expected "actual" to be reference-equal to "expected":', deepEqual: "Expected values to be loosely deep-equal:", equal: "Expected values to be loosely equal:", notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:', notStrictEqual: 'Expected "actual" to be strictly unequal to:', notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":', notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:', notEqual: 'Expected "actual" to be loosely unequal to:', notIdentical: "Values identical but not reference-equal:" };
        function O(t3) {
          var e3 = Object.keys(t3), r3 = Object.create(Object.getPrototypeOf(t3));
          return e3.forEach(function(e4) {
            r3[e4] = t3[e4];
          }), Object.defineProperty(r3, "message", { value: t3.message }), r3;
        }
        function $(t3) {
          return y(t3, { compact: false, customInspect: false, depth: 1e3, maxArrayLength: 1 / 0, showHidden: false, breakLength: 1 / 0, showProxy: false, sorted: true, getters: true });
        }
        var S = function(t3) {
          function e3(t4) {
            var r4;
            if (function(t5, e4) {
              if (!(t5 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, e3), "object" !== h(t4) || null === t4)
              throw new d("options", "Object", t4);
            var n3 = t4.message, o2 = t4.operator, i2 = t4.stackStartFn, u2 = t4.actual, c2 = t4.expected, f2 = Error.stackTraceLimit;
            if (Error.stackTraceLimit = 0, null != n3)
              r4 = s(this, p(e3).call(this, String(n3)));
            else if ({ env: {} }.stderr && { env: {} }.stderr.isTTY && ({ env: {} }.stderr && { env: {} }.stderr.getColorDepth && 1 !== { env: {} }.stderr.getColorDepth() ? (v = "\x1B[34m", b = "\x1B[32m", _ = "\x1B[39m", g = "\x1B[31m") : (v = "", b = "", _ = "", g = "")), "object" === h(u2) && null !== u2 && "object" === h(c2) && null !== c2 && "stack" in u2 && u2 instanceof Error && "stack" in c2 && c2 instanceof Error && (u2 = O(u2), c2 = O(c2)), "deepStrictEqual" === o2 || "strictEqual" === o2)
              r4 = s(this, p(e3).call(this, function(t5, e4, r5) {
                var n4 = "", o3 = "", i3 = 0, s2 = "", a2 = false, u3 = $(t5), c3 = u3.split("\n"), f3 = $(e4).split("\n"), l3 = 0, p2 = "";
                if ("strictEqual" === r5 && "object" === h(t5) && "object" === h(e4) && null !== t5 && null !== e4 && (r5 = "strictEqualObject"), 1 === c3.length && 1 === f3.length && c3[0] !== f3[0]) {
                  var y3 = c3[0].length + f3[0].length;
                  if (y3 <= 10) {
                    if (!("object" === h(t5) && null !== t5 || "object" === h(e4) && null !== e4 || 0 === t5 && 0 === e4))
                      return "".concat(w[r5], "\n\n") + "".concat(c3[0], " !== ").concat(f3[0], "\n");
                  } else if ("strictEqualObject" !== r5 && y3 < ({ env: {} }.stderr && { env: {} }.stderr.isTTY ? { env: {} }.stderr.columns : 80)) {
                    for (; c3[0][l3] === f3[0][l3]; )
                      l3++;
                    l3 > 2 && (p2 = "\n  ".concat(function(t6, e5) {
                      if (e5 = Math.floor(e5), 0 == t6.length || 0 == e5)
                        return "";
                      var r6 = t6.length * e5;
                      for (e5 = Math.floor(Math.log(e5) / Math.log(2)); e5; )
                        t6 += t6, e5--;
                      return t6 + t6.substring(0, r6 - t6.length);
                    }(" ", l3), "^"), l3 = 0);
                  }
                }
                for (var d2 = c3[c3.length - 1], O2 = f3[f3.length - 1]; d2 === O2 && (l3++ < 2 ? s2 = "\n  ".concat(d2).concat(s2) : n4 = d2, c3.pop(), f3.pop(), 0 !== c3.length && 0 !== f3.length); )
                  d2 = c3[c3.length - 1], O2 = f3[f3.length - 1];
                var S3 = Math.max(c3.length, f3.length);
                if (0 === S3) {
                  var j2 = u3.split("\n");
                  if (j2.length > 30)
                    for (j2[26] = "".concat(v, "...").concat(_); j2.length > 27; )
                      j2.pop();
                  return "".concat(w.notIdentical, "\n\n").concat(j2.join("\n"), "\n");
                }
                l3 > 3 && (s2 = "\n".concat(v, "...").concat(_).concat(s2), a2 = true), "" !== n4 && (s2 = "\n  ".concat(n4).concat(s2), n4 = "");
                var A2 = 0, P = w[r5] + "\n".concat(b, "+ actual").concat(_, " ").concat(g, "- expected").concat(_), E = " ".concat(v, "...").concat(_, " Lines skipped");
                for (l3 = 0; l3 < S3; l3++) {
                  var x = l3 - i3;
                  if (c3.length < l3 + 1)
                    x > 1 && l3 > 2 && (x > 4 ? (o3 += "\n".concat(v, "...").concat(_), a2 = true) : x > 3 && (o3 += "\n  ".concat(f3[l3 - 2]), A2++), o3 += "\n  ".concat(f3[l3 - 1]), A2++), i3 = l3, n4 += "\n".concat(g, "-").concat(_, " ").concat(f3[l3]), A2++;
                  else if (f3.length < l3 + 1)
                    x > 1 && l3 > 2 && (x > 4 ? (o3 += "\n".concat(v, "...").concat(_), a2 = true) : x > 3 && (o3 += "\n  ".concat(c3[l3 - 2]), A2++), o3 += "\n  ".concat(c3[l3 - 1]), A2++), i3 = l3, o3 += "\n".concat(b, "+").concat(_, " ").concat(c3[l3]), A2++;
                  else {
                    var k = f3[l3], M = c3[l3], T = M !== k && (!m(M, ",") || M.slice(0, -1) !== k);
                    T && m(k, ",") && k.slice(0, -1) === M && (T = false, M += ","), T ? (x > 1 && l3 > 2 && (x > 4 ? (o3 += "\n".concat(v, "...").concat(_), a2 = true) : x > 3 && (o3 += "\n  ".concat(c3[l3 - 2]), A2++), o3 += "\n  ".concat(c3[l3 - 1]), A2++), i3 = l3, o3 += "\n".concat(b, "+").concat(_, " ").concat(M), n4 += "\n".concat(g, "-").concat(_, " ").concat(k), A2 += 2) : (o3 += n4, n4 = "", 1 !== x && 0 !== l3 || (o3 += "\n  ".concat(M), A2++));
                  }
                  if (A2 > 20 && l3 < S3 - 2)
                    return "".concat(P).concat(E, "\n").concat(o3, "\n").concat(v, "...").concat(_).concat(n4, "\n") + "".concat(v, "...").concat(_);
                }
                return "".concat(P).concat(a2 ? E : "", "\n").concat(o3).concat(n4).concat(s2).concat(p2);
              }(u2, c2, o2)));
            else if ("notDeepStrictEqual" === o2 || "notStrictEqual" === o2) {
              var l2 = w[o2], y2 = $(u2).split("\n");
              if ("notStrictEqual" === o2 && "object" === h(u2) && null !== u2 && (l2 = w.notStrictEqualObject), y2.length > 30)
                for (y2[26] = "".concat(v, "...").concat(_); y2.length > 27; )
                  y2.pop();
              r4 = 1 === y2.length ? s(this, p(e3).call(this, "".concat(l2, " ").concat(y2[0]))) : s(this, p(e3).call(this, "".concat(l2, "\n\n").concat(y2.join("\n"), "\n")));
            } else {
              var S2 = $(u2), j = "", A = w[o2];
              "notDeepEqual" === o2 || "notEqual" === o2 ? (S2 = "".concat(w[o2], "\n\n").concat(S2)).length > 1024 && (S2 = "".concat(S2.slice(0, 1021), "...")) : (j = "".concat($(c2)), S2.length > 512 && (S2 = "".concat(S2.slice(0, 509), "...")), j.length > 512 && (j = "".concat(j.slice(0, 509), "...")), "deepEqual" === o2 || "equal" === o2 ? S2 = "".concat(A, "\n\n").concat(S2, "\n\nshould equal\n\n") : j = " ".concat(o2, " ").concat(j)), r4 = s(this, p(e3).call(this, "".concat(S2).concat(j)));
            }
            return Error.stackTraceLimit = f2, r4.generatedMessage = !n3, Object.defineProperty(a(r4), "name", { value: "AssertionError [ERR_ASSERTION]", enumerable: false, writable: true, configurable: true }), r4.code = "ERR_ASSERTION", r4.actual = u2, r4.expected = c2, r4.operator = o2, Error.captureStackTrace && Error.captureStackTrace(a(r4), i2), r4.stack, r4.name = "AssertionError", s(r4);
          }
          var r3, n2;
          return function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && l(t4, e4);
          }(e3, t3), r3 = e3, n2 = [{ key: "toString", value: function() {
            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
          } }, { key: y.custom, value: function(t4, e4) {
            return y(this, function(t5) {
              for (var e5 = 1; e5 < arguments.length; e5++) {
                var r4 = null != arguments[e5] ? arguments[e5] : {}, n3 = Object.keys(r4);
                "function" == typeof Object.getOwnPropertySymbols && (n3 = n3.concat(Object.getOwnPropertySymbols(r4).filter(function(t6) {
                  return Object.getOwnPropertyDescriptor(r4, t6).enumerable;
                }))), n3.forEach(function(e6) {
                  o(t5, e6, r4[e6]);
                });
              }
              return t5;
            }({}, e4, { customInspect: false, depth: 0 }));
          } }], n2 && i(r3.prototype, n2), e3;
        }(u(Error));
        t2.exports = S;
      }, 9978: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t4) {
            return n(t4);
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : n(t4);
          }, o(t3);
        }
        function i(t3) {
          return i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, i(t3);
        }
        function s(t3, e3) {
          return s = Object.setPrototypeOf || function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, s(t3, e3);
        }
        var a, u, c = {};
        function f(t3, e3, r3) {
          r3 || (r3 = Error);
          var n2 = function(r4) {
            function n3(r5, s2, a2) {
              var u2;
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, n3), u2 = function(t4, e4) {
                return !e4 || "object" !== o(e4) && "function" != typeof e4 ? function(t5) {
                  if (void 0 === t5)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t5;
                }(t4) : e4;
              }(this, i(n3).call(this, function(t4, r6, n4) {
                return "string" == typeof e3 ? e3 : e3(t4, r6, n4);
              }(r5, s2, a2))), u2.code = t3, u2;
            }
            return function(t4, e4) {
              if ("function" != typeof e4 && null !== e4)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && s(t4, e4);
            }(n3, r4), n3;
          }(r3);
          c[t3] = n2;
        }
        function l(t3, e3) {
          if (Array.isArray(t3)) {
            var r3 = t3.length;
            return t3 = t3.map(function(t4) {
              return String(t4);
            }), r3 > 2 ? "one of ".concat(e3, " ").concat(t3.slice(0, r3 - 1).join(", "), ", or ") + t3[r3 - 1] : 2 === r3 ? "one of ".concat(e3, " ").concat(t3[0], " or ").concat(t3[1]) : "of ".concat(e3, " ").concat(t3[0]);
          }
          return "of ".concat(e3, " ").concat(String(t3));
        }
        f("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), f("ERR_INVALID_ARG_TYPE", function(t3, e3, n2) {
          var i2, s2, u2, c2, f2;
          if (void 0 === a && (a = r2(9373)), a("string" == typeof t3, "'name' must be a string"), "string" == typeof e3 && (s2 = "not ", e3.substr(0, s2.length) === s2) ? (i2 = "must not be", e3 = e3.replace(/^not /, "")) : i2 = "must be", function(t4, e4, r3) {
            return (void 0 === r3 || r3 > t4.length) && (r3 = t4.length), t4.substring(r3 - e4.length, r3) === e4;
          }(t3, " argument"))
            u2 = "The ".concat(t3, " ").concat(i2, " ").concat(l(e3, "type"));
          else {
            var p = ("number" != typeof f2 && (f2 = 0), f2 + ".".length > (c2 = t3).length || -1 === c2.indexOf(".", f2) ? "argument" : "property");
            u2 = 'The "'.concat(t3, '" ').concat(p, " ").concat(i2, " ").concat(l(e3, "type"));
          }
          return u2 + ". Received type ".concat(o(n2));
        }, TypeError), f("ERR_INVALID_ARG_VALUE", function(t3, e3) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
          void 0 === u && (u = r2(8751));
          var o2 = u.inspect(e3);
          return o2.length > 128 && (o2 = "".concat(o2.slice(0, 128), "...")), "The argument '".concat(t3, "' ").concat(n2, ". Received ").concat(o2);
        }, TypeError, RangeError), f("ERR_INVALID_RETURN_VALUE", function(t3, e3, r3) {
          var n2;
          return n2 = r3 && r3.constructor && r3.constructor.name ? "instance of ".concat(r3.constructor.name) : "type ".concat(o(r3)), "Expected ".concat(t3, ' to be returned from the "').concat(e3, '"') + " function but got ".concat(n2, ".");
        }, TypeError), f("ERR_MISSING_ARGS", function() {
          for (var t3 = arguments.length, e3 = new Array(t3), n2 = 0; n2 < t3; n2++)
            e3[n2] = arguments[n2];
          void 0 === a && (a = r2(9373)), a(e3.length > 0, "At least one arg needs to be specified");
          var o2 = "The ", i2 = e3.length;
          switch (e3 = e3.map(function(t4) {
            return '"'.concat(t4, '"');
          }), i2) {
            case 1:
              o2 += "".concat(e3[0], " argument");
              break;
            case 2:
              o2 += "".concat(e3[0], " and ").concat(e3[1], " arguments");
              break;
            default:
              o2 += e3.slice(0, i2 - 1).join(", "), o2 += ", and ".concat(e3[i2 - 1], " arguments");
          }
          return "".concat(o2, " must be specified");
        }, TypeError), t2.exports.codes = c;
      }, 9015: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          return function(t4) {
            if (Array.isArray(t4))
              return t4;
          }(t3) || function(t4, e4) {
            var r3 = [], n2 = true, o2 = false, i2 = void 0;
            try {
              for (var s2, a2 = t4[Symbol.iterator](); !(n2 = (s2 = a2.next()).done) && (r3.push(s2.value), !e4 || r3.length !== e4); n2 = true)
                ;
            } catch (t5) {
              o2 = true, i2 = t5;
            } finally {
              try {
                n2 || null == a2.return || a2.return();
              } finally {
                if (o2)
                  throw i2;
              }
            }
            return r3;
          }(t3, e3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }();
        }
        function i(t3) {
          return i = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t4) {
            return n(t4);
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : n(t4);
          }, i(t3);
        }
        var s = void 0 !== /a/g.flags, a = function(t3) {
          var e3 = [];
          return t3.forEach(function(t4) {
            return e3.push(t4);
          }), e3;
        }, u = function(t3) {
          var e3 = [];
          return t3.forEach(function(t4, r3) {
            return e3.push([r3, t4]);
          }), e3;
        }, c = Object.is ? Object.is : r2(4710), f = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
          return [];
        }, l = Number.isNaN ? Number.isNaN : r2(2191);
        function p(t3) {
          return t3.call.bind(t3);
        }
        var h = p(Object.prototype.hasOwnProperty), y = p(Object.prototype.propertyIsEnumerable), d = p(Object.prototype.toString), m = r2(8751).types, v = m.isAnyArrayBuffer, b = m.isArrayBufferView, g = m.isDate, _ = m.isMap, w = m.isRegExp, O = m.isSet, $ = m.isNativeError, S = m.isBoxedPrimitive, j = m.isNumberObject, A = m.isStringObject, P = m.isBooleanObject, E = m.isBigIntObject, x = m.isSymbolObject, k = m.isFloat32Array, M = m.isFloat64Array;
        function T(t3) {
          if (0 === t3.length || t3.length > 10)
            return true;
          for (var e3 = 0; e3 < t3.length; e3++) {
            var r3 = t3.charCodeAt(e3);
            if (r3 < 48 || r3 > 57)
              return true;
          }
          return 10 === t3.length && t3 >= Math.pow(2, 32);
        }
        function N(t3) {
          return Object.keys(t3).filter(T).concat(f(t3).filter(Object.prototype.propertyIsEnumerable.bind(t3)));
        }
        function R(t3, e3) {
          if (t3 === e3)
            return 0;
          for (var r3 = t3.length, n2 = e3.length, o2 = 0, i2 = Math.min(r3, n2); o2 < i2; ++o2)
            if (t3[o2] !== e3[o2]) {
              r3 = t3[o2], n2 = e3[o2];
              break;
            }
          return r3 < n2 ? -1 : n2 < r3 ? 1 : 0;
        }
        function I(t3, e3, r3, n2) {
          if (t3 === e3)
            return 0 !== t3 || !r3 || c(t3, e3);
          if (r3) {
            if ("object" !== i(t3))
              return "number" == typeof t3 && l(t3) && l(e3);
            if ("object" !== i(e3) || null === t3 || null === e3)
              return false;
            if (Object.getPrototypeOf(t3) !== Object.getPrototypeOf(e3))
              return false;
          } else {
            if (null === t3 || "object" !== i(t3))
              return (null === e3 || "object" !== i(e3)) && t3 == e3;
            if (null === e3 || "object" !== i(e3))
              return false;
          }
          var o2, a2, u2, f2, p2 = d(t3);
          if (p2 !== d(e3))
            return false;
          if (Array.isArray(t3)) {
            if (t3.length !== e3.length)
              return false;
            var h2 = N(t3), y2 = N(e3);
            return h2.length === y2.length && C(t3, e3, r3, n2, 1, h2);
          }
          if ("[object Object]" === p2 && (!_(t3) && _(e3) || !O(t3) && O(e3)))
            return false;
          if (g(t3)) {
            if (!g(e3) || Date.prototype.getTime.call(t3) !== Date.prototype.getTime.call(e3))
              return false;
          } else if (w(t3)) {
            if (!w(e3) || (u2 = t3, f2 = e3, !(s ? u2.source === f2.source && u2.flags === f2.flags : RegExp.prototype.toString.call(u2) === RegExp.prototype.toString.call(f2))))
              return false;
          } else if ($(t3) || t3 instanceof Error) {
            if (t3.message !== e3.message || t3.name !== e3.name)
              return false;
          } else {
            if (b(t3)) {
              if (r3 || !k(t3) && !M(t3)) {
                if (!function(t4, e4) {
                  return t4.byteLength === e4.byteLength && 0 === R(new Uint8Array(t4.buffer, t4.byteOffset, t4.byteLength), new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength));
                }(t3, e3))
                  return false;
              } else if (!function(t4, e4) {
                if (t4.byteLength !== e4.byteLength)
                  return false;
                for (var r4 = 0; r4 < t4.byteLength; r4++)
                  if (t4[r4] !== e4[r4])
                    return false;
                return true;
              }(t3, e3))
                return false;
              var m2 = N(t3), T2 = N(e3);
              return m2.length === T2.length && C(t3, e3, r3, n2, 0, m2);
            }
            if (O(t3))
              return !(!O(e3) || t3.size !== e3.size) && C(t3, e3, r3, n2, 2);
            if (_(t3))
              return !(!_(e3) || t3.size !== e3.size) && C(t3, e3, r3, n2, 3);
            if (v(t3)) {
              if (a2 = e3, (o2 = t3).byteLength !== a2.byteLength || 0 !== R(new Uint8Array(o2), new Uint8Array(a2)))
                return false;
            } else if (S(t3) && !function(t4, e4) {
              return j(t4) ? j(e4) && c(Number.prototype.valueOf.call(t4), Number.prototype.valueOf.call(e4)) : A(t4) ? A(e4) && String.prototype.valueOf.call(t4) === String.prototype.valueOf.call(e4) : P(t4) ? P(e4) && Boolean.prototype.valueOf.call(t4) === Boolean.prototype.valueOf.call(e4) : E(t4) ? E(e4) && BigInt.prototype.valueOf.call(t4) === BigInt.prototype.valueOf.call(e4) : x(e4) && Symbol.prototype.valueOf.call(t4) === Symbol.prototype.valueOf.call(e4);
            }(t3, e3))
              return false;
          }
          return C(t3, e3, r3, n2, 0);
        }
        function D(t3, e3) {
          return e3.filter(function(e4) {
            return y(t3, e4);
          });
        }
        function C(t3, e3, r3, n2, o2, i2) {
          if (5 === arguments.length) {
            i2 = Object.keys(t3);
            var s2 = Object.keys(e3);
            if (i2.length !== s2.length)
              return false;
          }
          for (var a2 = 0; a2 < i2.length; a2++)
            if (!h(e3, i2[a2]))
              return false;
          if (r3 && 5 === arguments.length) {
            var u2 = f(t3);
            if (0 !== u2.length) {
              var c2 = 0;
              for (a2 = 0; a2 < u2.length; a2++) {
                var l2 = u2[a2];
                if (y(t3, l2)) {
                  if (!y(e3, l2))
                    return false;
                  i2.push(l2), c2++;
                } else if (y(e3, l2))
                  return false;
              }
              var p2 = f(e3);
              if (u2.length !== p2.length && D(e3, p2).length !== c2)
                return false;
            } else {
              var d2 = f(e3);
              if (0 !== d2.length && 0 !== D(e3, d2).length)
                return false;
            }
          }
          if (0 === i2.length && (0 === o2 || 1 === o2 && 0 === t3.length || 0 === t3.size))
            return true;
          if (void 0 === n2)
            n2 = { val1: /* @__PURE__ */ new Map(), val2: /* @__PURE__ */ new Map(), position: 0 };
          else {
            var m2 = n2.val1.get(t3);
            if (void 0 !== m2) {
              var v2 = n2.val2.get(e3);
              if (void 0 !== v2)
                return m2 === v2;
            }
            n2.position++;
          }
          n2.val1.set(t3, n2.position), n2.val2.set(e3, n2.position);
          var b2 = V(t3, e3, r3, i2, n2, o2);
          return n2.val1.delete(t3), n2.val2.delete(e3), b2;
        }
        function B(t3, e3, r3, n2) {
          for (var o2 = a(t3), i2 = 0; i2 < o2.length; i2++) {
            var s2 = o2[i2];
            if (I(e3, s2, r3, n2))
              return t3.delete(s2), true;
          }
          return false;
        }
        function U(t3) {
          switch (i(t3)) {
            case "undefined":
              return null;
            case "object":
              return;
            case "symbol":
              return false;
            case "string":
              t3 = +t3;
            case "number":
              if (l(t3))
                return false;
          }
          return true;
        }
        function F(t3, e3, r3) {
          var n2 = U(r3);
          return null != n2 ? n2 : e3.has(n2) && !t3.has(n2);
        }
        function L(t3, e3, r3, n2, o2) {
          var i2 = U(r3);
          if (null != i2)
            return i2;
          var s2 = e3.get(i2);
          return !(void 0 === s2 && !e3.has(i2) || !I(n2, s2, false, o2)) && !t3.has(i2) && I(n2, s2, false, o2);
        }
        function q(t3, e3, r3, n2, o2, i2) {
          for (var s2 = a(t3), u2 = 0; u2 < s2.length; u2++) {
            var c2 = s2[u2];
            if (I(r3, c2, o2, i2) && I(n2, e3.get(c2), o2, i2))
              return t3.delete(c2), true;
          }
          return false;
        }
        function V(t3, e3, r3, n2, s2, c2) {
          var f2 = 0;
          if (2 === c2) {
            if (!function(t4, e4, r4, n3) {
              for (var o2 = null, s3 = a(t4), u2 = 0; u2 < s3.length; u2++) {
                var c3 = s3[u2];
                if ("object" === i(c3) && null !== c3)
                  null === o2 && (o2 = /* @__PURE__ */ new Set()), o2.add(c3);
                else if (!e4.has(c3)) {
                  if (r4)
                    return false;
                  if (!F(t4, e4, c3))
                    return false;
                  null === o2 && (o2 = /* @__PURE__ */ new Set()), o2.add(c3);
                }
              }
              if (null !== o2) {
                for (var f3 = a(e4), l3 = 0; l3 < f3.length; l3++) {
                  var p3 = f3[l3];
                  if ("object" === i(p3) && null !== p3) {
                    if (!B(o2, p3, r4, n3))
                      return false;
                  } else if (!r4 && !t4.has(p3) && !B(o2, p3, r4, n3))
                    return false;
                }
                return 0 === o2.size;
              }
              return true;
            }(t3, e3, r3, s2))
              return false;
          } else if (3 === c2) {
            if (!function(t4, e4, r4, n3) {
              for (var s3 = null, a2 = u(t4), c3 = 0; c3 < a2.length; c3++) {
                var f3 = o(a2[c3], 2), l3 = f3[0], p3 = f3[1];
                if ("object" === i(l3) && null !== l3)
                  null === s3 && (s3 = /* @__PURE__ */ new Set()), s3.add(l3);
                else {
                  var h2 = e4.get(l3);
                  if (void 0 === h2 && !e4.has(l3) || !I(p3, h2, r4, n3)) {
                    if (r4)
                      return false;
                    if (!L(t4, e4, l3, p3, n3))
                      return false;
                    null === s3 && (s3 = /* @__PURE__ */ new Set()), s3.add(l3);
                  }
                }
              }
              if (null !== s3) {
                for (var y3 = u(e4), d2 = 0; d2 < y3.length; d2++) {
                  var m2 = o(y3[d2], 2), v2 = (l3 = m2[0], m2[1]);
                  if ("object" === i(l3) && null !== l3) {
                    if (!q(s3, t4, l3, v2, r4, n3))
                      return false;
                  } else if (!(r4 || t4.has(l3) && I(t4.get(l3), v2, false, n3) || q(s3, t4, l3, v2, false, n3)))
                    return false;
                }
                return 0 === s3.size;
              }
              return true;
            }(t3, e3, r3, s2))
              return false;
          } else if (1 === c2)
            for (; f2 < t3.length; f2++) {
              if (!h(t3, f2)) {
                if (h(e3, f2))
                  return false;
                for (var l2 = Object.keys(t3); f2 < l2.length; f2++) {
                  var p2 = l2[f2];
                  if (!h(e3, p2) || !I(t3[p2], e3[p2], r3, s2))
                    return false;
                }
                return l2.length === Object.keys(e3).length;
              }
              if (!h(e3, f2) || !I(t3[f2], e3[f2], r3, s2))
                return false;
            }
          for (f2 = 0; f2 < n2.length; f2++) {
            var y2 = n2[f2];
            if (!I(t3[y2], e3[y2], r3, s2))
              return false;
          }
          return true;
        }
        t2.exports = { isDeepEqual: function(t3, e3) {
          return I(t3, e3, false);
        }, isDeepStrictEqual: function(t3, e3) {
          return I(t3, e3, true);
        } };
      }, 7943: (t2, e2) => {
        "use strict";
        e2.byteLength = function(t3) {
          var e3 = u(t3), r3 = e3[0], n2 = e3[1];
          return 3 * (r3 + n2) / 4 - n2;
        }, e2.toByteArray = function(t3) {
          var e3, r3, i2 = u(t3), s2 = i2[0], a2 = i2[1], c2 = new o(function(t4, e4, r4) {
            return 3 * (e4 + r4) / 4 - r4;
          }(0, s2, a2)), f = 0, l = a2 > 0 ? s2 - 4 : s2;
          for (r3 = 0; r3 < l; r3 += 4)
            e3 = n[t3.charCodeAt(r3)] << 18 | n[t3.charCodeAt(r3 + 1)] << 12 | n[t3.charCodeAt(r3 + 2)] << 6 | n[t3.charCodeAt(r3 + 3)], c2[f++] = e3 >> 16 & 255, c2[f++] = e3 >> 8 & 255, c2[f++] = 255 & e3;
          return 2 === a2 && (e3 = n[t3.charCodeAt(r3)] << 2 | n[t3.charCodeAt(r3 + 1)] >> 4, c2[f++] = 255 & e3), 1 === a2 && (e3 = n[t3.charCodeAt(r3)] << 10 | n[t3.charCodeAt(r3 + 1)] << 4 | n[t3.charCodeAt(r3 + 2)] >> 2, c2[f++] = e3 >> 8 & 255, c2[f++] = 255 & e3), c2;
        }, e2.fromByteArray = function(t3) {
          for (var e3, n2 = t3.length, o2 = n2 % 3, i2 = [], s2 = 16383, a2 = 0, u2 = n2 - o2; a2 < u2; a2 += s2)
            i2.push(c(t3, a2, a2 + s2 > u2 ? u2 : a2 + s2));
          return 1 === o2 ? (e3 = t3[n2 - 1], i2.push(r2[e3 >> 2] + r2[e3 << 4 & 63] + "==")) : 2 === o2 && (e3 = (t3[n2 - 2] << 8) + t3[n2 - 1], i2.push(r2[e3 >> 10] + r2[e3 >> 4 & 63] + r2[e3 << 2 & 63] + "=")), i2.join("");
        };
        for (var r2 = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = i.length; s < a; ++s)
          r2[s] = i[s], n[i.charCodeAt(s)] = s;
        function u(t3) {
          var e3 = t3.length;
          if (e3 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r3 = t3.indexOf("=");
          return -1 === r3 && (r3 = e3), [r3, r3 === e3 ? 0 : 4 - r3 % 4];
        }
        function c(t3, e3, n2) {
          for (var o2, i2, s2 = [], a2 = e3; a2 < n2; a2 += 3)
            o2 = (t3[a2] << 16 & 16711680) + (t3[a2 + 1] << 8 & 65280) + (255 & t3[a2 + 2]), s2.push(r2[(i2 = o2) >> 18 & 63] + r2[i2 >> 12 & 63] + r2[i2 >> 6 & 63] + r2[63 & i2]);
          return s2.join("");
        }
        n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
      }, 3873: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        r2.d(e2, { Decimal128: () => it, Kb: () => D, t4: () => ht });
        for (var o = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, c = a.length; u < c; ++u)
          o[u] = a[u], i[a.charCodeAt(u)] = u;
        function f(t3) {
          var e3 = t3.length;
          if (e3 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r3 = t3.indexOf("=");
          return -1 === r3 && (r3 = e3), [r3, r3 === e3 ? 0 : 4 - r3 % 4];
        }
        function l(t3, e3, r3) {
          for (var n2, i2, s2 = [], a2 = e3; a2 < r3; a2 += 3)
            n2 = (t3[a2] << 16 & 16711680) + (t3[a2 + 1] << 8 & 65280) + (255 & t3[a2 + 2]), s2.push(o[(i2 = n2) >> 18 & 63] + o[i2 >> 12 & 63] + o[i2 >> 6 & 63] + o[63 & i2]);
          return s2.join("");
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
        var p = function(t3) {
          var e3, r3, n2 = f(t3), o2 = n2[0], a2 = n2[1], u2 = new s(function(t4, e4, r4) {
            return 3 * (e4 + r4) / 4 - r4;
          }(0, o2, a2)), c2 = 0, l2 = a2 > 0 ? o2 - 4 : o2;
          for (r3 = 0; r3 < l2; r3 += 4)
            e3 = i[t3.charCodeAt(r3)] << 18 | i[t3.charCodeAt(r3 + 1)] << 12 | i[t3.charCodeAt(r3 + 2)] << 6 | i[t3.charCodeAt(r3 + 3)], u2[c2++] = e3 >> 16 & 255, u2[c2++] = e3 >> 8 & 255, u2[c2++] = 255 & e3;
          return 2 === a2 && (e3 = i[t3.charCodeAt(r3)] << 2 | i[t3.charCodeAt(r3 + 1)] >> 4, u2[c2++] = 255 & e3), 1 === a2 && (e3 = i[t3.charCodeAt(r3)] << 10 | i[t3.charCodeAt(r3 + 1)] << 4 | i[t3.charCodeAt(r3 + 2)] >> 2, u2[c2++] = e3 >> 8 & 255, u2[c2++] = 255 & e3), u2;
        }, h = function(t3) {
          for (var e3, r3 = t3.length, n2 = r3 % 3, i2 = [], s2 = 16383, a2 = 0, u2 = r3 - n2; a2 < u2; a2 += s2)
            i2.push(l(t3, a2, a2 + s2 > u2 ? u2 : a2 + s2));
          return 1 === n2 ? (e3 = t3[r3 - 1], i2.push(o[e3 >> 2] + o[e3 << 4 & 63] + "==")) : 2 === n2 && (e3 = (t3[r3 - 2] << 8) + t3[r3 - 1], i2.push(o[e3 >> 10] + o[e3 >> 4 & 63] + o[e3 << 2 & 63] + "=")), i2.join("");
        }, y = function(t3, e3, r3, n2, o2) {
          var i2, s2, a2 = 8 * o2 - n2 - 1, u2 = (1 << a2) - 1, c2 = u2 >> 1, f2 = -7, l2 = r3 ? o2 - 1 : 0, p2 = r3 ? -1 : 1, h2 = t3[e3 + l2];
          for (l2 += p2, i2 = h2 & (1 << -f2) - 1, h2 >>= -f2, f2 += a2; f2 > 0; i2 = 256 * i2 + t3[e3 + l2], l2 += p2, f2 -= 8)
            ;
          for (s2 = i2 & (1 << -f2) - 1, i2 >>= -f2, f2 += n2; f2 > 0; s2 = 256 * s2 + t3[e3 + l2], l2 += p2, f2 -= 8)
            ;
          if (0 === i2)
            i2 = 1 - c2;
          else {
            if (i2 === u2)
              return s2 ? NaN : 1 / 0 * (h2 ? -1 : 1);
            s2 += Math.pow(2, n2), i2 -= c2;
          }
          return (h2 ? -1 : 1) * s2 * Math.pow(2, i2 - n2);
        }, d = function(t3, e3, r3, n2, o2, i2) {
          var s2, a2, u2, c2 = 8 * i2 - o2 - 1, f2 = (1 << c2) - 1, l2 = f2 >> 1, p2 = 23 === o2 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h2 = n2 ? 0 : i2 - 1, y2 = n2 ? 1 : -1, d2 = e3 < 0 || 0 === e3 && 1 / e3 < 0 ? 1 : 0;
          for (e3 = Math.abs(e3), isNaN(e3) || e3 === 1 / 0 ? (a2 = isNaN(e3) ? 1 : 0, s2 = f2) : (s2 = Math.floor(Math.log(e3) / Math.LN2), e3 * (u2 = Math.pow(2, -s2)) < 1 && (s2--, u2 *= 2), (e3 += s2 + l2 >= 1 ? p2 / u2 : p2 * Math.pow(2, 1 - l2)) * u2 >= 2 && (s2++, u2 /= 2), s2 + l2 >= f2 ? (a2 = 0, s2 = f2) : s2 + l2 >= 1 ? (a2 = (e3 * u2 - 1) * Math.pow(2, o2), s2 += l2) : (a2 = e3 * Math.pow(2, l2 - 1) * Math.pow(2, o2), s2 = 0)); o2 >= 8; t3[r3 + h2] = 255 & a2, h2 += y2, a2 /= 256, o2 -= 8)
            ;
          for (s2 = s2 << o2 | a2, c2 += o2; c2 > 0; t3[r3 + h2] = 255 & s2, h2 += y2, s2 /= 256, c2 -= 8)
            ;
          t3[r3 + h2 - y2] |= 128 * d2;
        }, m = function(t3, e3) {
          return function(t4, e4) {
            var r3 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            e4.Buffer = i2, e4.SlowBuffer = function(t5) {
              return +t5 != t5 && (t5 = 0), i2.alloc(+t5);
            }, e4.INSPECT_MAX_BYTES = 50;
            var n2 = 2147483647;
            function o2(t5) {
              if (t5 > n2)
                throw new RangeError('The value "' + t5 + '" is invalid for option "size"');
              var e5 = new Uint8Array(t5);
              return Object.setPrototypeOf(e5, i2.prototype), e5;
            }
            function i2(t5, e5, r4) {
              if ("number" == typeof t5) {
                if ("string" == typeof e5)
                  throw new TypeError('The "string" argument must be of type string. Received type number');
                return u2(t5);
              }
              return s2(t5, e5, r4);
            }
            function s2(t5, e5, r4) {
              if ("string" == typeof t5)
                return function(t6, e6) {
                  if ("string" == typeof e6 && "" !== e6 || (e6 = "utf8"), !i2.isEncoding(e6))
                    throw new TypeError("Unknown encoding: " + e6);
                  var r5 = 0 | m2(t6, e6), n4 = o2(r5), s4 = n4.write(t6, e6);
                  return s4 !== r5 && (n4 = n4.slice(0, s4)), n4;
                }(t5, e5);
              if (ArrayBuffer.isView(t5))
                return function(t6) {
                  if (q2(t6, Uint8Array)) {
                    var e6 = new Uint8Array(t6);
                    return f2(e6.buffer, e6.byteOffset, e6.byteLength);
                  }
                  return c2(t6);
                }(t5);
              if (null == t5)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers.typeof(t5));
              if (q2(t5, ArrayBuffer) || t5 && q2(t5.buffer, ArrayBuffer))
                return f2(t5, e5, r4);
              if ("undefined" != typeof SharedArrayBuffer && (q2(t5, SharedArrayBuffer) || t5 && q2(t5.buffer, SharedArrayBuffer)))
                return f2(t5, e5, r4);
              if ("number" == typeof t5)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
              var n3 = t5.valueOf && t5.valueOf();
              if (null != n3 && n3 !== t5)
                return i2.from(n3, e5, r4);
              var s3 = function(t6) {
                if (i2.isBuffer(t6)) {
                  var e6 = 0 | l2(t6.length), r5 = o2(e6);
                  return 0 === r5.length || t6.copy(r5, 0, 0, e6), r5;
                }
                return void 0 !== t6.length ? "number" != typeof t6.length || V2(t6.length) ? o2(0) : c2(t6) : "Buffer" === t6.type && Array.isArray(t6.data) ? c2(t6.data) : void 0;
              }(t5);
              if (s3)
                return s3;
              if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t5[Symbol.toPrimitive])
                return i2.from(t5[Symbol.toPrimitive]("string"), e5, r4);
              throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers.typeof(t5));
            }
            function a2(t5) {
              if ("number" != typeof t5)
                throw new TypeError('"size" argument must be of type number');
              if (t5 < 0)
                throw new RangeError('The value "' + t5 + '" is invalid for option "size"');
            }
            function u2(t5) {
              return a2(t5), o2(t5 < 0 ? 0 : 0 | l2(t5));
            }
            function c2(t5) {
              for (var e5 = t5.length < 0 ? 0 : 0 | l2(t5.length), r4 = o2(e5), n3 = 0; n3 < e5; n3 += 1)
                r4[n3] = 255 & t5[n3];
              return r4;
            }
            function f2(t5, e5, r4) {
              if (e5 < 0 || t5.byteLength < e5)
                throw new RangeError('"offset" is outside of buffer bounds');
              if (t5.byteLength < e5 + (r4 || 0))
                throw new RangeError('"length" is outside of buffer bounds');
              var n3;
              return n3 = void 0 === e5 && void 0 === r4 ? new Uint8Array(t5) : void 0 === r4 ? new Uint8Array(t5, e5) : new Uint8Array(t5, e5, r4), Object.setPrototypeOf(n3, i2.prototype), n3;
            }
            function l2(t5) {
              if (t5 >= n2)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n2.toString(16) + " bytes");
              return 0 | t5;
            }
            function m2(t5, e5) {
              if (i2.isBuffer(t5))
                return t5.length;
              if (ArrayBuffer.isView(t5) || q2(t5, ArrayBuffer))
                return t5.byteLength;
              if ("string" != typeof t5)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + babelHelpers.typeof(t5));
              var r4 = t5.length, n3 = arguments.length > 2 && true === arguments[2];
              if (!n3 && 0 === r4)
                return 0;
              for (var o3 = false; ; )
                switch (e5) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return r4;
                  case "utf8":
                  case "utf-8":
                    return U2(t5).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * r4;
                  case "hex":
                    return r4 >>> 1;
                  case "base64":
                    return F2(t5).length;
                  default:
                    if (o3)
                      return n3 ? -1 : U2(t5).length;
                    e5 = ("" + e5).toLowerCase(), o3 = true;
                }
            }
            function v2(t5, e5, r4) {
              var n3 = false;
              if ((void 0 === e5 || e5 < 0) && (e5 = 0), e5 > this.length)
                return "";
              if ((void 0 === r4 || r4 > this.length) && (r4 = this.length), r4 <= 0)
                return "";
              if ((r4 >>>= 0) <= (e5 >>>= 0))
                return "";
              for (t5 || (t5 = "utf8"); ; )
                switch (t5) {
                  case "hex":
                    return M2(this, e5, r4);
                  case "utf8":
                  case "utf-8":
                    return P2(this, e5, r4);
                  case "ascii":
                    return x2(this, e5, r4);
                  case "latin1":
                  case "binary":
                    return k2(this, e5, r4);
                  case "base64":
                    return A2(this, e5, r4);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return T2(this, e5, r4);
                  default:
                    if (n3)
                      throw new TypeError("Unknown encoding: " + t5);
                    t5 = (t5 + "").toLowerCase(), n3 = true;
                }
            }
            function b2(t5, e5, r4) {
              var n3 = t5[e5];
              t5[e5] = t5[r4], t5[r4] = n3;
            }
            function g2(t5, e5, r4, n3, o3) {
              if (0 === t5.length)
                return -1;
              if ("string" == typeof r4 ? (n3 = r4, r4 = 0) : r4 > 2147483647 ? r4 = 2147483647 : r4 < -2147483648 && (r4 = -2147483648), V2(r4 = +r4) && (r4 = o3 ? 0 : t5.length - 1), r4 < 0 && (r4 = t5.length + r4), r4 >= t5.length) {
                if (o3)
                  return -1;
                r4 = t5.length - 1;
              } else if (r4 < 0) {
                if (!o3)
                  return -1;
                r4 = 0;
              }
              if ("string" == typeof e5 && (e5 = i2.from(e5, n3)), i2.isBuffer(e5))
                return 0 === e5.length ? -1 : _2(t5, e5, r4, n3, o3);
              if ("number" == typeof e5)
                return e5 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o3 ? Uint8Array.prototype.indexOf.call(t5, e5, r4) : Uint8Array.prototype.lastIndexOf.call(t5, e5, r4) : _2(t5, [e5], r4, n3, o3);
              throw new TypeError("val must be string, number or Buffer");
            }
            function _2(t5, e5, r4, n3, o3) {
              var i3, s3 = 1, a3 = t5.length, u3 = e5.length;
              if (void 0 !== n3 && ("ucs2" === (n3 = String(n3).toLowerCase()) || "ucs-2" === n3 || "utf16le" === n3 || "utf-16le" === n3)) {
                if (t5.length < 2 || e5.length < 2)
                  return -1;
                s3 = 2, a3 /= 2, u3 /= 2, r4 /= 2;
              }
              function c3(t6, e6) {
                return 1 === s3 ? t6[e6] : t6.readUInt16BE(e6 * s3);
              }
              if (o3) {
                var f3 = -1;
                for (i3 = r4; i3 < a3; i3++)
                  if (c3(t5, i3) === c3(e5, -1 === f3 ? 0 : i3 - f3)) {
                    if (-1 === f3 && (f3 = i3), i3 - f3 + 1 === u3)
                      return f3 * s3;
                  } else
                    -1 !== f3 && (i3 -= i3 - f3), f3 = -1;
              } else
                for (r4 + u3 > a3 && (r4 = a3 - u3), i3 = r4; i3 >= 0; i3--) {
                  for (var l3 = true, p2 = 0; p2 < u3; p2++)
                    if (c3(t5, i3 + p2) !== c3(e5, p2)) {
                      l3 = false;
                      break;
                    }
                  if (l3)
                    return i3;
                }
              return -1;
            }
            function w2(t5, e5, r4, n3) {
              r4 = Number(r4) || 0;
              var o3 = t5.length - r4;
              n3 ? (n3 = Number(n3)) > o3 && (n3 = o3) : n3 = o3;
              var i3 = e5.length;
              n3 > i3 / 2 && (n3 = i3 / 2);
              for (var s3 = 0; s3 < n3; ++s3) {
                var a3 = parseInt(e5.substr(2 * s3, 2), 16);
                if (V2(a3))
                  return s3;
                t5[r4 + s3] = a3;
              }
              return s3;
            }
            function O2(t5, e5, r4, n3) {
              return L2(U2(e5, t5.length - r4), t5, r4, n3);
            }
            function $2(t5, e5, r4, n3) {
              return L2(function(t6) {
                for (var e6 = [], r5 = 0; r5 < t6.length; ++r5)
                  e6.push(255 & t6.charCodeAt(r5));
                return e6;
              }(e5), t5, r4, n3);
            }
            function S2(t5, e5, r4, n3) {
              return L2(F2(e5), t5, r4, n3);
            }
            function j2(t5, e5, r4, n3) {
              return L2(function(t6, e6) {
                for (var r5, n4, o3, i3 = [], s3 = 0; s3 < t6.length && !((e6 -= 2) < 0); ++s3)
                  n4 = (r5 = t6.charCodeAt(s3)) >> 8, o3 = r5 % 256, i3.push(o3), i3.push(n4);
                return i3;
              }(e5, t5.length - r4), t5, r4, n3);
            }
            function A2(t5, e5, r4) {
              return 0 === e5 && r4 === t5.length ? h(t5) : h(t5.slice(e5, r4));
            }
            function P2(t5, e5, r4) {
              r4 = Math.min(t5.length, r4);
              for (var n3 = [], o3 = e5; o3 < r4; ) {
                var i3, s3, a3, u3, c3 = t5[o3], f3 = null, l3 = c3 > 239 ? 4 : c3 > 223 ? 3 : c3 > 191 ? 2 : 1;
                if (o3 + l3 <= r4)
                  switch (l3) {
                    case 1:
                      c3 < 128 && (f3 = c3);
                      break;
                    case 2:
                      128 == (192 & (i3 = t5[o3 + 1])) && (u3 = (31 & c3) << 6 | 63 & i3) > 127 && (f3 = u3);
                      break;
                    case 3:
                      i3 = t5[o3 + 1], s3 = t5[o3 + 2], 128 == (192 & i3) && 128 == (192 & s3) && (u3 = (15 & c3) << 12 | (63 & i3) << 6 | 63 & s3) > 2047 && (u3 < 55296 || u3 > 57343) && (f3 = u3);
                      break;
                    case 4:
                      i3 = t5[o3 + 1], s3 = t5[o3 + 2], a3 = t5[o3 + 3], 128 == (192 & i3) && 128 == (192 & s3) && 128 == (192 & a3) && (u3 = (15 & c3) << 18 | (63 & i3) << 12 | (63 & s3) << 6 | 63 & a3) > 65535 && u3 < 1114112 && (f3 = u3);
                  }
                null === f3 ? (f3 = 65533, l3 = 1) : f3 > 65535 && (f3 -= 65536, n3.push(f3 >>> 10 & 1023 | 55296), f3 = 56320 | 1023 & f3), n3.push(f3), o3 += l3;
              }
              return function(t6) {
                var e6 = t6.length;
                if (e6 <= E2)
                  return String.fromCharCode.apply(String, t6);
                for (var r5 = "", n4 = 0; n4 < e6; )
                  r5 += String.fromCharCode.apply(String, t6.slice(n4, n4 += E2));
                return r5;
              }(n3);
            }
            e4.kMaxLength = n2, i2.TYPED_ARRAY_SUPPORT = function() {
              try {
                var t5 = new Uint8Array(1), e5 = { foo: function() {
                  return 42;
                } };
                return Object.setPrototypeOf(e5, Uint8Array.prototype), Object.setPrototypeOf(t5, e5), 42 === t5.foo();
              } catch (t6) {
                return false;
              }
            }(), i2.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(i2.prototype, "parent", { enumerable: true, get: function() {
              if (i2.isBuffer(this))
                return this.buffer;
            } }), Object.defineProperty(i2.prototype, "offset", { enumerable: true, get: function() {
              if (i2.isBuffer(this))
                return this.byteOffset;
            } }), i2.poolSize = 8192, i2.from = function(t5, e5, r4) {
              return s2(t5, e5, r4);
            }, Object.setPrototypeOf(i2.prototype, Uint8Array.prototype), Object.setPrototypeOf(i2, Uint8Array), i2.alloc = function(t5, e5, r4) {
              return function(t6, e6, r5) {
                return a2(t6), t6 <= 0 ? o2(t6) : void 0 !== e6 ? "string" == typeof r5 ? o2(t6).fill(e6, r5) : o2(t6).fill(e6) : o2(t6);
              }(t5, e5, r4);
            }, i2.allocUnsafe = function(t5) {
              return u2(t5);
            }, i2.allocUnsafeSlow = function(t5) {
              return u2(t5);
            }, i2.isBuffer = function(t5) {
              return null != t5 && true === t5._isBuffer && t5 !== i2.prototype;
            }, i2.compare = function(t5, e5) {
              if (q2(t5, Uint8Array) && (t5 = i2.from(t5, t5.offset, t5.byteLength)), q2(e5, Uint8Array) && (e5 = i2.from(e5, e5.offset, e5.byteLength)), !i2.isBuffer(t5) || !i2.isBuffer(e5))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (t5 === e5)
                return 0;
              for (var r4 = t5.length, n3 = e5.length, o3 = 0, s3 = Math.min(r4, n3); o3 < s3; ++o3)
                if (t5[o3] !== e5[o3]) {
                  r4 = t5[o3], n3 = e5[o3];
                  break;
                }
              return r4 < n3 ? -1 : n3 < r4 ? 1 : 0;
            }, i2.isEncoding = function(t5) {
              switch (String(t5).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            }, i2.concat = function(t5, e5) {
              if (!Array.isArray(t5))
                throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === t5.length)
                return i2.alloc(0);
              var r4;
              if (void 0 === e5)
                for (e5 = 0, r4 = 0; r4 < t5.length; ++r4)
                  e5 += t5[r4].length;
              var n3 = i2.allocUnsafe(e5), o3 = 0;
              for (r4 = 0; r4 < t5.length; ++r4) {
                var s3 = t5[r4];
                if (q2(s3, Uint8Array))
                  o3 + s3.length > n3.length ? i2.from(s3).copy(n3, o3) : Uint8Array.prototype.set.call(n3, s3, o3);
                else {
                  if (!i2.isBuffer(s3))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  s3.copy(n3, o3);
                }
                o3 += s3.length;
              }
              return n3;
            }, i2.byteLength = m2, i2.prototype._isBuffer = true, i2.prototype.swap16 = function() {
              var t5 = this.length;
              if (t5 % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var e5 = 0; e5 < t5; e5 += 2)
                b2(this, e5, e5 + 1);
              return this;
            }, i2.prototype.swap32 = function() {
              var t5 = this.length;
              if (t5 % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var e5 = 0; e5 < t5; e5 += 4)
                b2(this, e5, e5 + 3), b2(this, e5 + 1, e5 + 2);
              return this;
            }, i2.prototype.swap64 = function() {
              var t5 = this.length;
              if (t5 % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var e5 = 0; e5 < t5; e5 += 8)
                b2(this, e5, e5 + 7), b2(this, e5 + 1, e5 + 6), b2(this, e5 + 2, e5 + 5), b2(this, e5 + 3, e5 + 4);
              return this;
            }, i2.prototype.toString = function() {
              var t5 = this.length;
              return 0 === t5 ? "" : 0 === arguments.length ? P2(this, 0, t5) : v2.apply(this, arguments);
            }, i2.prototype.toLocaleString = i2.prototype.toString, i2.prototype.equals = function(t5) {
              if (!i2.isBuffer(t5))
                throw new TypeError("Argument must be a Buffer");
              return this === t5 || 0 === i2.compare(this, t5);
            }, i2.prototype.inspect = function() {
              var t5 = "", r4 = e4.INSPECT_MAX_BYTES;
              return t5 = this.toString("hex", 0, r4).replace(/(.{2})/g, "$1 ").trim(), this.length > r4 && (t5 += " ... "), "<Buffer " + t5 + ">";
            }, r3 && (i2.prototype[r3] = i2.prototype.inspect), i2.prototype.compare = function(t5, e5, r4, n3, o3) {
              if (q2(t5, Uint8Array) && (t5 = i2.from(t5, t5.offset, t5.byteLength)), !i2.isBuffer(t5))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + babelHelpers.typeof(t5));
              if (void 0 === e5 && (e5 = 0), void 0 === r4 && (r4 = t5 ? t5.length : 0), void 0 === n3 && (n3 = 0), void 0 === o3 && (o3 = this.length), e5 < 0 || r4 > t5.length || n3 < 0 || o3 > this.length)
                throw new RangeError("out of range index");
              if (n3 >= o3 && e5 >= r4)
                return 0;
              if (n3 >= o3)
                return -1;
              if (e5 >= r4)
                return 1;
              if (this === t5)
                return 0;
              for (var s3 = (o3 >>>= 0) - (n3 >>>= 0), a3 = (r4 >>>= 0) - (e5 >>>= 0), u3 = Math.min(s3, a3), c3 = this.slice(n3, o3), f3 = t5.slice(e5, r4), l3 = 0; l3 < u3; ++l3)
                if (c3[l3] !== f3[l3]) {
                  s3 = c3[l3], a3 = f3[l3];
                  break;
                }
              return s3 < a3 ? -1 : a3 < s3 ? 1 : 0;
            }, i2.prototype.includes = function(t5, e5, r4) {
              return -1 !== this.indexOf(t5, e5, r4);
            }, i2.prototype.indexOf = function(t5, e5, r4) {
              return g2(this, t5, e5, r4, true);
            }, i2.prototype.lastIndexOf = function(t5, e5, r4) {
              return g2(this, t5, e5, r4, false);
            }, i2.prototype.write = function(t5, e5, r4, n3) {
              if (void 0 === e5)
                n3 = "utf8", r4 = this.length, e5 = 0;
              else if (void 0 === r4 && "string" == typeof e5)
                n3 = e5, r4 = this.length, e5 = 0;
              else {
                if (!isFinite(e5))
                  throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e5 >>>= 0, isFinite(r4) ? (r4 >>>= 0, void 0 === n3 && (n3 = "utf8")) : (n3 = r4, r4 = void 0);
              }
              var o3 = this.length - e5;
              if ((void 0 === r4 || r4 > o3) && (r4 = o3), t5.length > 0 && (r4 < 0 || e5 < 0) || e5 > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
              n3 || (n3 = "utf8");
              for (var i3 = false; ; )
                switch (n3) {
                  case "hex":
                    return w2(this, t5, e5, r4);
                  case "utf8":
                  case "utf-8":
                    return O2(this, t5, e5, r4);
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return $2(this, t5, e5, r4);
                  case "base64":
                    return S2(this, t5, e5, r4);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return j2(this, t5, e5, r4);
                  default:
                    if (i3)
                      throw new TypeError("Unknown encoding: " + n3);
                    n3 = ("" + n3).toLowerCase(), i3 = true;
                }
            }, i2.prototype.toJSON = function() {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            };
            var E2 = 4096;
            function x2(t5, e5, r4) {
              var n3 = "";
              r4 = Math.min(t5.length, r4);
              for (var o3 = e5; o3 < r4; ++o3)
                n3 += String.fromCharCode(127 & t5[o3]);
              return n3;
            }
            function k2(t5, e5, r4) {
              var n3 = "";
              r4 = Math.min(t5.length, r4);
              for (var o3 = e5; o3 < r4; ++o3)
                n3 += String.fromCharCode(t5[o3]);
              return n3;
            }
            function M2(t5, e5, r4) {
              var n3 = t5.length;
              (!e5 || e5 < 0) && (e5 = 0), (!r4 || r4 < 0 || r4 > n3) && (r4 = n3);
              for (var o3 = "", i3 = e5; i3 < r4; ++i3)
                o3 += W2[t5[i3]];
              return o3;
            }
            function T2(t5, e5, r4) {
              for (var n3 = t5.slice(e5, r4), o3 = "", i3 = 0; i3 < n3.length - 1; i3 += 2)
                o3 += String.fromCharCode(n3[i3] + 256 * n3[i3 + 1]);
              return o3;
            }
            function N2(t5, e5, r4) {
              if (t5 % 1 != 0 || t5 < 0)
                throw new RangeError("offset is not uint");
              if (t5 + e5 > r4)
                throw new RangeError("Trying to access beyond buffer length");
            }
            function R2(t5, e5, r4, n3, o3, s3) {
              if (!i2.isBuffer(t5))
                throw new TypeError('"buffer" argument must be a Buffer instance');
              if (e5 > o3 || e5 < s3)
                throw new RangeError('"value" argument is out of bounds');
              if (r4 + n3 > t5.length)
                throw new RangeError("Index out of range");
            }
            function I2(t5, e5, r4, n3, o3, i3) {
              if (r4 + n3 > t5.length)
                throw new RangeError("Index out of range");
              if (r4 < 0)
                throw new RangeError("Index out of range");
            }
            function D2(t5, e5, r4, n3, o3) {
              return e5 = +e5, r4 >>>= 0, o3 || I2(t5, 0, r4, 4), d(t5, e5, r4, n3, 23, 4), r4 + 4;
            }
            function C2(t5, e5, r4, n3, o3) {
              return e5 = +e5, r4 >>>= 0, o3 || I2(t5, 0, r4, 8), d(t5, e5, r4, n3, 52, 8), r4 + 8;
            }
            i2.prototype.slice = function(t5, e5) {
              var r4 = this.length;
              (t5 = ~~t5) < 0 ? (t5 += r4) < 0 && (t5 = 0) : t5 > r4 && (t5 = r4), (e5 = void 0 === e5 ? r4 : ~~e5) < 0 ? (e5 += r4) < 0 && (e5 = 0) : e5 > r4 && (e5 = r4), e5 < t5 && (e5 = t5);
              var n3 = this.subarray(t5, e5);
              return Object.setPrototypeOf(n3, i2.prototype), n3;
            }, i2.prototype.readUintLE = i2.prototype.readUIntLE = function(t5, e5, r4) {
              t5 >>>= 0, e5 >>>= 0, r4 || N2(t5, e5, this.length);
              for (var n3 = this[t5], o3 = 1, i3 = 0; ++i3 < e5 && (o3 *= 256); )
                n3 += this[t5 + i3] * o3;
              return n3;
            }, i2.prototype.readUintBE = i2.prototype.readUIntBE = function(t5, e5, r4) {
              t5 >>>= 0, e5 >>>= 0, r4 || N2(t5, e5, this.length);
              for (var n3 = this[t5 + --e5], o3 = 1; e5 > 0 && (o3 *= 256); )
                n3 += this[t5 + --e5] * o3;
              return n3;
            }, i2.prototype.readUint8 = i2.prototype.readUInt8 = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 1, this.length), this[t5];
            }, i2.prototype.readUint16LE = i2.prototype.readUInt16LE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 2, this.length), this[t5] | this[t5 + 1] << 8;
            }, i2.prototype.readUint16BE = i2.prototype.readUInt16BE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 2, this.length), this[t5] << 8 | this[t5 + 1];
            }, i2.prototype.readUint32LE = i2.prototype.readUInt32LE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 4, this.length), (this[t5] | this[t5 + 1] << 8 | this[t5 + 2] << 16) + 16777216 * this[t5 + 3];
            }, i2.prototype.readUint32BE = i2.prototype.readUInt32BE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 4, this.length), 16777216 * this[t5] + (this[t5 + 1] << 16 | this[t5 + 2] << 8 | this[t5 + 3]);
            }, i2.prototype.readIntLE = function(t5, e5, r4) {
              t5 >>>= 0, e5 >>>= 0, r4 || N2(t5, e5, this.length);
              for (var n3 = this[t5], o3 = 1, i3 = 0; ++i3 < e5 && (o3 *= 256); )
                n3 += this[t5 + i3] * o3;
              return n3 >= (o3 *= 128) && (n3 -= Math.pow(2, 8 * e5)), n3;
            }, i2.prototype.readIntBE = function(t5, e5, r4) {
              t5 >>>= 0, e5 >>>= 0, r4 || N2(t5, e5, this.length);
              for (var n3 = e5, o3 = 1, i3 = this[t5 + --n3]; n3 > 0 && (o3 *= 256); )
                i3 += this[t5 + --n3] * o3;
              return i3 >= (o3 *= 128) && (i3 -= Math.pow(2, 8 * e5)), i3;
            }, i2.prototype.readInt8 = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 1, this.length), 128 & this[t5] ? -1 * (255 - this[t5] + 1) : this[t5];
            }, i2.prototype.readInt16LE = function(t5, e5) {
              t5 >>>= 0, e5 || N2(t5, 2, this.length);
              var r4 = this[t5] | this[t5 + 1] << 8;
              return 32768 & r4 ? 4294901760 | r4 : r4;
            }, i2.prototype.readInt16BE = function(t5, e5) {
              t5 >>>= 0, e5 || N2(t5, 2, this.length);
              var r4 = this[t5 + 1] | this[t5] << 8;
              return 32768 & r4 ? 4294901760 | r4 : r4;
            }, i2.prototype.readInt32LE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 4, this.length), this[t5] | this[t5 + 1] << 8 | this[t5 + 2] << 16 | this[t5 + 3] << 24;
            }, i2.prototype.readInt32BE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 4, this.length), this[t5] << 24 | this[t5 + 1] << 16 | this[t5 + 2] << 8 | this[t5 + 3];
            }, i2.prototype.readFloatLE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 4, this.length), y(this, t5, true, 23, 4);
            }, i2.prototype.readFloatBE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 4, this.length), y(this, t5, false, 23, 4);
            }, i2.prototype.readDoubleLE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 8, this.length), y(this, t5, true, 52, 8);
            }, i2.prototype.readDoubleBE = function(t5, e5) {
              return t5 >>>= 0, e5 || N2(t5, 8, this.length), y(this, t5, false, 52, 8);
            }, i2.prototype.writeUintLE = i2.prototype.writeUIntLE = function(t5, e5, r4, n3) {
              t5 = +t5, e5 >>>= 0, r4 >>>= 0, n3 || R2(this, t5, e5, r4, Math.pow(2, 8 * r4) - 1, 0);
              var o3 = 1, i3 = 0;
              for (this[e5] = 255 & t5; ++i3 < r4 && (o3 *= 256); )
                this[e5 + i3] = t5 / o3 & 255;
              return e5 + r4;
            }, i2.prototype.writeUintBE = i2.prototype.writeUIntBE = function(t5, e5, r4, n3) {
              t5 = +t5, e5 >>>= 0, r4 >>>= 0, n3 || R2(this, t5, e5, r4, Math.pow(2, 8 * r4) - 1, 0);
              var o3 = r4 - 1, i3 = 1;
              for (this[e5 + o3] = 255 & t5; --o3 >= 0 && (i3 *= 256); )
                this[e5 + o3] = t5 / i3 & 255;
              return e5 + r4;
            }, i2.prototype.writeUint8 = i2.prototype.writeUInt8 = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 1, 255, 0), this[e5] = 255 & t5, e5 + 1;
            }, i2.prototype.writeUint16LE = i2.prototype.writeUInt16LE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 2, 65535, 0), this[e5] = 255 & t5, this[e5 + 1] = t5 >>> 8, e5 + 2;
            }, i2.prototype.writeUint16BE = i2.prototype.writeUInt16BE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 2, 65535, 0), this[e5] = t5 >>> 8, this[e5 + 1] = 255 & t5, e5 + 2;
            }, i2.prototype.writeUint32LE = i2.prototype.writeUInt32LE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 4, 4294967295, 0), this[e5 + 3] = t5 >>> 24, this[e5 + 2] = t5 >>> 16, this[e5 + 1] = t5 >>> 8, this[e5] = 255 & t5, e5 + 4;
            }, i2.prototype.writeUint32BE = i2.prototype.writeUInt32BE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 4, 4294967295, 0), this[e5] = t5 >>> 24, this[e5 + 1] = t5 >>> 16, this[e5 + 2] = t5 >>> 8, this[e5 + 3] = 255 & t5, e5 + 4;
            }, i2.prototype.writeIntLE = function(t5, e5, r4, n3) {
              if (t5 = +t5, e5 >>>= 0, !n3) {
                var o3 = Math.pow(2, 8 * r4 - 1);
                R2(this, t5, e5, r4, o3 - 1, -o3);
              }
              var i3 = 0, s3 = 1, a3 = 0;
              for (this[e5] = 255 & t5; ++i3 < r4 && (s3 *= 256); )
                t5 < 0 && 0 === a3 && 0 !== this[e5 + i3 - 1] && (a3 = 1), this[e5 + i3] = (t5 / s3 >> 0) - a3 & 255;
              return e5 + r4;
            }, i2.prototype.writeIntBE = function(t5, e5, r4, n3) {
              if (t5 = +t5, e5 >>>= 0, !n3) {
                var o3 = Math.pow(2, 8 * r4 - 1);
                R2(this, t5, e5, r4, o3 - 1, -o3);
              }
              var i3 = r4 - 1, s3 = 1, a3 = 0;
              for (this[e5 + i3] = 255 & t5; --i3 >= 0 && (s3 *= 256); )
                t5 < 0 && 0 === a3 && 0 !== this[e5 + i3 + 1] && (a3 = 1), this[e5 + i3] = (t5 / s3 >> 0) - a3 & 255;
              return e5 + r4;
            }, i2.prototype.writeInt8 = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 1, 127, -128), t5 < 0 && (t5 = 255 + t5 + 1), this[e5] = 255 & t5, e5 + 1;
            }, i2.prototype.writeInt16LE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 2, 32767, -32768), this[e5] = 255 & t5, this[e5 + 1] = t5 >>> 8, e5 + 2;
            }, i2.prototype.writeInt16BE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 2, 32767, -32768), this[e5] = t5 >>> 8, this[e5 + 1] = 255 & t5, e5 + 2;
            }, i2.prototype.writeInt32LE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 4, 2147483647, -2147483648), this[e5] = 255 & t5, this[e5 + 1] = t5 >>> 8, this[e5 + 2] = t5 >>> 16, this[e5 + 3] = t5 >>> 24, e5 + 4;
            }, i2.prototype.writeInt32BE = function(t5, e5, r4) {
              return t5 = +t5, e5 >>>= 0, r4 || R2(this, t5, e5, 4, 2147483647, -2147483648), t5 < 0 && (t5 = 4294967295 + t5 + 1), this[e5] = t5 >>> 24, this[e5 + 1] = t5 >>> 16, this[e5 + 2] = t5 >>> 8, this[e5 + 3] = 255 & t5, e5 + 4;
            }, i2.prototype.writeFloatLE = function(t5, e5, r4) {
              return D2(this, t5, e5, true, r4);
            }, i2.prototype.writeFloatBE = function(t5, e5, r4) {
              return D2(this, t5, e5, false, r4);
            }, i2.prototype.writeDoubleLE = function(t5, e5, r4) {
              return C2(this, t5, e5, true, r4);
            }, i2.prototype.writeDoubleBE = function(t5, e5, r4) {
              return C2(this, t5, e5, false, r4);
            }, i2.prototype.copy = function(t5, e5, r4, n3) {
              if (!i2.isBuffer(t5))
                throw new TypeError("argument should be a Buffer");
              if (r4 || (r4 = 0), n3 || 0 === n3 || (n3 = this.length), e5 >= t5.length && (e5 = t5.length), e5 || (e5 = 0), n3 > 0 && n3 < r4 && (n3 = r4), n3 === r4)
                return 0;
              if (0 === t5.length || 0 === this.length)
                return 0;
              if (e5 < 0)
                throw new RangeError("targetStart out of bounds");
              if (r4 < 0 || r4 >= this.length)
                throw new RangeError("Index out of range");
              if (n3 < 0)
                throw new RangeError("sourceEnd out of bounds");
              n3 > this.length && (n3 = this.length), t5.length - e5 < n3 - r4 && (n3 = t5.length - e5 + r4);
              var o3 = n3 - r4;
              return this === t5 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e5, r4, n3) : Uint8Array.prototype.set.call(t5, this.subarray(r4, n3), e5), o3;
            }, i2.prototype.fill = function(t5, e5, r4, n3) {
              if ("string" == typeof t5) {
                if ("string" == typeof e5 ? (n3 = e5, e5 = 0, r4 = this.length) : "string" == typeof r4 && (n3 = r4, r4 = this.length), void 0 !== n3 && "string" != typeof n3)
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n3 && !i2.isEncoding(n3))
                  throw new TypeError("Unknown encoding: " + n3);
                if (1 === t5.length) {
                  var o3 = t5.charCodeAt(0);
                  ("utf8" === n3 && o3 < 128 || "latin1" === n3) && (t5 = o3);
                }
              } else
                "number" == typeof t5 ? t5 &= 255 : "boolean" == typeof t5 && (t5 = Number(t5));
              if (e5 < 0 || this.length < e5 || this.length < r4)
                throw new RangeError("Out of range index");
              if (r4 <= e5)
                return this;
              var s3;
              if (e5 >>>= 0, r4 = void 0 === r4 ? this.length : r4 >>> 0, t5 || (t5 = 0), "number" == typeof t5)
                for (s3 = e5; s3 < r4; ++s3)
                  this[s3] = t5;
              else {
                var a3 = i2.isBuffer(t5) ? t5 : i2.from(t5, n3), u3 = a3.length;
                if (0 === u3)
                  throw new TypeError('The value "' + t5 + '" is invalid for argument "value"');
                for (s3 = 0; s3 < r4 - e5; ++s3)
                  this[s3 + e5] = a3[s3 % u3];
              }
              return this;
            };
            var B2 = /[^+/0-9A-Za-z-_]/g;
            function U2(t5, e5) {
              var r4;
              e5 = e5 || 1 / 0;
              for (var n3 = t5.length, o3 = null, i3 = [], s3 = 0; s3 < n3; ++s3) {
                if ((r4 = t5.charCodeAt(s3)) > 55295 && r4 < 57344) {
                  if (!o3) {
                    if (r4 > 56319) {
                      (e5 -= 3) > -1 && i3.push(239, 191, 189);
                      continue;
                    }
                    if (s3 + 1 === n3) {
                      (e5 -= 3) > -1 && i3.push(239, 191, 189);
                      continue;
                    }
                    o3 = r4;
                    continue;
                  }
                  if (r4 < 56320) {
                    (e5 -= 3) > -1 && i3.push(239, 191, 189), o3 = r4;
                    continue;
                  }
                  r4 = 65536 + (o3 - 55296 << 10 | r4 - 56320);
                } else
                  o3 && (e5 -= 3) > -1 && i3.push(239, 191, 189);
                if (o3 = null, r4 < 128) {
                  if ((e5 -= 1) < 0)
                    break;
                  i3.push(r4);
                } else if (r4 < 2048) {
                  if ((e5 -= 2) < 0)
                    break;
                  i3.push(r4 >> 6 | 192, 63 & r4 | 128);
                } else if (r4 < 65536) {
                  if ((e5 -= 3) < 0)
                    break;
                  i3.push(r4 >> 12 | 224, r4 >> 6 & 63 | 128, 63 & r4 | 128);
                } else {
                  if (!(r4 < 1114112))
                    throw new Error("Invalid code point");
                  if ((e5 -= 4) < 0)
                    break;
                  i3.push(r4 >> 18 | 240, r4 >> 12 & 63 | 128, r4 >> 6 & 63 | 128, 63 & r4 | 128);
                }
              }
              return i3;
            }
            function F2(t5) {
              return p(function(t6) {
                if ((t6 = (t6 = t6.split("=")[0]).trim().replace(B2, "")).length < 2)
                  return "";
                for (; t6.length % 4 != 0; )
                  t6 += "=";
                return t6;
              }(t5));
            }
            function L2(t5, e5, r4, n3) {
              for (var o3 = 0; o3 < n3 && !(o3 + r4 >= e5.length || o3 >= t5.length); ++o3)
                e5[o3 + r4] = t5[o3];
              return o3;
            }
            function q2(t5, e5) {
              return t5 instanceof e5 || null != t5 && null != t5.constructor && null != t5.constructor.name && t5.constructor.name === e5.name;
            }
            function V2(t5) {
              return t5 != t5;
            }
            var W2 = function() {
              for (var t5 = "0123456789abcdef", e5 = new Array(256), r4 = 0; r4 < 16; ++r4)
                for (var n3 = 16 * r4, o3 = 0; o3 < 16; ++o3)
                  e5[n3 + o3] = t5[r4] + t5[o3];
              return e5;
            }();
          }(e3 = { exports: {} }, e3.exports), e3.exports;
        }(), v = m.Buffer;
        m.SlowBuffer, m.INSPECT_MAX_BYTES, m.kMaxLength;
        var b = function(t3, e3) {
          return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
            t4.__proto__ = e4;
          } || function(t4, e4) {
            for (var r3 in e4)
              e4.hasOwnProperty(r3) && (t4[r3] = e4[r3]);
          }, b(t3, e3);
        };
        function g(t3, e3) {
          function r3() {
            this.constructor = t3;
          }
          b(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (r3.prototype = e3.prototype, new r3());
        }
        var _ = function(t3) {
          function e3(r3) {
            var n2 = t3.call(this, r3) || this;
            return Object.setPrototypeOf(n2, e3.prototype), n2;
          }
          return g(e3, t3), Object.defineProperty(e3.prototype, "name", { get: function() {
            return "BSONError";
          }, enumerable: false, configurable: true }), e3;
        }(Error), w = function(t3) {
          function e3(r3) {
            var n2 = t3.call(this, r3) || this;
            return Object.setPrototypeOf(n2, e3.prototype), n2;
          }
          return g(e3, t3), Object.defineProperty(e3.prototype, "name", { get: function() {
            return "BSONTypeError";
          }, enumerable: false, configurable: true }), e3;
        }(TypeError);
        function O(t3) {
          return t3 && t3.Math == Math && t3;
        }
        function $() {
          return O("object" === ("undefined" == typeof globalThis ? "undefined" : n(globalThis)) && globalThis) || O("object" === ("undefined" == typeof window ? "undefined" : n(window)) && window) || O("object" === ("undefined" == typeof self ? "undefined" : n(self)) && self) || O("object" === (void 0 === r2.g ? "undefined" : n(r2.g)) && r2.g) || Function("return this")();
        }
        var S = function(t3) {
          var e3, r3 = "object" === n((e3 = $()).navigator) && "ReactNative" === e3.navigator.product ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values." : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
          console.warn(r3);
          for (var o2 = v.alloc(t3), i2 = 0; i2 < t3; ++i2)
            o2[i2] = Math.floor(256 * Math.random());
          return o2;
        }, j = function() {
          if ("undefined" != typeof window) {
            var t3 = window.crypto || window.msCrypto;
            if (t3 && t3.getRandomValues)
              return function(e3) {
                return t3.getRandomValues(v.alloc(e3));
              };
          }
          return void 0 !== r2.g && r2.g.crypto && r2.g.crypto.getRandomValues ? function(t4) {
            return r2.g.crypto.getRandomValues(v.alloc(t4));
          } : S;
        }();
        function A(t3) {
          return "[object Uint8Array]" === Object.prototype.toString.call(t3);
        }
        function P(t3) {
          return "object" === n(t3) && null !== t3;
        }
        function E(t3, e3) {
          var r3 = false;
          return function() {
            for (var n2 = [], o2 = 0; o2 < arguments.length; o2++)
              n2[o2] = arguments[o2];
            return r3 || (console.warn(e3), r3 = true), t3.apply(this, n2);
          };
        }
        function x(t3) {
          if (ArrayBuffer.isView(t3))
            return v.from(t3.buffer, t3.byteOffset, t3.byteLength);
          if (e3 = t3, ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(Object.prototype.toString.call(e3)))
            return v.from(t3);
          var e3;
          throw new w("Must use either Buffer or TypedArray");
        }
        var k = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i, M = function(t3) {
          return "string" == typeof t3 && k.test(t3);
        }, T = function(t3) {
          if (!M(t3))
            throw new w('UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".');
          var e3 = t3.replace(/-/g, "");
          return v.from(e3, "hex");
        }, N = function(t3, e3) {
          return void 0 === e3 && (e3 = true), e3 ? t3.toString("hex", 0, 4) + "-" + t3.toString("hex", 4, 6) + "-" + t3.toString("hex", 6, 8) + "-" + t3.toString("hex", 8, 10) + "-" + t3.toString("hex", 10, 16) : t3.toString("hex");
        }, R = (Math.pow(2, 63), Math.pow(2, 63), Math.pow(2, 53)), I = -Math.pow(2, 53), D = function() {
          function t3(e3, r3) {
            if (!(this instanceof t3))
              return new t3(e3, r3);
            if (!(null == e3 || "string" == typeof e3 || ArrayBuffer.isView(e3) || e3 instanceof ArrayBuffer || Array.isArray(e3)))
              throw new w("Binary can only be constructed from string, Buffer, TypedArray, or Array<number>");
            this.sub_type = null != r3 ? r3 : t3.BSON_BINARY_SUBTYPE_DEFAULT, null == e3 ? (this.buffer = v.alloc(t3.BUFFER_SIZE), this.position = 0) : ("string" == typeof e3 ? this.buffer = v.from(e3, "binary") : Array.isArray(e3) ? this.buffer = v.from(e3) : this.buffer = x(e3), this.position = this.buffer.byteLength);
          }
          return t3.prototype.put = function(e3) {
            if ("string" == typeof e3 && 1 !== e3.length)
              throw new w("only accepts single character String");
            if ("number" != typeof e3 && 1 !== e3.length)
              throw new w("only accepts single character Uint8Array or Array");
            var r3;
            if ((r3 = "string" == typeof e3 ? e3.charCodeAt(0) : "number" == typeof e3 ? e3 : e3[0]) < 0 || r3 > 255)
              throw new w("only accepts number in a valid unsigned byte range 0-255");
            if (this.buffer.length > this.position)
              this.buffer[this.position++] = r3;
            else {
              var n2 = v.alloc(t3.BUFFER_SIZE + this.buffer.length);
              this.buffer.copy(n2, 0, 0, this.buffer.length), this.buffer = n2, this.buffer[this.position++] = r3;
            }
          }, t3.prototype.write = function(t4, e3) {
            if (e3 = "number" == typeof e3 ? e3 : this.position, this.buffer.length < e3 + t4.length) {
              var r3 = v.alloc(this.buffer.length + t4.length);
              this.buffer.copy(r3, 0, 0, this.buffer.length), this.buffer = r3;
            }
            ArrayBuffer.isView(t4) ? (this.buffer.set(x(t4), e3), this.position = e3 + t4.byteLength > this.position ? e3 + t4.length : this.position) : "string" == typeof t4 && (this.buffer.write(t4, e3, t4.length, "binary"), this.position = e3 + t4.length > this.position ? e3 + t4.length : this.position);
          }, t3.prototype.read = function(t4, e3) {
            return e3 = e3 && e3 > 0 ? e3 : this.position, this.buffer.slice(t4, t4 + e3);
          }, t3.prototype.value = function(t4) {
            return (t4 = !!t4) && this.buffer.length === this.position ? this.buffer : t4 ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position);
          }, t3.prototype.length = function() {
            return this.position;
          }, t3.prototype.toJSON = function() {
            return this.buffer.toString("base64");
          }, t3.prototype.toString = function(t4) {
            return this.buffer.toString(t4);
          }, t3.prototype.toExtendedJSON = function(t4) {
            t4 = t4 || {};
            var e3 = this.buffer.toString("base64"), r3 = Number(this.sub_type).toString(16);
            return t4.legacy ? { $binary: e3, $type: 1 === r3.length ? "0" + r3 : r3 } : { $binary: { base64: e3, subType: 1 === r3.length ? "0" + r3 : r3 } };
          }, t3.prototype.toUUID = function() {
            if (this.sub_type === t3.SUBTYPE_UUID)
              return new C(this.buffer.slice(0, this.position));
            throw new _('Binary sub_type "'.concat(this.sub_type, '" is not supported for converting to UUID. Only "').concat(t3.SUBTYPE_UUID, '" is currently supported.'));
          }, t3.fromExtendedJSON = function(e3, r3) {
            var n2, o2;
            if (r3 = r3 || {}, "$binary" in e3 ? r3.legacy && "string" == typeof e3.$binary && "$type" in e3 ? (o2 = e3.$type ? parseInt(e3.$type, 16) : 0, n2 = v.from(e3.$binary, "base64")) : "string" != typeof e3.$binary && (o2 = e3.$binary.subType ? parseInt(e3.$binary.subType, 16) : 0, n2 = v.from(e3.$binary.base64, "base64")) : "$uuid" in e3 && (o2 = 4, n2 = T(e3.$uuid)), !n2)
              throw new w("Unexpected Binary Extended JSON format ".concat(JSON.stringify(e3)));
            return 4 === o2 ? new C(n2) : new t3(n2, o2);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            var t4 = this.value(true);
            return 'new Binary(Buffer.from("'.concat(t4.toString("hex"), '", "hex"), ').concat(this.sub_type, ")");
          }, t3.BSON_BINARY_SUBTYPE_DEFAULT = 0, t3.BUFFER_SIZE = 256, t3.SUBTYPE_DEFAULT = 0, t3.SUBTYPE_FUNCTION = 1, t3.SUBTYPE_BYTE_ARRAY = 2, t3.SUBTYPE_UUID_OLD = 3, t3.SUBTYPE_UUID = 4, t3.SUBTYPE_MD5 = 5, t3.SUBTYPE_ENCRYPTED = 6, t3.SUBTYPE_COLUMN = 7, t3.SUBTYPE_USER_DEFINED = 128, t3;
        }();
        Object.defineProperty(D.prototype, "_bsontype", { value: "Binary" });
        var C = function(t3) {
          function e3(r3) {
            var n2, o2, i2 = this;
            if (null == r3)
              n2 = e3.generate();
            else if (r3 instanceof e3)
              n2 = v.from(r3.buffer), o2 = r3.__id;
            else if (ArrayBuffer.isView(r3) && 16 === r3.byteLength)
              n2 = x(r3);
            else {
              if ("string" != typeof r3)
                throw new w("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
              n2 = T(r3);
            }
            return (i2 = t3.call(this, n2, 4) || this).__id = o2, i2;
          }
          return g(e3, t3), Object.defineProperty(e3.prototype, "id", { get: function() {
            return this.buffer;
          }, set: function(t4) {
            this.buffer = t4, e3.cacheHexString && (this.__id = N(t4));
          }, enumerable: false, configurable: true }), e3.prototype.toHexString = function(t4) {
            if (void 0 === t4 && (t4 = true), e3.cacheHexString && this.__id)
              return this.__id;
            var r3 = N(this.id, t4);
            return e3.cacheHexString && (this.__id = r3), r3;
          }, e3.prototype.toString = function(t4) {
            return t4 ? this.id.toString(t4) : this.toHexString();
          }, e3.prototype.toJSON = function() {
            return this.toHexString();
          }, e3.prototype.equals = function(t4) {
            if (!t4)
              return false;
            if (t4 instanceof e3)
              return t4.id.equals(this.id);
            try {
              return new e3(t4).id.equals(this.id);
            } catch (t5) {
              return false;
            }
          }, e3.prototype.toBinary = function() {
            return new D(this.id, D.SUBTYPE_UUID);
          }, e3.generate = function() {
            var t4 = j(16);
            return t4[6] = 15 & t4[6] | 64, t4[8] = 63 & t4[8] | 128, v.from(t4);
          }, e3.isValid = function(t4) {
            return !!t4 && (t4 instanceof e3 || ("string" == typeof t4 ? M(t4) : !!A(t4) && 16 === t4.length && 64 == (240 & t4[6]) && 128 == (128 & t4[8])));
          }, e3.createFromHexString = function(t4) {
            return new e3(T(t4));
          }, e3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, e3.prototype.inspect = function() {
            return 'new UUID("'.concat(this.toHexString(), '")');
          }, e3;
        }(D), B = function() {
          function t3(e3, r3) {
            if (!(this instanceof t3))
              return new t3(e3, r3);
            this.code = e3, this.scope = r3;
          }
          return t3.prototype.toJSON = function() {
            return { code: this.code, scope: this.scope };
          }, t3.prototype.toExtendedJSON = function() {
            return this.scope ? { $code: this.code, $scope: this.scope } : { $code: this.code };
          }, t3.fromExtendedJSON = function(e3) {
            return new t3(e3.$code, e3.$scope);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            var t4 = this.toJSON();
            return 'new Code("'.concat(String(t4.code), '"').concat(t4.scope ? ", ".concat(JSON.stringify(t4.scope)) : "", ")");
          }, t3;
        }();
        Object.defineProperty(B.prototype, "_bsontype", { value: "Code" });
        var U = function() {
          function t3(e3, r3, n2, o2) {
            if (!(this instanceof t3))
              return new t3(e3, r3, n2, o2);
            var i2 = e3.split(".");
            2 === i2.length && (n2 = i2.shift(), e3 = i2.shift()), this.collection = e3, this.oid = r3, this.db = n2, this.fields = o2 || {};
          }
          return Object.defineProperty(t3.prototype, "namespace", { get: function() {
            return this.collection;
          }, set: function(t4) {
            this.collection = t4;
          }, enumerable: false, configurable: true }), t3.prototype.toJSON = function() {
            var t4 = Object.assign({ $ref: this.collection, $id: this.oid }, this.fields);
            return null != this.db && (t4.$db = this.db), t4;
          }, t3.prototype.toExtendedJSON = function(t4) {
            t4 = t4 || {};
            var e3 = { $ref: this.collection, $id: this.oid };
            return t4.legacy ? e3 : (this.db && (e3.$db = this.db), e3 = Object.assign(e3, this.fields));
          }, t3.fromExtendedJSON = function(e3) {
            var r3 = Object.assign({}, e3);
            return delete r3.$ref, delete r3.$id, delete r3.$db, new t3(e3.$ref, e3.$id, e3.$db, r3);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            var t4 = void 0 === this.oid || void 0 === this.oid.toString ? this.oid : this.oid.toString();
            return 'new DBRef("'.concat(this.namespace, '", new ObjectId("').concat(String(t4), '")').concat(this.db ? ', "'.concat(this.db, '"') : "", ")");
          }, t3;
        }();
        Object.defineProperty(U.prototype, "_bsontype", { value: "DBRef" });
        var F = void 0;
        try {
          F = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch (t3) {
        }
        var L = 4294967296, q = 18446744073709552e3, V = q / 2, W = {}, J = {}, H = function() {
          function t3(e3, r3, n2) {
            if (void 0 === e3 && (e3 = 0), !(this instanceof t3))
              return new t3(e3, r3, n2);
            "bigint" == typeof e3 ? Object.assign(this, t3.fromBigInt(e3, !!r3)) : "string" == typeof e3 ? Object.assign(this, t3.fromString(e3, !!r3)) : (this.low = 0 | e3, this.high = 0 | r3, this.unsigned = !!n2), Object.defineProperty(this, "__isLong__", { value: true, configurable: false, writable: false, enumerable: false });
          }
          return t3.fromBits = function(e3, r3, n2) {
            return new t3(e3, r3, n2);
          }, t3.fromInt = function(e3, r3) {
            var n2, o2, i2;
            return r3 ? (i2 = 0 <= (e3 >>>= 0) && e3 < 256) && (o2 = J[e3]) ? o2 : (n2 = t3.fromBits(e3, (0 | e3) < 0 ? -1 : 0, true), i2 && (J[e3] = n2), n2) : (i2 = -128 <= (e3 |= 0) && e3 < 128) && (o2 = W[e3]) ? o2 : (n2 = t3.fromBits(e3, e3 < 0 ? -1 : 0, false), i2 && (W[e3] = n2), n2);
          }, t3.fromNumber = function(e3, r3) {
            if (isNaN(e3))
              return r3 ? t3.UZERO : t3.ZERO;
            if (r3) {
              if (e3 < 0)
                return t3.UZERO;
              if (e3 >= q)
                return t3.MAX_UNSIGNED_VALUE;
            } else {
              if (e3 <= -V)
                return t3.MIN_VALUE;
              if (e3 + 1 >= V)
                return t3.MAX_VALUE;
            }
            return e3 < 0 ? t3.fromNumber(-e3, r3).neg() : t3.fromBits(e3 % L | 0, e3 / L | 0, r3);
          }, t3.fromBigInt = function(e3, r3) {
            return t3.fromString(e3.toString(), r3);
          }, t3.fromString = function(e3, r3, n2) {
            if (0 === e3.length)
              throw Error("empty string");
            if ("NaN" === e3 || "Infinity" === e3 || "+Infinity" === e3 || "-Infinity" === e3)
              return t3.ZERO;
            if ("number" == typeof r3 ? (n2 = r3, r3 = false) : r3 = !!r3, (n2 = n2 || 10) < 2 || 36 < n2)
              throw RangeError("radix");
            var o2;
            if ((o2 = e3.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (0 === o2)
              return t3.fromString(e3.substring(1), r3, n2).neg();
            for (var i2 = t3.fromNumber(Math.pow(n2, 8)), s2 = t3.ZERO, a2 = 0; a2 < e3.length; a2 += 8) {
              var u2 = Math.min(8, e3.length - a2), c2 = parseInt(e3.substring(a2, a2 + u2), n2);
              if (u2 < 8) {
                var f2 = t3.fromNumber(Math.pow(n2, u2));
                s2 = s2.mul(f2).add(t3.fromNumber(c2));
              } else
                s2 = (s2 = s2.mul(i2)).add(t3.fromNumber(c2));
            }
            return s2.unsigned = r3, s2;
          }, t3.fromBytes = function(e3, r3, n2) {
            return n2 ? t3.fromBytesLE(e3, r3) : t3.fromBytesBE(e3, r3);
          }, t3.fromBytesLE = function(e3, r3) {
            return new t3(e3[0] | e3[1] << 8 | e3[2] << 16 | e3[3] << 24, e3[4] | e3[5] << 8 | e3[6] << 16 | e3[7] << 24, r3);
          }, t3.fromBytesBE = function(e3, r3) {
            return new t3(e3[4] << 24 | e3[5] << 16 | e3[6] << 8 | e3[7], e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], r3);
          }, t3.isLong = function(t4) {
            return P(t4) && true === t4.__isLong__;
          }, t3.fromValue = function(e3, r3) {
            return "number" == typeof e3 ? t3.fromNumber(e3, r3) : "string" == typeof e3 ? t3.fromString(e3, r3) : t3.fromBits(e3.low, e3.high, "boolean" == typeof r3 ? r3 : e3.unsigned);
          }, t3.prototype.add = function(e3) {
            t3.isLong(e3) || (e3 = t3.fromValue(e3));
            var r3 = this.high >>> 16, n2 = 65535 & this.high, o2 = this.low >>> 16, i2 = 65535 & this.low, s2 = e3.high >>> 16, a2 = 65535 & e3.high, u2 = e3.low >>> 16, c2 = 0, f2 = 0, l2 = 0, p2 = 0;
            return l2 += (p2 += i2 + (65535 & e3.low)) >>> 16, p2 &= 65535, f2 += (l2 += o2 + u2) >>> 16, l2 &= 65535, c2 += (f2 += n2 + a2) >>> 16, f2 &= 65535, c2 += r3 + s2, c2 &= 65535, t3.fromBits(l2 << 16 | p2, c2 << 16 | f2, this.unsigned);
          }, t3.prototype.and = function(e3) {
            return t3.isLong(e3) || (e3 = t3.fromValue(e3)), t3.fromBits(this.low & e3.low, this.high & e3.high, this.unsigned);
          }, t3.prototype.compare = function(e3) {
            if (t3.isLong(e3) || (e3 = t3.fromValue(e3)), this.eq(e3))
              return 0;
            var r3 = this.isNegative(), n2 = e3.isNegative();
            return r3 && !n2 ? -1 : !r3 && n2 ? 1 : this.unsigned ? e3.high >>> 0 > this.high >>> 0 || e3.high === this.high && e3.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e3).isNegative() ? -1 : 1;
          }, t3.prototype.comp = function(t4) {
            return this.compare(t4);
          }, t3.prototype.divide = function(e3) {
            if (t3.isLong(e3) || (e3 = t3.fromValue(e3)), e3.isZero())
              throw Error("division by zero");
            if (F) {
              if (!this.unsigned && -2147483648 === this.high && -1 === e3.low && -1 === e3.high)
                return this;
              var r3 = (this.unsigned ? F.div_u : F.div_s)(this.low, this.high, e3.low, e3.high);
              return t3.fromBits(r3, F.get_high(), this.unsigned);
            }
            if (this.isZero())
              return this.unsigned ? t3.UZERO : t3.ZERO;
            var n2, o2, i2;
            if (this.unsigned) {
              if (e3.unsigned || (e3 = e3.toUnsigned()), e3.gt(this))
                return t3.UZERO;
              if (e3.gt(this.shru(1)))
                return t3.UONE;
              i2 = t3.UZERO;
            } else {
              if (this.eq(t3.MIN_VALUE))
                return e3.eq(t3.ONE) || e3.eq(t3.NEG_ONE) ? t3.MIN_VALUE : e3.eq(t3.MIN_VALUE) ? t3.ONE : (n2 = this.shr(1).div(e3).shl(1)).eq(t3.ZERO) ? e3.isNegative() ? t3.ONE : t3.NEG_ONE : (o2 = this.sub(e3.mul(n2)), i2 = n2.add(o2.div(e3)));
              if (e3.eq(t3.MIN_VALUE))
                return this.unsigned ? t3.UZERO : t3.ZERO;
              if (this.isNegative())
                return e3.isNegative() ? this.neg().div(e3.neg()) : this.neg().div(e3).neg();
              if (e3.isNegative())
                return this.div(e3.neg()).neg();
              i2 = t3.ZERO;
            }
            for (o2 = this; o2.gte(e3); ) {
              n2 = Math.max(1, Math.floor(o2.toNumber() / e3.toNumber()));
              for (var s2 = Math.ceil(Math.log(n2) / Math.LN2), a2 = s2 <= 48 ? 1 : Math.pow(2, s2 - 48), u2 = t3.fromNumber(n2), c2 = u2.mul(e3); c2.isNegative() || c2.gt(o2); )
                n2 -= a2, c2 = (u2 = t3.fromNumber(n2, this.unsigned)).mul(e3);
              u2.isZero() && (u2 = t3.ONE), i2 = i2.add(u2), o2 = o2.sub(c2);
            }
            return i2;
          }, t3.prototype.div = function(t4) {
            return this.divide(t4);
          }, t3.prototype.equals = function(e3) {
            return t3.isLong(e3) || (e3 = t3.fromValue(e3)), (this.unsigned === e3.unsigned || this.high >>> 31 != 1 || e3.high >>> 31 != 1) && this.high === e3.high && this.low === e3.low;
          }, t3.prototype.eq = function(t4) {
            return this.equals(t4);
          }, t3.prototype.getHighBits = function() {
            return this.high;
          }, t3.prototype.getHighBitsUnsigned = function() {
            return this.high >>> 0;
          }, t3.prototype.getLowBits = function() {
            return this.low;
          }, t3.prototype.getLowBitsUnsigned = function() {
            return this.low >>> 0;
          }, t3.prototype.getNumBitsAbs = function() {
            if (this.isNegative())
              return this.eq(t3.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
            var e3, r3 = 0 !== this.high ? this.high : this.low;
            for (e3 = 31; e3 > 0 && 0 == (r3 & 1 << e3); e3--)
              ;
            return 0 !== this.high ? e3 + 33 : e3 + 1;
          }, t3.prototype.greaterThan = function(t4) {
            return this.comp(t4) > 0;
          }, t3.prototype.gt = function(t4) {
            return this.greaterThan(t4);
          }, t3.prototype.greaterThanOrEqual = function(t4) {
            return this.comp(t4) >= 0;
          }, t3.prototype.gte = function(t4) {
            return this.greaterThanOrEqual(t4);
          }, t3.prototype.ge = function(t4) {
            return this.greaterThanOrEqual(t4);
          }, t3.prototype.isEven = function() {
            return 0 == (1 & this.low);
          }, t3.prototype.isNegative = function() {
            return !this.unsigned && this.high < 0;
          }, t3.prototype.isOdd = function() {
            return 1 == (1 & this.low);
          }, t3.prototype.isPositive = function() {
            return this.unsigned || this.high >= 0;
          }, t3.prototype.isZero = function() {
            return 0 === this.high && 0 === this.low;
          }, t3.prototype.lessThan = function(t4) {
            return this.comp(t4) < 0;
          }, t3.prototype.lt = function(t4) {
            return this.lessThan(t4);
          }, t3.prototype.lessThanOrEqual = function(t4) {
            return this.comp(t4) <= 0;
          }, t3.prototype.lte = function(t4) {
            return this.lessThanOrEqual(t4);
          }, t3.prototype.modulo = function(e3) {
            if (t3.isLong(e3) || (e3 = t3.fromValue(e3)), F) {
              var r3 = (this.unsigned ? F.rem_u : F.rem_s)(this.low, this.high, e3.low, e3.high);
              return t3.fromBits(r3, F.get_high(), this.unsigned);
            }
            return this.sub(this.div(e3).mul(e3));
          }, t3.prototype.mod = function(t4) {
            return this.modulo(t4);
          }, t3.prototype.rem = function(t4) {
            return this.modulo(t4);
          }, t3.prototype.multiply = function(e3) {
            if (this.isZero())
              return t3.ZERO;
            if (t3.isLong(e3) || (e3 = t3.fromValue(e3)), F) {
              var r3 = F.mul(this.low, this.high, e3.low, e3.high);
              return t3.fromBits(r3, F.get_high(), this.unsigned);
            }
            if (e3.isZero())
              return t3.ZERO;
            if (this.eq(t3.MIN_VALUE))
              return e3.isOdd() ? t3.MIN_VALUE : t3.ZERO;
            if (e3.eq(t3.MIN_VALUE))
              return this.isOdd() ? t3.MIN_VALUE : t3.ZERO;
            if (this.isNegative())
              return e3.isNegative() ? this.neg().mul(e3.neg()) : this.neg().mul(e3).neg();
            if (e3.isNegative())
              return this.mul(e3.neg()).neg();
            if (this.lt(t3.TWO_PWR_24) && e3.lt(t3.TWO_PWR_24))
              return t3.fromNumber(this.toNumber() * e3.toNumber(), this.unsigned);
            var n2 = this.high >>> 16, o2 = 65535 & this.high, i2 = this.low >>> 16, s2 = 65535 & this.low, a2 = e3.high >>> 16, u2 = 65535 & e3.high, c2 = e3.low >>> 16, f2 = 65535 & e3.low, l2 = 0, p2 = 0, h2 = 0, y2 = 0;
            return h2 += (y2 += s2 * f2) >>> 16, y2 &= 65535, p2 += (h2 += i2 * f2) >>> 16, h2 &= 65535, p2 += (h2 += s2 * c2) >>> 16, h2 &= 65535, l2 += (p2 += o2 * f2) >>> 16, p2 &= 65535, l2 += (p2 += i2 * c2) >>> 16, p2 &= 65535, l2 += (p2 += s2 * u2) >>> 16, p2 &= 65535, l2 += n2 * f2 + o2 * c2 + i2 * u2 + s2 * a2, l2 &= 65535, t3.fromBits(h2 << 16 | y2, l2 << 16 | p2, this.unsigned);
          }, t3.prototype.mul = function(t4) {
            return this.multiply(t4);
          }, t3.prototype.negate = function() {
            return !this.unsigned && this.eq(t3.MIN_VALUE) ? t3.MIN_VALUE : this.not().add(t3.ONE);
          }, t3.prototype.neg = function() {
            return this.negate();
          }, t3.prototype.not = function() {
            return t3.fromBits(~this.low, ~this.high, this.unsigned);
          }, t3.prototype.notEquals = function(t4) {
            return !this.equals(t4);
          }, t3.prototype.neq = function(t4) {
            return this.notEquals(t4);
          }, t3.prototype.ne = function(t4) {
            return this.notEquals(t4);
          }, t3.prototype.or = function(e3) {
            return t3.isLong(e3) || (e3 = t3.fromValue(e3)), t3.fromBits(this.low | e3.low, this.high | e3.high, this.unsigned);
          }, t3.prototype.shiftLeft = function(e3) {
            return t3.isLong(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? t3.fromBits(this.low << e3, this.high << e3 | this.low >>> 32 - e3, this.unsigned) : t3.fromBits(0, this.low << e3 - 32, this.unsigned);
          }, t3.prototype.shl = function(t4) {
            return this.shiftLeft(t4);
          }, t3.prototype.shiftRight = function(e3) {
            return t3.isLong(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? t3.fromBits(this.low >>> e3 | this.high << 32 - e3, this.high >> e3, this.unsigned) : t3.fromBits(this.high >> e3 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, t3.prototype.shr = function(t4) {
            return this.shiftRight(t4);
          }, t3.prototype.shiftRightUnsigned = function(e3) {
            if (t3.isLong(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63))
              return this;
            var r3 = this.high;
            if (e3 < 32) {
              var n2 = this.low;
              return t3.fromBits(n2 >>> e3 | r3 << 32 - e3, r3 >>> e3, this.unsigned);
            }
            return 32 === e3 ? t3.fromBits(r3, 0, this.unsigned) : t3.fromBits(r3 >>> e3 - 32, 0, this.unsigned);
          }, t3.prototype.shr_u = function(t4) {
            return this.shiftRightUnsigned(t4);
          }, t3.prototype.shru = function(t4) {
            return this.shiftRightUnsigned(t4);
          }, t3.prototype.subtract = function(e3) {
            return t3.isLong(e3) || (e3 = t3.fromValue(e3)), this.add(e3.neg());
          }, t3.prototype.sub = function(t4) {
            return this.subtract(t4);
          }, t3.prototype.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, t3.prototype.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * L + (this.low >>> 0) : this.high * L + (this.low >>> 0);
          }, t3.prototype.toBigInt = function() {
            return BigInt(this.toString());
          }, t3.prototype.toBytes = function(t4) {
            return t4 ? this.toBytesLE() : this.toBytesBE();
          }, t3.prototype.toBytesLE = function() {
            var t4 = this.high, e3 = this.low;
            return [255 & e3, e3 >>> 8 & 255, e3 >>> 16 & 255, e3 >>> 24, 255 & t4, t4 >>> 8 & 255, t4 >>> 16 & 255, t4 >>> 24];
          }, t3.prototype.toBytesBE = function() {
            var t4 = this.high, e3 = this.low;
            return [t4 >>> 24, t4 >>> 16 & 255, t4 >>> 8 & 255, 255 & t4, e3 >>> 24, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3];
          }, t3.prototype.toSigned = function() {
            return this.unsigned ? t3.fromBits(this.low, this.high, false) : this;
          }, t3.prototype.toString = function(e3) {
            if ((e3 = e3 || 10) < 2 || 36 < e3)
              throw RangeError("radix");
            if (this.isZero())
              return "0";
            if (this.isNegative()) {
              if (this.eq(t3.MIN_VALUE)) {
                var r3 = t3.fromNumber(e3), n2 = this.div(r3), o2 = n2.mul(r3).sub(this);
                return n2.toString(e3) + o2.toInt().toString(e3);
              }
              return "-" + this.neg().toString(e3);
            }
            for (var i2 = t3.fromNumber(Math.pow(e3, 6), this.unsigned), s2 = this, a2 = ""; ; ) {
              var u2 = s2.div(i2), c2 = (s2.sub(u2.mul(i2)).toInt() >>> 0).toString(e3);
              if ((s2 = u2).isZero())
                return c2 + a2;
              for (; c2.length < 6; )
                c2 = "0" + c2;
              a2 = "" + c2 + a2;
            }
          }, t3.prototype.toUnsigned = function() {
            return this.unsigned ? this : t3.fromBits(this.low, this.high, true);
          }, t3.prototype.xor = function(e3) {
            return t3.isLong(e3) || (e3 = t3.fromValue(e3)), t3.fromBits(this.low ^ e3.low, this.high ^ e3.high, this.unsigned);
          }, t3.prototype.eqz = function() {
            return this.isZero();
          }, t3.prototype.le = function(t4) {
            return this.lessThanOrEqual(t4);
          }, t3.prototype.toExtendedJSON = function(t4) {
            return t4 && t4.relaxed ? this.toNumber() : { $numberLong: this.toString() };
          }, t3.fromExtendedJSON = function(e3, r3) {
            var n2 = t3.fromString(e3.$numberLong);
            return r3 && r3.relaxed ? n2.toNumber() : n2;
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            return 'new Long("'.concat(this.toString(), '"').concat(this.unsigned ? ", true" : "", ")");
          }, t3.TWO_PWR_24 = t3.fromInt(16777216), t3.MAX_UNSIGNED_VALUE = t3.fromBits(-1, -1, true), t3.ZERO = t3.fromInt(0), t3.UZERO = t3.fromInt(0, true), t3.ONE = t3.fromInt(1), t3.UONE = t3.fromInt(1, true), t3.NEG_ONE = t3.fromInt(-1), t3.MAX_VALUE = t3.fromBits(-1, 2147483647, false), t3.MIN_VALUE = t3.fromBits(0, -2147483648, false), t3;
        }();
        Object.defineProperty(H.prototype, "__isLong__", { value: true }), Object.defineProperty(H.prototype, "_bsontype", { value: "Long" });
        var K = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/, z = /^(\+|-)?(Infinity|inf)$/i, Q = /^(\+|-)?NaN$/i, G = 6111, Y = -6176, Z = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(), X = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(), tt = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(), et = /^([-+])?(\d+)?$/;
        function rt(t3) {
          return !isNaN(parseInt(t3, 10));
        }
        function nt(t3) {
          var e3 = H.fromNumber(1e9), r3 = H.fromNumber(0);
          if (!(t3.parts[0] || t3.parts[1] || t3.parts[2] || t3.parts[3]))
            return { quotient: t3, rem: r3 };
          for (var n2 = 0; n2 <= 3; n2++)
            r3 = (r3 = r3.shiftLeft(32)).add(new H(t3.parts[n2], 0)), t3.parts[n2] = r3.div(e3).low, r3 = r3.modulo(e3);
          return { quotient: t3, rem: r3 };
        }
        function ot(t3, e3) {
          throw new w('"'.concat(t3, '" is not a valid Decimal128 string - ').concat(e3));
        }
        var it = function() {
          function t3(e3) {
            if (!(this instanceof t3))
              return new t3(e3);
            if ("string" == typeof e3)
              this.bytes = t3.fromString(e3).bytes;
            else {
              if (!A(e3))
                throw new w("Decimal128 must take a Buffer or string");
              if (16 !== e3.byteLength)
                throw new w("Decimal128 must take a Buffer of 16 bytes");
              this.bytes = e3;
            }
          }
          return t3.fromString = function(e3) {
            var r3, n2 = false, o2 = false, i2 = false, s2 = 0, a2 = 0, u2 = 0, c2 = 0, f2 = 0, l2 = [0], p2 = 0, h2 = 0, y2 = 0, d2 = 0, m2 = 0, b2 = 0, g2 = new H(0, 0), _2 = new H(0, 0), O2 = 0;
            if (e3.length >= 7e3)
              throw new w(e3 + " not a valid Decimal128 string");
            var $2 = e3.match(K), S2 = e3.match(z), j2 = e3.match(Q);
            if (!$2 && !S2 && !j2 || 0 === e3.length)
              throw new w(e3 + " not a valid Decimal128 string");
            if ($2) {
              var A2 = $2[2], P2 = $2[4], E2 = $2[5], x2 = $2[6];
              P2 && void 0 === x2 && ot(e3, "missing exponent power"), P2 && void 0 === A2 && ot(e3, "missing exponent base"), void 0 === P2 && (E2 || x2) && ot(e3, "missing e before exponent");
            }
            if ("+" !== e3[O2] && "-" !== e3[O2] || (n2 = "-" === e3[O2++]), !rt(e3[O2]) && "." !== e3[O2]) {
              if ("i" === e3[O2] || "I" === e3[O2])
                return new t3(v.from(n2 ? X : tt));
              if ("N" === e3[O2])
                return new t3(v.from(Z));
            }
            for (; rt(e3[O2]) || "." === e3[O2]; )
              "." !== e3[O2] ? (p2 < 34 && ("0" !== e3[O2] || i2) && (i2 || (f2 = a2), i2 = true, l2[h2++] = parseInt(e3[O2], 10), p2 += 1), i2 && (u2 += 1), o2 && (c2 += 1), a2 += 1, O2 += 1) : (o2 && ot(e3, "contains multiple periods"), o2 = true, O2 += 1);
            if (o2 && !a2)
              throw new w(e3 + " not a valid Decimal128 string");
            if ("e" === e3[O2] || "E" === e3[O2]) {
              var k2 = e3.substr(++O2).match(et);
              if (!k2 || !k2[2])
                return new t3(v.from(Z));
              m2 = parseInt(k2[0], 10), O2 += k2[0].length;
            }
            if (e3[O2])
              return new t3(v.from(Z));
            if (y2 = 0, p2) {
              if (d2 = p2 - 1, 1 !== (s2 = u2))
                for (; 0 === l2[f2 + s2 - 1]; )
                  s2 -= 1;
            } else
              y2 = 0, d2 = 0, l2[0] = 0, u2 = 1, p2 = 1, s2 = 0;
            for (m2 <= c2 && c2 - m2 > 16384 ? m2 = Y : m2 -= c2; m2 > G; ) {
              if ((d2 += 1) - y2 > 34) {
                if (l2.join("").match(/^0+$/)) {
                  m2 = G;
                  break;
                }
                ot(e3, "overflow");
              }
              m2 -= 1;
            }
            for (; m2 < Y || p2 < u2; ) {
              if (0 === d2 && s2 < p2) {
                m2 = Y, s2 = 0;
                break;
              }
              if (p2 < u2 ? u2 -= 1 : d2 -= 1, m2 < G)
                m2 += 1;
              else {
                if (l2.join("").match(/^0+$/)) {
                  m2 = G;
                  break;
                }
                ot(e3, "overflow");
              }
            }
            if (d2 - y2 + 1 < s2) {
              var M2 = a2;
              o2 && (f2 += 1, M2 += 1), n2 && (f2 += 1, M2 += 1);
              var T2 = parseInt(e3[f2 + d2 + 1], 10), N2 = 0;
              if (T2 >= 5 && (N2 = 1, 5 === T2)) {
                for (N2 = l2[d2] % 2 == 1 ? 1 : 0, b2 = f2 + d2 + 2; b2 < M2; b2++)
                  if (parseInt(e3[b2], 10)) {
                    N2 = 1;
                    break;
                  }
              }
              if (N2) {
                for (var R2 = d2; R2 >= 0; R2--)
                  if (++l2[R2] > 9 && (l2[R2] = 0, 0 === R2)) {
                    if (!(m2 < G))
                      return new t3(v.from(n2 ? X : tt));
                    m2 += 1, l2[R2] = 1;
                  }
              }
            }
            if (g2 = H.fromNumber(0), _2 = H.fromNumber(0), 0 === s2)
              g2 = H.fromNumber(0), _2 = H.fromNumber(0);
            else if (d2 - y2 < 17)
              for (R2 = y2, _2 = H.fromNumber(l2[R2++]), g2 = new H(0, 0); R2 <= d2; R2++)
                _2 = (_2 = _2.multiply(H.fromNumber(10))).add(H.fromNumber(l2[R2]));
            else {
              for (R2 = y2, g2 = H.fromNumber(l2[R2++]); R2 <= d2 - 17; R2++)
                g2 = (g2 = g2.multiply(H.fromNumber(10))).add(H.fromNumber(l2[R2]));
              for (_2 = H.fromNumber(l2[R2++]); R2 <= d2; R2++)
                _2 = (_2 = _2.multiply(H.fromNumber(10))).add(H.fromNumber(l2[R2]));
            }
            var I2, D2, C2, B2, U2 = function(t4, e4) {
              if (!t4 && !e4)
                return { high: H.fromNumber(0), low: H.fromNumber(0) };
              var r4 = t4.shiftRightUnsigned(32), n3 = new H(t4.getLowBits(), 0), o3 = e4.shiftRightUnsigned(32), i3 = new H(e4.getLowBits(), 0), s3 = r4.multiply(o3), a3 = r4.multiply(i3), u3 = n3.multiply(o3), c3 = n3.multiply(i3);
              return s3 = s3.add(a3.shiftRightUnsigned(32)), a3 = new H(a3.getLowBits(), 0).add(u3).add(c3.shiftRightUnsigned(32)), { high: s3 = s3.add(a3.shiftRightUnsigned(32)), low: c3 = a3.shiftLeft(32).add(new H(c3.getLowBits(), 0)) };
            }(g2, H.fromString("100000000000000000"));
            U2.low = U2.low.add(_2), D2 = _2, ((C2 = (I2 = U2.low).high >>> 0) < (B2 = D2.high >>> 0) || C2 === B2 && I2.low >>> 0 < D2.low >>> 0) && (U2.high = U2.high.add(H.fromNumber(1))), r3 = m2 + 6176;
            var F2 = { low: H.fromNumber(0), high: H.fromNumber(0) };
            U2.high.shiftRightUnsigned(49).and(H.fromNumber(1)).equals(H.fromNumber(1)) ? (F2.high = F2.high.or(H.fromNumber(3).shiftLeft(61)), F2.high = F2.high.or(H.fromNumber(r3).and(H.fromNumber(16383).shiftLeft(47))), F2.high = F2.high.or(U2.high.and(H.fromNumber(140737488355327)))) : (F2.high = F2.high.or(H.fromNumber(16383 & r3).shiftLeft(49)), F2.high = F2.high.or(U2.high.and(H.fromNumber(562949953421311)))), F2.low = U2.low, n2 && (F2.high = F2.high.or(H.fromString("9223372036854775808")));
            var L2 = v.alloc(16);
            return O2 = 0, L2[O2++] = 255 & F2.low.low, L2[O2++] = F2.low.low >> 8 & 255, L2[O2++] = F2.low.low >> 16 & 255, L2[O2++] = F2.low.low >> 24 & 255, L2[O2++] = 255 & F2.low.high, L2[O2++] = F2.low.high >> 8 & 255, L2[O2++] = F2.low.high >> 16 & 255, L2[O2++] = F2.low.high >> 24 & 255, L2[O2++] = 255 & F2.high.low, L2[O2++] = F2.high.low >> 8 & 255, L2[O2++] = F2.high.low >> 16 & 255, L2[O2++] = F2.high.low >> 24 & 255, L2[O2++] = 255 & F2.high.high, L2[O2++] = F2.high.high >> 8 & 255, L2[O2++] = F2.high.high >> 16 & 255, L2[O2++] = F2.high.high >> 24 & 255, new t3(L2);
          }, t3.prototype.toString = function() {
            for (var t4, e3 = 0, r3 = new Array(36), n2 = 0; n2 < r3.length; n2++)
              r3[n2] = 0;
            var o2, i2, s2, a2 = 0, u2 = false, c2 = { parts: [0, 0, 0, 0] }, f2 = [];
            a2 = 0;
            var l2 = this.bytes, p2 = l2[a2++] | l2[a2++] << 8 | l2[a2++] << 16 | l2[a2++] << 24, h2 = l2[a2++] | l2[a2++] << 8 | l2[a2++] << 16 | l2[a2++] << 24, y2 = l2[a2++] | l2[a2++] << 8 | l2[a2++] << 16 | l2[a2++] << 24, d2 = l2[a2++] | l2[a2++] << 8 | l2[a2++] << 16 | l2[a2++] << 24;
            a2 = 0, (new H(p2, h2), new H(y2, d2)).lessThan(H.ZERO) && f2.push("-");
            var m2 = d2 >> 26 & 31;
            if (m2 >> 3 == 3) {
              if (30 === m2)
                return f2.join("") + "Infinity";
              if (31 === m2)
                return "NaN";
              t4 = d2 >> 15 & 16383, o2 = 8 + (d2 >> 14 & 1);
            } else
              o2 = d2 >> 14 & 7, t4 = d2 >> 17 & 16383;
            var v2 = t4 - 6176;
            if (c2.parts[0] = (16383 & d2) + ((15 & o2) << 14), c2.parts[1] = y2, c2.parts[2] = h2, c2.parts[3] = p2, 0 === c2.parts[0] && 0 === c2.parts[1] && 0 === c2.parts[2] && 0 === c2.parts[3])
              u2 = true;
            else
              for (s2 = 3; s2 >= 0; s2--) {
                var b2 = 0, g2 = nt(c2);
                if (c2 = g2.quotient, b2 = g2.rem.low)
                  for (i2 = 8; i2 >= 0; i2--)
                    r3[9 * s2 + i2] = b2 % 10, b2 = Math.floor(b2 / 10);
              }
            if (u2)
              e3 = 1, r3[a2] = 0;
            else
              for (e3 = 36; !r3[a2]; )
                e3 -= 1, a2 += 1;
            var _2 = e3 - 1 + v2;
            if (_2 >= 34 || _2 <= -7 || v2 > 0) {
              if (e3 > 34)
                return f2.push("".concat(0)), v2 > 0 ? f2.push("E+".concat(v2)) : v2 < 0 && f2.push("E".concat(v2)), f2.join("");
              for (f2.push("".concat(r3[a2++])), (e3 -= 1) && f2.push("."), n2 = 0; n2 < e3; n2++)
                f2.push("".concat(r3[a2++]));
              f2.push("E"), _2 > 0 ? f2.push("+".concat(_2)) : f2.push("".concat(_2));
            } else if (v2 >= 0)
              for (n2 = 0; n2 < e3; n2++)
                f2.push("".concat(r3[a2++]));
            else {
              var w2 = e3 + v2;
              if (w2 > 0)
                for (n2 = 0; n2 < w2; n2++)
                  f2.push("".concat(r3[a2++]));
              else
                f2.push("0");
              for (f2.push("."); w2++ < 0; )
                f2.push("0");
              for (n2 = 0; n2 < e3 - Math.max(w2 - 1, 0); n2++)
                f2.push("".concat(r3[a2++]));
            }
            return f2.join("");
          }, t3.prototype.toJSON = function() {
            return { $numberDecimal: this.toString() };
          }, t3.prototype.toExtendedJSON = function() {
            return { $numberDecimal: this.toString() };
          }, t3.fromExtendedJSON = function(e3) {
            return t3.fromString(e3.$numberDecimal);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            return 'new Decimal128("'.concat(this.toString(), '")');
          }, t3;
        }();
        Object.defineProperty(it.prototype, "_bsontype", { value: "Decimal128" });
        var st = function() {
          function t3(e3) {
            if (!(this instanceof t3))
              return new t3(e3);
            e3 instanceof Number && (e3 = e3.valueOf()), this.value = +e3;
          }
          return t3.prototype.valueOf = function() {
            return this.value;
          }, t3.prototype.toJSON = function() {
            return this.value;
          }, t3.prototype.toString = function(t4) {
            return this.value.toString(t4);
          }, t3.prototype.toExtendedJSON = function(t4) {
            return t4 && (t4.legacy || t4.relaxed && isFinite(this.value)) ? this.value : Object.is(Math.sign(this.value), -0) ? { $numberDouble: "-".concat(this.value.toFixed(1)) } : (Number.isInteger(this.value) ? (e3 = this.value.toFixed(1)).length >= 13 && (e3 = this.value.toExponential(13).toUpperCase()) : e3 = this.value.toString(), { $numberDouble: e3 });
            var e3;
          }, t3.fromExtendedJSON = function(e3, r3) {
            var n2 = parseFloat(e3.$numberDouble);
            return r3 && r3.relaxed ? n2 : new t3(n2);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            var t4 = this.toExtendedJSON();
            return "new Double(".concat(t4.$numberDouble, ")");
          }, t3;
        }();
        Object.defineProperty(st.prototype, "_bsontype", { value: "Double" });
        var at = function() {
          function t3(e3) {
            if (!(this instanceof t3))
              return new t3(e3);
            e3 instanceof Number && (e3 = e3.valueOf()), this.value = 0 | +e3;
          }
          return t3.prototype.valueOf = function() {
            return this.value;
          }, t3.prototype.toString = function(t4) {
            return this.value.toString(t4);
          }, t3.prototype.toJSON = function() {
            return this.value;
          }, t3.prototype.toExtendedJSON = function(t4) {
            return t4 && (t4.relaxed || t4.legacy) ? this.value : { $numberInt: this.value.toString() };
          }, t3.fromExtendedJSON = function(e3, r3) {
            return r3 && r3.relaxed ? parseInt(e3.$numberInt, 10) : new t3(e3.$numberInt);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            return "new Int32(".concat(this.valueOf(), ")");
          }, t3;
        }();
        Object.defineProperty(at.prototype, "_bsontype", { value: "Int32" });
        var ut = function() {
          function t3() {
            if (!(this instanceof t3))
              return new t3();
          }
          return t3.prototype.toExtendedJSON = function() {
            return { $maxKey: 1 };
          }, t3.fromExtendedJSON = function() {
            return new t3();
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            return "new MaxKey()";
          }, t3;
        }();
        Object.defineProperty(ut.prototype, "_bsontype", { value: "MaxKey" });
        var ct = function() {
          function t3() {
            if (!(this instanceof t3))
              return new t3();
          }
          return t3.prototype.toExtendedJSON = function() {
            return { $minKey: 1 };
          }, t3.fromExtendedJSON = function() {
            return new t3();
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            return "new MinKey()";
          }, t3;
        }();
        Object.defineProperty(ct.prototype, "_bsontype", { value: "MinKey" });
        var ft = new RegExp("^[0-9a-fA-F]{24}$"), lt = null, pt = Symbol("id"), ht = function() {
          function t3(e3) {
            if (!(this instanceof t3))
              return new t3(e3);
            var r3;
            if ("object" === n(e3) && e3 && "id" in e3) {
              if ("string" != typeof e3.id && !ArrayBuffer.isView(e3.id))
                throw new w("Argument passed in must have an id that is of type string or Buffer");
              r3 = "toHexString" in e3 && "function" == typeof e3.toHexString ? v.from(e3.toHexString(), "hex") : e3.id;
            } else
              r3 = e3;
            if (null == r3 || "number" == typeof r3)
              this[pt] = t3.generate("number" == typeof r3 ? r3 : void 0);
            else if (ArrayBuffer.isView(r3) && 12 === r3.byteLength)
              this[pt] = r3 instanceof v ? r3 : x(r3);
            else {
              if ("string" != typeof r3)
                throw new w("Argument passed in does not match the accepted types");
              if (12 === r3.length) {
                var o2 = v.from(r3);
                if (12 !== o2.byteLength)
                  throw new w("Argument passed in must be a string of 12 bytes");
                this[pt] = o2;
              } else {
                if (24 !== r3.length || !ft.test(r3))
                  throw new w("Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer");
                this[pt] = v.from(r3, "hex");
              }
            }
            t3.cacheHexString && (this.__id = this.id.toString("hex"));
          }
          return Object.defineProperty(t3.prototype, "id", { get: function() {
            return this[pt];
          }, set: function(e3) {
            this[pt] = e3, t3.cacheHexString && (this.__id = e3.toString("hex"));
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "generationTime", { get: function() {
            return this.id.readInt32BE(0);
          }, set: function(t4) {
            this.id.writeUInt32BE(t4, 0);
          }, enumerable: false, configurable: true }), t3.prototype.toHexString = function() {
            if (t3.cacheHexString && this.__id)
              return this.__id;
            var e3 = this.id.toString("hex");
            return t3.cacheHexString && !this.__id && (this.__id = e3), e3;
          }, t3.getInc = function() {
            return t3.index = (t3.index + 1) % 16777215;
          }, t3.generate = function(e3) {
            "number" != typeof e3 && (e3 = Math.floor(Date.now() / 1e3));
            var r3 = t3.getInc(), n2 = v.alloc(12);
            return n2.writeUInt32BE(e3, 0), null === lt && (lt = j(5)), n2[4] = lt[0], n2[5] = lt[1], n2[6] = lt[2], n2[7] = lt[3], n2[8] = lt[4], n2[11] = 255 & r3, n2[10] = r3 >> 8 & 255, n2[9] = r3 >> 16 & 255, n2;
          }, t3.prototype.toString = function(t4) {
            return t4 ? this.id.toString(t4) : this.toHexString();
          }, t3.prototype.toJSON = function() {
            return this.toHexString();
          }, t3.prototype.equals = function(e3) {
            if (null == e3)
              return false;
            if (e3 instanceof t3)
              return this[pt][11] === e3[pt][11] && this[pt].equals(e3[pt]);
            if ("string" == typeof e3 && t3.isValid(e3) && 12 === e3.length && A(this.id))
              return e3 === v.prototype.toString.call(this.id, "latin1");
            if ("string" == typeof e3 && t3.isValid(e3) && 24 === e3.length)
              return e3.toLowerCase() === this.toHexString();
            if ("string" == typeof e3 && t3.isValid(e3) && 12 === e3.length)
              return v.from(e3).equals(this.id);
            if ("object" === n(e3) && "toHexString" in e3 && "function" == typeof e3.toHexString) {
              var r3 = e3.toHexString(), o2 = this.toHexString().toLowerCase();
              return "string" == typeof r3 && r3.toLowerCase() === o2;
            }
            return false;
          }, t3.prototype.getTimestamp = function() {
            var t4 = new Date(), e3 = this.id.readUInt32BE(0);
            return t4.setTime(1e3 * Math.floor(e3)), t4;
          }, t3.createPk = function() {
            return new t3();
          }, t3.createFromTime = function(e3) {
            var r3 = v.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            return r3.writeUInt32BE(e3, 0), new t3(r3);
          }, t3.createFromHexString = function(e3) {
            if (void 0 === e3 || null != e3 && 24 !== e3.length)
              throw new w("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
            return new t3(v.from(e3, "hex"));
          }, t3.isValid = function(e3) {
            if (null == e3)
              return false;
            try {
              return new t3(e3), true;
            } catch (t4) {
              return false;
            }
          }, t3.prototype.toExtendedJSON = function() {
            return this.toHexString ? { $oid: this.toHexString() } : { $oid: this.toString("hex") };
          }, t3.fromExtendedJSON = function(e3) {
            return new t3(e3.$oid);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3.prototype.inspect = function() {
            return 'new ObjectId("'.concat(this.toHexString(), '")');
          }, t3.index = Math.floor(16777215 * Math.random()), t3;
        }();
        Object.defineProperty(ht.prototype, "generate", { value: E(function(t3) {
          return ht.generate(t3);
        }, "Please use the static `ObjectId.generate(time)` instead") }), Object.defineProperty(ht.prototype, "getInc", { value: E(function() {
          return ht.getInc();
        }, "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(ht.prototype, "get_inc", { value: E(function() {
          return ht.getInc();
        }, "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(ht, "get_inc", { value: E(function() {
          return ht.getInc();
        }, "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(ht.prototype, "_bsontype", { value: "ObjectID" });
        var yt = function() {
          function t3(e3, r3) {
            if (!(this instanceof t3))
              return new t3(e3, r3);
            if (this.pattern = e3, this.options = (null != r3 ? r3 : "").split("").sort().join(""), -1 !== this.pattern.indexOf("\0"))
              throw new _("BSON Regex patterns cannot contain null bytes, found: ".concat(JSON.stringify(this.pattern)));
            if (-1 !== this.options.indexOf("\0"))
              throw new _("BSON Regex options cannot contain null bytes, found: ".concat(JSON.stringify(this.options)));
            for (var n2 = 0; n2 < this.options.length; n2++)
              if ("i" !== this.options[n2] && "m" !== this.options[n2] && "x" !== this.options[n2] && "l" !== this.options[n2] && "s" !== this.options[n2] && "u" !== this.options[n2])
                throw new _("The regular expression option [".concat(this.options[n2], "] is not supported"));
          }
          return t3.parseOptions = function(t4) {
            return t4 ? t4.split("").sort().join("") : "";
          }, t3.prototype.toExtendedJSON = function(t4) {
            return (t4 = t4 || {}).legacy ? { $regex: this.pattern, $options: this.options } : { $regularExpression: { pattern: this.pattern, options: this.options } };
          }, t3.fromExtendedJSON = function(e3) {
            if ("$regex" in e3) {
              if ("string" == typeof e3.$regex)
                return new t3(e3.$regex, t3.parseOptions(e3.$options));
              if ("BSONRegExp" === e3.$regex._bsontype)
                return e3;
            }
            if ("$regularExpression" in e3)
              return new t3(e3.$regularExpression.pattern, t3.parseOptions(e3.$regularExpression.options));
            throw new w("Unexpected BSONRegExp EJSON object form: ".concat(JSON.stringify(e3)));
          }, t3;
        }();
        Object.defineProperty(yt.prototype, "_bsontype", { value: "BSONRegExp" });
        var dt = function() {
          function t3(e3) {
            if (!(this instanceof t3))
              return new t3(e3);
            this.value = e3;
          }
          return t3.prototype.valueOf = function() {
            return this.value;
          }, t3.prototype.toString = function() {
            return this.value;
          }, t3.prototype.inspect = function() {
            return 'new BSONSymbol("'.concat(this.value, '")');
          }, t3.prototype.toJSON = function() {
            return this.value;
          }, t3.prototype.toExtendedJSON = function() {
            return { $symbol: this.value };
          }, t3.fromExtendedJSON = function(e3) {
            return new t3(e3.$symbol);
          }, t3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, t3;
        }();
        Object.defineProperty(dt.prototype, "_bsontype", { value: "Symbol" });
        var mt = function(t3) {
          function e3(r3, n2) {
            var o2 = this;
            return o2 instanceof e3 ? (o2 = H.isLong(r3) ? t3.call(this, r3.low, r3.high, true) || this : P(r3) && void 0 !== r3.t && void 0 !== r3.i ? t3.call(this, r3.i, r3.t, true) || this : t3.call(this, r3, n2, true) || this, Object.defineProperty(o2, "_bsontype", { value: "Timestamp", writable: false, configurable: false, enumerable: false }), o2) : new e3(r3, n2);
          }
          return g(e3, t3), e3.prototype.toJSON = function() {
            return { $timestamp: this.toString() };
          }, e3.fromInt = function(t4) {
            return new e3(H.fromInt(t4, true));
          }, e3.fromNumber = function(t4) {
            return new e3(H.fromNumber(t4, true));
          }, e3.fromBits = function(t4, r3) {
            return new e3(t4, r3);
          }, e3.fromString = function(t4, r3) {
            return new e3(H.fromString(t4, true, r3));
          }, e3.prototype.toExtendedJSON = function() {
            return { $timestamp: { t: this.high >>> 0, i: this.low >>> 0 } };
          }, e3.fromExtendedJSON = function(t4) {
            return new e3(t4.$timestamp);
          }, e3.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return this.inspect();
          }, e3.prototype.inspect = function() {
            return "new Timestamp({ t: ".concat(this.getHighBits(), ", i: ").concat(this.getLowBits(), " })");
          }, e3.MAX_VALUE = H.MAX_UNSIGNED_VALUE, e3;
        }(H);
        var vt = 2147483647, bt = -2147483648, gt = 9223372036854776e3, _t = -9223372036854776e3, wt = { $oid: ht, $binary: D, $uuid: D, $symbol: dt, $numberInt: at, $numberDecimal: it, $numberDouble: st, $numberLong: H, $minKey: ct, $maxKey: ut, $regex: yt, $regularExpression: yt, $timestamp: mt };
        function Ot(t3, e3) {
          if (void 0 === e3 && (e3 = {}), "number" == typeof t3) {
            if (e3.relaxed || e3.legacy)
              return t3;
            if (Math.floor(t3) === t3) {
              if (t3 >= bt && t3 <= vt)
                return new at(t3);
              if (t3 >= _t && t3 <= gt)
                return H.fromNumber(t3);
            }
            return new st(t3);
          }
          if (null == t3 || "object" !== n(t3))
            return t3;
          if (t3.$undefined)
            return null;
          for (var r3 = Object.keys(t3).filter(function(e4) {
            return e4.startsWith("$") && null != t3[e4];
          }), o2 = 0; o2 < r3.length; o2++) {
            var i2 = wt[r3[o2]];
            if (i2)
              return i2.fromExtendedJSON(t3, e3);
          }
          if (null != t3.$date) {
            var s2 = t3.$date, a2 = new Date();
            return e3.legacy ? "number" == typeof s2 ? a2.setTime(s2) : "string" == typeof s2 && a2.setTime(Date.parse(s2)) : "string" == typeof s2 ? a2.setTime(Date.parse(s2)) : H.isLong(s2) ? a2.setTime(s2.toNumber()) : "number" == typeof s2 && e3.relaxed && a2.setTime(s2), a2;
          }
          if (null != t3.$code) {
            var u2 = Object.assign({}, t3);
            return t3.$scope && (u2.$scope = Ot(t3.$scope)), B.fromExtendedJSON(t3);
          }
          if (function(t4) {
            return P(t4) && null != t4.$id && "string" == typeof t4.$ref && (null == t4.$db || "string" == typeof t4.$db);
          }(t3) || t3.$dbPointer) {
            var c2 = t3.$ref ? t3 : t3.$dbPointer;
            if (c2 instanceof U)
              return c2;
            var f2 = Object.keys(c2).filter(function(t4) {
              return t4.startsWith("$");
            }), l2 = true;
            if (f2.forEach(function(t4) {
              -1 === ["$ref", "$id", "$db"].indexOf(t4) && (l2 = false);
            }), l2)
              return U.fromExtendedJSON(c2);
          }
          return t3;
        }
        function $t(t3) {
          var e3 = t3.toISOString();
          return 0 !== t3.getUTCMilliseconds() ? e3 : e3.slice(0, -5) + "Z";
        }
        function St(t3, e3) {
          if (("object" === n(t3) || "function" == typeof t3) && null !== t3) {
            var r3 = e3.seenObjects.findIndex(function(e4) {
              return e4.obj === t3;
            });
            if (-1 !== r3) {
              var o2 = e3.seenObjects.map(function(t4) {
                return t4.propertyName;
              }), i2 = o2.slice(0, r3).map(function(t4) {
                return "".concat(t4, " -> ");
              }).join(""), s2 = o2[r3], a2 = " -> " + o2.slice(r3 + 1, o2.length - 1).map(function(t4) {
                return "".concat(t4, " -> ");
              }).join(""), u2 = o2[o2.length - 1], c2 = " ".repeat(i2.length + s2.length / 2), f2 = "-".repeat(a2.length + (s2.length + u2.length) / 2 - 1);
              throw new w("Converting circular structure to EJSON:\n" + "    ".concat(i2).concat(s2).concat(a2).concat(u2, "\n") + "    ".concat(c2, "\\").concat(f2, "/"));
            }
            e3.seenObjects[e3.seenObjects.length - 1].obj = t3;
          }
          if (Array.isArray(t3))
            return function(t4, e4) {
              return t4.map(function(t5, r4) {
                e4.seenObjects.push({ propertyName: "index ".concat(r4), obj: null });
                try {
                  return St(t5, e4);
                } finally {
                  e4.seenObjects.pop();
                }
              });
            }(t3, e3);
          if (void 0 === t3)
            return null;
          if (t3 instanceof Date || P(h2 = t3) && "[object Date]" === Object.prototype.toString.call(h2)) {
            var l2 = t3.getTime(), p2 = l2 > -1 && l2 < 2534023188e5;
            return e3.legacy ? e3.relaxed && p2 ? { $date: t3.getTime() } : { $date: $t(t3) } : e3.relaxed && p2 ? { $date: $t(t3) } : { $date: { $numberLong: t3.getTime().toString() } };
          }
          var h2;
          if (!("number" != typeof t3 || e3.relaxed && isFinite(t3))) {
            if (Math.floor(t3) === t3) {
              var y2 = t3 >= _t && t3 <= gt;
              if (t3 >= bt && t3 <= vt)
                return { $numberInt: t3.toString() };
              if (y2)
                return { $numberLong: t3.toString() };
            }
            return { $numberDouble: t3.toString() };
          }
          if (t3 instanceof RegExp || function(t4) {
            return "[object RegExp]" === Object.prototype.toString.call(t4);
          }(t3)) {
            var d2 = t3.flags;
            if (void 0 === d2) {
              var m2 = t3.toString().match(/[gimuy]*$/);
              m2 && (d2 = m2[0]);
            }
            return new yt(t3.source, d2).toExtendedJSON(e3);
          }
          return null != t3 && "object" === n(t3) ? function(t4, e4) {
            if (null == t4 || "object" !== n(t4))
              throw new _("not an object instance");
            var r4 = t4._bsontype;
            if (void 0 === r4) {
              var o3 = {};
              for (var i3 in t4) {
                e4.seenObjects.push({ propertyName: i3, obj: null });
                try {
                  var s3 = St(t4[i3], e4);
                  "__proto__" === i3 ? Object.defineProperty(o3, i3, { value: s3, writable: true, enumerable: true, configurable: true }) : o3[i3] = s3;
                } finally {
                  e4.seenObjects.pop();
                }
              }
              return o3;
            }
            if (function(t5) {
              return P(t5) && Reflect.has(t5, "_bsontype") && "string" == typeof t5._bsontype;
            }(t4)) {
              var a3 = t4;
              if ("function" != typeof a3.toExtendedJSON) {
                var u3 = At[t4._bsontype];
                if (!u3)
                  throw new w("Unrecognized or invalid _bsontype: " + t4._bsontype);
                a3 = u3(a3);
              }
              return "Code" === r4 && a3.scope ? a3 = new B(a3.code, St(a3.scope, e4)) : "DBRef" === r4 && a3.oid && (a3 = new U(St(a3.collection, e4), St(a3.oid, e4), St(a3.db, e4), St(a3.fields, e4))), a3.toExtendedJSON(e4);
            }
            throw new _("_bsontype must be a string, but was: " + n(r4));
          }(t3, e3) : t3;
        }
        var jt, At = { Binary: function(t3) {
          return new D(t3.value(), t3.sub_type);
        }, Code: function(t3) {
          return new B(t3.code, t3.scope);
        }, DBRef: function(t3) {
          return new U(t3.collection || t3.namespace, t3.oid, t3.db, t3.fields);
        }, Decimal128: function(t3) {
          return new it(t3.bytes);
        }, Double: function(t3) {
          return new st(t3.value);
        }, Int32: function(t3) {
          return new at(t3.value);
        }, Long: function(t3) {
          return H.fromBits(null != t3.low ? t3.low : t3.low_, null != t3.low ? t3.high : t3.high_, null != t3.low ? t3.unsigned : t3.unsigned_);
        }, MaxKey: function() {
          return new ut();
        }, MinKey: function() {
          return new ct();
        }, ObjectID: function(t3) {
          return new ht(t3);
        }, ObjectId: function(t3) {
          return new ht(t3);
        }, BSONRegExp: function(t3) {
          return new yt(t3.pattern, t3.options);
        }, Symbol: function(t3) {
          return new dt(t3.value);
        }, Timestamp: function(t3) {
          return mt.fromBits(t3.low, t3.high);
        } };
        !function(t3) {
          function e3(t4, e4) {
            var r4 = Object.assign({}, { relaxed: true, legacy: false }, e4);
            return "boolean" == typeof r4.relaxed && (r4.strict = !r4.relaxed), "boolean" == typeof r4.strict && (r4.relaxed = !r4.strict), JSON.parse(t4, function(t5, e5) {
              if (-1 !== t5.indexOf("\0"))
                throw new _("BSON Document field names cannot contain null bytes, found: ".concat(JSON.stringify(t5)));
              return Ot(e5, r4);
            });
          }
          function r3(t4, e4, r4, o2) {
            null != r4 && "object" === n(r4) && (o2 = r4, r4 = 0), null == e4 || "object" !== n(e4) || Array.isArray(e4) || (o2 = e4, e4 = void 0, r4 = 0);
            var i2 = St(t4, Object.assign({ relaxed: true, legacy: false }, o2, { seenObjects: [{ propertyName: "(root)", obj: null }] }));
            return JSON.stringify(i2, e4, r4);
          }
          t3.parse = e3, t3.stringify = r3, t3.serialize = function(t4, e4) {
            return e4 = e4 || {}, JSON.parse(r3(t4, e4));
          }, t3.deserialize = function(t4, r4) {
            return r4 = r4 || {}, e3(JSON.stringify(t4), r4);
          };
        }(jt || (jt = {}));
        var Pt = $();
        Pt.Map ? Pt.Map : function() {
          function t3(t4) {
            void 0 === t4 && (t4 = []), this._keys = [], this._values = {};
            for (var e3 = 0; e3 < t4.length; e3++)
              if (null != t4[e3]) {
                var r3 = t4[e3], n2 = r3[0], o2 = r3[1];
                this._keys.push(n2), this._values[n2] = { v: o2, i: this._keys.length - 1 };
              }
          }
          t3.prototype.clear = function() {
            this._keys = [], this._values = {};
          }, t3.prototype.delete = function(t4) {
            var e3 = this._values[t4];
            return null != e3 && (delete this._values[t4], this._keys.splice(e3.i, 1), true);
          }, t3.prototype.entries = function() {
            var t4 = this, e3 = 0;
            return { next: function() {
              var r3 = t4._keys[e3++];
              return { value: void 0 !== r3 ? [r3, t4._values[r3].v] : void 0, done: void 0 === r3 };
            } };
          }, t3.prototype.forEach = function(t4, e3) {
            e3 = e3 || this;
            for (var r3 = 0; r3 < this._keys.length; r3++) {
              var n2 = this._keys[r3];
              t4.call(e3, this._values[n2].v, n2, e3);
            }
          }, t3.prototype.get = function(t4) {
            return this._values[t4] ? this._values[t4].v : void 0;
          }, t3.prototype.has = function(t4) {
            return null != this._values[t4];
          }, t3.prototype.keys = function() {
            var t4 = this, e3 = 0;
            return { next: function() {
              var r3 = t4._keys[e3++];
              return { value: void 0 !== r3 ? r3 : void 0, done: void 0 === r3 };
            } };
          }, t3.prototype.set = function(t4, e3) {
            return this._values[t4] ? (this._values[t4].v = e3, this) : (this._keys.push(t4), this._values[t4] = { v: e3, i: this._keys.length - 1 }, this);
          }, t3.prototype.values = function() {
            var t4 = this, e3 = 0;
            return { next: function() {
              var r3 = t4._keys[e3++];
              return { value: void 0 !== r3 ? t4._values[r3].v : void 0, done: void 0 === r3 };
            } };
          }, Object.defineProperty(t3.prototype, "size", { get: function() {
            return this._keys.length;
          }, enumerable: false, configurable: true });
        }(), H.fromNumber(R), H.fromNumber(I), /* @__PURE__ */ new Set(["$db", "$ref", "$id", "$clusterTime"]);
        var Et = new Uint8Array(8);
        new DataView(Et.buffer, Et.byteOffset, Et.byteLength);
        v.alloc(17825792);
      }, 365: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(7943), i = r2(8405), s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        e2.lW = c, e2.h2 = 50;
        var a = 2147483647;
        function u(t3) {
          if (t3 > a)
            throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
          var e3 = new Uint8Array(t3);
          return Object.setPrototypeOf(e3, c.prototype), e3;
        }
        function c(t3, e3, r3) {
          if ("number" == typeof t3) {
            if ("string" == typeof e3)
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return p(t3);
          }
          return f(t3, e3, r3);
        }
        function f(t3, e3, r3) {
          if ("string" == typeof t3)
            return function(t4, e4) {
              if ("string" == typeof e4 && "" !== e4 || (e4 = "utf8"), !c.isEncoding(e4))
                throw new TypeError("Unknown encoding: " + e4);
              var r4 = 0 | m(t4, e4), n2 = u(r4), o3 = n2.write(t4, e4);
              return o3 !== r4 && (n2 = n2.slice(0, o3)), n2;
            }(t3, e3);
          if (ArrayBuffer.isView(t3))
            return function(t4) {
              if (q(t4, Uint8Array)) {
                var e4 = new Uint8Array(t4);
                return y(e4.buffer, e4.byteOffset, e4.byteLength);
              }
              return h(t4);
            }(t3);
          if (null == t3)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + n(t3));
          if (q(t3, ArrayBuffer) || t3 && q(t3.buffer, ArrayBuffer))
            return y(t3, e3, r3);
          if ("undefined" != typeof SharedArrayBuffer && (q(t3, SharedArrayBuffer) || t3 && q(t3.buffer, SharedArrayBuffer)))
            return y(t3, e3, r3);
          if ("number" == typeof t3)
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          var o2 = t3.valueOf && t3.valueOf();
          if (null != o2 && o2 !== t3)
            return c.from(o2, e3, r3);
          var i2 = function(t4) {
            if (c.isBuffer(t4)) {
              var e4 = 0 | d(t4.length), r4 = u(e4);
              return 0 === r4.length || t4.copy(r4, 0, 0, e4), r4;
            }
            return void 0 !== t4.length ? "number" != typeof t4.length || V(t4.length) ? u(0) : h(t4) : "Buffer" === t4.type && Array.isArray(t4.data) ? h(t4.data) : void 0;
          }(t3);
          if (i2)
            return i2;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t3[Symbol.toPrimitive])
            return c.from(t3[Symbol.toPrimitive]("string"), e3, r3);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + n(t3));
        }
        function l(t3) {
          if ("number" != typeof t3)
            throw new TypeError('"size" argument must be of type number');
          if (t3 < 0)
            throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
        }
        function p(t3) {
          return l(t3), u(t3 < 0 ? 0 : 0 | d(t3));
        }
        function h(t3) {
          for (var e3 = t3.length < 0 ? 0 : 0 | d(t3.length), r3 = u(e3), n2 = 0; n2 < e3; n2 += 1)
            r3[n2] = 255 & t3[n2];
          return r3;
        }
        function y(t3, e3, r3) {
          if (e3 < 0 || t3.byteLength < e3)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (t3.byteLength < e3 + (r3 || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          var n2;
          return n2 = void 0 === e3 && void 0 === r3 ? new Uint8Array(t3) : void 0 === r3 ? new Uint8Array(t3, e3) : new Uint8Array(t3, e3, r3), Object.setPrototypeOf(n2, c.prototype), n2;
        }
        function d(t3) {
          if (t3 >= a)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
          return 0 | t3;
        }
        function m(t3, e3) {
          if (c.isBuffer(t3))
            return t3.length;
          if (ArrayBuffer.isView(t3) || q(t3, ArrayBuffer))
            return t3.byteLength;
          if ("string" != typeof t3)
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + n(t3));
          var r3 = t3.length, o2 = arguments.length > 2 && true === arguments[2];
          if (!o2 && 0 === r3)
            return 0;
          for (var i2 = false; ; )
            switch (e3) {
              case "ascii":
              case "latin1":
              case "binary":
                return r3;
              case "utf8":
              case "utf-8":
                return U(t3).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r3;
              case "hex":
                return r3 >>> 1;
              case "base64":
                return F(t3).length;
              default:
                if (i2)
                  return o2 ? -1 : U(t3).length;
                e3 = ("" + e3).toLowerCase(), i2 = true;
            }
        }
        function v(t3, e3, r3) {
          var n2 = false;
          if ((void 0 === e3 || e3 < 0) && (e3 = 0), e3 > this.length)
            return "";
          if ((void 0 === r3 || r3 > this.length) && (r3 = this.length), r3 <= 0)
            return "";
          if ((r3 >>>= 0) <= (e3 >>>= 0))
            return "";
          for (t3 || (t3 = "utf8"); ; )
            switch (t3) {
              case "hex":
                return M(this, e3, r3);
              case "utf8":
              case "utf-8":
                return P(this, e3, r3);
              case "ascii":
                return x(this, e3, r3);
              case "latin1":
              case "binary":
                return k(this, e3, r3);
              case "base64":
                return A(this, e3, r3);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return T(this, e3, r3);
              default:
                if (n2)
                  throw new TypeError("Unknown encoding: " + t3);
                t3 = (t3 + "").toLowerCase(), n2 = true;
            }
        }
        function b(t3, e3, r3) {
          var n2 = t3[e3];
          t3[e3] = t3[r3], t3[r3] = n2;
        }
        function g(t3, e3, r3, n2, o2) {
          if (0 === t3.length)
            return -1;
          if ("string" == typeof r3 ? (n2 = r3, r3 = 0) : r3 > 2147483647 ? r3 = 2147483647 : r3 < -2147483648 && (r3 = -2147483648), V(r3 = +r3) && (r3 = o2 ? 0 : t3.length - 1), r3 < 0 && (r3 = t3.length + r3), r3 >= t3.length) {
            if (o2)
              return -1;
            r3 = t3.length - 1;
          } else if (r3 < 0) {
            if (!o2)
              return -1;
            r3 = 0;
          }
          if ("string" == typeof e3 && (e3 = c.from(e3, n2)), c.isBuffer(e3))
            return 0 === e3.length ? -1 : _(t3, e3, r3, n2, o2);
          if ("number" == typeof e3)
            return e3 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o2 ? Uint8Array.prototype.indexOf.call(t3, e3, r3) : Uint8Array.prototype.lastIndexOf.call(t3, e3, r3) : _(t3, [e3], r3, n2, o2);
          throw new TypeError("val must be string, number or Buffer");
        }
        function _(t3, e3, r3, n2, o2) {
          var i2, s2 = 1, a2 = t3.length, u2 = e3.length;
          if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
            if (t3.length < 2 || e3.length < 2)
              return -1;
            s2 = 2, a2 /= 2, u2 /= 2, r3 /= 2;
          }
          function c2(t4, e4) {
            return 1 === s2 ? t4[e4] : t4.readUInt16BE(e4 * s2);
          }
          if (o2) {
            var f2 = -1;
            for (i2 = r3; i2 < a2; i2++)
              if (c2(t3, i2) === c2(e3, -1 === f2 ? 0 : i2 - f2)) {
                if (-1 === f2 && (f2 = i2), i2 - f2 + 1 === u2)
                  return f2 * s2;
              } else
                -1 !== f2 && (i2 -= i2 - f2), f2 = -1;
          } else
            for (r3 + u2 > a2 && (r3 = a2 - u2), i2 = r3; i2 >= 0; i2--) {
              for (var l2 = true, p2 = 0; p2 < u2; p2++)
                if (c2(t3, i2 + p2) !== c2(e3, p2)) {
                  l2 = false;
                  break;
                }
              if (l2)
                return i2;
            }
          return -1;
        }
        function w(t3, e3, r3, n2) {
          r3 = Number(r3) || 0;
          var o2 = t3.length - r3;
          n2 ? (n2 = Number(n2)) > o2 && (n2 = o2) : n2 = o2;
          var i2 = e3.length;
          n2 > i2 / 2 && (n2 = i2 / 2);
          for (var s2 = 0; s2 < n2; ++s2) {
            var a2 = parseInt(e3.substr(2 * s2, 2), 16);
            if (V(a2))
              return s2;
            t3[r3 + s2] = a2;
          }
          return s2;
        }
        function O(t3, e3, r3, n2) {
          return L(U(e3, t3.length - r3), t3, r3, n2);
        }
        function $(t3, e3, r3, n2) {
          return L(function(t4) {
            for (var e4 = [], r4 = 0; r4 < t4.length; ++r4)
              e4.push(255 & t4.charCodeAt(r4));
            return e4;
          }(e3), t3, r3, n2);
        }
        function S(t3, e3, r3, n2) {
          return L(F(e3), t3, r3, n2);
        }
        function j(t3, e3, r3, n2) {
          return L(function(t4, e4) {
            for (var r4, n3, o2, i2 = [], s2 = 0; s2 < t4.length && !((e4 -= 2) < 0); ++s2)
              n3 = (r4 = t4.charCodeAt(s2)) >> 8, o2 = r4 % 256, i2.push(o2), i2.push(n3);
            return i2;
          }(e3, t3.length - r3), t3, r3, n2);
        }
        function A(t3, e3, r3) {
          return 0 === e3 && r3 === t3.length ? o.fromByteArray(t3) : o.fromByteArray(t3.slice(e3, r3));
        }
        function P(t3, e3, r3) {
          r3 = Math.min(t3.length, r3);
          for (var n2 = [], o2 = e3; o2 < r3; ) {
            var i2, s2, a2, u2, c2 = t3[o2], f2 = null, l2 = c2 > 239 ? 4 : c2 > 223 ? 3 : c2 > 191 ? 2 : 1;
            if (o2 + l2 <= r3)
              switch (l2) {
                case 1:
                  c2 < 128 && (f2 = c2);
                  break;
                case 2:
                  128 == (192 & (i2 = t3[o2 + 1])) && (u2 = (31 & c2) << 6 | 63 & i2) > 127 && (f2 = u2);
                  break;
                case 3:
                  i2 = t3[o2 + 1], s2 = t3[o2 + 2], 128 == (192 & i2) && 128 == (192 & s2) && (u2 = (15 & c2) << 12 | (63 & i2) << 6 | 63 & s2) > 2047 && (u2 < 55296 || u2 > 57343) && (f2 = u2);
                  break;
                case 4:
                  i2 = t3[o2 + 1], s2 = t3[o2 + 2], a2 = t3[o2 + 3], 128 == (192 & i2) && 128 == (192 & s2) && 128 == (192 & a2) && (u2 = (15 & c2) << 18 | (63 & i2) << 12 | (63 & s2) << 6 | 63 & a2) > 65535 && u2 < 1114112 && (f2 = u2);
              }
            null === f2 ? (f2 = 65533, l2 = 1) : f2 > 65535 && (f2 -= 65536, n2.push(f2 >>> 10 & 1023 | 55296), f2 = 56320 | 1023 & f2), n2.push(f2), o2 += l2;
          }
          return function(t4) {
            var e4 = t4.length;
            if (e4 <= E)
              return String.fromCharCode.apply(String, t4);
            for (var r4 = "", n3 = 0; n3 < e4; )
              r4 += String.fromCharCode.apply(String, t4.slice(n3, n3 += E));
            return r4;
          }(n2);
        }
        c.TYPED_ARRAY_SUPPORT = function() {
          try {
            var t3 = new Uint8Array(1), e3 = { foo: function() {
              return 42;
            } };
            return Object.setPrototypeOf(e3, Uint8Array.prototype), Object.setPrototypeOf(t3, e3), 42 === t3.foo();
          } catch (t4) {
            return false;
          }
        }(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", { enumerable: true, get: function() {
          if (c.isBuffer(this))
            return this.buffer;
        } }), Object.defineProperty(c.prototype, "offset", { enumerable: true, get: function() {
          if (c.isBuffer(this))
            return this.byteOffset;
        } }), c.poolSize = 8192, c.from = function(t3, e3, r3) {
          return f(t3, e3, r3);
        }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(t3, e3, r3) {
          return function(t4, e4, r4) {
            return l(t4), t4 <= 0 ? u(t4) : void 0 !== e4 ? "string" == typeof r4 ? u(t4).fill(e4, r4) : u(t4).fill(e4) : u(t4);
          }(t3, e3, r3);
        }, c.allocUnsafe = function(t3) {
          return p(t3);
        }, c.allocUnsafeSlow = function(t3) {
          return p(t3);
        }, c.isBuffer = function(t3) {
          return null != t3 && true === t3._isBuffer && t3 !== c.prototype;
        }, c.compare = function(t3, e3) {
          if (q(t3, Uint8Array) && (t3 = c.from(t3, t3.offset, t3.byteLength)), q(e3, Uint8Array) && (e3 = c.from(e3, e3.offset, e3.byteLength)), !c.isBuffer(t3) || !c.isBuffer(e3))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (t3 === e3)
            return 0;
          for (var r3 = t3.length, n2 = e3.length, o2 = 0, i2 = Math.min(r3, n2); o2 < i2; ++o2)
            if (t3[o2] !== e3[o2]) {
              r3 = t3[o2], n2 = e3[o2];
              break;
            }
          return r3 < n2 ? -1 : n2 < r3 ? 1 : 0;
        }, c.isEncoding = function(t3) {
          switch (String(t3).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, c.concat = function(t3, e3) {
          if (!Array.isArray(t3))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t3.length)
            return c.alloc(0);
          var r3;
          if (void 0 === e3)
            for (e3 = 0, r3 = 0; r3 < t3.length; ++r3)
              e3 += t3[r3].length;
          var n2 = c.allocUnsafe(e3), o2 = 0;
          for (r3 = 0; r3 < t3.length; ++r3) {
            var i2 = t3[r3];
            if (q(i2, Uint8Array))
              o2 + i2.length > n2.length ? c.from(i2).copy(n2, o2) : Uint8Array.prototype.set.call(n2, i2, o2);
            else {
              if (!c.isBuffer(i2))
                throw new TypeError('"list" argument must be an Array of Buffers');
              i2.copy(n2, o2);
            }
            o2 += i2.length;
          }
          return n2;
        }, c.byteLength = m, c.prototype._isBuffer = true, c.prototype.swap16 = function() {
          var t3 = this.length;
          if (t3 % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e3 = 0; e3 < t3; e3 += 2)
            b(this, e3, e3 + 1);
          return this;
        }, c.prototype.swap32 = function() {
          var t3 = this.length;
          if (t3 % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e3 = 0; e3 < t3; e3 += 4)
            b(this, e3, e3 + 3), b(this, e3 + 1, e3 + 2);
          return this;
        }, c.prototype.swap64 = function() {
          var t3 = this.length;
          if (t3 % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e3 = 0; e3 < t3; e3 += 8)
            b(this, e3, e3 + 7), b(this, e3 + 1, e3 + 6), b(this, e3 + 2, e3 + 5), b(this, e3 + 3, e3 + 4);
          return this;
        }, c.prototype.toString = function() {
          var t3 = this.length;
          return 0 === t3 ? "" : 0 === arguments.length ? P(this, 0, t3) : v.apply(this, arguments);
        }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(t3) {
          if (!c.isBuffer(t3))
            throw new TypeError("Argument must be a Buffer");
          return this === t3 || 0 === c.compare(this, t3);
        }, c.prototype.inspect = function() {
          var t3 = "", r3 = e2.h2;
          return t3 = this.toString("hex", 0, r3).replace(/(.{2})/g, "$1 ").trim(), this.length > r3 && (t3 += " ... "), "<Buffer " + t3 + ">";
        }, s && (c.prototype[s] = c.prototype.inspect), c.prototype.compare = function(t3, e3, r3, o2, i2) {
          if (q(t3, Uint8Array) && (t3 = c.from(t3, t3.offset, t3.byteLength)), !c.isBuffer(t3))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + n(t3));
          if (void 0 === e3 && (e3 = 0), void 0 === r3 && (r3 = t3 ? t3.length : 0), void 0 === o2 && (o2 = 0), void 0 === i2 && (i2 = this.length), e3 < 0 || r3 > t3.length || o2 < 0 || i2 > this.length)
            throw new RangeError("out of range index");
          if (o2 >= i2 && e3 >= r3)
            return 0;
          if (o2 >= i2)
            return -1;
          if (e3 >= r3)
            return 1;
          if (this === t3)
            return 0;
          for (var s2 = (i2 >>>= 0) - (o2 >>>= 0), a2 = (r3 >>>= 0) - (e3 >>>= 0), u2 = Math.min(s2, a2), f2 = this.slice(o2, i2), l2 = t3.slice(e3, r3), p2 = 0; p2 < u2; ++p2)
            if (f2[p2] !== l2[p2]) {
              s2 = f2[p2], a2 = l2[p2];
              break;
            }
          return s2 < a2 ? -1 : a2 < s2 ? 1 : 0;
        }, c.prototype.includes = function(t3, e3, r3) {
          return -1 !== this.indexOf(t3, e3, r3);
        }, c.prototype.indexOf = function(t3, e3, r3) {
          return g(this, t3, e3, r3, true);
        }, c.prototype.lastIndexOf = function(t3, e3, r3) {
          return g(this, t3, e3, r3, false);
        }, c.prototype.write = function(t3, e3, r3, n2) {
          if (void 0 === e3)
            n2 = "utf8", r3 = this.length, e3 = 0;
          else if (void 0 === r3 && "string" == typeof e3)
            n2 = e3, r3 = this.length, e3 = 0;
          else {
            if (!isFinite(e3))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            e3 >>>= 0, isFinite(r3) ? (r3 >>>= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r3, r3 = void 0);
          }
          var o2 = this.length - e3;
          if ((void 0 === r3 || r3 > o2) && (r3 = o2), t3.length > 0 && (r3 < 0 || e3 < 0) || e3 > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
          n2 || (n2 = "utf8");
          for (var i2 = false; ; )
            switch (n2) {
              case "hex":
                return w(this, t3, e3, r3);
              case "utf8":
              case "utf-8":
                return O(this, t3, e3, r3);
              case "ascii":
              case "latin1":
              case "binary":
                return $(this, t3, e3, r3);
              case "base64":
                return S(this, t3, e3, r3);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return j(this, t3, e3, r3);
              default:
                if (i2)
                  throw new TypeError("Unknown encoding: " + n2);
                n2 = ("" + n2).toLowerCase(), i2 = true;
            }
        }, c.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };
        var E = 4096;
        function x(t3, e3, r3) {
          var n2 = "";
          r3 = Math.min(t3.length, r3);
          for (var o2 = e3; o2 < r3; ++o2)
            n2 += String.fromCharCode(127 & t3[o2]);
          return n2;
        }
        function k(t3, e3, r3) {
          var n2 = "";
          r3 = Math.min(t3.length, r3);
          for (var o2 = e3; o2 < r3; ++o2)
            n2 += String.fromCharCode(t3[o2]);
          return n2;
        }
        function M(t3, e3, r3) {
          var n2 = t3.length;
          (!e3 || e3 < 0) && (e3 = 0), (!r3 || r3 < 0 || r3 > n2) && (r3 = n2);
          for (var o2 = "", i2 = e3; i2 < r3; ++i2)
            o2 += W[t3[i2]];
          return o2;
        }
        function T(t3, e3, r3) {
          for (var n2 = t3.slice(e3, r3), o2 = "", i2 = 0; i2 < n2.length - 1; i2 += 2)
            o2 += String.fromCharCode(n2[i2] + 256 * n2[i2 + 1]);
          return o2;
        }
        function N(t3, e3, r3) {
          if (t3 % 1 != 0 || t3 < 0)
            throw new RangeError("offset is not uint");
          if (t3 + e3 > r3)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function R(t3, e3, r3, n2, o2, i2) {
          if (!c.isBuffer(t3))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e3 > o2 || e3 < i2)
            throw new RangeError('"value" argument is out of bounds');
          if (r3 + n2 > t3.length)
            throw new RangeError("Index out of range");
        }
        function I(t3, e3, r3, n2, o2, i2) {
          if (r3 + n2 > t3.length)
            throw new RangeError("Index out of range");
          if (r3 < 0)
            throw new RangeError("Index out of range");
        }
        function D(t3, e3, r3, n2, o2) {
          return e3 = +e3, r3 >>>= 0, o2 || I(t3, 0, r3, 4), i.write(t3, e3, r3, n2, 23, 4), r3 + 4;
        }
        function C(t3, e3, r3, n2, o2) {
          return e3 = +e3, r3 >>>= 0, o2 || I(t3, 0, r3, 8), i.write(t3, e3, r3, n2, 52, 8), r3 + 8;
        }
        c.prototype.slice = function(t3, e3) {
          var r3 = this.length;
          (t3 = ~~t3) < 0 ? (t3 += r3) < 0 && (t3 = 0) : t3 > r3 && (t3 = r3), (e3 = void 0 === e3 ? r3 : ~~e3) < 0 ? (e3 += r3) < 0 && (e3 = 0) : e3 > r3 && (e3 = r3), e3 < t3 && (e3 = t3);
          var n2 = this.subarray(t3, e3);
          return Object.setPrototypeOf(n2, c.prototype), n2;
        }, c.prototype.readUintLE = c.prototype.readUIntLE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || N(t3, e3, this.length);
          for (var n2 = this[t3], o2 = 1, i2 = 0; ++i2 < e3 && (o2 *= 256); )
            n2 += this[t3 + i2] * o2;
          return n2;
        }, c.prototype.readUintBE = c.prototype.readUIntBE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || N(t3, e3, this.length);
          for (var n2 = this[t3 + --e3], o2 = 1; e3 > 0 && (o2 *= 256); )
            n2 += this[t3 + --e3] * o2;
          return n2;
        }, c.prototype.readUint8 = c.prototype.readUInt8 = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 1, this.length), this[t3];
        }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
        }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
        }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + 16777216 * this[t3 + 3];
        }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 4, this.length), 16777216 * this[t3] + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
        }, c.prototype.readIntLE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || N(t3, e3, this.length);
          for (var n2 = this[t3], o2 = 1, i2 = 0; ++i2 < e3 && (o2 *= 256); )
            n2 += this[t3 + i2] * o2;
          return n2 >= (o2 *= 128) && (n2 -= Math.pow(2, 8 * e3)), n2;
        }, c.prototype.readIntBE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || N(t3, e3, this.length);
          for (var n2 = e3, o2 = 1, i2 = this[t3 + --n2]; n2 > 0 && (o2 *= 256); )
            i2 += this[t3 + --n2] * o2;
          return i2 >= (o2 *= 128) && (i2 -= Math.pow(2, 8 * e3)), i2;
        }, c.prototype.readInt8 = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 1, this.length), 128 & this[t3] ? -1 * (255 - this[t3] + 1) : this[t3];
        }, c.prototype.readInt16LE = function(t3, e3) {
          t3 >>>= 0, e3 || N(t3, 2, this.length);
          var r3 = this[t3] | this[t3 + 1] << 8;
          return 32768 & r3 ? 4294901760 | r3 : r3;
        }, c.prototype.readInt16BE = function(t3, e3) {
          t3 >>>= 0, e3 || N(t3, 2, this.length);
          var r3 = this[t3 + 1] | this[t3] << 8;
          return 32768 & r3 ? 4294901760 | r3 : r3;
        }, c.prototype.readInt32LE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
        }, c.prototype.readInt32BE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
        }, c.prototype.readFloatLE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 4, this.length), i.read(this, t3, true, 23, 4);
        }, c.prototype.readFloatBE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 4, this.length), i.read(this, t3, false, 23, 4);
        }, c.prototype.readDoubleLE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 8, this.length), i.read(this, t3, true, 52, 8);
        }, c.prototype.readDoubleBE = function(t3, e3) {
          return t3 >>>= 0, e3 || N(t3, 8, this.length), i.read(this, t3, false, 52, 8);
        }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(t3, e3, r3, n2) {
          t3 = +t3, e3 >>>= 0, r3 >>>= 0, n2 || R(this, t3, e3, r3, Math.pow(2, 8 * r3) - 1, 0);
          var o2 = 1, i2 = 0;
          for (this[e3] = 255 & t3; ++i2 < r3 && (o2 *= 256); )
            this[e3 + i2] = t3 / o2 & 255;
          return e3 + r3;
        }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(t3, e3, r3, n2) {
          t3 = +t3, e3 >>>= 0, r3 >>>= 0, n2 || R(this, t3, e3, r3, Math.pow(2, 8 * r3) - 1, 0);
          var o2 = r3 - 1, i2 = 1;
          for (this[e3 + o2] = 255 & t3; --o2 >= 0 && (i2 *= 256); )
            this[e3 + o2] = t3 / i2 & 255;
          return e3 + r3;
        }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 1, 255, 0), this[e3] = 255 & t3, e3 + 1;
        }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 2, 65535, 0), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
        }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 2, 65535, 0), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
        }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 4, 4294967295, 0), this[e3 + 3] = t3 >>> 24, this[e3 + 2] = t3 >>> 16, this[e3 + 1] = t3 >>> 8, this[e3] = 255 & t3, e3 + 4;
        }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 4, 4294967295, 0), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
        }, c.prototype.writeIntLE = function(t3, e3, r3, n2) {
          if (t3 = +t3, e3 >>>= 0, !n2) {
            var o2 = Math.pow(2, 8 * r3 - 1);
            R(this, t3, e3, r3, o2 - 1, -o2);
          }
          var i2 = 0, s2 = 1, a2 = 0;
          for (this[e3] = 255 & t3; ++i2 < r3 && (s2 *= 256); )
            t3 < 0 && 0 === a2 && 0 !== this[e3 + i2 - 1] && (a2 = 1), this[e3 + i2] = (t3 / s2 >> 0) - a2 & 255;
          return e3 + r3;
        }, c.prototype.writeIntBE = function(t3, e3, r3, n2) {
          if (t3 = +t3, e3 >>>= 0, !n2) {
            var o2 = Math.pow(2, 8 * r3 - 1);
            R(this, t3, e3, r3, o2 - 1, -o2);
          }
          var i2 = r3 - 1, s2 = 1, a2 = 0;
          for (this[e3 + i2] = 255 & t3; --i2 >= 0 && (s2 *= 256); )
            t3 < 0 && 0 === a2 && 0 !== this[e3 + i2 + 1] && (a2 = 1), this[e3 + i2] = (t3 / s2 >> 0) - a2 & 255;
          return e3 + r3;
        }, c.prototype.writeInt8 = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 1, 127, -128), t3 < 0 && (t3 = 255 + t3 + 1), this[e3] = 255 & t3, e3 + 1;
        }, c.prototype.writeInt16LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 2, 32767, -32768), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
        }, c.prototype.writeInt16BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 2, 32767, -32768), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
        }, c.prototype.writeInt32LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 4, 2147483647, -2147483648), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, this[e3 + 2] = t3 >>> 16, this[e3 + 3] = t3 >>> 24, e3 + 4;
        }, c.prototype.writeInt32BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || R(this, t3, e3, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
        }, c.prototype.writeFloatLE = function(t3, e3, r3) {
          return D(this, t3, e3, true, r3);
        }, c.prototype.writeFloatBE = function(t3, e3, r3) {
          return D(this, t3, e3, false, r3);
        }, c.prototype.writeDoubleLE = function(t3, e3, r3) {
          return C(this, t3, e3, true, r3);
        }, c.prototype.writeDoubleBE = function(t3, e3, r3) {
          return C(this, t3, e3, false, r3);
        }, c.prototype.copy = function(t3, e3, r3, n2) {
          if (!c.isBuffer(t3))
            throw new TypeError("argument should be a Buffer");
          if (r3 || (r3 = 0), n2 || 0 === n2 || (n2 = this.length), e3 >= t3.length && (e3 = t3.length), e3 || (e3 = 0), n2 > 0 && n2 < r3 && (n2 = r3), n2 === r3)
            return 0;
          if (0 === t3.length || 0 === this.length)
            return 0;
          if (e3 < 0)
            throw new RangeError("targetStart out of bounds");
          if (r3 < 0 || r3 >= this.length)
            throw new RangeError("Index out of range");
          if (n2 < 0)
            throw new RangeError("sourceEnd out of bounds");
          n2 > this.length && (n2 = this.length), t3.length - e3 < n2 - r3 && (n2 = t3.length - e3 + r3);
          var o2 = n2 - r3;
          return this === t3 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e3, r3, n2) : Uint8Array.prototype.set.call(t3, this.subarray(r3, n2), e3), o2;
        }, c.prototype.fill = function(t3, e3, r3, n2) {
          if ("string" == typeof t3) {
            if ("string" == typeof e3 ? (n2 = e3, e3 = 0, r3 = this.length) : "string" == typeof r3 && (n2 = r3, r3 = this.length), void 0 !== n2 && "string" != typeof n2)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n2 && !c.isEncoding(n2))
              throw new TypeError("Unknown encoding: " + n2);
            if (1 === t3.length) {
              var o2 = t3.charCodeAt(0);
              ("utf8" === n2 && o2 < 128 || "latin1" === n2) && (t3 = o2);
            }
          } else
            "number" == typeof t3 ? t3 &= 255 : "boolean" == typeof t3 && (t3 = Number(t3));
          if (e3 < 0 || this.length < e3 || this.length < r3)
            throw new RangeError("Out of range index");
          if (r3 <= e3)
            return this;
          var i2;
          if (e3 >>>= 0, r3 = void 0 === r3 ? this.length : r3 >>> 0, t3 || (t3 = 0), "number" == typeof t3)
            for (i2 = e3; i2 < r3; ++i2)
              this[i2] = t3;
          else {
            var s2 = c.isBuffer(t3) ? t3 : c.from(t3, n2), a2 = s2.length;
            if (0 === a2)
              throw new TypeError('The value "' + t3 + '" is invalid for argument "value"');
            for (i2 = 0; i2 < r3 - e3; ++i2)
              this[i2 + e3] = s2[i2 % a2];
          }
          return this;
        };
        var B = /[^+/0-9A-Za-z-_]/g;
        function U(t3, e3) {
          var r3;
          e3 = e3 || 1 / 0;
          for (var n2 = t3.length, o2 = null, i2 = [], s2 = 0; s2 < n2; ++s2) {
            if ((r3 = t3.charCodeAt(s2)) > 55295 && r3 < 57344) {
              if (!o2) {
                if (r3 > 56319) {
                  (e3 -= 3) > -1 && i2.push(239, 191, 189);
                  continue;
                }
                if (s2 + 1 === n2) {
                  (e3 -= 3) > -1 && i2.push(239, 191, 189);
                  continue;
                }
                o2 = r3;
                continue;
              }
              if (r3 < 56320) {
                (e3 -= 3) > -1 && i2.push(239, 191, 189), o2 = r3;
                continue;
              }
              r3 = 65536 + (o2 - 55296 << 10 | r3 - 56320);
            } else
              o2 && (e3 -= 3) > -1 && i2.push(239, 191, 189);
            if (o2 = null, r3 < 128) {
              if ((e3 -= 1) < 0)
                break;
              i2.push(r3);
            } else if (r3 < 2048) {
              if ((e3 -= 2) < 0)
                break;
              i2.push(r3 >> 6 | 192, 63 & r3 | 128);
            } else if (r3 < 65536) {
              if ((e3 -= 3) < 0)
                break;
              i2.push(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128);
            } else {
              if (!(r3 < 1114112))
                throw new Error("Invalid code point");
              if ((e3 -= 4) < 0)
                break;
              i2.push(r3 >> 18 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128);
            }
          }
          return i2;
        }
        function F(t3) {
          return o.toByteArray(function(t4) {
            if ((t4 = (t4 = t4.split("=")[0]).trim().replace(B, "")).length < 2)
              return "";
            for (; t4.length % 4 != 0; )
              t4 += "=";
            return t4;
          }(t3));
        }
        function L(t3, e3, r3, n2) {
          for (var o2 = 0; o2 < n2 && !(o2 + r3 >= e3.length || o2 >= t3.length); ++o2)
            e3[o2 + r3] = t3[o2];
          return o2;
        }
        function q(t3, e3) {
          return t3 instanceof e3 || null != t3 && null != t3.constructor && null != t3.constructor.name && t3.constructor.name === e3.name;
        }
        function V(t3) {
          return t3 != t3;
        }
        var W = function() {
          for (var t3 = "0123456789abcdef", e3 = new Array(256), r3 = 0; r3 < 16; ++r3)
            for (var n2 = 16 * r3, o2 = 0; o2 < 16; ++o2)
              e3[n2 + o2] = t3[r3] + t3[o2];
          return e3;
        }();
      }, 8780: (t2, e2, r2) => {
        "use strict";
        var n = r2(6893), o = r2(3862), i = o(n("String.prototype.indexOf"));
        t2.exports = function(t3, e3) {
          var r3 = n(t3, !!e3);
          return "function" == typeof r3 && i(t3, ".prototype.") > -1 ? o(r3) : r3;
        };
      }, 3862: (t2, e2, r2) => {
        "use strict";
        var n = r2(5246), o = r2(6893), i = o("%Function.prototype.apply%"), s = o("%Function.prototype.call%"), a = o("%Reflect.apply%", true) || n.call(s, i), u = o("%Object.getOwnPropertyDescriptor%", true), c = o("%Object.defineProperty%", true), f = o("%Math.max%");
        if (c)
          try {
            c({}, "a", { value: 1 });
          } catch (t3) {
            c = null;
          }
        t2.exports = function(t3) {
          var e3 = a(n, s, arguments);
          if (u && c) {
            var r3 = u(e3, "length");
            r3.configurable && c(e3, "length", { value: 1 + f(0, t3.length - (arguments.length - 1)) });
          }
          return e3;
        };
        var l = function() {
          return a(n, i, arguments);
        };
        c ? c(t2.exports, "apply", { value: l }) : t2.exports.apply = l;
      }, 5509: (t2) => {
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        var r2 = 1e3, n = 60 * r2, o = 60 * n, i = 24 * o;
        function s(t3, e3, r3, n2) {
          var o2 = e3 >= 1.5 * r3;
          return Math.round(t3 / r3) + " " + n2 + (o2 ? "s" : "");
        }
        t2.exports = function(t3, a) {
          a = a || {};
          var u, c, f = e2(t3);
          if ("string" === f && t3.length > 0)
            return function(t4) {
              if (!((t4 = String(t4)).length > 100)) {
                var e3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t4);
                if (e3) {
                  var s2 = parseFloat(e3[1]);
                  switch ((e3[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * s2;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * s2;
                    case "days":
                    case "day":
                    case "d":
                      return s2 * i;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return s2 * o;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return s2 * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return s2 * r2;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return s2;
                    default:
                      return;
                  }
                }
              }
            }(t3);
          if ("number" === f && isFinite(t3))
            return a.long ? (u = t3, (c = Math.abs(u)) >= i ? s(u, c, i, "day") : c >= o ? s(u, c, o, "hour") : c >= n ? s(u, c, n, "minute") : c >= r2 ? s(u, c, r2, "second") : u + " ms") : function(t4) {
              var e3 = Math.abs(t4);
              return e3 >= i ? Math.round(t4 / i) + "d" : e3 >= o ? Math.round(t4 / o) + "h" : e3 >= n ? Math.round(t4 / n) + "m" : e3 >= r2 ? Math.round(t4 / r2) + "s" : t4 + "ms";
            }(t3);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t3));
        };
      }, 8801: (t2, e2, r2) => {
        var n;
        e2.formatArgs = function(e3) {
          if (e3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e3[0] + (this.useColors ? "%c " : " ") + "+" + t2.exports.humanize(this.diff), this.useColors) {
            var r3 = "color: " + this.color;
            e3.splice(1, 0, r3, "color: inherit");
            var n2 = 0, o = 0;
            e3[0].replace(/%[a-zA-Z%]/g, function(t3) {
              "%%" !== t3 && (n2++, "%c" === t3 && (o = n2));
            }), e3.splice(o, 0, r3);
          }
        }, e2.save = function(t3) {
          try {
            t3 ? e2.storage.setItem("debug", t3) : e2.storage.removeItem("debug");
          } catch (t4) {
          }
        }, e2.load = function() {
          var t3;
          try {
            t3 = e2.storage.getItem("debug");
          } catch (t4) {
          }
          return !t3 && void 0 !== { env: {} } && "env" in { env: {} } && (t3 = {}.DEBUG), t3;
        }, e2.useColors = function() {
          return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, e2.storage = function() {
          try {
            return localStorage;
          } catch (t3) {
          }
        }(), e2.destroy = (n = false, function() {
          n || (n = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        }), e2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e2.log = console.debug || console.log || function() {
        }, t2.exports = r2(5331)(e2), t2.exports.formatters.j = function(t3) {
          try {
            return JSON.stringify(t3);
          } catch (t4) {
            return "[UnexpectedJSONParseError]: " + t4.message;
          }
        };
      }, 5331: (t2, e2, r2) => {
        function n(t3) {
          return function(t4) {
            if (Array.isArray(t4))
              return o(t4);
          }(t3) || function(t4) {
            if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
              return Array.from(t4);
          }(t3) || function(t4, e3) {
            if (t4) {
              if ("string" == typeof t4)
                return o(t4, e3);
              var r3 = Object.prototype.toString.call(t4).slice(8, -1);
              return "Object" === r3 && t4.constructor && (r3 = t4.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t4) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? o(t4, e3) : void 0;
            }
          }(t3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        t2.exports = function(t3) {
          function e3(t4) {
            var r3, n2, i2, s = null;
            function a() {
              for (var t5 = arguments.length, n3 = new Array(t5), o3 = 0; o3 < t5; o3++)
                n3[o3] = arguments[o3];
              if (a.enabled) {
                var i3 = a, s2 = Number(new Date()), u = s2 - (r3 || s2);
                i3.diff = u, i3.prev = r3, i3.curr = s2, r3 = s2, n3[0] = e3.coerce(n3[0]), "string" != typeof n3[0] && n3.unshift("%O");
                var c = 0;
                n3[0] = n3[0].replace(/%([a-zA-Z%])/g, function(t6, r4) {
                  if ("%%" === t6)
                    return "%";
                  c++;
                  var o4 = e3.formatters[r4];
                  if ("function" == typeof o4) {
                    var s3 = n3[c];
                    t6 = o4.call(i3, s3), n3.splice(c, 1), c--;
                  }
                  return t6;
                }), e3.formatArgs.call(i3, n3);
                var f = i3.log || e3.log;
                f.apply(i3, n3);
              }
            }
            return a.namespace = t4, a.useColors = e3.useColors(), a.color = e3.selectColor(t4), a.extend = o2, a.destroy = e3.destroy, Object.defineProperty(a, "enabled", { enumerable: true, configurable: false, get: function() {
              return null !== s ? s : (n2 !== e3.namespaces && (n2 = e3.namespaces, i2 = e3.enabled(t4)), i2);
            }, set: function(t5) {
              s = t5;
            } }), "function" == typeof e3.init && e3.init(a), a;
          }
          function o2(t4, r3) {
            var n2 = e3(this.namespace + (void 0 === r3 ? ":" : r3) + t4);
            return n2.log = this.log, n2;
          }
          function i(t4) {
            return t4.toString().substring(2, t4.toString().length - 2).replace(/\.\*\?$/, "*");
          }
          return e3.debug = e3, e3.default = e3, e3.coerce = function(t4) {
            return t4 instanceof Error ? t4.stack || t4.message : t4;
          }, e3.disable = function() {
            var t4 = [].concat(n(e3.names.map(i)), n(e3.skips.map(i).map(function(t5) {
              return "-" + t5;
            }))).join(",");
            return e3.enable(""), t4;
          }, e3.enable = function(t4) {
            var r3;
            e3.save(t4), e3.namespaces = t4, e3.names = [], e3.skips = [];
            var n2 = ("string" == typeof t4 ? t4 : "").split(/[\s,]+/), o3 = n2.length;
            for (r3 = 0; r3 < o3; r3++)
              n2[r3] && ("-" === (t4 = n2[r3].replace(/\*/g, ".*?"))[0] ? e3.skips.push(new RegExp("^" + t4.slice(1) + "$")) : e3.names.push(new RegExp("^" + t4 + "$")));
          }, e3.enabled = function(t4) {
            if ("*" === t4[t4.length - 1])
              return true;
            var r3, n2;
            for (r3 = 0, n2 = e3.skips.length; r3 < n2; r3++)
              if (e3.skips[r3].test(t4))
                return false;
            for (r3 = 0, n2 = e3.names.length; r3 < n2; r3++)
              if (e3.names[r3].test(t4))
                return true;
            return false;
          }, e3.humanize = r2(5509), e3.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }, Object.keys(t3).forEach(function(r3) {
            e3[r3] = t3[r3];
          }), e3.names = [], e3.skips = [], e3.formatters = {}, e3.selectColor = function(t4) {
            for (var r3 = 0, n2 = 0; n2 < t4.length; n2++)
              r3 = (r3 << 5) - r3 + t4.charCodeAt(n2), r3 |= 0;
            return e3.colors[Math.abs(r3) % e3.colors.length];
          }, e3.enable(e3.load()), e3;
        };
      }, 7921: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(3818), i = "function" == typeof Symbol && "symbol" === n(Symbol("foo")), s = Object.prototype.toString, a = Array.prototype.concat, u = Object.defineProperty, c = r2(2579)(), f = u && c, l = function(t3, e3, r3, n2) {
          var o2;
          (!(e3 in t3) || "function" == typeof (o2 = n2) && "[object Function]" === s.call(o2) && n2()) && (f ? u(t3, e3, { configurable: true, enumerable: false, value: r3, writable: true }) : t3[e3] = r3);
        }, p = function(t3, e3) {
          var r3 = arguments.length > 2 ? arguments[2] : {}, n2 = o(e3);
          i && (n2 = a.call(n2, Object.getOwnPropertySymbols(e3)));
          for (var s2 = 0; s2 < n2.length; s2 += 1)
            l(t3, n2[s2], e3[n2[s2]], r3[n2[s2]]);
        };
        p.supportsDescriptors = !!f, t2.exports = p;
      }, 8028: (t2) => {
        "use strict";
        function e2(t3, e3) {
          if (null == t3)
            throw new TypeError("Cannot convert first argument to object");
          for (var r2 = Object(t3), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (null != o)
              for (var i = Object.keys(Object(o)), s = 0, a = i.length; s < a; s++) {
                var u = i[s], c = Object.getOwnPropertyDescriptor(o, u);
                void 0 !== c && c.enumerable && (r2[u] = o[u]);
              }
          }
          return r2;
        }
        t2.exports = { assign: e2, polyfill: function() {
          Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: e2 });
        } };
      }, 9620: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        var r2, n = "object" === ("undefined" == typeof Reflect ? "undefined" : e2(Reflect)) ? Reflect : null, o = n && "function" == typeof n.apply ? n.apply : function(t3, e3, r3) {
          return Function.prototype.apply.call(t3, e3, r3);
        };
        r2 = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(t3) {
          return Object.getOwnPropertyNames(t3).concat(Object.getOwnPropertySymbols(t3));
        } : function(t3) {
          return Object.getOwnPropertyNames(t3);
        };
        var i = Number.isNaN || function(t3) {
          return t3 != t3;
        };
        function s() {
          s.init.call(this);
        }
        t2.exports = s, t2.exports.once = function(t3, e3) {
          return new Promise(function(r3, n2) {
            function o2(r4) {
              t3.removeListener(e3, i2), n2(r4);
            }
            function i2() {
              "function" == typeof t3.removeListener && t3.removeListener("error", o2), r3([].slice.call(arguments));
            }
            m(t3, e3, i2, { once: true }), "error" !== e3 && function(t4, e4, r4) {
              "function" == typeof t4.on && m(t4, "error", e4, { once: true });
            }(t3, o2);
          });
        }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var a = 10;
        function u(t3) {
          if ("function" != typeof t3)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + e2(t3));
        }
        function c(t3) {
          return void 0 === t3._maxListeners ? s.defaultMaxListeners : t3._maxListeners;
        }
        function f(t3, e3, r3, n2) {
          var o2, i2, s2, a2;
          if (u(r3), void 0 === (i2 = t3._events) ? (i2 = t3._events = /* @__PURE__ */ Object.create(null), t3._eventsCount = 0) : (void 0 !== i2.newListener && (t3.emit("newListener", e3, r3.listener ? r3.listener : r3), i2 = t3._events), s2 = i2[e3]), void 0 === s2)
            s2 = i2[e3] = r3, ++t3._eventsCount;
          else if ("function" == typeof s2 ? s2 = i2[e3] = n2 ? [r3, s2] : [s2, r3] : n2 ? s2.unshift(r3) : s2.push(r3), (o2 = c(t3)) > 0 && s2.length > o2 && !s2.warned) {
            s2.warned = true;
            var f2 = new Error("Possible EventEmitter memory leak detected. " + s2.length + " " + String(e3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            f2.name = "MaxListenersExceededWarning", f2.emitter = t3, f2.type = e3, f2.count = s2.length, a2 = f2, console && console.warn && console.warn(a2);
          }
          return t3;
        }
        function l() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function p(t3, e3, r3) {
          var n2 = { fired: false, wrapFn: void 0, target: t3, type: e3, listener: r3 }, o2 = l.bind(n2);
          return o2.listener = r3, n2.wrapFn = o2, o2;
        }
        function h(t3, e3, r3) {
          var n2 = t3._events;
          if (void 0 === n2)
            return [];
          var o2 = n2[e3];
          return void 0 === o2 ? [] : "function" == typeof o2 ? r3 ? [o2.listener || o2] : [o2] : r3 ? function(t4) {
            for (var e4 = new Array(t4.length), r4 = 0; r4 < e4.length; ++r4)
              e4[r4] = t4[r4].listener || t4[r4];
            return e4;
          }(o2) : d(o2, o2.length);
        }
        function y(t3) {
          var e3 = this._events;
          if (void 0 !== e3) {
            var r3 = e3[t3];
            if ("function" == typeof r3)
              return 1;
            if (void 0 !== r3)
              return r3.length;
          }
          return 0;
        }
        function d(t3, e3) {
          for (var r3 = new Array(e3), n2 = 0; n2 < e3; ++n2)
            r3[n2] = t3[n2];
          return r3;
        }
        function m(t3, r3, n2, o2) {
          if ("function" == typeof t3.on)
            o2.once ? t3.once(r3, n2) : t3.on(r3, n2);
          else {
            if ("function" != typeof t3.addEventListener)
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + e2(t3));
            t3.addEventListener(r3, function e3(i2) {
              o2.once && t3.removeEventListener(r3, e3), n2(i2);
            });
          }
        }
        Object.defineProperty(s, "defaultMaxListeners", { enumerable: true, get: function() {
          return a;
        }, set: function(t3) {
          if ("number" != typeof t3 || t3 < 0 || i(t3))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          a = t3;
        } }), s.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, s.prototype.setMaxListeners = function(t3) {
          if ("number" != typeof t3 || t3 < 0 || i(t3))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          return this._maxListeners = t3, this;
        }, s.prototype.getMaxListeners = function() {
          return c(this);
        }, s.prototype.emit = function(t3) {
          for (var e3 = [], r3 = 1; r3 < arguments.length; r3++)
            e3.push(arguments[r3]);
          var n2 = "error" === t3, i2 = this._events;
          if (void 0 !== i2)
            n2 = n2 && void 0 === i2.error;
          else if (!n2)
            return false;
          if (n2) {
            var s2;
            if (e3.length > 0 && (s2 = e3[0]), s2 instanceof Error)
              throw s2;
            var a2 = new Error("Unhandled error." + (s2 ? " (" + s2.message + ")" : ""));
            throw a2.context = s2, a2;
          }
          var u2 = i2[t3];
          if (void 0 === u2)
            return false;
          if ("function" == typeof u2)
            o(u2, this, e3);
          else {
            var c2 = u2.length, f2 = d(u2, c2);
            for (r3 = 0; r3 < c2; ++r3)
              o(f2[r3], this, e3);
          }
          return true;
        }, s.prototype.addListener = function(t3, e3) {
          return f(this, t3, e3, false);
        }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t3, e3) {
          return f(this, t3, e3, true);
        }, s.prototype.once = function(t3, e3) {
          return u(e3), this.on(t3, p(this, t3, e3)), this;
        }, s.prototype.prependOnceListener = function(t3, e3) {
          return u(e3), this.prependListener(t3, p(this, t3, e3)), this;
        }, s.prototype.removeListener = function(t3, e3) {
          var r3, n2, o2, i2, s2;
          if (u(e3), void 0 === (n2 = this._events))
            return this;
          if (void 0 === (r3 = n2[t3]))
            return this;
          if (r3 === e3 || r3.listener === e3)
            0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete n2[t3], n2.removeListener && this.emit("removeListener", t3, r3.listener || e3));
          else if ("function" != typeof r3) {
            for (o2 = -1, i2 = r3.length - 1; i2 >= 0; i2--)
              if (r3[i2] === e3 || r3[i2].listener === e3) {
                s2 = r3[i2].listener, o2 = i2;
                break;
              }
            if (o2 < 0)
              return this;
            0 === o2 ? r3.shift() : function(t4, e4) {
              for (; e4 + 1 < t4.length; e4++)
                t4[e4] = t4[e4 + 1];
              t4.pop();
            }(r3, o2), 1 === r3.length && (n2[t3] = r3[0]), void 0 !== n2.removeListener && this.emit("removeListener", t3, s2 || e3);
          }
          return this;
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t3) {
          var e3, r3, n2;
          if (void 0 === (r3 = this._events))
            return this;
          if (void 0 === r3.removeListener)
            return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== r3[t3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete r3[t3]), this;
          if (0 === arguments.length) {
            var o2, i2 = Object.keys(r3);
            for (n2 = 0; n2 < i2.length; ++n2)
              "removeListener" !== (o2 = i2[n2]) && this.removeAllListeners(o2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (e3 = r3[t3]))
            this.removeListener(t3, e3);
          else if (void 0 !== e3)
            for (n2 = e3.length - 1; n2 >= 0; n2--)
              this.removeListener(t3, e3[n2]);
          return this;
        }, s.prototype.listeners = function(t3) {
          return h(this, t3, true);
        }, s.prototype.rawListeners = function(t3) {
          return h(this, t3, false);
        }, s.listenerCount = function(t3, e3) {
          return "function" == typeof t3.listenerCount ? t3.listenerCount(e3) : y.call(t3, e3);
        }, s.prototype.listenerCount = y, s.prototype.eventNames = function() {
          return this._eventsCount > 0 ? r2(this._events) : [];
        };
      }, 5337: (t2, e2, r2) => {
        "use strict";
        var n = r2(8625), o = Object.prototype.toString, i = Object.prototype.hasOwnProperty, s = function(t3, e3, r3) {
          for (var n2 = 0, o2 = t3.length; n2 < o2; n2++)
            i.call(t3, n2) && (null == r3 ? e3(t3[n2], n2, t3) : e3.call(r3, t3[n2], n2, t3));
        }, a = function(t3, e3, r3) {
          for (var n2 = 0, o2 = t3.length; n2 < o2; n2++)
            null == r3 ? e3(t3.charAt(n2), n2, t3) : e3.call(r3, t3.charAt(n2), n2, t3);
        }, u = function(t3, e3, r3) {
          for (var n2 in t3)
            i.call(t3, n2) && (null == r3 ? e3(t3[n2], n2, t3) : e3.call(r3, t3[n2], n2, t3));
        };
        t2.exports = function(t3, e3, r3) {
          if (!n(e3))
            throw new TypeError("iterator must be a function");
          var i2;
          arguments.length >= 3 && (i2 = r3), "[object Array]" === o.call(t3) ? s(t3, e3, i2) : "string" == typeof t3 ? a(t3, e3, i2) : u(t3, e3, i2);
        };
      }, 5929: (t2) => {
        "use strict";
        var e2 = "Function.prototype.bind called on incompatible ", r2 = Array.prototype.slice, n = Object.prototype.toString, o = "[object Function]";
        t2.exports = function(t3) {
          var i = this;
          if ("function" != typeof i || n.call(i) !== o)
            throw new TypeError(e2 + i);
          for (var s, a = r2.call(arguments, 1), u = function() {
            if (this instanceof s) {
              var e3 = i.apply(this, a.concat(r2.call(arguments)));
              return Object(e3) === e3 ? e3 : this;
            }
            return i.apply(t3, a.concat(r2.call(arguments)));
          }, c = Math.max(0, i.length - a.length), f = [], l = 0; l < c; l++)
            f.push("$" + l);
          if (s = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(u), i.prototype) {
            var p = function() {
            };
            p.prototype = i.prototype, s.prototype = new p(), p.prototype = null;
          }
          return s;
        };
      }, 5246: (t2, e2, r2) => {
        "use strict";
        var n = r2(5929);
        t2.exports = Function.prototype.bind || n;
      }, 6893: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o, i = SyntaxError, s = Function, a = TypeError, u = function(t3) {
          try {
            return s('"use strict"; return (' + t3 + ").constructor;")();
          } catch (t4) {
          }
        }, c = Object.getOwnPropertyDescriptor;
        if (c)
          try {
            c({}, "");
          } catch (t3) {
            c = null;
          }
        var f = function() {
          throw new a();
        }, l = c ? function() {
          try {
            return f;
          } catch (t3) {
            try {
              return c(arguments, "callee").get;
            } catch (t4) {
              return f;
            }
          }
        }() : f, p = r2(5990)(), h = Object.getPrototypeOf || function(t3) {
          return t3.__proto__;
        }, y = {}, d = "undefined" == typeof Uint8Array ? o : h(Uint8Array), m = { "%AggregateError%": "undefined" == typeof AggregateError ? o : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? o : ArrayBuffer, "%ArrayIteratorPrototype%": p ? h([][Symbol.iterator]()) : o, "%AsyncFromSyncIteratorPrototype%": o, "%AsyncFunction%": y, "%AsyncGenerator%": y, "%AsyncGeneratorFunction%": y, "%AsyncIteratorPrototype%": y, "%Atomics%": "undefined" == typeof Atomics ? o : Atomics, "%BigInt%": "undefined" == typeof BigInt ? o : BigInt, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? o : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" == typeof Float32Array ? o : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? o : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? o : FinalizationRegistry, "%Function%": s, "%GeneratorFunction%": y, "%Int8Array%": "undefined" == typeof Int8Array ? o : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? o : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? o : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": p ? h(h([][Symbol.iterator]())) : o, "%JSON%": "object" === ("undefined" == typeof JSON ? "undefined" : n(JSON)) ? JSON : o, "%Map%": "undefined" == typeof Map ? o : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && p ? h((/* @__PURE__ */ new Map())[Symbol.iterator]()) : o, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? o : Promise, "%Proxy%": "undefined" == typeof Proxy ? o : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" == typeof Reflect ? o : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? o : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && p ? h((/* @__PURE__ */ new Set())[Symbol.iterator]()) : o, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? o : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": p ? h(""[Symbol.iterator]()) : o, "%Symbol%": p ? Symbol : o, "%SyntaxError%": i, "%ThrowTypeError%": l, "%TypedArray%": d, "%TypeError%": a, "%Uint8Array%": "undefined" == typeof Uint8Array ? o : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? o : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? o : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? o : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" == typeof WeakMap ? o : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? o : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? o : WeakSet }, v = function t3(e3) {
          var r3;
          if ("%AsyncFunction%" === e3)
            r3 = u("async function () {}");
          else if ("%GeneratorFunction%" === e3)
            r3 = u("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e3)
            r3 = u("async function* () {}");
          else if ("%AsyncGenerator%" === e3) {
            var n2 = t3("%AsyncGeneratorFunction%");
            n2 && (r3 = n2.prototype);
          } else if ("%AsyncIteratorPrototype%" === e3) {
            var o2 = t3("%AsyncGenerator%");
            o2 && (r3 = h(o2.prototype));
          }
          return m[e3] = r3, r3;
        }, b = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, g = r2(5246), _ = r2(7751), w = g.call(Function.call, Array.prototype.concat), O = g.call(Function.apply, Array.prototype.splice), $ = g.call(Function.call, String.prototype.replace), S = g.call(Function.call, String.prototype.slice), j = g.call(Function.call, RegExp.prototype.exec), A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, P = /\\(\\)?/g, E = function(t3) {
          var e3 = S(t3, 0, 1), r3 = S(t3, -1);
          if ("%" === e3 && "%" !== r3)
            throw new i("invalid intrinsic syntax, expected closing `%`");
          if ("%" === r3 && "%" !== e3)
            throw new i("invalid intrinsic syntax, expected opening `%`");
          var n2 = [];
          return $(t3, A, function(t4, e4, r4, o2) {
            n2[n2.length] = r4 ? $(o2, P, "$1") : e4 || t4;
          }), n2;
        }, x = function(t3, e3) {
          var r3, n2 = t3;
          if (_(b, n2) && (n2 = "%" + (r3 = b[n2])[0] + "%"), _(m, n2)) {
            var o2 = m[n2];
            if (o2 === y && (o2 = v(n2)), void 0 === o2 && !e3)
              throw new a("intrinsic " + t3 + " exists, but is not available. Please file an issue!");
            return { alias: r3, name: n2, value: o2 };
          }
          throw new i("intrinsic " + t3 + " does not exist!");
        };
        t2.exports = function(t3, e3) {
          if ("string" != typeof t3 || 0 === t3.length)
            throw new a("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof e3)
            throw new a('"allowMissing" argument must be a boolean');
          if (null === j(/^%?[^%]*%?$/, t3))
            throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
          var r3 = E(t3), n2 = r3.length > 0 ? r3[0] : "", o2 = x("%" + n2 + "%", e3), s2 = o2.name, u2 = o2.value, f2 = false, l2 = o2.alias;
          l2 && (n2 = l2[0], O(r3, w([0, 1], l2)));
          for (var p2 = 1, h2 = true; p2 < r3.length; p2 += 1) {
            var y2 = r3[p2], d2 = S(y2, 0, 1), v2 = S(y2, -1);
            if (('"' === d2 || "'" === d2 || "`" === d2 || '"' === v2 || "'" === v2 || "`" === v2) && d2 !== v2)
              throw new i("property names with quotes must have matching quotes");
            if ("constructor" !== y2 && h2 || (f2 = true), _(m, s2 = "%" + (n2 += "." + y2) + "%"))
              u2 = m[s2];
            else if (null != u2) {
              if (!(y2 in u2)) {
                if (!e3)
                  throw new a("base intrinsic for " + t3 + " exists, but the property is not available.");
                return;
              }
              if (c && p2 + 1 >= r3.length) {
                var b2 = c(u2, y2);
                u2 = (h2 = !!b2) && "get" in b2 && !("originalValue" in b2.get) ? b2.get : u2[y2];
              } else
                h2 = _(u2, y2), u2 = u2[y2];
              h2 && !f2 && (m[s2] = u2);
            }
          }
          return u2;
        };
      }, 1554: (t2, e2, r2) => {
        "use strict";
        var n = r2(6893)("%Object.getOwnPropertyDescriptor%", true);
        if (n)
          try {
            n([], "length");
          } catch (t3) {
            n = null;
          }
        t2.exports = n;
      }, 2579: (t2, e2, r2) => {
        "use strict";
        var n = r2(6893)("%Object.defineProperty%", true), o = function() {
          if (n)
            try {
              return n({}, "a", { value: 1 }), true;
            } catch (t3) {
              return false;
            }
          return false;
        };
        o.hasArrayLengthDefineBug = function() {
          if (!o())
            return null;
          try {
            return 1 !== n([], "length", { value: 1 }).length;
          } catch (t3) {
            return true;
          }
        }, t2.exports = o;
      }, 5990: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = "undefined" != typeof Symbol && Symbol, i = r2(3031);
        t2.exports = function() {
          return "function" == typeof o && "function" == typeof Symbol && "symbol" === n(o("foo")) && "symbol" === n(Symbol("bar")) && i();
        };
      }, 3031: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        t2.exports = function() {
          if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
            return false;
          if ("symbol" === e2(Symbol.iterator))
            return true;
          var t3 = {}, r2 = Symbol("test"), n = Object(r2);
          if ("string" == typeof r2)
            return false;
          if ("[object Symbol]" !== Object.prototype.toString.call(r2))
            return false;
          if ("[object Symbol]" !== Object.prototype.toString.call(n))
            return false;
          for (r2 in t3[r2] = 42, t3)
            return false;
          if ("function" == typeof Object.keys && 0 !== Object.keys(t3).length)
            return false;
          if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t3).length)
            return false;
          var o = Object.getOwnPropertySymbols(t3);
          if (1 !== o.length || o[0] !== r2)
            return false;
          if (!Object.prototype.propertyIsEnumerable.call(t3, r2))
            return false;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var i = Object.getOwnPropertyDescriptor(t3, r2);
            if (42 !== i.value || true !== i.enumerable)
              return false;
          }
          return true;
        };
      }, 5994: (t2, e2, r2) => {
        "use strict";
        var n = r2(3031);
        t2.exports = function() {
          return n() && !!Symbol.toStringTag;
        };
      }, 7751: (t2, e2, r2) => {
        "use strict";
        var n = r2(5246);
        t2.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
      }, 8405: (t2, e2) => {
        e2.read = function(t3, e3, r2, n, o) {
          var i, s, a = 8 * o - n - 1, u = (1 << a) - 1, c = u >> 1, f = -7, l = r2 ? o - 1 : 0, p = r2 ? -1 : 1, h = t3[e3 + l];
          for (l += p, i = h & (1 << -f) - 1, h >>= -f, f += a; f > 0; i = 256 * i + t3[e3 + l], l += p, f -= 8)
            ;
          for (s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + t3[e3 + l], l += p, f -= 8)
            ;
          if (0 === i)
            i = 1 - c;
          else {
            if (i === u)
              return s ? NaN : 1 / 0 * (h ? -1 : 1);
            s += Math.pow(2, n), i -= c;
          }
          return (h ? -1 : 1) * s * Math.pow(2, i - n);
        }, e2.write = function(t3, e3, r2, n, o, i) {
          var s, a, u, c = 8 * i - o - 1, f = (1 << c) - 1, l = f >> 1, p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : i - 1, y = n ? 1 : -1, d = e3 < 0 || 0 === e3 && 1 / e3 < 0 ? 1 : 0;
          for (e3 = Math.abs(e3), isNaN(e3) || e3 === 1 / 0 ? (a = isNaN(e3) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e3) / Math.LN2), e3 * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e3 += s + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (e3 * u - 1) * Math.pow(2, o), s += l) : (a = e3 * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; t3[r2 + h] = 255 & a, h += y, a /= 256, o -= 8)
            ;
          for (s = s << o | a, c += o; c > 0; t3[r2 + h] = 255 & s, h += y, s /= 256, c -= 8)
            ;
          t3[r2 + h - y] |= 128 * d;
        };
      }, 376: (t2) => {
        "function" == typeof Object.create ? t2.exports = function(t3, e2) {
          e2 && (t3.super_ = e2, t3.prototype = Object.create(e2.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
        } : t2.exports = function(t3, e2) {
          if (e2) {
            t3.super_ = e2;
            var r2 = function() {
            };
            r2.prototype = e2.prototype, t3.prototype = new r2(), t3.prototype.constructor = t3;
          }
        };
      }, 2755: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(5994)(), i = r2(8780)("Object.prototype.toString"), s = function(t3) {
          return !(o && t3 && "object" === n(t3) && Symbol.toStringTag in t3) && "[object Arguments]" === i(t3);
        }, a = function(t3) {
          return !!s(t3) || null !== t3 && "object" === n(t3) && "number" == typeof t3.length && t3.length >= 0 && "[object Array]" !== i(t3) && "[object Function]" === i(t3.callee);
        }, u = function() {
          return s(arguments);
        }();
        s.isLegacyArguments = a, t2.exports = u ? s : a;
      }, 8625: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        var r2, n, o = Function.prototype.toString, i = "object" === ("undefined" == typeof Reflect ? "undefined" : e2(Reflect)) && null !== Reflect && Reflect.apply;
        if ("function" == typeof i && "function" == typeof Object.defineProperty)
          try {
            r2 = Object.defineProperty({}, "length", { get: function() {
              throw n;
            } }), n = {}, i(function() {
              throw 42;
            }, null, r2);
          } catch (t3) {
            t3 !== n && (i = null);
          }
        else
          i = null;
        var s = /^\s*class\b/, a = function(t3) {
          try {
            var e3 = o.call(t3);
            return s.test(e3);
          } catch (t4) {
            return false;
          }
        }, u = function(t3) {
          try {
            return !a(t3) && (o.call(t3), true);
          } catch (t4) {
            return false;
          }
        }, c = Object.prototype.toString, f = "function" == typeof Symbol && !!Symbol.toStringTag, l = !(0 in [,]), p = function() {
          return false;
        };
        if ("object" === ("undefined" == typeof document ? "undefined" : e2(document))) {
          var h = document.all;
          c.call(h) === c.call(document.all) && (p = function(t3) {
            if ((l || !t3) && (void 0 === t3 || "object" === e2(t3)))
              try {
                var r3 = c.call(t3);
                return ("[object HTMLAllCollection]" === r3 || "[object HTML document.all class]" === r3 || "[object HTMLCollection]" === r3 || "[object Object]" === r3) && null == t3("");
              } catch (t4) {
              }
            return false;
          });
        }
        t2.exports = i ? function(t3) {
          if (p(t3))
            return true;
          if (!t3)
            return false;
          if ("function" != typeof t3 && "object" !== e2(t3))
            return false;
          try {
            i(t3, null, r2);
          } catch (t4) {
            if (t4 !== n)
              return false;
          }
          return !a(t3) && u(t3);
        } : function(t3) {
          if (p(t3))
            return true;
          if (!t3)
            return false;
          if ("function" != typeof t3 && "object" !== e2(t3))
            return false;
          if (f)
            return u(t3);
          if (a(t3))
            return false;
          var r3 = c.call(t3);
          return !("[object Function]" !== r3 && "[object GeneratorFunction]" !== r3 && !/^\[object HTML/.test(r3)) && u(t3);
        };
      }, 6738: (t2, e2, r2) => {
        "use strict";
        var n, o = Object.prototype.toString, i = Function.prototype.toString, s = /^\s*(?:function)?\*/, a = r2(5994)(), u = Object.getPrototypeOf;
        t2.exports = function(t3) {
          if ("function" != typeof t3)
            return false;
          if (s.test(i.call(t3)))
            return true;
          if (!a)
            return "[object GeneratorFunction]" === o.call(t3);
          if (!u)
            return false;
          if (void 0 === n) {
            var e3 = function() {
              if (!a)
                return false;
              try {
                return Function("return function*() {}")();
              } catch (t4) {
              }
            }();
            n = !!e3 && u(e3);
          }
          return u(t3) === n;
        };
      }, 2703: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          return t3 != t3;
        };
      }, 2191: (t2, e2, r2) => {
        "use strict";
        var n = r2(3862), o = r2(7921), i = r2(2703), s = r2(4828), a = r2(2568), u = n(s(), Number);
        o(u, { getPolyfill: s, implementation: i, shim: a }), t2.exports = u;
      }, 4828: (t2, e2, r2) => {
        "use strict";
        var n = r2(2703);
        t2.exports = function() {
          return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n;
        };
      }, 2568: (t2, e2, r2) => {
        "use strict";
        var n = r2(7921), o = r2(4828);
        t2.exports = function() {
          var t3 = o();
          return n(Number, { isNaN: t3 }, { isNaN: function() {
            return Number.isNaN !== t3;
          } }), t3;
        };
      }, 7913: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(5337), i = r2(6461), s = r2(8780), a = s("Object.prototype.toString"), u = r2(5994)(), c = r2(1554), f = "undefined" == typeof globalThis ? r2.g : globalThis, l = i(), p = s("Array.prototype.indexOf", true) || function(t3, e3) {
          for (var r3 = 0; r3 < t3.length; r3 += 1)
            if (t3[r3] === e3)
              return r3;
          return -1;
        }, h = s("String.prototype.slice"), y = {}, d = Object.getPrototypeOf;
        u && c && d && o(l, function(t3) {
          var e3 = new f[t3]();
          if (Symbol.toStringTag in e3) {
            var r3 = d(e3), n2 = c(r3, Symbol.toStringTag);
            if (!n2) {
              var o2 = d(r3);
              n2 = c(o2, Symbol.toStringTag);
            }
            y[t3] = n2.get;
          }
        }), t2.exports = function(t3) {
          if (!t3 || "object" !== n(t3))
            return false;
          if (!u || !(Symbol.toStringTag in t3)) {
            var e3 = h(a(t3), 8, -1);
            return p(l, e3) > -1;
          }
          return !!c && function(t4) {
            var e4 = false;
            return o(y, function(r3, n2) {
              if (!e4)
                try {
                  e4 = r3.call(t4) === n2;
                } catch (t5) {
                }
            }), e4;
          }(t3);
        };
      }, 3138: (t2) => {
        "use strict";
        function e2(t3, e3) {
          var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (!r3) {
            if (Array.isArray(t3) || (r3 = n(t3)) || e3 && t3 && "number" == typeof t3.length) {
              r3 && (t3 = r3);
              var o2 = 0, i2 = function() {
              };
              return { s: i2, n: function() {
                return o2 >= t3.length ? { done: true } : { done: false, value: t3[o2++] };
              }, e: function(t4) {
                throw t4;
              }, f: i2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s2, a2 = true, u2 = false;
          return { s: function() {
            r3 = r3.call(t3);
          }, n: function() {
            var t4 = r3.next();
            return a2 = t4.done, t4;
          }, e: function(t4) {
            u2 = true, s2 = t4;
          }, f: function() {
            try {
              a2 || null == r3.return || r3.return();
            } finally {
              if (u2)
                throw s2;
            }
          } };
        }
        function r2(t3) {
          return r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, r2(t3);
        }
        function n(t3, e3) {
          if (t3) {
            if ("string" == typeof t3)
              return o(t3, e3);
            var r3 = Object.prototype.toString.call(t3).slice(8, -1);
            return "Object" === r3 && t3.constructor && (r3 = t3.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t3) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? o(t3, e3) : void 0;
          }
        }
        function o(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function i(t3, e3, r3) {
          return i = s() ? Reflect.construct.bind() : function(t4, e4, r4) {
            var n2 = [null];
            n2.push.apply(n2, e4);
            var o2 = new (Function.bind.apply(t4, n2))();
            return r4 && a(o2, r4.prototype), o2;
          }, i.apply(null, arguments);
        }
        function s() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }
        function a(t3, e3) {
          return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, a(t3, e3);
        }
        function u() {
          this._pres = /* @__PURE__ */ new Map(), this._posts = /* @__PURE__ */ new Map();
        }
        function c(t3, e3, r3, n2, o2, i2, s2) {
          return i2.useErrorHandlers ? t3.execPost(r3, n2, o2, { error: e3 }, function(t4) {
            return "function" == typeof s2 && s2(t4);
          }) : "function" == typeof s2 && s2(e3);
        }
        function f(t3, e3, r3, n2) {
          var o2;
          try {
            o2 = t3.apply(e3, r3);
          } catch (t4) {
            return n2(t4);
          }
          l(o2) && o2.then(function() {
            return n2();
          }, function(t4) {
            return n2(t4);
          });
        }
        function l(t3) {
          return "object" === r2(t3) && null !== t3 && "function" == typeof t3.then;
        }
        function p(t3) {
          var e3 = false, r3 = this;
          return function() {
            var n2 = arguments;
            if (!e3)
              return e3 = true, h(function() {
                return t3.apply(r3, n2);
              });
          };
        }
        u.skipWrappedFunction = function() {
          if (!(this instanceof u.skipWrappedFunction))
            return i(u.skipWrappedFunction, Array.prototype.slice.call(arguments));
          this.args = Array.prototype.slice.call(arguments);
        }, u.overwriteResult = function() {
          if (!(this instanceof u.overwriteResult))
            return i(u.overwriteResult, Array.prototype.slice.call(arguments));
          this.args = Array.prototype.slice.call(arguments);
        }, u.prototype.execPre = function(t3, e3, r3, n2) {
          3 === arguments.length && (n2 = r3, r3 = []);
          var o2 = this._pres.get(t3) || [], i2 = o2.length, s2 = o2.numAsync || 0, a2 = 0, c2 = s2, y2 = false, d = r3, m = null;
          if (!i2)
            return h(function() {
              n2(null);
            });
          function v() {
            if (!(a2 >= i2)) {
              var t4 = o2[a2];
              if (t4.isAsync) {
                var r4 = [p(b), p(function(t5) {
                  if (t5) {
                    if (y2)
                      return;
                    if (!(t5 instanceof u.skipWrappedFunction))
                      return y2 = true, n2(t5);
                    m = t5;
                  }
                  if (0 == --c2 && a2 >= i2)
                    return n2(m);
                })];
                f(t4.fn, e3, r4, r4[0]);
              } else if (t4.fn.length > 0) {
                for (var s3 = [p(b)], g = arguments.length >= 2 ? arguments : [null].concat(d), _ = 1; _ < g.length; ++_)
                  s3.push(g[_]);
                f(t4.fn, e3, s3, s3[0]);
              } else {
                var w = null;
                try {
                  w = t4.fn.call(e3);
                } catch (t5) {
                  if (null != t5)
                    return n2(t5);
                }
                if (l(w))
                  w.then(function() {
                    return b();
                  }, function(t5) {
                    return b(t5);
                  });
                else {
                  if (++a2 >= i2)
                    return c2 > 0 ? void 0 : h(function() {
                      n2(m);
                    });
                  v();
                }
              }
            }
          }
          function b(t4) {
            if (t4) {
              if (y2)
                return;
              if (!(t4 instanceof u.skipWrappedFunction))
                return y2 = true, n2(t4);
              m = t4;
            }
            if (++a2 >= i2)
              return c2 > 0 ? void 0 : n2(m);
            v.apply(e3, arguments);
          }
          v.apply(null, [null].concat(r3));
        }, u.prototype.execPreSync = function(t3, e3, r3) {
          for (var n2 = this._pres.get(t3) || [], o2 = n2.length, i2 = 0; i2 < o2; ++i2)
            n2[i2].fn.apply(e3, r3 || []);
        }, u.prototype.execPost = function(t3, e3, r3, n2, o2) {
          arguments.length < 5 && (o2 = n2, n2 = null);
          var i2 = this._posts.get(t3) || [], s2 = i2.length, a2 = 0, c2 = null;
          if (n2 && n2.error && (c2 = n2.error), !s2)
            return h(function() {
              o2.apply(null, [c2].concat(r3));
            });
          function d() {
            for (var t4 = i2[a2].fn, n3 = 0, h2 = r3.length, m = [], v = 0; v < h2; ++v)
              n3 += r3[v] && r3[v]._kareemIgnore ? 0 : 1, r3[v] && r3[v]._kareemIgnore || m.push(r3[v]);
            if (c2)
              if (y(i2[a2], n3)) {
                var b = p(function(t5) {
                  if (t5) {
                    if (t5 instanceof u.overwriteResult)
                      return r3 = t5.args, ++a2 >= s2 ? o2.call(null, c2) : d();
                    c2 = t5;
                  }
                  if (++a2 >= s2)
                    return o2.call(null, c2);
                  d();
                });
                f(t4, e3, [c2].concat(m).concat([b]), b);
              } else {
                if (++a2 >= s2)
                  return o2.call(null, c2);
                d();
              }
            else {
              var g = p(function(t5) {
                return t5 ? t5 instanceof u.overwriteResult ? (r3 = t5.args, ++a2 >= s2 ? o2.apply(null, [null].concat(r3)) : d()) : (c2 = t5, d()) : ++a2 >= s2 ? o2.apply(null, [null].concat(r3)) : void d();
              });
              if (y(i2[a2], n3))
                return ++a2 >= s2 ? o2.apply(null, [null].concat(r3)) : d();
              if (t4.length === n3 + 1)
                f(t4, e3, m.concat([g]), g);
              else {
                var _, w;
                try {
                  w = t4.apply(e3, m);
                } catch (t5) {
                  _ = t5, c2 = t5;
                }
                if (l(w))
                  return w.then(function(t5) {
                    g(t5 instanceof u.overwriteResult ? t5 : null);
                  }, function(t5) {
                    return g(t5);
                  });
                if (w instanceof u.overwriteResult && (r3 = w.args), ++a2 >= s2)
                  return o2.apply(null, [_].concat(r3));
                d();
              }
            }
          }
          d();
        }, u.prototype.execPostSync = function(t3, e3, r3) {
          for (var n2 = this._posts.get(t3) || [], o2 = n2.length, i2 = 0; i2 < o2; ++i2) {
            var s2 = n2[i2].fn.apply(e3, r3 || []);
            s2 instanceof u.overwriteResult && (r3 = s2.args);
          }
          return r3;
        }, u.prototype.createWrapperSync = function(t3, e3) {
          var r3 = this;
          return function() {
            r3.execPreSync(t3, this, arguments);
            var n2 = e3.apply(this, arguments), o2 = r3.execPostSync(t3, this, [n2]);
            return o2[0];
          };
        }, u.prototype.wrap = function(t3, e3, r3, i2, s2) {
          var a2 = i2.length > 0 ? i2[i2.length - 1] : null, f2 = Array.from(i2);
          "function" == typeof a2 && f2.pop();
          var p2 = this, h2 = (s2 = s2 || {}).checkForPromise;
          this.execPre(t3, r3, i2, function(i3) {
            if (i3 && !(i3 instanceof u.skipWrappedFunction)) {
              for (var y2 = s2.numCallbackParams || 0, d = s2.contextParameter ? [r3] : [], m = d.length; m < y2; ++m)
                d.push(null);
              return c(p2, i3, t3, r3, d, s2, a2);
            }
            var v, b, g = e3.length;
            if (i3 instanceof u.skipWrappedFunction)
              return v = i3.args[0], _.apply(void 0, [null].concat(function(t4) {
                if (Array.isArray(t4))
                  return o(t4);
              }(b = i3.args) || function(t4) {
                if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
                  return Array.from(t4);
              }(b) || n(b) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()));
            try {
              v = e3.apply(r3, f2.concat(_));
            } catch (t4) {
              return _(t4);
            }
            if (h2) {
              if (l(v))
                return v.then(function(t4) {
                  return _(null, t4);
                }, function(t4) {
                  return _(t4);
                });
              if (g < f2.length + 1)
                return _(null, v);
            }
            function _() {
              var e4 = Array.from(arguments);
              if (e4.shift(), s2.nullResultByDefault && 0 === e4.length && e4.push(null), arguments[0])
                return c(p2, arguments[0], t3, r3, e4, s2, a2);
              p2.execPost(t3, r3, e4, function() {
                null !== a2 && (arguments[0] ? a2(arguments[0]) : a2.apply(r3, arguments));
              });
            }
          });
        }, u.prototype.filter = function(t3) {
          for (var e3 = this, r3 = this.clone(), n2 = Array.from(r3._pres.keys()), o2 = function() {
            var n3 = s2[i2], o3 = e3._pres.get(n3).map(function(t4) {
              return Object.assign({}, t4, { name: n3 });
            }).filter(t3);
            if (0 === o3.length)
              return r3._pres.delete(n3), "continue";
            o3.numAsync = o3.filter(function(t4) {
              return t4.isAsync;
            }).length, r3._pres.set(n3, o3);
          }, i2 = 0, s2 = n2; i2 < s2.length; i2++)
            o2();
          for (var a2 = Array.from(r3._posts.keys()), u2 = function() {
            var n3 = f2[c2], o3 = e3._posts.get(n3).map(function(t4) {
              return Object.assign({}, t4, { name: n3 });
            }).filter(t3);
            if (0 === o3.length)
              return r3._posts.delete(n3), "continue";
            r3._posts.set(n3, o3);
          }, c2 = 0, f2 = a2; c2 < f2.length; c2++)
            u2();
          return r3;
        }, u.prototype.hasHooks = function(t3) {
          return this._pres.has(t3) || this._posts.has(t3);
        }, u.prototype.createWrapper = function(t3, e3, r3, n2) {
          var o2 = this;
          return this.hasHooks(t3) ? function() {
            var i2 = r3 || this;
            o2.wrap(t3, e3, i2, Array.from(arguments), n2);
          } : function() {
            var t4 = arguments, r4 = this;
            h(function() {
              return e3.apply(r4, t4);
            });
          };
        }, u.prototype.pre = function(t3, e3, n2, o2, i2) {
          var s2 = {};
          "object" === r2(e3) && null !== e3 ? e3 = (s2 = e3).isAsync : "boolean" != typeof arguments[1] && (n2 = e3, e3 = false);
          var a2 = this._pres.get(t3) || [];
          if (this._pres.set(t3, a2), e3 && (a2.numAsync = a2.numAsync || 0, ++a2.numAsync), "function" != typeof n2)
            throw new Error('pre() requires a function, got "' + r2(n2) + '"');
          return i2 ? a2.unshift(Object.assign({}, s2, { fn: n2, isAsync: e3 })) : a2.push(Object.assign({}, s2, { fn: n2, isAsync: e3 })), this;
        }, u.prototype.post = function(t3, e3, n2, o2) {
          var i2 = this._posts.get(t3) || [];
          if ("function" == typeof e3 && (o2 = !!n2, n2 = e3, e3 = {}), "function" != typeof n2)
            throw new Error('post() requires a function, got "' + r2(n2) + '"');
          return o2 ? i2.unshift(Object.assign({}, e3, { fn: n2 })) : i2.push(Object.assign({}, e3, { fn: n2 })), this._posts.set(t3, i2), this;
        }, u.prototype.clone = function() {
          var t3, r3 = new u(), n2 = e2(this._pres.keys());
          try {
            for (n2.s(); !(t3 = n2.n()).done; ) {
              var o2 = t3.value, i2 = this._pres.get(o2).slice();
              i2.numAsync = this._pres.get(o2).numAsync, r3._pres.set(o2, i2);
            }
          } catch (t4) {
            n2.e(t4);
          } finally {
            n2.f();
          }
          var s2, a2 = e2(this._posts.keys());
          try {
            for (a2.s(); !(s2 = a2.n()).done; ) {
              var c2 = s2.value;
              r3._posts.set(c2, this._posts.get(c2).slice());
            }
          } catch (t4) {
            a2.e(t4);
          } finally {
            a2.f();
          }
          return r3;
        }, u.prototype.merge = function(t3, r3) {
          var n2, o2 = (r3 = 1 === arguments.length || r3) ? this.clone() : this, i2 = e2(t3._pres.keys());
          try {
            var s2 = function() {
              var e3 = n2.value, r4 = o2._pres.get(e3) || [], i3 = t3._pres.get(e3).filter(function(t4) {
                return -1 === r4.map(function(t5) {
                  return t5.fn;
                }).indexOf(t4.fn);
              }), s3 = r4.concat(i3);
              s3.numAsync = r4.numAsync || 0, s3.numAsync += i3.filter(function(t4) {
                return t4.isAsync;
              }).length, o2._pres.set(e3, s3);
            };
            for (i2.s(); !(n2 = i2.n()).done; )
              s2();
          } catch (t4) {
            i2.e(t4);
          } finally {
            i2.f();
          }
          var a2, u2 = e2(t3._posts.keys());
          try {
            var c2 = function() {
              var e3 = a2.value, r4 = o2._posts.get(e3) || [], n3 = t3._posts.get(e3).filter(function(t4) {
                return -1 === r4.indexOf(t4);
              });
              o2._posts.set(e3, r4.concat(n3));
            };
            for (u2.s(); !(a2 = u2.n()).done; )
              c2();
          } catch (t4) {
            u2.e(t4);
          } finally {
            u2.f();
          }
          return o2;
        };
        var h = "object" === (void 0 === { env: {} } ? "undefined" : r2({ env: {} })) && null !== { env: {} } && { env: {} }.nextTick || function(t3) {
          setTimeout(t3, 0);
        };
        function y(t3, e3) {
          return !!t3.errorHandler || t3.fn.length === e3 + 2;
        }
        t2.exports = u;
      }, 3564: (t2, e2, r2) => {
        "use strict";
        t2.exports = r2(8424);
      }, 8424: (t2, e2, r2) => {
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(7355), i = ["__proto__", "constructor", "prototype"];
        function s(t3, e3, r3, n2, o2, i2) {
          for (var a2, u = 0; u < t3.length && u < e3.length; ++u)
            a2 = t3[u], Array.isArray(a2) && Array.isArray(e3[u]) ? s(a2, e3[u], r3, n2, o2, i2) : a2 && (n2 ? n2(a2, r3, i2(e3[u])) : (a2[o2] && (a2 = a2[o2]), a2[r3] = i2(e3[u])));
        }
        function a(t3) {
          return t3;
        }
        e2.get = function(t3, r3, i2, s2) {
          var u;
          "function" == typeof i2 && (i2.length < 2 ? (s2 = i2, i2 = void 0) : (u = i2, i2 = void 0)), s2 || (s2 = a);
          var c = "string" == typeof t3 ? o(t3) : t3;
          if (!Array.isArray(c))
            throw new TypeError("Invalid `path`. Must be either string or array");
          for (var f, l = r3, p = 0; p < c.length; ++p) {
            if (f = c[p], "string" != typeof c[p] && "number" != typeof c[p])
              throw new TypeError("Each segment of path to `get()` must be a string or number, got " + n(c[p]));
            if (Array.isArray(l) && !/^\d+$/.test(f)) {
              var h = c.slice(p);
              return [].concat(l).map(function(t4) {
                return t4 ? e2.get(h, t4, i2 || u, s2) : s2(void 0);
              });
            }
            if (u)
              l = u(l, f);
            else {
              var y = i2 && l[i2] ? l[i2] : l;
              l = y instanceof Map ? y.get(f) : y[f];
            }
            if (!l)
              return s2(l);
          }
          return s2(l);
        }, e2.has = function(t3, e3) {
          var r3 = "string" == typeof t3 ? o(t3) : t3;
          if (!Array.isArray(r3))
            throw new TypeError("Invalid `path`. Must be either string or array");
          for (var i2 = r3.length, s2 = e3, a2 = 0; a2 < i2; ++a2) {
            if ("string" != typeof r3[a2] && "number" != typeof r3[a2])
              throw new TypeError("Each segment of path to `has()` must be a string or number, got " + n(r3[a2]));
            if (null == s2 || "object" !== n(s2) || !(r3[a2] in s2))
              return false;
            s2 = s2[r3[a2]];
          }
          return true;
        }, e2.unset = function(t3, e3) {
          var r3 = "string" == typeof t3 ? o(t3) : t3;
          if (!Array.isArray(r3))
            throw new TypeError("Invalid `path`. Must be either string or array");
          for (var s2 = r3.length, a2 = e3, u = 0; u < s2; ++u) {
            if (null == a2 || "object" !== n(a2) || !(r3[u] in a2))
              return false;
            if ("string" != typeof r3[u] && "number" != typeof r3[u])
              throw new TypeError("Each segment of path to `unset()` must be a string or number, got " + n(r3[u]));
            if (-1 !== i.indexOf(r3[u]))
              return false;
            if (u === s2 - 1)
              return delete a2[r3[u]], true;
            a2 = a2 instanceof Map ? a2.get(r3[u]) : a2[r3[u]];
          }
          return true;
        }, e2.set = function(t3, r3, u, c, f, l) {
          var p;
          "function" == typeof c && (c.length < 2 ? (f = c, c = void 0) : (p = c, c = void 0)), f || (f = a);
          var h = "string" == typeof t3 ? o(t3) : t3;
          if (!Array.isArray(h))
            throw new TypeError("Invalid `path`. Must be either string or array");
          if (null != u) {
            for (var y = 0; y < h.length; ++y) {
              if ("string" != typeof h[y] && "number" != typeof h[y])
                throw new TypeError("Each segment of path to `set()` must be a string or number, got " + n(h[y]));
              if (-1 !== i.indexOf(h[y]))
                return;
            }
            for (var d, m = l || /\$/.test(t3) && false !== l, v = u, b = (y = 0, h.length - 1); y < b; ++y)
              if ("$" != (d = h[y])) {
                if (Array.isArray(v) && !/^\d+$/.test(d)) {
                  var g = h.slice(y);
                  if (!m && Array.isArray(r3))
                    for (var _ = 0; _ < v.length && _ < r3.length; ++_)
                      e2.set(g, r3[_], v[_], c || p, f, m);
                  else
                    for (_ = 0; _ < v.length; ++_)
                      e2.set(g, r3, v[_], c || p, f, m);
                  return;
                }
                if (p)
                  v = p(v, d);
                else {
                  var w = c && v[c] ? v[c] : v;
                  v = w instanceof Map ? w.get(d) : w[d];
                }
                if (!v)
                  return;
              } else if (y == b - 1)
                break;
            if (d = h[b], c && v[c] && (v = v[c]), Array.isArray(v) && !/^\d+$/.test(d))
              if (!m && Array.isArray(r3))
                s(v, r3, d, p, c, f);
              else
                for (_ = 0; _ < v.length; ++_) {
                  var O = v[_];
                  O && (p ? p(O, d, f(r3)) : (O[c] && (O = O[c]), O[d] = f(r3)));
                }
            else
              p ? p(v, d, f(r3)) : v instanceof Map ? v.set(d, f(r3)) : v[d] = f(r3);
          }
        }, e2.stringToParts = o;
      }, 7355: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          for (var e2 = [], r2 = "", n = "DEFAULT", o = 0; o < t3.length; ++o)
            "IN_SQUARE_BRACKETS" !== n || /\d/.test(t3[o]) || "]" === t3[o] || (n = "DEFAULT", r2 = e2[e2.length - 1] + "[" + r2, e2.splice(e2.length - 1, 1)), "[" === t3[o] ? ("IMMEDIATELY_AFTER_SQUARE_BRACKETS" !== n && (e2.push(r2), r2 = ""), n = "IN_SQUARE_BRACKETS") : "]" === t3[o] ? "IN_SQUARE_BRACKETS" === n ? (n = "IMMEDIATELY_AFTER_SQUARE_BRACKETS", e2.push(r2), r2 = "") : (n = "DEFAULT", r2 += t3[o]) : "." === t3[o] ? ("IMMEDIATELY_AFTER_SQUARE_BRACKETS" !== n && (e2.push(r2), r2 = ""), n = "DEFAULT") : r2 += t3[o];
          return "IMMEDIATELY_AFTER_SQUARE_BRACKETS" !== n && e2.push(r2), e2;
        };
      }, 3231: (t2, e2) => {
        "use strict";
        var r2 = ["find", "findOne", "update", "updateMany", "updateOne", "replaceOne", "remove", "count", "distinct", "findOneAndDelete", "findOneAndUpdate", "aggregate", "findCursor", "deleteOne", "deleteMany"];
        function n() {
        }
        for (var o = 0, i = r2.length; o < i; ++o) {
          var s = r2[o];
          n.prototype[s] = a(s);
        }
        function a(t3) {
          return function() {
            throw new Error("collection." + t3 + " not implemented");
          };
        }
        t2.exports = n, n.methods = r2;
      }, 8514: (t2, e2, r2) => {
        "use strict";
        var n = r2(3669);
        if ("unknown" == n.type)
          throw new Error("Unknown environment");
        t2.exports = n.isNode ? r2(1186) : (n.isMongo, r2(3231));
      }, 1186: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        function o(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var o2 = e3[r3];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, (void 0, i2 = function(t4, e4) {
              if ("object" !== n(t4) || null === t4)
                return t4;
              var r4 = t4[Symbol.toPrimitive];
              if (void 0 !== r4) {
                var o3 = r4.call(t4, "string");
                if ("object" !== n(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(o2.key), "symbol" === n(i2) ? i2 : String(i2)), o2);
          }
          var i2;
        }
        function i(t3, e3) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, i(t3, e3);
        }
        function s(t3, e3) {
          if (e3 && ("object" === n(e3) || "function" == typeof e3))
            return e3;
          if (void 0 !== e3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t4) {
            if (void 0 === t4)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t4;
          }(t3);
        }
        function a(t3) {
          return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, a(t3);
        }
        var u = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
          }(f, t3);
          var e3, r3, n2, u2, c = (n2 = f, u2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, e4 = a(n2);
            if (u2) {
              var r4 = a(this).constructor;
              t4 = Reflect.construct(e4, arguments, r4);
            } else
              t4 = e4.apply(this, arguments);
            return s(this, t4);
          });
          function f(t4) {
            var e4;
            return function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, f), (e4 = c.call(this)).collection = t4, e4.collectionName = t4.collectionName, e4;
          }
          return e3 = f, (r3 = [{ key: "find", value: function(t4, e4, r4) {
            var n3 = this.collection.find(t4, e4);
            try {
              n3.toArray(r4);
            } catch (t5) {
              r4(t5);
            }
          } }, { key: "findOne", value: function(t4, e4, r4) {
            this.collection.findOne(t4, e4, r4);
          } }, { key: "count", value: function(t4, e4, r4) {
            this.collection.count(t4, e4, r4);
          } }, { key: "distinct", value: function(t4, e4, r4, n3) {
            this.collection.distinct(t4, e4, r4, n3);
          } }, { key: "update", value: function(t4, e4, r4, n3) {
            this.collection.update(t4, e4, r4, n3);
          } }, { key: "updateMany", value: function(t4, e4, r4, n3) {
            this.collection.updateMany(t4, e4, r4, n3);
          } }, { key: "updateOne", value: function(t4, e4, r4, n3) {
            this.collection.updateOne(t4, e4, r4, n3);
          } }, { key: "replaceOne", value: function(t4, e4, r4, n3) {
            this.collection.replaceOne(t4, e4, r4, n3);
          } }, { key: "deleteOne", value: function(t4, e4, r4) {
            this.collection.deleteOne(t4, e4, r4);
          } }, { key: "deleteMany", value: function(t4, e4, r4) {
            this.collection.deleteMany(t4, e4, r4);
          } }, { key: "remove", value: function(t4, e4, r4) {
            this.collection.remove(t4, e4, r4);
          } }, { key: "findOneAndDelete", value: function(t4, e4, r4) {
            this.collection.findOneAndDelete(t4, e4, r4);
          } }, { key: "findOneAndUpdate", value: function(t4, e4, r4, n3) {
            this.collection.findOneAndUpdate(t4, e4, r4, n3);
          } }, { key: "findCursor", value: function(t4, e4) {
            return this.collection.find(t4, e4);
          } }]) && o(e3.prototype, r3), Object.defineProperty(e3, "prototype", { writable: false }), f;
        }(r2(3231));
        t2.exports = u;
      }, 3669: (t2, e2, r2) => {
        "use strict";
        t2 = r2.nmd(t2);
        var n = r2(365).lW;
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        e2.isNode = void 0 !== { env: {} } && "object" == o(t2) && "object" == (void 0 === r2.g ? "undefined" : o(r2.g)) && "function" == typeof n && { env: {} }.argv, e2.isMongo = !e2.isNode && "function" == typeof printjson && "function" == typeof ObjectId && "function" == typeof rs && "function" == typeof sh, e2.isBrowser = !e2.isNode && !e2.isMongo && "undefined" != typeof window, e2.type = e2.isNode ? "node" : e2.isMongo ? "mongo" : e2.isBrowser ? "browser" : "unknown";
      }, 5417: (t2, e2, r2) => {
        "use strict";
        function n(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function o(t3) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, o(t3);
        }
        var i = r2(9373), s = r2(8751), a = r2(728), u = r2(8801)("mquery");
        function c(t3, e3) {
          if (!(this instanceof c))
            return new c(t3, e3);
          var r3 = this.constructor.prototype;
          this.op = r3.op || void 0, this.options = Object.assign({}, r3.options), this._conditions = r3._conditions ? a.clone(r3._conditions) : {}, this._fields = r3._fields ? a.clone(r3._fields) : void 0, this._update = r3._update ? a.clone(r3._update) : void 0, this._path = r3._path || void 0, this._distinct = r3._distinct || void 0, this._collection = r3._collection || void 0, this._traceFunction = r3._traceFunction || void 0, e3 && this.setOptions(e3), t3 && (t3.find && t3.remove && t3.update ? this.collection(t3) : this.find(t3));
        }
        var f = "$geoWithin";
        Object.defineProperty(c, "use$geoWithin", { get: function() {
          return "$geoWithin" == f;
        }, set: function(t3) {
          f = true === t3 ? "$geoWithin" : "$within";
        } }), c.prototype.toConstructor = function() {
          function t3(e4, r3) {
            if (!(this instanceof t3))
              return new t3(e4, r3);
            c.call(this, e4, r3);
          }
          a.inherits(t3, c);
          var e3 = t3.prototype;
          return e3.options = {}, e3.setOptions(this.options), e3.op = this.op, e3._conditions = a.clone(this._conditions), e3._fields = a.clone(this._fields), e3._update = a.clone(this._update), e3._path = this._path, e3._distinct = this._distinct, e3._collection = this._collection, e3._traceFunction = this._traceFunction, t3;
        }, c.prototype.setOptions = function(t3) {
          if (!t3 || !a.isObject(t3))
            return this;
          for (var e3, r3 = a.keys(t3), n2 = 0; n2 < r3.length; ++n2)
            if ("function" == typeof this[e3 = r3[n2]]) {
              var o2 = Array.isArray(t3[e3]) ? t3[e3] : [t3[e3]];
              this[e3].apply(this, o2);
            } else
              this.options[e3] = t3[e3];
          return this;
        }, c.prototype.collection = function(t3) {
          return this._collection = new c.Collection(t3), this;
        }, c.prototype.collation = function(t3) {
          return this.options.collation = t3, this;
        }, c.prototype.$where = function(t3) {
          return this._conditions.$where = t3, this;
        }, c.prototype.where = function() {
          if (!arguments.length)
            return this;
          this.op || (this.op = "find");
          var t3 = o(arguments[0]);
          if ("string" == t3)
            return this._path = arguments[0], 2 === arguments.length && (this._conditions[this._path] = arguments[1]), this;
          if ("object" == t3 && !Array.isArray(arguments[0]))
            return this.merge(arguments[0]);
          throw new TypeError("path must be a string or object");
        }, c.prototype.equals = function(t3) {
          this._ensurePath("equals");
          var e3 = this._path;
          return this._conditions[e3] = t3, this;
        }, c.prototype.eq = function(t3) {
          this._ensurePath("eq");
          var e3 = this._path;
          return this._conditions[e3] = t3, this;
        }, c.prototype.or = function(t3) {
          var e3 = this._conditions.$or || (this._conditions.$or = []);
          return Array.isArray(t3) || (t3 = [t3]), e3.push.apply(e3, t3), this;
        }, c.prototype.nor = function(t3) {
          var e3 = this._conditions.$nor || (this._conditions.$nor = []);
          return Array.isArray(t3) || (t3 = [t3]), e3.push.apply(e3, t3), this;
        }, c.prototype.and = function(t3) {
          var e3 = this._conditions.$and || (this._conditions.$and = []);
          return Array.isArray(t3) || (t3 = [t3]), e3.push.apply(e3, t3), this;
        }, "gt gte lt lte ne in nin all regex size maxDistance minDistance".split(" ").forEach(function(t3) {
          c.prototype[t3] = function() {
            var e3, r3;
            1 === arguments.length ? (this._ensurePath(t3), r3 = arguments[0], e3 = this._path) : (r3 = arguments[1], e3 = arguments[0]);
            var n2 = null === this._conditions[e3] || "object" === o(this._conditions[e3]) ? this._conditions[e3] : this._conditions[e3] = {};
            return n2["$" + t3] = r3, this;
          };
        }), c.prototype.mod = function() {
          var t3, e3;
          1 === arguments.length ? (this._ensurePath("mod"), t3 = arguments[0], e3 = this._path) : 2 !== arguments.length || Array.isArray(arguments[1]) ? 3 === arguments.length ? (t3 = [arguments[1], arguments[2]], e3 = arguments[0]) : (t3 = arguments[1], e3 = arguments[0]) : (this._ensurePath("mod"), t3 = [arguments[0], arguments[1]], e3 = this._path);
          var r3 = this._conditions[e3] || (this._conditions[e3] = {});
          return r3.$mod = t3, this;
        }, c.prototype.exists = function() {
          var t3, e3;
          0 === arguments.length ? (this._ensurePath("exists"), t3 = this._path, e3 = true) : 1 === arguments.length ? "boolean" == typeof arguments[0] ? (this._ensurePath("exists"), t3 = this._path, e3 = arguments[0]) : (t3 = arguments[0], e3 = true) : 2 === arguments.length && (t3 = arguments[0], e3 = arguments[1]);
          var r3 = this._conditions[t3] || (this._conditions[t3] = {});
          return r3.$exists = e3, this;
        }, c.prototype.elemMatch = function() {
          if (null == arguments[0])
            throw new TypeError("Invalid argument");
          var t3, e3, r3;
          if ("function" == typeof arguments[0])
            this._ensurePath("elemMatch"), e3 = this._path, t3 = arguments[0];
          else if (a.isObject(arguments[0]))
            this._ensurePath("elemMatch"), e3 = this._path, r3 = arguments[0];
          else if ("function" == typeof arguments[1])
            e3 = arguments[0], t3 = arguments[1];
          else {
            if (!arguments[1] || !a.isObject(arguments[1]))
              throw new TypeError("Invalid argument");
            e3 = arguments[0], r3 = arguments[1];
          }
          t3 && (t3(r3 = new c()), r3 = r3._conditions);
          var n2 = this._conditions[e3] || (this._conditions[e3] = {});
          return n2.$elemMatch = r3, this;
        }, c.prototype.within = function() {
          if (this._ensurePath("within"), this._geoComparison = f, 0 === arguments.length)
            return this;
          if (2 === arguments.length)
            return this.box.apply(this, arguments);
          if (2 < arguments.length)
            return this.polygon.apply(this, arguments);
          var t3 = arguments[0];
          if (!t3)
            throw new TypeError("Invalid argument");
          if (t3.center)
            return this.circle(t3);
          if (t3.box)
            return this.box.apply(this, t3.box);
          if (t3.polygon)
            return this.polygon.apply(this, t3.polygon);
          if (t3.type && t3.coordinates)
            return this.geometry(t3);
          throw new TypeError("Invalid argument");
        }, c.prototype.box = function() {
          var t3, e3;
          if (3 === arguments.length)
            t3 = arguments[0], e3 = [arguments[1], arguments[2]];
          else {
            if (2 !== arguments.length)
              throw new TypeError("Invalid argument");
            this._ensurePath("box"), t3 = this._path, e3 = [arguments[0], arguments[1]];
          }
          var r3 = this._conditions[t3] || (this._conditions[t3] = {});
          return r3[this._geoComparison || f] = { $box: e3 }, this;
        }, c.prototype.polygon = function() {
          var t3, e3;
          "string" == typeof arguments[0] ? e3 = (t3 = Array.from(arguments)).shift() : (this._ensurePath("polygon"), e3 = this._path, t3 = Array.from(arguments));
          var r3 = this._conditions[e3] || (this._conditions[e3] = {});
          return r3[this._geoComparison || f] = { $polygon: t3 }, this;
        }, c.prototype.circle = function() {
          var t3, e3;
          if (1 === arguments.length)
            this._ensurePath("circle"), t3 = this._path, e3 = arguments[0];
          else {
            if (2 !== arguments.length)
              throw new TypeError("Invalid argument");
            t3 = arguments[0], e3 = arguments[1];
          }
          if (!("radius" in e3) || !e3.center)
            throw new Error("center and radius are required");
          var r3 = this._conditions[t3] || (this._conditions[t3] = {}), n2 = e3.spherical ? "$centerSphere" : "$center", o2 = this._geoComparison || f;
          return r3[o2] = {}, r3[o2][n2] = [e3.center, e3.radius], "unique" in e3 && (r3[o2].$uniqueDocs = !!e3.unique), this;
        }, c.prototype.near = function() {
          var t3, e3;
          if (this._geoComparison = "$near", 0 === arguments.length)
            return this;
          if (1 === arguments.length)
            this._ensurePath("near"), t3 = this._path, e3 = arguments[0];
          else {
            if (2 !== arguments.length)
              throw new TypeError("Invalid argument");
            t3 = arguments[0], e3 = arguments[1];
          }
          if (!e3.center)
            throw new Error("center is required");
          var r3 = this._conditions[t3] || (this._conditions[t3] = {}), n2 = e3.spherical ? "$nearSphere" : "$near";
          if (Array.isArray(e3.center)) {
            r3[n2] = e3.center;
            var o2 = "maxDistance" in e3 ? e3.maxDistance : null;
            null != o2 && (r3.$maxDistance = o2), null != e3.minDistance && (r3.$minDistance = e3.minDistance);
          } else {
            if ("Point" != e3.center.type || !Array.isArray(e3.center.coordinates))
              throw new Error(s.format("Invalid GeoJSON specified for %s", n2));
            r3[n2] = { $geometry: e3.center }, "maxDistance" in e3 && (r3[n2].$maxDistance = e3.maxDistance), "minDistance" in e3 && (r3[n2].$minDistance = e3.minDistance);
          }
          return this;
        }, c.prototype.intersects = function() {
          if (this._ensurePath("intersects"), this._geoComparison = "$geoIntersects", 0 === arguments.length)
            return this;
          var t3 = arguments[0];
          if (null != t3 && t3.type && t3.coordinates)
            return this.geometry(t3);
          throw new TypeError("Invalid argument");
        }, c.prototype.geometry = function() {
          if ("$within" != this._geoComparison && "$geoWithin" != this._geoComparison && "$near" != this._geoComparison && "$geoIntersects" != this._geoComparison)
            throw new Error("geometry() must come after `within()`, `intersects()`, or `near()");
          var t3, e3;
          if (1 !== arguments.length)
            throw new TypeError("Invalid argument");
          if (this._ensurePath("geometry"), e3 = this._path, !(t3 = arguments[0]).type || !Array.isArray(t3.coordinates))
            throw new TypeError("Invalid argument");
          var r3 = this._conditions[e3] || (this._conditions[e3] = {});
          return r3[this._geoComparison] = { $geometry: t3 }, this;
        }, c.prototype.select = function() {
          var t3 = arguments[0];
          if (!t3)
            return this;
          if (1 !== arguments.length)
            throw new Error("Invalid select: select only takes 1 argument");
          this._validate("select");
          var e3, r3, n2 = this._fields || (this._fields = {}), i2 = o(t3);
          if (("string" == i2 || a.isArgumentsObject(t3)) && "number" == typeof t3.length || Array.isArray(t3)) {
            for ("string" == i2 && (t3 = t3.split(/\s+/)), e3 = 0, r3 = t3.length; e3 < r3; ++e3) {
              var s2 = t3[e3];
              if (s2) {
                var u2 = "-" == s2[0] ? 0 : 1;
                0 === u2 && (s2 = s2.substring(1)), n2[s2] = u2;
              }
            }
            return this;
          }
          if (a.isObject(t3)) {
            var c2 = a.keys(t3);
            for (e3 = 0; e3 < c2.length; ++e3)
              n2[c2[e3]] = t3[c2[e3]];
            return this;
          }
          throw new TypeError("Invalid select() argument. Must be string or object.");
        }, c.prototype.slice = function() {
          if (0 === arguments.length)
            return this;
          var t3, e3;
          if (this._validate("slice"), 1 === arguments.length) {
            var r3 = arguments[0];
            if ("object" === o(r3) && !Array.isArray(r3)) {
              for (var n2 = Object.keys(r3), i2 = n2.length, s2 = 0; s2 < i2; ++s2)
                this.slice(n2[s2], r3[n2[s2]]);
              return this;
            }
            this._ensurePath("slice"), t3 = this._path, e3 = arguments[0];
          } else
            2 === arguments.length ? "number" == typeof arguments[0] ? (this._ensurePath("slice"), t3 = this._path, e3 = [arguments[0], arguments[1]]) : (t3 = arguments[0], e3 = arguments[1]) : 3 === arguments.length && (t3 = arguments[0], e3 = [arguments[1], arguments[2]]);
          var a2 = this._fields || (this._fields = {});
          return a2[t3] = { $slice: e3 }, this;
        }, c.prototype.sort = function(t3) {
          if (!t3)
            return this;
          var e3, r3, n2;
          this._validate("sort");
          var i2 = o(t3);
          if (Array.isArray(t3)) {
            for (r3 = t3.length, e3 = 0; e3 < t3.length; ++e3) {
              if (!Array.isArray(t3[e3]))
                throw new Error("Invalid sort() argument, must be array of arrays");
              h(this.options, t3[e3][0], t3[e3][1]);
            }
            return this;
          }
          if (1 === arguments.length && "string" == i2) {
            for (r3 = (t3 = t3.split(/\s+/)).length, e3 = 0; e3 < r3; ++e3)
              if (n2 = t3[e3]) {
                var s2 = "-" == n2[0] ? -1 : 1;
                -1 === s2 && (n2 = n2.substring(1)), p(this.options, n2, s2);
              }
            return this;
          }
          if (a.isObject(t3)) {
            var u2 = a.keys(t3);
            for (e3 = 0; e3 < u2.length; ++e3)
              n2 = u2[e3], p(this.options, n2, t3[n2]);
            return this;
          }
          if ("undefined" != typeof Map && t3 instanceof Map)
            return y(this.options, t3), this;
          throw new TypeError("Invalid sort() argument. Must be a string, object, or array.");
        };
        var l = { 1: 1, "-1": -1, asc: 1, ascending: 1, desc: -1, descending: -1 };
        function p(t3, e3, r3) {
          if (Array.isArray(t3.sort))
            throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");
          var n2;
          if (r3 && r3.$meta)
            (n2 = t3.sort || (t3.sort = {}))[e3] = { $meta: r3.$meta };
          else {
            n2 = t3.sort || (t3.sort = {});
            var o2 = String(r3 || 1).toLowerCase();
            if (!(o2 = l[o2]))
              throw new TypeError("Invalid sort value: { " + e3 + ": " + r3 + " }");
            n2[e3] = o2;
          }
        }
        function h(t3, e3, r3) {
          if (t3.sort = t3.sort || [], !Array.isArray(t3.sort))
            throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");
          var n2 = String(r3 || 1).toLowerCase();
          if (!(n2 = l[n2]))
            throw new TypeError("Invalid sort value: [ " + e3 + ", " + r3 + " ]");
          t3.sort.push([e3, n2]);
        }
        function y(t3, e3) {
          if (t3.sort = t3.sort || /* @__PURE__ */ new Map(), !(t3.sort instanceof Map))
            throw new TypeError("Can't mix sort syntaxes. Use either array or object or map consistently");
          e3.forEach(function(e4, r3) {
            var n2 = String(e4 || 1).toLowerCase();
            if (!(n2 = l[n2]))
              throw new TypeError("Invalid sort value: < " + r3 + ": " + e4 + " >");
            t3.sort.set(r3, n2);
          });
        }
        function d(t3, e3, r3, n2, o2, i2, s2) {
          return t3.op = e3, c.canMerge(r3) && t3.merge(r3), n2 && t3._mergeUpdate(n2), a.isObject(o2) && t3.setOptions(o2), i2 || s2 ? !t3._update || !t3.options.overwrite && 0 === a.keys(t3._update).length ? (s2 && a.soon(s2.bind(null, null, 0)), t3) : (o2 = t3._optionsForExec(), s2 || (o2.safe = false), r3 = t3._conditions, n2 = t3._updateForExec(), u("update", t3._collection.collectionName, r3, n2, o2), s2 = t3._wrapCallback(e3, s2, { conditions: r3, doc: n2, options: o2 }), t3._collection[e3](r3, n2, o2, a.tick(s2)), t3) : t3;
        }
        ["limit", "skip", "maxScan", "batchSize", "comment"].forEach(function(t3) {
          c.prototype[t3] = function(e3) {
            return this._validate(t3), this.options[t3] = e3, this;
          };
        }), c.prototype.maxTime = c.prototype.maxTimeMS = function(t3) {
          return this._validate("maxTime"), this.options.maxTimeMS = t3, this;
        }, c.prototype.snapshot = function() {
          return this._validate("snapshot"), this.options.snapshot = !arguments.length || !!arguments[0], this;
        }, c.prototype.hint = function() {
          if (0 === arguments.length)
            return this;
          this._validate("hint");
          var t3 = arguments[0];
          if (a.isObject(t3)) {
            var e3 = this.options.hint || (this.options.hint = {});
            for (var r3 in t3)
              e3[r3] = t3[r3];
            return this;
          }
          if ("string" == typeof t3)
            return this.options.hint = t3, this;
          throw new TypeError("Invalid hint. " + t3);
        }, c.prototype.j = function(t3) {
          return this.options.j = t3, this;
        }, c.prototype.slaveOk = function(t3) {
          return this.options.slaveOk = !arguments.length || !!t3, this;
        }, c.prototype.read = c.prototype.setReadPreference = function(t3) {
          return arguments.length > 1 && !c.prototype.read.deprecationWarningIssued && (console.error("Deprecation warning: 'tags' argument is not supported anymore in Query.read() method. Please use mongodb.ReadPreference object instead."), c.prototype.read.deprecationWarningIssued = true), this.options.readPreference = a.readPref(t3), this;
        }, c.prototype.readConcern = c.prototype.r = function(t3) {
          return this.options.readConcern = a.readConcern(t3), this;
        }, c.prototype.tailable = function() {
          return this._validate("tailable"), this.options.tailable = !arguments.length || !!arguments[0], this;
        }, c.prototype.writeConcern = c.prototype.w = function(t3) {
          return "object" === o(t3) ? (void 0 !== t3.j && (this.options.j = t3.j), void 0 !== t3.w && (this.options.w = t3.w), void 0 !== t3.wtimeout && (this.options.wtimeout = t3.wtimeout)) : this.options.w = "m" === t3 ? "majority" : t3, this;
        }, c.prototype.wtimeout = c.prototype.wTimeout = function(t3) {
          return this.options.wtimeout = t3, this;
        }, c.prototype.merge = function(t3) {
          if (!t3)
            return this;
          if (!c.canMerge(t3))
            throw new TypeError("Invalid argument. Expected instanceof mquery or plain object");
          return t3 instanceof c ? (t3._conditions && a.merge(this._conditions, t3._conditions), t3._fields && (this._fields || (this._fields = {}), a.merge(this._fields, t3._fields)), t3.options && (this.options || (this.options = {}), a.merge(this.options, t3.options)), t3._update && (this._update || (this._update = {}), a.mergeClone(this._update, t3._update)), t3._distinct && (this._distinct = t3._distinct), this) : (a.merge(this._conditions, t3), this);
        }, c.prototype.find = function(t3, e3) {
          if (this.op = "find", "function" == typeof t3 ? (e3 = t3, t3 = void 0) : c.canMerge(t3) && this.merge(t3), !e3)
            return this;
          var r3 = this._conditions, n2 = this._optionsForExec();
          return this.$useProjection ? n2.projection = this._fieldsForExec() : n2.fields = this._fieldsForExec(), u("find", this._collection.collectionName, r3, n2), e3 = this._wrapCallback("find", e3, { conditions: r3, options: n2 }), this._collection.find(r3, n2, a.tick(e3)), this;
        }, c.prototype.cursor = function(t3) {
          if (this.op) {
            if ("find" !== this.op)
              throw new TypeError(".cursor only support .find method");
          } else
            this.find(t3);
          var e3 = this._conditions, r3 = this._optionsForExec();
          return this.$useProjection ? r3.projection = this._fieldsForExec() : r3.fields = this._fieldsForExec(), u("findCursor", this._collection.collectionName, e3, r3), this._collection.findCursor(e3, r3);
        }, c.prototype.findOne = function(t3, e3) {
          if (this.op = "findOne", "function" == typeof t3 ? (e3 = t3, t3 = void 0) : c.canMerge(t3) && this.merge(t3), !e3)
            return this;
          var r3 = this._conditions, n2 = this._optionsForExec();
          return this.$useProjection ? n2.projection = this._fieldsForExec() : n2.fields = this._fieldsForExec(), u("findOne", this._collection.collectionName, r3, n2), e3 = this._wrapCallback("findOne", e3, { conditions: r3, options: n2 }), this._collection.findOne(r3, n2, a.tick(e3)), this;
        }, c.prototype.count = function(t3, e3) {
          if (this.op = "count", this._validate(), "function" == typeof t3 ? (e3 = t3, t3 = void 0) : c.canMerge(t3) && this.merge(t3), !e3)
            return this;
          var r3 = this._conditions, n2 = this._optionsForExec();
          return u("count", this._collection.collectionName, r3, n2), e3 = this._wrapCallback("count", e3, { conditions: r3, options: n2 }), this._collection.count(r3, n2, a.tick(e3)), this;
        }, c.prototype.distinct = function(t3, e3, r3) {
          if (this.op = "distinct", this._validate(), !r3) {
            switch (o(e3)) {
              case "function":
                r3 = e3, "string" == typeof t3 && (e3 = t3, t3 = void 0);
                break;
              case "undefined":
              case "string":
                break;
              default:
                throw new TypeError("Invalid `field` argument. Must be string or function");
            }
            switch (o(t3)) {
              case "function":
                r3 = t3, t3 = e3 = void 0;
                break;
              case "string":
                e3 = t3, t3 = void 0;
            }
          }
          if ("string" == typeof e3 && (this._distinct = e3), c.canMerge(t3) && this.merge(t3), !r3)
            return this;
          if (!this._distinct)
            throw new Error("No value for `distinct` has been declared");
          var n2 = this._conditions, i2 = this._optionsForExec();
          return u("distinct", this._collection.collectionName, n2, i2), r3 = this._wrapCallback("distinct", r3, { conditions: n2, options: i2 }), this._collection.distinct(this._distinct, n2, i2, a.tick(r3)), this;
        }, c.prototype.update = function(t3, e3, r3, n2) {
          var i2;
          switch (arguments.length) {
            case 3:
              "function" == typeof r3 && (n2 = r3, r3 = void 0);
              break;
            case 2:
              "function" == typeof e3 && (n2 = e3, e3 = t3, t3 = void 0);
              break;
            case 1:
              switch (o(t3)) {
                case "function":
                  n2 = t3, t3 = r3 = e3 = void 0;
                  break;
                case "boolean":
                  i2 = t3, t3 = void 0;
                  break;
                default:
                  e3 = t3, t3 = r3 = void 0;
              }
          }
          return d(this, "update", t3, e3, r3, i2, n2);
        }, c.prototype.updateMany = function(t3, e3, r3, n2) {
          var i2;
          switch (arguments.length) {
            case 3:
              "function" == typeof r3 && (n2 = r3, r3 = void 0);
              break;
            case 2:
              "function" == typeof e3 && (n2 = e3, e3 = t3, t3 = void 0);
              break;
            case 1:
              switch (o(t3)) {
                case "function":
                  n2 = t3, t3 = r3 = e3 = void 0;
                  break;
                case "boolean":
                  i2 = t3, t3 = void 0;
                  break;
                default:
                  e3 = t3, t3 = r3 = void 0;
              }
          }
          return d(this, "updateMany", t3, e3, r3, i2, n2);
        }, c.prototype.updateOne = function(t3, e3, r3, n2) {
          var i2;
          switch (arguments.length) {
            case 3:
              "function" == typeof r3 && (n2 = r3, r3 = void 0);
              break;
            case 2:
              "function" == typeof e3 && (n2 = e3, e3 = t3, t3 = void 0);
              break;
            case 1:
              switch (o(t3)) {
                case "function":
                  n2 = t3, t3 = r3 = e3 = void 0;
                  break;
                case "boolean":
                  i2 = t3, t3 = void 0;
                  break;
                default:
                  e3 = t3, t3 = r3 = void 0;
              }
          }
          return d(this, "updateOne", t3, e3, r3, i2, n2);
        }, c.prototype.replaceOne = function(t3, e3, r3, n2) {
          var i2;
          switch (arguments.length) {
            case 3:
              "function" == typeof r3 && (n2 = r3, r3 = void 0);
              break;
            case 2:
              "function" == typeof e3 && (n2 = e3, e3 = t3, t3 = void 0);
              break;
            case 1:
              switch (o(t3)) {
                case "function":
                  n2 = t3, t3 = r3 = e3 = void 0;
                  break;
                case "boolean":
                  i2 = t3, t3 = void 0;
                  break;
                default:
                  e3 = t3, t3 = r3 = void 0;
              }
          }
          return this.setOptions({ overwrite: true }), d(this, "replaceOne", t3, e3, r3, i2, n2);
        }, c.prototype.remove = function(t3, e3) {
          var r3;
          if (this.op = "remove", "function" == typeof t3 ? (e3 = t3, t3 = void 0) : c.canMerge(t3) ? this.merge(t3) : true === t3 && (r3 = t3, t3 = void 0), !r3 && !e3)
            return this;
          var n2 = this._optionsForExec();
          e3 || (n2.safe = false);
          var o2 = this._conditions;
          return u("remove", this._collection.collectionName, o2, n2), e3 = this._wrapCallback("remove", e3, { conditions: o2, options: n2 }), this._collection.remove(o2, n2, a.tick(e3)), this;
        }, c.prototype.deleteOne = function(t3, e3) {
          var r3;
          if (this.op = "deleteOne", "function" == typeof t3 ? (e3 = t3, t3 = void 0) : c.canMerge(t3) ? this.merge(t3) : true === t3 && (r3 = t3, t3 = void 0), !r3 && !e3)
            return this;
          var n2 = this._optionsForExec();
          e3 || (n2.safe = false), delete n2.justOne;
          var o2 = this._conditions;
          return u("deleteOne", this._collection.collectionName, o2, n2), e3 = this._wrapCallback("deleteOne", e3, { conditions: o2, options: n2 }), this._collection.deleteOne(o2, n2, a.tick(e3)), this;
        }, c.prototype.deleteMany = function(t3, e3) {
          var r3;
          if (this.op = "deleteMany", "function" == typeof t3 ? (e3 = t3, t3 = void 0) : c.canMerge(t3) ? this.merge(t3) : true === t3 && (r3 = t3, t3 = void 0), !r3 && !e3)
            return this;
          var n2 = this._optionsForExec();
          e3 || (n2.safe = false), delete n2.justOne;
          var o2 = this._conditions;
          return u("deleteOne", this._collection.collectionName, o2, n2), e3 = this._wrapCallback("deleteOne", e3, { conditions: o2, options: n2 }), this._collection.deleteMany(o2, n2, a.tick(e3)), this;
        }, c.prototype.findOneAndUpdate = function(t3, e3, r3, n2) {
          switch (this.op = "findOneAndUpdate", this._validate(), arguments.length) {
            case 3:
              "function" == typeof r3 && (n2 = r3, r3 = {});
              break;
            case 2:
              "function" == typeof e3 && (n2 = e3, e3 = t3, t3 = void 0), r3 = void 0;
              break;
            case 1:
              "function" == typeof t3 ? (n2 = t3, t3 = r3 = e3 = void 0) : (e3 = t3, t3 = r3 = void 0);
          }
          if (c.canMerge(t3) && this.merge(t3), e3 && this._mergeUpdate(e3), r3 && this.setOptions(r3), !n2)
            return this;
          var o2 = this._conditions, i2 = this._updateForExec();
          return r3 = this._optionsForExec(), this._collection.findOneAndUpdate(o2, i2, r3, a.tick(n2));
        }, c.prototype.findOneAndRemove = c.prototype.findOneAndDelete = function(t3, e3, r3) {
          if (this.op = "findOneAndRemove", this._validate(), "function" == typeof e3 ? (r3 = e3, e3 = void 0) : "function" == typeof t3 && (r3 = t3, t3 = void 0), c.canMerge(t3) && this.merge(t3), e3 && this.setOptions(e3), !r3)
            return this;
          e3 = this._optionsForExec();
          var n2 = this._conditions;
          return this._collection.findOneAndDelete(n2, e3, a.tick(r3));
        }, c.prototype._wrapCallback = function(t3, e3, r3) {
          var n2 = this._traceFunction || c.traceFunction;
          if (n2) {
            r3.collectionName = this._collection.collectionName;
            var o2 = n2 && n2.call(null, t3, r3, this), i2 = new Date().getTime();
            return function(t4, r4) {
              if (o2) {
                var n3 = new Date().getTime() - i2;
                o2.call(null, t4, r4, n3);
              }
              e3 && e3.apply(null, arguments);
            };
          }
          return e3;
        }, c.prototype.setTraceFunction = function(t3) {
          return this._traceFunction = t3, this;
        }, c.prototype.exec = function(t3, e3) {
          switch (o(t3)) {
            case "function":
              e3 = t3, t3 = null;
              break;
            case "string":
              this.op = t3;
          }
          i.ok(this.op, "Missing query type: (find, update, etc)"), "update" != this.op && "remove" != this.op || e3 || (e3 = true);
          var r3 = this;
          if ("function" != typeof e3)
            return new c.Promise(function(t4, e4) {
              r3[r3.op](function(r4, n2) {
                r4 ? e4(r4) : t4(n2), t4 = e4 = null;
              });
            });
          this[this.op](e3);
        }, c.prototype.thunk = function() {
          var t3 = this;
          return function(e3) {
            t3.exec(e3);
          };
        }, c.prototype.then = function(t3, e3) {
          var r3 = this;
          return new c.Promise(function(t4, e4) {
            r3.exec(function(r4, n2) {
              r4 ? e4(r4) : t4(n2), t4 = e4 = null;
            });
          }).then(t3, e3);
        }, c.prototype.cursor = function() {
          if ("find" != this.op)
            throw new Error("cursor() is only available for find");
          var t3 = this._conditions, e3 = this._optionsForExec();
          return this.$useProjection ? e3.projection = this._fieldsForExec() : e3.fields = this._fieldsForExec(), u("cursor", this._collection.collectionName, t3, e3), this._collection.findCursor(t3, e3);
        }, c.prototype.selected = function() {
          return !!(this._fields && Object.keys(this._fields).length > 0);
        }, c.prototype.selectedInclusively = function() {
          if (!this._fields)
            return false;
          var t3 = Object.keys(this._fields);
          if (0 === t3.length)
            return false;
          for (var e3 = 0; e3 < t3.length; ++e3) {
            var r3 = t3[e3];
            if (0 === this._fields[r3])
              return false;
            if (this._fields[r3] && "object" === o(this._fields[r3]) && this._fields[r3].$meta)
              return false;
          }
          return true;
        }, c.prototype.selectedExclusively = function() {
          if (!this._fields)
            return false;
          var t3 = Object.keys(this._fields);
          if (0 === t3.length)
            return false;
          for (var e3 = 0; e3 < t3.length; ++e3) {
            var r3 = t3[e3];
            if (0 === this._fields[r3])
              return true;
          }
          return false;
        }, c.prototype._mergeUpdate = function(t3) {
          this._update || (this._update = {}), t3 instanceof c ? t3._update && a.mergeClone(this._update, t3._update) : a.mergeClone(this._update, t3);
        }, c.prototype._optionsForExec = function() {
          return a.clone(this.options);
        }, c.prototype._fieldsForExec = function() {
          return a.clone(this._fields);
        }, c.prototype._updateForExec = function() {
          var t3, e3 = a.clone(this._update), r3 = a.keys(e3), o2 = {}, i2 = function(t4, e4) {
            var r4 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
            if (!r4) {
              if (Array.isArray(t4) || (r4 = function(t5, e5) {
                if (t5) {
                  if ("string" == typeof t5)
                    return n(t5, e5);
                  var r5 = Object.prototype.toString.call(t5).slice(8, -1);
                  return "Object" === r5 && t5.constructor && (r5 = t5.constructor.name), "Map" === r5 || "Set" === r5 ? Array.from(t5) : "Arguments" === r5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r5) ? n(t5, e5) : void 0;
                }
              }(t4)) || e4 && t4 && "number" == typeof t4.length) {
                r4 && (t4 = r4);
                var o3 = 0, i3 = function() {
                };
                return { s: i3, n: function() {
                  return o3 >= t4.length ? { done: true } : { done: false, value: t4[o3++] };
                }, e: function(t5) {
                  throw t5;
                }, f: i3 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var s3, a2 = true, u2 = false;
            return { s: function() {
              r4 = r4.call(t4);
            }, n: function() {
              var t5 = r4.next();
              return a2 = t5.done, t5;
            }, e: function(t5) {
              u2 = true, s3 = t5;
            }, f: function() {
              try {
                a2 || null == r4.return || r4.return();
              } finally {
                if (u2)
                  throw s3;
              }
            } };
          }(r3);
          try {
            for (i2.s(); !(t3 = i2.n()).done; ) {
              var s2 = t3.value;
              this.options.overwrite ? o2[s2] = e3[s2] : "$" !== s2[0] ? (o2.$set || (e3.$set ? o2.$set = e3.$set : o2.$set = {}), o2.$set[s2] = e3[s2], ~r3.indexOf("$set") || r3.push("$set")) : "$set" === s2 && o2.$set || (o2[s2] = e3[s2]);
            }
          } catch (t4) {
            i2.e(t4);
          } finally {
            i2.f();
          }
          return this._compiledUpdate = o2, o2;
        }, c.prototype._ensurePath = function(t3) {
          if (!this._path)
            throw new Error(t3 + "() must be used after where() when called with these arguments");
        }, c.permissions = r2(6477), c._isPermitted = function(t3, e3) {
          var r3 = c.permissions[e3];
          return !r3 || true !== r3[t3];
        }, c.prototype._validate = function(t3) {
          var e3, r3;
          if (void 0 === t3) {
            if ("function" != typeof (r3 = c.permissions[this.op]))
              return true;
            e3 = r3(this);
          } else
            c._isPermitted(t3, this.op) || (e3 = t3);
          if (e3)
            throw new Error(e3 + " cannot be used with " + this.op);
        }, c.canMerge = function(t3) {
          return t3 instanceof c || a.isObject(t3);
        }, c.setGlobalTraceFunction = function(t3) {
          c.traceFunction = t3;
        }, c.utils = a, c.env = r2(3669), c.Collection = r2(8514), c.BaseCollection = r2(3231), c.Promise = Promise, t2.exports = c;
      }, 6477: (t2, e2) => {
        "use strict";
        var r2 = e2;
        r2.distinct = function(t3) {
          return t3._fields && Object.keys(t3._fields).length > 0 ? "field selection and slice" : (Object.keys(r2.distinct).every(function(r3) {
            return !t3.options[r3] || (e3 = r3, false);
          }), e3);
          var e3;
        }, r2.distinct.select = r2.distinct.slice = r2.distinct.sort = r2.distinct.limit = r2.distinct.skip = r2.distinct.batchSize = r2.distinct.maxScan = r2.distinct.snapshot = r2.distinct.hint = r2.distinct.tailable = true, r2.findOneAndUpdate = r2.findOneAndRemove = function(t3) {
          var e3;
          return Object.keys(r2.findOneAndUpdate).every(function(r3) {
            return !t3.options[r3] || (e3 = r3, false);
          }), e3;
        }, r2.findOneAndUpdate.limit = r2.findOneAndUpdate.skip = r2.findOneAndUpdate.batchSize = r2.findOneAndUpdate.maxScan = r2.findOneAndUpdate.snapshot = r2.findOneAndUpdate.tailable = true, r2.count = function(t3) {
          return t3._fields && Object.keys(t3._fields).length > 0 ? "field selection and slice" : (Object.keys(r2.count).every(function(r3) {
            return !t3.options[r3] || (e3 = r3, false);
          }), e3);
          var e3;
        }, r2.count.slice = r2.count.batchSize = r2.count.maxScan = r2.count.snapshot = r2.count.tailable = true;
      }, 728: (t2, e2, r2) => {
        "use strict";
        var n = r2(365).lW, o = ["__proto__", "constructor", "prototype"], i = e2.clone = function t3(r3, o2) {
          if (null == r3)
            return r3;
          if (Array.isArray(r3))
            return e2.cloneArray(r3, o2);
          if (r3.constructor) {
            if (/ObjectI[dD]$/.test(r3.constructor.name))
              return "function" == typeof r3.clone ? r3.clone() : new r3.constructor(r3.id);
            if ("ReadPreference" === r3.constructor.name)
              return new r3.constructor(r3.mode, t3(r3.tags, o2));
            if ("Binary" == r3._bsontype && r3.buffer && r3.value)
              return "function" == typeof r3.clone ? r3.clone() : new r3.constructor(r3.value(true), r3.sub_type);
            if ("Date" === r3.constructor.name || "Function" === r3.constructor.name)
              return new r3.constructor(+r3);
            if ("RegExp" === r3.constructor.name)
              return new RegExp(r3);
            if ("Buffer" === r3.constructor.name)
              return n.from(r3);
          }
          return a(r3) ? e2.cloneObject(r3, o2) : r3.valueOf ? r3.valueOf() : void 0;
        };
        e2.cloneObject = function(t3, e3) {
          var r3, n2 = e3 && e3.minimize, s2 = {}, a2 = Object.keys(t3), u2 = a2.length, c = false, f = "", l = 0;
          for (l = 0; l < u2; ++l)
            f = a2[l], -1 === o.indexOf(f) && (r3 = i(t3[f], e3), n2 && void 0 === r3 || (c || (c = true), s2[f] = r3));
          return n2 ? c && s2 : s2;
        }, e2.cloneArray = function(t3, e3) {
          for (var r3 = [], n2 = t3.length, o2 = 0; o2 < n2; o2++)
            r3.push(i(t3[o2], e3));
          return r3;
        }, e2.tick = function(t3) {
          if ("function" == typeof t3)
            return function() {
              var e3 = arguments;
              u(function() {
                t3.apply(this, e3);
              });
            };
        }, e2.merge = function t3(r3, n2) {
          for (var i2 = 0, s2 = Object.keys(n2); i2 < s2.length; i2++) {
            var a2 = s2[i2];
            -1 === o.indexOf(a2) && (void 0 === r3[a2] ? r3[a2] = n2[a2] : e2.isObject(n2[a2]) ? t3(r3[a2], n2[a2]) : r3[a2] = n2[a2]);
          }
        }, e2.mergeClone = function t3(r3, n2) {
          for (var s2 = 0, a2 = Object.keys(n2); s2 < a2.length; s2++) {
            var u2 = a2[s2];
            -1 === o.indexOf(u2) && (void 0 === r3[u2] ? r3[u2] = i(n2[u2]) : e2.isObject(n2[u2]) ? t3(r3[u2], n2[u2]) : r3[u2] = i(n2[u2]));
          }
        }, e2.readPref = function(t3) {
          switch (t3) {
            case "p":
              t3 = "primary";
              break;
            case "pp":
              t3 = "primaryPreferred";
              break;
            case "s":
              t3 = "secondary";
              break;
            case "sp":
              t3 = "secondaryPreferred";
              break;
            case "n":
              t3 = "nearest";
          }
          return t3;
        }, e2.readConcern = function(t3) {
          if ("string" == typeof t3) {
            switch (t3) {
              case "l":
                t3 = "local";
                break;
              case "a":
                t3 = "available";
                break;
              case "m":
                t3 = "majority";
                break;
              case "lz":
                t3 = "linearizable";
                break;
              case "s":
                t3 = "snapshot";
            }
            t3 = { level: t3 };
          }
          return t3;
        };
        var s = Object.prototype.toString;
        e2.toString = function(t3) {
          return s.call(t3);
        };
        var a = e2.isObject = function(t3) {
          return "[object Object]" == e2.toString(t3);
        };
        e2.keys = Object.keys, e2.create = "function" == typeof Object.create ? Object.create : function(t3) {
          if (arguments.length > 1)
            throw new Error("Adding properties is not supported");
          function e3() {
          }
          return e3.prototype = t3, new e3();
        }, e2.inherits = function(t3, r3) {
          t3.prototype = e2.create(r3.prototype), t3.prototype.constructor = t3;
        };
        var u = e2.soon = "function" == typeof setImmediate ? setImmediate : { env: {} }.nextTick;
        e2.isArgumentsObject = function(t3) {
          return "[object Arguments]" === Object.prototype.toString.call(t3);
        };
      }, 2068: (t2) => {
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        var r2 = 1e3, n = 60 * r2, o = 60 * n, i = 24 * o;
        function s(t3, e3, r3, n2) {
          var o2 = e3 >= 1.5 * r3;
          return Math.round(t3 / r3) + " " + n2 + (o2 ? "s" : "");
        }
        t2.exports = function(t3, a) {
          a = a || {};
          var u, c, f = e2(t3);
          if ("string" === f && t3.length > 0)
            return function(t4) {
              if (!((t4 = String(t4)).length > 100)) {
                var e3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t4);
                if (e3) {
                  var s2 = parseFloat(e3[1]);
                  switch ((e3[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * s2;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * s2;
                    case "days":
                    case "day":
                    case "d":
                      return s2 * i;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return s2 * o;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return s2 * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return s2 * r2;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return s2;
                    default:
                      return;
                  }
                }
              }
            }(t3);
          if ("number" === f && isFinite(t3))
            return a.long ? (u = t3, (c = Math.abs(u)) >= i ? s(u, c, i, "day") : c >= o ? s(u, c, o, "hour") : c >= n ? s(u, c, n, "minute") : c >= r2 ? s(u, c, r2, "second") : u + " ms") : function(t4) {
              var e3 = Math.abs(t4);
              return e3 >= i ? Math.round(t4 / i) + "d" : e3 >= o ? Math.round(t4 / o) + "h" : e3 >= n ? Math.round(t4 / n) + "m" : e3 >= r2 ? Math.round(t4 / r2) + "s" : t4 + "ms";
            }(t3);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t3));
        };
      }, 2507: (t2) => {
        "use strict";
        var e2 = function(t3) {
          return t3 != t3;
        };
        t2.exports = function(t3, r2) {
          return 0 === t3 && 0 === r2 ? 1 / t3 == 1 / r2 : t3 === r2 || !(!e2(t3) || !e2(r2));
        };
      }, 4710: (t2, e2, r2) => {
        "use strict";
        var n = r2(7921), o = r2(3862), i = r2(2507), s = r2(9292), a = r2(9228), u = o(s(), Object);
        n(u, { getPolyfill: s, implementation: i, shim: a }), t2.exports = u;
      }, 9292: (t2, e2, r2) => {
        "use strict";
        var n = r2(2507);
        t2.exports = function() {
          return "function" == typeof Object.is ? Object.is : n;
        };
      }, 9228: (t2, e2, r2) => {
        "use strict";
        var n = r2(9292), o = r2(7921);
        t2.exports = function() {
          var t3 = n();
          return o(Object, { is: t3 }, { is: function() {
            return Object.is !== t3;
          } }), t3;
        };
      }, 6164: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o;
        if (!Object.keys) {
          var i = Object.prototype.hasOwnProperty, s = Object.prototype.toString, a = r2(5184), u = Object.prototype.propertyIsEnumerable, c = !u.call({ toString: null }, "toString"), f = u.call(function() {
          }, "prototype"), l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], p = function(t3) {
            var e3 = t3.constructor;
            return e3 && e3.prototype === t3;
          }, h = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true }, y = function() {
            if ("undefined" == typeof window)
              return false;
            for (var t3 in window)
              try {
                if (!h["$" + t3] && i.call(window, t3) && null !== window[t3] && "object" === n(window[t3]))
                  try {
                    p(window[t3]);
                  } catch (t4) {
                    return true;
                  }
              } catch (t4) {
                return true;
              }
            return false;
          }();
          o = function(t3) {
            var e3 = null !== t3 && "object" === n(t3), r3 = "[object Function]" === s.call(t3), o2 = a(t3), u2 = e3 && "[object String]" === s.call(t3), h2 = [];
            if (!e3 && !r3 && !o2)
              throw new TypeError("Object.keys called on a non-object");
            var d = f && r3;
            if (u2 && t3.length > 0 && !i.call(t3, 0))
              for (var m = 0; m < t3.length; ++m)
                h2.push(String(m));
            if (o2 && t3.length > 0)
              for (var v = 0; v < t3.length; ++v)
                h2.push(String(v));
            else
              for (var b in t3)
                d && "prototype" === b || !i.call(t3, b) || h2.push(String(b));
            if (c)
              for (var g = function(t4) {
                if ("undefined" == typeof window || !y)
                  return p(t4);
                try {
                  return p(t4);
                } catch (t5) {
                  return false;
                }
              }(t3), _ = 0; _ < l.length; ++_)
                g && "constructor" === l[_] || !i.call(t3, l[_]) || h2.push(l[_]);
            return h2;
          };
        }
        t2.exports = o;
      }, 3818: (t2, e2, r2) => {
        "use strict";
        var n = Array.prototype.slice, o = r2(5184), i = Object.keys, s = i ? function(t3) {
          return i(t3);
        } : r2(6164), a = Object.keys;
        s.shim = function() {
          if (Object.keys) {
            var t3 = function() {
              var t4 = Object.keys(arguments);
              return t4 && t4.length === arguments.length;
            }(1, 2);
            t3 || (Object.keys = function(t4) {
              return o(t4) ? a(n.call(t4)) : a(t4);
            });
          } else
            Object.keys = s;
          return Object.keys || s;
        }, t2.exports = s;
      }, 5184: (t2) => {
        "use strict";
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        var r2 = Object.prototype.toString;
        t2.exports = function(t3) {
          var n = r2.call(t3), o = "[object Arguments]" === n;
          return o || (o = "[object Array]" !== n && null !== t3 && "object" === e2(t3) && "number" == typeof t3.length && t3.length >= 0 && "[object Function]" === r2.call(t3.callee)), o;
        };
      }, 8538: (t2) => {
        function e2(t3) {
          return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, e2(t3);
        }
        t2.exports = function(t3) {
          return t3 && "object" === e2(t3) && "function" == typeof t3.copy && "function" == typeof t3.fill && "function" == typeof t3.readUInt8;
        };
      }, 9957: (t2, e2, r2) => {
        "use strict";
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = r2(2755), i = r2(6738), s = r2(1482), a = r2(7913);
        function u(t3) {
          return t3.call.bind(t3);
        }
        var c = "undefined" != typeof BigInt, f = "undefined" != typeof Symbol, l = u(Object.prototype.toString), p = u(Number.prototype.valueOf), h = u(String.prototype.valueOf), y = u(Boolean.prototype.valueOf);
        if (c)
          var d = u(BigInt.prototype.valueOf);
        if (f)
          var m = u(Symbol.prototype.valueOf);
        function v(t3, e3) {
          if ("object" !== n(t3))
            return false;
          try {
            return e3(t3), true;
          } catch (t4) {
            return false;
          }
        }
        function b(t3) {
          return "[object Map]" === l(t3);
        }
        function g(t3) {
          return "[object Set]" === l(t3);
        }
        function _(t3) {
          return "[object WeakMap]" === l(t3);
        }
        function w(t3) {
          return "[object WeakSet]" === l(t3);
        }
        function O(t3) {
          return "[object ArrayBuffer]" === l(t3);
        }
        function $(t3) {
          return "undefined" != typeof ArrayBuffer && (O.working ? O(t3) : t3 instanceof ArrayBuffer);
        }
        function S(t3) {
          return "[object DataView]" === l(t3);
        }
        function j(t3) {
          return "undefined" != typeof DataView && (S.working ? S(t3) : t3 instanceof DataView);
        }
        e2.isArgumentsObject = o, e2.isGeneratorFunction = i, e2.isTypedArray = a, e2.isPromise = function(t3) {
          return "undefined" != typeof Promise && t3 instanceof Promise || null !== t3 && "object" === n(t3) && "function" == typeof t3.then && "function" == typeof t3.catch;
        }, e2.isArrayBufferView = function(t3) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t3) : a(t3) || j(t3);
        }, e2.isUint8Array = function(t3) {
          return "Uint8Array" === s(t3);
        }, e2.isUint8ClampedArray = function(t3) {
          return "Uint8ClampedArray" === s(t3);
        }, e2.isUint16Array = function(t3) {
          return "Uint16Array" === s(t3);
        }, e2.isUint32Array = function(t3) {
          return "Uint32Array" === s(t3);
        }, e2.isInt8Array = function(t3) {
          return "Int8Array" === s(t3);
        }, e2.isInt16Array = function(t3) {
          return "Int16Array" === s(t3);
        }, e2.isInt32Array = function(t3) {
          return "Int32Array" === s(t3);
        }, e2.isFloat32Array = function(t3) {
          return "Float32Array" === s(t3);
        }, e2.isFloat64Array = function(t3) {
          return "Float64Array" === s(t3);
        }, e2.isBigInt64Array = function(t3) {
          return "BigInt64Array" === s(t3);
        }, e2.isBigUint64Array = function(t3) {
          return "BigUint64Array" === s(t3);
        }, b.working = "undefined" != typeof Map && b(/* @__PURE__ */ new Map()), e2.isMap = function(t3) {
          return "undefined" != typeof Map && (b.working ? b(t3) : t3 instanceof Map);
        }, g.working = "undefined" != typeof Set && g(/* @__PURE__ */ new Set()), e2.isSet = function(t3) {
          return "undefined" != typeof Set && (g.working ? g(t3) : t3 instanceof Set);
        }, _.working = "undefined" != typeof WeakMap && _(/* @__PURE__ */ new WeakMap()), e2.isWeakMap = function(t3) {
          return "undefined" != typeof WeakMap && (_.working ? _(t3) : t3 instanceof WeakMap);
        }, w.working = "undefined" != typeof WeakSet && w(/* @__PURE__ */ new WeakSet()), e2.isWeakSet = function(t3) {
          return w(t3);
        }, O.working = "undefined" != typeof ArrayBuffer && O(new ArrayBuffer()), e2.isArrayBuffer = $, S.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && S(new DataView(new ArrayBuffer(1), 0, 1)), e2.isDataView = j;
        var A = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
        function P(t3) {
          return "[object SharedArrayBuffer]" === l(t3);
        }
        function E(t3) {
          return void 0 !== A && (void 0 === P.working && (P.working = P(new A())), P.working ? P(t3) : t3 instanceof A);
        }
        function x(t3) {
          return v(t3, p);
        }
        function k(t3) {
          return v(t3, h);
        }
        function M(t3) {
          return v(t3, y);
        }
        function T(t3) {
          return c && v(t3, d);
        }
        function N(t3) {
          return f && v(t3, m);
        }
        e2.isSharedArrayBuffer = E, e2.isAsyncFunction = function(t3) {
          return "[object AsyncFunction]" === l(t3);
        }, e2.isMapIterator = function(t3) {
          return "[object Map Iterator]" === l(t3);
        }, e2.isSetIterator = function(t3) {
          return "[object Set Iterator]" === l(t3);
        }, e2.isGeneratorObject = function(t3) {
          return "[object Generator]" === l(t3);
        }, e2.isWebAssemblyCompiledModule = function(t3) {
          return "[object WebAssembly.Module]" === l(t3);
        }, e2.isNumberObject = x, e2.isStringObject = k, e2.isBooleanObject = M, e2.isBigIntObject = T, e2.isSymbolObject = N, e2.isBoxedPrimitive = function(t3) {
          return x(t3) || k(t3) || M(t3) || T(t3) || N(t3);
        }, e2.isAnyArrayBuffer = function(t3) {
          return "undefined" != typeof Uint8Array && ($(t3) || E(t3));
        }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(t3) {
          Object.defineProperty(e2, t3, { enumerable: false, value: function() {
            throw new Error(t3 + " is not supported in userland");
          } });
        });
      }, 8751: (t2, e2, r2) => {
        function n(t3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, n(t3);
        }
        var o = Object.getOwnPropertyDescriptors || function(t3) {
          for (var e3 = Object.keys(t3), r3 = {}, n2 = 0; n2 < e3.length; n2++)
            r3[e3[n2]] = Object.getOwnPropertyDescriptor(t3, e3[n2]);
          return r3;
        }, i = /%[sdj%]/g;
        e2.format = function(t3) {
          if (!g(t3)) {
            for (var e3 = [], r3 = 0; r3 < arguments.length; r3++)
              e3.push(c(arguments[r3]));
            return e3.join(" ");
          }
          r3 = 1;
          for (var n2 = arguments, o2 = n2.length, s2 = String(t3).replace(i, function(t4) {
            if ("%%" === t4)
              return "%";
            if (r3 >= o2)
              return t4;
            switch (t4) {
              case "%s":
                return String(n2[r3++]);
              case "%d":
                return Number(n2[r3++]);
              case "%j":
                try {
                  return JSON.stringify(n2[r3++]);
                } catch (t5) {
                  return "[Circular]";
                }
              default:
                return t4;
            }
          }), a2 = n2[r3]; r3 < o2; a2 = n2[++r3])
            v(a2) || !O(a2) ? s2 += " " + a2 : s2 += " " + c(a2);
          return s2;
        }, e2.deprecate = function(t3, r3) {
          if (void 0 !== { env: {} } && true === { env: {} }.noDeprecation)
            return t3;
          if (void 0 === { env: {} })
            return function() {
              return e2.deprecate(t3, r3).apply(this, arguments);
            };
          var n2 = false;
          return function() {
            if (!n2) {
              if ({ env: {} }.throwDeprecation)
                throw new Error(r3);
              !{ env: {} }.traceDeprecation ? console.error(r3) : console.trace(r3), n2 = true;
            }
            return t3.apply(this, arguments);
          };
        };
        var s = {}, a = /^$/;
        if ({}.NODE_DEBUG) {
          var u = {}.NODE_DEBUG;
          u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), a = new RegExp("^" + u + "$", "i");
        }
        function c(t3, r3) {
          var n2 = { seen: [], stylize: l };
          return arguments.length >= 3 && (n2.depth = arguments[2]), arguments.length >= 4 && (n2.colors = arguments[3]), m(r3) ? n2.showHidden = r3 : r3 && e2._extend(n2, r3), _(n2.showHidden) && (n2.showHidden = false), _(n2.depth) && (n2.depth = 2), _(n2.colors) && (n2.colors = false), _(n2.customInspect) && (n2.customInspect = true), n2.colors && (n2.stylize = f), p(n2, t3, n2.depth);
        }
        function f(t3, e3) {
          var r3 = c.styles[e3];
          return r3 ? "\x1B[" + c.colors[r3][0] + "m" + t3 + "\x1B[" + c.colors[r3][1] + "m" : t3;
        }
        function l(t3, e3) {
          return t3;
        }
        function p(t3, r3, n2) {
          if (t3.customInspect && r3 && j(r3.inspect) && r3.inspect !== e2.inspect && (!r3.constructor || r3.constructor.prototype !== r3)) {
            var o2 = r3.inspect(n2, t3);
            return g(o2) || (o2 = p(t3, o2, n2)), o2;
          }
          var i2 = function(t4, e3) {
            if (_(e3))
              return t4.stylize("undefined", "undefined");
            if (g(e3)) {
              var r4 = "'" + JSON.stringify(e3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return t4.stylize(r4, "string");
            }
            return b(e3) ? t4.stylize("" + e3, "number") : m(e3) ? t4.stylize("" + e3, "boolean") : v(e3) ? t4.stylize("null", "null") : void 0;
          }(t3, r3);
          if (i2)
            return i2;
          var s2 = Object.keys(r3), a2 = function(t4) {
            var e3 = {};
            return t4.forEach(function(t5, r4) {
              e3[t5] = true;
            }), e3;
          }(s2);
          if (t3.showHidden && (s2 = Object.getOwnPropertyNames(r3)), S(r3) && (s2.indexOf("message") >= 0 || s2.indexOf("description") >= 0))
            return h(r3);
          if (0 === s2.length) {
            if (j(r3)) {
              var u2 = r3.name ? ": " + r3.name : "";
              return t3.stylize("[Function" + u2 + "]", "special");
            }
            if (w(r3))
              return t3.stylize(RegExp.prototype.toString.call(r3), "regexp");
            if ($(r3))
              return t3.stylize(Date.prototype.toString.call(r3), "date");
            if (S(r3))
              return h(r3);
          }
          var c2, f2 = "", l2 = false, O2 = ["{", "}"];
          return d(r3) && (l2 = true, O2 = ["[", "]"]), j(r3) && (f2 = " [Function" + (r3.name ? ": " + r3.name : "") + "]"), w(r3) && (f2 = " " + RegExp.prototype.toString.call(r3)), $(r3) && (f2 = " " + Date.prototype.toUTCString.call(r3)), S(r3) && (f2 = " " + h(r3)), 0 !== s2.length || l2 && 0 != r3.length ? n2 < 0 ? w(r3) ? t3.stylize(RegExp.prototype.toString.call(r3), "regexp") : t3.stylize("[Object]", "special") : (t3.seen.push(r3), c2 = l2 ? function(t4, e3, r4, n3, o3) {
            for (var i3 = [], s3 = 0, a3 = e3.length; s3 < a3; ++s3)
              k(e3, String(s3)) ? i3.push(y(t4, e3, r4, n3, String(s3), true)) : i3.push("");
            return o3.forEach(function(o4) {
              o4.match(/^\d+$/) || i3.push(y(t4, e3, r4, n3, o4, true));
            }), i3;
          }(t3, r3, n2, a2, s2) : s2.map(function(e3) {
            return y(t3, r3, n2, a2, e3, l2);
          }), t3.seen.pop(), function(t4, e3, r4) {
            return t4.reduce(function(t5, e4) {
              return e4.indexOf("\n"), t5 + e4.replace(/\u001b\[\d\d?m/g, "").length + 1;
            }, 0) > 60 ? r4[0] + ("" === e3 ? "" : e3 + "\n ") + " " + t4.join(",\n  ") + " " + r4[1] : r4[0] + e3 + " " + t4.join(", ") + " " + r4[1];
          }(c2, f2, O2)) : O2[0] + f2 + O2[1];
        }
        function h(t3) {
          return "[" + Error.prototype.toString.call(t3) + "]";
        }
        function y(t3, e3, r3, n2, o2, i2) {
          var s2, a2, u2;
          if ((u2 = Object.getOwnPropertyDescriptor(e3, o2) || { value: e3[o2] }).get ? a2 = u2.set ? t3.stylize("[Getter/Setter]", "special") : t3.stylize("[Getter]", "special") : u2.set && (a2 = t3.stylize("[Setter]", "special")), k(n2, o2) || (s2 = "[" + o2 + "]"), a2 || (t3.seen.indexOf(u2.value) < 0 ? (a2 = v(r3) ? p(t3, u2.value, null) : p(t3, u2.value, r3 - 1)).indexOf("\n") > -1 && (a2 = i2 ? a2.split("\n").map(function(t4) {
            return "  " + t4;
          }).join("\n").slice(2) : "\n" + a2.split("\n").map(function(t4) {
            return "   " + t4;
          }).join("\n")) : a2 = t3.stylize("[Circular]", "special")), _(s2)) {
            if (i2 && o2.match(/^\d+$/))
              return a2;
            (s2 = JSON.stringify("" + o2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s2 = s2.slice(1, -1), s2 = t3.stylize(s2, "name")) : (s2 = s2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s2 = t3.stylize(s2, "string"));
          }
          return s2 + ": " + a2;
        }
        function d(t3) {
          return Array.isArray(t3);
        }
        function m(t3) {
          return "boolean" == typeof t3;
        }
        function v(t3) {
          return null === t3;
        }
        function b(t3) {
          return "number" == typeof t3;
        }
        function g(t3) {
          return "string" == typeof t3;
        }
        function _(t3) {
          return void 0 === t3;
        }
        function w(t3) {
          return O(t3) && "[object RegExp]" === A(t3);
        }
        function O(t3) {
          return "object" === n(t3) && null !== t3;
        }
        function $(t3) {
          return O(t3) && "[object Date]" === A(t3);
        }
        function S(t3) {
          return O(t3) && ("[object Error]" === A(t3) || t3 instanceof Error);
        }
        function j(t3) {
          return "function" == typeof t3;
        }
        function A(t3) {
          return Object.prototype.toString.call(t3);
        }
        function P(t3) {
          return t3 < 10 ? "0" + t3.toString(10) : t3.toString(10);
        }
        e2.debuglog = function(t3) {
          if (t3 = t3.toUpperCase(), !s[t3])
            if (a.test(t3)) {
              var r3 = { env: {} }.pid;
              s[t3] = function() {
                var n2 = e2.format.apply(e2, arguments);
                console.error("%s %d: %s", t3, r3, n2);
              };
            } else
              s[t3] = function() {
              };
          return s[t3];
        }, e2.inspect = c, c.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, c.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, e2.types = r2(9957), e2.isArray = d, e2.isBoolean = m, e2.isNull = v, e2.isNullOrUndefined = function(t3) {
          return null == t3;
        }, e2.isNumber = b, e2.isString = g, e2.isSymbol = function(t3) {
          return "symbol" === n(t3);
        }, e2.isUndefined = _, e2.isRegExp = w, e2.types.isRegExp = w, e2.isObject = O, e2.isDate = $, e2.types.isDate = $, e2.isError = S, e2.types.isNativeError = S, e2.isFunction = j, e2.isPrimitive = function(t3) {
          return null === t3 || "boolean" == typeof t3 || "number" == typeof t3 || "string" == typeof t3 || "symbol" === n(t3) || void 0 === t3;
        }, e2.isBuffer = r2(8538);
        var E = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function x() {
          var t3 = new Date(), e3 = [P(t3.getHours()), P(t3.getMinutes()), P(t3.getSeconds())].join(":");
          return [t3.getDate(), E[t3.getMonth()], e3].join(" ");
        }
        function k(t3, e3) {
          return Object.prototype.hasOwnProperty.call(t3, e3);
        }
        e2.log = function() {
          console.log("%s - %s", x(), e2.format.apply(e2, arguments));
        }, e2.inherits = r2(376), e2._extend = function(t3, e3) {
          if (!e3 || !O(e3))
            return t3;
          for (var r3 = Object.keys(e3), n2 = r3.length; n2--; )
            t3[r3[n2]] = e3[r3[n2]];
          return t3;
        };
        var M = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        function T(t3, e3) {
          if (!t3) {
            var r3 = new Error("Promise was rejected with a falsy value");
            r3.reason = t3, t3 = r3;
          }
          return e3(t3);
        }
        e2.promisify = function(t3) {
          if ("function" != typeof t3)
            throw new TypeError('The "original" argument must be of type Function');
          if (M && t3[M]) {
            var e3;
            if ("function" != typeof (e3 = t3[M]))
              throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            return Object.defineProperty(e3, M, { value: e3, enumerable: false, writable: false, configurable: true }), e3;
          }
          function e3() {
            for (var e4, r3, n2 = new Promise(function(t4, n3) {
              e4 = t4, r3 = n3;
            }), o2 = [], i2 = 0; i2 < arguments.length; i2++)
              o2.push(arguments[i2]);
            o2.push(function(t4, n3) {
              t4 ? r3(t4) : e4(n3);
            });
            try {
              t3.apply(this, o2);
            } catch (t4) {
              r3(t4);
            }
            return n2;
          }
          return Object.setPrototypeOf(e3, Object.getPrototypeOf(t3)), M && Object.defineProperty(e3, M, { value: e3, enumerable: false, writable: false, configurable: true }), Object.defineProperties(e3, o(t3));
        }, e2.promisify.custom = M, e2.callbackify = function(t3) {
          if ("function" != typeof t3)
            throw new TypeError('The "original" argument must be of type Function');
          function e3() {
            for (var e4 = [], r3 = 0; r3 < arguments.length; r3++)
              e4.push(arguments[r3]);
            var n2 = e4.pop();
            if ("function" != typeof n2)
              throw new TypeError("The last argument must be of type Function");
            var o2 = this, i2 = function() {
              return n2.apply(o2, arguments);
            };
            t3.apply(this, e4).then(function(t4) {
              ({ env: {} }).nextTick(i2.bind(null, null, t4));
            }, function(t4) {
              ({ env: {} }).nextTick(T.bind(null, t4, i2));
            });
          }
          return Object.setPrototypeOf(e3, Object.getPrototypeOf(t3)), Object.defineProperties(e3, o(t3)), e3;
        };
      }, 1482: (t2, e2, r2) => {
        "use strict";
        var n = r2(5337), o = r2(6461), i = r2(8780), s = r2(1554), a = i("Object.prototype.toString"), u = r2(5994)(), c = "undefined" == typeof globalThis ? r2.g : globalThis, f = o(), l = i("String.prototype.slice"), p = {}, h = Object.getPrototypeOf;
        u && s && h && n(f, function(t3) {
          if ("function" == typeof c[t3]) {
            var e3 = new c[t3]();
            if (Symbol.toStringTag in e3) {
              var r3 = h(e3), n2 = s(r3, Symbol.toStringTag);
              if (!n2) {
                var o2 = h(r3);
                n2 = s(o2, Symbol.toStringTag);
              }
              p[t3] = n2.get;
            }
          }
        });
        var y = r2(7913);
        t2.exports = function(t3) {
          return !!y(t3) && (u && Symbol.toStringTag in t3 ? function(t4) {
            var e3 = false;
            return n(p, function(r3, n2) {
              if (!e3)
                try {
                  var o2 = r3.call(t4);
                  o2 === n2 && (e3 = o2);
                } catch (t5) {
                }
            }), e3;
          }(t3) : l(a(t3), 8, -1));
        };
      }, 6461: (t2, e2, r2) => {
        "use strict";
        var n = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], o = "undefined" == typeof globalThis ? r2.g : globalThis;
        t2.exports = function() {
          for (var t3 = [], e3 = 0; e3 < n.length; e3++)
            "function" == typeof o[n[e3]] && (t3[t3.length] = n[e3]);
          return t3;
        };
      } }, e = {};
      function r(n) {
        var o = e[n];
        if (void 0 !== o)
          return o.exports;
        var i = e[n] = { id: n, loaded: false, exports: {} };
        return t[n](i, i.exports, r), i.loaded = true, i.exports;
      }
      return r.d = (t2, e2) => {
        for (var n in e2)
          r.o(e2, n) && !r.o(t2, n) && Object.defineProperty(t2, n, { enumerable: true, get: e2[n] });
      }, r.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if ("object" == typeof window)
            return window;
        }
      }(), r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.nmd = (t2) => (t2.paths = [], t2.children || (t2.children = []), t2), r(5507);
    })());
  }
});

// app/backend/src/models/ExpenseModel.js
var require_ExpenseModel = __commonJS({
  "app/backend/src/models/ExpenseModel.js"(exports, module) {
    "use strict";
    var mongoose = require_browser_umd();
    var ExpenseSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      createdAt: {
        type: String,
        default: Date.now
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
    });
    module.exports = mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);
  }
});

// node-modules-polyfills:crypto
var crypto_exports = {};
__export(crypto_exports, {
  default: () => crypto_default
});
var crypto_default;
var init_crypto = __esm({
  "node-modules-polyfills:crypto"() {
    crypto_default = {};
  }
});

// node-modules-polyfills-commonjs:crypto
var require_crypto = __commonJS({
  "node-modules-polyfills-commonjs:crypto"(exports, module) {
    var polyfill = (init_crypto(), __toCommonJS(crypto_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/bcryptjs/dist/bcrypt.js
var require_bcrypt = __commonJS({
  "node_modules/bcryptjs/dist/bcrypt.js"(exports, module) {
    (function(global, factory) {
      if (typeof define === "function" && define["amd"])
        define([], factory);
      else if (typeof __require === "function" && typeof module === "object" && module && module["exports"])
        module["exports"] = factory();
      else
        (global["dcodeIO"] = global["dcodeIO"] || {})["bcrypt"] = factory();
    })(exports, function() {
      "use strict";
      var bcrypt = {};
      var randomFallback = null;
      function random(len) {
        if (typeof module !== "undefined" && module && module["exports"])
          try {
            return require_crypto()["randomBytes"](len);
          } catch (e) {
          }
        try {
          var a;
          (self["crypto"] || self["msCrypto"])["getRandomValues"](a = new Uint32Array(len));
          return Array.prototype.slice.call(a);
        } catch (e) {
        }
        if (!randomFallback)
          throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
        return randomFallback(len);
      }
      var randomAvailable = false;
      try {
        random(1);
        randomAvailable = true;
      } catch (e) {
      }
      randomFallback = null;
      bcrypt.setRandomFallback = function(random2) {
        randomFallback = random2;
      };
      bcrypt.genSaltSync = function(rounds, seed_length) {
        rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof rounds !== "number")
          throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
        if (rounds < 4)
          rounds = 4;
        else if (rounds > 31)
          rounds = 31;
        var salt = [];
        salt.push("$2a$");
        if (rounds < 10)
          salt.push("0");
        salt.push(rounds.toString());
        salt.push("$");
        salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
        return salt.join("");
      };
      bcrypt.genSalt = function(rounds, seed_length, callback) {
        if (typeof seed_length === "function")
          callback = seed_length, seed_length = void 0;
        if (typeof rounds === "function")
          callback = rounds, rounds = void 0;
        if (typeof rounds === "undefined")
          rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
        else if (typeof rounds !== "number")
          throw Error("illegal arguments: " + typeof rounds);
        function _async(callback2) {
          nextTick(function() {
            try {
              callback2(null, bcrypt.genSaltSync(rounds));
            } catch (err) {
              callback2(err);
            }
          });
        }
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt.hashSync = function(s, salt) {
        if (typeof salt === "undefined")
          salt = GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof salt === "number")
          salt = bcrypt.genSaltSync(salt);
        if (typeof s !== "string" || typeof salt !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof salt);
        return _hash(s, salt);
      };
      bcrypt.hash = function(s, salt, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s === "string" && typeof salt === "number")
            bcrypt.genSalt(salt, function(err, salt2) {
              _hash(s, salt2, callback2, progressCallback);
            });
          else if (typeof s === "string" && typeof salt === "string")
            _hash(s, salt, callback2, progressCallback);
          else
            nextTick(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof salt)));
        }
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      function safeStringCompare(known, unknown) {
        var right = 0, wrong = 0;
        for (var i = 0, k = known.length; i < k; ++i) {
          if (known.charCodeAt(i) === unknown.charCodeAt(i))
            ++right;
          else
            ++wrong;
        }
        if (right < 0)
          return false;
        return wrong === 0;
      }
      bcrypt.compareSync = function(s, hash) {
        if (typeof s !== "string" || typeof hash !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof hash);
        if (hash.length !== 60)
          return false;
        return safeStringCompare(bcrypt.hashSync(s, hash.substr(0, hash.length - 31)), hash);
      };
      bcrypt.compare = function(s, hash, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s !== "string" || typeof hash !== "string") {
            nextTick(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof hash)));
            return;
          }
          if (hash.length !== 60) {
            nextTick(callback2.bind(this, null, false));
            return;
          }
          bcrypt.hash(s, hash.substr(0, 29), function(err, comp) {
            if (err)
              callback2(err);
            else
              callback2(null, safeStringCompare(comp, hash));
          }, progressCallback);
        }
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt.getRounds = function(hash) {
        if (typeof hash !== "string")
          throw Error("Illegal arguments: " + typeof hash);
        return parseInt(hash.split("$")[2], 10);
      };
      bcrypt.getSalt = function(hash) {
        if (typeof hash !== "string")
          throw Error("Illegal arguments: " + typeof hash);
        if (hash.length !== 60)
          throw Error("Illegal hash length: " + hash.length + " != 60");
        return hash.substring(0, 29);
      };
      var nextTick = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
      function stringToBytes(str) {
        var out = [], i = 0;
        utfx.encodeUTF16toUTF8(function() {
          if (i >= str.length)
            return null;
          return str.charCodeAt(i++);
        }, function(b) {
          out.push(b);
        });
        return out;
      }
      var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
      var BASE64_INDEX = [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        1,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        -1,
        -1,
        -1,
        -1,
        -1
      ];
      var stringFromCharCode = String.fromCharCode;
      function base64_encode(b, len) {
        var off = 0, rs2 = [], c1, c2;
        if (len <= 0 || len > b.length)
          throw Error("Illegal len: " + len);
        while (off < len) {
          c1 = b[off++] & 255;
          rs2.push(BASE64_CODE[c1 >> 2 & 63]);
          c1 = (c1 & 3) << 4;
          if (off >= len) {
            rs2.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off++] & 255;
          c1 |= c2 >> 4 & 15;
          rs2.push(BASE64_CODE[c1 & 63]);
          c1 = (c2 & 15) << 2;
          if (off >= len) {
            rs2.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off++] & 255;
          c1 |= c2 >> 6 & 3;
          rs2.push(BASE64_CODE[c1 & 63]);
          rs2.push(BASE64_CODE[c2 & 63]);
        }
        return rs2.join("");
      }
      function base64_decode(s, len) {
        var off = 0, slen = s.length, olen = 0, rs2 = [], c1, c2, c3, c4, o, code;
        if (len <= 0)
          throw Error("Illegal len: " + len);
        while (off < slen - 1 && olen < len) {
          code = s.charCodeAt(off++);
          c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          code = s.charCodeAt(off++);
          c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c1 == -1 || c2 == -1)
            break;
          o = c1 << 2 >>> 0;
          o |= (c2 & 48) >> 4;
          rs2.push(stringFromCharCode(o));
          if (++olen >= len || off >= slen)
            break;
          code = s.charCodeAt(off++);
          c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c3 == -1)
            break;
          o = (c2 & 15) << 4 >>> 0;
          o |= (c3 & 60) >> 2;
          rs2.push(stringFromCharCode(o));
          if (++olen >= len || off >= slen)
            break;
          code = s.charCodeAt(off++);
          c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          o = (c3 & 3) << 6 >>> 0;
          o |= c4;
          rs2.push(stringFromCharCode(o));
          ++olen;
        }
        var res = [];
        for (off = 0; off < olen; off++)
          res.push(rs2[off].charCodeAt(0));
        return res;
      }
      var utfx = function() {
        "use strict";
        var utfx2 = {};
        utfx2.MAX_CODEPOINT = 1114111;
        utfx2.encodeUTF8 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = function() {
              return null;
            };
          while (cp !== null || (cp = src()) !== null) {
            if (cp < 128)
              dst(cp & 127);
            else if (cp < 2048)
              dst(cp >> 6 & 31 | 192), dst(cp & 63 | 128);
            else if (cp < 65536)
              dst(cp >> 12 & 15 | 224), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            else
              dst(cp >> 18 & 7 | 240), dst(cp >> 12 & 63 | 128), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            cp = null;
          }
        };
        utfx2.decodeUTF8 = function(src, dst) {
          var a, b, c, d, fail = function(b2) {
            b2 = b2.slice(0, b2.indexOf(null));
            var err = Error(b2.toString());
            err.name = "TruncatedError";
            err["bytes"] = b2;
            throw err;
          };
          while ((a = src()) !== null) {
            if ((a & 128) === 0)
              dst(a);
            else if ((a & 224) === 192)
              (b = src()) === null && fail([a, b]), dst((a & 31) << 6 | b & 63);
            else if ((a & 240) === 224)
              ((b = src()) === null || (c = src()) === null) && fail([a, b, c]), dst((a & 15) << 12 | (b & 63) << 6 | c & 63);
            else if ((a & 248) === 240)
              ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([a, b, c, d]), dst((a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63);
            else
              throw RangeError("Illegal starting byte: " + a);
          }
        };
        utfx2.UTF16toUTF8 = function(src, dst) {
          var c1, c2 = null;
          while (true) {
            if ((c1 = c2 !== null ? c2 : src()) === null)
              break;
            if (c1 >= 55296 && c1 <= 57343) {
              if ((c2 = src()) !== null) {
                if (c2 >= 56320 && c2 <= 57343) {
                  dst((c1 - 55296) * 1024 + c2 - 56320 + 65536);
                  c2 = null;
                  continue;
                }
              }
            }
            dst(c1);
          }
          if (c2 !== null)
            dst(c2);
        };
        utfx2.UTF8toUTF16 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = function() {
              return null;
            };
          while (cp !== null || (cp = src()) !== null) {
            if (cp <= 65535)
              dst(cp);
            else
              cp -= 65536, dst((cp >> 10) + 55296), dst(cp % 1024 + 56320);
            cp = null;
          }
        };
        utfx2.encodeUTF16toUTF8 = function(src, dst) {
          utfx2.UTF16toUTF8(src, function(cp) {
            utfx2.encodeUTF8(cp, dst);
          });
        };
        utfx2.decodeUTF8toUTF16 = function(src, dst) {
          utfx2.decodeUTF8(src, function(cp) {
            utfx2.UTF8toUTF16(cp, dst);
          });
        };
        utfx2.calculateCodePoint = function(cp) {
          return cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
        };
        utfx2.calculateUTF8 = function(src) {
          var cp, l = 0;
          while ((cp = src()) !== null)
            l += utfx2.calculateCodePoint(cp);
          return l;
        };
        utfx2.calculateUTF16asUTF8 = function(src) {
          var n = 0, l = 0;
          utfx2.UTF16toUTF8(src, function(cp) {
            ++n;
            l += utfx2.calculateCodePoint(cp);
          });
          return [n, l];
        };
        return utfx2;
      }();
      Date.now = Date.now || function() {
        return +new Date();
      };
      var BCRYPT_SALT_LEN = 16;
      var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
      var BLOWFISH_NUM_ROUNDS = 16;
      var MAX_EXECUTION_TIME = 100;
      var P_ORIG = [
        608135816,
        2242054355,
        320440878,
        57701188,
        2752067618,
        698298832,
        137296536,
        3964562569,
        1160258022,
        953160567,
        3193202383,
        887688300,
        3232508343,
        3380367581,
        1065670069,
        3041331479,
        2450970073,
        2306472731
      ];
      var S_ORIG = [
        3509652390,
        2564797868,
        805139163,
        3491422135,
        3101798381,
        1780907670,
        3128725573,
        4046225305,
        614570311,
        3012652279,
        134345442,
        2240740374,
        1667834072,
        1901547113,
        2757295779,
        4103290238,
        227898511,
        1921955416,
        1904987480,
        2182433518,
        2069144605,
        3260701109,
        2620446009,
        720527379,
        3318853667,
        677414384,
        3393288472,
        3101374703,
        2390351024,
        1614419982,
        1822297739,
        2954791486,
        3608508353,
        3174124327,
        2024746970,
        1432378464,
        3864339955,
        2857741204,
        1464375394,
        1676153920,
        1439316330,
        715854006,
        3033291828,
        289532110,
        2706671279,
        2087905683,
        3018724369,
        1668267050,
        732546397,
        1947742710,
        3462151702,
        2609353502,
        2950085171,
        1814351708,
        2050118529,
        680887927,
        999245976,
        1800124847,
        3300911131,
        1713906067,
        1641548236,
        4213287313,
        1216130144,
        1575780402,
        4018429277,
        3917837745,
        3693486850,
        3949271944,
        596196993,
        3549867205,
        258830323,
        2213823033,
        772490370,
        2760122372,
        1774776394,
        2652871518,
        566650946,
        4142492826,
        1728879713,
        2882767088,
        1783734482,
        3629395816,
        2517608232,
        2874225571,
        1861159788,
        326777828,
        3124490320,
        2130389656,
        2716951837,
        967770486,
        1724537150,
        2185432712,
        2364442137,
        1164943284,
        2105845187,
        998989502,
        3765401048,
        2244026483,
        1075463327,
        1455516326,
        1322494562,
        910128902,
        469688178,
        1117454909,
        936433444,
        3490320968,
        3675253459,
        1240580251,
        122909385,
        2157517691,
        634681816,
        4142456567,
        3825094682,
        3061402683,
        2540495037,
        79693498,
        3249098678,
        1084186820,
        1583128258,
        426386531,
        1761308591,
        1047286709,
        322548459,
        995290223,
        1845252383,
        2603652396,
        3431023940,
        2942221577,
        3202600964,
        3727903485,
        1712269319,
        422464435,
        3234572375,
        1170764815,
        3523960633,
        3117677531,
        1434042557,
        442511882,
        3600875718,
        1076654713,
        1738483198,
        4213154764,
        2393238008,
        3677496056,
        1014306527,
        4251020053,
        793779912,
        2902807211,
        842905082,
        4246964064,
        1395751752,
        1040244610,
        2656851899,
        3396308128,
        445077038,
        3742853595,
        3577915638,
        679411651,
        2892444358,
        2354009459,
        1767581616,
        3150600392,
        3791627101,
        3102740896,
        284835224,
        4246832056,
        1258075500,
        768725851,
        2589189241,
        3069724005,
        3532540348,
        1274779536,
        3789419226,
        2764799539,
        1660621633,
        3471099624,
        4011903706,
        913787905,
        3497959166,
        737222580,
        2514213453,
        2928710040,
        3937242737,
        1804850592,
        3499020752,
        2949064160,
        2386320175,
        2390070455,
        2415321851,
        4061277028,
        2290661394,
        2416832540,
        1336762016,
        1754252060,
        3520065937,
        3014181293,
        791618072,
        3188594551,
        3933548030,
        2332172193,
        3852520463,
        3043980520,
        413987798,
        3465142937,
        3030929376,
        4245938359,
        2093235073,
        3534596313,
        375366246,
        2157278981,
        2479649556,
        555357303,
        3870105701,
        2008414854,
        3344188149,
        4221384143,
        3956125452,
        2067696032,
        3594591187,
        2921233993,
        2428461,
        544322398,
        577241275,
        1471733935,
        610547355,
        4027169054,
        1432588573,
        1507829418,
        2025931657,
        3646575487,
        545086370,
        48609733,
        2200306550,
        1653985193,
        298326376,
        1316178497,
        3007786442,
        2064951626,
        458293330,
        2589141269,
        3591329599,
        3164325604,
        727753846,
        2179363840,
        146436021,
        1461446943,
        4069977195,
        705550613,
        3059967265,
        3887724982,
        4281599278,
        3313849956,
        1404054877,
        2845806497,
        146425753,
        1854211946,
        1266315497,
        3048417604,
        3681880366,
        3289982499,
        290971e4,
        1235738493,
        2632868024,
        2414719590,
        3970600049,
        1771706367,
        1449415276,
        3266420449,
        422970021,
        1963543593,
        2690192192,
        3826793022,
        1062508698,
        1531092325,
        1804592342,
        2583117782,
        2714934279,
        4024971509,
        1294809318,
        4028980673,
        1289560198,
        2221992742,
        1669523910,
        35572830,
        157838143,
        1052438473,
        1016535060,
        1802137761,
        1753167236,
        1386275462,
        3080475397,
        2857371447,
        1040679964,
        2145300060,
        2390574316,
        1461121720,
        2956646967,
        4031777805,
        4028374788,
        33600511,
        2920084762,
        1018524850,
        629373528,
        3691585981,
        3515945977,
        2091462646,
        2486323059,
        586499841,
        988145025,
        935516892,
        3367335476,
        2599673255,
        2839830854,
        265290510,
        3972581182,
        2759138881,
        3795373465,
        1005194799,
        847297441,
        406762289,
        1314163512,
        1332590856,
        1866599683,
        4127851711,
        750260880,
        613907577,
        1450815602,
        3165620655,
        3734664991,
        3650291728,
        3012275730,
        3704569646,
        1427272223,
        778793252,
        1343938022,
        2676280711,
        2052605720,
        1946737175,
        3164576444,
        3914038668,
        3967478842,
        3682934266,
        1661551462,
        3294938066,
        4011595847,
        840292616,
        3712170807,
        616741398,
        312560963,
        711312465,
        1351876610,
        322626781,
        1910503582,
        271666773,
        2175563734,
        1594956187,
        70604529,
        3617834859,
        1007753275,
        1495573769,
        4069517037,
        2549218298,
        2663038764,
        504708206,
        2263041392,
        3941167025,
        2249088522,
        1514023603,
        1998579484,
        1312622330,
        694541497,
        2582060303,
        2151582166,
        1382467621,
        776784248,
        2618340202,
        3323268794,
        2497899128,
        2784771155,
        503983604,
        4076293799,
        907881277,
        423175695,
        432175456,
        1378068232,
        4145222326,
        3954048622,
        3938656102,
        3820766613,
        2793130115,
        2977904593,
        26017576,
        3274890735,
        3194772133,
        1700274565,
        1756076034,
        4006520079,
        3677328699,
        720338349,
        1533947780,
        354530856,
        688349552,
        3973924725,
        1637815568,
        332179504,
        3949051286,
        53804574,
        2852348879,
        3044236432,
        1282449977,
        3583942155,
        3416972820,
        4006381244,
        1617046695,
        2628476075,
        3002303598,
        1686838959,
        431878346,
        2686675385,
        1700445008,
        1080580658,
        1009431731,
        832498133,
        3223435511,
        2605976345,
        2271191193,
        2516031870,
        1648197032,
        4164389018,
        2548247927,
        300782431,
        375919233,
        238389289,
        3353747414,
        2531188641,
        2019080857,
        1475708069,
        455242339,
        2609103871,
        448939670,
        3451063019,
        1395535956,
        2413381860,
        1841049896,
        1491858159,
        885456874,
        4264095073,
        4001119347,
        1565136089,
        3898914787,
        1108368660,
        540939232,
        1173283510,
        2745871338,
        3681308437,
        4207628240,
        3343053890,
        4016749493,
        1699691293,
        1103962373,
        3625875870,
        2256883143,
        3830138730,
        1031889488,
        3479347698,
        1535977030,
        4236805024,
        3251091107,
        2132092099,
        1774941330,
        1199868427,
        1452454533,
        157007616,
        2904115357,
        342012276,
        595725824,
        1480756522,
        206960106,
        497939518,
        591360097,
        863170706,
        2375253569,
        3596610801,
        1814182875,
        2094937945,
        3421402208,
        1082520231,
        3463918190,
        2785509508,
        435703966,
        3908032597,
        1641649973,
        2842273706,
        3305899714,
        1510255612,
        2148256476,
        2655287854,
        3276092548,
        4258621189,
        236887753,
        3681803219,
        274041037,
        1734335097,
        3815195456,
        3317970021,
        1899903192,
        1026095262,
        4050517792,
        356393447,
        2410691914,
        3873677099,
        3682840055,
        3913112168,
        2491498743,
        4132185628,
        2489919796,
        1091903735,
        1979897079,
        3170134830,
        3567386728,
        3557303409,
        857797738,
        1136121015,
        1342202287,
        507115054,
        2535736646,
        337727348,
        3213592640,
        1301675037,
        2528481711,
        1895095763,
        1721773893,
        3216771564,
        62756741,
        2142006736,
        835421444,
        2531993523,
        1442658625,
        3659876326,
        2882144922,
        676362277,
        1392781812,
        170690266,
        3921047035,
        1759253602,
        3611846912,
        1745797284,
        664899054,
        1329594018,
        3901205900,
        3045908486,
        2062866102,
        2865634940,
        3543621612,
        3464012697,
        1080764994,
        553557557,
        3656615353,
        3996768171,
        991055499,
        499776247,
        1265440854,
        648242737,
        3940784050,
        980351604,
        3713745714,
        1749149687,
        3396870395,
        4211799374,
        3640570775,
        1161844396,
        3125318951,
        1431517754,
        545492359,
        4268468663,
        3499529547,
        1437099964,
        2702547544,
        3433638243,
        2581715763,
        2787789398,
        1060185593,
        1593081372,
        2418618748,
        4260947970,
        69676912,
        2159744348,
        86519011,
        2512459080,
        3838209314,
        1220612927,
        3339683548,
        133810670,
        1090789135,
        1078426020,
        1569222167,
        845107691,
        3583754449,
        4072456591,
        1091646820,
        628848692,
        1613405280,
        3757631651,
        526609435,
        236106946,
        48312990,
        2942717905,
        3402727701,
        1797494240,
        859738849,
        992217954,
        4005476642,
        2243076622,
        3870952857,
        3732016268,
        765654824,
        3490871365,
        2511836413,
        1685915746,
        3888969200,
        1414112111,
        2273134842,
        3281911079,
        4080962846,
        172450625,
        2569994100,
        980381355,
        4109958455,
        2819808352,
        2716589560,
        2568741196,
        3681446669,
        3329971472,
        1835478071,
        660984891,
        3704678404,
        4045999559,
        3422617507,
        3040415634,
        1762651403,
        1719377915,
        3470491036,
        2693910283,
        3642056355,
        3138596744,
        1364962596,
        2073328063,
        1983633131,
        926494387,
        3423689081,
        2150032023,
        4096667949,
        1749200295,
        3328846651,
        309677260,
        2016342300,
        1779581495,
        3079819751,
        111262694,
        1274766160,
        443224088,
        298511866,
        1025883608,
        3806446537,
        1145181785,
        168956806,
        3641502830,
        3584813610,
        1689216846,
        3666258015,
        3200248200,
        1692713982,
        2646376535,
        4042768518,
        1618508792,
        1610833997,
        3523052358,
        4130873264,
        2001055236,
        3610705100,
        2202168115,
        4028541809,
        2961195399,
        1006657119,
        2006996926,
        3186142756,
        1430667929,
        3210227297,
        1314452623,
        4074634658,
        4101304120,
        2273951170,
        1399257539,
        3367210612,
        3027628629,
        1190975929,
        2062231137,
        2333990788,
        2221543033,
        2438960610,
        1181637006,
        548689776,
        2362791313,
        3372408396,
        3104550113,
        3145860560,
        296247880,
        1970579870,
        3078560182,
        3769228297,
        1714227617,
        3291629107,
        3898220290,
        166772364,
        1251581989,
        493813264,
        448347421,
        195405023,
        2709975567,
        677966185,
        3703036547,
        1463355134,
        2715995803,
        1338867538,
        1343315457,
        2802222074,
        2684532164,
        233230375,
        2599980071,
        2000651841,
        3277868038,
        1638401717,
        4028070440,
        3237316320,
        6314154,
        819756386,
        300326615,
        590932579,
        1405279636,
        3267499572,
        3150704214,
        2428286686,
        3959192993,
        3461946742,
        1862657033,
        1266418056,
        963775037,
        2089974820,
        2263052895,
        1917689273,
        448879540,
        3550394620,
        3981727096,
        150775221,
        3627908307,
        1303187396,
        508620638,
        2975983352,
        2726630617,
        1817252668,
        1876281319,
        1457606340,
        908771278,
        3720792119,
        3617206836,
        2455994898,
        1729034894,
        1080033504,
        976866871,
        3556439503,
        2881648439,
        1522871579,
        1555064734,
        1336096578,
        3548522304,
        2579274686,
        3574697629,
        3205460757,
        3593280638,
        3338716283,
        3079412587,
        564236357,
        2993598910,
        1781952180,
        1464380207,
        3163844217,
        3332601554,
        1699332808,
        1393555694,
        1183702653,
        3581086237,
        1288719814,
        691649499,
        2847557200,
        2895455976,
        3193889540,
        2717570544,
        1781354906,
        1676643554,
        2592534050,
        3230253752,
        1126444790,
        2770207658,
        2633158820,
        2210423226,
        2615765581,
        2414155088,
        3127139286,
        673620729,
        2805611233,
        1269405062,
        4015350505,
        3341807571,
        4149409754,
        1057255273,
        2012875353,
        2162469141,
        2276492801,
        2601117357,
        993977747,
        3918593370,
        2654263191,
        753973209,
        36408145,
        2530585658,
        25011837,
        3520020182,
        2088578344,
        530523599,
        2918365339,
        1524020338,
        1518925132,
        3760827505,
        3759777254,
        1202760957,
        3985898139,
        3906192525,
        674977740,
        4174734889,
        2031300136,
        2019492241,
        3983892565,
        4153806404,
        3822280332,
        352677332,
        2297720250,
        60907813,
        90501309,
        3286998549,
        1016092578,
        2535922412,
        2839152426,
        457141659,
        509813237,
        4120667899,
        652014361,
        1966332200,
        2975202805,
        55981186,
        2327461051,
        676427537,
        3255491064,
        2882294119,
        3433927263,
        1307055953,
        942726286,
        933058658,
        2468411793,
        3933900994,
        4215176142,
        1361170020,
        2001714738,
        2830558078,
        3274259782,
        1222529897,
        1679025792,
        2729314320,
        3714953764,
        1770335741,
        151462246,
        3013232138,
        1682292957,
        1483529935,
        471910574,
        1539241949,
        458788160,
        3436315007,
        1807016891,
        3718408830,
        978976581,
        1043663428,
        3165965781,
        1927990952,
        4200891579,
        2372276910,
        3208408903,
        3533431907,
        1412390302,
        2931980059,
        4132332400,
        1947078029,
        3881505623,
        4168226417,
        2941484381,
        1077988104,
        1320477388,
        886195818,
        18198404,
        3786409e3,
        2509781533,
        112762804,
        3463356488,
        1866414978,
        891333506,
        18488651,
        661792760,
        1628790961,
        3885187036,
        3141171499,
        876946877,
        2693282273,
        1372485963,
        791857591,
        2686433993,
        3759982718,
        3167212022,
        3472953795,
        2716379847,
        445679433,
        3561995674,
        3504004811,
        3574258232,
        54117162,
        3331405415,
        2381918588,
        3769707343,
        4154350007,
        1140177722,
        4074052095,
        668550556,
        3214352940,
        367459370,
        261225585,
        2610173221,
        4209349473,
        3468074219,
        3265815641,
        314222801,
        3066103646,
        3808782860,
        282218597,
        3406013506,
        3773591054,
        379116347,
        1285071038,
        846784868,
        2669647154,
        3771962079,
        3550491691,
        2305946142,
        453669953,
        1268987020,
        3317592352,
        3279303384,
        3744833421,
        2610507566,
        3859509063,
        266596637,
        3847019092,
        517658769,
        3462560207,
        3443424879,
        370717030,
        4247526661,
        2224018117,
        4143653529,
        4112773975,
        2788324899,
        2477274417,
        1456262402,
        2901442914,
        1517677493,
        1846949527,
        2295493580,
        3734397586,
        2176403920,
        1280348187,
        1908823572,
        3871786941,
        846861322,
        1172426758,
        3287448474,
        3383383037,
        1655181056,
        3139813346,
        901632758,
        1897031941,
        2986607138,
        3066810236,
        3447102507,
        1393639104,
        373351379,
        950779232,
        625454576,
        3124240540,
        4148612726,
        2007998917,
        544563296,
        2244738638,
        2330496472,
        2058025392,
        1291430526,
        424198748,
        50039436,
        29584100,
        3605783033,
        2429876329,
        2791104160,
        1057563949,
        3255363231,
        3075367218,
        3463963227,
        1469046755,
        985887462
      ];
      var C_ORIG = [
        1332899944,
        1700884034,
        1701343084,
        1684370003,
        1668446532,
        1869963892
      ];
      function _encipher(lr, off, P, S) {
        var n, l = lr[off], r = lr[off + 1];
        l ^= P[0];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[1];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[2];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[3];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[4];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[5];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[6];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[7];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[8];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[9];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[10];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[11];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[12];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[13];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[14];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[15];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[16];
        lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
        lr[off + 1] = l;
        return lr;
      }
      function _streamtoword(data, offp) {
        for (var i = 0, word = 0; i < 4; ++i)
          word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
        return { key: word, offp };
      }
      function _key(key, P, S) {
        var offset = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
        for (i = 0; i < plen; i += 2)
          lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      function _ekskey(data, key, P, S) {
        var offp = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
        offp = 0;
        for (i = 0; i < plen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      function _crypt(b, salt, rounds, callback, progressCallback) {
        var cdata = C_ORIG.slice(), clen = cdata.length, err;
        if (rounds < 4 || rounds > 31) {
          err = Error("Illegal number of rounds (4-31): " + rounds);
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.length !== BCRYPT_SALT_LEN) {
          err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        rounds = 1 << rounds >>> 0;
        var P, S, i = 0, j;
        if (Int32Array) {
          P = new Int32Array(P_ORIG);
          S = new Int32Array(S_ORIG);
        } else {
          P = P_ORIG.slice();
          S = S_ORIG.slice();
        }
        _ekskey(salt, b, P, S);
        function next() {
          if (progressCallback)
            progressCallback(i / rounds);
          if (i < rounds) {
            var start = Date.now();
            for (; i < rounds; ) {
              i = i + 1;
              _key(b, P, S);
              _key(salt, P, S);
              if (Date.now() - start > MAX_EXECUTION_TIME)
                break;
            }
          } else {
            for (i = 0; i < 64; i++)
              for (j = 0; j < clen >> 1; j++)
                _encipher(cdata, j << 1, P, S);
            var ret = [];
            for (i = 0; i < clen; i++)
              ret.push((cdata[i] >> 24 & 255) >>> 0), ret.push((cdata[i] >> 16 & 255) >>> 0), ret.push((cdata[i] >> 8 & 255) >>> 0), ret.push((cdata[i] & 255) >>> 0);
            if (callback) {
              callback(null, ret);
              return;
            } else
              return ret;
          }
          if (callback)
            nextTick(next);
        }
        if (typeof callback !== "undefined") {
          next();
        } else {
          var res;
          while (true)
            if (typeof (res = next()) !== "undefined")
              return res || [];
        }
      }
      function _hash(s, salt, callback, progressCallback) {
        var err;
        if (typeof s !== "string" || typeof salt !== "string") {
          err = Error("Invalid string / salt: Not a string");
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var minor, offset;
        if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
          err = Error("Invalid salt version: " + salt.substring(0, 2));
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.charAt(2) === "$")
          minor = String.fromCharCode(0), offset = 3;
        else {
          minor = salt.charAt(2);
          if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
              nextTick(callback.bind(this, err));
              return;
            } else
              throw err;
          }
          offset = 4;
        }
        if (salt.charAt(offset + 2) > "$") {
          err = Error("Missing salt rounds");
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
        s += minor >= "a" ? "\0" : "";
        var passwordb = stringToBytes(s), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
        function finish(bytes) {
          var res = [];
          res.push("$2");
          if (minor >= "a")
            res.push(minor);
          res.push("$");
          if (rounds < 10)
            res.push("0");
          res.push(rounds.toString());
          res.push("$");
          res.push(base64_encode(saltb, saltb.length));
          res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
          return res.join("");
        }
        if (typeof callback == "undefined")
          return finish(_crypt(passwordb, saltb, rounds));
        else {
          _crypt(passwordb, saltb, rounds, function(err2, bytes) {
            if (err2)
              callback(err2, null);
            else
              callback(null, finish(bytes));
          }, progressCallback);
        }
      }
      bcrypt.encodeBase64 = base64_encode;
      bcrypt.decodeBase64 = base64_decode;
      return bcrypt;
    });
  }
});

// app/backend/src/models/UserModel.js
var require_UserModel = __commonJS({
  "app/backend/src/models/UserModel.js"(exports, module) {
    "use strict";
    var mongoose = require_browser_umd();
    var bcrypt = require_bcrypt();
    var userSchema = new mongoose.Schema({
      firstname: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      cpassword: {
        type: String,
        required: true
      },
      expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expense",
        required: true
      }]
    });
    userSchema.pre("save", async function(next) {
      if (this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, 12);
        this.cpassword = bcrypt.hashSync(this.password, 12);
      }
      next();
    });
    module.exports = mongoose.models.User || mongoose.model("User", userSchema);
  }
});

// app/backend/src/services/expenseServices.js
var Expense = require_ExpenseModel();
var User = require_UserModel();
var deleteExpense = async (expense_id) => {
  let expense;
  try {
    expense = await Expense.findByIdAndRemove(expense_id).populate("userId");
    await expense.userId.expenses.pull(expense);
    await expense.userId.save();
  } catch (err) {
    console.log(err);
  }
  if (!expense) {
    throw new Error({ message: "Unable To Delete" });
  }
  return { message: "Item deleted successfully.." };
};

export {
  deleteExpense
};
//# sourceMappingURL=/build/_shared/chunk-ZBTHETSB.js.map
