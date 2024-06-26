function _typeof(e) {
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    _typeof(e)
  );
}
!(function () {
  var e,
    t,
    o,
    n,
    r = {
      frameRate: 150,
      animationTime: 800,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      fixedBackground: !0,
      excluded: '',
    },
    a = r,
    i = !1,
    l = { x: 0, y: 0 },
    c = !1,
    u = document.documentElement,
    s = [],
    d = /^Mac/.test(navigator.platform),
    f = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function m() {
    if (!c && document.body) {
      c = !0;
      var n = document.body,
        r = document.documentElement,
        l = window.innerHeight,
        s = n.scrollHeight;
      if (
        ((u = 0 <= document.compatMode.indexOf('CSS') ? r : n),
        (e = n),
        a.keyboardSupport && O('keydown', b),
        top != self)
      )
        i = !0;
      else if (G && l < s && (n.offsetHeight <= l || r.offsetHeight <= l)) {
        var d,
          f = document.createElement('div');
        if (
          ((f.style.cssText =
            'position:absolute; z-index:-10000; top:0; left:0; right:0; height:' +
            u.scrollHeight +
            'px'),
          document.body.appendChild(f),
          (o = function () {
            d =
              d ||
              setTimeout(function () {
                (f.style.height = '0'),
                  (f.style.height = u.scrollHeight + 'px'),
                  (d = null);
              }, 500);
          }),
          setTimeout(o, 10),
          O('resize', o),
          (t = new $(o)).observe(n, {
            attributes: !0,
            childList: !0,
            characterData: !1,
          }),
          u.offsetHeight <= l)
        ) {
          var m = document.createElement('div');
          (m.style.clear = 'both'), n.appendChild(m);
        }
      }
      a.fixedBackground ||
        ((n.style.backgroundAttachment = 'scroll'),
        (r.style.backgroundAttachment = 'scroll'));
    }
  }
  var h = [],
    w = !1,
    p = Date.now();
  function y(e, t, o) {
    if (
      ((function (e, t) {
        (e = 0 < e ? 1 : -1),
          (t = 0 < t ? 1 : -1),
          (l.x === e && l.y === t) || ((l.x = e), (l.y = t), (h = []), (p = 0));
      })(t, o),
      1 != a.accelerationMax)
    ) {
      var n = Date.now() - p;
      if (n < a.accelerationDelta) {
        var r = (1 + 50 / n) / 2;
        1 < r && ((r = Math.min(r, a.accelerationMax)), (t *= r), (o *= r));
      }
      p = Date.now();
    }
    if (
      (h.push({
        x: t,
        y: o,
        lastX: t < 0 ? 0.99 : -0.99,
        lastY: o < 0 ? 0.99 : -0.99,
        start: Date.now(),
      }),
      !w)
    ) {
      var i = _(),
        c = e === i || e === document.body;
      null == e.$scrollBehavior &&
        (function (e) {
          var t = k(e);
          if (null == E[t]) {
            var o = getComputedStyle(e, '')['scroll-behavior'];
            E[t] = 'smooth' == o;
          }
          return E[t];
        })(e) &&
        ((e.$scrollBehavior = e.style.scrollBehavior),
        (e.style.scrollBehavior = 'auto')),
        P(
          function n(r) {
            for (var i = Date.now(), l = 0, u = 0, s = 0; s < h.length; s++) {
              var d = h[s],
                f = i - d.start,
                m = f >= a.animationTime,
                p = m ? 1 : f / a.animationTime;
              a.pulseAlgorithm && (p = R(p));
              var y = (d.x * p - d.lastX) >> 0,
                v = (d.y * p - d.lastY) >> 0;
              (l += y),
                (u += v),
                (d.lastX += y),
                (d.lastY += v),
                m && (h.splice(s, 1), s--);
            }
            c
              ? window.scrollBy(l, u)
              : (l && (e.scrollLeft += l), u && (e.scrollTop += u)),
              t || o || (h = []),
              h.length
                ? P(n, e, 1e3 / a.frameRate + 1)
                : ((w = !1),
                  null != e.$scrollBehavior &&
                    ((e.style.scrollBehavior = e.$scrollBehavior),
                    (e.$scrollBehavior = null)));
          },
          e,
          0,
        ),
        (w = !0);
    }
  }
  function v(t) {
    c || m();
    var o = t.target;
    if (t.defaultPrevented || t.ctrlKey) return !0;
    if (
      Y(e, 'embed') ||
      (Y(o, 'embed') && /\.pdf/i.test(o.src)) ||
      Y(e, 'object') ||
      o.shadowRoot
    )
      return !0;
    var r = -t.wheelDeltaX || t.deltaX || 0,
      l = -t.wheelDeltaY || t.deltaY || 0;
    d &&
      (t.wheelDeltaX &&
        A(t.wheelDeltaX, 120) &&
        (r = (t.wheelDeltaX / Math.abs(t.wheelDeltaX)) * -120),
      t.wheelDeltaY &&
        A(t.wheelDeltaY, 120) &&
        (l = (t.wheelDeltaY / Math.abs(t.wheelDeltaY)) * -120)),
      r || l || (l = -t.wheelDelta || 0),
      1 === t.deltaMode && ((r *= 40), (l *= 40));
    var u = C(o);
    return u
      ? !!(function (e) {
          if (e) {
            s.length || (s = [e, e, e]),
              (e = Math.abs(e)),
              s.push(e),
              s.shift(),
              clearTimeout(n),
              (n = setTimeout(function () {
                try {
                  localStorage.SS_deltaBuffer = s.join(',');
                } catch (e) {}
              }, 1e3));
            var t = 120 < e && N(e),
              o = !N(120) && !N(100) && !t;
            return e < 50 || o;
          }
        })(l) ||
          (1.2 < Math.abs(r) && (r *= a.stepSize / 120),
          1.2 < Math.abs(l) && (l *= a.stepSize / 120),
          y(u, r, l),
          t.preventDefault(),
          void T())
      : !i ||
          !F ||
          (Object.defineProperty(t, 'target', { value: window.frameElement }),
          parent.wheel(t));
  }
  function b(t) {
    var o = t.target,
      n =
        t.ctrlKey || t.altKey || t.metaKey || (t.shiftKey && 32 !== t.keyCode);
    document.body.contains(e) || (e = document.activeElement);
    var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      t.defaultPrevented ||
      /^(textarea|select|embed|object)$/i.test(o.nodeName) ||
      (Y(o, 'input') && !r.test(o.type)) ||
      Y(e, 'video') ||
      (function (e) {
        var t = e.target,
          o = !1;
        if (-1 != document.URL.indexOf('www.youtube.com/watch'))
          do {
            if (
              (o = t.classList && t.classList.contains('html5-video-controls'))
            )
              break;
          } while ((t = t.parentNode));
        return o;
      })(t) ||
      o.isContentEditable ||
      n
    )
      return !0;
    if (
      (Y(o, 'button') || (Y(o, 'input') && r.test(o.type))) &&
      32 === t.keyCode
    )
      return !0;
    if (Y(o, 'input') && 'radio' == o.type && f[t.keyCode]) return !0;
    var l = 0,
      c = 0,
      u = C(e);
    if (!u) return !i || !F || parent.keydown(t);
    var s = u.clientHeight;
    switch ((u == document.body && (s = window.innerHeight), t.keyCode)) {
      case 38:
        c = -a.arrowScroll;
        break;
      case 40:
        c = a.arrowScroll;
        break;
      case 32:
        c = -(t.shiftKey ? 1 : -1) * s * 0.9;
        break;
      case 33:
        c = 0.9 * -s;
        break;
      case 34:
        c = 0.9 * s;
        break;
      case 36:
        u == document.body &&
          document.scrollingElement &&
          (u = document.scrollingElement),
          (c = -u.scrollTop);
        break;
      case 35:
        var d = u.scrollHeight - u.scrollTop - s;
        c = 0 < d ? 10 + d : 0;
        break;
      case 37:
        l = -a.arrowScroll;
        break;
      case 39:
        l = a.arrowScroll;
        break;
      default:
        return !0;
    }
    y(u, l, c), t.preventDefault(), T();
  }
  function g(t) {
    e = t.target;
  }
  var S,
    x,
    k =
      ((S = 0),
      function (e) {
        return e.uniqueID || (e.uniqueID = S++);
      }),
    D = {},
    M = {},
    E = {};
  function T() {
    clearTimeout(x),
      (x = setInterval(function () {
        D = M = E = {};
      }, 1e3));
  }
  function B(e, t, o) {
    for (var n = o ? D : M, r = e.length; r--; ) n[k(e[r])] = t;
    return t;
  }
  function C(e) {
    var t = [],
      o = document.body,
      n = u.scrollHeight;
    do {
      var r = M[k(e)];
      if (r) return B(t, r);
      if ((t.push(e), n === e.scrollHeight)) {
        var a = (z(u) && z(o)) || L(u);
        if ((i && H(u)) || (!i && a)) return B(t, _());
      } else if (H(e) && L(e)) return B(t, e);
    } while ((e = e.parentElement));
  }
  function H(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function z(e) {
    return 'hidden' !== getComputedStyle(e, '').getPropertyValue('overflow-y');
  }
  function L(e) {
    var t = getComputedStyle(e, '').getPropertyValue('overflow-y');
    return 'scroll' === t || 'auto' === t;
  }
  function O(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }
  function X(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }
  function Y(e, t) {
    return e && (e.nodeName || '').toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer)
    try {
      s = localStorage.SS_deltaBuffer.split(',');
    } catch (v) {}
  function A(e, t) {
    return Math.floor(e / t) == e / t;
  }
  function N(e) {
    return A(s[0], e) && A(s[1], e) && A(s[2], e);
  }
  var K,
    P =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60);
      },
    $ =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
    _ =
      ((K = document.scrollingElement),
      function () {
        if (!K) {
          var e = document.createElement('div');
          (e.style.cssText = 'height:10000px;width:1px;'),
            document.body.appendChild(e);
          var t = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            (K =
              document.body.scrollTop != t
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e);
        }
        return K;
      });
  function j(e) {
    var t;
    return (
      ((e *= a.pulseScale) < 1
        ? e - (1 - Math.exp(-e))
        : ((e -= 1), (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) *
      a.pulseNormalize
    );
  }
  function R(e) {
    return 1 <= e
      ? 1
      : e <= 0
      ? 0
      : (1 == a.pulseNormalize && (a.pulseNormalize /= j(1)), j(e));
  }
  var q = window.navigator.userAgent,
    V = /Edge/.test(q),
    F = /chrome/i.test(q) && !V,
    I = /safari/i.test(q) && !V,
    W = /mobile/i.test(q),
    U = /Windows NT 6.1/i.test(q) && /rv:11/i.test(q),
    G = I && (/Version\/8/i.test(q) || /Version\/9/i.test(q)),
    J = (F || I || U) && !W,
    Q = !1;
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          Q = !0;
        },
      }),
    );
  } catch (v) {}
  var Z = !!Q && { passive: !1 },
    ee = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  function te(e) {
    for (var t in e) r.hasOwnProperty(t) && (a[t] = e[t]);
  }
  ee && J && (O(ee, v, Z), O('mousedown', g), O('load', m)),
    (te.destroy = function () {
      t && t.disconnect(),
        X(ee, v),
        X('mousedown', g),
        X('keydown', b),
        X('resize', o),
        X('load', m);
    }),
    window.SmoothScrollOptions && te(window.SmoothScrollOptions),
    'function' == typeof define && define.amd
      ? define(function () {
          return te;
        })
      : 'object' ==
        ('undefined' == typeof exports ? 'undefined' : _typeof(exports))
      ? (module.exports = te)
      : (window.SmoothScroll = te);
})();
