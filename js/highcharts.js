(function() {
    function w(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }

    function B() {
        var a, b = arguments,
            c, d = {},
            e = function(a, b) {
                var c, d;
                "object" !== typeof a && (a = {});
                for (d in b) b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]);
                return a
            };
        !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function D(a, b) {
        return parseInt(a,
            b || 10)
    }

    function V(a) {
        return "string" === typeof a
    }

    function N(a) {
        return a && "object" === typeof a
    }

    function fa(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function q(a) {
        return "number" === typeof a
    }

    function p(a) {
        return ca.log(a) / ca.LN10
    }

    function x(a) {
        return ca.pow(10, a)
    }

    function A(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function s(a) {
        return a !== E && null !== a
    }

    function u(a, b, c) {
        var d, e;
        if (V(b)) s(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (s(b) &&
            N(b))
            for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function P(a) {
        return fa(a) ? a : [a]
    }

    function l() {
        var a = arguments,
            b, c, d = a.length;
        for (b = 0; b < d; b++)
            if (c = a[b], c !== E && null !== c) return c
    }

    function C(a, b) {
        Ga && !oa && b && b.opacity !== E && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        w(a.style, b)
    }

    function S(a, b, c, d, e) {
        a = O.createElement(a);
        b && w(a, b);
        e && C(a, {
            padding: 0,
            border: "none",
            margin: 0
        });
        c && C(a, c);
        d && d.appendChild(a);
        return a
    }

    function J(a, b) {
        var c = function() {
            return E
        };
        c.prototype = new a;
        w(c.prototype, b);
        return c
    }

    function L(a,
        b, c, d) {
        var e = $.numberFormat,
            f = ga.lang,
            g = +a || 0,
            h = -1 === b ? (g.toString().split(".")[1] || "").length : isNaN(b = X(b)) ? 2 : b,
            k = void 0 === c ? f.decimalPoint : c,
            f = void 0 === d ? f.thousandsSep : d,
            m = 0 > g ? "-" : "",
            n = String(D(g = X(g).toFixed(h))),
            r = 3 < n.length ? n.length % 3 : 0;
        return e !== L ? e(a, b, c, d) : m + (r ? n.substr(0, r) + f : "") + n.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + f) + (h ? k + X(g - n).toFixed(h).slice(2) : "")
    }

    function I(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function G(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    }

    function H(a, b) {
        for (var c = "{", d = !1, e, f, g, h, k, m = []; - 1 !== (c = a.indexOf(c));) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                k = g.length;
                e = b;
                for (h = 0; h < k; h++) e = e[g[h]];
                f.length && (f = f.join(":"), g = /\.([0-9])/, h = ga.lang, k = void 0, /f$/.test(f) ? (k = (k = f.match(g)) ? k[1] : -1, null !== e && (e = L(e, k, h.decimalPoint, -1 < f.indexOf(",") ? h.thousandsSep : ""))) : e = Za(f, e))
            }
            m.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        m.push(a);
        return m.join("")
    }

    function Ka(a, b, c, d) {
        var e;
        c = l(c, 1);
        e = a /
            c;
        b || (b = [1, 2, 2.5, 5, 10], !1 === d && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c])));
        for (d = 0; d < b.length && !(a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2); d++);
        return a * c
    }

    function gb(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++) delete a[e].ss_i
    }

    function ta(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function pa(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function wa(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy &&
            a[c].destroy(), delete a[c]
    }

    function Ha(a) {
        $a || ($a = S("div"));
        a && $a.appendChild(a);
        $a.innerHTML = ""
    }

    function da(a) {
        return parseFloat(a.toPrecision(14))
    }

    function ma() {
        var a = ga.global.useUTC,
            b = a ? "getUTC" : "get";
        ab = ga.global.Date || window.Date;
        tb = 6E4 * (a && ga.global.timezoneOffset || 0);
        ub = b + "Minutes";
        vb = b + "Hours";
        wb = b + "Day";
        xb = b + "Date";
        yb = b + "Month";
        zb = b + "FullYear"
    }

    function W() {}

    function T(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || d || this.addLabel()
    }

    function Y() {
        this.init.apply(this, arguments)
    }

    function Da() {
        this.init.apply(this, arguments)
    }

    function ja(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total = null;
        this.points = {};
        this.stack = e;
        this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: l(b.y, f ? 4 : c ? 14 : -6),
            x: l(b.x, f ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }

    function Sa(a, b, c) {
        this.init.call(this, a, b, c)
    }
    var E, O = document,
        aa = window,
        ca = Math,
        K = ca.round,
        ha = ca.floor,
        La = ca.ceil,
        F = ca.max,
        U = ca.min,
        X = ca.abs,
        na = ca.cos,
        qa = ca.sin,
        xa = ca.PI,
        Ia = 2 * xa / 360,
        Ea = navigator.userAgent,
        Ab = aa.opera,
        Ga = /msie/i.test(Ea) && !Ab,
        bb = 8 === O.documentMode,
        hb = /AppleWebKit/.test(Ea),
        Ma = /Firefox/.test(Ea),
        Bb = /(Mobile|Android|Windows Phone)/.test(Ea),
        Fa = "http://www.w3.org/2000/svg",
        oa = !!O.createElementNS && !!O.createElementNS(Fa, "svg").createSVGRect,
        Ob = Ma && 4 > parseInt(Ea.split("Firefox/")[1], 10),
        ra = !oa && !Ga && !!O.createElement("canvas").getContext,
        Ta, Ua, Cb = {},
        ib = 0,
        $a, ga, Za, ua, jb, Na, va,
        ea = function() {
            return E
        },
        ka = [],
        Va = 0,
        Pb = /^[0-9]+$/,
        ab, tb, ub, vb, wb, xb, yb, zb, M = {},
        $;
    aa.Highcharts ? va(16, !0) : $ = aa.Highcharts = {};
    Za = function(a, b, c) {
        if (!s(b) || isNaN(b)) return "Invalid date";
        a = l(a, "%Y-%m-%d %H:%M:%S");
        var d = new ab(b - tb),
            e, f = d[vb](),
            g = d[wb](),
            h = d[xb](),
            k = d[yb](),
            m = d[zb](),
            n = ga.lang,
            r = n.weekdays,
            d = w({
                a: r[g].substr(0, 3),
                A: r[g],
                d: I(h),
                e: h,
                b: n.shortMonths[k],
                B: n.months[k],
                m: I(k + 1),
                y: m.toString().substr(2, 2),
                Y: m,
                H: I(f),
                I: I(f % 12 || 12),
                l: f % 12 || 12,
                M: I(d[ub]()),
                p: 12 > f ? "AM" : "PM",
                P: 12 > f ? "am" : "pm",
                S: I(d.getSeconds()),
                L: I(K(b % 1E3), 3)
            }, $.dateFormats);
        for (e in d)
            for (; - 1 !== a.indexOf("%" + e);) a = a.replace("%" + e, "function" === typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    va = function(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        aa.console && console.log(c)
    };
    Na = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 26784E5,
        year: 31556952E3
    };
    jb = {
        init: function(a, b, c) {
            b = b || "";
            var d = a.shift,
                e = -1 < b.indexOf("C"),
                f = e ? 7 : 3,
                g;
            b = b.split(" ");
            c = [].concat(c);
            var h, k, m = function(a) {
                for (g = a.length; g--;) "M" === a[g] && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
            };
            e && (m(b), m(c));
            a.isArea && (h = b.splice(b.length - 6, 6), k = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length)
                for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(k));
            return [b, c]
        },
        step: function(a, b, c, d) {
            var e = [],
                f = a.length;
            if (1 === c) e = d;
            else if (f ===
                b.length && 1 > c)
                for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
            else e = b;
            return e
        }
    };
    (function(a) {
        aa.HighchartsAdapter = aa.HighchartsAdapter || a && {
            init: function(b) {
                var c = a.fx;
                a.extend(a.easing, {
                    easeOutQuad: function(a, b, c, g, h) {
                        return -g * (b /= h) * (b - 2) + c
                    }
                });
                a.each(["cur", "_default", "width", "height", "opacity"], function(b, e) {
                    var f = c.step,
                        g;
                    "cur" === e ? f = c.prototype : "_default" === e && a.Tween && (f = a.Tween.propHooks[e], e = "set");
                    (g = f[e]) && (f[e] = function(a) {
                        var c;
                        a = b ? a : this;
                        if ("align" !== a.prop) return c =
                            a.elem, c.attr ? c.attr(a.prop, "cur" === e ? E : a.now) : g.apply(this, arguments)
                    })
                });
                G(a.cssHooks.opacity, "get", function(a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                });
                this.addAnimSetter("d", function(a) {
                    var c = a.elem,
                        f;
                    a.started || (f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0);
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                });
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function(a, b) {
                    var c, g = a.length;
                    for (c = 0; c < g; c++)
                        if (!1 === b.call(a[c], a[c], c, a)) return c
                };
                a.fn.highcharts = function() {
                    var a = "Chart",
                        b = arguments,
                        c, g;
                    this[0] && (V(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1)), c = b[0], c !== E && (c.chart = c.chart || {}, c.chart.renderTo = this[0], new $[a](c, b[1]), g = this), c === E && (g = ka[u(this[0], "data-highcharts-chart")]));
                    return g
                }
            },
            addAnimSetter: function(b, c) {
                a.Tween ? a.Tween.propHooks[b] = {
                    set: c
                } : a.fx.step[b] = c
            },
            getScript: a.getScript,
            inArray: a.inArray,
            adapterRun: function(b, c) {
                return a(b)[c]()
            },
            grep: a.grep,
            map: function(a, c) {
                for (var d = [], e = 0, f = a.length; e < f; e++) d[e] =
                    c.call(a[e], a[e], e, a);
                return d
            },
            offset: function(b) {
                return a(b).offset()
            },
            addEvent: function(b, c, d) {
                a(b).bind(c, d)
            },
            removeEvent: function(b, c, d) {
                var e = O.removeEventListener ? "removeEventListener" : "detachEvent";
                O[e] && b && !b[e] && (b[e] = function() {});
                a(b).unbind(c, d)
            },
            fireEvent: function(b, c, d, e) {
                var f = a.Event(c),
                    g = "detached" + c,
                    h;
                !Ga && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                w(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f)
                        } catch (a) {
                            "preventDefault" ===
                            b && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                !e || f.isDefaultPrevented() || h || e(f)
            },
            washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                c.pageX === E && (c.pageX = a.pageX, c.pageY = a.pageY);
                return c
            },
            animate: function(b, c, d) {
                var e = a(b);
                b.style || (b.style = {});
                c.d && (b.toD = c.d, c.d = 1);
                e.stop();
                c.opacity !== E && b.attr && (c.opacity += "px");
                b.hasAnim = 1;
                e.animate(c, d)
            },
            stop: function(b) {
                b.hasAnim && a(b).stop()
            }
        }
    })(aa.jQuery);
    var cb = aa.HighchartsAdapter,
        sa = cb || {};
    cb && cb.init.call(cb, jb);
    var db = sa.adapterRun,
        Qb =
        sa.getScript,
        Oa = sa.inArray,
        y = sa.each,
        Db = sa.grep,
        Rb = sa.offset,
        Pa = sa.map,
        ba = sa.addEvent,
        la = sa.removeEvent,
        Z = sa.fireEvent,
        Sb = sa.washMouseEvent,
        Eb = sa.animate,
        Wa = sa.stop,
        kb = {
            enabled: !0,
            x: 0,
            y: 15,
            style: {
                color: "#606060",
                cursor: "default",
                fontSize: "11px"
            }
        };
    ga = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #8085e8 #8d4653 #91e8e1".split(" "),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Загрузка...",
            months: "Январь Февраль Март Апрель Май Июнь Июль Август Сентябрь Октябрь Ноябрь Декабрь".split(" "),
            shortMonths: "Янв Мрт Апр Май Июн Июл Авг Сен Окт Ноя Дек".split(" "),
            weekdays: "Воскресенье Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Сбросить zoom",
            resetZoomTitle: "Сброс уровня масштабирования 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            //canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.0.4/modules/canvas-tools.js",
            //VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.0.4/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: B(kb, {
                    align: "center",
                    enabled: !1,
                    formatter: function() {
                        return null === this.y ? "" : L(this.y, -1)
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: oa,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Bb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !1,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var R = ga.plotOptions,
        Xa = R.line;
    ma();
    var Tb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        Ub = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
        Vb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        za = function(a) {
            var b = [],
                c, d;
            (function(a) {
                a && a.stops ? d = Pa(a.stops, function(a) {
                    return za(a[1])
                }) : (c = Tb.exec(a)) ? b = [D(c[1]), D(c[2]), D(c[3]), parseFloat(c[4], 10)] : (c = Ub.exec(a)) ? b = [D(c[1], 16), D(c[2], 16), D(c[3], 16), 1] : (c = Vb.exec(a)) && (b = [D(c[1]), D(c[2]), D(c[3]), 1])
            })(a);
            return {
                get: function(c) {
                    var f;
                    d ? (f = B(a), f.stops = [].concat(f.stops), y(d, function(a, b) {
                            f.stops[b] = [f.stops[b][0], a.get(c)]
                        })) :
                        f = b && !isNaN(b[0]) ? "rgb" === c ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : "a" === c ? b[3] : "rgba(" + b.join(",") + ")" : a;
                    return f
                },
                brighten: function(a) {
                    if (d) y(d, function(b) {
                        b.brighten(a)
                    });
                    else if (q(a) && 0 !== a) {
                        var c;
                        for (c = 0; 3 > c; c++) b[c] += D(255 * a), 0 > b[c] && (b[c] = 0), 255 < b[c] && (b[c] = 255)
                    }
                    return this
                },
                rgba: b,
                setOpacity: function(a) {
                    b[3] = a;
                    return this
                }
            }
        };
    W.prototype = {
        opacity: 1,
        textProps: "fontSize fontWeight fontFamily color lineHeight width textDecoration textShadow HcTextStroke".split(" "),
        init: function(a, b) {
            this.element =
                "span" === b ? S(b) : O.createElementNS(Fa, b);
            this.renderer = a
        },
        animate: function(a, b, c) {
            b = l(b, ua, !0);
            Wa(this);
            b ? (b = B(b, {}), c && (b.complete = c), Eb(this, a, b)) : (this.attr(a), c && c());
            return this
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, k, m, n, r, v, t, z = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                h = d.gradients;
                m = a.stops;
                v = c.radialReference;
                fa(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                "radialGradient" === f && v && !s(g.gradientUnits) &&
                    (g = B(g, {
                        cx: v[0] - v[2] / 2 + g.cx * v[2],
                        cy: v[1] - v[2] / 2 + g.cy * v[2],
                        r: g.r * v[2],
                        gradientUnits: "userSpaceOnUse"
                    }));
                for (t in g) "id" !== t && z.push(t, g[t]);
                for (t in m) z.push(m[t]);
                z = z.join(",");
                h[z] ? a = h[z].attr("id") : (g.id = a = "highcharts-" + ib++, h[z] = k = d.createElement(f).attr(g).add(d.defs), k.stops = [], y(m, function(a) {
                    0 === a[1].indexOf("rgba") ? (e = za(a[1]), n = e.get("rgb"), r = e.get("a")) : (n = a[1], r = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": n,
                        "stop-opacity": r
                    }).add(k);
                    k.stops.push(a)
                }));
                c.setAttribute(b, "url(" +
                    d.url + "#" + a + ")")
            }
        },
        attr: function(a, b) {
            var c, d, e = this.element,
                f, g = this,
                h;
            "string" === typeof a && b !== E && (c = a, a = {}, a[c] = b);
            if ("string" === typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (c in a) d = a[c], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== c && "y" !== c || (this.doTransform = !0), h || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) &&
                    this.updateShadows(c, d);
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            return g
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, "height" === a ? F(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b)
        },
        addClass: function(a) {
            var b = this.element,
                c = u(b, "class") || ""; - 1 === c.indexOf(a) && u(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b = this;
            y("x y r start end width height innerR anchorX anchorY".split(" "), function(c) {
                b[c] = l(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x,
                    b.y, b.width, b.height, b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
        },
        crisp: function(a) {
            var b, c = {},
                d, e = a.strokeWidth || this.strokeWidth || 0;
            d = K(e) % 2 / 2;
            a.x = ha(a.x || this.x || 0) + d;
            a.y = ha(a.y || this.y || 0) + d;
            a.width = ha((a.width || this.width || 0) - 2 * d);
            a.height = ha((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {},
                d = this.element,
                e, f, g = "";
            e = !b;
            a && a.color && (a.fill = a.color);
            if (b)
                for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && D(a.width);
                b && (a = w(b, c));
                this.styles = a;
                e && (ra || !oa && this.renderer.forExport) && delete a.width;
                if (Ga && !oa) C(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    u(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            var c = this,
                d = c.element;
            Ua && "click" === a ? (d.ontouchstart = function(a) {
                c.touchEventFired =
                    ab.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (-1 === Ea.indexOf("Android") || 1100 < ab.now() - (c.touchEventFired || 0)) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            this.element.radialReference = a;
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (s(c) || s(d)) && a.push("scale(" + l(c, 1) + " " + l(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions =
                    a, this.alignByTranslate = b, !c || V(c)) this.alignTo = d = c || "renderer", A(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = l(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if ("right" === d || "center" === d) f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = K(f);
            if ("bottom" === e || "middle" === e) g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1);
            h[b ? "translateY" : "y"] = K(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function() {
            var a = this.bBox,
                b = this.renderer,
                c, d, e = this.rotation;
            c = this.element;
            var f = this.styles,
                g = e * Ia;
            d = this.textStr;
            var h;
            if ("" === d || Pb.test(d)) h = "num." + d.toString().length + (f ? "|" + f.fontSize + "|" + f.fontFamily : "");
            h && (a = b.cache[h]);
            if (!a) {
                if (c.namespaceURI === Fa || b.forExport) {
                    try {
                        a = c.getBBox ? w({}, c.getBBox()) : {
                            width: c.offsetWidth,
                            height: c.offsetHeight
                        }
                    } catch (k) {}
                    if (!a || 0 > a.width) a = {
                        width: 0,
                        height: 0
                    }
                } else a = this.htmlGetBBox();
                b.isSVG && (c = a.width, d = a.height, Ga &&
                    f && "11px" === f.fontSize && "16.9" === d.toPrecision(3) && (a.height = d = 14), e && (a.width = X(d * qa(g)) + X(c * na(g)), a.height = X(d * na(g)) + X(c * qa(g))));
                this.bBox = a;
                h && (b.cache[h] = a)
            }
            return a
        },
        show: function(a) {
            a && this.element.namespaceURI === Fa ? this.element.removeAttribute("visibility") : this.attr({
                visibility: a ? "inherit" : "visible"
            });
            return this
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(a) {
            var b =
                this.renderer,
                c = a || b,
                d = c.element || b.box,
                e = this.element,
                f = this.zIndex,
                g, h;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            f && (c.handleZ = !0, f = D(f));
            if (c.handleZ)
                for (a = d.childNodes, g = 0; g < a.length; g++)
                    if (b = a[g], c = u(b, "zIndex"), b !== e && (D(c) > f || !s(f) && s(c))) {
                        d.insertBefore(e, b);
                        h = !0;
                        break
                    }
            h || d.appendChild(e);
            this.added = !0;
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a =
                this,
                b = a.element || {},
                c = a.shadows,
                d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            Wa(a);
            a.clipPath && (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && y(c, function(b) {
                    a.safeRemoveChild(b)
                }); d && d.div && 0 === d.div.childNodes.length;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && A(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, k, m, n;
            if (a) {
                k = l(a.width, 3);
                m = (a.opacity || .15) / k;
                n = this.parentInverted ? "(-1,-1)" : "(" + l(a.offsetX, 1) + ", " + l(a.offsetY, 1) + ")";
                for (e = 1; e <= k; e++) f = g.cloneNode(0), h = 2 * k + 1 - 2 * e, u(f, {
                    isShadow: "true",
                    stroke: a.color || "black",
                    "stroke-opacity": m * e,
                    "stroke-width": h,
                    transform: "translate" + n,
                    fill: "none"
                }), c && (u(f, "height", F(u(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f);
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            "circle" === this.element.nodeName && (a = {
                x: "cx",
                y: "cy"
            }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = l(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot",
                    "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = D(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = O.createElementNS(Fa, "title"), this.element.appendChild(b));
            b.textContent = l(a, "").replace(/<[^>]*>/g, "")
        },
        textSetter: function(a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
        },
        fillSetter: function(a, b, c) {
            "string" === typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        zIndexSetter: function(a, b, c) {
            c.setAttribute(b, a);
            this[b] = a
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    W.prototype.yGetter = W.prototype.xGetter;
    W.prototype.translateXSetter =
        W.prototype.translateYSetter = W.prototype.rotationSetter = W.prototype.verticalAlignSetter = W.prototype.scaleXSetter = W.prototype.scaleYSetter = function(a, b) {
            this[b] = a;
            this.doTransform = !0
        };
    W.prototype["stroke-widthSetter"] = W.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], W.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke &&
            (c.removeAttribute("stroke"), this.hasStroke = !1)
    };
    var Aa = function() {
        this.init.apply(this, arguments)
    };
    Aa.prototype = {
        Element: W,
        init: function(a, b, c, d, e) {
            var f = location,
                g;
            d = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g); - 1 === a.innerHTML.indexOf("xmlns") && u(g, "xmlns", Fa);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Ma || hb) && O.getElementsByTagName("base").length ? f.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g,
                "%20") : "";
            this.createElement("desc").add().element.appendChild(O.createTextNode("Created with Highcharts 4.0.4 /Highstock 2.0.4"));
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var h;
            Ma && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                C(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                C(a, {
                    left: La(h.left) - h.left + "px",
                    top: La(h.top) - h.top + "px"
                })
            }, b(), ba(aa, "resize", b))
        },
        getStyle: function(a) {
            return this.style = w({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            wa(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && la(aa, "resize", this.subPixelFix);
            return this.alignedObjects = null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = l(a.textStr, "").toString(),
                    f = -1 !== e.indexOf("<"), g = b.childNodes, h, k, m = u(b, "x"), n = a.styles, r = a.textWidth, v = n && n.lineHeight, t = n && n.HcTextStroke, z = g.length, Fb = function(a) {
                        return v ? D(v) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : n && n.fontSize || c.style.fontSize || 12, a).h
                    }; z--;) b.removeChild(g[z]);
            f || t || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, k = /<.*href="(http[^"]+)".*>/, r && !a.added && this.box.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g,
                "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], "" === e[e.length - 1] && e.pop(), y(e, function(e, f) {
                var g, v = 0;
                e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                y(g, function(e) {
                    if ("" !== e || 1 === g.length) {
                        var t = {},
                            z = O.createElementNS(Fa, "tspan"),
                            l;
                        h.test(e) && (l = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), u(z, "style", l));
                        k.test(e) && !d && (u(z, "onclick", 'location.href="' + e.match(k)[1] + '"'), C(z, {
                            cursor: "pointer"
                        }));
                        e = (e.replace(/<(.|\n)*?>/g,
                            "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        if (" " !== e) {
                            z.appendChild(O.createTextNode(e));
                            v ? t.dx = 0 : f && null !== m && (t.x = m);
                            u(z, t);
                            b.appendChild(z);
                            !v && f && (!oa && d && C(z, {
                                display: "block"
                            }), u(z, "dy", Fb(z)));
                            if (r) {
                                e = e.replace(/([^\^])-/g, "$1- ").split(" ");
                                for (var t = 1 < g.length || 1 < e.length && "nowrap" !== n.whiteSpace, s, y, q = n.HcHeight, p = [], Gb = Fb(z), x = 1; t && (e.length || p.length);) delete a.bBox, s = a.getBBox(), y = s.width, !oa && c.forExport && (y = c.measureSpanWidth(z.firstChild.data, a.styles)), (s = y > r) && 1 !== e.length ?
                                    (z.removeChild(z.firstChild), p.unshift(e.pop())) : (e = p, p = [], e.length && (x++, q && x * Gb > q ? (e = ["..."], a.attr("title", a.textStr)) : (z = O.createElementNS(Fa, "tspan"), u(z, {
                                        dy: Gb,
                                        x: m
                                    }), l && u(z, "style", l), b.appendChild(z))), y > r && (r = y)), e.length && z.appendChild(O.createTextNode(e.join(" ").replace(/- /g, "-")))
                            }
                            v++
                        }
                    }
                })
            })) : b.appendChild(O.createTextNode(e))
        },
        button: function(a, b, c, d, e, f, g, h, k) {
            var m = this.label(a, b, c, k, null, null, null, null, "button"),
                n = 0,
                r, v, t, z, l, s;
            a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            };
            e = B({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FEFEFE"],
                        [1, "#F6F6F6"]
                    ]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, e);
            t = e.style;
            delete e.style;
            f = B(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            z = f.style;
            delete f.style;
            g = B(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            l = g.style;
            delete g.style;
            h = B(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            s = h.style;
            delete h.style;
            ba(m.element, Ga ? "mouseover" : "mouseenter", function() {
                3 !== n && m.attr(f).css(z)
            });
            ba(m.element, Ga ? "mouseout" : "mouseleave",
                function() {
                    3 !== n && (r = [e, f, g][n], v = [t, z, l][n], m.attr(r).css(v))
                });
            m.setState = function(a) {
                (m.state = n = a) ? 2 === a ? m.attr(g).css(l) : 3 === a && m.attr(h).css(s): m.attr(e).css(t)
            };
            return m.on("click", function() {
                3 !== n && d.call(m)
            }).attr(e).css(w({
                cursor: "default"
            }, t))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = K(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = K(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: "none"
            };
            fa(a) ? b.d = a : N(a) && w(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = N(a) ?
                a : {
                    x: a,
                    y: b,
                    r: c
                };
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            N(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            e = N(a) ? a.r : e;
            var g = this.createElement("rect");
            a = N(a) ? a : a === E ? {} : {
                x: a,
                y: b,
                width: F(c, 0),
                height: F(d, 0)
            };
            f !== E && (a.strokeWidth =
                f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a) {
                u(this.element, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[l(c, !0) ? "animate" : "attr"]({
                    width: a,
                    height: b
                }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return s(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: "none"
            };
            1 < arguments.length && w(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a, b, c, d, e, f) {
            var g, h = this.symbols[a],
                h = h && h(K(b), K(c), d, e, f),
                k = /^url\((.*?)\)$/,
                m, n;
            h ? (g = this.path(h), w(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && w(g, f)) : k.test(a) && (n = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(K((d - b[0]) / 2), K((e - b[1]) / 2)))
            }, m = a.match(k)[1], a = Cb[m] || f && f.width && f.height && [f.width,
                f.height
            ], g = this.image(m).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? n(g, a) : (g.attr({
                width: 0,
                height: 0
            }), S("img", {
                onload: function() {
                    n(g, Cb[m] = [this.width, this.height])
                },
                src: m
            })));
            return g
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = .166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c,
                    b, a + c / 2, b + d, "Z"
                ]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start;
                c = e.r || c || d;
                var g = e.end - .001;
                d = e.innerR;
                var h = e.open,
                    k = na(f),
                    m = qa(f),
                    n = na(g),
                    g = qa(g);
                e = e.end - f < xa ? 0 : 1;
                return ["M", a + c * k, b + c * m, "A", c, c, 0, e, 1, a + c * n, b + c * g, h ? "M" : "L", a + d * n, b + d * g, "A", d, d, 0, e, 0, a + d * k, b + d * m, h ? "" : "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = U(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX,
                    k = e && e.anchorY;
                e = K(e.strokeWidth || 0) % 2 / 2;
                a += e;
                b += e;
                e = ["M", a + f, b, "L", a + c - f, b, "C",
                    a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b
                ];
                h && h > c && k > b + g && k < b + d - g ? e.splice(13, 3, "L", a + c, k - 6, a + c + 6, k, a + c, k + 6, a + c, b + d - f) : h && 0 > h && k > b + g && k < b + d - g ? e.splice(33, 3, "L", a, k + 6, a - 6, k, a, k - 6, a, b + f) : k && k > d && h > a + g && h < a + c - g ? e.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : k && 0 > k && h > a + g && h < a + c - g && e.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return e
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + ib++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        },
        text: function(a, b, c, d) {
            var e = ra || !oa && this.forExport,
                f = {};
            if (d && !this.forExport) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            c && (f.y = Math.round(c));
            if (a || 0 === a) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            d || (a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"),
                    e, f = c.getAttribute(b),
                    v;
                for (v = 0; v < d.length; v++) e = d[v], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            });
            return a
        },
        fontMetrics: function(a,
            b) {
            a = a || this.style.fontSize;
            b && aa.getComputedStyle && (b = b.element || b, a = aa.getComputedStyle(b, "").fontSize);
            a = /px/.test(a) ? D(a) : /em/.test(a) ? 12 * parseFloat(a) : 12;
            var c = 24 > a ? a + 4 : K(1.2 * a),
                d = K(.8 * c);
            return {
                h: c,
                b: d,
                f: a
            }
        },
        label: function(a, b, c, d, e, f, g, h, k) {
            function m() {
                var a, b;
                a = z.element.style;
                q = (void 0 === A || void 0 === L || t.styles.textAlign) && z.textStr && z.getBBox();
                t.width = (A || q.width || 0) + 2 * u + x;
                t.height = (L || q.height || 0) + 2 * u;
                G = u + v.fontMetrics(a && a.fontSize, z).b;
                F && (l || (a = K(-p * u), b = h ? -G : 0, t.box = l = d ? v.symbol(d,
                    a, b, t.width, t.height, ia) : v.rect(a, b, t.width, t.height, 0, ia["stroke-width"]), l.attr("fill", "none").add(t)), l.isImg || l.attr(w({
                    width: K(t.width),
                    height: K(t.height)
                }, ia)), ia = null)
            }

            function n() {
                var a = t.styles,
                    a = a && a.textAlign,
                    b = x + u * (1 - p),
                    c;
                c = h ? 0 : G;
                s(A) && q && ("center" === a || "right" === a) && (b += {
                    center: .5,
                    right: 1
                }[a] * (A - q.width));
                if (b !== z.x || c !== z.y) z.attr("x", b), c !== E && z.attr("y", c);
                z.x = b;
                z.y = c
            }

            function r(a, b) {
                l ? l.attr(a, b) : ia[a] = b
            }
            var v = this,
                t = v.g(k),
                z = v.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                l, q, p = 0,
                u = 3,
                x = 0,
                A, L,
                I, C, H = 0,
                ia = {},
                G, F;
            t.onAdd = function() {
                z.add(t);
                t.attr({
                    text: a || 0 === a ? a : "",
                    x: b,
                    y: c
                });
                l && s(e) && t.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            t.widthSetter = function(a) {
                A = a
            };
            t.heightSetter = function(a) {
                L = a
            };
            t.paddingSetter = function(a) {
                s(a) && a !== u && (u = a, n())
            };
            t.paddingLeftSetter = function(a) {
                s(a) && a !== x && (x = a, n())
            };
            t.alignSetter = function(a) {
                p = {
                    left: 0,
                    center: .5,
                    right: 1
                }[a]
            };
            t.textSetter = function(a) {
                a !== E && z.textSetter(a);
                m();
                n()
            };
            t["stroke-widthSetter"] = function(a, b) {
                a && (F = !0);
                H = a % 2 / 2;
                r(b, a)
            };
            t.strokeSetter = t.fillSetter =
                t.rSetter = function(a, b) {
                    "fill" === b && a && (F = !0);
                    r(b, a)
                };
            t.anchorXSetter = function(a, b) {
                e = a;
                r(b, a + H - I)
            };
            t.anchorYSetter = function(a, b) {
                f = a;
                r(b, a - C)
            };
            t.xSetter = function(a) {
                t.x = a;
                p && (a -= p * ((A || q.width) + u));
                I = K(a);
                t.attr("translateX", I)
            };
            t.ySetter = function(a) {
                C = t.y = K(a);
                t.attr("translateY", C)
            };
            var P = t.css;
            return w(t, {
                css: function(a) {
                    if (a) {
                        var b = {};
                        a = B(a);
                        y(t.textProps, function(c) {
                            a[c] !== E && (b[c] = a[c], delete a[c])
                        });
                        z.css(b)
                    }
                    return P.call(t, a)
                },
                getBBox: function() {
                    return {
                        width: q.width + 2 * u,
                        height: q.height + 2 *
                            u,
                        x: q.x - u,
                        y: q.y - u
                    }
                },
                shadow: function(a) {
                    l && l.shadow(a);
                    return t
                },
                destroy: function() {
                    la(t.element, "mouseenter");
                    la(t.element, "mouseleave");
                    z && (z = z.destroy());
                    l && (l = l.destroy());
                    W.prototype.destroy.call(t);
                    t = v = m = n = r = null
                }
            })
        }
    };
    Ta = Aa;
    w(W.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform();
            this.styles = w(this.styles, a);
            C(this.element, a);
            return this
        },
        htmlGetBBox: function() {
            var a = this.element,
                b = this.bBox;
            b || ("text" ===
                a.nodeName && (a.style.position = "absolute"), b = this.bBox = {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                });
            return b
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer,
                    b = this.element,
                    c = this.translateX || 0,
                    d = this.translateY || 0,
                    e = this.x || 0,
                    f = this.y || 0,
                    g = this.textAlign || "left",
                    h = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[g],
                    k = this.shadows;
                C(b, {
                    marginLeft: c,
                    marginTop: d
                });
                k && y(k, function(a) {
                    C(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    })
                });
                this.inverted && y(b.childNodes, function(c) {
                    a.invertChild(c,
                        b)
                });
                if ("SPAN" === b.tagName) {
                    var m = this.rotation,
                        n, r = D(this.textWidth),
                        v = [m, g, b.innerHTML, this.textWidth].join();
                    v !== this.cTT && (n = a.fontMetrics(b.style.fontSize).b, s(m) && this.setSpanRotation(m, h, n), k = l(this.elemWidth, b.offsetWidth), k > r && /[ \-]/.test(b.textContent || b.innerText) && (C(b, {
                        width: r + "px",
                        display: "block",
                        whiteSpace: "normal"
                    }), k = r), this.getSpanCorrection(k, n, h, m, g));
                    C(b, {
                        left: e + (this.xCorr || 0) + "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    hb && (n = b.offsetHeight);
                    this.cTT = v
                }
            } else this.alignOnAdd = !0
        },
        setSpanRotation: function(a,
            b, c) {
            var d = {},
                e = Ga ? "-ms-transform" : hb ? "-webkit-transform" : Ma ? "MozTransform" : Ab ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (Ma ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px";
            C(this.element, d)
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    w(Aa.prototype, {
        html: function(a, b, c) {
            var d = this.createElement("span"),
                e = d.element,
                f = d.renderer;
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter =
                function(a, b) {
                    "align" === b && (b = "textAlign");
                    d[b] = a;
                    d.htmlUpdateTransform()
                };
            d.attr({
                text: a,
                x: K(b),
                y: K(c)
            }).css({
                position: "absolute",
                whiteSpace: "nowrap",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            d.css = d.htmlCss;
            f.isSVG && (d.add = function(a) {
                var b, c = f.box.parentNode,
                    m = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) m.push(a), a = a.parentGroup;
                        y(m.reverse(), function(a) {
                            var d;
                            b = a.div = a.div || S("div", {
                                className: u(a.element, "class")
                            }, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY ||
                                    0) + "px"
                            }, b || c);
                            d = b.style;
                            w(a, {
                                translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                visibilitySetter: function(a, b) {
                                    d[b] = a
                                }
                            })
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            });
            return d
        }
    });
    var lb, Ja;
    if (!oa && !ra) {
        Ja = {
            init: function(a, b) {
                var c = ["<", b, ' filled="f" stroked="f"'],
                    d = ["position: ", "absolute", ";"],
                    e = "div" === b;
                ("shape" === b || e) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", e ? "hidden" : "visible");
                c.push(' style="', d.join(""), '"/>');
                b && (c = e || "span" === b || "img" === b ? c.join("") : a.prepVML(c), this.element = S(c));
                this.renderer = a
            },
            add: function(a) {
                var b = this.renderer,
                    c = this.element,
                    d = b.box,
                    d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                d.appendChild(c);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd) this.onAdd();
                return this
            },
            updateTransform: W.prototype.htmlUpdateTransform,
            setSpanRotation: function() {
                var a =
                    this.rotation,
                    b = na(a * Ia),
                    c = qa(a * Ia);
                C(this.element, {
                    filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : "none"
                })
            },
            getSpanCorrection: function(a, b, c, d, e) {
                var f = d ? na(d * Ia) : 1,
                    g = d ? qa(d * Ia) : 0,
                    h = l(this.elemHeight, this.element.offsetHeight),
                    k;
                this.xCorr = 0 > f && -a;
                this.yCorr = 0 > g && -h;
                k = 0 > f * g;
                this.xCorr += g * b * (k ? 1 - c : c);
                this.yCorr -= f * b * (d ? k ? c : 1 - c : 1);
                e && "left" !== e && (this.xCorr -= a * c * (0 > f ? -1 : 1), d && (this.yCorr -= h * c * (0 > g ? -1 : 1)), C(this.element, {
                    textAlign: e
                }))
            },
            pathToVML: function(a) {
                for (var b = a.length, c = []; b--;) q(a[b]) ? c[b] = K(10 * a[b]) - 5 : "Z" === a[b] ? c[b] = "x" : (c[b] = a[b], !a.isArc || "wa" !== a[b] && "at" !== a[b] || (c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1)));
                return c.join(" ") || "x"
            },
            clip: function(a) {
                var b = this,
                    c;
                a ? (c = a.members, A(c, b), c.push(b), b.destroyClip = function() {
                    A(c, b)
                }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                    clip: bb ? "inherit" : "rect(auto)"
                });
                return b.css(a)
            },
            css: W.prototype.htmlCss,
            safeRemoveChild: function(a) {
                a.parentNode &&
                    Ha(a)
            },
            destroy: function() {
                this.destroyClip && this.destroyClip();
                return W.prototype.destroy.apply(this)
            },
            on: function(a, b) {
                this.element["on" + a] = function() {
                    var a = aa.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            },
            cutOffPath: function(a, b) {
                var c;
                a = a.split(/[ ,]/);
                c = a.length;
                if (9 === c || 11 === c) a[c - 4] = a[c - 2] = D(a[c - 2]) - 10 * b;
                return a.join(" ")
            },
            shadow: function(a, b, c) {
                var d = [],
                    e, f = this.element,
                    g = this.renderer,
                    h, k = f.style,
                    m, n = f.path,
                    r, v, t, z;
                n && "string" !== typeof n.value && (n = "x");
                v = n;
                if (a) {
                    t = l(a.width, 3);
                    z = (a.opacity ||
                        .15) / t;
                    for (e = 1; 3 >= e; e++) r = 2 * t + 1 - 2 * e, c && (v = this.cutOffPath(n.value, r + .5)), m = ['<shape isShadow="true" strokeweight="', r, '" filled="false" path="', v, '" coordsize="10 10" style="', f.style.cssText, '" />'], h = S(g.prepVML(m), null, {
                        left: D(k.left) + l(a.offsetX, 1),
                        top: D(k.top) + l(a.offsetY, 1)
                    }), c && (h.cutOff = r + 1), m = ['<stroke color="', a.color || "black", '" opacity="', z * e, '"/>'], S(g.prepVML(m), null, null, h), b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f), d.push(h);
                    this.shadows = d
                }
                return this
            },
            updateShadows: ea,
            setAttr: function(a, b) {
                bb ? this.element[a] = b : this.element.setAttribute(a, b)
            },
            classSetter: function(a) {
                this.element.className = a
            },
            dashstyleSetter: function(a, b, c) {
                (c.getElementsByTagName("stroke")[0] || S(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
                this[b] = a
            },
            dSetter: function(a, b, c) {
                var d = this.shadows;
                a = a || [];
                this.d = a.join && a.join(" ");
                c.path = a = this.pathToVML(a);
                if (d)
                    for (c = d.length; c--;) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
                this.setAttr(b, a)
            },
            fillSetter: function(a, b,
                c) {
                var d = c.nodeName;
                "SPAN" === d ? c.style.color = a : "IMG" !== d && (c.filled = "none" !== a, this.setAttr("fillcolor", this.renderer.color(a, c, b, this)))
            },
            opacitySetter: ea,
            rotationSetter: function(a, b, c) {
                c = c.style;
                this[b] = c[b] = a;
                c.left = -K(qa(a * Ia) + 1) + "px";
                c.top = K(na(a * Ia)) + "px"
            },
            strokeSetter: function(a, b, c) {
                this.setAttr("strokecolor", this.renderer.color(a, c, b))
            },
            "stroke-widthSetter": function(a, b, c) {
                c.stroked = !!a;
                this[b] = a;
                q(a) && (a += "px");
                this.setAttr("strokeweight", a)
            },
            titleSetter: function(a, b) {
                this.setAttr(b, a)
            },
            visibilitySetter: function(a, b, c) {
                "inherit" === a && (a = "visible");
                this.shadows && y(this.shadows, function(c) {
                    c.style[b] = a
                });
                "DIV" === c.nodeName && (a = "hidden" === a ? "-999em" : 0, bb || (c.style[b] = a ? "visible" : "hidden"), b = "top");
                c.style[b] = a
            },
            xSetter: function(a, b, c) {
                this[b] = a;
                "x" === b ? b = "left" : "y" === b && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
            },
            zIndexSetter: function(a, b, c) {
                c.style[b] = a
            }
        };
        $.VMLElement = Ja = J(W, Ja);
        Ja.prototype.ySetter = Ja.prototype.widthSetter = Ja.prototype.heightSetter =
            Ja.prototype.xSetter;
        var Wb = {
            Element: Ja,
            isIE8: -1 < Ea.indexOf("MSIE 8.0"),
            init: function(a, b, c, d) {
                var e;
                this.alignedObjects = [];
                d = this.createElement("div").css(w(this.getStyle(d), {
                    position: "relative"
                }));
                e = d.element;
                a.appendChild(d.element);
                this.isVML = !0;
                this.box = e;
                this.boxWrapper = d;
                this.cache = {};
                this.setSize(b, c, !1);
                if (!O.namespaces.hcv) {
                    O.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        O.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (f) {
                        O.styleSheets[0].cssText +=
                            "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            },
            isHidden: function() {
                return !this.box.offsetWidth
            },
            clipRect: function(a, b, c, d) {
                var e = this.createElement(),
                    f = N(a);
                return w(e, {
                    members: [],
                    left: (f ? a.x : a) + 1,
                    top: (f ? a.y : b) + 1,
                    width: (f ? a.width : c) - 1,
                    height: (f ? a.height : d) - 1,
                    getCSS: function(a) {
                        var b = a.element,
                            c = b.nodeName;
                        a = a.inverted;
                        var d = this.top - ("shape" === c ? b.offsetTop : 0),
                            e = this.left,
                            b = e + this.width,
                            f = d + this.height,
                            d = {
                                clip: "rect(" + K(a ? e : d) + "px," + K(a ?
                                    f : b) + "px," + K(a ? b : f) + "px," + K(a ? d : e) + "px)"
                            };
                        !a && bb && "DIV" === c && w(d, {
                            width: b + "px",
                            height: f + "px"
                        });
                        return d
                    },
                    updateClipping: function() {
                        y(e.members, function(a) {
                            a.element && a.css(e.getCSS(a))
                        })
                    }
                })
            },
            color: function(a, b, c, d) {
                var e = this,
                    f, g = /^rgba/,
                    h, k, m = "none";
                a && a.linearGradient ? k = "gradient" : a && a.radialGradient && (k = "pattern");
                if (k) {
                    var n, r, v = a.linearGradient || a.radialGradient,
                        t, z, l, q, s, p = "";
                    a = a.stops;
                    var u, x = [],
                        A = function() {
                            h = ['<fill colors="' + x.join(",") + '" opacity="', l, '" o:opacity2="', z, '" type="', k, '" ',
                                p, 'focus="100%" method="any" />'
                            ];
                            S(e.prepVML(h), null, null, b)
                        };
                    t = a[0];
                    u = a[a.length - 1];
                    0 < t[0] && a.unshift([0, t[1]]);
                    1 > u[0] && a.push([1, u[1]]);
                    y(a, function(a, b) {
                        g.test(a[1]) ? (f = za(a[1]), n = f.get("rgb"), r = f.get("a")) : (n = a[1], r = 1);
                        x.push(100 * a[0] + "% " + n);
                        b ? (l = r, q = n) : (z = r, s = n)
                    });
                    if ("fill" === c)
                        if ("gradient" === k) c = v.x1 || v[0] || 0, a = v.y1 || v[1] || 0, t = v.x2 || v[2] || 0, v = v.y2 || v[3] || 0, p = 'angle="' + (90 - 180 * ca.atan((v - a) / (t - c)) / xa) + '"', A();
                        else {
                            var m = v.r,
                                w = 2 * m,
                                L = 2 * m,
                                I = v.cx,
                                ia = v.cy,
                                C = b.radialReference,
                                H, m = function() {
                                    C &&
                                        (H = d.getBBox(), I += (C[0] - H.x) / H.width - .5, ia += (C[1] - H.y) / H.height - .5, w *= C[2] / H.width, L *= C[2] / H.height);
                                    p = 'src="' + ga.global.VMLRadialGradientURL + '" size="' + w + "," + L + '" origin="0.5,0.5" position="' + I + "," + ia + '" color2="' + s + '" ';
                                    A()
                                };
                            d.added ? m() : d.onAdd = m;
                            m = q
                        } else m = n
                } else g.test(a) && "IMG" !== b.tagName ? (f = za(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], S(this.prepVML(h), null, null, b), m = f.get("rgb")) : (m = b.getElementsByTagName(c), m.length && (m[0].opacity = 1, m[0].type = "solid"), m = a);
                return m
            },
            prepVML: function(a) {
                var b =
                    this.isIE8;
                a = a.join("");
                b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = -1 === a.indexOf('style="') ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                return a
            },
            text: Aa.prototype.html,
            path: function(a) {
                var b = {
                    coordsize: "10 10"
                };
                fa(a) ? b.d = a : N(a) && w(b, a);
                return this.createElement("shape").attr(b)
            },
            circle: function(a, b, c) {
                var d = this.symbol("circle");
                N(a) &&
                    (c = a.r, b = a.y, a = a.x);
                d.isCircle = !0;
                d.r = c;
                return d.attr({
                    x: a,
                    y: b
                })
            },
            g: function(a) {
                var b;
                a && (b = {
                    className: "highcharts-" + a,
                    "class": "highcharts-" + a
                });
                return this.createElement("div").attr(b)
            },
            image: function(a, b, c, d, e) {
                var f = this.createElement("img").attr({
                    src: a
                });
                1 < arguments.length && f.attr({
                    x: b,
                    y: c,
                    width: d,
                    height: e
                });
                return f
            },
            createElement: function(a) {
                return "rect" === a ? this.symbol(a) : Aa.prototype.createElement.call(this, a)
            },
            invertChild: function(a, b) {
                var c = this,
                    d = b.style,
                    e = "IMG" === a.tagName && a.style;
                C(a, {
                    flip: "x",
                    left: D(d.width) - (e ? D(e.top) : 1),
                    top: D(d.height) - (e ? D(e.left) : 1),
                    rotation: -90
                });
                y(a.childNodes, function(b) {
                    c.invertChild(b, a)
                })
            },
            symbols: {
                arc: function(a, b, c, d, e) {
                    var f = e.start,
                        g = e.end,
                        h = e.r || c || d;
                    c = e.innerR;
                    d = na(f);
                    var k = qa(f),
                        m = na(g),
                        n = qa(g);
                    if (0 === g - f) return ["x"];
                    f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * k, a + h * m, b + h * n];
                    e.open && !c && f.push("e", "M", a, b);
                    f.push("at", a - c, b - c, a + c, b + c, a + c * m, b + c * n, a + c * d, b + c * k, "x", "e");
                    f.isArc = !0;
                    return f
                },
                circle: function(a, b, c, d, e) {
                    e && (c = d = 2 * e.r);
                    e && e.isCircle && (a -= c / 2,
                        b -= d / 2);
                    return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                },
                rect: function(a, b, c, d, e) {
                    return Aa.prototype.symbols[s(e) && e.r ? "callout" : "square"].call(0, a, b, c, d, e)
                }
            }
        };
        $.VMLRenderer = lb = function() {
            this.init.apply(this, arguments)
        };
        lb.prototype = B(Aa.prototype, Wb);
        Ta = lb
    }
    Aa.prototype.measureSpanWidth = function(a, b) {
        var c = O.createElement("span"),
            d;
        d = O.createTextNode(a);
        c.appendChild(d);
        C(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        Ha(c);
        return d
    };
    var mb, Hb;
    ra && ($.CanVGRenderer = mb = function() {
            Fa = "http://www.w3.org/1999/xhtml"
        },
        mb.prototype.symbols = {}, Hb = function() {
            function a() {
                var a = b.length,
                    d;
                for (d = 0; d < a; d++) b[d]();
                b = []
            }
            var b = [];
            return {
                push: function(c, d) {
                    0 === b.length && Qb(d, a);
                    b.push(c)
                }
            }
        }(), Ta = mb);
    T.prototype = {
        addLabel: function() {
            var a = this.axis,
                b = a.options,
                c = a.chart,
                d = a.horiz,
                e = a.categories,
                f = a.names,
                g = this.pos,
                h = b.labels,
                k = h.rotation,
                m = a.tickPositions,
                d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / m.length || !d && (c.margin[3] || .33 * c.chartWidth),
                n = g === m[0],
                r = g === m[m.length - 1],
                v, f = e ? l(e[g], f[g], g) : g,
                e = this.label,
                t = m.info;
            a.isDatetimeAxis && t && (v = b.dateTimeLabelFormats[t.higherRanks[g] || t.unitName]);
            this.isFirst = n;
            this.isLast = r;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: n,
                isLast: r,
                dateTimeLabelFormat: v,
                value: a.isLog ? da(x(f)) : f
            });
            g = d && {
                width: F(1, K(d - 2 * (h.padding || 10))) + "px"
            };
            s(e) ? e && e.attr({
                text: b
            }).css(g) : (v = {
                    align: a.labelAlign
                }, q(k) && (v.rotation = k), d && h.ellipsis && (g.HcHeight = a.len / m.length), this.label = e = s(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(v).css(w(g, h.style)).add(a.labelGroup) : null,
                a.tickBaseline = c.renderer.fontMetrics(h.style.fontSize, e).b, k && 2 === a.side && (a.tickBaseline *= na(k * Ia)));
            this.yOffset = e ? l(h.y, a.tickBaseline + (2 === a.side ? 8 : -(e.getBBox().height / 2))) : 0
        },
        getLabelSize: function() {
            var a = this.label,
                b = this.axis;
            return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0
        },
        getLabelSides: function() {
            var a = this.label.getBBox(),
                b = this.axis,
                c = b.horiz,
                d = b.options.labels,
                a = c ? a.width : a.height,
                b = c ? d.x - a * {
                    left: 0,
                    center: .5,
                    right: 1
                }[b.labelAlign] : 0;
            return [b, c ? a + b : a]
        },
        handleOverflow: function(a, b) {
            var c = !0,
                d = this.axis,
                e = this.isFirst,
                f = this.isLast,
                g = d.horiz ? b.x : b.y,
                h = d.reversed,
                k = d.tickPositions,
                m = this.getLabelSides(),
                n = m[0],
                m = m[1],
                r, v, t, z = this.label.line;
            r = z || 0;
            v = d.labelEdge;
            t = d.justifyLabels && (e || f);
            v[r] === E || g + n > v[r] ? v[r] = g + m : t || (c = !1);
            if (t) {
                r = (v = d.justifyToPlot) ? d.pos : 0;
                v = v ? r + d.len : d.chart.chartWidth;
                do a += e ? 1 : -1, t = d.ticks[k[a]]; while (k[a] && (!t || !t.label || t.label.line !== z));
                d = t && t.label.xy && t.label.xy.x + t.getLabelSides()[e ? 0 : 1];
                e && !h || f && h ? g + n < r && (g = r - n, t && g + m > d && (c = !1)) : g + m > v && (g = v - m, t && g + n <
                    d && (c = !1));
                b.x = g
            }
            return c
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var k = this.axis,
                m = k.transA,
                n = k.reversed,
                r = k.staggerLines;
            a = a + e.x - (f && d ? f * m * (n ? -1 : 1) : 0);
            b = b + this.yOffset - (f && !d ? f * m * (n ?
                1 : -1) : 0);
            r && (c.line = g / (h || 1) % r, b += k.labelOffset / r * c.line);
            return {
                x: a,
                y: b
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b, c) {
            var d = this.axis,
                e = d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                k = this.label,
                m = this.pos,
                n = e.labels,
                r = this.gridLine,
                v = h ? h + "Grid" : "grid",
                t = h ? h + "Tick" : "tick",
                z = e[v + "LineWidth"],
                q = e[v + "LineColor"],
                s = e[v + "LineDashStyle"],
                p = e[t + "Length"],
                v = e[t + "Width"] || 0,
                y = e[t + "Color"],
                u = e[t + "Position"],
                t = this.mark,
                x = n.step,
                A = !0,
                w = d.tickmarkOffset,
                L = this.getPosition(g, m, w, b),
                I = L.x,
                L = L.y,
                ia = g && I === d.pos + d.len || !g && L === d.pos ? -1 : 1;
            c = l(c, 1);
            this.isActive = !0;
            if (z && (m = d.getPlotLinePath(m + w, z * ia, b, !0), r === E && (r = {
                    stroke: q,
                    "stroke-width": z
                }, s && (r.dashstyle = s), h || (r.zIndex = 1), b && (r.opacity = 0), this.gridLine = r = z ? f.path(m).attr(r).add(d.gridGroup) : null), !b && r && m)) r[this.isNew ? "attr" : "animate"]({
                d: m,
                opacity: c
            });
            v && p && ("inside" === u && (p = -p), d.opposite && (p = -p), h = this.getMarkPath(I, L, p, v * ia, g, f), t ? t.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: y,
                "stroke-width": v,
                opacity: c
            }).add(d.axisGroup));
            k && !isNaN(I) && (k.xy = L = this.getLabelPosition(I, L, k, g, n, w, a, x), this.isFirst && !this.isLast && !l(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !l(e.showLastLabel, 1) ? A = !1 : d.isRadial || n.step || n.rotation || b || 0 === c || (A = this.handleOverflow(a, L)), x && a % x && (A = !1), A && !isNaN(L.y) ? (L.opacity = c, k[this.isNew ? "attr" : "animate"](L), this.isNew = !1) : k.attr("y", -9999))
        },
        destroy: function() {
            wa(this, this.axis)
        }
    };
    $.PlotLineOrBand = function(a, b) {
        this.axis = a;
        b && (this.options = b, this.id =
            b.id)
    };
    $.PlotLineOrBand.prototype = {
        render: function() {
            var a = this,
                b = a.axis,
                c = b.horiz,
                d = (b.pointRange || 0) / 2,
                e = a.options,
                f = e.label,
                g = a.label,
                h = e.width,
                k = e.to,
                m = e.from,
                n = s(m) && s(k),
                r = e.value,
                v = e.dashStyle,
                t = a.svgElem,
                z = [],
                l, q = e.color,
                y = e.zIndex,
                u = e.events,
                x = {},
                A = b.chart.renderer;
            b.isLog && (m = p(m), k = p(k), r = p(r));
            if (h) z = b.getPlotLinePath(r, h), x = {
                stroke: q,
                "stroke-width": h
            }, v && (x.dashstyle = v);
            else if (n) m = F(m, b.min - d), k = U(k, b.max + d), z = b.getPlotBandPath(m, k, e), q && (x.fill = q), e.borderWidth && (x.stroke = e.borderColor,
                x["stroke-width"] = e.borderWidth);
            else return;
            s(y) && (x.zIndex = y);
            if (t) z ? t.animate({
                d: z
            }, null, t.onGetPath) : (t.hide(), t.onGetPath = function() {
                t.show()
            }, g && (a.label = g = g.destroy()));
            else if (z && z.length && (a.svgElem = t = A.path(z).attr(x).add(), u))
                for (l in d = function(b) {
                        t.on(b, function(c) {
                            u[b].apply(a, [c])
                        })
                    }, u) d(l);
            f && s(f.text) && z && z.length && 0 < b.width && 0 < b.height ? (f = B({
                align: c && n && "center",
                x: c ? !n && 4 : 10,
                verticalAlign: !c && n && "middle",
                y: c ? n ? 16 : 10 : n ? 6 : -4,
                rotation: c && !n && 90
            }, f), g || (x = {
                align: f.textAlign || f.align,
                rotation: f.rotation
            }, s(y) && (x.zIndex = y), a.label = g = A.text(f.text, 0, 0, f.useHTML).attr(x).css(f.style).add()), b = [z[1], z[4], n ? z[6] : z[1]], n = [z[2], z[5], n ? z[7] : z[2]], z = ta(b), c = ta(n), g.align(f, !1, {
                x: z,
                y: c,
                width: pa(b) - z,
                height: pa(n) - c
            }), g.show()) : g && g.hide();
            return a
        },
        destroy: function() {
            A(this.axis.plotLinesAndBands, this);
            delete this.axis;
            wa(this)
        }
    };
    Y.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: kb,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return L(this.total, -1)
                },
                style: kb.style
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.chart = a;
            this.reversed = d.reversed;
            this.zoomEnabled = !1 !== d.zoomEnabled;
            this.categories = d.categories || "category" === e;
            this.names = [];
            this.isLog = "logarithmic" ===
                e;
            this.isDatetimeAxis = "datetime" === e;
            this.isLinked = s(d.linkedTo);
            this.tickmarkOffset = this.categories && "between" === d.tickmarkPlacement && 1 === l(d.tickInterval, 1) ? .5 : 0;
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.min = this.max = null;
            this.crosshair = l(d.crosshair, P(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f,
                d = this.options.events; - 1 === Oa(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === E && (this.reversed = !0);
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) ba(this, f, d[f]);
            this.isLog && (this.val2lin = p, this.lin2val = x)
        },
        setOptions: function(a) {
            this.options = B(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions,
                this.defaultBottomAxisOptions, this.defaultLeftAxisOptions
            ][this.side], B(ga[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = ga.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = H(h, this);
            else if (c) g = b;
            else if (d) g = Za(d, b);
            else if (f && 1E3 <= a)
                for (; f-- && g === E;) c = Math.pow(1E3, f + 1), a >= c && null !== e[f] && (g = L(b / c, -1) + e[f]);
            g === E && (g = 1E4 <= X(b) ? L(b, 0) : L(b, -1, E, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a =
                this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.ignoreMinPadding = a.ignoreMaxPadding = null;
            a.buildStacks && a.buildStacks();
            y(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d;
                    d = c.options.threshold;
                    var e;
                    a.hasVisibleSeries = !0;
                    a.isLog && 0 >= d && (d = null);
                    a.isXAxis ? (d = c.xData, d.length && (a.dataMin = U(l(a.dataMin, d[0]), ta(d)), a.dataMax = F(l(a.dataMax, d[0]), pa(d)))) : (c.getExtremes(), e = c.dataMax, c = c.dataMin, s(c) && s(e) && (a.dataMin = U(l(a.dataMin, c), c), a.dataMax = F(l(a.dataMax,
                        e), e)), s(d) && (a.dataMin >= d ? (a.dataMin = d, a.ignoreMinPadding = !0) : a.dataMax < d && (a.dataMax = d, a.ignoreMaxPadding = !0)))
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = 1,
                h = 0,
                k = d ? this.oldTransA : this.transA;
            d = d ? this.oldMin : this.min;
            var m = this.minPixelPadding;
            e = (this.options.ordinal || this.isLog && e) && this.lin2val;
            k || (k = this.transA);
            c && (g *= -1, h = this.len);
            this.reversed && (g *= -1, h -= g * (this.sector || this.len));
            b ? (a = a * g + h - m, a = a / k + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), "between" === f && (f = .5), a = g * (a - d) * k + h + g * m +
                (q(f) ? k * f * this.pointRange : 0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                k, m, n = c && f.oldChartHeight || f.chartHeight,
                r = c && f.oldChartWidth || f.chartWidth,
                v;
            k = this.transB;
            e = l(e, this.translate(a, null, null, c));
            a = c = K(e + k);
            k = m = K(n - e - k);
            if (isNaN(e)) v = !0;
            else if (this.horiz) {
                if (k = h, m = n - this.bottom,
                    a < g || a > g + this.width) v = !0
            } else if (a = g, c = r - this.right, k < h || k > h + this.height) v = !0;
            return v && !d ? null : f.renderer.crispLine(["M", a, k, "L", c, m], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = da(ha(b / a) * a),
                f = da(La(c / a) * a),
                g = [];
            if (b === c && q(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = da(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e;
            if (this.isLog)
                for (e = b.length, a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c, b[a -
                    1], b[a], !0));
            else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), d[0] < this.min && d.shift();
            else
                for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c) d.push(b);
            return d
        },
        adjustForMinRange: function() {
            var a = this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, k, m;
            this.isXAxis && this.minRange === E && !this.isLog && (s(a.min) || s(a.max) ? this.minRange = null : (y(this.series, function(a) {
                k =
                    a.xData;
                for (g = m = a.xIncrement ? 1 : k.length - 1; 0 < g; g--)
                    if (h = k[g] - k[g - 1], f === E || h < f) f = h
            }), this.minRange = U(5 * f, this.dataMax - this.dataMin)));
            if (c - b < this.minRange) {
                var n = this.minRange;
                d = (n - c + b) / 2;
                d = [b - d, l(a.min, b - d)];
                e && (d[2] = this.dataMin);
                b = pa(d);
                c = [b + n, l(a.max, b + n)];
                e && (c[2] = this.dataMax);
                c = ta(c);
                c - b < n && (d[0] = c - n, d[1] = l(a.min, c - n), b = pa(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max - b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                k = !!b.categories,
                m = b.transA;
            if (b.isXAxis ||
                k || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : y(b.series, function(a) {
                var h = k ? 1 : b.isXAxis ? a.pointRange : b.axisPointRange || 0,
                    m = a.options.pointPlacement,
                    t = a.closestPointRange;
                h > c && (h = 0);
                d = F(d, h);
                f = F(f, V(m) ? 0 : h / 2);
                g = F(g, "on" === m ? 0 : h);
                !a.noSharedTooltip && s(t) && (e = s(e) ? U(e, t) : t)
            }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = U(d, c), b.closestPointRange = e;
            a && (b.oldTransA = m);
            b.translationSlope = b.transA = m = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = m * f
        },
        setTickPositions: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = d.startOnTick,
                f = d.endOnTick,
                g = b.isLog,
                h = b.isDatetimeAxis,
                k = b.isXAxis,
                m = b.isLinked,
                n = b.options.tickPositioner,
                r = d.maxPadding,
                v = d.minPadding,
                t = d.tickInterval,
                z = d.minTickInterval,
                u = d.tickPixelInterval,
                x, A = b.categories;
            m ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = l(c.min, c.dataMin), b.max = l(c.max, c.dataMax), d.type !== b.linkedParent.options.type && va(11, 1)) : (b.min = l(b.userMin, d.min, b.dataMin),
                b.max = l(b.userMax, d.max, b.dataMax));
            g && (!a && 0 >= U(b.min, l(b.dataMin, b.min)) && va(10, 1), b.min = da(p(b.min)), b.max = da(p(b.max)));
            b.range && s(b.max) && (b.userMin = b.min = F(b.min, b.max - b.range), b.userMax = b.max, b.range = null);
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            !(A || b.axisPointRange || b.usePercentage || m) && s(b.min) && s(b.max) && (c = b.max - b.min) && (s(d.min) || s(b.userMin) || !v || !(0 > b.dataMin) && b.ignoreMinPadding || (b.min -= c * v), s(d.max) || s(b.userMax) || !r || !(0 < b.dataMax) && b.ignoreMaxPadding || (b.max +=
                c * r));
            q(d.floor) && (b.min = F(b.min, d.floor));
            q(d.ceiling) && (b.max = U(b.max, d.ceiling));
            b.min === b.max || void 0 === b.min || void 0 === b.max ? b.tickInterval = 1 : m && !t && u === b.linkedParent.options.tickPixelInterval ? b.tickInterval = b.linkedParent.tickInterval : (b.tickInterval = l(t, A ? 1 : (b.max - b.min) * u / F(b.len, u)), !s(t) && b.len < u && !this.isRadial && !this.isLog && !A && e && f && (x = !0, b.tickInterval /= 4));
            k && !a && y(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions &&
                b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && (b.tickInterval = F(b.pointRange, b.tickInterval));
            !t && b.tickInterval < z && (b.tickInterval = z);
            h || g || t || (b.tickInterval = Ka(b.tickInterval, null, ca.pow(10, ha(ca.log(b.tickInterval) / ca.LN10)), l(d.allowDecimals, !(1 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max))));
            b.minorTickInterval = "auto" === d.minorTickInterval && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;
            b.tickPositions =
                a = d.tickPositions ? [].concat(d.tickPositions) : n && n.apply(b, [b.min, b.max]);
            a || (!b.ordinalPositions && (b.max - b.min) / b.tickInterval > F(2 * b.len, 200) && va(19, !0), a = h ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : g ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), x && a.splice(1, a.length - 2), b.tickPositions = a);
            m || (d = a[0], g = a[a.length - 1], h = b.minPointOffset || 0, e ? b.min = d :
                b.min - h > d && a.shift(), f ? b.max = g : b.max + h < g && a.pop(), 0 === a.length && s(d) && a.push((g + d) / 2), 1 === a.length && (e = 1E13 < X(b.max) ? 1 : .001, b.min -= e, b.max += e))
        },
        setMaxTicks: function() {
            var a = this.chart,
                b = a.maxTicks || {},
                c = this.tickPositions,
                d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");
            !this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && !1 !== this.options.alignTicks && (b[d] = c.length);
            a.maxTicks = b
        },
        adjustTickAmount: function() {
            var a = this._maxTicksKey,
                b = this.tickPositions,
                c = this.chart.maxTicks;
            if (c &&
                c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && !1 !== this.options.alignTicks && this.min !== E) {
                var d = this.tickAmount,
                    e = b.length;
                this.tickAmount = a = c[a];
                if (e < a) {
                    for (; b.length < a;) b.push(da(b[b.length - 1] + this.tickInterval));
                    this.transA *= (e - 1) / (a - 1);
                    this.max = b[b.length - 1]
                }
                s(d) && a !== d && (this.isDirty = !0)
            }
        },
        setScale: function() {
            var a = this.stacks,
                b, c, d, e;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            y(this.series, function(a) {
                if (a.isDirtyData ||
                    a.isDirty || a.xAxis.isDirty) d = !0
            });
            if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis)
                    for (b in a)
                        for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickPositions();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)
            } else if (!this.isXAxis)
                for (b in this.oldStacks && (a = this.stacks = this.oldStacks), a)
                    for (c in a[b]) a[b][c].cum =
                        a[b][c].total;
            this.setMaxTicks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart;
            c = l(c, !0);
            e = w(e, {
                min: a,
                max: b
            });
            Z(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                f.isDirtyExtremes = !0;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options;
            this.allowZoomOutside || (s(c) && a <= U(c, l(e.min, c)) && (a = E), s(d) && b >= F(d, l(e.max, d)) && (b = E));
            this.displayBtn = a !== E || b !== E;
            this.setExtremes(a, b, !1, E, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = l(b.width, a.plotWidth - c + (b.offsetRight || 0)),
                f = l(b.height, a.plotHeight),
                g = l(b.top, a.plotTop),
                b = l(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = parseInt(f, 10) / 100 * a.plotHeight);
            c.test(g) && (g = parseInt(g, 10) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = F(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? da(x(this.min)) : this.min,
                max: a ?
                    da(x(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? x(this.min) : this.min,
                b = b ? x(this.max) : this.max;
            c > a || null === a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (l(a, 0) - 90 * this.side + 720) % 360;
            return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                k = b.inverted ? [1, 0, 3, 2][h] : h,
                m, n, r = 0,
                v, t = 0,
                z = d.title,
                q = d.labels,
                p = 0,
                u = b.axisOffset,
                b = b.clipOffset,
                x = [-1, 1, 1, -1][h],
                A, w = 1,
                L = l(q.maxStaggerLines, 5),
                I, C, H, ia, G;
            a.hasData = m = a.hasVisibleSeries || s(a.min) && s(a.max) && !!e;
            a.showAxis = n = m || l(d.showEmpty, !0);
            a.staggerLines = a.horiz && q.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(), a.labelGroup = c.g("axis-labels").attr({
                zIndex: q.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() +
                "-labels").add());
            if (m || a.isLinked) {
                a.labelAlign = l(q.align || a.autoLabelAlign(q.rotation));
                y(e, function(b) {
                    f[b] ? f[b].addLabel() : f[b] = new T(a, b)
                });
                if (a.horiz && !a.staggerLines && L && !q.rotation) {
                    for (m = a.reversed ? [].concat(e).reverse() : e; w < L;) {
                        I = [];
                        C = !1;
                        for (A = 0; A < m.length; A++) H = m[A], ia = (ia = f[H].label && f[H].label.getBBox()) ? ia.width : 0, G = A % w, ia && (H = a.translate(H), I[G] !== E && H < I[G] && (C = !0), I[G] = H + ia);
                        if (C) w++;
                        else break
                    }
                    1 < w && (a.staggerLines = w)
                }
                y(e, function(b) {
                    if (0 === h || 2 === h || {
                            1: "left",
                            3: "right"
                        }[h] === a.labelAlign) p =
                        F(f[b].getLabelSize(), p)
                });
                a.staggerLines && (p *= a.staggerLines, a.labelOffset = p)
            } else
                for (A in f) f[A].destroy(), delete f[A];
            z && z.text && !1 !== z.enabled && (a.axisTitle || (a.axisTitle = c.text(z.text, 0, 0, z.useHTML).attr({
                zIndex: 7,
                rotation: z.rotation || 0,
                align: z.textAlign || {
                    low: "left",
                    middle: "center",
                    high: "right"
                }[z.align]
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(z.style).add(a.axisGroup), a.axisTitle.isNew = !0), n && (r = a.axisTitle.getBBox()[g ? "height" : "width"], v = z.offset, t = s(v) ? 0 : l(z.margin,
                g ? 5 : 10)), a.axisTitle[n ? "show" : "hide"]());
            a.offset = x * l(d.offset, u[h]);
            c = 2 === h ? a.tickBaseline : 0;
            g = p + t + (p && x * (g ? l(q.y, a.tickBaseline + 8) : q.x) - c);
            a.axisTitleMargin = l(v, g);
            u[h] = F(u[h], a.axisTitleMargin + r + x * a.offset, g);
            b[k] = F(b[k], 2 * ha(d.lineWidth / 2))
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right :
                f, e ? d : b.chartHeight - this.bottom
            ], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                k = D(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? k : 0);
            return {
                x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
                y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)
            }
        },
        render: function() {
            var a = this,
                b = a.horiz,
                c = a.reversed,
                d = a.chart,
                e = d.renderer,
                f = a.options,
                g = a.isLog,
                h = a.isLinked,
                k = a.tickPositions,
                m, n = a.axisTitle,
                r = a.ticks,
                v = a.minorTicks,
                t = a.alternateBands,
                z = f.stackLabels,
                l = f.alternateGridColor,
                q = a.tickmarkOffset,
                p = f.lineWidth,
                u = d.hasRendered && s(a.oldMin) && !isNaN(a.oldMin),
                A = a.hasData,
                w = a.showAxis,
                L, I = f.labels.overflow,
                H = a.justifyLabels = b && !1 !== I,
                C;
            a.labelEdge.length = 0;
            a.justifyToPlot = "justify" === I;
            y([r, v, t], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (A || h) a.minorTickInterval && !a.categories && y(a.getMinorTickPositions(), function(b) {
                v[b] || (v[b] = new T(a,
                    b, "minor"));
                u && v[b].isNew && v[b].render(null, !0);
                v[b].render(null, !1, 1)
            }), k.length && (m = k.slice(), (b && c || !b && !c) && m.reverse(), H && (m = m.slice(1).concat([m[0]])), y(m, function(b, c) {
                H && (c = c === m.length - 1 ? 0 : c + 1);
                if (!h || b >= a.min && b <= a.max) r[b] || (r[b] = new T(a, b)), u && r[b].isNew && r[b].render(c, !0, .1), r[b].render(c)
            }), q && 0 === a.min && (r[-1] || (r[-1] = new T(a, -1, null, !0)), r[-1].render(-1))), l && y(k, function(b, c) {
                0 === c % 2 && b < a.max && (t[b] || (t[b] = new $.PlotLineOrBand(a)), L = b + q, C = k[c + 1] !== E ? k[c + 1] + q : a.max, t[b].options = {
                    from: g ?
                        x(L) : L,
                    to: g ? x(C) : C,
                    color: l
                }, t[b].render(), t[b].isActive = !0)
            }), a._addedPlotLB || (y((f.plotLines || []).concat(f.plotBands || []), function(b) {
                a.addPlotBandOrLine(b)
            }), a._addedPlotLB = !0);
            y([r, v, t], function(a) {
                var b, c, e = [],
                    f = ua ? ua.duration || 500 : 0,
                    g = function() {
                        for (c = e.length; c--;) a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]])
                    };
                for (b in a) a[b].isActive || (a[b].render(b, !1, 0), a[b].isActive = !1, e.push(b));
                a !== t && d.hasRendered && f ? f && setTimeout(g, f) : g()
            });
            p && (b = a.getLinePath(p), a.axisLine ? a.axisLine.animate({
                    d: b
                }) :
                a.axisLine = e.path(b).attr({
                    stroke: f.lineColor,
                    "stroke-width": p,
                    zIndex: 7
                }).add(a.axisGroup), a.axisLine[w ? "show" : "hide"]());
            n && w && (n[n.isNew ? "attr" : "animate"](a.getTitlePosition()), n.isNew = !1);
            z && z.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            this.render();
            y(this.plotLinesAndBands, function(a) {
                a.render()
            });
            y(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || la(b);
            for (d in c) wa(c[d]), c[d] = null;
            y([b.ticks, b.minorTicks, b.alternateBands],
                function(a) {
                    wa(a)
                });
            for (a = e.length; a--;) e[a].destroy();
            y("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function(a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            if (this.crosshair)
                if (!1 === (s(b) || !l(this.crosshair.snap, !0))) this.hideCrosshair();
                else {
                    var c, d = this.crosshair,
                        e = d.animation;
                    l(d.snap, !0) ? s(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos;
                    c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : l(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c);
                    if (null === c) this.hideCrosshair();
                    else if (this.cross) this.cross.attr({
                        visibility: "visible"
                    })[e ? "animate" : "attr"]({
                        d: c
                    }, e);
                    else e = {
                        "stroke-width": d.width || 1,
                        stroke: d.color || "#C0C0C0",
                        zIndex: d.zIndex || 2
                    }, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add()
                }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    };
    w(Y.prototype, {
        getPlotBandPath: function(a,
            b) {
            var c = this.getPlotLinePath(b),
                d = this.getPlotLinePath(a);
            d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        },
        addPlotBand: function(a) {
            return this.addPlotBandOrLine(a, "plotBands")
        },
        addPlotLine: function(a) {
            return this.addPlotBandOrLine(a, "plotLines")
        },
        addPlotBandOrLine: function(a, b) {
            var c = (new $.PlotLineOrBand(this, a)).render(),
                d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        },
        removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands, c = this.options,
                    d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy();
            y([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
                for (e = b.length; e--;) b[e].id === a && A(b, b[e])
            })
        }
    });
    var Ib = $.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Ib.prototype = {
        init: function(a, b) {
            var c = b.borderWidth,
                d = b.style,
                e = D(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            ra || this.label.shadow(b.shadow);
            this.shared = b.shared
        },
        destroy: function() {
            this.label && (this.label = this.label.destroy());
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = !1 !== e.options.animation && !e.isHidden && (1 < X(a - f.x) || 1 < X(b - f.y)),
                h = e.followPointer || 1 < e.len;
            w(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? E : g ? (2 * f.anchorX + c) /
                    3 : c,
                anchorY: h ? E : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            g && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32))
        },
        hide: function(a) {
            var b = this,
                c;
            clearTimeout(this.hideTimer);
            this.isHidden || (c = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
                b.label.fadeOut();
                b.isHidden = !0
            }, l(a, this.options.hideDelay, 500)), c && y(c, function(a) {
                a.setState()
            }), this.chart.hoverPoints = null)
        },
        getAnchor: function(a, b) {
            var c, d = this.chart,
                e = d.inverted,
                f = d.plotTop,
                g = 0,
                h =
                0,
                k;
            a = P(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === E && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (y(a, function(a) {
                k = a.series.yAxis;
                g += a.plotX;
                h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && k ? k.top - f : 0)
            }), g /= a.length, h /= a.length, c = [e ? d.plotWidth - h : g, this.shared && !e && 1 < a.length && b ? b.chartY - f : e ? d.plotHeight - g : h]);
            return Pa(c, K)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = this.distance,
                f = {},
                g, h = ["y", d.chartHeight, b, c.plotY + d.plotTop],
                k = ["x", d.chartWidth, a,
                    c.plotX + d.plotLeft
                ],
                m = c.ttBelow || d.inverted && !c.negative || !d.inverted && c.negative,
                n = function(a, b, c, d) {
                    var g = c < d - e;
                    b = d + e + c < b;
                    c = d - e - c;
                    d += e;
                    if (m && b) f[a] = d;
                    else if (!m && g) f[a] = c;
                    else if (g) f[a] = c;
                    else if (b) f[a] = d;
                    else return !1
                },
                r = function(a, b, c, d) {
                    if (d < e || d > b - e) return !1;
                    f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2
                },
                v = function(a) {
                    var b = h;
                    h = k;
                    k = b;
                    g = a
                },
                t = function() {
                    !1 !== n.apply(0, h) ? !1 !== r.apply(0, k) || g || (v(!0), t()) : g ? f.x = f.y = 0 : (v(!0), t())
                };
            (d.inverted || 1 < this.len) && v();
            t();
            return f
        },
        defaultFormatter: function(a) {
            var b =
                this.points || P(this),
                c = b[0].series,
                d;
            d = [a.tooltipHeaderFormatter(b[0])];
            y(b, function(a) {
                c = a.series;
                d.push(c.tooltipFormatter && c.tooltipFormatter(a) || a.point.tooltipFormatter(c.tooltipOptions.pointFormat))
            });
            d.push(a.options.footerFormat || "");
            return d.join("")
        },
        refresh: function(a, b) {
            var c = this.chart,
                d = this.label,
                e = this.options,
                f, g, h = {},
                k, m = [];
            k = e.formatter || this.defaultFormatter;
            var h = c.hoverPoints,
                n, r = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = P(a)[0].series.tooltipOptions.followPointer;
            g = this.getAnchor(a, b);
            f = g[0];
            g = g[1];
            !r || a.series && a.series.noSharedTooltip ? h = a.getLabelConfig() : (c.hoverPoints = a, h && y(h, function(a) {
                a.setState()
            }), y(a, function(a) {
                a.setState("hover");
                m.push(a.getLabelConfig())
            }), h = {
                x: a[0].category,
                y: a[0].y
            }, h.points = m, this.len = m.length, a = a[0]);
            k = k.call(h, this);
            h = a.series;
            this.distance = l(h.tooltipOptions.distance, 16);
            !1 === k ? this.hide() : (this.isHidden && (Wa(d), d.attr("opacity", 1).show()), d.attr({
                    text: k
                }), n = e.borderColor || a.color || h.color || "#606060", d.attr({
                    stroke: n
                }),
                this.updatePosition({
                    plotX: f,
                    plotY: g,
                    negative: a.negative,
                    ttBelow: a.ttBelow
                }), this.isHidden = !1);
            Z(c, "tooltipRefresh", {
                text: k,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: n
            })
        },
        updatePosition: function(a) {
            var b = this.chart,
                c = this.label,
                c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(K(c.x), K(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        },
        tooltipHeaderFormatter: function(a) {
            var b = a.series,
                c = b.tooltipOptions,
                d = c.dateTimeLabelFormats,
                e = c.xDateFormat,
                f = b.xAxis,
                g = f && "datetime" ===
                f.options.type && q(a.key),
                c = c.headerFormat,
                f = f && f.closestPointRange,
                h;
            if (g && !e) {
                if (f)
                    for (h in Na) {
                        if (Na[h] >= f || Na[h] <= Na.day && 0 < a.key % Na[h]) {
                            e = d[h];
                            break
                        }
                    } else e = d.day;
                e = e || d.year
            }
            g && e && (c = c.replace("{point.key}", "{point.key:" + e + "}"));
            return H(c, {
                point: a,
                series: b
            })
        }
    };
    var ya;
    Ua = O.documentElement.ontouchstart !== E;
    var Qa = $.Pointer = function(a, b) {
        this.init(a, b)
    };
    Qa.prototype = {
        init: function(a, b) {
            var c = b.chart,
                d = c.events,
                e = ra ? "" : c.zoomType,
                c = a.inverted,
                f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            $.Tooltip && b.tooltip.enabled && (a.tooltip = new Ib(a, b.tooltip), this.followTouchMove = b.tooltip.followTouchMove);
            this.setDOMEvents()
        },
        normalize: function(a, b) {
            var c, d;
            a = a || window.event;
            a = Sb(a);
            a.target || (a.target = a.srcElement);
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            b || (this.chartPosition = b = Rb(this.chart.container));
            d.pageX === E ? (c = F(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return w(a, {
                chartX: K(c),
                chartY: K(d)
            })
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            y(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                })
            });
            return b
        },
        getIndex: function(a) {
            var b = this.chart;
            return b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
        },
        runPointActions: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e, f, g = b.hoverPoint,
                h = b.hoverSeries,
                k, m, n = b.chartWidth,
                r = this.getIndex(a);
            if (d && this.options.tooltip.shared && (!h || !h.noSharedTooltip)) {
                f = [];
                k = c.length;
                for (m = 0; m < k; m++) c[m].visible && !1 !== c[m].options.enableMouseTracking && !c[m].noSharedTooltip && !0 !== c[m].singularTooltips && c[m].tooltipPoints.length && (e = c[m].tooltipPoints[r]) && e.series && (e._dist = X(r - e.clientX), n = U(n, e._dist), f.push(e));
                for (k = f.length; k--;) f[k]._dist > n && f.splice(k, 1);
                f.length && f[0].clientX !== this.hoverX && (d.refresh(f, a), this.hoverX = f[0].clientX)
            }
            c = h && h.tooltipOptions.followPointer;
            if (h && h.tracker && !c) {
                if ((e = h.tooltipPoints[r]) && e !== g) e.onMouseOver(a)
            } else d && c && !d.isHidden && (h = d.getAnchor([{}], a), d.updatePosition({
                plotX: h[0],
                plotY: h[1]
            }));
            d && !this._onDocumentMouseMove && (this._onDocumentMouseMove = function(a) {
                if (ka[ya]) ka[ya].pointer.onDocumentMouseMove(a)
            }, ba(O, "mousemove", this._onDocumentMouseMove));
            y(b.axes, function(b) {
                b.drawCrosshair(a, l(e, g))
            })
        },
        reset: function(a, b) {
            var c = this.chart,
                d = c.hoverSeries,
                e = c.hoverPoint,
                f = c.tooltip,
                g = f && f.shared ? c.hoverPoints : e;
            (a = a && f && g) && P(g)[0].plotX ===
                E && (a = !1);
            if (a) f.refresh(g), e && e.setState(e.state, !0);
            else {
                if (e) e.onMouseOut();
                if (d) d.onMouseOut();
                f && f.hide(b);
                this._onDocumentMouseMove && (la(O, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null);
                y(c.axes, function(a) {
                    a.hideCrosshair()
                });
                this.hoverX = null
            }
        },
        scaleGroups: function(a, b) {
            var c = this.chart,
                d;
            y(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup &&
                    e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        },
        dragStart: function(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        },
        drag: function(a) {
            var b = this.chart,
                c = b.options.chart,
                d = a.chartX,
                e = a.chartY,
                f = this.zoomHor,
                g = this.zoomVert,
                h = b.plotLeft,
                k = b.plotTop,
                m = b.plotWidth,
                n = b.plotHeight,
                r, v = this.mouseDownX,
                t = this.mouseDownY,
                z = c.panKey && a[c.panKey + "Key"];
            d < h ? d = h : d > h + m && (d = h + m);
            e < k ? e = k : e > k + n && (e = k + n);
            this.hasDragged =
                Math.sqrt(Math.pow(v - d, 2) + Math.pow(t - e, 2));
            10 < this.hasDragged && (r = b.isInsidePlot(v - h, t - k), b.hasCartesianSeries && (this.zoomX || this.zoomY) && r && !z && !this.selectionMarker && (this.selectionMarker = b.renderer.rect(h, k, f ? 1 : m, g ? 1 : n, 0).attr({
                    fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add()), this.selectionMarker && f && (d -= v, this.selectionMarker.attr({
                    width: X(d),
                    x: (0 < d ? 0 : d) + v
                })), this.selectionMarker && g && (d = e - t, this.selectionMarker.attr({
                    height: X(d),
                    y: (0 < d ? 0 : d) + t
                })), r && !this.selectionMarker &&
                c.panning && b.pan(a, c.panning))
        },
        drop: function(a) {
            var b = this.chart,
                c = this.hasPinched;
            if (this.selectionMarker) {
                var d = {
                        xAxis: [],
                        yAxis: [],
                        originalEvent: a.originalEvent || a
                    },
                    e = this.selectionMarker,
                    f = e.attr ? e.attr("x") : e.x,
                    g = e.attr ? e.attr("y") : e.y,
                    h = e.attr ? e.attr("width") : e.width,
                    k = e.attr ? e.attr("height") : e.height,
                    m;
                if (this.hasDragged || c) y(b.axes, function(b) {
                    if (b.zoomEnabled) {
                        var c = b.horiz,
                            e = "touchend" === a.type ? b.minPixelPadding : 0,
                            t = b.toValue((c ? f : g) + e),
                            c = b.toValue((c ? f + h : g + k) - e);
                        isNaN(t) || isNaN(c) || (d[b.coll].push({
                            axis: b,
                            min: U(t, c),
                            max: F(t, c)
                        }), m = !0)
                    }
                }), m && Z(b, "selection", d, function(a) {
                    b.zoom(w(a, c ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                c && this.scaleGroups()
            }
            b && (C(b.container, {
                cursor: b._cursor
            }), b.cancelClick = 10 < this.hasDragged, b.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
        onDocumentMouseUp: function(a) {
            ka[ya] && ka[ya].pointer.drop(a)
        },
        onDocumentMouseMove: function(a) {
            var b =
                this.chart,
                c = this.chartPosition,
                d = b.hoverSeries;
            a = this.normalize(a, c);
            c && d && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset()
        },
        onContainerMouseLeave: function() {
            var a = ka[ya];
            a && (a.pointer.reset(), a.pointer.chartPosition = null)
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            ya = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            "mousedown" === b.mouseIsDown && this.drag(a);
            !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX -
                b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a)
        },
        inClass: function(a, b) {
            for (var c; a;) {
                if (c = u(a, "class")) {
                    if (-1 !== c.indexOf(b)) return !0;
                    if (-1 !== c.indexOf("highcharts-container")) return !1
                }
                a = a.parentNode
            }
        },
        onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries,
                c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && c !== b) b.onMouseOut()
        },
        onContainerClick: function(a) {
            var b = this.chart,
                c = b.hoverPoint,
                d = b.plotLeft,
                e = b.plotTop;
            a = this.normalize(a);
            a.cancelBubble = !0;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (Z(c.series, "click", w(a, {
                point: c
            })), b.hoverPoint && c.firePointEvent("click", a)) : (w(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && Z(b, "click", a)))
        },
        setDOMEvents: function() {
            var a = this,
                b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            ba(b, "mouseleave",
                a.onContainerMouseLeave);
            1 === Va && ba(O, "mouseup", a.onDocumentMouseUp);
            Ua && (b.ontouchstart = function(b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function(b) {
                a.onContainerTouchMove(b)
            }, 1 === Va && ba(O, "touchend", a.onDocumentTouchEnd))
        },
        destroy: function() {
            var a;
            la(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            Va || (la(O, "mouseup", this.onDocumentMouseUp), la(O, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    w($.Pointer.prototype, {
        pinchTranslate: function(a,
            b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        },
        pinchTranslateDirection: function(a, b, c, d, e, f, g, h) {
            var k = this.chart,
                m = a ? "x" : "y",
                n = a ? "X" : "Y",
                r = "chart" + n,
                v = a ? "width" : "height",
                t = k["plot" + (a ? "Left" : "Top")],
                z, l, q = h || 1,
                p = k.inverted,
                s = k.bounds[a ? "h" : "v"],
                u = 1 === b.length,
                y = b[0][r],
                x = c[0][r],
                A = !u && b[1][r],
                w = !u && c[1][r],
                L;
            c = function() {
                !u && 20 < X(y - A) && (q = h || X(x - w) / X(y - A));
                l = (t - x) / q + y;
                z = k["plot" +
                    (a ? "Width" : "Height")] / q
            };
            c();
            b = l;
            b < s.min ? (b = s.min, L = !0) : b + z > s.max && (b = s.max - z, L = !0);
            L ? (x -= .8 * (x - g[m][0]), u || (w -= .8 * (w - g[m][1])), c()) : g[m] = [x, w];
            p || (f[m] = l - t, f[v] = z);
            f = p ? 1 / q : q;
            e[v] = z;
            e[m] = b;
            d[p ? a ? "scaleY" : "scaleX" : "scale" + n] = q;
            d["translate" + n] = f * t + (x - f * y)
        },
        pinch: function(a) {
            var b = this,
                c = b.chart,
                d = b.pinchDown,
                e = b.followTouchMove,
                f = a.touches,
                g = f.length,
                h = b.lastValidTouch,
                k = b.hasZoom,
                m = b.selectionMarker,
                n = {},
                r = 1 === g && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick),
                v = {};
            !k && !e || r || a.preventDefault();
            Pa(f, function(a) {
                return b.normalize(a)
            });
            "touchstart" === a.type ? (y(f, function(a, b) {
                d[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                }
            }), h.x = [d[0].chartX, d[1] && d[1].chartX], h.y = [d[0].chartY, d[1] && d[1].chartY], y(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"],
                        d = a.minPixelPadding,
                        e = a.toPixels(l(a.options.min, a.dataMin)),
                        f = a.toPixels(l(a.options.max, a.dataMax)),
                        g = U(e, f),
                        e = F(e, f);
                    b.min = U(a.pos, g - d);
                    b.max = F(a.pos + a.len, e + d)
                }
            }), b.res = !0) : d.length && (m || (b.selectionMarker =
                m = w({
                    destroy: ea
                }, c.plotBox)), b.pinchTranslate(d, f, n, m, v, h), b.hasPinched = k, b.scaleGroups(n, v), !k && e && 1 === g ? this.runPointActions(b.normalize(a)) : b.res && (b.res = !1, this.reset(!1, 0)))
        },
        onContainerTouchStart: function(a) {
            var b = this.chart;
            ya = b.index;
            1 === a.touches.length ? (a = this.normalize(a), b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) ? (this.runPointActions(a), this.pinch(a)) : this.reset()) : 2 === a.touches.length && this.pinch(a)
        },
        onContainerTouchMove: function(a) {
            1 !== a.touches.length && 2 !== a.touches.length ||
                this.pinch(a)
        },
        onDocumentTouchEnd: function(a) {
            ka[ya] && ka[ya].pointer.drop(a)
        }
    });
    if (aa.PointerEvent || aa.MSPointerEvent) {
        var Ba = {},
            nb = !!aa.PointerEvent,
            Xb = function() {
                var a, b = [];
                b.item = function(a) {
                    return this[a]
                };
                for (a in Ba) Ba.hasOwnProperty(a) && b.push({
                    pageX: Ba[a].pageX,
                    pageY: Ba[a].pageY,
                    target: Ba[a].target
                });
                return b
            },
            ob = function(a, b, c, d) {
                a = a.originalEvent || a;
                "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !ka[ya] || (d(a), d = ka[ya].pointer, d[b]({
                    type: c,
                    target: a.currentTarget,
                    preventDefault: ea,
                    touches: Xb()
                }))
            };
        w(Qa.prototype, {
            onContainerPointerDown: function(a) {
                ob(a, "onContainerTouchStart", "touchstart", function(a) {
                    Ba[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        target: a.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(a) {
                ob(a, "onContainerTouchMove", "touchmove", function(a) {
                    Ba[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY
                    };
                    Ba[a.pointerId].target || (Ba[a.pointerId].target = a.currentTarget)
                })
            },
            onDocumentPointerUp: function(a) {
                ob(a, "onContainerTouchEnd", "touchend", function(a) {
                    delete Ba[a.pointerId]
                })
            },
            batchMSEvents: function(a) {
                a(this.chart.container, nb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, nb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(O, nb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        G(Qa.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            (this.hasZoom || this.followTouchMove) && C(b.container, {
                "-ms-touch-action": "none",
                "touch-action": "none"
            })
        });
        G(Qa.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) &&
            this.batchMSEvents(ba)
        });
        G(Qa.prototype, "destroy", function(a) {
            this.batchMSEvents(la);
            a.call(this)
        })
    }
    var eb = $.Legend = function(a, b) {
        this.init(a, b)
    };
    eb.prototype = {
        init: function(a, b) {
            var c = this,
                d = b.itemStyle,
                e = l(b.padding, 8),
                f = b.itemMarginTop || 0;
            this.options = b;
            b.enabled && (c.itemStyle = d, c.itemHiddenStyle = B(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = l(b.symbolWidth, 16), c.pages = [], c.render(),
                ba(c.chart, "endResize", function() {
                    c.positionCheckboxes()
                }))
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.legendColor || a.color || "#CCC" : g,
                g = a.options && a.options.marker,
                k = {
                    fill: h
                },
                m;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker)
                    for (m in k.stroke = h, g = a.convertAttribs(g), g) d = g[m], d !== E && (k[m] = d);
                f.attr(k)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            f && (f.x = e, f.y = d)
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            y(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Ha(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy())
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight;
            b && (c = b.translateY, y(this.allItems, function(e) {
                var f = e.checkbox,
                    g;
                f && (g = c + f.y + (a || 0) + 3, C(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : "none"
                }))
            }))
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
                translateY: c
            }));
            this.titleHeight = c
        },
        renderItem: function(a) {
            var b = this.chart,
                c = b.renderer,
                d = this.options,
                e = "horizontal" === d.layout,
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                k = this.itemHiddenStyle,
                m = this.padding,
                n = e ? l(d.itemDistance, 20) : 0,
                r = !d.rtl,
                v = d.width,
                t = d.itemMarginBottom || 0,
                z = this.itemMarginTop,
                q = this.initialItemX,
                p = a.legendItem,
                s = a.series && a.series.drawLegendSymbol ? a.series : a,
                u = s.options,
                u = this.createCheckboxForItem && u && u.showCheckbox,
                y = d.useHTML;
            p || (a.legendGroup = c.g("legend-item").attr({
                    zIndex: 1
                }).add(this.scrollGroup),
                a.legendItem = p = c.text(d.labelFormat ? H(d.labelFormat, a) : d.labelFormatter.call(a), r ? f + g : -g, this.baseline || 0, y).css(B(a.visible ? h : k)).attr({
                    align: r ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup), this.baseline || (this.baseline = c.fontMetrics(h.fontSize, p).f + 3 + z, p.attr("y", this.baseline)), s.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, p, y, h, k), this.colorizeItem(a, a.visible), u && this.createCheckboxForItem(a));
            c = p.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + n +
                (u ? 20 : 0);
            this.itemHeight = g = K(a.legendItemHeight || c.height);
            e && this.itemX - q + f > (v || b.chartWidth - 2 * m - q - d.x) && (this.itemX = q, this.itemY += z + this.lastLineHeight + t, this.lastLineHeight = 0);
            this.maxItemWidth = F(this.maxItemWidth, f);
            this.lastItemY = z + this.itemY + t;
            this.lastLineHeight = F(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += z + g + t, this.lastLineHeight = g);
            this.offsetWidth = v || F((e ? this.itemX - q - n : f) + m, this.offsetWidth)
        },
        getAllItems: function() {
            var a = [];
            y(this.chart.series,
                function(b) {
                    var c = b.options;
                    l(c.showInLegend, s(c.linkedTo) ? !1 : E, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
                });
            return a
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, k = a.box,
                m = a.options,
                n = a.padding,
                r = m.borderWidth,
                v = m.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            d || (a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup));
            a.renderTitle();
            e = a.getAllItems();
            gb(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            m.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            y(e, function(b) {
                a.renderItem(b)
            });
            g = m.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            if (r || v) g += n, h += n, k ? 0 < g && 0 < h && (k[k.isNew ? "attr" : "animate"](k.crisp({
                width: g,
                height: h
            })), k.isNew = !1) : (a.box = k = c.rect(0, 0, g, h, m.borderRadius, r || 0).attr({
                stroke: m.borderColor,
                "stroke-width": r || 0,
                fill: v ||
                    "none"
            }).add(d).shadow(m.shadow), k.isNew = !0), k[f ? "show" : "hide"]();
            a.legendWidth = g;
            a.legendHeight = h;
            y(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(w({
                width: g,
                height: h
            }, m), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding,
                g = e.maxHeight,
                h, k = this.clipRect,
                m = e.navigation,
                n = l(m.animation, !0),
                r = m.arrowSize || 12,
                v = this.nav,
                t = this.pages,
                z, q = this.allItems;
            "horizontal" === e.layout && (f /= 2);
            g && (f = U(f, g));
            t.length = 0;
            a > f && !e.useHTML ? (this.clipHeight = h = F(f - 20 - this.titleHeight - this.padding, 0), this.currentPage = l(this.currentPage, 1), this.fullHeight = a, y(q, function(a, b) {
                var c = a._legendItemPos[1],
                    d = K(a.legendItem.getBBox().height),
                    e = t.length;
                if (!e || c - t[e - 1] > h && (z || c) !== t[e - 1]) t.push(z || c), e++;
                b === q.length - 1 && c + d - t[e - 1] > h && t.push(c);
                c !== z && (z = c)
            }), k || (k = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(k)), k.attr({
                height: h
            }), v || (this.nav = v = d.g().attr({
                    zIndex: 1
                }).add(this.group),
                this.up = d.symbol("triangle", 0, 0, r, r).on("click", function() {
                    b.scroll(-1, n)
                }).add(v), this.pager = d.text("", 15, 10).css(m.style).add(v), this.down = d.symbol("triangle-down", 0, 0, r, r).on("click", function() {
                    b.scroll(1, n)
                }).add(v)), b.scroll(0), a = f) : v && (k.attr({
                height: c.chartHeight
            }), v.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0);
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                k = this.pager,
                m = this.padding;
            e > d && (e = d);
            0 < e && (b !== E && (ua = l(b, this.chart.animation)), this.nav.attr({
                translateX: m,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: 1 === e ? g : h
            }).css({
                cursor: 1 === e ? "default" : "pointer"
            }), k.attr({
                text: e + "/" + d
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({
                cursor: e === d ? "default" : "pointer"
            }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: c
            }), this.currentPage = e, this.positionCheckboxes(c))
        }
    };
    var Ya = $.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || 12;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b = this.options,
                c = b.marker,
                d;
            d = a.symbolWidth;
            var e = this.chart.renderer,
                f = this.legendGroup;
            a = a.baseline - K(.3 * e.fontMetrics(a.options.itemStyle.fontSize, this.legendItem).b);
            var g;
            b.lineWidth && (g = {
                    "stroke-width": b.lineWidth
                }, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine =
                e.path(["M", 0, a, "L", d, a]).attr(g).add(f));
            c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0)
        }
    };
    (/Trident\/7\.0/.test(Ea) || Ma) && G(eb.prototype, "positionItem", function(a, b) {
        var c = this,
            d = function() {
                b._legendItemPos && a.call(c, b)
            };
        d();
        setTimeout(d)
    });
    Da.prototype = {
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = B(ga, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing",
                d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this,
                g;
            f.index = ka.length;
            ka.push(f);
            Va++;
            !1 !== d.reflow && ba(f, "load", function() {
                f.initReflow()
            });
            if (e)
                for (g in e) ba(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ra ? !1 : l(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = M[a.type || b.type || b.defaultSeriesType]) || va(17, !0);
            b = new b;
            b.init(this, a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        },
        adjustTickAmounts: function() {
            !1 !== this.options.chart.alignTicks && y(this.axes, function(a) {
                a.adjustTickAmount()
            });
            this.maxTicks = null
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, k = this.hasCartesianSeries,
                m = this.isDirtyBox,
                n = c.length,
                r = n,
                v = this.renderer,
                t = v.isHidden(),
                z = [];
            ua = l(a, this.animation);
            t && this.cloneRenderTo();
            for (this.layOutTitles(); r--;)
                if (a = c[r], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (r = n; r--;) a = c[r], a.options.stacking && (a.isDirty = !0);
            y(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (f = !0)
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g && this.getStacks();
            k && (this.isResizing || (this.maxTicks = null, y(b, function(a) {
                a.setScale()
            })), this.adjustTickAmounts());
            this.getMargins();
            k && (y(b, function(a) {
                a.isDirty && (m = !0)
            }), y(b, function(a) {
                a.isDirtyExtremes && (a.isDirtyExtremes = !1, z.push(function() {
                    Z(a, "afterSetExtremes", w(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                }));
                (m || g) && a.redraw()
            }));
            m && this.drawChartBox();
            y(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            v.draw();
            Z(this, "redraw");
            t && this.cloneRenderTo(!0);
            y(z, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++)
                for (e =
                    c[d].points || [], b = 0; b < e.length; b++)
                    if (e[b].id === a) return e[b];
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = P(b.xAxis || {}),
                b = b.yAxis = P(b.yAxis || {});
            y(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            y(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            y(c, function(b) {
                new Y(a, b)
            });
            a.adjustTickAmounts()
        },
        getSelectedPoints: function() {
            var a = [];
            y(this.series, function(b) {
                a = a.concat(Db(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return Db(this.series, function(a) {
                return a.selected
            })
        },
        getStacks: function() {
            var a = this;
            y(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            });
            y(a.series, function(b) {
                !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type + l(b.options.stack, ""))
            })
        },
        setTitle: function(a, b, c) {
            var d = this,
                e = d.options,
                f;
            f = e.title = B(e.title, a);
            e = e.subtitle = B(e.subtitle, b);
            y([
                ["title", a, f],
                ["subtitle", b, e]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1];
                a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text,
                    0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.renderer,
                h = this.spacingBox.width - 44;
            c && (c.css({
                width: (f.width || h) + "px"
            }).align(w({
                y: g.fontMetrics(f.style.fontSize, c).b - 3
            }, f), !1, "spacingBox"), f.floating || f.verticalAlign || (b = c.getBBox().height));
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(w({
                y: b + (f.margin - 13) + g.fontMetrics(f.style.fontSize,
                    d).b
            }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = La(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && l(a, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            s(b) || (this.containerWidth = db(c, "width"));
            s(a) || (this.containerHeight = db(c, "height"));
            this.chartWidth = F(0, b || this.containerWidth || 600);
            this.chartHeight = F(0, l(a, 19 < this.containerHeight ?
                this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Ha(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), C(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), O.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options.chart,
                c,
                d, e;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + ib++;
            V(a) && (this.renderTo = a = O.getElementById(a));
            a || va(13, !0);
            c = D(u(a, "data-highcharts-chart"));
            !isNaN(c) && ka[c] && ka[c].hasRendered && ka[c].destroy();
            u(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            b.skipClone || a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = S("div", {
                className: "highcharts-container" + (b.className ? " " + b.className : ""),
                id: e
            }, w({
                position: "relative",
                overflow: "hidden",
                width: c +
                    "px",
                height: d + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, b.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = b.forExport ? new Aa(a, c, d, b.style, !0) : new Ta(a, c, d, b.style);
            ra && this.renderer.create(this, a, c, d)
        },
        getMargins: function() {
            var a = this.spacing,
                b, c = this.legend,
                d = this.margin,
                e = this.options.legend,
                f = l(e.margin, 20),
                g = e.x,
                h = e.y,
                k = e.align,
                m = e.verticalAlign,
                n = this.titleOffset;
            this.resetMargins();
            b = this.axisOffset;
            n && !s(d[0]) &&
                (this.plotTop = F(this.plotTop, n + this.options.title.margin + a[0]));
            c.display && !e.floating && ("right" === k ? s(d[1]) || (this.marginRight = F(this.marginRight, c.legendWidth - g + f + a[1])) : "left" === k ? s(d[3]) || (this.plotLeft = F(this.plotLeft, c.legendWidth + g + f + a[3])) : "top" === m ? s(d[0]) || (this.plotTop = F(this.plotTop, c.legendHeight + h + f + a[0])) : "bottom" !== m || s(d[2]) || (this.marginBottom = F(this.marginBottom, c.legendHeight - h + f + a[2])));
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop +=
                this.extraTopMargin);
            this.hasCartesianSeries && y(this.axes, function(a) {
                a.getOffset()
            });
            s(d[3]) || (this.plotLeft += b[3]);
            s(d[0]) || (this.plotTop += b[0]);
            s(d[2]) || (this.marginBottom += b[2]);
            s(d[1]) || (this.marginRight += b[1]);
            this.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || db(d, "width"),
                f = c.height || db(d, "height"),
                c = a ? a.target : aa,
                d = function() {
                    b.container && (b.setSize(e, f, !1), b.hasUserSize = null)
                };
            if (!b.hasUserSize && e && f && (c === aa || c === O)) {
                if (e !== b.containerWidth || f !==
                    b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight = f
            }
        },
        initReflow: function() {
            var a = this,
                b = function(b) {
                    a.reflow(b)
                };
            ba(aa, "resize", b);
            ba(a, "destroy", function() {
                la(aa, "resize", b)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g;
            d.isResizing += 1;
            g = function() {
                d && Z(d, "endResize", null, function() {
                    d.isResizing -= 1
                })
            };
            ua = l(c, d.animation);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            s(a) && (d.chartWidth = e = F(0, K(a)), d.hasUserSize = !!e);
            s(b) && (d.chartHeight = f = F(0, K(b)));
            (ua ? Eb : C)(d.container, {
                width: e + "px",
                height: f + "px"
            }, ua);
            d.setChartSize(!0);
            d.renderer.setSize(e, f, c);
            d.maxTicks = null;
            y(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            y(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            Z(d, "resize");
            !1 === ua ? g() : setTimeout(g, ua && ua.duration || 500)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                k, m, n, r;
            this.plotLeft = k = K(this.plotLeft);
            this.plotTop = m = K(this.plotTop);
            this.plotWidth = n = F(0, K(d - k - this.marginRight));
            this.plotHeight = r = F(0, K(e - m - this.marginBottom));
            this.plotSizeX = b ? r : n;
            this.plotSizeY = b ? n : r;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: k,
                y: m,
                width: n,
                height: r
            };
            d = 2 * ha(this.plotBorderWidth / 2);
            b = La(F(d, h[3]) / 2);
            c = La(F(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: ha(this.plotSizeX - F(d, h[1]) / 2 - b),
                height: F(0, ha(this.plotSizeY - F(d, h[2]) / 2 - c))
            };
            a || y(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a = this.spacing,
                b = this.margin;
            this.plotTop = l(b[0], a[0]);
            this.marginRight = l(b[1], a[1]);
            this.marginBottom = l(b[2], a[2]);
            this.plotLeft = l(b[3], a[3]);
            this.axisOffset = [0, 0, 0, 0];
            this.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                k = a.borderWidth || 0,
                m = a.backgroundColor,
                n = a.plotBackgroundColor,
                r = a.plotBackgroundImage,
                v = a.plotBorderWidth || 0,
                t, z = this.plotLeft,
                l = this.plotTop,
                q = this.plotWidth,
                p = this.plotHeight,
                s = this.plotBox,
                u = this.clipRect,
                y = this.clipBox;
            t = k + (a.shadow ? 8 : 0);
            if (k || m) e ? e.animate(e.crisp({
                width: c - t,
                height: d - t
            })) : (e = {
                fill: m || "none"
            }, k && (e.stroke = a.borderColor, e["stroke-width"] = k), this.chartBackground = b.rect(t / 2, t / 2, c - t, d - t, a.borderRadius,
                k).attr(e).addClass("highcharts-background").add().shadow(a.shadow));
            n && (f ? f.animate(s) : this.plotBackground = b.rect(z, l, q, p, 0).attr({
                fill: n
            }).add().shadow(a.plotShadow));
            r && (h ? h.animate(s) : this.plotBGImage = b.image(r, z, l, q, p).add());
            u ? u.animate({
                width: y.width,
                height: y.height
            }) : this.clipRect = b.clipRect(y);
            v && (g ? g.animate(g.crisp({
                x: z,
                y: l,
                width: q,
                height: p,
                strokeWidth: -v
            })) : this.plotBorder = b.rect(z, l, q, p, 0, -v).attr({
                stroke: a.plotBorderColor,
                "stroke-width": v,
                fill: "none",
                zIndex: 1
            }).add());
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            y(["inverted", "angular", "polar"], function(g) {
                c = M[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = M[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a = this,
                b = a.series;
            y(b, function(a) {
                a.linkedSeries.length = 0
            });
            y(b, function(b) {
                var d = b.options.linkedTo;
                V(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent = d)
            })
        },
        renderSeries: function() {
            y(this.series,
                function(a) {
                    a.translate();
                    a.setTooltipPoints && a.setTooltipPoints();
                    a.render()
                })
        },
        renderLabels: function() {
            var a = this,
                b = a.options.labels;
            b.items && y(b.items, function(c) {
                var d = w(b.style, c.style),
                    e = D(d.left) + a.plotLeft,
                    f = D(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add()
            })
        },
        render: function() {
            var a = this.axes,
                b = this.renderer,
                c = this.options;
            this.setTitle();
            this.legend = new eb(this, c.legend);
            this.getStacks();
            y(a, function(a) {
                a.setScale()
            });
            this.getMargins();
            this.maxTicks = null;
            y(a, function(a) {
                a.setTickPositions(!0);
                a.setMaxTicks()
            });
            this.adjustTickAmounts();
            this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && y(a, function(a) {
                a.render()
            });
            this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add());
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        },
        showCredits: function(a) {
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                a.href && (location.href =
                    a.href)
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position))
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            Z(a, "destroy");
            ka[a.index] = E;
            Va--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            la(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            y("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "),
                function(b) {
                    var c = a[b];
                    c && c.destroy && (a[b] = c.destroy())
                });
            d && (d.innerHTML = "", la(d), f && Ha(d));
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !oa && aa == aa.top && "complete" !== O.readyState || ra && !aa.canvg ? (ra ? Hb.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : O.attachEvent("onreadystatechange", function() {
                O.detachEvent("onreadystatechange", a.firstRender);
                "complete" === O.readyState && a.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options,
                c = a.callback;
            a.isReadyToRender() &&
                (a.getContainer(), Z(a, "init"), a.resetMargins(), a.setChartSize(), a.propFromSeries(), a.getAxes(), y(b.series || [], function(b) {
                    a.initSeries(b)
                }), a.linkSeries(), Z(a, "beforeRender"), $.Pointer && (a.pointer = new Qa(a, b)), a.render(), a.renderer.draw(), c && c.apply(a, [a]), y(a.callbacks, function(b) {
                    b.apply(a, [a])
                }), a.cloneRenderTo(!0), Z(a, "load"))
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = N(c) ? c : [c, c, c, c];
            return [l(b[a + "Top"], c[0]), l(b[a + "Right"], c[1]), l(b[a + "Bottom"], c[2]), l(b[a + "Left"], c[3])]
        }
    };
    Da.prototype.callbacks = [];
    var Jb = $.CenteredSeriesMixin = {
            getCenter: function() {
                var a = this.options,
                    b = this.chart,
                    c = 2 * (a.slicedOffset || 0),
                    d, e = b.plotWidth - 2 * c,
                    f = b.plotHeight - 2 * c,
                    b = a.center,
                    a = [l(b[0], "50%"), l(b[1], "50%"), a.size || "100%", a.innerSize || 0],
                    g = U(e, f),
                    h;
                return Pa(a, function(a, b) {
                    h = /%$/.test(a);
                    d = 2 > b || 2 === b && h;
                    return (h ? [e, f, g, g][b] * D(a) / 100 : a) + (d ? c : 0)
                })
            }
        },
        Ca = function() {};
    Ca.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors,
                this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0));
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = c.options.pointValKey || c.pointValKey;
            a = Ca.prototype.optionsToObject.call(this, a);
            w(this, a);
            this.options = this.options ? w(this.options, a) : a;
            d && (this.y = this[d]);
            this.x === E && c && (this.x = b === E ? c.autoIncrement() : b);
            return this
        },
        optionsToObject: function(a) {
            var b = {},
                c = this.series,
                d = c.pointArrayMap || ["y"],
                e = d.length,
                f = 0,
                g = 0;
            if ("number" === typeof a ||
                null === a) b[d[0]] = a;
            else if (fa(a))
                for (a.length > e && (c = typeof a[0], "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]), f++); g < e;) b[d[g++]] = a[f++];
            else "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0));
            return b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            b && (this.setState(), A(b, this), b.length || (a.hoverPoints = null));
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) la(this), this.destroyElements();
            this.legendItem &&
                a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = "graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "), b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = l(c.valueDecimals, ""),
                e = c.valuePrefix ||
                "",
                f = c.valueSuffix || "";
            y(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return H(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            "click" === a && e.allowPointSelect && (c = function(a) {
                d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            Z(this, a, b, c)
        }
    };
    var Q = function() {};
    Q.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Ca,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(a, b) {
            var c = this,
                d, e, f = a.series,
                g = function(a, b) {
                    return l(a.options.index, a._i) - l(b.options.index, b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            w(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: !1 !== b.visible,
                selected: !0 === b.selected
            });
            ra && (b.animation = !1);
            e = b.events;
            for (d in e) ba(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            y(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            c.isCartesian && (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            gb(f, g);
            this.yAxis && gb(this.yAxis.series, g);
            y(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            y(a.axisTypes || [], function(e) {
                y(c[e],
                    function(c) {
                        d = c.options;
                        if (b[e] === d.index || b[e] !== E && b[e] === d.id || b[e] === E && 0 === d.index) c.series.push(a), a[e] = c, c.isDirty = !0
                    });
                a[e] || a.optionalAxis === e || va(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments;
            y(c.parallelArrays, "number" === typeof b ? function(d) {
                var f = "y" === d && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                b = l(b, a.pointStart,
                    0);
            this.pointInterval = l(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        },
        getSegments: function() {
            var a = -1,
                b = [],
                c, d = this.points,
                e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--;) null === d[c].y && d.splice(c, 1);
                    d.length && (b = [d])
                } else y(d, function(c, g) {
                    null === c.y ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                });
            this.segments = b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {},
                d = b.plotOptions || {},
                e = c[this.type];
            this.userOptions = a;
            c = B(e, c.series, a);
            this.tooltipOptions = B(ga.tooltip, ga.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            return c
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions,
                e = "_" + a + "Index",
                f = a + "Counter";
            b || (s(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function() {
            this.options.colorByPoint || this.getCyclic("color", this.options.color || R[this.type].color,
                this.chart.options.colors)
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            /^url/.test(this.symbol) && (a.radius = 0)
        },
        drawLegendSymbol: Ya.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length || 0,
                h, k = e.options,
                m = e.chart,
                n = null,
                r = e.xAxis,
                v = r && !!r.categories,
                t = e.tooltipPoints,
                z = k.turboThreshold,
                p = this.xData,
                s = this.yData,
                u = (h = e.pointArrayMap) && h.length;
            a = a || [];
            h = a.length;
            b = l(b, !0);
            if (!1 === d || !h || g !== h || e.cropped || e.hasGroupedData) {
                e.xIncrement =
                    null;
                e.pointRange = v ? 1 : k.pointRange;
                e.colorCounter = 0;
                y(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (z && h > z) {
                    for (c = 0; null === n && c < h;) n = a[c], c++;
                    if (q(n)) {
                        v = l(k.pointStart, 0);
                        k = l(k.pointInterval, 1);
                        for (c = 0; c < h; c++) p[c] = v, s[c] = a[c], v += k;
                        e.xIncrement = v
                    } else if (fa(n))
                        if (u)
                            for (c = 0; c < h; c++) k = a[c], p[c] = k[0], s[c] = k.slice(1, u + 1);
                        else
                            for (c = 0; c < h; c++) k = a[c], p[c] = k[0], s[c] = k[1];
                    else va(12)
                } else
                    for (c = 0; c < h; c++) a[c] !== E && (k = {
                        series: e
                    }, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k,
                        c), v && k.name && (r.names[k.x] = k.name));
                V(s[0]) && va(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy();
                t && (t.length = 0);
                r && (r.minRange = r.userMinRange);
                e.isDirty = e.isDirtyData = m.isDirtyBox = !0;
                c = !1
            } else y(a, function(a, b) {
                f[b].update(a, !1, null, !1)
            });
            b && m.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                k, m = this.options;
            k = m.cropThreshold;
            var n = 0,
                r = this.isCartesian,
                v, t;
            if (r && !this.isDirty && !h.isDirty && !this.yAxis.isDirty &&
                !a) return !1;
            h && (v = h.getExtremes(), t = v.min, v = v.max);
            if (r && this.sorted && (!k || d > k || this.forceCrop))
                if (b[d - 1] < t || b[0] > v) b = [], c = [];
                else if (b[0] < t || b[d - 1] > v) e = this.cropData(this.xData, this.yData, t, v), b = e.xData, c = e.yData, e = e.start, f = !0, n = b.length;
            for (k = b.length - 1; 0 <= k; k--) d = b[k] - b[k - 1], !f && b[k] > t && b[k] < v && n++, 0 < d && (g === E || d < g) ? g = d : 0 > d && this.requireSorting && va(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.activePointCount = n;
            null === m.pointRange && (this.pointRange = g || 1);
            this.closestPointRange = g
        },
        cropData: function(a, b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = l(this.cropShoulder, 1),
                k;
            for (k = 0; k < e; k++)
                if (a[k] >= c) {
                    f = F(0, k - h);
                    break
                }
            for (; k < e; k++)
                if (a[k] > d) {
                    g = k + h;
                    break
                }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                k, m = this.hasGroupedData,
                n, r = [],
                v;
            b || m || (b = [], b.length = a.length, b = this.data = b);
            for (v = 0; v < g; v++) k = h + v,
                m ? r[v] = (new f).init(this, [d[v]].concat(P(e[v]))) : (b[k] ? n = b[k] : a[k] !== E && (b[k] = n = (new f).init(this, a[k], d[v])), r[v] = n), r[v].index = k;
            if (b && (g !== (c = b.length) || m))
                for (v = 0; v < c; v++) v !== h || m || (v += g), b[v] && (b[v].destroyElements(), b[v].plotX = E);
            this.data = b;
            this.points = r
        },
        getExtremes: function(a) {
            var b = this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                k, m, n, r;
            a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (r = 0; r < d; r++)
                if (m = c[r], n = a[r], k = null !== n && n !== E && (!b.isLog ||
                        n.length || 0 < n), m = this.getExtremesFromAll || this.cropped || (c[r + 1] || m) >= g && (c[r - 1] || m) <= h, k && m)
                    if (k = n.length)
                        for (; k--;) null !== n[k] && (e[f++] = n[k]);
                    else e[f++] = n;
            this.dataMin = l(void 0, ta(e));
            this.dataMax = l(void 0, pa(e))
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, k = a.pointPlacement, m = "between" === k || q(k), n = a.threshold, a = 0; a < g; a++) {
                var r = f[a],
                    v = r.x,
                    t = r.y,
                    z = r.low,
                    p = b && e.stacks[(this.negStacks && t < n ? "-" : "") + this.stackKey];
                e.isLog && 0 >= t && (r.y = t = null, va(10));
                r.plotX = c.translate(v, 0, 0, 0, 1, k, "flags" === this.type);
                b && this.visible && p && p[v] && (p = p[v], t = p.points[this.index + "," + a], z = t[0], t = t[1], 0 === z && (z = l(n, e.min)), e.isLog && 0 >= z && (z = null), r.total = r.stackTotal = p.total, r.percentage = p.total && r.y / p.total * 100, r.stackY = t, p.setOffset(this.pointXOffset || 0, this.barW || 0));
                r.yBottom = s(z) ? e.translate(z, 0, 1, 0, 1) : null;
                h && (t = this.modifyValue(t, r));
                r.plotY = "number" ===
                    typeof t && Infinity !== t ? e.translate(t, 0, 1, 0, 1) : E;
                r.clientX = m ? c.translate(v, 0, 0, 0, 1) : r.plotX;
                r.negative = r.y < (n || 0);
                r.category = d && d[r.x] !== E ? d[r.x] : r.x
            }
            this.getSegments()
        },
        animate: function(a) {
            var b = this.chart,
                c = b.renderer,
                d;
            d = this.options.animation;
            var e = this.clipBox || b.clipBox,
                f = b.inverted,
                g;
            d && !N(d) && (d = R[this.type].animation);
            g = ["_sharedClip", d.duration, d.easing, e.height].join();
            a ? (a = b[g], d = b[g + "m"], a || (b[g] = a = c.clipRect(w(e, {
                width: 0
            })), b[g + "m"] = d = c.clipRect(-99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth :
                b.chartHeight)), this.group.clip(a), this.markerGroup.clip(d), this.sharedClipKey = g) : ((a = b[g]) && a.animate({
                width: b.plotSizeX
            }, d), b[g + "m"] && b[g + "m"].animate({
                width: b.plotSizeX + 99
            }, d), this.animate = null)
        },
        afterAnimate: function() {
            var a = this.chart,
                b = this.sharedClipKey,
                c = this.group,
                d = this.clipBox;
            c && !1 !== this.options.clip && (b && d || c.clip(d ? a.renderer.clipRect(d) : a.clipRect), this.markerGroup.clip());
            Z(this, "afterAnimate");
            setTimeout(function() {
                    b && a[b] && (d || (a[b] = a[b].destroy()), a[b + "m"] && (a[b + "m"] = a[b + "m"].destroy()))
                },
                100)
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, k, m, n, r = this.options.marker,
                v = this.pointAttr[""],
                t, z, p, q = this.markerGroup,
                s = l(r.enabled, !this.requireSorting || this.activePointCount < .5 * this.xAxis.len / r.radius);
            if (!1 !== r.enabled || this._hasPointMarkers)
                for (f = b.length; f--;) g = b[f], d = ha(g.plotX), e = g.plotY, n = g.graphic, t = g.marker || {}, z = !!g.marker, a = s && t.enabled === E || t.enabled, p = c.isInsidePlot(K(d), e, c.inverted), a && e !== E && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] ||
                    v, h = a.r, k = l(t.symbol, this.symbol), m = 0 === k.indexOf("url"), n ? n[p ? "show" : "hide"](!0).animate(w({
                        x: d - h,
                        y: e - h
                    }, n.symbolName ? {
                        width: 2 * h,
                        height: 2 * h
                    } : {})) : p && (0 < h || m) && (g.graphic = c.renderer.symbol(k, d - h, e - h, 2 * h, 2 * h, z ? t : r).attr(a).add(q))) : n && (g.graphic = n.destroy())
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) g = e[f], h[f] = l(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = R[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color;
            f = {
                stroke: g,
                fill: g
            };
            var h = a.points || [],
                k, m = [],
                n, r = a.pointAttrToOptions;
            n = a.hasPointSpecificOptions;
            var v = b.negativeColor,
                t = c.lineColor,
                l = c.fillColor;
            k = b.turboThreshold;
            var p;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : e.color = e.color || za(e.color || g).brighten(e.brightness).get();
            m[""] = a.convertAttribs(c, f);
            y(["hover", "select"], function(b) {
                m[b] = a.convertAttribs(d[b], m[""])
            });
            a.pointAttr = m;
            g = h.length;
            if (!k || g < k || n)
                for (; g--;) {
                    k =
                        h[g];
                    (c = k.options && k.options.marker || k.options) && !1 === c.enabled && (c.radius = 0);
                    k.negative && v && (k.color = k.fillColor = v);
                    n = b.colorByPoint || k.color;
                    if (k.options)
                        for (p in r) s(c[r[p]]) && (n = !0);
                    n ? (c = c || {}, n = [], d = c.states || {}, f = d.hover = d.hover || {}, b.marker || (f.color = f.color || !k.options.color && e.color || za(k.color).brighten(f.brightness || e.brightness).get()), f = {
                            color: k.color
                        }, l || (f.fillColor = k.color), t || (f.lineColor = k.color), n[""] = a.convertAttribs(w(f, c), m[""]), n.hover = a.convertAttribs(d.hover, m.hover, n[""]),
                        n.select = a.convertAttribs(d.select, m.select, n[""])) : n = m;
                    k.pointAttr = n
                }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(Ea),
                d, e, f = a.data || [],
                g, h, k;
            Z(a, "destroy");
            la(a);
            y(a.axisTypes || [], function(b) {
                if (k = a[b]) A(k.series, a), k.isDirty = k.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (e = f.length; e--;)(g = f[e]) && g.destroy && g.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            y("area graph dataLabelsGroup group markerGroup tracker graphNeg areaNeg posClip negClip".split(" "),
                function(b) {
                    a[b] && (d = c && "group" === b ? "hide" : "destroy", a[b][d]())
                });
            b.hoverSeries === a && (b.hoverSeries = null);
            A(b.series, a);
            for (h in a) delete a[h]
        },
        getSegmentPath: function(a) {
            var b = this,
                c = [],
                d = b.options.step;
            y(a, function(e, f) {
                var g = e.plotX,
                    h = e.plotY,
                    k;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (k = a[f - 1], "right" === d ? c.push(k.plotX, h) : "center" === d ? c.push((k.plotX + g) / 2, k.plotY, (k.plotX + g) / 2, h) : c.push(g, k.plotY)), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function() {
            var a =
                this,
                b = [],
                c, d = [];
            y(a.segments, function(e) {
                c = a.getSegmentPath(e);
                1 < e.length ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color]
                ],
                d = b.lineWidth,
                e = b.dashStyle,
                f = "square" !== b.linecap,
                g = this.getGraphPath(),
                h = b.negativeColor;
            h && c.push(["graphNeg", h]);
            y(c, function(c, h) {
                var n = c[0],
                    r = a[n];
                r ? (Wa(r), r.animate({
                    d: g
                })) : d && g.length && (r = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: "none",
                    zIndex: 1
                }, e ? r.dashstyle = e : f && (r["stroke-linecap"] =
                    r["stroke-linejoin"] = "round"), a[n] = a.chart.renderer.path(g).attr(r).add(a.group).shadow(!h && b.shadow))
            })
        },
        clipNeg: function() {
            var a = this.options,
                b = this.chart,
                c = b.renderer,
                d = a.negativeColor || a.negativeFillColor,
                e, f = this.graph,
                g = this.area,
                h = this.posClip,
                k = this.negClip;
            e = b.chartWidth;
            var m = b.chartHeight,
                n = F(e, m),
                r = this.yAxis;
            d && (f || g) && (d = K(r.toPixels(a.threshold || 0, !0)), 0 > d && (n -= d), a = {
                x: 0,
                y: 0,
                width: n,
                height: d
            }, n = {
                x: 0,
                y: d,
                width: n,
                height: n
            }, b.inverted && (a.height = n.y = b.plotWidth - d, c.isVML && (a = {
                x: b.plotWidth -
                    d - b.plotLeft,
                y: 0,
                width: e,
                height: m
            }, n = {
                x: d + b.plotLeft - e,
                y: 0,
                width: b.plotLeft + d,
                height: e
            })), r.reversed ? (b = n, e = a) : (b = a, e = n), h ? (h.animate(b), k.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = k = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(k)), g && (g.clip(h), this.areaNeg.clip(k))))
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                y(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this,
                c = b.chart;
            b.xAxis && (ba(c, "resize", a), ba(b,
                "destroy",
                function() {
                    la(c, "resize", a)
                }), a(), b.invertGroups = a)
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                visibility: c,
                zIndex: d || .1
            }).add(e));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            a.inverted && (b = c, c = this.xAxis);
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = (c = d.animation) && !!a.animate &&
                b.renderer.isSVG && l(c.duration, 500) || 0,
                f = a.visible ? "visible" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                k = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, k);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, k);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.clipNeg());
            y(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            b.inverted &&
                a.invertGroups();
            !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect);
            e && a.animate();
            h || (e ? a.animationTimeout = setTimeout(function() {
                a.afterAnimate()
            }, e) : a.afterAnimate());
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.group,
                d = this.xAxis,
                e = this.yAxis;
            c && (a.inverted && c.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), c.animate({
                translateX: l(d && d.left, a.plotLeft),
                translateY: l(e && e.top, a.plotTop)
            }));
            this.translate();
            this.setTooltipPoints && this.setTooltipPoints(!0);
            this.render();
            b && Z(this, "updatedData")
        }
    };
    ja.prototype = {
        destroy: function() {
            wa(this, this.axis)
        },
        render: function(a) {
            var b = this.options,
                c = b.format,
                c = c ? H(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: c,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: "hidden"
            }).add(a)
        },
        setOffset: function(a, b) {
            var c = this.axis,
                d = c.chart,
                e = d.inverted,
                f = this.isNegative,
                g = c.translate(c.usePercentage ?
                    100 : this.total, 0, 0, 0, 1),
                c = c.translate(0),
                c = X(g - c),
                h = d.xAxis[0].translate(this.x) + a,
                k = d.plotHeight,
                f = {
                    x: e ? f ? g : g - c : h,
                    y: e ? k - h - b : f ? k - g - c : k - g,
                    width: e ? c : b,
                    height: e ? b : c
                };
            if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e[!1 === this.options.crop || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0)
        }
    };
    Y.prototype.buildStacks = function() {
        var a = this.series,
            b = l(this.options.reversedStacks, !0),
            c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--;) a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage)
                for (c =
                    0; c < a.length; c++) a[c].setPercentStacks()
        }
    };
    Y.prototype.renderStackTotals = function() {
        var a = this.chart,
            b = a.renderer,
            c = this.stacks,
            d, e, f = this.stackTotalGroup;
        f || (this.stackTotalGroup = f = b.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add());
        f.translate(a.plotLeft, a.plotTop);
        for (d in c)
            for (e in a = c[d], a) a[e].render(f)
    };
    Q.prototype.setStackedPoints = function() {
        if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
            var a = this.processedXData,
                b = this.processedYData,
                c = [],
                d = b.length,
                e = this.options,
                f = e.threshold,
                g = e.stack,
                e = e.stacking,
                h = this.stackKey,
                k = "-" + h,
                m = this.negStacks,
                n = this.yAxis,
                r = n.stacks,
                v = n.oldStacks,
                t, l, p, q, s, u;
            for (q = 0; q < d; q++) s = a[q], u = b[q], p = this.index + "," + q, l = (t = m && u < f) ? k : h, r[l] || (r[l] = {}), r[l][s] || (v[l] && v[l][s] ? (r[l][s] = v[l][s], r[l][s].total = null) : r[l][s] = new ja(n, n.options.stackLabels, t, s, g)), l = r[l][s], l.points[p] = [l.cum || 0], "percent" === e ? (t = t ? h : k, m && r[t] && r[t][s] ? (t = r[t][s], l.total = t.total = F(t.total, l.total) + X(u) || 0) : l.total = da(l.total + (X(u) ||
                0))) : l.total = da(l.total + (u || 0)), l.cum = (l.cum || 0) + (u || 0), l.points[p].push(l.cum), c[q] = l.cum;
            "percent" === e && (n.usePercentage = !0);
            this.stackedYData = c;
            n.oldStacks = {}
        }
    };
    Q.prototype.setPercentStacks = function() {
        var a = this,
            b = a.stackKey,
            c = a.yAxis.stacks,
            d = a.processedXData;
        y([b, "-" + b], function(b) {
            for (var f = d.length, g, h; f--;)
                if (g = d[f], g = (h = c[b] && c[b][g]) && h.points[a.index + "," + f]) h = h.total ? 100 / h.total : 0, g[0] = da(g[0] * h), g[1] = da(g[1] * h), a.stackedYData[f] = g[1]
        })
    };
    var Yb = J(Q);
    M.line = Yb;
    R.area = B(Xa, {
        threshold: 0
    });
    var Kb = J(Q, {
        type: "area",
        getSegments: function() {
            var a = this,
                b = [],
                c = [],
                d = [],
                e = this.xAxis,
                f = this.yAxis,
                g = f.stacks[this.stackKey],
                h = {},
                k, m, n = this.points,
                r = this.options.connectNulls,
                v, l;
            if (this.options.stacking && !this.cropped) {
                for (v = 0; v < n.length; v++) h[n[v].x] = n[v];
                for (l in g) null !== g[l].total && d.push(+l);
                d.sort(function(a, b) {
                    return a - b
                });
                y(d, function(b) {
                    var d = 0,
                        n;
                    if (!r || h[b] && null !== h[b].y)
                        if (h[b]) c.push(h[b]);
                        else {
                            for (v = a.index; v <= f.series.length; v++)
                                if (n = g[b].points[v + "," + b]) {
                                    d = n[1];
                                    break
                                }
                            k = e.translate(b);
                            m = f.toPixels(d, !0);
                            c.push({
                                y: null,
                                plotX: k,
                                clientX: k,
                                plotY: m,
                                yBottom: m,
                                onMouseOver: ea
                            })
                        }
                });
                c.length && b.push(c)
            } else Q.prototype.getSegments.call(this), b = this.segments;
            this.segments = b
        },
        getSegmentPath: function(a) {
            var b = Q.prototype.getSegmentPath.call(this, a),
                c = [].concat(b),
                d, e = this.options;
            d = b.length;
            var f = this.yAxis.getThreshold(e.threshold),
                g;
            3 === d && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks)
                for (d = a.length - 1; 0 <= d; d--) g = l(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX,
                    g);
            else this.closeSegment(c, a, f);
            this.areaPath = this.areaPath.concat(c);
            return b
        },
        closeSegment: function(a, b, c) {
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c)
        },
        drawGraph: function() {
            this.areaPath = [];
            Q.prototype.drawGraph.apply(this);
            var a = this,
                b = this.areaPath,
                c = this.options,
                d = c.negativeColor,
                e = c.negativeFillColor,
                f = [
                    ["area", this.color, c.fillColor]
                ];
            (d || e) && f.push(["areaNeg", d, e]);
            y(f, function(d) {
                var e = d[0],
                    f = a[e];
                f ? f.animate({
                    d: b
                }) : a[e] = a.chart.renderer.path(b).attr({
                    fill: l(d[2], za(d[1]).setOpacity(l(c.fillOpacity,
                        .75)).get()),
                    zIndex: 0
                }).add(a.group)
            })
        },
        drawLegendSymbol: Ya.drawRectangle
    });
    M.area = Kb;
    R.spline = B(Xa);
    var Lb = J(Q, {
        type: "spline",
        getPointSpline: function(a, b, c) {
            var d = b.plotX,
                e = b.plotY,
                f = a[c - 1],
                g = a[c + 1],
                h, k, m, n;
            if (f && g) {
                a = f.plotY;
                m = g.plotX;
                var g = g.plotY,
                    r;
                h = (1.5 * d + f.plotX) / 2.5;
                k = (1.5 * e + a) / 2.5;
                m = (1.5 * d + m) / 2.5;
                n = (1.5 * e + g) / 2.5;
                r = (n - k) * (m - d) / (m - h) + e - n;
                k += r;
                n += r;
                k > a && k > e ? (k = F(a, e), n = 2 * e - k) : k < a && k < e && (k = U(a, e), n = 2 * e - k);
                n > g && n > e ? (n = F(g, e), k = 2 * e - n) : n < g && n < e && (n = U(g, e), k = 2 * e - n);
                b.rightContX = m;
                b.rightContY = n
            }
            c ?
                (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, k || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e];
            return b
        }
    });
    M.spline = Lb;
    R.areaspline = B(R.area);
    var pb = Kb.prototype,
        Zb = J(Lb, {
            type: "areaspline",
            closedStacks: !0,
            getSegmentPath: pb.getSegmentPath,
            closeSegment: pb.closeSegment,
            drawGraph: pb.drawGraph,
            drawLegendSymbol: Ya.drawRectangle
        });
    M.areaspline = Zb;
    R.column = B(Xa, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    var qb = J(Q, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            Q.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && y(b.series, function(b) {
                b.type === a.type &&
                    (b.isDirty = !0)
            })
        },
        getColumnMetrics: function() {
            var a = this,
                b = a.options,
                c = a.xAxis,
                d = a.yAxis,
                e = c.reversed,
                f, g = {},
                h, k = 0;
            !1 === b.grouping ? k = 1 : y(a.chart.series, function(b) {
                var c = b.options,
                    e = b.yAxis;
                b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos && (c.stacking ? (f = b.stackKey, g[f] === E && (g[f] = k++), h = g[f]) : !1 !== c.grouping && (h = k++), b.columnIndex = h)
            });
            var c = U(X(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
                m = c * b.groupPadding,
                n = (c - 2 * m) / k,
                r = b.pointWidth,
                b = s(r) ? (n -
                    r) / 2 : n * b.pointPadding,
                r = l(r, n - 2 * b);
            return a.columnMetrics = {
                width: r,
                offset: b + (m + ((e ? k - (a.columnIndex || 0) : a.columnIndex) || 0) * n - c / 2) * (e ? -1 : 1)
            }
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = a.borderWidth = l(c.borderWidth, a.activePointCount > .5 * a.xAxis.len ? 0 : 1),
                e = a.yAxis,
                f = a.translatedThreshold = e.getThreshold(c.threshold),
                g = l(c.minPointLength, 5),
                h = a.getColumnMetrics(),
                k = h.width,
                m = a.barW = F(k, 1 + 2 * d),
                n = a.pointXOffset = h.offset,
                r = -(d % 2 ? .5 : 0),
                v = d % 2 ? .5 : 1;
            b.renderer.isVML && b.inverted && (v += 1);
            c.pointPadding &&
                (m = La(m));
            Q.prototype.translate.apply(a);
            y(a.points, function(c) {
                var d = l(c.yBottom, f),
                    h = U(F(-999 - d, c.plotY), e.len + 999 + d),
                    p = c.plotX + n,
                    q = m,
                    s = U(h, d),
                    u;
                u = F(h, d) - s;
                X(u) < g && g && (u = g, s = K(X(s - f) > g ? d - g : f - (e.translate(c.y, 0, 1, 0, 1) <= f ? g : 0)));
                c.barX = p;
                c.pointWidth = k;
                c.tooltipPos = b.inverted ? [e.len - h, a.xAxis.len - p - q / 2] : [p + q / 2, h + e.pos - b.plotTop];
                q = K(p + q) + r;
                p = K(p) + r;
                q -= p;
                d = .5 > X(s);
                u = K(s + u) + v;
                s = K(s) + v;
                u -= s;
                d && (s -= 1, u += 1);
                c.shapeType = "rect";
                c.shapeArgs = {
                    x: p,
                    y: s,
                    width: q,
                    height: u
                }
            })
        },
        getSymbol: ea,
        drawLegendSymbol: Ya.drawRectangle,
        drawGraph: ea,
        drawPoints: function() {
            var a = this,
                b = this.chart,
                c = a.options,
                d = b.renderer,
                e = c.animationLimit || 250,
                f, g;
            y(a.points, function(h) {
                var k = h.plotY,
                    m = h.graphic;
                k === E || isNaN(k) || null === h.y ? m && (h.graphic = m.destroy()) : (f = h.shapeArgs, k = s(a.borderWidth) ? {
                    "stroke-width": a.borderWidth
                } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], m ? (Wa(m), m.attr(k)[b.pointCount < e ? "animate" : "attr"](B(f))) : h.graphic = d[h.shapeType](f).attr(g).attr(k).add(a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius))
            })
        },
        animate: function(a) {
            var b = this.yAxis,
                c = this.options,
                d = this.chart.inverted,
                e = {};
            oa && (a ? (e.scaleY = .001, a = U(b.pos + b.len, F(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null))
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && y(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0)
            });
            Q.prototype.remove.apply(a, arguments)
        }
    });
    M.column = qb;
    R.bar = B(R.column);
    var $b = J(qb, {
        type: "bar",
        inverted: !0
    });
    M.bar = $b;
    R.scatter = B(Xa, {
        lineWidth: 0,
        tooltip: {
            headerFormat: '<span style="color:{series.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        },
        stickyTracking: !1
    });
    var Mb = J(Q, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        singularTooltips: !0,
        drawGraph: function() {
            this.options.lineWidth && Q.prototype.drawGraph.call(this)
        }
    });
    M.scatter = Mb;
    R.pie = B(Xa, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.name
            }
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    var rb = {
            type: "pie",
            isCartesian: !1,
            pointClass: J(Ca, {
                init: function() {
                    Ca.prototype.init.apply(this, arguments);
                    var a = this,
                        b;
                    0 > a.y && (a.y = null);
                    w(a, {
                        visible: !1 !== a.visible,
                        name: l(a.name, "Slice")
                    });
                    b = function(b) {
                        a.slice("select" === b.type)
                    };
                    ba(a, "select", b);
                    ba(a, "unselect", b);
                    return a
                },
                setVisible: function(a) {
                    var b = this,
                        c = b.series,
                        d = c.chart;
                    b.visible = b.options.visible = a = a === E ? !b.visible : a;
                    c.options.data[Oa(b, c.data)] = b.options;
                    y(["graphic", "dataLabel", "connector", "shadowGroup"], function(c) {
                        if (b[c]) b[c][a ? "show" : "hide"](!0)
                    });
                    b.legendItem && d.legend.colorizeItem(b, a);
                    !c.isDirty && c.options.ignoreHiddenPoint && (c.isDirty = !0, d.redraw())
                },
                slice: function(a,
                    b, c) {
                    var d = this.series;
                    ua = l(c, d.chart.animation);
                    l(b, !0);
                    this.sliced = this.options.sliced = a = s(a) ? a : !this.sliced;
                    d.options.data[Oa(this, d.data)] = this.options;
                    a = a ? this.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    };
                    this.graphic.animate(a);
                    this.shadowGroup && this.shadowGroup.animate(a)
                },
                haloPath: function(a) {
                    var b = this.shapeArgs,
                        c = this.series.chart;
                    return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                        innerR: this.shapeArgs.r,
                        start: b.start,
                        end: b.end
                    })
                }
            }),
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color"
            },
            singularTooltips: !0,
            getColor: ea,
            animate: function(a) {
                var b = this,
                    c = b.points,
                    d = b.startAngleRad;
                a || (y(c, function(a) {
                    var c = a.graphic;
                    a = a.shapeArgs;
                    c && (c.attr({
                        r: b.center[3] / 2,
                        start: d,
                        end: d
                    }), c.animate({
                        r: a.r,
                        start: a.start,
                        end: a.end
                    }, b.options.animation))
                }), b.animate = null)
            },
            setData: function(a, b, c, d) {
                Q.prototype.setData.call(this,
                    a, !1, c, d);
                this.processData();
                this.generatePoints();
                l(b, !0) && this.chart.redraw(c)
            },
            generatePoints: function() {
                var a, b = 0,
                    c, d, e, f = this.options.ignoreHiddenPoint;
                Q.prototype.generatePoints.call(this);
                c = this.points;
                d = c.length;
                for (a = 0; a < d; a++) e = c[a], b += f && !e.visible ? 0 : e.y;
                this.total = b;
                for (a = 0; a < d; a++) e = c[a], e.percentage = 0 < b ? e.y / b * 100 : 0, e.total = b
            },
            translate: function(a) {
                this.generatePoints();
                var b = 0,
                    c = this.options,
                    d = c.slicedOffset,
                    e = d + c.borderWidth,
                    f, g, h, k = c.startAngle || 0,
                    m = this.startAngleRad = xa / 180 * (k - 90),
                    k = (this.endAngleRad = xa / 180 * (l(c.endAngle, k + 360) - 90)) - m,
                    n = this.points,
                    r = c.dataLabels.distance,
                    c = c.ignoreHiddenPoint,
                    v, t = n.length,
                    p;
                a || (this.center = a = this.getCenter());
                this.getX = function(b, c) {
                    h = ca.asin(U((b - a[1]) / (a[2] / 2 + r), 1));
                    return a[0] + (c ? -1 : 1) * na(h) * (a[2] / 2 + r)
                };
                for (v = 0; v < t; v++) {
                    p = n[v];
                    f = m + b * k;
                    if (!c || p.visible) b += p.percentage / 100;
                    g = m + b * k;
                    p.shapeType = "arc";
                    p.shapeArgs = {
                        x: a[0],
                        y: a[1],
                        r: a[2] / 2,
                        innerR: a[3] / 2,
                        start: K(1E3 * f) / 1E3,
                        end: K(1E3 * g) / 1E3
                    };
                    h = (g + f) / 2;
                    h > 1.5 * xa ? h -= 2 * xa : h < -xa / 2 && (h += 2 * xa);
                    p.slicedTranslation = {
                        translateX: K(na(h) * d),
                        translateY: K(qa(h) * d)
                    };
                    f = na(h) * a[2] / 2;
                    g = qa(h) * a[2] / 2;
                    p.tooltipPos = [a[0] + .7 * f, a[1] + .7 * g];
                    p.half = h < -xa / 2 || h > xa / 2 ? 1 : 0;
                    p.angle = h;
                    e = U(e, r / 2);
                    p.labelPos = [a[0] + f + na(h) * r, a[1] + g + qa(h) * r, a[0] + f + na(h) * e, a[1] + g + qa(h) * e, a[0] + f, a[1] + g, 0 > r ? "center" : p.half ? "right" : "left", h]
                }
            },
            drawGraph: null,
            drawPoints: function() {
                var a = this,
                    b = a.chart.renderer,
                    c, d, e = a.options.shadow,
                    f, g;
                e && !a.shadowGroup && (a.shadowGroup = b.g("shadow").add(a.group));
                y(a.points, function(h) {
                    d = h.graphic;
                    g = h.shapeArgs;
                    f = h.shadowGroup;
                    e && !f && (f = h.shadowGroup = b.g("shadow").add(a.shadowGroup));
                    c = h.sliced ? h.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    };
                    f && f.attr(c);
                    d ? d.animate(w(g, c)) : h.graphic = d = b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({
                        "stroke-linejoin": "round"
                    }).attr(c).add(a.group).shadow(e, f);
                    void 0 !== h.visible && h.setVisible(h.visible)
                })
            },
            sortByAngle: function(a, b) {
                a.sort(function(a, d) {
                    return void 0 !== a.angle && (d.angle - a.angle) * b
                })
            },
            drawLegendSymbol: Ya.drawRectangle,
            getCenter: Jb.getCenter,
            getSymbol: ea
        },
        rb = J(Q, rb);
    M.pie = rb;
    Q.prototype.drawDataLabels = function() {
        var a = this,
            b = a.options,
            c = b.cursor,
            d = b.dataLabels,
            e = a.points,
            f, g, h = a.hasRendered || 0,
            k, m;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), m = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), l(d.defer, !0) && (m.attr({
            opacity: +h
        }), h || ba(a, "afterAnimate", function() {
            a.visible && m.show();
            m[b.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            })
        })), g = d, y(e, function(b) {
            var e, h =
                b.dataLabel,
                t, p, q = b.connector,
                u = !0;
            f = b.options && b.options.dataLabels;
            e = l(f && f.enabled, g.enabled);
            if (h && !e) b.dataLabel = h.destroy();
            else if (e) {
                d = B(g, f);
                e = d.rotation;
                t = b.getLabelConfig();
                k = d.format ? H(d.format, t) : d.formatter.call(t, d);
                d.style.color = l(d.color, d.style.color, a.color, "black");
                if (h) s(k) ? (h.attr({
                    text: k
                }), u = !1) : (b.dataLabel = h = h.destroy(), q && (b.connector = q.destroy()));
                else if (s(k)) {
                    h = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: e,
                        padding: d.padding,
                        zIndex: 1
                    };
                    for (p in h) h[p] === E && delete h[p];
                    h = b.dataLabel = a.chart.renderer[e ? "text" : "label"](k, 0, -999, null, null, null, d.useHTML).attr(h).css(w(d.style, c && {
                        cursor: c
                    })).add(m).shadow(d.shadow)
                }
                h && a.alignDataLabel(b, h, d, null, u)
            }
        })
    };
    Q.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = l(a.plotX, -999),
            k = l(a.plotY, -999),
            m = b.getBBox();
        if (a = this.visible && (a.series.forceDL || f.isInsidePlot(h, K(k), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g))) d = w({
            x: g ? f.plotWidth - k : h,
            y: K(g ? f.plotHeight -
                h : k),
            width: 0,
            height: 0
        }, d), w(c, {
            width: m.width,
            height: m.height
        }), c.rotation ? b[e ? "attr" : "animate"]({
            x: d.x + c.x + d.width / 2,
            y: d.y + c.y + d.height / 2
        }).attr({
            align: c.align
        }) : (b.align(c, null, d), g = b.alignAttr, "justify" === l(c.overflow, "justify") ? this.justifyDataLabel(b, c, g, m, d, e) : l(c.crop, !0) && (a = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + m.width, g.y + m.height)));
        a || (b.attr({
            y: -999
        }), b.placed = !1)
    };
    Q.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart,
            h = b.align,
            k = b.verticalAlign,
            m, n;
        m = c.x;
        0 > m && ("right" ===
            h ? b.align = "left" : b.x = -m, n = !0);
        m = c.x + d.width;
        m > g.plotWidth && ("left" === h ? b.align = "right" : b.x = g.plotWidth - m, n = !0);
        m = c.y;
        0 > m && ("bottom" === k ? b.verticalAlign = "top" : b.y = -m, n = !0);
        m = c.y + d.height;
        m > g.plotHeight && ("top" === k ? b.verticalAlign = "bottom" : b.y = g.plotHeight - m, n = !0);
        n && (a.placed = !f, a.align(b, null, e))
    };
    M.pie && (M.pie.prototype.drawDataLabels = function() {
        var a = this,
            b = a.data,
            c, d = a.chart,
            e = a.options.dataLabels,
            f = l(e.connectorPadding, 10),
            g = l(e.connectorWidth, 1),
            h = d.plotWidth,
            k = d.plotHeight,
            m, n, r = l(e.softConnector, !0),
            v = e.distance,
            t = a.center,
            p = t[2] / 2,
            q = t[1],
            s = 0 < v,
            u, x, A, w = [
                [],
                []
            ],
            L, I, H, C, G, E = [0, 0, 0, 0],
            B = function(a, b) {
                return b.y - a.y
            };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            Q.prototype.drawDataLabels.apply(a);
            y(b, function(a) {
                a.dataLabel && a.visible && w[a.half].push(a)
            });
            for (C = 2; C--;) {
                var P = [],
                    S = [],
                    J = w[C],
                    M = J.length,
                    D;
                if (M) {
                    a.sortByAngle(J, C - .5);
                    for (G = b = 0; !b && J[G];) b = J[G] && J[G].dataLabel && (J[G].dataLabel.getBBox().height || 21), G++;
                    if (0 < v) {
                        x = U(q + p + v, d.plotHeight);
                        for (G = F(0, q - p - v); G <= x; G += b) P.push(G);
                        x = P.length;
                        if (M > x) {
                            c = [].concat(J);
                            c.sort(B);
                            for (G = M; G--;) c[G].rank = G;
                            for (G = M; G--;) J[G].rank >= x && J.splice(G, 1);
                            M = J.length
                        }
                        for (G = 0; G < M; G++) {
                            c = J[G];
                            A = c.labelPos;
                            c = 9999;
                            var O, Ka;
                            for (Ka = 0; Ka < x; Ka++) O = X(P[Ka] - A[1]), O < c && (c = O, D = Ka);
                            if (D < G && null !== P[G]) D = G;
                            else
                                for (x < M - G + D && null !== P[G] && (D = x - M + G); null === P[D];) D++;
                            S.push({
                                i: D,
                                y: P[D]
                            });
                            P[D] = null
                        }
                        S.sort(B)
                    }
                    for (G = 0; G < M; G++) {
                        c = J[G];
                        A = c.labelPos;
                        u = c.dataLabel;
                        H = !1 === c.visible ? "hidden" : "visible";
                        c = A[1];
                        if (0 < v) {
                            if (x = S.pop(), D = x.i, I = x.y, c > I && null !== P[D + 1] || c < I && null !== P[D - 1]) I =
                                U(F(0, c), d.plotHeight)
                        } else I = c;
                        L = e.justify ? t[0] + (C ? -1 : 1) * (p + v) : a.getX(I === q - p - v || I === q + p + v ? c : I, C);
                        u._attr = {
                            visibility: H,
                            align: A[6]
                        };
                        u._pos = {
                            x: L + e.x + ({
                                left: f,
                                right: -f
                            }[A[6]] || 0),
                            y: I + e.y - 10
                        };
                        u.connX = L;
                        u.connY = I;
                        null === this.options.size && (x = u.width, L - x < f ? E[3] = F(K(x - L + f), E[3]) : L + x > h - f && (E[1] = F(K(L + x - h + f), E[1])), 0 > I - b / 2 ? E[0] = F(K(-I + b / 2), E[0]) : I + b / 2 > k && (E[2] = F(K(I + b / 2 - k), E[2])))
                    }
                }
            }
            if (0 === pa(E) || this.verifyDataLabelOverflow(E)) this.placeDataLabels(), s && g && y(this.points, function(b) {
                m = b.connector;
                A = b.labelPos;
                (u = b.dataLabel) && u._pos ? (H = u._attr.visibility, L = u.connX, I = u.connY, n = r ? ["M", L + ("left" === A[6] ? 5 : -5), I, "C", L, I, 2 * A[2] - A[4], 2 * A[3] - A[5], A[2], A[3], "L", A[4], A[5]] : ["M", L + ("left" === A[6] ? 5 : -5), I, "L", A[2], A[3], "L", A[4], A[5]], m ? (m.animate({
                    d: n
                }), m.attr("visibility", H)) : b.connector = m = a.chart.renderer.path(n).attr({
                    "stroke-width": g,
                    stroke: e.connectorColor || b.color || "#606060",
                    visibility: H
                }).add(a.dataLabelsGroup)) : m && (b.connector = m.destroy())
            })
        }
    }, M.pie.prototype.placeDataLabels = function() {
        y(this.points, function(a) {
            a =
                a.dataLabel;
            var b;
            a && ((b = a._pos) ? (a.attr(a._attr), a[a.moved ? "animate" : "attr"](b), a.moved = !0) : a && a.attr({
                y: -999
            }))
        })
    }, M.pie.prototype.alignDataLabel = ea, M.pie.prototype.verifyDataLabelOverflow = function(a) {
        var b = this.center,
            c = this.options,
            d = c.center,
            e = c = c.minSize || 80,
            f;
        null !== d[0] ? e = F(b[2] - F(a[1], a[3]), c) : (e = F(b[2] - a[1] - a[3], c), b[0] += (a[3] - a[1]) / 2);
        null !== d[1] ? e = F(U(e, b[2] - F(a[0], a[2])), c) : (e = F(U(e, b[2] - a[0] - a[2]), c), b[1] += (a[0] - a[2]) / 2);
        e < b[2] ? (b[2] = e, this.translate(b), y(this.points, function(a) {
            a.dataLabel &&
                (a.dataLabel._pos = null)
        }), this.drawDataLabels && this.drawDataLabels()) : f = !0;
        return f
    });
    M.column && (M.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = a.dlBox || a.shapeArgs,
            k = a.below || a.plotY > l(this.translatedThreshold, f.plotSizeY),
            m = l(c.inside, !!this.options.stacking);
        h && (d = B(h), g && (d = {
            x: f.plotWidth - d.y - d.height,
            y: f.plotHeight - d.x - d.width,
            width: d.height,
            height: d.width
        }), m || (g ? (d.x += k ? 0 : d.width, d.width = 0) : (d.y += k ? d.height : 0, d.height = 0)));
        c.align = l(c.align, !g || m ? "center" :
            k ? "right" : "left");
        c.verticalAlign = l(c.verticalAlign, g || m ? "middle" : k ? "top" : "bottom");
        Q.prototype.alignDataLabel.call(this, a, b, c, d, e)
    });
    var Ra = $.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = a.options.cursor,
                e = d && {
                    cursor: d
                },
                f = function(c) {
                    var d = c.target,
                        e;
                    if (b.hoverSeries !== a) a.onMouseOver();
                    for (; d && !e;) e = d.point, d = d.parentNode;
                    if (e !== E && e !== b.hoverPoint) e.onMouseOver(c)
                };
            y(a.points, function(a) {
                a.graphic && (a.graphic.element.point = a);
                a.dataLabel && (a.dataLabel.element.point =
                    a)
            });
            a._hasTracking || (y(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), Ua)) a[b].on("touchstart", f)
            }), a._hasTracking = !0)
        },
        drawTrackerGraph: function() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.pointer,
                h = f.renderer,
                k = f.options.tooltip.snap,
                m = a.tracker,
                n = b.cursor,
                r = n && {
                    cursor: n
                },
                n = a.singlePoints,
                l, p = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                },
                q = "rgba(192,192,192," + (oa ? 1E-4 : .002) + ")";
            if (e && !c)
                for (l = e + 1; l--;) "M" === d[l] && d.splice(l + 1, 0, d[l + 1] - k, d[l + 2], "L"), (l && "M" === d[l] || l === e) && d.splice(l, 0, "L", d[l - 2] + k, d[l - 1]);
            for (l = 0; l < n.length; l++) e = n[l], d.push("M", e.plotX - k, e.plotY, "L", e.plotX + k, e.plotY);
            m ? m.attr({
                d: d
            }) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: q,
                fill: c ? q : "none",
                "stroke-width": b.lineWidth + (c ? 0 : 2 * k),
                zIndex: 2
            }).add(a.group), y([a.tracker, a.markerGroup], function(a) {
                a.addClass("highcharts-tracker").on("mouseover",
                    p).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(r);
                if (Ua) a.on("touchstart", p)
            }))
        }
    };
    M.column && (qb.prototype.drawTracker = Ra.drawTrackerPoint);
    M.pie && (M.pie.prototype.drawTracker = Ra.drawTrackerPoint);
    M.scatter && (Mb.prototype.drawTracker = Ra.drawTrackerPoint);
    w(eb.prototype, {
        setItemEvents: function(a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c =
                    function() {
                        a.setVisible()
                    };
                b = {
                    browserEvent: b
                };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : Z(a, "legendItemClick", b, c)
            })
        },
        createCheckboxForItem: function(a) {
            a.checkbox = S("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            ba(a.checkbox, "click", function(b) {
                Z(a, "checkboxClick", {
                    checked: b.target.checked
                }, function() {
                    a.select()
                })
            })
        }
    });
    ga.legend.itemStyle.cursor = "pointer";
    w(Da.prototype, {
        showResetZoom: function() {
            var a = this,
                b = ga.lang,
                c = a.options.chart.resetZoomButton,
                d = c.theme,
                e = d.states,
                f = "chart" === c.relativeTo ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f)
        },
        zoomOut: function() {
            var a = this;
            Z(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            })
        },
        zoom: function(a) {
            var b, c = this.pointer,
                d = !1,
                e;
            !a || a.resetSelection ? y(this.axes, function(a) {
                b = a.zoom()
            }) : y(a.xAxis.concat(a.yAxis),
                function(a) {
                    var e = a.axis,
                        h = e.isXAxis;
                    if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
                });
            e = this.resetZoomButton;
            d && !e ? this.showResetZoom() : !d && N(e) && (this.resetZoomButton = e.destroy());
            b && this.redraw(l(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
        },
        pan: function(a, b) {
            var c = this,
                d = c.hoverPoints,
                e;
            d && y(d, function(a) {
                a.setState()
            });
            y("xy" === b ? [1, 0] : [1], function(b) {
                var d = a[b ? "chartX" : "chartY"],
                    h = c[b ? "xAxis" : "yAxis"][0],
                    k = c[b ? "mouseDownX" : "mouseDownY"],
                    m = (h.pointRange || 0) / 2,
                    n = h.getExtremes(),
                    l = h.toValue(k - d, !0) + m,
                    k = h.toValue(k + c[b ? "plotWidth" : "plotHeight"] - d, !0) - m;
                h.series.length && l > U(n.dataMin, n.min) && k < F(n.dataMax, n.max) && (h.setExtremes(l, k, !1, !1, {
                    trigger: "pan"
                }), e = !0);
                c[b ? "mouseDownX" : "mouseDownY"] = d
            });
            e && c.redraw(!1);
            C(c.container, {
                cursor: "move"
            })
        }
    });
    w(Ca.prototype, {
        select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart;
            a = l(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[Oa(c,
                    d.data)] = c.options;
                c.setState(a && "select");
                b || y(e.getSelectedPoints(), function(a) {
                    a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[Oa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(a) {
            var b = this.series,
                c = b.chart,
                d = c.tooltip,
                e = c.hoverPoint;
            if (e && e !== this) e.onMouseOut();
            this.firePointEvent("mouseOver");
            !d || d.shared && !b.noSharedTooltip || d.refresh(this, a);
            this.setState("hover");
            c.hoverPoint = this
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            b && -1 !== Oa(this, b) || (this.setState(), a.hoverPoint = null)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = B(this.series.options.point, this.options).events,
                    b;
                this.events = a;
                for (b in a) ba(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a, b) {
            var c = this.plotX,
                d = this.plotY,
                e = this.series,
                f = e.options.states,
                g = R[e.type].marker && e.options.marker,
                h = g && !g.enabled,
                k = g && g.states[a],
                m = k && !1 === k.enabled,
                n = e.stateMarkerGraphic,
                l = this.marker || {},
                p =
                e.chart,
                t = e.halo,
                q;
            a = a || "";
            q = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && "select" !== a || f[a] && !1 === f[a].enabled || a && (m || h && !1 === k.enabled) || a && l.states && l.states[a] && !1 === l.states[a].enabled)) {
                if (this.graphic) g = g && this.graphic.symbolName && q.r, this.graphic.attr(B(q, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), n && n.hide();
                else {
                    if (a && k)
                        if (g = k.radius, l = l.symbol || e.symbol, n && n.currentSymbol !== l && (n = n.destroy()), n) n[b ? "animate" : "attr"]({
                            x: c - g,
                            y: d - g
                        });
                        else l && (e.stateMarkerGraphic =
                            n = p.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(q).add(e.markerGroup), n.currentSymbol = l);
                    if (n) n[a && p.isInsidePlot(c, d, p.inverted) ? "show" : "hide"]()
                }(c = f[a] && f[a].halo) && c.size ? (t || (e.halo = t = p.renderer.path().add(e.seriesGroup)), t.attr(w({
                    fill: za(this.color || e.color).setOpacity(c.opacity).get()
                }, c.attributes))[b ? "animate" : "attr"]({
                    d: this.haloPath(c.size)
                })) : t && t.attr({
                    d: []
                });
                this.state = a
            }
        },
        haloPath: function(a) {
            var b = this.series,
                c = b.chart,
                d = b.getPlotBox(),
                e = c.inverted;
            return c.renderer.symbols.circle(d.translateX +
                (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, 2 * a, 2 * a)
        }
    });
    w(Q.prototype, {
        onMouseOver: function() {
            var a = this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && Z(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && Z(this, "mouseOut");
            !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
            this.setState();
            b.hoverSeries = null
        },
        setState: function(a) {
            var b = this.options,
                c = this.graph,
                d = this.graphNeg,
                e = b.states,
                b = b.lineWidth;
            a = a || "";
            this.state !== a && (this.state = a, e[a] && !1 === e[a].enabled || (a && (b = e[a].lineWidth || b + (e[a].lineWidthPlus || 0)), c && !c.dashstyle && (a = {
                "stroke-width": b
            }, c.attr(a), d && d.attr(a))))
        },
        setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f, g = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === E ? !h : a) ? "show" : "hide";
            y(["group", "dataLabelsGroup",
                "markerGroup", "tracker"
            ], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && y(d.series, function(a) {
                a.options.stacking && a.visible && (a.isDirty = !0)
            });
            y(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            g && (d.isDirtyBox = !0);
            !1 !== b && d.redraw();
            Z(c, f)
        },
        setTooltipPoints: function(a) {
            var b = [],
                c, d, e = this.xAxis,
                f = e && e.getExtremes(),
                g = e ? e.tooltipLen || e.len : this.chart.plotSizeX,
                h, k, m = [];
            if (!1 !== this.options.enableMouseTracking && !this.singularTooltips) {
                a &&
                    (this.tooltipPoints = null);
                y(this.segments || this.points, function(a) {
                    b = b.concat(a)
                });
                e && e.reversed && (b = b.reverse());
                this.orderTooltipPoints && this.orderTooltipPoints(b);
                a = b.length;
                for (k = 0; k < a; k++)
                    if (e = b[k], c = e.x, c >= f.min && c <= f.max)
                        for (h = b[k + 1], c = d === E ? 0 : d + 1, d = b[k + 1] ? U(F(0, ha((e.clientX + (h ? h.wrappedClientX || h.clientX : g)) / 2)), g) : g; 0 <= c && c <= d;) m[c++] = e;
                this.tooltipPoints = m
            }
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === E ? !this.selected :
                a;
            this.checkbox && (this.checkbox.checked = a);
            Z(this, a ? "select" : "unselect")
        },
        drawTracker: Ra.drawTrackerGraph
    });
    w(Sa.prototype, {
        init: function(a, b, c) {
            var d = this,
                e = d.defaultOptions;
            d.chart = b;
            b.angular && (e.background = {});
            d.options = a = B(e, a);
            (a = a.background) && y([].concat(P(a)).reverse(), function(a) {
                var b = a.backgroundColor;
                a = B(d.defaultBackgroundOptions, a);
                b && (a.backgroundColor = b);
                a.color = a.backgroundColor;
                c.options.plotBands.unshift(a)
            })
        },
        defaultOptions: {
            center: ["50%", "50%"],
            size: "85%",
            startAngle: 0
        },
        defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1,
            borderColor: "silver",
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "#FFF"],
                    [1, "#DDD"]
                ]
            },
            from: -Number.MAX_VALUE,
            innerRadius: 0,
            to: Number.MAX_VALUE,
            outerRadius: "105%"
        }
    });
    var fb = Y.prototype,
        sb = T.prototype,
        ac = {
            getOffset: ea,
            redraw: function() {
                this.isDirty = !1
            },
            render: function() {
                this.isDirty = !1
            },
            setScale: ea,
            setCategories: ea,
            setTitle: ea
        },
        Nb = {
            isRadial: !0,
            defaultRadialGaugeOptions: {
                labels: {
                    align: "center",
                    x: 0,
                    y: null
                },
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {
                    rotation: 0
                },
                zIndex: 2
            },
            defaultRadialXOptions: {
                gridLineWidth: 1,
                labels: {
                    align: null,
                    distance: 15,
                    x: 0,
                    y: null
                },
                maxPadding: 0,
                minPadding: 0,
                showLastLabel: !1,
                tickLength: 0
            },
            defaultRadialYOptions: {
                gridLineInterpolation: "circle",
                labels: {
                    align: "right",
                    x: -3,
                    y: -2
                },
                showLastLabel: !1,
                title: {
                    x: 4,
                    text: null,
                    rotation: 90
                }
            },
            setOptions: function(a) {
                a = this.options = B(this.defaultOptions, this.defaultRadialOptions, a);
                a.plotBands ||
                    (a.plotBands = [])
            },
            getOffset: function() {
                fb.getOffset.call(this);
                this.chart.axisOffset[this.side] = 0;
                this.center = this.pane.center = Jb.getCenter.call(this.pane)
            },
            getLinePath: function(a, b) {
                var c = this.center;
                b = l(b, c[2] / 2 - this.offset);
                return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, {
                    start: this.startAngleRad,
                    end: this.endAngleRad,
                    open: !0,
                    innerR: 0
                })
            },
            setAxisTranslation: function() {
                fb.setAxisTranslation.call(this);
                this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) /
                    (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
            },
            beforeSetTickPositions: function() {
                this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
            },
            setAxisSize: function() {
                fb.setAxisSize.call(this);
                this.isRadial && (this.center = this.pane.center = $.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height =
                    this.center[2] * l(this.sector, 1) / 2)
            },
            getPosition: function(a, b) {
                return this.postTranslate(this.isCircular ? this.translate(a) : 0, l(this.isCircular ? b : this.translate(a), this.center[2] / 2) - this.offset)
            },
            postTranslate: function(a, b) {
                var c = this.chart,
                    d = this.center;
                a = this.startAngleRad + a;
                return {
                    x: c.plotLeft + d[0] + Math.cos(a) * b,
                    y: c.plotTop + d[1] + Math.sin(a) * b
                }
            },
            getPlotBandPath: function(a, b, c) {
                var d = this.center,
                    e = this.startAngleRad,
                    f = d[2] / 2,
                    g = [l(c.outerRadius, "100%"), c.innerRadius, l(c.thickness, 10)],
                    h = /%$/,
                    k, m = this.isCircular;
                "polygon" === this.options.gridLineInterpolation ? d = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (m || (g[0] = this.translate(a), g[1] = this.translate(b)), g = Pa(g, function(a) {
                    h.test(a) && (a = D(a, 10) * f / 100);
                    return a
                }), "circle" !== c.shape && m ? (a = e + this.translate(a), b = e + this.translate(b)) : (a = -Math.PI / 2, b = 1.5 * Math.PI, k = !0), d = this.chart.renderer.symbols.arc(this.left + d[0], this.top + d[1], g[0], g[0], {
                    start: a,
                    end: b,
                    innerR: l(g[1], g[0] - g[2]),
                    open: k
                }));
                return d
            },
            getPlotLinePath: function(a, b) {
                var c = this,
                    d = c.center,
                    e = c.chart,
                    f = c.getPosition(a),
                    g, h, k;
                c.isCircular ? k = ["M", d[0] + e.plotLeft, d[1] + e.plotTop, "L", f.x, f.y] : "circle" === c.options.gridLineInterpolation ? (a = c.translate(a)) && (k = c.getLinePath(0, a)) : (y(e.xAxis, function(a) {
                    a.pane === c.pane && (g = a)
                }), k = [], a = c.translate(a), d = g.tickPositions, g.autoConnect && (d = d.concat([d[0]])), b && (d = [].concat(d).reverse()), y(d, function(b, c) {
                    h = g.getPosition(b, a);
                    k.push(c ? "L" : "M", h.x, h.y)
                }));
                return k
            },
            getTitlePosition: function() {
                var a = this.center,
                    b = this.chart,
                    c = this.options.title;
                return {
                    x: b.plotLeft +
                        a[0] + (c.x || 0),
                    y: b.plotTop + a[1] - {
                        high: .5,
                        middle: .25,
                        low: 0
                    }[c.align] * a[2] + (c.y || 0)
                }
            }
        };
    G(fb, "init", function(a, b, c) {
        var d = b.angular,
            e = b.polar,
            f = c.isX,
            g = d && f,
            h, k;
        k = b.options;
        var m = c.pane || 0;
        if (d) {
            if (w(this, g ? ac : Nb), h = !f) this.defaultRadialOptions = this.defaultRadialGaugeOptions
        } else e && (w(this, Nb), this.defaultRadialOptions = (h = f) ? this.defaultRadialXOptions : B(this.defaultYAxisOptions, this.defaultRadialYOptions));
        a.call(this, b, c);
        g || !d && !e || (a = this.options, b.panes || (b.panes = []), this.pane = m = b.panes[m] = b.panes[m] ||
            new Sa(P(k.pane)[m], b, this), m = m.options, b.inverted = !1, k.chart.zoomType = null, this.startAngleRad = b = (m.startAngle - 90) * Math.PI / 180, this.endAngleRad = k = (l(m.endAngle, m.startAngle + 360) - 90) * Math.PI / 180, this.offset = a.offset || 0, (this.isCircular = h) && c.max === E && k - b === 2 * Math.PI && (this.autoConnect = !0))
    });
    G(sb, "getPosition", function(a, b, c, d, e) {
        var f = this.axis;
        return f.getPosition ? f.getPosition(c) : a.call(this, b, c, d, e)
    });
    G(sb, "getLabelPosition", function(a, b, c, d, e, f, g, h, k) {
        var m = this.axis,
            n = f.y,
            r = f.align,
            p = (m.translate(this.pos) +
                m.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
        m.isRadial ? (a = m.getPosition(this.pos, m.center[2] / 2 + l(f.distance, -25)), "auto" === f.rotation ? d.attr({
            rotation: p
        }) : null === n && (n = m.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), null === r && (r = m.isCircular ? 20 < p && 160 > p ? "left" : 200 < p && 340 > p ? "right" : "center" : "center", d.attr({
            align: r
        })), a.x += f.x, a.y += n) : a = a.call(this, b, c, d, e, f, g, h, k);
        return a
    });
    G(sb, "getMarkPath", function(a, b, c, d, e, f, g) {
        var h = this.axis;
        h.isRadial ? (a = h.getPosition(this.pos, h.center[2] /
            2 + d), b = ["M", b, c, "L", a.x, a.y]) : b = a.call(this, b, c, d, e, f, g);
        return b
    });
    R.arearange = B(R.area, {
        lineWidth: 1,
        marker: null,
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        trackByArea: !0,
        dataLabels: {
            align: null,
            verticalAlign: null,
            xLow: 0,
            xHigh: 0,
            yLow: 0,
            yHigh: 0
        },
        states: {
            hover: {
                halo: !1
            }
        }
    });
    M.arearange = J(M.area, {
        type: "arearange",
        pointArrayMap: ["low", "high"],
        toYData: function(a) {
            return [a.low, a.high]
        },
        pointValKey: "low",
        getSegments: function() {
            var a = this;
            y(a.points, function(b) {
                a.options.connectNulls || null !== b.low && null !== b.high ? null === b.low && null !== b.high && (b.y = b.high) : b.y = null
            });
            Q.prototype.getSegments.call(this)
        },
        translate: function() {
            var a = this.yAxis;
            M.area.prototype.translate.apply(this);
            y(this.points, function(b) {
                var c = b.low,
                    d = b.high,
                    e = b.plotY;
                null === d && null === c ? b.y = null : null === c ? (b.plotLow = b.plotY = null, b.plotHigh = a.translate(d, 0, 1, 0, 1)) : null === d ? (b.plotLow = e, b.plotHigh = null) : (b.plotLow = e, b.plotHigh = a.translate(d,
                    0, 1, 0, 1))
            })
        },
        getSegmentPath: function(a) {
            var b, c = [],
                d = a.length,
                e = Q.prototype.getSegmentPath,
                f, g;
            g = this.options;
            var h = g.step;
            for (b = HighchartsAdapter.grep(a, function(a) {
                    return null !== a.plotLow
                }); d--;) f = a[d], null !== f.plotHigh && c.push({
                plotX: f.plotX,
                plotY: f.plotHigh
            });
            a = e.call(this, b);
            h && (!0 === h && (h = "left"), g.step = {
                left: "right",
                center: "center",
                right: "left"
            }[h]);
            c = e.call(this, c);
            g.step = h;
            g = [].concat(a, c);
            c[0] = "L";
            this.areaPath = this.areaPath.concat(a, c);
            return g
        },
        drawDataLabels: function() {
            var a = this.data,
                b = a.length,
                c, d = [],
                e = Q.prototype,
                f = this.options.dataLabels,
                g = f.align,
                h, k = this.chart.inverted;
            if (f.enabled || this._hasPointLabels) {
                for (c = b; c--;) h = a[c], h.y = h.high, h._plotY = h.plotY, h.plotY = h.plotHigh, d[c] = h.dataLabel, h.dataLabel = h.dataLabelUpper, h.below = !1, k ? (g || (f.align = "left"), f.x = f.xHigh) : f.y = f.yHigh;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments);
                for (c = b; c--;) h = a[c], h.dataLabelUpper = h.dataLabel, h.dataLabel = d[c], h.y = h.low, h.plotY = h._plotY, h.below = !0, k ? (g || (f.align = "right"), f.x = f.xLow) : f.y =
                    f.yLow;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments)
            }
            f.align = g
        },
        alignDataLabel: function() {
            M.column.prototype.alignDataLabel.apply(this, arguments)
        },
        getSymbol: ea,
        drawPoints: ea
    });
    R.areasplinerange = B(R.arearange);
    M.areasplinerange = J(M.arearange, {
        type: "areasplinerange",
        getPointSpline: M.spline.prototype.getPointSpline
    });
    (function() {
        var a = M.column.prototype;
        R.columnrange = B(R.column, R.arearange, {
            lineWidth: 1,
            pointRange: null
        });
        M.columnrange = J(M.arearange, {
            type: "columnrange",
            translate: function() {
                var b =
                    this,
                    c = b.yAxis,
                    d;
                a.translate.apply(b);
                y(b.points, function(a) {
                    var f = a.shapeArgs,
                        g = b.options.minPointLength,
                        h;
                    a.tooltipPos = null;
                    a.plotHigh = d = c.translate(a.high, 0, 1, 0, 1);
                    a.plotLow = a.plotY;
                    h = d;
                    a = a.plotY - d;
                    a < g && (g -= a, a += g, h -= g / 2);
                    f.height = a;
                    f.y = h
                })
            },
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: ea,
            pointAttrToOptions: a.pointAttrToOptions,
            drawPoints: a.drawPoints,
            drawTracker: a.drawTracker,
            animate: a.animate,
            getColumnMetrics: a.getColumnMetrics
        })
    })();
    R.gauge = B(R.line, {
        dataLabels: {
            enabled: !0,
            defer: !1,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            crop: !1,
            style: {
                fontWeight: "bold"
            },
            verticalAlign: "top",
            zIndex: 2
        },
        dial: {},
        pivot: {},
        tooltip: {
            headerFormat: ""
        },
        showInLegend: !1
    });
    var bc = {
        type: "gauge",
        pointClass: J(Ca, {
            setState: function(a) {
                this.state = a
            }
        }),
        angular: !0,
        drawGraph: ea,
        fixedBox: !0,
        forceDL: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        translate: function() {
            var a = this.yAxis,
                b = this.options,
                c = a.center;
            this.generatePoints();
            y(this.points, function(d) {
                var e = B(b.dial, d.dial),
                    f = D(l(e.radius, 80)) * c[2] / 200,
                    g = D(l(e.baseLength, 70)) * f / 100,
                    h = D(l(e.rearLength, 10)) * f / 100,
                    k = e.baseWidth || 3,
                    m = e.topWidth || 1,
                    n = b.overshoot,
                    r = a.startAngleRad + a.translate(d.y, null, null, null, !0);
                n && "number" === typeof n ? (n = n / 180 * Math.PI, r = Math.max(a.startAngleRad - n, Math.min(a.endAngleRad + n, r))) : !1 === b.wrap && (r = Math.max(a.startAngleRad, Math.min(a.endAngleRad, r)));
                r = 180 * r / Math.PI;
                d.shapeType = "path";
                d.shapeArgs = {
                    d: e.path || ["M", -h, -k / 2, "L", g, -k / 2, f, -m / 2, f, m / 2, g, k / 2, -h, k / 2, "z"],
                    translateX: c[0],
                    translateY: c[1],
                    rotation: r
                };
                d.plotX = c[0];
                d.plotY =
                    c[1]
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.yAxis.center,
                c = a.pivot,
                d = a.options,
                e = d.pivot,
                f = a.chart.renderer;
            y(a.points, function(b) {
                var c = b.graphic,
                    e = b.shapeArgs,
                    m = e.d,
                    n = B(d.dial, b.dial);
                c ? (c.animate(e), e.d = m) : b.graphic = f[b.shapeType](e).attr({
                    stroke: n.borderColor || "none",
                    "stroke-width": n.borderWidth || 0,
                    fill: n.backgroundColor || "black",
                    rotation: e.rotation
                }).add(a.group)
            });
            c ? c.animate({
                translateX: b[0],
                translateY: b[1]
            }) : a.pivot = f.circle(0, 0, l(e.radius, 5)).attr({
                "stroke-width": e.borderWidth || 0,
                stroke: e.borderColor ||
                    "silver",
                fill: e.backgroundColor || "black"
            }).translate(b[0], b[1]).add(a.group)
        },
        animate: function(a) {
            var b = this;
            a || (y(b.points, function(a) {
                var d = a.graphic;
                d && (d.attr({
                    rotation: 180 * b.yAxis.startAngleRad / Math.PI
                }), d.animate({
                    rotation: a.shapeArgs.rotation
                }, b.options.animation))
            }), b.animate = null)
        },
        render: function() {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
            Q.prototype.render.call(this);
            this.group.clip(this.chart.clipRect)
        },
        setData: function(a,
            b) {
            Q.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            l(b, !0) && this.chart.redraw()
        },
        drawTracker: Ra && Ra.drawTrackerPoint
    };
    M.gauge = J(M.line, bc);
    R.boxplot = B(R.column, {
        fillColor: "#FFFFFF",
        lineWidth: 1,
        medianWidth: 2,
        states: {
            hover: {
                brightness: -.3
            }
        },
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
        },
        whiskerLength: "50%",
        whiskerWidth: 2
    });
    M.boxplot = J(M.column, {
        type: "boxplot",
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        toYData: function(a) {
            return [a.low, a.q1, a.median, a.q3, a.high]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        drawDataLabels: ea,
        translate: function() {
            var a = this.yAxis,
                b = this.pointArrayMap;
            M.column.prototype.translate.apply(this);
            y(this.points, function(c) {
                y(b, function(b) {
                    null !== c[b] && (c[b + "Plot"] = a.translate(c[b], 0, 1, 0, 1))
                })
            })
        },
        drawPoints: function() {
            var a =
                this,
                b = a.points,
                c = a.options,
                d = a.chart.renderer,
                e, f, g, h, k, m, n, r, p, t, q, u, s, x, A, L, w, I, G, H, C, P, F = !1 !== a.doQuartiles,
                B = parseInt(a.options.whiskerLength, 10) / 100;
            y(b, function(b) {
                p = b.graphic;
                C = b.shapeArgs;
                q = {};
                x = {};
                L = {};
                P = b.color || a.color;
                b.plotY !== E && (e = b.pointAttr[b.selected ? "selected" : ""], w = C.width, I = ha(C.x), G = I + w, H = K(w / 2), f = ha(F ? b.q1Plot : b.lowPlot), g = ha(F ? b.q3Plot : b.lowPlot), h = ha(b.highPlot), k = ha(b.lowPlot), q.stroke = b.stemColor || c.stemColor || P, q["stroke-width"] = l(b.stemWidth, c.stemWidth, c.lineWidth),
                    q.dashstyle = b.stemDashStyle || c.stemDashStyle, x.stroke = b.whiskerColor || c.whiskerColor || P, x["stroke-width"] = l(b.whiskerWidth, c.whiskerWidth, c.lineWidth), L.stroke = b.medianColor || c.medianColor || P, L["stroke-width"] = l(b.medianWidth, c.medianWidth, c.lineWidth), L["stroke-linecap"] = "round", n = q["stroke-width"] % 2 / 2, r = I + H + n, t = ["M", r, g, "L", r, h, "M", r, f, "L", r, k], F && (n = e["stroke-width"] % 2 / 2, r = ha(r) + n, f = ha(f) + n, g = ha(g) + n, I += n, G += n, u = ["M", I, g, "L", I, f, "L", G, f, "L", G, g, "L", I, g, "z"]), B && (n = x["stroke-width"] % 2 / 2, h += n, k +=
                        n, s = ["M", r - H * B, h, "L", r + H * B, h, "M", r - H * B, k, "L", r + H * B, k]), n = L["stroke-width"] % 2 / 2, m = K(b.medianPlot) + n, A = ["M", I, m, "L", G, m], p ? (b.stem.animate({
                        d: t
                    }), B && b.whiskers.animate({
                        d: s
                    }), F && b.box.animate({
                        d: u
                    }), b.medianShape.animate({
                        d: A
                    })) : (b.graphic = p = d.g().add(a.group), b.stem = d.path(t).attr(q).add(p), B && (b.whiskers = d.path(s).attr(x).add(p)), F && (b.box = d.path(u).attr(e).add(p)), b.medianShape = d.path(A).attr(L).add(p)))
            })
        }
    });
    R.errorbar = B(R.boxplot, {
        color: "#000000",
        grouping: !1,
        linkedTo: ":previous",
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        whiskerWidth: null
    });
    M.errorbar = J(M.boxplot, {
        type: "errorbar",
        pointArrayMap: ["low", "high"],
        toYData: function(a) {
            return [a.low, a.high]
        },
        pointValKey: "high",
        doQuartiles: !1,
        drawDataLabels: M.arearange ? M.arearange.prototype.drawDataLabels : ea,
        getColumnMetrics: function() {
            return this.linkedParent && this.linkedParent.columnMetrics || M.column.prototype.getColumnMetrics.call(this)
        }
    });
    R.waterfall = B(R.column, {
        lineWidth: 1,
        lineColor: "#333",
        dashStyle: "dot",
        borderColor: "#333",
        states: {
            hover: {
                lineWidthPlus: 0
            }
        }
    });
    M.waterfall =
        J(M.column, {
            type: "waterfall",
            upColorProp: "fill",
            pointArrayMap: ["low", "y"],
            pointValKey: "y",
            init: function(a, b) {
                b.stacking = !0;
                M.column.prototype.init.call(this, a, b)
            },
            translate: function() {
                var a = this.yAxis,
                    b, c, d, e, f, g, h, k, m, n;
                b = this.options.threshold;
                M.column.prototype.translate.apply(this);
                k = m = b;
                d = this.points;
                c = 0;
                for (b = d.length; c < b; c++) e = d[c], f = e.shapeArgs, g = this.getStack(c), n = g.points[this.index + "," + c], isNaN(e.y) && (e.y = this.yData[c]), h = F(k, k + e.y) + n[0], f.y = a.translate(h, 0, 1), e.isSum ? (f.y = a.translate(n[1],
                    0, 1), f.height = a.translate(n[0], 0, 1) - f.y) : e.isIntermediateSum ? (f.y = a.translate(n[1], 0, 1), f.height = a.translate(m, 0, 1) - f.y, m = n[1]) : k += g.total, 0 > f.height && (f.y += f.height, f.height *= -1), e.plotY = f.y = K(f.y) - this.borderWidth % 2 / 2, f.height = F(K(f.height), .001), e.yBottom = f.y + f.height, f = e.plotY + (e.negative ? f.height : 0), this.chart.inverted ? e.tooltipPos[0] = a.len - f : e.tooltipPos[1] = f
            },
            processData: function(a) {
                var b = this.yData,
                    c = this.points,
                    d, e = b.length,
                    f, g, h, k, m, n;
                g = f = h = k = this.options.threshold || 0;
                for (n = 0; n < e; n++) m =
                    b[n], d = c && c[n] ? c[n] : {}, "sum" === m || d.isSum ? b[n] = g : "intermediateSum" === m || d.isIntermediateSum ? b[n] = f : (g += m, f += m), h = Math.min(g, h), k = Math.max(g, k);
                Q.prototype.processData.call(this, a);
                this.dataMin = h;
                this.dataMax = k
            },
            toYData: function(a) {
                return a.isSum ? 0 === a.x ? null : "sum" : a.isIntermediateSum ? 0 === a.x ? null : "intermediateSum" : a.y
            },
            getAttribs: function() {
                M.column.prototype.getAttribs.apply(this, arguments);
                var a = this.options,
                    b = a.states,
                    c = a.upColor || this.color,
                    a = $.Color(c).brighten(.1).get(),
                    d = B(this.pointAttr),
                    e = this.upColorProp;
                d[""][e] = c;
                d.hover[e] = b.hover.upColor || a;
                d.select[e] = b.select.upColor || c;
                y(this.points, function(a) {
                    0 < a.y && !a.color && (a.pointAttr = d, a.color = c)
                })
            },
            getGraphPath: function() {
                var a = this.data,
                    b = a.length,
                    c = K(this.options.lineWidth + this.borderWidth) % 2 / 2,
                    d = [],
                    e, f, g;
                for (g = 1; g < b; g++) f = a[g].shapeArgs, e = a[g - 1].shapeArgs, f = ["M", e.x + e.width, e.y + c, "L", f.x, e.y + c], 0 > a[g - 1].y && (f[2] += e.height, f[5] += e.height), d = d.concat(f);
                return d
            },
            getExtremes: ea,
            getStack: function(a) {
                var b = this.yAxis.stacks,
                    c = this.stackKey;
                this.processedYData[a] < this.options.threshold && (c = "-" + c);
                return b[c][a]
            },
            drawGraph: Q.prototype.drawGraph
        });
    R.bubble = B(R.scatter, {
        dataLabels: {
            formatter: function() {
                return this.point.z
            },
            inside: !0,
            style: {
                color: "white",
                textShadow: "0px 0px 3px black"
            },
            verticalAlign: "middle"
        },
        marker: {
            lineColor: null,
            lineWidth: 1
        },
        minSize: 8,
        maxSize: "20%",
        states: {
            hover: {
                halo: {
                    size: 5
                }
            }
        },
        tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        turboThreshold: 0,
        zThreshold: 0
    });
    var cc = J(Ca, {
        haloPath: function() {
            return Ca.prototype.haloPath.call(this,
                this.shapeArgs.r + this.series.options.states.hover.halo.size)
        }
    });
    M.bubble = J(M.scatter, {
        type: "bubble",
        pointClass: cc,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        bubblePadding: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor"
        },
        applyOpacity: function(a) {
            var b = this.options.marker,
                c = l(b.fillOpacity, .5);
            a = a || b.fillColor || this.color;
            1 !== c && (a = za(a).setOpacity(c).get("rgba"));
            return a
        },
        convertAttribs: function() {
            var a = Q.prototype.convertAttribs.apply(this,
                arguments);
            a.fill = this.applyOpacity(a.fill);
            return a
        },
        getRadii: function(a, b, c, d) {
            var e, f, g, h = this.zData,
                k = [],
                m = "width" !== this.options.sizeBy;
            f = 0;
            for (e = h.length; f < e; f++) g = b - a, g = 0 < g ? (h[f] - a) / (b - a) : .5, m && 0 <= g && (g = Math.sqrt(g)), k.push(ca.ceil(c + g * (d - c)) / 2);
            this.radii = k
        },
        animate: function(a) {
            var b = this.options.animation;
            a || (y(this.points, function(a) {
                var d = a.graphic;
                a = a.shapeArgs;
                d && a && (d.attr("r", 1), d.animate({
                    r: a.r
                }, b))
            }), this.animate = null)
        },
        translate: function() {
            var a, b = this.data,
                c, d, e = this.radii;
            M.scatter.prototype.translate.call(this);
            for (a = b.length; a--;) c = b[a], d = e ? e[a] : 0, c.negative = c.z < (this.options.zThreshold || 0), d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {
                x: c.plotX,
                y: c.plotY,
                r: d
            }, c.dlBox = {
                x: c.plotX - d,
                y: c.plotY - d,
                width: 2 * d,
                height: 2 * d
            }) : c.shapeArgs = c.plotY = c.dlBox = E
        },
        drawLegendSymbol: function(a, b) {
            var c = D(a.itemStyle.fontSize) / 2;
            b.legendSymbol = this.chart.renderer.circle(c, a.baseline - c, c).attr({
                zIndex: 3
            }).add(b.legendGroup);
            b.legendSymbol.isMarker = !0
        },
        drawPoints: M.column.prototype.drawPoints,
        alignDataLabel: M.column.prototype.alignDataLabel
    });
    Y.prototype.beforePadding = function() {
        var a = this,
            b = this.len,
            c = this.chart,
            d = 0,
            e = b,
            f = this.isXAxis,
            g = f ? "xData" : "yData",
            h = this.min,
            k = {},
            m = ca.min(c.plotWidth, c.plotHeight),
            n = Number.MAX_VALUE,
            p = -Number.MAX_VALUE,
            q = this.max - h,
            t = b / q,
            u = [];
        this.tickPositions && (y(this.series, function(b) {
            var d = b.options;
            !b.bubblePadding || !b.visible && c.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, u.push(b), f && (y(["minSize", "maxSize"], function(a) {
                    var b = d[a],
                        c = /%$/.test(b),
                        b = D(b);
                    k[a] = c ? m * b / 100 : b
                }), b.minPxSize = k.minSize,
                b = b.zData, b.length && (n = l(d.zMin, ca.min(n, ca.max(ta(b), !1 === d.displayNegative ? d.zThreshold : -Number.MAX_VALUE))), p = l(d.zMax, ca.max(p, pa(b))))))
        }), y(u, function(a) {
            var b = a[g],
                c = b.length,
                m;
            f && a.getRadii(n, p, k.minSize, k.maxSize);
            if (0 < q)
                for (; c--;) "number" === typeof b[c] && (m = a.radii[c], d = Math.min((b[c] - h) * t - m, d), e = Math.max((b[c] - h) * t + m, e))
        }), u.length && 0 < q && l(this.options.min, this.userMin) === E && l(this.options.max, this.userMax) === E && (e -= b, t *= (b + d - e) / b, this.min += d / t, this.max += e / t))
    };
    w($, {
        Axis: Y,
        Chart: Da,
        Color: za,
        Point: Ca,
        Tick: T,
        Renderer: Ta,
        Series: Q,
        SVGElement: W,
        SVGRenderer: Aa,
        arrayMin: ta,
        arrayMax: pa,
        charts: ka,
        dateFormat: Za,
        format: H,
        pathAnim: jb,
        getOptions: function() {
            return ga
        },
        hasBidiBug: Ob,
        isTouchDevice: Bb,
        numberFormat: L,
        seriesTypes: M,
        setOptions: function(a) {
            ga = B(!0, ga, a);
            ma();
            return ga
        },
        addEvent: ba,
        removeEvent: la,
        createElement: S,
        discardElement: Ha,
        css: C,
        each: y,
        extend: w,
        map: Pa,
        merge: B,
        pick: l,
        splat: P,
        extendClass: J,
        pInt: D,
        wrap: G,
        svg: oa,
        canvas: ra,
        vml: !oa && !ra,
        product: "Highcharts 4.0.4",
        version: "/Highstock 2.0.4"
    })
})();
(function(w) {
    var B = w.getOptions(),
        D = B.plotOptions,
        V = w.seriesTypes,
        N = w.merge,
        fa = function() {},
        q = w.each;
    D.funnel = N(D.pie, {
        animation: !1,
        center: ["50%", "50%"],
        width: "90%",
        neckWidth: "30%",
        height: "100%",
        neckHeight: "25%",
        reversed: !1,
        dataLabels: {
            connectorWidth: 1,
            connectorColor: "#606060"
        },
        size: !0,
        states: {
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        }
    });
    V.funnel = w.extendClass(V.pie, {
        type: "funnel",
        animate: fa,
        singularTooltips: !0,
        translate: function() {
            var p = function(l, p) {
                    return /%$/.test(l) ? p * parseInt(l,
                        10) / 100 : parseInt(l, 10)
                },
                x = 0,
                A = this.chart,
                s = this.options,
                u = s.reversed,
                w = A.plotWidth,
                l = A.plotHeight,
                C = 0,
                A = s.center,
                B = p(A[0], w),
                J = p(A[1], l),
                L = p(s.width, w),
                I, G, H = p(s.height, l),
                D = p(s.neckWidth, w),
                N = p(s.neckHeight, l),
                ta = H - N,
                p = this.data,
                pa, wa, Ha = "left" === s.dataLabels.position ? 1 : 0,
                da, ma, W, T, Y, V, ja;
            this.getWidthAt = G = function(l) {
                return l > H - N || H === N ? D : D + (H - N - l) / (H - N) * (L - D)
            };
            this.getX = function(p, q) {
                return B + (q ? -1 : 1) * (G(u ? l - p : p) / 2 + s.dataLabels.distance)
            };
            this.center = [B, J, H];
            this.centerX = B;
            q(p, function(l) {
                x += l.y
            });
            q(p, function(l) {
                ja = null;
                wa = x ? l.y / x : 0;
                ma = J - H / 2 + C * H;
                Y = ma + wa * H;
                I = G(ma);
                da = B - I / 2;
                W = da + I;
                I = G(Y);
                T = B - I / 2;
                V = T + I;
                ma > ta ? (da = T = B - D / 2, W = V = B + D / 2) : Y > ta && (ja = Y, I = G(ta), T = B - I / 2, V = T + I, Y = ta);
                u && (ma = H - ma, Y = H - Y, ja = ja ? H - ja : null);
                pa = ["M", da, ma, "L", W, ma, V, Y];
                ja && pa.push(V, ja, T, ja);
                pa.push(T, Y, "Z");
                l.shapeType = "path";
                l.shapeArgs = {
                    d: pa
                };
                l.percentage = 100 * wa;
                l.plotX = B;
                l.plotY = (ma + (ja || Y)) / 2;
                l.tooltipPos = [B, l.plotY];
                l.slice = fa;
                l.half = Ha;
                C += wa
            })
        },
        drawPoints: function() {
            var p = this,
                x = p.options,
                A = p.chart.renderer;
            q(p.data, function(q) {
                var u =
                    q.graphic,
                    w = q.shapeArgs;
                u ? u.animate(w) : q.graphic = A.path(w).attr({
                    fill: q.color,
                    stroke: x.borderColor,
                    "stroke-width": x.borderWidth
                }).add(p.group)
            })
        },
        sortByAngle: function(p) {
            p.sort(function(p, q) {
                return p.plotY - q.plotY
            })
        },
        drawDataLabels: function() {
            var p = this.data,
                q = this.options.dataLabels.distance,
                A, s, u, w = p.length,
                l, C;
            for (this.center[2] -= 2 * q; w--;) u = p[w], s = (A = u.half) ? 1 : -1, C = u.plotY, l = this.getX(C, A), u.labelPos = [0, C, l + (q - 5) * s, C, l + q * s, C, A ? "right" : "left", 0];
            V.pie.prototype.drawDataLabels.call(this)
        }
    });
    B.plotOptions.pyramid =
        w.merge(B.plotOptions.funnel, {
            neckWidth: "0%",
            neckHeight: "0%",
            reversed: !0
        });
    w.seriesTypes.pyramid = w.extendClass(w.seriesTypes.funnel, {
        type: "pyramid"
    })
})(Highcharts);
(function(w) {
    var B = w.Chart,
        D = w.addEvent,
        V = w.removeEvent,
        N = w.createElement,
        fa = w.discardElement,
        q = w.css,
        p = w.merge,
        x = w.each,
        A = w.extend,
        s = Math.max,
        u = document,
        P = window,
        l = w.isTouchDevice,
        C = w.Renderer.prototype.symbols,
        S = w.getOptions(),
        J;
    A(S.lang, {
        printChart: "На печать",
        downloadPNG: "Download PNG image",
        downloadJPEG: "Download JPEG image",
        downloadPDF: "Download PDF document",
        downloadSVG: "Download SVG vector image",
        contextButtonTitle: "Chart context menu"
    });
    S.navigation = {
        menuStyle: {
            border: "1px solid #A0A0A0",
            background: "#FFFFFF",
            padding: "5px 0"
        },
        menuItemStyle: {
            padding: "0 10px",
            background: "none",
            color: "#303030",
            fontSize: l ? "14px" : "11px"
        },
        menuItemHoverStyle: {
            background: "#4572A5",
            color: "#FFFFFF"
        },
        buttonOptions: {
            symbolFill: "#E0E0E0",
            symbolSize: 14,
            symbolStroke: "#666",
            symbolStrokeWidth: 3,
            symbolX: 12.5,
            symbolY: 10.5,
            align: "right",
            buttonSpacing: 3,
            height: 22,
            theme: {
                fill: "white",
                stroke: "none"
            },
            verticalAlign: "top",
            width: 24
        }
    };
    S.exporting = {
        type: "image/png",
        //url: "http://export.highcharts.com/",
        buttons: {
            contextButton: {
                menuClassName: "highcharts-contextmenu",
                symbol: "menu",
                _titleKey: "contextButtonTitle",
                menuItems: [{
                    textKey: "printChart",
                    onclick: function() {
                        this.print()
                    }
                }
				/*
				, {
                    separator: !0
                }, {
                    textKey: "downloadPNG",
                    onclick: function() {
                        this.exportChart()
                    }
                }, {
                    textKey: "downloadJPEG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/jpeg"
                        })
                    }
                }, {
                    textKey: "downloadPDF",
                    onclick: function() {
                        this.exportChart({
                            type: "application/pdf"
                        })
                    }
                }, {
                    textKey: "downloadSVG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/svg+xml"
                        })
                    }
                }*/
				]
            }
        }
    };
    w.post = function(l, q, s) {
        var x;
        l = N("form", p({
            method: "post",
            action: l,
            enctype: "multipart/form-data"
        }, s), {
            display: "none"
        }, u.body);
        for (x in q) N("input", {
            type: "hidden",
            name: x,
            value: q[x]
        }, null, l);
        l.submit();
        fa(l)
    };
    A(B.prototype, {
        getSVG: function(l) {
            var q = this,
                s, H, C, B, D = p(q.options, l);
            u.createElementNS || (u.createElementNS = function(l, p) {
                return u.createElement(p)
            });
            l = N("div", null, {
                position: "absolute",
                top: "-9999em",
                width: q.chartWidth + "px",
                height: q.chartHeight + "px"
            }, u.body);
            H = q.renderTo.style.width;
            B = q.renderTo.style.height;
            H = D.exporting.sourceWidth || D.chart.width ||
                /px$/.test(H) && parseInt(H, 10) || 600;
            B = D.exporting.sourceHeight || D.chart.height || /px$/.test(B) && parseInt(B, 10) || 400;
            A(D.chart, {
                animation: !1,
                renderTo: l,
                forExport: !0,
                width: H,
                height: B
            });
            D.exporting.enabled = !1;
            D.series = [];
            x(q.series, function(l) {
                C = p(l.options, {
                    animation: !1,
                    enableMouseTracking: !1,
                    showCheckbox: !1,
                    visible: l.visible
                });
                C.isInternal || D.series.push(C)
            });
            s = new w.Chart(D, q.callback);
            x(["xAxis", "yAxis"], function(l) {
                x(q[l], function(p, q) {
                    var u = s[l][q],
                        x = p.getExtremes(),
                        A = x.userMin,
                        x = x.userMax;
                    !u || void 0 ===
                        A && void 0 === x || u.setExtremes(A, x, !0, !1)
                })
            });
            H = s.container.innerHTML;
            D = null;
            s.destroy();
            fa(l);
            H = H.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,
                "\u00a0").replace(/&shy;/g, "\u00ad").replace(/<IMG /g, "<image ").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/id=([^" >]+)/g, 'id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(l) {
                return l.toLowerCase()
            });
            return H = H.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'")
        },
        exportChart: function(l,
            q) {
            l = l || {};
            var u = this.options.exporting,
                u = this.getSVG(p({
                    chart: {
                        borderRadius: 0
                    }
                }, u.chartOptions, q, {
                    exporting: {
                        sourceWidth: l.sourceWidth || u.sourceWidth,
                        sourceHeight: l.sourceHeight || u.sourceHeight
                    }
                }));
            l = p(this.options.exporting, l);
            w.post(l.url, {
                filename: l.filename || "chart",
                type: l.type,
                width: l.width || 0,
                scale: l.scale || 2,
                svg: u
            }, l.formAttributes)
        },
        print: function() {
            var l = this,
                p = l.container,
                q = [],
                s = p.parentNode,
                A = u.body,
                w = A.childNodes;
            l.isPrinting || (l.isPrinting = !0, x(w, function(l, p) {
                1 === l.nodeType && (q[p] =
                    l.style.display, l.style.display = "none")
            }), A.appendChild(p), P.focus(), P.print(), setTimeout(function() {
                s.appendChild(p);
                x(w, function(l, p) {
                    1 === l.nodeType && (l.style.display = q[p])
                });
                l.isPrinting = !1
            }, 1E3))
        },
        contextMenu: function(l, p, u, w, C, B, P) {
            var J = this,
                S = J.options.navigation,
                fa = S.menuItemStyle,
                da = J.chartWidth,
                ma = J.chartHeight,
                W = "cache-" + l,
                T = J[W],
                Y = s(C, B),
                Da, ja, Sa, E = function(p) {
                    J.pointer.inClass(p.target, l) || ja()
                };
            T || (J[W] = T = N("div", {
                    className: l
                }, {
                    position: "absolute",
                    zIndex: 1E3,
                    padding: Y + "px"
                }, J.container),
                Da = N("div", null, A({
                    MozBoxShadow: "3px 3px 10px #888",
                    WebkitBoxShadow: "3px 3px 10px #888",
                    boxShadow: "3px 3px 10px #888"
                }, S.menuStyle), T), ja = function() {
                    q(T, {
                        display: "none"
                    });
                    P && P.setState(0);
                    J.openMenu = !1
                }, D(T, "mouseleave", function() {
                    Sa = setTimeout(ja, 500)
                }), D(T, "mouseenter", function() {
                    clearTimeout(Sa)
                }), D(document, "mouseup", E), D(J, "destroy", function() {
                    V(document, "mouseup", E)
                }), x(p, function(l) {
                    if (l) {
                        var p = l.separator ? N("hr", null, null, Da) : N("div", {
                            onmouseover: function() {
                                q(this, S.menuItemHoverStyle)
                            },
                            onmouseout: function() {
                                q(this,
                                    fa)
                            },
                            onclick: function() {
                                ja();
                                l.onclick.apply(J, arguments)
                            },
                            innerHTML: l.text || J.options.lang[l.textKey]
                        }, A({
                            cursor: "pointer"
                        }, fa), Da);
                        J.exportDivElements.push(p)
                    }
                }), J.exportDivElements.push(Da, T), J.exportMenuWidth = T.offsetWidth, J.exportMenuHeight = T.offsetHeight);
            p = {
                display: "block"
            };
            u + J.exportMenuWidth > da ? p.right = da - u - C - Y + "px" : p.left = u - Y + "px";
            w + B + J.exportMenuHeight > ma && "top" !== P.alignOptions.verticalAlign ? p.bottom = ma - w - Y + "px" : p.top = w + B - Y + "px";
            q(T, p);
            J.openMenu = !0
        },
        addButton: function(l) {
            var q = this,
                u =
                q.renderer,
                s = p(q.options.navigation.buttonOptions, l),
                x = s.onclick,
                C = s.menuItems,
                B, D, P = {
                    stroke: s.symbolStroke,
                    fill: s.symbolFill
                },
                S = s.symbolSize || 12;
            q.btnCount || (q.btnCount = 0);
            q.exportDivElements || (q.exportDivElements = [], q.exportSVGElements = []);
            if (!1 !== s.enabled) {
                var N = s.theme,
                    V = N.states,
                    W = V && V.hover,
                    V = V && V.select,
                    T;
                delete N.states;
                x ? T = function() {
                    x.apply(q, arguments)
                } : C && (T = function() {
                    q.contextMenu(D.menuClassName, C, D.translateX, D.translateY, D.width, D.height, D);
                    D.setState(2)
                });
                s.text && s.symbol ? N.paddingLeft =
                    w.pick(N.paddingLeft, 25) : s.text || A(N, {
                        width: s.width,
                        height: s.height,
                        padding: 0
                    });
                D = u.button(s.text, 0, 0, T, N, W, V).attr({
                    title: q.options.lang[s._titleKey],
                    "stroke-linecap": "round"
                });
                D.menuClassName = l.menuClassName || "highcharts-menu-" + q.btnCount++;
                s.symbol && (B = u.symbol(s.symbol, s.symbolX - S / 2, s.symbolY - S / 2, S, S).attr(A(P, {
                    "stroke-width": s.symbolStrokeWidth || 1,
                    zIndex: 1
                })).add(D));
                D.add().align(A(s, {
                    width: D.width,
                    x: w.pick(s.x, J)
                }), !0, "spacingBox");
                J += (D.width + s.buttonSpacing) * ("right" === s.align ? -1 : 1);
                q.exportSVGElements.push(D,
                    B)
            }
        },
        destroyExport: function(l) {
            l = l.target;
            var p, q;
            for (p = 0; p < l.exportSVGElements.length; p++)
                if (q = l.exportSVGElements[p]) q.onclick = q.ontouchstart = null, l.exportSVGElements[p] = q.destroy();
            for (p = 0; p < l.exportDivElements.length; p++) q = l.exportDivElements[p], V(q, "mouseleave"), l.exportDivElements[p] = q.onmouseout = q.onmouseover = q.ontouchstart = q.onclick = null, fa(q)
        }
    });
    C.menu = function(l, p, q, s) {
        return ["M", l, p + 2.5, "L", l + q, p + 2.5, "M", l, p + s / 2 + .5, "L", l + q, p + s / 2 + .5, "M", l, p + s - 1.5, "L", l + q, p + s - 1.5]
    };
    B.prototype.callbacks.push(function(l) {
        var p,
            q = l.options.exporting,
            s = q.buttons;
        J = 0;
        if (!1 !== q.enabled) {
            for (p in s) l.addButton(s[p]);
            D(l, "destroy", l.destroyExport)
        }
    })
})(Highcharts);
(function(w) {
    var B = w.each,
        D = HighchartsAdapter.inArray,
        V = w.splat,
        N, fa = function(q, p) {
            this.init(q, p)
        };
    w.extend(fa.prototype, {
        init: function(q, p) {
            this.options = q;
            this.chartOptions = p;
            this.columns = q.columns || this.rowsToColumns(q.rows) || [];
            this.rawColumns = [];
            this.columns.length ? this.dataFound() : (this.parseCSV(), this.parseTable(), this.parseGoogleSpreadsheet())
        },
        getColumnDistribution: function() {
            var q = this.chartOptions,
                p = this.options,
                x = [],
                A = function(l) {
                    return (w.seriesTypes[l || "line"].prototype.pointArrayMap || [0]).length
                },
                s = q && q.chart && q.chart.type,
                u = [],
                D = [],
                l, C;
            B(q && q.series || [], function(l) {
                u.push(A(l.type || s))
            });
            B(p && p.seriesMapping || [], function(l) {
                x.push(l.x || 0)
            });
            0 === x.length && x.push(0);
            B(p && p.seriesMapping || [], function(p) {
                var x = new N,
                    B, I = u[l] || A(s),
                    G = w.seriesTypes[((q && q.series || [])[l] || {}).type || s || "line"].prototype.pointArrayMap || ["y"];
                x.addColumnReader(p.x, "x");
                for (B in p) p.hasOwnProperty(B) && "x" !== B && x.addColumnReader(p[B], B);
                for (C = 0; C < I; C++) x.hasReader(G[C]) || x.addColumnReader(void 0, G[C]);
                D.push(x);
                l++
            });
            p = w.seriesTypes[s || "line"].prototype.pointArrayMap;
            void 0 === p && (p = ["y"]);
            this.valueCount = {
                global: A(s),
                xColumns: x,
                individual: u,
                seriesBuilders: D,
                globalPointArrayMap: p
            }
        },
        dataFound: function() {
            this.options.switchRowsAndColumns && (this.columns = this.rowsToColumns(this.columns));
            this.getColumnDistribution();
            this.parseTypes();
            this.findHeaderRow();
            !1 !== this.parsed() && this.complete()
        },
        parseCSV: function() {
            var q = this,
                p = this.options,
                x = p.csv,
                A = this.columns,
                s = p.startRow || 0,
                u = p.endRow || Number.MAX_VALUE,
                w = p.startColumn ||
                0,
                l = p.endColumn || Number.MAX_VALUE,
                C, D, J = 0;
            x && (D = x.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split(p.lineDelimiter || "\n"), C = p.itemDelimiter || (-1 !== x.indexOf("\t") ? "\t" : ","), B(D, function(p, x) {
                var D = q.trim(p),
                    H = 0 === D.indexOf("#");
                x >= s && x <= u && !H && "" !== D && (D = p.split(C), B(D, function(p, q) {
                    q >= w && q <= l && (A[q - w] || (A[q - w] = []), A[q - w][J] = p)
                }), J += 1)
            }), this.dataFound())
        },
        parseTable: function() {
            var q = this.options,
                p = q.table,
                x = this.columns,
                A = q.startRow || 0,
                s = q.endRow || Number.MAX_VALUE,
                u = q.startColumn || 0,
                w = q.endColumn ||
                Number.MAX_VALUE;
            p && ("string" === typeof p && (p = document.getElementById(p)), B(p.getElementsByTagName("tr"), function(l, p) {
                p >= A && p <= s && B(l.children, function(l, q) {
                    ("TD" === l.tagName || "TH" === l.tagName) && q >= u && q <= w && (x[q - u] || (x[q - u] = []), x[q - u][p - A] = l.innerHTML)
                })
            }), this.dataFound())
        },
        parseGoogleSpreadsheet: function() {
            var q = this,
                p = this.options,
                x = p.googleSpreadsheetKey,
                A = this.columns,
                s = p.startRow || 0,
                u = p.endRow || Number.MAX_VALUE,
                w = p.startColumn || 0,
                l = p.endColumn || Number.MAX_VALUE,
                C, B;
            x && jQuery.ajax({
                dataType: "json",
                url: "https://spreadsheets.google.com/feeds/cells/" + x + "/" + (p.googleSpreadsheetWorksheet || "od6") + "/public/values?alt=json-in-script&callback=?",
                error: p.error,
                success: function(p) {
                    p = p.feed.entry;
                    var x, D = p.length,
                        G = 0,
                        H = 0,
                        N;
                    for (N = 0; N < D; N++) x = p[N], G = Math.max(G, x.gs$cell.col), H = Math.max(H, x.gs$cell.row);
                    for (N = 0; N < G; N++) N >= w && N <= l && (A[N - w] = [], A[N - w].length = Math.min(H, u - s));
                    for (N = 0; N < D; N++) x = p[N], C = x.gs$cell.row - 1, B = x.gs$cell.col - 1, B >= w && B <= l && C >= s && C <= u && (A[B - w][C - s] = x.content.$t);
                    q.dataFound()
                }
            })
        },
        findHeaderRow: function() {
            var q =
                0;
            B(this.columns, function(p) {
                p.isNumeric && "string" !== typeof p[0] && (q = null)
            });
            this.headerRow = q
        },
        trim: function(q) {
            return "string" === typeof q ? q.replace(/^\s+|\s+$/g, "") : q
        },
        parseTypes: function() {
            for (var q = this.columns, p = this.rawColumns, x = q.length, A, s, u, w, l, C, B = [], J, L = this.chartOptions; x--;) {
                A = q[x].length;
                p[x] = [];
                for (J = (l = -1 !== D(x, this.valueCount.xColumns)) && L && L.xAxis && "category" === V(L.xAxis)[0].type; A--;) s = B[A] || q[x][A], u = parseFloat(s), w = p[x][A] = this.trim(s), J ? q[x][A] = w : w == u ? (q[x][A] = u, 31536E6 < u ? q[x].isDatetime = !0 : q[x].isNumeric = !0) : (u = this.parseDate(s), l && "number" === typeof u && !isNaN(u) ? (B[A] = s, q[x][A] = u, q[x].isDatetime = !0, void 0 !== q[x][A + 1] && (s = u > q[x][A + 1], s !== C && void 0 !== C && (this.alternativeFormat ? (this.dateFormat = this.alternativeFormat, A = q[x].length, this.alternativeFormat = this.dateFormats[this.dateFormat].alternative) : q[x].unsorted = !0), C = s)) : (q[x][A] = "" === w ? null : w, 0 !== A && (q[x].isDatetime || q[x].isNumeric) && (q[x].mixed = !0)));
                l && q[x].mixed && (q[x] = p[x])
            }
            if (q[0].isDatetime && C)
                for (p = "number" !== typeof q[0][0],
                    x = 0; x < q.length; x++) q[x].reverse(), p && q[x].unshift(q[x].pop())
        },
        dateFormats: {
            "YYYY-mm-dd": {
                regex: /^([0-9]{4})[\-\/\.]([0-9]{2})[\-\/\.]([0-9]{2})$/,
                parser: function(q) {
                    return Date.UTC(+q[1], q[2] - 1, +q[3])
                }
            },
            "dd/mm/YYYY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
                parser: function(q) {
                    return Date.UTC(+q[3], q[2] - 1, +q[1])
                },
                alternative: "mm/dd/YYYY"
            },
            "mm/dd/YYYY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
                parser: function(q) {
                    return Date.UTC(+q[3], q[1] - 1, +q[2])
                }
            },
            "dd/mm/YY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
                parser: function(q) {
                    return Date.UTC(+q[3] + 2E3, q[2] - 1, +q[1])
                },
                alternative: "mm/dd/YY"
            },
            "mm/dd/YY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
                parser: function(q) {
                    console.log(q);
                    return Date.UTC(+q[3] + 2E3, q[1] - 1, +q[2])
                }
            }
        },
        parseDate: function(q) {
            var p = this.options.parseDate,
                x, w, s = this.options.dateFormat || this.dateFormat,
                u;
            p && (x = p(q));
            if ("string" === typeof q) {
                if (s) p = this.dateFormats[s], (u = q.match(p.regex)) && (x = p.parser(u));
                else
                    for (w in this.dateFormats)
                        if (p = this.dateFormats[w], u = q.match(p.regex)) {
                            this.dateFormat =
                                w;
                            this.alternativeFormat = p.alternative;
                            x = p.parser(u);
                            break
                        }
                u || (u = Date.parse(q), "object" === typeof u && null !== u && u.getTime ? x = u.getTime() - 6E4 * u.getTimezoneOffset() : "number" !== typeof u || isNaN(u) || (x = u - 6E4 * (new Date(u)).getTimezoneOffset()))
            }
            return x
        },
        rowsToColumns: function(q) {
            var p, x, w, s, u;
            if (q)
                for (u = [], x = q.length, p = 0; p < x; p++)
                    for (s = q[p].length, w = 0; w < s; w++) u[w] || (u[w] = []), u[w][p] = q[p][w];
            return u
        },
        parsed: function() {
            if (this.options.parsed) return this.options.parsed.call(this, this.columns)
        },
        getFreeIndexes: function(q,
            p) {
            var x, w, s = [],
                u = [],
                B;
            for (w = 0; w < q; w += 1) s.push(!0);
            for (x = 0; x < p.length; x += 1)
                for (B = p[x].getReferencedColumnIndexes(), w = 0; w < B.length; w += 1) s[B[w]] = !1;
            for (w = 0; w < s.length; w += 1) s[w] && u.push(w);
            return u
        },
        complete: function() {
            var q = this.columns,
                p, x = this.options,
                w, s, u, B, l = [],
                C;
            if (x.complete || x.afterComplete) {
                for (u = 0; u < q.length; u++) 0 === this.headerRow && (q[u].name = q[u].shift());
                w = [];
                s = this.getFreeIndexes(q.length, this.valueCount.seriesBuilders);
                for (u = 0; u < this.valueCount.seriesBuilders.length; u++) C = this.valueCount.seriesBuilders[u],
                    C.populateColumns(s) && l.push(C);
                for (; 0 < s.length;) {
                    C = new N;
                    C.addColumnReader(0, "x");
                    u = D(0, s); - 1 !== u && s.splice(u, 1);
                    for (u = 0; u < this.valueCount.global; u++) C.addColumnReader(void 0, this.valueCount.globalPointArrayMap[u]);
                    C.populateColumns(s) && l.push(C)
                }
                0 < l.length && 0 < l[0].readers.length && (C = q[l[0].readers[0].columnIndex], void 0 !== C && (C.isDatetime ? p = "datetime" : C.isNumeric || (p = "category")));
                if ("category" === p)
                    for (u = 0; u < l.length; u++)
                        for (C = l[u], s = 0; s < C.readers.length; s++) "x" === C.readers[s].configName && (C.readers[s].configName =
                            "name");
                for (u = 0; u < l.length; u++) {
                    C = l[u];
                    s = [];
                    for (B = 0; B < q[0].length; B++) s[B] = C.read(q, B);
                    w[u] = {
                        data: s
                    };
                    C.name && (w[u].name = C.name)
                }
                q = {
                    xAxis: {
                        type: p
                    },
                    series: w
                };
                x.complete && x.complete(q);
                x.afterComplete && x.afterComplete(q)
            }
        }
    });
    w.Data = fa;
    w.data = function(q, p) {
        return new fa(q, p)
    };
    w.wrap(w.Chart.prototype, "init", function(q, p, x) {
        var A = this;
        p && p.data ? w.data(w.extend(p.data, {
            afterComplete: function(s) {
                var u, B;
                if (p.hasOwnProperty("series"))
                    if ("object" === typeof p.series)
                        for (u = Math.max(p.series.length, s.series.length); u--;) B =
                            p.series[u] || {}, p.series[u] = w.merge(B, s.series[u]);
                    else delete p.series;
                p = w.merge(s, p);
                q.call(A, p, x)
            }
        }), p) : q.call(A, p, x)
    });
    N = function() {
        this.readers = [];
        this.pointIsArray = !0
    };
    N.prototype.populateColumns = function(q) {
        var p = !0;
        B(this.readers, function(p) {
            void 0 === p.columnIndex && (p.columnIndex = q.shift())
        });
        B(this.readers, function(q) {
            void 0 === q.columnIndex && (p = !1)
        });
        return p
    };
    N.prototype.read = function(q, p) {
        var w = this.pointIsArray,
            A = w ? [] : {},
            s;
        B(this.readers, function(s) {
            var B = q[s.columnIndex][p];
            w ? A.push(B) :
                A[s.configName] = B
        });
        void 0 === this.name && 2 <= this.readers.length && (s = this.getReferencedColumnIndexes(), 2 <= s.length && (s.shift(), s.sort(), this.name = q[s.shift()].name));
        return A
    };
    N.prototype.addColumnReader = function(q, p) {
        this.readers.push({
            columnIndex: q,
            configName: p
        });
        "x" !== p && "y" !== p && void 0 !== p && (this.pointIsArray = !1)
    };
    N.prototype.getReferencedColumnIndexes = function() {
        var q, p = [],
            w;
        for (q = 0; q < this.readers.length; q += 1) w = this.readers[q], void 0 !== w.columnIndex && p.push(w.columnIndex);
        return p
    };
    N.prototype.hasReader =
        function(q) {
            var p, w;
            for (p = 0; p < this.readers.length; p += 1)
                if (w = this.readers[p], w.configName === q) return !0
        }
})(Highcharts);

// Load the fonts
Highcharts.theme = {
   colors: ["#7cb5ec", "#71D169", "#f7a35c", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Dosis, sans-serif"
      }
   },
   title: {
      style: {
		 color: '#555',
         fontSize: '16px',
         fontWeight: 'bold',
         textTransform: 'uppercase'
      }
   },
   tooltip: {
      borderWidth: 1,
      backgroundColor: 'rgb(255,255,255)',
      shadow: false
   },
   legend: {
      itemStyle: {
	      color: '#555',
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      gridLineWidth: 1,
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   yAxis: {
      minorTickInterval: 'auto',
      title: {
         style: {
            textTransform: 'uppercase'
         }
      },
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   plotOptions: {
      candlestick: {
         lineColor: '#404048'
      }
   },


   // General
   background2: '#F0F0EA'
   
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);