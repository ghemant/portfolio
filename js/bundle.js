function onYouTubePlayerAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
if (function () {
        function t() {
            E.keyboardSupport && c("keydown", s)
        }

        function e() {
            if (!O && document.body) {
                O = !0;
                var e = document.body,
                    i = document.documentElement,
                    n = window.innerHeight,
                    o = e.scrollHeight;
                if (k = document.compatMode.indexOf("CSS") >= 0 ? i : e, P = e, t(), top != self) Q = !0;
                else if (o > n && (e.offsetHeight <= n || i.offsetHeight <= n)) {
                    var s = document.createElement("div");
                    s.setAttribute("id", "sscr"), s.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + k.scrollHeight + "px", document.body.appendChild(s);
                    var r;
                    S = function () {
                        r || (r = setTimeout(function () {
                            $ || (s.style.height = "0", s.style.height = k.scrollHeight + "px", r = null)
                        }, 500))
                    }, setTimeout(S, 10), c("resize", S);
                    var a = {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    };
                    if (C = new H(S), C.observe(e, a), k.offsetHeight <= n) {
                        var l = document.createElement("div");
                        l.style.clear = "both", e.appendChild(l)
                    }
                }
                E.fixedBackground || $ || (e.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll")
            }
        }

        function i() {
            C && C.disconnect(), f(F, o), f("mousedown", r), f("keydown", s), f("resize", S), f("load", e)
        }

        function n(t, e, i) {
            if (g(e, i), 1 != E.accelerationMax) {
                var n = Date.now(),
                    o = n - R;
                if (o < E.accelerationDelta) {
                    var s = (1 + 50 / o) / 2;
                    s > 1 && (s = Math.min(s, E.accelerationMax), e *= s, i *= s)
                }
                R = Date.now()
            }
            if (M.push({
                    x: e,
                    y: i,
                    lastX: 0 > e ? .99 : -.99,
                    lastY: 0 > i ? .99 : -.99,
                    start: Date.now()
                }), !N) {
                var r = t === document.body,
                    a = function (n) {
                        for (var o = Date.now(), s = 0, l = 0, h = 0; h < M.length; h++) {
                            var u = M[h],
                                d = o - u.start,
                                p = d >= E.animationTime,
                                c = p ? 1 : d / E.animationTime;
                            E.pulseAlgorithm && (c = x(c));
                            var f = u.x * c - u.lastX >> 0,
                                m = u.y * c - u.lastY >> 0;
                            s += f, l += m, u.lastX += f, u.lastY += m, p && (M.splice(h, 1), h--)
                        }
                        r ? window.scrollBy(s, l) : (s && (t.scrollLeft += s), l && (t.scrollTop += l)), e || i || (M = []), M.length ? B(a, t, 1e3 / E.frameRate + 1) : N = !1
                    };
                B(a, t, 0), N = !0
            }
        }

        function o(t) {
            O || e();
            var i = t.target,
                o = h(i);
            if (!o || t.defaultPrevented || t.ctrlKey) return !0;
            if (m(P, "embed") || m(i, "embed") && /\.pdf/i.test(i.src) || m(P, "object")) return !0;
            var s = -t.wheelDeltaX || t.deltaX || 0,
                r = -t.wheelDeltaY || t.deltaY || 0;
            return z && (t.wheelDeltaX && v(t.wheelDeltaX, 120) && (s = -120 * (t.wheelDeltaX / Math.abs(t.wheelDeltaX))), t.wheelDeltaY && v(t.wheelDeltaY, 120) && (r = -120 * (t.wheelDeltaY / Math.abs(t.wheelDeltaY)))), s || r || (r = -t.wheelDelta || 0), 1 === t.deltaMode && (s *= 40, r *= 40), !E.touchpadSupport && y(r) ? !0 : (Math.abs(s) > 1.2 && (s *= E.stepSize / 120), Math.abs(r) > 1.2 && (r *= E.stepSize / 120), n(o, s, r), t.preventDefault(), void a())
        }

        function s(t) {
            var e = t.target,
                i = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== L.spacebar;
            document.contains(P) || (P = document.activeElement);
            var o = /^(textarea|select|embed|object)$/i,
                s = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (o.test(e.nodeName) || m(e, "input") && !s.test(e.type) || m(P, "video") || b(t) || e.isContentEditable || t.defaultPrevented || i) return !0;
            if ((m(e, "button") || m(e, "input") && s.test(e.type)) && t.keyCode === L.spacebar) return !0;
            var r, l = 0,
                u = 0,
                d = h(P),
                p = d.clientHeight;
            switch (d == document.body && (p = window.innerHeight), t.keyCode) {
                case L.up:
                    u = -E.arrowScroll;
                    break;
                case L.down:
                    u = E.arrowScroll;
                    break;
                case L.spacebar:
                    r = t.shiftKey ? 1 : -1, u = -r * p * .9;
                    break;
                case L.pageup:
                    u = .9 * -p;
                    break;
                case L.pagedown:
                    u = .9 * p;
                    break;
                case L.home:
                    u = -d.scrollTop;
                    break;
                case L.end:
                    var c = d.scrollHeight - d.scrollTop - p;
                    u = c > 0 ? c + 10 : 0;
                    break;
                case L.left:
                    l = -E.arrowScroll;
                    break;
                case L.right:
                    l = E.arrowScroll;
                    break;
                default:
                    return !0
            }
            n(d, l, u), t.preventDefault(), a()
        }

        function r(t) {
            P = t.target
        }

        function a() {
            clearTimeout(j), j = setInterval(function () {
                V = {}
            }, 1e3)
        }

        function l(t, e) {
            for (var i = t.length; i--;) V[W(t[i])] = e;
            return e
        }

        function h(t) {
            var e = [],
                i = document.body,
                n = k.scrollHeight;
            do {
                var o = V[W(t)];
                if (o) return l(e, o);
                if (e.push(t), n === t.scrollHeight) {
                    var s = d(k) && d(i),
                        r = s || p(k);
                    if (Q && u(k) || !Q && r) return l(e, q())
                } else if (u(t) && p(t)) return l(e, t)
            } while (t = t.parentElement)
        }

        function u(t) {
            return t.clientHeight + 10 < t.scrollHeight
        }

        function d(t) {
            var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
            return "hidden" !== e
        }

        function p(t) {
            var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
            return "scroll" === e || "auto" === e
        }

        function c(t, e) {
            window.addEventListener(t, e, !1)
        }

        function f(t, e) {
            window.removeEventListener(t, e, !1)
        }

        function m(t, e) {
            return (t.nodeName || "").toLowerCase() === e.toLowerCase()
        }

        function g(t, e) {
            t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, (D.x !== t || D.y !== e) && (D.x = t, D.y = e, M = [], R = 0)
        }

        function y(t) {
            return t ? (A.length || (A = [t, t, t]), t = Math.abs(t), A.push(t), A.shift(), clearTimeout(Y), Y = setTimeout(function () {
                window.localStorage && (localStorage.SS_deltaBuffer = A.join(","))
            }, 1e3), !w(120) && !w(100)) : void 0
        }

        function v(t, e) {
            return Math.floor(t / e) == t / e
        }

        function w(t) {
            return v(A[0], t) && v(A[1], t) && v(A[2], t)
        }

        function b(t) {
            var e = t.target,
                i = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                do
                    if (i = e.classList && e.classList.contains("html5-video-controls")) break; while (e = e.parentNode);
            return i
        }

        function T(t) {
            var e, i, n;
            return t *= E.pulseScale, 1 > t ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * E.pulseNormalize
        }

        function x(t) {
            return t >= 1 ? 1 : 0 >= t ? 0 : (1 == E.pulseNormalize && (E.pulseNormalize /= T(1)), T(t))
        }

        function _(t) {
            for (var e in t) I.hasOwnProperty(e) && (E[e] = t[e])
        }
        var P, C, S, j, Y, I = {
                frameRate: 150,
                animationTime: 400,
                stepSize: 100,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 50,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                touchpadSupport: !1,
                fixedBackground: !0,
                excluded: ""
            },
            E = I,
            $ = !1,
            Q = !1,
            D = {
                x: 0,
                y: 0
            },
            O = !1,
            k = document.documentElement,
            A = [],
            z = /^Mac/.test(navigator.platform),
            L = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            M = [],
            N = !1,
            R = Date.now(),
            W = function () {
                var t = 0;
                return function (e) {
                    return e.uniqueID || (e.uniqueID = t++)
                }
            }(),
            V = {};
        window.localStorage && localStorage.SS_deltaBuffer && (A = localStorage.SS_deltaBuffer.split(","));
        var F, B = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t, e, i) {
                    window.setTimeout(t, i || 1e3 / 60)
                }
            }(),
            H = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            q = function () {
                var t;
                return function () {
                    if (!t) {
                        var e = document.createElement("div");
                        e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                        var i = document.body.scrollTop;
                        document.documentElement.scrollTop;
                        window.scrollBy(0, 3), t = document.body.scrollTop != i ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
                    }
                    return t
                }
            }(),
            X = window.navigator.userAgent,
            U = /Edge/.test(X),
            G = /chrome/i.test(X) && !U,
            K = /safari/i.test(X) && !U,
            Z = /mobile/i.test(X),
            J = (G || K) && !Z;
        "onwheel" in document.createElement("div") ? F = "wheel" : "onmousewheel" in document.createElement("div") && (F = "mousewheel"), F && J && (c(F, o), c("mousedown", r), c("load", e)), _.destroy = i, window.SmoothScrollOptions && _(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
            return _
        }) : "object" == typeof exports ? module.exports = _ : window.SmoothScroll = _
    }(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var o = function () {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function (e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            s = o.attr("data-target");
        s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.button"),
                s = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function (e) {
        var i = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function () {
            n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            s = (i + o) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, n) {
        var o = this.$element.find(".item.active"),
            s = n || this.getItemForDirection(e, o),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(s)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function () {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    };
    var o = function (i) {
        var n, o = t(this),
            s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var s = e(o),
            r = s.data("bs.collapse"),
            a = r ? "toggle" : o.data();
        i.call(s, a)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(s).each(function () {
            var n = t(this),
                o = e(n),
                s = {
                    relatedTarget: this
                };
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function n(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var o = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        r = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.5", r.prototype.toggle = function (n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o),
                r = s.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, r.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = e(n),
                    r = o.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, n) {
        return this.each(function () {
            var o = t(this),
                s = o.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
        })
    }
    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$dialog.one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var n = t(this),
            o = n.attr("href"),
            s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function (e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(a);
            h && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = s[0].offsetWidth,
                p = s[0].offsetHeight;
            if (h) {
                var c = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + p > f.bottom ? "top" : "top" == a && u.top - p < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, s.removeClass(c).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, d, p);
            this.applyPlacement(m, a);
            var g = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            s = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function (t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            h = n[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var u = this.getViewportAdjustedDelta(i, e, l, h);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(i),
            p = d ? 2 * u.left - o + l : 2 * u.top - s + h,
            c = d ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][c], d)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
            t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function n() {
            "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            s = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, r, a, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var h = e.left - s,
                u = e.left + s + i;
            h < r.left ? o.left = r.left - h : u > r.right && (o.left = r.left + r.width - u)
        }
        return o
    }, i.prototype.getTitle = function () {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}
    (jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.popover"),
                s = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}
    
(jQuery), + function (t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [[s[i]().top + n, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, n, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = n.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    };
    var o = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.affix"),
                s = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, n) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? o + this.unpin <= s.top ? !1 : "bottom" : t - n >= o + r ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top,
            h = a ? r : e;
        return null != i && i >= o ? "top" : null != n && l + h >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                o = n.top,
                s = n.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - s
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function (t) {
    t.fn.downCount = function (e, i) {
        function n() {
            var t = new Date(o.date),
                e = r(),
                n = t - e;
            if (0 > n) return clearInterval(a), void(i && "function" == typeof i && i());
            var l = 1e3,
                h = 60 * l,
                u = 60 * h,
                d = 24 * u,
                p = Math.floor(n / d),
                c = Math.floor(n % d / u),
                f = Math.floor(n % u / h),
                m = Math.floor(n % h / l);
            p = String(p).length >= 2 ? p : "0" + p, c = String(c).length >= 2 ? c : "0" + c, f = String(f).length >= 2 ? f : "0" + f, m = String(m).length >= 2 ? m : "0" + m;
            var g = 1 === p ? "day" : "days",
                y = 1 === c ? "hour" : "hours",
                v = 1 === f ? "minute" : "minutes",
                w = 1 === m ? "second" : "seconds";
            s.find(".days").text(p), s.find(".hours").text(c), s.find(".minutes").text(f), s.find(".seconds").text(m), s.find(".days_ref").text(g), s.find(".hours_ref").text(y), s.find(".minutes_ref").text(v), s.find(".seconds_ref").text(w)
        }
        var o = t.extend({
            date: null,
            offset: null
        }, e);
        o.date || t.error("Date is not defined."), Date.parse(o.date) || t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
        var s = this,
            r = function () {
                var t = new Date,
                    e = t.getTime() + 6e4 * t.getTimezoneOffset(),
                    i = new Date(e + 36e5 * o.offset);
                return i
            },
            a = setInterval(n, 1e3)
    }
}
(jQuery), ! function (t) {
    t.flexslider = function (e, i) {
        var n = t(e);
        n.vars = t.extend({}, t.flexslider.defaults, i);
        var o, s = n.vars.namespace,
            r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            a = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
            l = "click touchend MSPointerUp keyup",
            h = "",
            u = "vertical" === n.vars.direction,
            d = n.vars.reverse,
            p = n.vars.itemWidth > 0,
            c = "fade" === n.vars.animation,
            f = "" !== n.vars.asNavFor,
            m = {},
            g = !0;
        t.data(e, "flexslider", n), m = {
            init: function () {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = t(n.vars.selector, n), n.container = t(n.containerSelector, n), n.count = n.slides.length, n.syncExists = t(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = u ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !c && n.vars.useCSS && function () {
                    var t = document.createElement("div"),
                        e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]]) return n.pfx = e[i].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === t(n.vars.customDirectionNav).length && t(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && m.controlNav.setup(), n.vars.directionNav && m.directionNav.setup(), n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup", function (t) {
                    var e = t.keyCode;
                    if (!n.animating && (39 === e || 37 === e)) {
                        var i = 39 === e ? n.getTarget("next") : 37 === e ? n.getTarget("prev") : !1;
                        n.flexAnimate(i, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function (t, e, i, o) {
                    t.preventDefault();
                    var s = n.getTarget(0 > e ? "next" : "prev");
                    n.flexAnimate(s, n.vars.pauseOnAction)
                }), n.vars.pausePlay && m.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && m.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
                    n.manualPlay || n.manualPause || n.pause()
                }, function () {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && m.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), f && m.asNav.setup(), a && n.vars.touch && m.touch(), (!c || c && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
                    n.vars.start(n)
                }, 200)
            },
            asNav: {
                setup: function () {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(s + "active-slide").eq(n.currentItem).addClass(s + "active-slide"), r ? (e._slider = n, n.slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (t) {
                            t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var i = t(this),
                                o = i.index();
                            t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < o ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(l, function (e) {
                        e.preventDefault();
                        var i = t(this),
                            o = i.index(),
                            r = i.offset().left - t(n).scrollLeft();
                        0 >= r && i.hasClass(s + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(s + "active-slide") || (n.direction = n.currentItem < o ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    n.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var e, i, o = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                        r = 1;
                    if (n.controlNavScaffold = t('<ol class="' + s + "control-nav " + s + o + '"></ol>'), n.pagingCount > 1)
                        for (var a = 0; a < n.pagingCount; a++) {
                            if (i = n.slides.eq(a), e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                var u = i.attr("data-thumbcaption");
                                "" !== u && void 0 !== u && (e += '<span class="' + s + 'caption">' + u + "</span>")
                            }
                            n.controlNavScaffold.append("<li>" + e + "</li>"), r++
                        }
                    n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function (e) {
                        if (e.preventDefault(), "" === h || h === e.type) {
                            var i = t(this),
                                o = n.controlNav.index(i);
                            i.hasClass(s + "active") || (n.direction = o > n.currentSlide ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                        }
                        "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    n.controlNav = n.manualControls, m.controlNav.active(), n.controlNav.bind(l, function (e) {
                        if (e.preventDefault(), "" === h || h === e.type) {
                            var i = t(this),
                                o = n.controlNav.index(i);
                            i.hasClass(s + "active") || (n.direction = o > n.currentSlide ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                        }
                        "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = t("." + s + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                },
                active: function () {
                    n.controlNav.removeClass(s + "active").eq(n.animatingTo).addClass(s + "active")
                },
                update: function (e, i) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(), m.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : m.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var e = t('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + s + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + s + "direction-nav li a", n)), m.directionNav.update(), n.directionNav.bind(l, function (e) {
                        e.preventDefault();
                        var i;
                        ("" === h || h === e.type) && (i = n.getTarget(t(this).hasClass(s + "next") ? "next" : "prev"), n.flexAnimate(i, n.vars.pauseOnAction)), "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var t = s + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + s + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + s + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var e = t('<div class="' + s + 'pauseplay"><a></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + s + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + s + "pauseplay a", n)), m.pausePlay.update(n.vars.slideshow ? s + "pause" : s + "play"), n.pausePlay.bind(l, function (e) {
                        e.preventDefault(), ("" === h || h === e.type) && (t(this).hasClass(s + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                },
                update: function (t) {
                    "play" === t ? n.pausePlay.removeClass(s + "pause").addClass(s + "play").html(n.vars.playText) : n.pausePlay.removeClass(s + "play").addClass(s + "pause").html(n.vars.pauseText)
                }
            },
            touch: function () {
                function t(t) {
                    t.stopPropagation(), n.animating ? t.preventDefault() : (n.pause(), e._gesture.addPointer(t.pointerId), x = 0, h = u ? n.h : n.w, m = Number(new Date), l = p && d && n.animatingTo === n.last ? 0 : p && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * h : (n.currentSlide + n.cloneOffset) * h)
                }

                function i(t) {
                    t.stopPropagation();
                    var i = t.target._slider;
                    if (i) {
                        var n = -t.translationX,
                            o = -t.translationY;
                        return x += u ? o : n, f = x, w = u ? Math.abs(x) < Math.abs(-n) : Math.abs(x) < Math.abs(-o), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            e._gesture.stop()
                        }) : void((!w || Number(new Date) - m > 500) && (t.preventDefault(), !c && i.transitions && (i.vars.animationLoop || (f = x / (0 === i.currentSlide && 0 > x || i.currentSlide === i.last && x > 0 ? Math.abs(x) / h + 2 : 1)), i.setProps(l + f, "setTouch"))))
                    }
                }

                function o(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !w && null !== f) {
                            var i = d ? -f : f,
                                n = e.getTarget(i > 0 ? "next" : "prev");
                            e.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > h / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : c || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        s = null, a = null, f = null, l = null, x = 0
                    }
                }
                var s, a, l, h, f, m, g, y, v, w = !1,
                    b = 0,
                    T = 0,
                    x = 0;
                r ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = n, e.addEventListener("MSGestureChange", i, !1), e.addEventListener("MSGestureEnd", o, !1)) : (g = function (t) {
                    n.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (n.pause(), h = u ? n.h : n.w, m = Number(new Date), b = t.touches[0].pageX, T = t.touches[0].pageY, l = p && d && n.animatingTo === n.last ? 0 : p && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * h : (n.currentSlide + n.cloneOffset) * h, s = u ? T : b, a = u ? b : T, e.addEventListener("touchmove", y, !1), e.addEventListener("touchend", v, !1))
                }, y = function (t) {
                    b = t.touches[0].pageX, T = t.touches[0].pageY, f = u ? s - T : s - b, w = u ? Math.abs(f) < Math.abs(b - a) : Math.abs(f) < Math.abs(T - a);
                    var e = 500;
                    (!w || Number(new Date) - m > e) && (t.preventDefault(), !c && n.transitions && (n.vars.animationLoop || (f /= 0 === n.currentSlide && 0 > f || n.currentSlide === n.last && f > 0 ? Math.abs(f) / h + 2 : 1), n.setProps(l + f, "setTouch")))
                }, v = function (t) {
                    if (e.removeEventListener("touchmove", y, !1), n.animatingTo === n.currentSlide && !w && null !== f) {
                        var i = d ? -f : f,
                            o = n.getTarget(i > 0 ? "next" : "prev");
                        n.canAdvance(o) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > h / 2) ? n.flexAnimate(o, n.vars.pauseOnAction) : c || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    e.removeEventListener("touchend", v, !1), s = null, a = null, f = null, l = null
                }, e.addEventListener("touchstart", g, !1))
            },
            resize: function () {
                !n.animating && n.is(":visible") && (p || n.doMath(), c ? m.smoothHeight() : p ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : u ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && m.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            },
            smoothHeight: function (t) {
                if (!u || c) {
                    var e = c ? n : n.viewport;
                    t ? e.animate({
                        height: n.slides.eq(n.animatingTo).height()
                    }, t) : e.height(n.slides.eq(n.animatingTo).height())
                }
            },
            sync: function (e) {
                var i = t(n.vars.sync).data("flexslider"),
                    o = n.animatingTo;
                switch (e) {
                    case "animate":
                        i.flexAnimate(o, n.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        i.playing || i.asNav || i.play();
                        break;
                    case "pause":
                        i.pause()
                }
            },
            uniqueID: function (e) {
                return e.filter("[id]").add(e.find("[id]")).each(function () {
                    var e = t(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var t = m.pauseInvisible.getHiddenProp();
                    if (t) {
                        var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(e, function () {
                            m.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                },
                isHidden: function () {
                    var t = m.pauseInvisible.getHiddenProp();
                    return t ? document[t] : !1
                },
                getHiddenProp: function () {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var e = 0; e < t.length; e++)
                        if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(o), o = setTimeout(function () {
                    h = ""
                }, 3e3)
            }
        }, n.flexAnimate = function (e, i, o, r, l) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), f && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, l) || o) && n.is(":visible")) {
                if (f && r) {
                    var h = t(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, h.flexAnimate(e, !0, !1, !0, l), n.direction = n.currentItem < e ? "next" : "prev", h.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !l && m.sync("animate"), n.vars.controlNav && m.controlNav.active(), p || n.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && m.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), c) a ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(w)) : (n.slides.eq(n.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                else {
                    var g, y, v, w = u ? n.slides.filter(":first").height() : n.computedW;
                    p ? (g = n.vars.itemMargin, v = (n.itemW + g) * n.move * n.animatingTo, y = v > n.limit && 1 !== n.visible ? n.limit : v) : y = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? d ? (n.count + n.cloneOffset) * w : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? d ? 0 : (n.count + 1) * w : d ? (n.count - 1 - e + n.cloneOffset) * w : (e + n.cloneOffset) * w, n.setProps(y, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(w)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
                        n.wrapup(w)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
                        n.wrapup(w)
                    })
                }
                n.vars.smoothHeight && m.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function (t) {
            c || p || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function () {
            !n.animating && g && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function () {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && m.pausePlay.update("play"), n.syncExists && m.sync("pause")
        }, n.play = function () {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && m.pausePlay.update("pause"), n.syncExists && m.sync("play")
        }, n.stop = function () {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function (t, e) {
            var i = f ? n.pagingCount - 1 : n.last;
            return e ? !0 : f && n.currentItem === n.count - 1 && 0 === t && "prev" === n.direction ? !0 : f && 0 === n.currentItem && t === n.pagingCount - 1 && "next" !== n.direction ? !1 : t !== n.currentSlide || f ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && t === i && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === i && 0 === t && "next" === n.direction ? !1 : !0 : !1
        }, n.getTarget = function (t) {
            return n.direction = t, "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function (t, e, i) {
            var o = function () {
                var i = t ? t : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                    o = function () {
                        if (p) return "setTouch" === e ? t : d && n.animatingTo === n.last ? 0 : d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : i;
                        switch (e) {
                            case "setTotal":
                                return d ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t : (n.currentSlide + n.cloneOffset) * t;
                            case "setTouch":
                                return d ? t : t;
                            case "jumpEnd":
                                return d ? t : n.count * t;
                            case "jumpStart":
                                return d ? n.count * t : t;
                            default:
                                return t
                        }
                    }();
                return -1 * o + "px"
            }();
            n.transitions && (o = u ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)), n.args[n.prop] = o, (n.transitions || void 0 === i) && n.container.css(n.args), n.container.css("transform", o)
        }, n.setup = function (e) {
            if (c) n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (a ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && m.smoothHeight();
            else {
                var i, o;
                "init" === e && (n.viewport = t('<div class="' + s + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, d && (o = t.makeArray(n.slides).reverse(), n.slides = t(o), n.container.empty().append(n.slides))), n.vars.animationLoop && !p && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(m.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = t(n.vars.selector, n), i = d ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, u && !p ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    n.newSlides.css({
                        display: "block"
                    }), n.doMath(), n.viewport.height(n.h), n.setProps(i * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function () {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && m.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            p || n.slides.removeClass(s + "active-slide").eq(n.currentSlide).addClass(s + "active-slide"), n.vars.init(n)
        }, n.doMath = function () {
            var t = n.slides.first(),
                e = n.vars.itemMargin,
                i = n.vars.minItems,
                o = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = t.height(), n.boxPadding = t.outerWidth() - t.width(), p ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT : n.w, n.maxW = o ? o * n.itemT - e : n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i : n.maxW < n.w ? (n.w - e * (o - 1)) / o : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
        }, n.update = function (t, e) {
            n.doMath(), p || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1),
                n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === e && !p || n.pagingCount > n.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !p || n.pagingCount < n.controlNav.length) && (p && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), m.controlNav.update("remove", n.last))), n.vars.directionNav && m.directionNav.update()
        }, n.addSlide = function (e, i) {
            var o = t(e);
            n.count += 1, n.last = n.count - 1, u && d ? void 0 !== i ? n.slides.eq(n.count - i).after(o) : n.container.prepend(o) : void 0 !== i ? n.slides.eq(i).before(o) : n.container.append(o), n.update(i, "add"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function (e) {
            var i = isNaN(e) ? n.slides.index(t(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? t(e, n.slides).remove() : u && d ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(i, "remove"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, m.init()
    }, t(window).blur(function (t) {
        focused = !1
    }).focus(function (t) {
        focused = !0
    }), t.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    }, t.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function () {
            var i = t(this),
                n = e.selector ? e.selector : ".slides > li",
                o = i.find(n);
            1 === o.length && e.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
        });
        var i = t(this).data("flexslider");
        switch (e) {
            case "play":
                i.play();
                break;
            case "pause":
                i.pause();
                break;
            case "stop":
                i.stop();
                break;
            case "next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && i.flexAnimate(e, !0)
        }
    }
}(jQuery), ! function (t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function (o) {
                if ("string" == typeof o) {
                    for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var h = this[a],
                            u = t.data(h, e);
                        if (u)
                            if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var d = u[o].apply(u, r);
                                if (void 0 !== d) return d
                            } else s("no such method '" + o + "' for " + e + " instance");
                        else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var s = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        n = function () {};
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function () {};
    i.removeEventListener ? o = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var s = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
}(window),
function () {
    "use strict";

    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        s = o.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, o = this.getListenersAsObject(t),
            s = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, o, s = this.getListenersAsObject(t);
        for (o in s) s.hasOwnProperty(o) && (n = e(s[o], i), -1 !== n && s[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, o, s = t ? this.removeListener : this.addListener,
            r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) s.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, o, s, r = this.getListenersAsObject(t);
        for (o in r)
            if (r.hasOwnProperty(o))
                for (n = r[o].length; n--;) i = r[o][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = s, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this),
    function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, s = i.length; s > o; o++)
                    if (e = i[o] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function (t, e) {
        function i(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function n() {}

        function o() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0
            }
            return t
        }

        function s(e) {
            function n() {
                if (!p) {
                    p = !0;
                    var n = t.getComputedStyle;
                    if (h = function () {
                            var t = n ? function (t) {
                                return n(t, null)
                            } : function (t) {
                                return t.currentStyle
                            };
                            return function (e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), u = e("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(o);
                        var a = h(o);
                        d = 200 === i(a.width), s.removeChild(o)
                    }
                }
            }

            function s(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = h(t);
                    if ("none" === e.display) return o();
                    var s = {};
                    s.width = t.offsetWidth, s.height = t.offsetHeight;
                    for (var r = s.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), p = 0, c = a.length; c > p; p++) {
                        var f = a[p],
                            m = e[f];
                        m = l(t, m);
                        var g = parseFloat(m);
                        s[f] = isNaN(g) ? 0 : g
                    }
                    var y = s.paddingLeft + s.paddingRight,
                        v = s.paddingTop + s.paddingBottom,
                        w = s.marginLeft + s.marginRight,
                        b = s.marginTop + s.marginBottom,
                        T = s.borderLeftWidth + s.borderRightWidth,
                        x = s.borderTopWidth + s.borderBottomWidth,
                        _ = r && d,
                        P = i(e.width);
                    P !== !1 && (s.width = P + (_ ? 0 : y + T));
                    var C = i(e.height);
                    return C !== !1 && (s.height = C + (_ ? 0 : v + x)), s.innerWidth = s.width - (y + T), s.innerHeight = s.height - (v + x), s.outerWidth = s.width + w, s.outerHeight = s.height + b, s
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    o = n.left,
                    s = e.runtimeStyle,
                    r = s && s.left;
                return r && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, r && (s.left = r), i
            }
            var h, u, d, p = !1;
            return s
        }
        var r = "undefined" == typeof console ? n : function (t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], s) : "object" == typeof exports ? module.exports = s(require("desandro-get-style-property")) : t.getSize = s(t.getStyleProperty)
    }(window),
    function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : r.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== s.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = r.length; i > t; t++) {
                var n = r[t];
                n()
            }
        }

        function o(o) {
            return "complete" === s.readyState ? n() : (o.bind(s, "DOMContentLoaded", i), o.bind(s, "readystatechange", i), o.bind(t, "load", i)), e
        }
        var s = t.document,
            r = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
    }(window),
    function (t) {
        "use strict";

        function e(t, e) {
            return t[r](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), o = 0, s = n.length; s > o; o++)
                if (n[o] === t) return !0;
            return !1
        }

        function o(t, n) {
            return i(t), e(t, n)
        }
        var s, r = function () {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    s = o + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        if (r) {
            var a = document.createElement("div"),
                l = e(a, "div");
            s = l ? e : o
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return s
        }) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
    }(Element.prototype),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function (t, e, i) {
        var n = {};
        n.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function (t, e) {
            return (t % e + e) % e
        };
        var o = Object.prototype.toString;
        n.isArray = function (t) {
            return "[object Array]" == o.call(t)
        }, n.makeArray = function (t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function (t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
            return t instanceof HTMLElement
        } : function (t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function () {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function (t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function (t, e) {
            t = n.makeArray(t);
            for (var o = [], s = 0, r = t.length; r > s; s++) {
                var a = t[s];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && o.push(a);
                        for (var l = a.querySelectorAll(e), h = 0, u = l.length; u > h; h++) o.push(l[h])
                    } else o.push(a)
            }
            return o
        }, n.debounceMethod = function (t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[o] = setTimeout(function () {
                    n.apply(s, e), delete s[o]
                }, i || 100)
            }
        }, n.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var s = t.console;
        return n.htmlInit = function (i, o) {
            e(function () {
                for (var e = n.toDashed(o), r = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, h = r.length; h > l; l++) {
                    var u, d = r[l],
                        p = d.getAttribute(a);
                    try {
                        u = p && JSON.parse(p)
                    } catch (c) {
                        s && s.error("Error parsing " + a + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
                        continue
                    }
                    var f = new i(d, u),
                        m = t.jQuery;
                    m && m.data(d, o, f)
                }
            })
        }, n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, n, o, s) {
            return e(t, i, n, o, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function (t, e, i, n, o) {
        "use strict";

        function s(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function r(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function a(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }
        var l = t.getComputedStyle,
            h = l ? function (t) {
                return l(t, null)
            } : function (t) {
                return t.currentStyle
            },
            u = n("transition"),
            d = n("transform"),
            p = u && d,
            c = !!n("perspective"),
            f = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            m = ["transform", "transition", "transitionDuration", "transitionProperty"],
            g = function () {
                for (var t = {}, e = 0, i = m.length; i > e; e++) {
                    var o = m[e],
                        s = n(o);
                    s && s !== o && (t[o] = s)
                }
                return t
            }();
        o.extend(r.prototype, e.prototype), r.prototype._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, r.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.getSize = function () {
            this.size = i(this.element)
        }, r.prototype.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var n = g[i] || i;
                e[n] = t[i]
            }
        }, r.prototype.getPosition = function () {
            var t = h(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                o = t[i ? "left" : "right"],
                s = t[n ? "top" : "bottom"],
                r = this.layout.size,
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.width : parseInt(o, 10),
                l = -1 != s.indexOf("%") ? parseFloat(s) / 100 * r.height : parseInt(s, 10);
            a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? r.paddingLeft : r.paddingRight, l -= n ? r.paddingTop : r.paddingBottom, this.position.x = a, this.position.y = l
        }, r.prototype.layoutPosition = function () {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                o = e.isOriginLeft ? "left" : "right",
                s = e.isOriginLeft ? "right" : "left",
                r = this.position.x + t[n];
            i[o] = this.getXValue(r), i[s] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                h = e.isOriginTop ? "bottom" : "top",
                u = this.position.y + t[a];
            i[l] = this.getYValue(u), i[h] = "", this.css(i), this.emitEvent("layout", [this])
        }, r.prototype.getXValue = function (t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, r.prototype.getYValue = function (t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, r.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                s = parseInt(e, 10),
                r = o === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                h = {};
            h.transform = this.getTranslate(a, l), this.transition({
                to: h,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, r.prototype.getTranslate = function (t, e) {
            var i = this.layout.options;
            return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, c ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
        }, r.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, r.prototype.moveTo = p ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, r.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, r.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var y = "opacity," + a(g.transform || "transform");
        r.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: y,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(f, this, !1))
        }, r.prototype.transition = r.prototype[u ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, r.prototype.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var v = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        r.prototype.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], s(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var n = e.onEnd[i];
                    n.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, r.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
        }, r.prototype._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var w = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return r.prototype.removeTransitionStyles = function () {
            this.css(w)
        }, r.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, r.prototype.remove = function () {
            if (!u || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function () {
                t.removeElem()
            }), this.hide()
        }, r.prototype.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, r.prototype.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, r.prototype.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, r.prototype.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, r.prototype.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, r.prototype.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, r
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s, r) {
            return e(t, i, n, o, s, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, i, n, o, s) {
        "use strict";

        function r(t, e) {
            var i = o.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
            var n = ++u;
            this.element.outlayerGUID = n, d[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            l = t.jQuery,
            h = function () {},
            u = 0,
            d = {};
        return r.namespace = "outlayer", r.Item = s, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, o.extend(r.prototype, i.prototype), r.prototype.option = function (t) {
            o.extend(this.options, t)
        }, r.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, r.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, r.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, s = e.length; s > o; o++) {
                var r = e[o],
                    a = new i(r, this);
                n.push(a)
            }
            return n
        }, r.prototype._filterFindItemElements = function (t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, r.prototype.getItemElements = function () {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, r.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, r.prototype._init = r.prototype.layout, r.prototype._resetLayout = function () {
            this.getSize()
        }, r.prototype.getSize = function () {
            this.size = n(this.element)
        }, r.prototype._getMeasurement = function (t, e) {
            var i, s = this.options[t];
            s ? ("string" == typeof s ? i = this.element.querySelector(s) : o.isElement(s) && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
        }, r.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, r.prototype._getItemsForLayout = function (t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var o = t[i];
                o.isIgnored || e.push(o)
            }
            return e
        }, r.prototype._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, o = t.length; o > n; n++) {
                    var s = t[n],
                        r = this._getItemLayoutPosition(s);
                    r.item = s, r.isInstant = e || s.isLayoutInstant, i.push(r)
                }
                this._processLayoutQueue(i)
            }
        }, r.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, r.prototype._processLayoutQueue = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, r.prototype._positionItem = function (t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, r.prototype._postLayout = function () {
            this.resizeContainer()
        }, r.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, r.prototype._getContainerSize = h, r.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, r.prototype._emitCompleteOnItems = function (t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                r++, r === s && i()
            }
            var o = this,
                s = e.length;
            if (!e || !s) return void i();
            for (var r = 0, a = 0, l = e.length; l > a; a++) {
                var h = e[a];
                h.once(t, n)
            }
        }, r.prototype.dispatchEvent = function (t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var o = l.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, r.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, r.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, r.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, r.prototype.unstamp = function (t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    o.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, r.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
        }, r.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, r.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, r.prototype._manageStamp = h, r.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                o = n(t),
                s = {
                    left: e.left - i.left - o.marginLeft,
                    top: e.top - i.top - o.marginTop,
                    right: i.right - e.right - o.marginRight,
                    bottom: i.bottom - e.bottom - o.marginBottom
                };
            return s
        }, r.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.bindResize = function () {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, r.prototype.unbindResize = function () {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, r.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, r.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, r.prototype.needsResizeLayout = function () {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, r.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, r.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, r.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, r.prototype.reveal = function (t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, r.prototype.hide = function (t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, r.prototype.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, r.prototype.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, r.prototype.getItem = function (t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t) return n
            }
        }, r.prototype.getItems = function (t) {
            t = o.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var s = t[i],
                    r = this.getItem(s);
                r && e.push(r)
            }
            return e
        }, r.prototype.remove = function (t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var s = e[i];
                    s.remove(), o.removeFrom(this.items, s)
                }
        }, r.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize();
            var o = this.element.outlayerGUID;
            delete d[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, r.data = function (t) {
            t = o.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && d[e]
        }, r.create = function (t, e) {
            function i() {
                r.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(r.prototype) : o.extend(i.prototype, r.prototype), i.prototype.constructor = i, i.defaults = o.extend({}, r.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = r.data, i.Item = function () {
                s.apply(this, arguments)
            }, i.Item.prototype = new s, o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, r.Item = s, r
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function (t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function () {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function () {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function (t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function () {
            function t(t) {
                return function () {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, s = n.length; s > o; o++) {
                var r = n[o];
                i.prototype[r] = t(r)
            }
        }(), i.prototype.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function (t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function (t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function (t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                s = o / n,
                r = n - o % n,
                a = r && 1 > r ? "round" : "floor";
            s = Math[a](s), this.cols = Math.max(s, 1)
        }, n.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                o = Math[n](t.size.outerWidth / this.columnWidth);
            o = Math.min(o, this.cols);
            for (var s = this._getColGroup(o), r = Math.min.apply(Math, s), a = i.indexOf(s, r), l = {
                    x: this.columnWidth * a,
                    y: r
                }, h = r + t.size.outerHeight, u = this.cols + 1 - s.length, d = 0; u > d; d++) this.colYs[a + d] = h;
            return l
        }, n.prototype._getColGroup = function (t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o)
            }
            return e
        }, n.prototype._manageStamp = function (t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this.options.isOriginLeft ? n.left : n.right,
                s = o + i.outerWidth,
                r = Math.floor(o / this.columnWidth);
            r = Math.max(0, r);
            var a = Math.floor(s / this.columnWidth);
            a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, h = r; a >= h; h++) this.colYs[h] = Math.max(l, this.colYs[h])
        }, n.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var n = t.create("masonry"),
            o = n.prototype._getElementOffset,
            s = n.prototype.layout,
            r = n.prototype._getMeasurement;
        i(n.prototype, e.prototype), n.prototype._getElementOffset = o, n.prototype.layout = s, n.prototype._getMeasurement = r;
        var a = n.prototype.measureColumns;
        n.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var l = n.prototype._manageStamp;
        return n.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, e.prototype._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, e
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function () {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function () {
            return {
                height: this.y
            }
        }, e
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, s, r, a) {
            return e(t, i, n, o, s, r, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function (t, e, i, n, o, s, r) {
        function a(t, e) {
            return function (i, n) {
                for (var o = 0, s = t.length; s > o; o++) {
                    var r = t[o],
                        a = i.sortData[r],
                        l = n.sortData[r];
                    if (a > l || l > a) {
                        var h = void 0 !== e[r] ? e[r] : e,
                            u = h ? 1 : -1;
                        return (a > l ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            h = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = document.documentElement,
            d = u.textContent ? function (t) {
                return t.textContent
            } : function (t) {
                return t.innerText
            },
            p = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        p.Item = s, p.LayoutMode = r, p.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in r.modes) this._initLayoutMode(t)
        }, p.prototype.reloadItems = function () {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, p.prototype._itemize = function () {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
                var o = t[i];
                o.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, p.prototype._initLayoutMode = function (t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, p.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, p.prototype._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, p.prototype.arrange = function (t) {
            function e() {
                n.reveal(i.needReveal), n.hide(i.needHide)
            }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var n = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function () {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, p.prototype._bindArrangeComplete = function () {
            function t() {
                e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, i, n, o = this;
            this.once("layoutComplete", function () {
                e = !0, t()
            }), this.once("hideComplete", function () {
                i = !0, t()
            }), this.once("revealComplete", function () {
                n = !0, t()
            })
        }, p.prototype._filter = function (t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0, a = t.length; a > r; r++) {
                var l = t[r];
                if (!l.isIgnored) {
                    var h = s(l);
                    h && i.push(l), h && l.isHidden ? n.push(l) : h || l.isHidden || o.push(l)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: o
            }
        }, p.prototype._getFilterTest = function (t) {
            return l && this.options.isJQueryFiltering ? function (e) {
                return l(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return n(e.element, t)
            }
        }, p.prototype.updateSortData = function (t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, p.prototype._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = c(i)
            }
        }, p.prototype._updateItemsSortData = function (t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var c = function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    n = i[0],
                    o = n.match(/^\[(.+)\]$/),
                    s = o && o[1],
                    r = e(s, n),
                    a = p.sortDataParsers[i[1]];
                return t = a ? function (t) {
                    return t && a(r(t))
                } : function (t) {
                    return t && r(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function (e) {
                    return e.getAttribute(t)
                } : function (t) {
                    var i = t.querySelector(e);
                    return i && d(i)
                }
            }
            return t
        }();
        p.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        }, p.prototype._sort = function () {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, p.prototype._mode = function () {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, p.prototype._resetLayout = function () {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, p.prototype._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, p.prototype._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, p.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, p.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, p.prototype.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, p.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, p.prototype._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, p.prototype.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, o = e.length;
                for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
                var s = this._filter(e).matches;
                for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
        var f = p.prototype.remove;
        return p.prototype.remove = function (t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            f.call(this, t);
            var i = e && e.length;
            if (i)
                for (var n = 0; i > n; n++) {
                    var s = e[n];
                    o.removeFrom(this.filteredItems, s)
                }
        }, p.prototype.shuffle = function () {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, p.prototype._noTransition = function (t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, p.prototype.getFilteredItemElements = function () {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, p
    }),
    function (t) {
        "use strict";
        t.ajaxChimp = {
            responses: {
                "We have sent you a confirmation email": 0,
                "Please enter a value": 1,
                "An email address must contain a single @": 2,
                "The domain portion of the email address is invalid (the portion after the @: )": 3,
                "The username portion of the email address is invalid (the portion before the @: )": 4,
                "This email address looks fake or invalid. Please enter a real email address": 5
            },
            translations: {
                en: null
            },
            init: function (e, i) {
                t(e).ajaxChimp(i)
            }
        }, t.fn.ajaxChimp = function (e) {
            return t(this).each(function (i, n) {
                var o = t(n),
                    s = o.find("input[type=email]"),
                    r = o.find("label[for=" + s.attr("id") + "]"),
                    a = t.extend({
                        url: o.attr("action"),
                        language: "en"
                    }, e),
                    l = a.url.replace("/post?", "/post-json?").concat("&c=?");
                o.attr("novalidate", "true"), s.attr("name", "EMAIL"), o.submit(function () {
                    function e(e) {
                        if ("success" === e.result) i = "We have sent you a confirmation email", r.removeClass("error").addClass("valid"), s.removeClass("error").addClass("valid");
                        else {
                            s.removeClass("valid").addClass("error"), r.removeClass("valid").addClass("error");
                            var n = -1;
                            try {
                                var o = e.msg.split(" - ", 2);
                                if (void 0 === o[1]) i = e.msg;
                                else {
                                    var l = parseInt(o[0], 10);
                                    l.toString() === o[0] ? (n = o[0], i = o[1]) : (n = -1, i = e.msg)
                                }
                            } catch (h) {
                                n = -1, i = e.msg
                            }
                        }
                        "en" !== a.language && void 0 !== t.ajaxChimp.responses[i] && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[i]] && (i = t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[i]]), r.html(i), r.show(2e3), a.callback && a.callback(e)
                    }
                    var i, n = {},
                        h = o.serializeArray();
                    t.each(h, function (t, e) {
                        n[e.name] = e.value
                    }), t.ajax({
                        url: l,
                        data: n,
                        success: e,
                        dataType: "jsonp",
                        error: function (t, e) {
                            console.log("mailchimp ajax submit error: " + e)
                        }
                    });
                    var u = "Submitting...";
                    return "en" !== a.language && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language].submit && (u = t.ajaxChimp.translations[a.language].submit), r.html(u).show(2e3), !1
                })
            }), this
        }
    }(jQuery),
    function (t) {
        t.fn.appear = function (e, i) {
            var n = t.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, i);
            return this.each(function () {
                var i = t(this);
                if (i.appeared = !1, !e) return void i.trigger("appear", n.data);
                var o = t(window),
                    s = function () {
                        if (!i.is(":visible")) return void(i.appeared = !1);
                        var t = o.scrollLeft(),
                            e = o.scrollTop(),
                            s = i.offset(),
                            r = s.left,
                            a = s.top,
                            l = n.accX,
                            h = n.accY,
                            u = i.height(),
                            d = o.height(),
                            p = i.width(),
                            c = o.width();
                        a + u + h >= e && e + d + h >= a && r + p + l >= t && t + c + l >= r ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
                    },
                    r = function () {
                        if (i.appeared = !0, n.one) {
                            o.unbind("scroll", s);
                            var r = t.inArray(s, t.fn.appear.checks);
                            r >= 0 && t.fn.appear.checks.splice(r, 1)
                        }
                        e.apply(this, arguments)
                    };
                n.one ? i.one("appear", n.data, r) : i.bind("appear", n.data, r), o.scroll(s), t.fn.appear.checks.push(s), s()
            })
        }, t.extend(t.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function () {
                var e = t.fn.appear.checks.length;
                if (e > 0)
                    for (; e--;) t.fn.appear.checks[e]()
            },
            run: function () {
                t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
            }
        }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (e, i) {
            var n = t.fn[i];
            n && (t.fn[i] = function () {
                var e = n.apply(this, arguments);
                return t.fn.appear.run(), e
            })
        })
    }(jQuery),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function (t) {
        function e(t, e) {
            return t.toFixed(e.decimals)
        }
        var i = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
        };
        i.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: e,
            onUpdate: null,
            onComplete: null
        }, i.prototype.init = function () {
            this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
        }, i.prototype.dataOptions = function () {
            var t = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                e = Object.keys(t);
            for (var i in e) {
                var n = e[i];
                "undefined" == typeof t[n] && delete t[n]
            }
            return t
        }, i.prototype.update = function () {
            this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
        }, i.prototype.render = function () {
            var t = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(t)
        }, i.prototype.restart = function () {
            this.stop(), this.init(), this.start()
        }, i.prototype.start = function () {
            this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        }, i.prototype.stop = function () {
            this.interval && clearInterval(this.interval)
        }, i.prototype.toggle = function () {
            this.interval ? this.stop() : this.start()
        }, t.fn.countTo = function (e) {
            return this.each(function () {
                var n = t(this),
                    o = n.data("countTo"),
                    s = !o || "object" == typeof e,
                    r = "object" == typeof e ? e : {},
                    a = "string" == typeof e ? e : "start";
                s && (o && o.stop(), n.data("countTo", o = new i(this, r))), o[a].call(o)
            })
        }
    }), "object" != typeof ytp && (ytp = {}),
    function (jQuery, ytp) {
        if (ytp.isDevice = "ontouchstart" in window, !jQuery.browser) {
            jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.msie = !1;
            var nAgt = navigator.userAgent;
            jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;
            if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
            else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
            else if (-1 != nAgt.indexOf("Trident")) {
                jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
                var start = nAgt.indexOf("rv:") + 3,
                    end = start + 4;
                jQuery.browser.fullVersion = nAgt.substring(start, end)
            } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
        }
        jQuery.fn.CSSAnimate = function (t, e, i, n, o) {
                return this.each(function () {
                    var s = jQuery(this);
                    if (0 !== s.length && t) {
                        if ("function" == typeof e && (o = e, e = jQuery.fx.speeds._default), "function" == typeof i && (o = i, i = 0), "function" == typeof n && (o = n, n = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof e)
                            for (var r in jQuery.fx.speeds) {
                                if (e == r) {
                                    e = jQuery.fx.speeds[r];
                                    break
                                }
                                e = null
                            }
                        if (jQuery.support.transition) {
                            var a = "",
                                l = "transitionEnd";
                            jQuery.browser.webkit ? (a = "-webkit-", l = "webkitTransitionEnd") : jQuery.browser.mozilla ? (a = "-moz-", l = "transitionend") : jQuery.browser.opera ? (a = "-o-", l = "otransitionend") : jQuery.browser.msie && (a = "-ms-", l = "msTransitionEnd"), r = [];
                            for (u in t) {
                                var h = u;
                                "transform" === h && (h = a + "transform", t[h] = t[u], delete t[u]), "transform-origin" === h && (h = a + "transform-origin", t[h] = t[u], delete t[u]), r.push(h), s.css(h) || s.css(h, 0)
                            }
                            u = r.join(","), s.css(a + "transition-property", u), s.css(a + "transition-duration", e + "ms"), s.css(a + "transition-delay", i + "ms"), s.css(a + "transition-timing-function", n), s.css(a + "backface-visibility", "hidden"), setTimeout(function () {
                                s.css(t)
                            }, 0), setTimeout(function () {
                                s.called || !o ? s.called = !1 : o()
                            }, e + 20), s.on(l, function (t) {
                                return s.off(l), s.css(a + "transition", ""), t.stopPropagation(), "function" == typeof o && (s.called = !0, o()), !1
                            })
                        } else {
                            for (var u in t) "transform" === u && delete t[u], "transform-origin" === u && delete t[u], "auto" === t[u] && delete t[u];
                            o && "string" != typeof o || (o = "linear"), s.animate(t, e, o)
                        }
                    }
                })
            }, jQuery.fn.CSSAnimateStop = function () {
                var t = "",
                    e = "transitionEnd";
                jQuery.browser.webkit ? (t = "-webkit-", e = "webkitTransitionEnd") : jQuery.browser.mozilla ? (t = "-moz-", e = "transitionend") : jQuery.browser.opera ? (t = "-o-", e = "otransitionend") : jQuery.browser.msie && (t = "-ms-", e = "msTransitionEnd"), jQuery(this).css(t + "transition", ""), jQuery(this).off(e)
            }, jQuery.support.transition = function () {
                var t = (document.body || document.documentElement).style;
                return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
            }(),
            function (c) {
                c.extend({
                    metadata: {
                        defaults: {
                            type: "class",
                            name: "metadata",
                            cre: /({.*})/,
                            single: "metadata"
                        },
                        setType: function (t, e) {
                            this.defaults.type = t, this.defaults.name = e
                        },
                        get: function (b, f) {
                            var d = c.extend({}, this.defaults, f);
                            d.single.length || (d.single = "metadata");
                            var a = c.data(b, d.single);
                            if (a) return a;
                            if (a = "{}", "class" == d.type) {
                                var e = d.cre.exec(b.className);
                                e && (a = e[1])
                            } else if ("elem" == d.type) {
                                if (!b.getElementsByTagName) return;
                                e = b.getElementsByTagName(d.name), e.length && (a = c.trim(e[0].innerHTML))
                            } else void 0 != b.getAttribute && (e = b.getAttribute(d.name)) && (a = e);
                            return 0 > a.indexOf("{") && (a = "{" + a + "}"), a = eval("(" + a + ")"), c.data(b, d.single, a), a
                        }
                    }
                }), c.fn.metadata = function (t) {
                    return c.metadata.get(this[0], t)
                }
            }(jQuery), String.prototype.getVideoID = function () {
                var t;
                return t = "http://youtu.be/" == this.substr(0, 16) ? this.replace("http://youtu.be/", "") : this.indexOf("http") > -1 ? this.match(/[\\?&]v=([^&#]*)/)[1] : this
            }, jQuery.mbYTPlayer = {
                name: "jquery.mb.YTPlayer",
                version: "2.6.0",
                author: "Matteo Bicocchi",
                defaults: {
                    containment: "body",
                    ratio: "16/9",
                    showYTLogo: !1,
                    videoURL: null,
                    startAt: 0,
                    autoPlay: !0,
                    vol: 100,
                    addRaster: !1,
                    opacity: 1,
                    quality: "default",
                    mute: !1,
                    loop: !0,
                    showControls: !1,
                    showAnnotations: !1,
                    printUrl: !0,
                    stopMovieOnClick: !1,
                    realfullscreen: !0,
                    onReady: function (t) {},
                    onStateChange: function (t) {},
                    onPlaybackQualityChange: function (t) {},
                    onError: function (t) {}
                },
                controls: {
                    play: "P",
                    pause: "p",
                    mute: "M",
                    unmute: "A",
                    onlyYT: "O",
                    showSite: "R",
                    ytLogo: "Y"
                },
                rasterImg: "images/raster.png",
                rasterImgRetina: "images/raster@2x.png",
                locationProtocol: "file:" != location.protocol ? location.protocol : "http:",
                buildPlayer: function (options) {
                    return this.each(function () {
                        var YTPlayer = this,
                            $YTPlayer = jQuery(YTPlayer);
                        YTPlayer.loop = 0, YTPlayer.opt = {};
                        var property = {};
                        $YTPlayer.addClass("mb_YTVPlayer"), jQuery.metadata && (jQuery.metadata.setType("class"), property = $YTPlayer.metadata()), jQuery.isEmptyObject(property) && (property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property")), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                        var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
                        canGoFullscreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "id_" + (new Date).getTime()), YTPlayer.opt.id = YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.opt.isBgndMovie && (YTPlayer.opt.containment = "body"), YTPlayer.opt.isBgndMovie && void 0 != YTPlayer.opt.isBgndMovie.mute && (YTPlayer.opt.mute = YTPlayer.opt.isBgndMovie.mute), YTPlayer.opt.videoURL || (YTPlayer.opt.videoURL = $YTPlayer.attr("href"));
                        var playerID = "mbYTP_" + YTPlayer.id,
                            videoID = this.opt.videoURL ? this.opt.videoURL.getVideoID() : $YTPlayer.attr("href") ? $YTPlayer.attr("href").getVideoID() : !1;
                        YTPlayer.videoID = videoID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                        var playerVars = {
                                autoplay: 0,
                                modestbranding: 1,
                                controls: 0,
                                showinfo: 0,
                                rel: 0,
                                enablejsapi: 1,
                                version: 3,
                                playerapiid: playerID,
                                origin: "*",
                                allowfullscreen: !0,
                                wmode: "transparent",
                                iv_load_policy: YTPlayer.opt.showAnnotations
                            },
                            canPlayHTML5 = !1,
                            v = document.createElement("video");
                        v.canPlayType && (canPlayHTML5 = !0), canPlayHTML5 && jQuery.extend(playerVars, {
                            html5: 1
                        }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                        var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
                            overlay = jQuery("<div/>").css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }).addClass("YTPOverlay");
                        if (YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), ytp.isDevice && YTPlayer.isBackground) return void $YTPlayer.hide();
                        if (YTPlayer.opt.addRaster) {
                            var retina = window.retina || window.devicePixelRatio > 1;
                            overlay.addClass(retina ? "raster retina" : "raster")
                        } else overlay.removeClass("raster retina");
                        var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                        if (wrapper.css({
                                position: "absolute",
                                zIndex: 0,
                                minWidth: "100%",
                                minHeight: "100%",
                                left: 0,
                                top: 0,
                                overflow: "hidden",
                                opacity: 0
                            }), playerBox.css({
                                position: "absolute",
                                zIndex: 0,
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                overflow: "hidden",
                                opacity: this.opt.opacity
                            }), wrapper.append(playerBox), !YTPlayer.isBackground || !ytp.isInit) {
                            if (YTPlayer.opt.containment.children().each(function () {
                                    "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                                }), YTPlayer.isBackground ? (jQuery("body").css({
                                    position: "relative",
                                    minWidth: "100%",
                                    minHeight: "100%",
                                    zIndex: 1,
                                    boxSizing: "border-box"
                                }), wrapper.css({
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    zIndex: 0
                                }), $YTPlayer.hide(), YTPlayer.opt.containment.prepend(wrapper)) : YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                                    opacity: 1
                                }), ytp.isDevice || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
                                    $YTPlayer.find(".mb_YTVPBar").addClass("visible")
                                }).on("mouseleave", function () {
                                    $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
                                }), ytp.YTAPIReady) setTimeout(function () {
                                jQuery(document).trigger("YTAPIReady")
                            }, 200);
                            else {
                                var tag = document.createElement("script");
                                tag.src = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api", tag.id = "YTAPI";
                                var firstScriptTag = document.getElementsByTagName("script")[0];
                                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                            }
                            jQuery(document).on("YTAPIReady", function () {
                                YTPlayer.isBackground && ytp.isInit || YTPlayer.opt.isInit || (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick && jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function (t) {
                                    var e = jQuery(t.target);
                                    (e.is("a") || e.parents().is("a")) && $YTPlayer.pauseYTP()
                                }), YTPlayer.isBackground && (ytp.isInit = !0), YTPlayer.opt.isInit = !0, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer), jQuery(document).on("getVideoInfo_" + YTPlayer.opt.id, function () {
                                    return ytp.isDevice && !YTPlayer.isBackground ? void new YT.Player(playerID, {
                                        height: "100%",
                                        width: "100%",
                                        videoId: YTPlayer.videoID,
                                        events: {
                                            onReady: function () {
                                                $YTPlayer.optimizeDisplay(), playerBox.css({
                                                    opacity: 1
                                                }), YTPlayer.wrapper.css({
                                                    opacity: 1
                                                }), $YTPlayer.optimizeDisplay()
                                            },
                                            onStateChange: function () {}
                                        }
                                    }) : void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function (t) {
                                                YTPlayer.player = t.target, YTPlayer.isReady || (YTPlayer.isReady = !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function () {
                                                    $YTPlayer.optimizeDisplay()
                                                }), YTPlayer.opt.showControls && jQuery(YTPlayer).buildYTPControls(), YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), YTPlayer.opt.startAt > 0 && YTPlayer.player.seekTo(parseFloat(YTPlayer.opt.startAt), !0), YTPlayer.opt.autoPlay ? ($YTPlayer.playYTP(), YTPlayer.player.setVolume(YTPlayer.opt.vol), YTPlayer.opt.mute ? jQuery(YTPlayer).muteYTPVolume() : jQuery(YTPlayer).unmuteYTPVolume()) : (YTPlayer.player.pauseVideo(), YTPlayer.checkForStartAt = setInterval(function () {
                                                    YTPlayer.player.getCurrentTime() >= YTPlayer.opt.startAt && (clearInterval(YTPlayer.checkForStartAt), YTPlayer.opt.mute ? jQuery(YTPlayer).muteYTPVolume() : jQuery(YTPlayer).unmuteYTPVolume())
                                                }, 1)), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady($YTPlayer), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                            },
                                            onStateChange: function (t) {
                                                if ("function" == typeof t.target.getPlayerState) {
                                                    var e = t.target.getPlayerState();
                                                    "function" == typeof YTPlayer.opt.onStateChange && YTPlayer.opt.onStateChange($YTPlayer, e);
                                                    var i = (jQuery(YTPlayer.playerEl), jQuery("#controlBar_" + YTPlayer.id)),
                                                        n = YTPlayer.opt;
                                                    if (0 == e) {
                                                        if (YTPlayer.state == e) return;
                                                        YTPlayer.state = e, YTPlayer.player.pauseVideo();
                                                        var o = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                                        n.loop ? (YTPlayer.wrapper.css({
                                                            opacity: 0
                                                        }), $YTPlayer.playYTP(), YTPlayer.player.seekTo(o, !0)) : YTPlayer.isBackground || (YTPlayer.player.seekTo(o, !0), $YTPlayer.playYTP(), setTimeout(function () {
                                                            $YTPlayer.pauseYTP()
                                                        }, 10)), !n.loop && YTPlayer.isBackground ? YTPlayer.wrapper.CSSAnimate({
                                                            opacity: 0
                                                        }, 2e3) : n.loop && (YTPlayer.wrapper.css({
                                                            opacity: 0
                                                        }), YTPlayer.loop++), i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPEnd")
                                                    }
                                                    if (3 == e) {
                                                        if (YTPlayer.state == e) return;
                                                        YTPlayer.state = e, i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPBuffering")
                                                    }
                                                    if (-1 == e) {
                                                        if (YTPlayer.state == e) return;
                                                        YTPlayer.state = e, YTPlayer.wrapper.css({
                                                            opacity: 0
                                                        }), jQuery(YTPlayer).trigger("YTPUnstarted")
                                                    }
                                                    if (1 == e) {
                                                        if (YTPlayer.state == e) return;
                                                        YTPlayer.state = e, YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), YTPlayer.opt.mute && ($YTPlayer.muteYTPVolume(), YTPlayer.opt.mute = !1), YTPlayer.opt.autoPlay && 0 == YTPlayer.loop ? YTPlayer.wrapper.CSSAnimate({
                                                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                        }, 2e3) : YTPlayer.isBackground ? setTimeout(function () {
                                                            jQuery(YTPlayer.playerEl).CSSAnimate({
                                                                opacity: 1
                                                            }, 2e3), YTPlayer.wrapper.CSSAnimate({
                                                                opacity: YTPlayer.opt.opacity
                                                            }, 2e3)
                                                        }, 1e3) : (YTPlayer.wrapper.css({
                                                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                        }), $YTPlayer.css({
                                                            background: "rgba(0,0,0,0.5)"
                                                        })), i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause), jQuery(YTPlayer).trigger("YTPStart"), "undefined" != typeof _gaq && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.title || YTPlayer.videoID.toString()])
                                                    }
                                                    if (2 == e) {
                                                        if (YTPlayer.state == e) return;
                                                        YTPlayer.state = e, i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPPause")
                                                    }
                                                }
                                            },
                                            onPlaybackQualityChange: function (t) {
                                                "function" == typeof YTPlayer.opt.onPlaybackQualityChange && YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                                            },
                                            onError: function (t) {
                                                2 == t.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, t)
                                            }
                                        }
                                    })
                                }))
                            })
                        }
                    })
                },
                getDataFromFeed: function (t, e) {
                    e.videoID = t, jQuery.browser.msie ? ("auto" == e.opt.ratio ? e.opt.ratio = "16/9" : e.opt.ratio, e.isInit || (e.isInit = !0, setTimeout(function () {
                        jQuery(document).trigger("getVideoInfo_" + e.opt.id)
                    }, 100)), jQuery(e).trigger("YTPChanged")) : (jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + t + "?v=2&alt=jsonc", function (t, i, n) {
                        e.dataReceived = !0;
                        var o = t.data;
                        if (e.title = o.title, e.videoData = o, "auto" == e.opt.ratio && (o.aspectRatio && "widescreen" === o.aspectRatio ? e.opt.ratio = "16/9" : e.opt.ratio = "4/3"), !e.isInit) {
                            if (e.isInit = !0, !e.isBackground) {
                                var s = e.videoData.thumbnail.hqDefault;
                                jQuery(e).css({
                                    background: "rgba(0,0,0,0.5) url(" + s + ") center center",
                                    backgroundSize: "cover"
                                })
                            }
                            jQuery(document).trigger("getVideoInfo_" + e.opt.id)
                        }
                        jQuery(e).trigger("YTPChanged")
                    }), setTimeout(function () {
                        e.dataReceived || e.isInit || (e.isInit = !0, jQuery(document).trigger("getVideoInfo_" + e.opt.id))
                    }, 2500))
                },
                getVideoID: function () {
                    var t = this.get(0);
                    return t.videoID || !1
                },
                setVideoQuality: function (t) {
                    var e = this.get(0);
                    e.player.setPlaybackQuality(t)
                },
                YTPlaylist: function (t, e, i) {
                    var n = this.get(0);
                    n.isPlayList = !0, e && (t = jQuery.shuffle(t)), n.videoID || (n.videos = t, n.videoCounter = 0, n.videoLength = t.length, jQuery(n).data("property", t[0]), jQuery(n).mb_YTPlayer()),
                        "function" == typeof i && jQuery(n).on("YTPChanged", function () {
                            i(n)
                        }), jQuery(n).on("YTPEnd", function () {
                            jQuery(n).playNext()
                        })
                },
                playNext: function () {
                    var t = this.get(0);
                    t.videoCounter++, t.videoCounter >= t.videoLength && (t.videoCounter = 0), jQuery(t.playerEl).css({
                        opacity: 0
                    }), jQuery(t).changeMovie(t.videos[t.videoCounter])
                },
                playPrev: function () {
                    var t = this.get(0);
                    t.videoCounter--, t.videoCounter <= 0 && (t.videoCounter = t.videoLength), jQuery(t.playerEl).css({
                        opacity: 0
                    }), jQuery(t).changeMovie(t.videos[t.videoCounter])
                },
                changeMovie: function (t) {
                    var e = this.get(0),
                        i = e.opt;
                    t && jQuery.extend(i, t), e.videoID = i.videoURL.getVideoID(), jQuery(e).pauseYTP();
                    var n = jQuery.browser.msie ? 1e3 : 0;
                    if (jQuery(e).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + e.videoID), 5, e.opt.quality), setTimeout(function () {
                            jQuery(e).playYTP(), jQuery(e).one("YTPStart", function () {
                                jQuery(e.playerEl).CSSAnimate({
                                    opacity: 1
                                }, 2e3)
                            })
                        }, n), e.opt.mute ? jQuery(e).muteYTPVolume() : jQuery(e).unmuteYTPVolume(), e.opt.addRaster) {
                        var o = window.retina || window.devicePixelRatio > 1;
                        e.overlay.addClass(o ? "raster retina" : "raster")
                    } else e.overlay.removeClass("raster"), e.overlay.removeClass("retina");
                    jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery(e).buildYTPControls(), jQuery.mbYTPlayer.getDataFromFeed(e.videoID, e), jQuery(e).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(e)
                },
                getPlayer: function () {
                    return jQuery(this).get(0).player
                },
                playerDestroy: function () {
                    var t = this.get(0);
                    ytp.YTAPIReady = !1, ytp.isInit = !1, t.opt.isInit = !1, t.videoID = null;
                    var e = t.wrapper;
                    e.remove(), jQuery("#controlBar_" + t.id).remove()
                },
                fullscreen: function (t) {
                    function e(t, e) {
                        for (var i, n, o = ["webkit", "moz", "ms", "o", ""], s = 0; s < o.length && !t[i];) {
                            if (i = e, "" == o[s] && (i = i.substr(0, 1).toLowerCase() + i.substr(1)), i = o[s] + i, n = typeof t[i], "undefined" != n) return o = [o[s]], "function" == n ? t[i]() : t[i];
                            s++
                        }
                    }

                    function i(t) {
                        e(t, "RequestFullScreen")
                    }

                    function n() {
                        (e(document, "FullScreen") || e(document, "IsFullScreen")) && e(document, "CancelFullScreen")
                    }
                    var o = this.get(0),
                        s = jQuery("#controlBar_" + o.id),
                        r = s.find(".mb_OnlyYT"),
                        a = jQuery(o.wrapper);
                    if (t) {
                        var l = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                        jQuery(document).off(l), jQuery(document).on(l, function () {
                            var t = e(document, "IsFullScreen") || e(document, "FullScreen");
                            t ? jQuery(o).setVideoQuality("default") : (jQuery(o).removeClass("fullscreen"), o.isAlone = !1, r.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(o).setVideoQuality(o.opt.quality), o.isBackground ? jQuery("body").after(s) : o.wrapper.before(s), jQuery(window).resize())
                        })
                    }
                    o.isAlone ? (t ? n() : a.CSSAnimate({
                        opacity: o.opt.opacity
                    }, 500), jQuery(o).trigger("YTPFullScreenEnd"), a.css({
                        zIndex: -1
                    }), r.html(jQuery.mbYTPlayer.controls.onlyYT), o.isAlone = !1) : (1 != o.player.getPlayerState() && 2 != o.player.getPlayerState() && jQuery(o).playYTP(), t ? (o.wrapper.append(s), jQuery(o).addClass("fullscreen"), i(a.get(0))) : a.css({
                        zIndex: 1e4
                    }).CSSAnimate({
                        opacity: 1
                    }, 1e3, 0), jQuery(o).trigger("YTPFullScreenStart"), r.html(jQuery.mbYTPlayer.controls.showSite), o.isAlone = !0)
                },
                playYTP: function () {
                    var t = this.get(0),
                        e = jQuery("#controlBar_" + t.id),
                        i = e.find(".mb_YTVPPlaypause");
                    i.html(jQuery.mbYTPlayer.controls.pause), t.player.playVideo(), t.wrapper.CSSAnimate({
                        opacity: t.opt.opacity
                    }, 2e3), jQuery(t).on("YTPStart", function () {
                        jQuery(t).css("background", "none")
                    })
                },
                toggleLoops: function () {
                    var t = this.get(0),
                        e = t.opt;
                    1 == e.loop ? e.loop = 0 : (e.startAt ? t.player.seekTo(e.startAt) : t.player.playVideo(), e.loop = 1)
                },
                stopYTP: function () {
                    var t = this.get(0),
                        e = jQuery("#controlBar_" + t.id),
                        i = e.find(".mb_YTVPPlaypause");
                    i.html(jQuery.mbYTPlayer.controls.play), t.player.stopVideo()
                },
                pauseYTP: function () {
                    var t = this.get(0),
                        e = (t.opt, jQuery("#controlBar_" + t.id)),
                        i = e.find(".mb_YTVPPlaypause");
                    i.html(jQuery.mbYTPlayer.controls.play), t.player.pauseVideo()
                },
                seekToYTP: function (t) {
                    var e = this.get(0);
                    e.player.seekTo(t, !0)
                },
                setYTPVolume: function (t) {
                    var e = this.get(0);
                    t || e.opt.vol || 0 != player.getVolume() ? !t && e.player.getVolume() > 0 || t && e.player.getVolume() == t ? jQuery(e).muteYTPVolume() : e.opt.vol = t : jQuery(e).unmuteYTPVolume(), e.player.setVolume(e.opt.vol)
                },
                muteYTPVolume: function () {
                    var t = this.get(0);
                    t.opt.vol = t.player.getVolume() || 50, t.player.mute(), t.player.setVolume(0);
                    var e = jQuery("#controlBar_" + t.id),
                        i = e.find(".mb_YTVPMuteUnmute");
                    i.html(jQuery.mbYTPlayer.controls.unmute)
                },
                unmuteYTPVolume: function () {
                    var t = this.get(0);
                    t.player.unMute(), t.player.setVolume(t.opt.vol);
                    var e = jQuery("#controlBar_" + t.id),
                        i = e.find(".mb_YTVPMuteUnmute");
                    i.html(jQuery.mbYTPlayer.controls.mute)
                },
                manageYTPProgress: function () {
                    var t = this.get(0),
                        e = jQuery("#controlBar_" + t.id),
                        i = e.find(".mb_YTVPProgress"),
                        n = e.find(".mb_YTVPLoaded"),
                        o = e.find(".mb_YTVTime"),
                        s = i.outerWidth(),
                        r = Math.floor(t.player.getCurrentTime()),
                        a = Math.floor(t.player.getDuration()),
                        l = r * s / a,
                        h = 0,
                        u = 100 * t.player.getVideoLoadedFraction();
                    return n.css({
                        left: h,
                        width: u + "%"
                    }), o.css({
                        left: 0,
                        width: l
                    }), {
                        totalTime: a,
                        currentTime: r
                    }
                },
                buildYTPControls: function () {
                    var t = this.get(0),
                        e = t.opt;
                    if (!jQuery("#controlBar_" + t.id).length) {
                        var i = jQuery("<span/>").attr("id", "controlBar_" + t.id).addClass("mb_YTVPBar").css({
                                whiteSpace: "noWrap",
                                position: t.isBackground ? "fixed" : "absolute",
                                zIndex: t.isBackground ? 1e4 : 1e3
                            }).hide(),
                            n = jQuery("<div/>").addClass("buttonBar"),
                            o = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function () {
                                1 == t.player.getPlayerState() ? jQuery(t).pauseYTP() : jQuery(t).playYTP()
                            }),
                            s = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function () {
                                0 == t.player.getVolume() ? jQuery(t).unmuteYTPVolume() : jQuery(t).muteYTPVolume()
                            }),
                            r = jQuery("<span/>").addClass("mb_YTVPTime"),
                            a = e.videoURL;
                        a.indexOf("http") < 0 && (a = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + e.videoURL);
                        var l = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                                window.open(a, "viewOnYT")
                            }),
                            h = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                                jQuery(t).fullscreen(e.realfullscreen)
                            }),
                            u = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function (e) {
                                p.css({
                                    width: e.clientX - p.offset().left
                                }), t.timeW = e.clientX - p.offset().left, i.find(".mb_YTVPLoaded").css({
                                    width: 0
                                });
                                var n = Math.floor(t.player.getDuration());
                                t["goto"] = p.outerWidth() * n / u.outerWidth(), t.player.seekTo(parseFloat(t["goto"]), !0), i.find(".mb_YTVPLoaded").css({
                                    width: 0
                                })
                            }),
                            d = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute"),
                            p = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");
                        u.append(d).append(p), n.append(o).append(s).append(r), e.printUrl && n.append(l), (t.isBackground || t.opt.realfullscreen && !t.isBackground) && n.append(h), i.append(n).append(u), t.isBackground ? jQuery("body").after(i) : (i.addClass("inlinePlayer"), t.wrapper.before(i)), i.fadeIn()
                    }
                },
                checkForState: function (t) {
                    var e = jQuery("#controlBar_" + t.id),
                        i = t.opt,
                        n = t.opt.startAt ? t.opt.startAt : 1;
                    t.getState = setInterval(function () {
                        var o = jQuery(t).manageYTPProgress();
                        e.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(o.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(o.totalTime)), parseFloat(t.player.getDuration() - 3) < t.player.getCurrentTime() && 1 == t.player.getPlayerState() && !t.isPlayList && (i.loop ? t.player.seekTo(n) : (t.player.pauseVideo(), t.wrapper.CSSAnimate({
                            opacity: 0
                        }, 2e3, function () {
                            if (t.player.seekTo(n, !0), !t.isBackground) {
                                var e = t.videoData.thumbnail.hqDefault;
                                jQuery(t).css({
                                    background: "rgba(0,0,0,0.5) url(" + e + ") center center",
                                    backgroundSize: "cover"
                                })
                            }
                        })), jQuery(t).trigger("YTPEnd"))
                    }, 1)
                },
                formatTime: function (t) {
                    var e = Math.floor(t / 60),
                        i = Math.floor(t - 60 * e);
                    return (9 > e ? "0" + e : e) + " : " + (9 > i ? "0" + i : i)
                }
            }, jQuery.fn.toggleVolume = function () {
                var t = this.get(0);
                if (t) return t.player.isMuted() ? (jQuery(t).unmuteYTPVolume(), !0) : (jQuery(t).muteYTPVolume(), !1)
            }, jQuery.fn.optimizeDisplay = function () {
                var t = this.get(0),
                    e = t.opt,
                    i = jQuery(t.playerEl),
                    n = {},
                    o = t.isBackground ? jQuery(window) : e.containment;
                n.width = o.width(), n.height = o.height();
                var s = 24,
                    r = {};
                r.width = n.width + n.width * s / 100, r.height = "16/9" == e.ratio ? Math.ceil(9 * n.width / 16) : Math.ceil(3 * n.width / 4), r.marginTop = -((r.height - n.height) / 2), r.marginLeft = -(n.width * (s / 2) / 100), r.height < n.height && (r.height = n.height + n.height * s / 100, r.width = "16/9" == e.ratio ? Math.floor(16 * n.height / 9) : Math.floor(4 * n.height / 3), r.marginTop = -(n.height * (s / 2) / 100), r.marginLeft = -((r.width - n.width) / 2)), i.css({
                    width: r.width,
                    height: r.height,
                    marginTop: r.marginTop,
                    marginLeft: r.marginLeft
                })
            }, jQuery.shuffle = function (t) {
                for (var e = t.slice(), i = e.length, n = i; n--;) {
                    var o = parseInt(Math.random() * i),
                        s = e[n];
                    e[n] = e[o], e[o] = s
                }
                return e
            }, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress
    }(jQuery, ytp), ! function (t, e) {
        "use strict";

        function i(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                if (i)
                    for (var n in i) i.hasOwnProperty(n) && ("object" == typeof i[n] ? deepExtend(t[n], i[n]) : t[n] = i[n])
            }
            return t
        }

        function n(n, r) {
            function a() {
                if (P) {
                    y = e.createElement("canvas"), y.className = "pg-canvas", y.style.display = "block", n.insertBefore(y, n.firstChild), v = y.getContext("2d"), l();
                    for (var i = Math.round(y.width * y.height / r.density), o = 0; i > o; o++) {
                        var s = new c;
                        s.setStackPos(o), C.push(s)
                    }
                    t.addEventListener("resize", function () {
                        u()
                    }, !1), e.addEventListener("mousemove", function (t) {
                        S = t.pageX, j = t.pageY
                    }, !1), I && !Y && t.addEventListener("deviceorientation", function () {
                        $ = Math.min(Math.max(-event.beta, -30), 30), E = Math.min(Math.max(-event.gamma, -30), 30)
                    }, !0), h(), g("onInit")
                }
            }

            function l() {
                y.width = n.offsetWidth, y.height = n.offsetHeight, v.fillStyle = r.dotColor, v.strokeStyle = r.lineColor, v.lineWidth = r.lineWidth
            }

            function h() {
                if (P) {
                    b = t.innerWidth, T = t.innerHeight, v.clearRect(0, 0, y.width, y.height);
                    for (var e = 0; e < C.length; e++) C[e].updatePosition();
                    for (var e = 0; e < C.length; e++) C[e].draw();
                    Q || (w = requestAnimationFrame(h))
                }
            }

            function u() {
                l();
                for (var t = n.offsetWidth, e = n.offsetHeight, i = C.length - 1; i >= 0; i--)(C[i].position.x > t || C[i].position.y > e) && C.splice(i, 1);
                var o = Math.round(y.width * y.height / r.density);
                if (o > C.length)
                    for (; o > C.length;) {
                        var s = new c;
                        C.push(s)
                    } else o < C.length && C.splice(o);
                for (i = C.length - 1; i >= 0; i--) C[i].setStackPos(i)
            }

            function d() {
                Q = !0
            }

            function p() {
                Q = !1, h()
            }

            function c() {
                switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
                    x: Math.ceil(Math.random() * y.width),
                    y: Math.ceil(Math.random() * y.height)
                }, this.speed = {}, r.directionX) {
                    case "left":
                        this.speed.x = +(-r.maxSpeedX + Math.random() * r.maxSpeedX - r.minSpeedX).toFixed(2);
                        break;
                    case "right":
                        this.speed.x = +(Math.random() * r.maxSpeedX + r.minSpeedX).toFixed(2);
                        break;
                    default:
                        this.speed.x = +(-r.maxSpeedX / 2 + Math.random() * r.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? r.minSpeedX : -r.minSpeedX
                }
                switch (r.directionY) {
                    case "up":
                        this.speed.y = +(-r.maxSpeedY + Math.random() * r.maxSpeedY - r.minSpeedY).toFixed(2);
                        break;
                    case "down":
                        this.speed.y = +(Math.random() * r.maxSpeedY + r.minSpeedY).toFixed(2);
                        break;
                    default:
                        this.speed.y = +(-r.maxSpeedY / 2 + Math.random() * r.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? r.minSpeedY : -r.minSpeedY
                }
            }

            function f(t, e) {
                return e ? void(r[t] = e) : r[t]
            }

            function m() {
                console.log("destroy"), y.parentNode.removeChild(y), g("onDestroy"), s && s(n).removeData("plugin_" + o)
            }

            function g(t) {
                void 0 !== r[t] && r[t].call(n)
            }
            var y, v, w, b, T, x, _, P = !!e.createElement("canvas").getContext,
                C = [],
                S = 0,
                j = 0,
                Y = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
                I = !!t.DeviceOrientationEvent,
                E = 0,
                $ = 0,
                Q = !1;
            return r = i({}, t[o].defaults, r), c.prototype.draw = function () {
                v.beginPath(), v.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, r.particleRadius / 2, 0, 2 * Math.PI, !0), v.closePath(), v.fill(), v.beginPath();
                for (var t = C.length - 1; t > this.stackPos; t--) {
                    var e = C[t],
                        i = this.position.x - e.position.x,
                        n = this.position.y - e.position.y,
                        o = Math.sqrt(i * i + n * n).toFixed(2);
                    o < r.proximity && (v.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), r.curvedLines ? v.quadraticCurveTo(Math.max(e.position.x, e.position.x), Math.min(e.position.y, e.position.y), e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY) : v.lineTo(e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY))
                }
                v.stroke(), v.closePath()
            }, c.prototype.updatePosition = function () {
                if (r.parallax) {
                    if (I && !Y) {
                        var t = (b - 0) / 60;
                        x = (E - -30) * t + 0;
                        var e = (T - 0) / 60;
                        _ = ($ - -30) * e + 0
                    } else x = S, _ = j;
                    this.parallaxTargX = (x - b / 2) / (r.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (_ - T / 2) / (r.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
                }
                var i = n.offsetWidth,
                    o = n.offsetHeight;
                switch (r.directionX) {
                    case "left":
                        this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = i - this.parallaxOffsetX);
                        break;
                    case "right":
                        this.position.x + this.speed.x + this.parallaxOffsetX > i && (this.position.x = 0 - this.parallaxOffsetX);
                        break;
                    default:
                        (this.position.x + this.speed.x + this.parallaxOffsetX > i || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
                }
                switch (r.directionY) {
                    case "up":
                        this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = o - this.parallaxOffsetY);
                        break;
                    case "down":
                        this.position.y + this.speed.y + this.parallaxOffsetY > o && (this.position.y = 0 - this.parallaxOffsetY);
                        break;
                    default:
                        (this.position.y + this.speed.y + this.parallaxOffsetY > o || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
                }
                this.position.x += this.speed.x, this.position.y += this.speed.y
            }, c.prototype.setStackPos = function (t) {
                this.stackPos = t
            }, a(), {
                option: f,
                destroy: m,
                start: p,
                pause: d
            }
        }
        var o = "particleground",
            s = t.jQuery;
        t[o] = function (t, e) {
            return new n(t, e)
        }, t[o].defaults = {
            minSpeedX: .1,
            maxSpeedX: .7,
            minSpeedY: .1,
            maxSpeedY: .7,
            directionX: "center",
            directionY: "center",
            density: 1e4,
            dotColor: "#666666",
            lineColor: "#666666",
            particleRadius: 7,
            lineWidth: 1,
            curvedLines: !1,
            proximity: 100,
            parallax: !0,
            parallaxMultiplier: 5,
            onInit: function () {},
            onDestroy: function () {}
        }, s && (s.fn[o] = function (t) {
            if ("string" == typeof arguments[0]) {
                var e, i = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    s.data(this, "plugin_" + o) && "function" == typeof s.data(this, "plugin_" + o)[i] && (e = s.data(this, "plugin_" + o)[i].apply(this, r))
                }), void 0 !== e ? e : this
            }
            return "object" != typeof t && t ? void 0 : this.each(function () {
                s.data(this, "plugin_" + o) || s.data(this, "plugin_" + o, new n(this, t))
            })
        })
    }(window, document),
    function () {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - t)),
                o = window.setTimeout(function () {
                    e(i + n)
                }, n);
            return t = i + n, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }(), ! function (t, e, i, n) {
        function o(e, i) {
            this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, c), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function (t, e) {
                this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(o.Pipe, t.proxy(function (e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }

        function s(t) {
            if (t.touches !== n) return {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY
            };
            if (t.touches === n) {
                if (t.pageX !== n) return {
                    x: t.pageX,
                    y: t.pageY
                };
                if (t.pageX === n) return {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }

        function r(t) {
            var e, n, o = i.createElement("div"),
                s = t;
            for (e in s)
                if (n = s[e], "undefined" != typeof o.style[n]) return o = null, [n, e];
            return [!1]
        }

        function a() {
            return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
        }

        function l() {
            return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
        }

        function h() {
            return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
        }

        function u() {
            return "ontouchstart" in e || !!navigator.msMaxTouchPoints
        }

        function d() {
            return e.navigator.msPointerEnabled
        }
        var p, c, f;
        p = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        }, c = {
            isTouch: !1,
            isScrolling: !1,
            isSwiping: !1,
            direction: !1,
            inMotion: !1
        }, f = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        }, o.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 2500,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }, o.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, o.Plugins = {}, o.Pipe = [{
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var t = this._clones,
                    e = this.$stage.children(".cloned");
                (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var t, e, i = this._clones,
                    n = this._items,
                    o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var t, e, i, n = this.settings.rtl ? 1 : -1,
                    o = (this.width() / this.settings.items).toFixed(3),
                    s = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * n, this._coordinates.push(s)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var e, i, n = (this.width() / this.settings.items).toFixed(3),
                    o = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                if (this.$stage.css(o), o = {
                        width: this.settings.autoWidth ? "auto" : n - this.settings.margin
                    }, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
                        return t > 1
                    }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
                else this.$stage.children().css(o)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current && this.reset(this.$stage.children().index(t.current))
            }
        }, {
            filter: ["position"],
            run: function () {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function () {
                var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + s,
                    a = r + this.width() * o,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], o.prototype.initialize = function () {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
                var e, i, o;
                if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o) return this.preloadAutoWidthImages(e), !1
            }
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, o.prototype.setup = function () {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                o = null;
            i ? (t.each(i, function (t) {
                e >= t && t > n && (n = Number(t))
            }), o = t.extend({}, this.options, i[n]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function (t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + n)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
                property: {
                    name: "settings",
                    value: o
                }
            }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, o.prototype.optionsLogic = function () {
            this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, o.prototype.prepare = function (e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, o.prototype.update = function () {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
                    return this[t]
                }, this._invalidated), o = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
            this._invalidated = {}
        }, o.prototype.width = function (t) {
            switch (t = t || o.Width.Default) {
                case o.Width.Inner:
                case o.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, o.prototype.refresh = function () {
            return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
        }, o.prototype.eventsCall = function () {
            this.e._onDragStart = t.proxy(function (t) {
                this.onDragStart(t)
            }, this), this.e._onDragMove = t.proxy(function (t) {
                this.onDragMove(t)
            }, this), this.e._onDragEnd = t.proxy(function (t) {
                this.onDragEnd(t)
            }, this), this.e._onResize = t.proxy(function (t) {
                this.onResize(t)
            }, this), this.e._transitionEnd = t.proxy(function (t) {
                this.transitionEnd(t)
            }, this), this.e._preventClick = t.proxy(function (t) {
                this.preventClick(t)
            }, this)
        }, o.prototype.onThrottledResize = function () {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
        }, o.prototype.onResize = function () {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
        }, o.prototype.eventsRouter = function (t) {
            var e = t.type;
            "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
        }, o.prototype.internalEvents = function () {
            var i = (u(), d());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
                this.eventsRouter(t)
            }, this)), this.$stage.on("dragstart", function () {
                return !1
            }), this.$stage.get(0).onselectstart = function () {
                return !1
            }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
                this.eventsRouter(t)
            }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
        }, o.prototype.onDragStart = function (n) {
            var o, r, a, l;
            if (o = n.originalEvent || n || e.event, 3 === o.which || this.state.isTouch) return !1;
            if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
                this.eventsRouter(t)
            }, this))
        }, o.prototype.onDragMove = function (t) {
            var i, o, r, a, l, h;
            this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, o = s(i).x, r = s(i).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, o.prototype.onDragEnd = function (e) {
            var n, o, s;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, o = Math.abs(this.drag.distance), (o > 3 || n > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
            }
        }, o.prototype.removeClick = function (i) {
            this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
                t(i).off("click.preventClick")
            }, 300)
        }, o.prototype.preventClick = function (e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
        }, o.prototype.getTransformProperty = function () {
            var t, i;
            return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
        }, o.prototype.closest = function (e) {
            var i = -1,
                n = 30,
                o = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy(function (t, r) {
                return e > r - n && r + n > e ? i = t : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
            }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
        }, o.prototype.animate = function (e) {
            this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s"
            }) : this.state.isTouch ? this.$stage.css({
                left: e + "px"
            }) : this.$stage.animate({
                left: e
            }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
                this.state.inMotion && this.transitionEnd()
            }, this))
        }, o.prototype.current = function (t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, o.prototype.invalidate = function (t) {
            this._invalidated[t] = !0
        }, o.prototype.reset = function (t) {
            t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, o.prototype.normalize = function (e, i) {
            var o = i ? this._items.length : this._items.length + this._clones.length;
            return !t.isNumeric(e) || 1 > o ? n : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
        }, o.prototype.relative = function (t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
        }, o.prototype.maximum = function (t) {
            var e, i, n, o = 0,
                s = this.settings;
            if (t) return this._items.length - 1;
            if (!s.loop && s.center) e = this._items.length - 1;
            else if (s.loop || s.center)
                if (s.loop || s.center) e = this._items.length + s.items;
                else {
                    if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
                    for (revert = s.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                        (n = this.coordinates(o)) && !(n * revert >= i);) e = ++o
                }
            else e = this._items.length - s.items;
            return e
        }, o.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2
        }, o.prototype.items = function (t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, o.prototype.mergers = function (t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, o.prototype.clones = function (e) {
            var i = this._clones.length / 2,
                o = i + this._items.length,
                s = function (t) {
                    return t % 2 === 0 ? o + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function (t, e) {
                return s(e)
            }) : t.map(this._clones, function (t, i) {
                return t === e ? s(i) : null
            })
        }, o.prototype.speed = function (t) {
            return t !== n && (this._speed = t), this._speed
        }, o.prototype.coordinates = function (e) {
            var i = null;
            return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
        }, o.prototype.duration = function (t, e, i) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, o.prototype.to = function (i, n) {
            if (this.settings.loop) {
                var o = i - this.relative(this.current()),
                    s = this.current(),
                    r = this.current(),
                    a = this.current() + o,
                    l = 0 > r - a ? !0 : !1,
                    h = this._clones.length + this._items.length;
                a < this.settings.items && l === !1 ? (s = r + this._items.length, this.reset(s)) : a >= h - this.settings.items && l === !0 && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
                    this.speed(this.duration(this.current(), s + o, n)), this.current(s + o), this.update()
                }, this), 30)
            } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
        }, o.prototype.next = function (t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, o.prototype.prev = function (t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, o.prototype.transitionEnd = function (t) {
            return t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
        }, o.prototype.viewport = function () {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
            }
            return n
        }, o.prototype.replace = function (e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
                return 1 === this.nodeType
            }).each(t.proxy(function (t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, o.prototype.add = function (t, e) {
            e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {
                content: t,
                position: e
            }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, o.prototype.remove = function (t) {
            t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, o.prototype.addTriggerableEvents = function () {
            var e = t.proxy(function (e, i) {
                return t.proxy(function (t) {
                    t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, this)
            }, this);
            t.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, t.proxy(function (t, i) {
                this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
            }, this))
        }, o.prototype.watchVisibility = function () {
            function i(t) {
                return t.offsetWidth > 0 && t.offsetHeight > 0
            }

            function n() {
                i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
            }
            i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
        }, o.prototype.preloadAutoWidthImages = function (e) {
            var i, n, o, s;
            i = 0, n = this, e.each(function (r, a) {
                o = t(a), s = new Image, s.onload = function () {
                    i++, o.attr("src", s.src), o.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
                }, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
            })
        }, o.prototype.destroy = function () {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var n in this._plugins) this._plugins[n].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
                return !1
            })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, o.prototype.op = function (t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
            }
        }, o.prototype.on = function (t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, o.prototype.off = function (t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, o.prototype.trigger = function (e, i, n) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                s = t.camelCase(t.grep(["on", e, n], function (t) {
                    return t
                }).join("-").toLowerCase()),
                r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, o, i));
            return this._supress[e] || (t.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(r)
            }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r
        }, o.prototype.suppress = function (e) {
            t.each(e, t.proxy(function (t, e) {
                this._supress[e] = !0
            }, this))
        }, o.prototype.release = function (e) {
            t.each(e, t.proxy(function (t, e) {
                delete this._supress[e]
            }, this))
        }, o.prototype.browserSupport = function () {
            if (this.support3d = h(), this.support3d) {
                this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = e.orientation
        }, t.fn.owlCarousel = function (e) {
            return this.each(function () {
                t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
            })
        }, t.fn.owlCarousel.Constructor = o
    }(window.Zepto || window.jQuery, window, document),
    function (t, e) {
        var i = function (e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function (t, e) {
                                this.load(e)
                            }, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a)
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            lazyLoad: !1
        }, i.prototype.load = function (i) {
            var n = this._core.$stage.children().eq(i),
                o = n && n.find(".owl-lazy");
            !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function (i, n) {
                var o, s = t(n),
                    r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
                this._core.trigger("load", {
                    element: s,
                    url: r
                }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
                    s.css("opacity", 1), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function () {
                    s.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this), o.src = r)
            }, this)), this._loaded.push(n.get(0)))
        }, i.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function (t) {
        var e = function (i) {
            this._core = i, this._handlers = {
                "initialized.owl.carousel": t.proxy(function () {
                    this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                    this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function (t) {
                    this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function () {
            this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i) {
        var n = function (e) {
            this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": t.proxy(function (t) {
                    this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
                }, this),
                "refresh.owl.carousel changed.owl.carousel": t.proxy(function () {
                    this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }, this)
            }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
                this.play(t)
            }, this))
        };
        n.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, n.prototype.fetch = function (t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo"
            }
            n = n[6], this._videos[r] = {
                type: i,
                id: n,
                width: o,
                height: s
            }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, n.prototype.thumbnail = function (e, i) {
            var n, o, s, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                h = "",
                u = this._core.settings,
                d = function (t) {
                    o = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
                };
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(s)) : "vimeo" === i.type && t.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                    s = t[0].thumbnail_large, d(s)
                }
            }))
        }, n.prototype.stop = function () {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
        }, n.prototype.play = function (e) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var i, n, o = t(e.target || e.srcElement),
                s = o.closest("." + this._core.settings.itemClass),
                r = this._videos[s.attr("data-video")],
                a = r.width || "100%",
                l = r.height || this._core.$stage.height();
            "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), o.after(n)
        }, n.prototype.isInFullScreen = function () {
            var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), n && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
        }, n.prototype.destroy = function () {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, n) {
        var o = function (e) {
            this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function (t) {
                    "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                    this.swapping = "translated" == t.type
                }, this),
                "translate.owl.carousel": t.proxy(function () {
                    this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, o.prototype.swap = function () {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    o = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
            }
        }, o.prototype.clear = function (e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
        }, o.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i) {
        var n = function (e) {
            this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
                    this.autoplay()
                }, this),
                "play.owl.autoplay": t.proxy(function (t, e, i) {
                    this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function () {
                    this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function () {
                    this.core.settings.autoplayHoverPause && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function () {
                    this.core.settings.autoplayHoverPause && this.autoplay()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        n.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, n.prototype.autoplay = function () {
            this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
                this.play()
            }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
        }, n.prototype.play = function () {
            return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
        }, n.prototype.stop = function () {
            e.clearInterval(this.interval)
        }, n.prototype.pause = function () {
            e.clearInterval(this.interval)
        }, n.prototype.destroy = function () {
            var t, i;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
    }(window.Zepto || window.jQuery, window, document),
    function (t) {
        "use strict";
        var e = function (i) {
            this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function (e) {
                    this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "add.owl.carousel": t.proxy(function (e) {
                    this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
                    this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "change.owl.carousel": t.proxy(function (t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            n = this._core.minimum();
                        t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                    "position" == t.property.name && this.draw()
                }, this),
                "refreshed.owl.carousel": t.proxy(function () {
                    this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }, e.prototype.initialize = function () {
            var e, i, n = this._core.settings;
            n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
                var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed)
            }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function () {
                this.prev(n.navSpeed)
            }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function () {
                this.next(n.navSpeed)
            }, this));
            for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
        }, e.prototype.destroy = function () {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, e.prototype.update = function () {
            var t, e, i, n = this._core.settings,
                o = this._core.clones().length / 2,
                s = o + this._core.items().length,
                r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
            if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
                for (this._pages = [], t = o, e = 0, i = 0; s > t; t++)(e >= r || 0 === e) && (this._pages.push({
                    start: t - o,
                    end: t - o + r - 1
                }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
        }, e.prototype.draw = function () {
            var e, i, n = "",
                o = this._core.settings,
                s = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                    this._controls.$indicators.html(n)
                } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(o.dots)
        }, e.prototype.onTrigger = function (e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
            }
        }, e.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, function (t) {
                return t.start <= e && t.end >= e
            }).pop()
        }, e.prototype.getPosition = function (e) {
            var i, n, o = this._core.settings;
            return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
        }, e.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, e.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, e.prototype.to = function (e, i, n) {
            var o;
            n ? t.proxy(this._overrides.to, this._core)(e, i) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function (t, e) {
        "use strict";
        var i = function (n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function () {
                    "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                    var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[i] = e.content
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
                var t = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    n = this._hashes[t] && i.index(this._hashes[t]) || 0;
                return t ? void this._core.to(n, !1, !0) : !1
            }, this))
        };
        i.Defaults = {
            URLhashListener: !1
        }, i.prototype.destroy = function () {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document), ! function (t, e, i, n) {
        function o(e, i) {
            var s = this;
            "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this, i)), this.$element = t(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
            var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
            return r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != n && (r[0] = this.positionX.toLowerCase()), this.positionY != n && (r[1] = this.positionY.toLowerCase()), s.positionX = r[0], s.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? (this.iosFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }), this) : navigator.userAgent.match(/(Android)/) ? (this.androidFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }), this) : (this.$mirror = t("<div />").prependTo("body"), this.$slider = t("<img />").prependTo(this.$mirror), this.$mirror.addClass("parallax-mirror").css({
                visibility: "hidden",
                zIndex: this.zIndex,
                position: "fixed",
                top: 0,
                left: 0,
                overflow: "hidden"
            }), this.$slider.addClass("parallax-slider").one("load", function () {
                s.naturalHeight && s.naturalWidth || (s.naturalHeight = this.naturalHeight || this.height || 1, s.naturalWidth = this.naturalWidth || this.width || 1), s.aspectRatio = s.naturalWidth / s.naturalHeight, o.isSetup || o.setup(), o.sliders.push(s), o.isFresh = !1, o.requestRender()
            }), this.$slider[0].src = this.imageSrc, void((this.naturalHeight && this.naturalWidth || this.$slider[0].complete) && this.$slider.trigger("load")))
        }

        function s(n) {
            return this.each(function () {
                var s = t(this),
                    r = "object" == typeof n && n;
                this == e || this == i || s.is("body") ? o.configure(r) : s.data("px.parallax") || (r = t.extend({}, s.data(), r), s.data("px.parallax", new o(this, r))), "string" == typeof n && o[n]()
            })
        }! function () {
            for (var t = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !e.requestAnimationFrame; ++n) e.requestAnimationFrame = e[i[n] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[n] + "CancelAnimationFrame"] || e[i[n] + "CancelRequestAnimationFrame"];
            e.requestAnimationFrame || (e.requestAnimationFrame = function (i) {
                var n = (new Date).getTime(),
                    o = Math.max(0, 16 - (n - t)),
                    s = e.setTimeout(function () {
                        i(n + o)
                    }, o);
                return t = n + o, s
            }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }(), t.extend(o.prototype, {
            speed: .2,
            bleed: 0,
            zIndex: -100,
            iosFix: !0,
            androidFix: !0,
            position: "center",
            overScrollFix: !1,
            refresh: function () {
                this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
                var t = o.winHeight,
                    e = o.docHeight,
                    i = Math.min(this.boxOffsetTop, e - t),
                    n = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
                    s = this.boxHeight + (i - n) * (1 - this.speed) | 0,
                    r = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
                if (s * this.aspectRatio >= this.boxWidth) {
                    this.imageWidth = s * this.aspectRatio | 0, this.imageHeight = s, this.offsetBaseTop = r;
                    var a = this.imageWidth - this.boxWidth;
                    this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a)
                } else {
                    this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
                    var a = this.imageHeight - s;
                    this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a)
                }
            },
            render: function () {
                var t = o.scrollTop,
                    e = o.scrollLeft,
                    i = this.overScrollFix ? o.overScroll : 0,
                    n = t + o.winHeight;
                this.visibility = this.boxOffsetBottom > t && this.boxOffsetTop < n ? "visible" : "hidden", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - e, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed), this.$mirror.css({
                    transform: "translate3d(0px, 0px, 0px)",
                    visibility: this.visibility,
                    top: this.mirrorTop - i,
                    left: this.mirrorLeft,
                    height: this.boxHeight,
                    width: this.boxWidth
                }), this.$slider.css({
                    transform: "translate3d(0px, 0px, 0px)",
                    position: "absolute",
                    top: this.offsetTop,
                    left: this.offsetLeft,
                    height: this.imageHeight,
                    width: this.imageWidth,
                    maxWidth: "none"
                })
            }
        }), t.extend(o, {
            scrollTop: 0,
            scrollLeft: 0,
            winHeight: 0,
            winWidth: 0,
            docHeight: 1 << 30,
            docWidth: 1 << 30,
            sliders: [],
            isReady: !1,
            isFresh: !1,
            isBusy: !1,
            setup: function () {
                if (!this.isReady) {
                    var n = t(i),
                        s = t(e);
                    s.on("resize.px.parallax load.px.parallax", function () {
                        o.winHeight = s.height(), o.winWidth = s.width(), o.docHeight = n.height(), o.docWidth = n.width(), o.isFresh = !1, o.requestRender()
                    }).on("scroll.px.parallax load.px.parallax", function () {
                        var t = o.docHeight - o.winHeight,
                            e = o.docWidth - o.winWidth;
                        o.scrollTop = Math.max(0, Math.min(t, s.scrollTop())), o.scrollLeft = Math.max(0, Math.min(e, s.scrollLeft())), o.overScroll = Math.max(s.scrollTop() - t, Math.min(s.scrollTop(), 0)), o.requestRender()
                    }), this.isReady = !0
                }
            },
            configure: function (e) {
                "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this.prototype, e))
            },
            refresh: function () {
                t.each(this.sliders, function () {
                    this.refresh()
                }), this.isFresh = !0
            },
            render: function () {
                this.isFresh || this.refresh(), t.each(this.sliders, function () {
                    this.render()
                })
            },
            requestRender: function () {
                var t = this;
                this.isBusy || (this.isBusy = !0, e.requestAnimationFrame(function () {
                    t.render(), t.isBusy = !1
                }))
            }
        });
        var r = t.fn.parallax;
        t.fn.parallax = s, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () {
            return t.fn.parallax = r, this
        }, t(i).on("ready.px.parallax.data-api", function () {
            t('[data-parallax="scroll"]').parallax()
        })
    }(jQuery, window, document);
