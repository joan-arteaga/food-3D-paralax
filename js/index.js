function FastClick(e, t) {
  function n(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  }
  var i;
  t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, FastClick.notNeeded(e) || (deviceIsAndroid && (e.addEventListener("mouseover", n(this.onMouse, this), !0), e.addEventListener("mousedown", n(this.onMouse, this), !0), e.addEventListener("mouseup", n(this.onMouse, this), !0)), e.addEventListener("click", n(this.onClick, this), !0), e.addEventListener("touchstart", n(this.onTouchStart, this), !1), e.addEventListener("touchmove", n(this.onTouchMove, this), !1), e.addEventListener("touchend", n(this.onTouchEnd, this), !1), e.addEventListener("touchcancel", n(this.onTouchCancel, this), !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
    var a = Node.prototype.removeEventListener;
    "click" === t ? a.call(e, t, n.hijacked || n, i) : a.call(e, t, n, i)
  }, e.addEventListener = function(t, n, i) {
    var a = Node.prototype.addEventListener;
    "click" === t ? a.call(e, t, n.hijacked || (n.hijacked = function(e) {
      e.propagationStopped || n(e)
    }), i) : a.call(e, t, n, i)
  }), "function" == typeof e.onclick && (i = e.onclick, e.addEventListener("click", function(e) {
    i(e)
  }, !1), e.onclick = null))
}

function atvImg() {
  function e(e, t, n, i, a, r) {
    var s = o.scrollTop,
      c = o.scrollLeft,
      l = t ? e.touches[0].pageX : e.pageX,
      d = t ? e.touches[0].pageY : e.pageY,
      u = n.getBoundingClientRect(),
      h = n.clientWidth || n.offsetWidth || n.scrollWidth,
      v = n.clientHeight || n.offsetHeight || n.scrollHeight,
      p = 320 / h,
      m = .52 - (l - u.left - c) / h,
      f = .52 - (d - u.top - s) / v,
      g = d - u.top - s - v / 2,
      k = l - u.left - c - h / 2,
      C = (m - k) * (.07 * p),
      E = (g - f) * (.1 * p),
      y = "rotateX(" + E + "deg) rotateY(" + C + "deg)",
      S = Math.atan2(g, k),
      I = 180 * S / Math.PI - 90;
    0 > I && (I += 360), -1 != n.firstChild.className.indexOf(" over") && (y += " scale3d(1.07,1.07,1.07)"), n.firstChild.style.transform = y, r.style.background = "linear-gradient(" + I + "deg, rgba(255,255,255," + (d - u.top - s) / v * .4 + ") 0%,rgba(255,255,255,0) 80%)", r.style.transform = "translateX(" + m * a - .1 + "px) translateY(" + f * a - .1 + "px)";
    for (var T = a, w = 0; a > w; w++) i[w].style.transform = "translateX(" + m * T * (2.5 * w / p) + "px) translateY(" + f * a * (2.5 * w / p) + "px)", T--
  }

  function t(e, t) {
    t.firstChild.className += " over"
  }

  function n(e, t, n, i, a) {
    var o = t.firstChild;
    o.className = o.className.replace(" over", ""), o.style.transform = "", a.style.cssText = "";
    for (var r = 0; i > r; r++) n[r].style.transform = ""
  }
  var i = document,
    a = i.documentElement,
    o = i.getElementsByTagName("body")[0],
    r = window,
    s = i.querySelectorAll(".atvImg"),
    c = s.length,
    l = "ontouchstart" in r || navigator.msMaxTouchPoints;
  if (!(0 >= c))
    for (var d = 0; c > d; d++) {
      var u = s[d],
        h = u.querySelectorAll(".atvImg-layer"),
        v = h.length;
      if (!(0 >= v)) {
        for (; u.firstChild;) u.removeChild(u.firstChild);
        var p = i.createElement("div"),
          m = i.createElement("div"),
          f = i.createElement("div"),
          g = i.createElement("div"),
          k = [];
        u.id = "atvImg__" + d, p.className = "atvImg-container", m.className = "atvImg-shine", f.className = "atvImg-shadow", g.className = "atvImg-layers";
        for (var C = 0; v > C; C++) {
          var E = i.createElement("div"),
            y = h[C].getAttribute("data-img");
          E.className = "atvImg-rendered-layer", E.setAttribute("data-layer", C), E.style.backgroundImage = "url(" + y + ")", g.appendChild(E), k.push(E)
        }
        p.appendChild(f), p.appendChild(g), p.appendChild(m), u.appendChild(p);
        var S = u.clientWidth || u.offsetWidth || u.scrollWidth;
        u.style.transform = "perspective(" + 3 * S + "px)", l ? (r.preventScroll = !1, function(i, a, o, s) {
          u.addEventListener("touchmove", function(t) {
            r.preventScroll && t.preventDefault(), e(t, !0, i, a, o, s)
          }), u.addEventListener("touchstart", function(e) {
            r.preventScroll = !0, t(e, i)
          }), u.addEventListener("touchend", function(e) {
            r.preventScroll = !1, n(e, i, a, o, s)
          })
        }(u, k, v, m)) : ! function(i, a, o, r) {
          u.addEventListener("mousemove", function(t) {
            e(t, !1, i, a, o, r)
          }), u.addEventListener("mouseenter", function(e) {
            t(e, i)
          }), u.addEventListener("mouseleave", function(e) {
            n(e, i, a, o, r)
          })
        }(u, k, v, m)
      }
    }
}
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
  deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
  deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
  deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(e) {
  switch (e.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
      if (e.disabled) return !0;
      break;
    case "input":
      if (deviceIsIOS && "file" === e.type || e.disabled) return !0;
      break;
    case "label":
    case "video":
      return !0
  }
  return /\bneedsclick\b/.test(e.className)
}, FastClick.prototype.needsFocus = function(e) {
  switch (e.nodeName.toLowerCase()) {
    case "textarea":
      return !0;
    case "select":
      return !deviceIsAndroid;
    case "input":
      switch (e.type) {
        case "button":
        case "checkbox":
        case "file":
        case "image":
        case "radio":
        case "submit":
          return !1
      }
      return !e.disabled && !e.readOnly;
    default:
      return /\bneedsfocus\b/.test(e.className)
  }
}, FastClick.prototype.sendClick = function(e, t) {
  var n, i;
  document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
}, FastClick.prototype.determineEventType = function(e) {
  return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(e) {
  var t;
  deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
}, FastClick.prototype.updateScrollParent = function(e) {
  var t, n;
  if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
    n = e;
    do {
      if (n.scrollHeight > n.offsetHeight) {
        t = n, e.fastClickScrollParent = n;
        break
      }
      n = n.parentElement
    } while (n)
  }
  t && (t.fastClickLastScrollTop = t.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
  return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
}, FastClick.prototype.onTouchStart = function(e) {
  var t, n, i;
  if (e.targetTouches.length > 1) return !0;
  if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], deviceIsIOS) {
    if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
    if (!deviceIsIOS4) {
      if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
      this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
    }
  }
  return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(e) {
  var t = e.changedTouches[0],
    n = this.touchBoundary;
  return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
}, FastClick.prototype.onTouchMove = function(e) {
  return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
}, FastClick.prototype.findControl = function(e) {
  return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(e) {
  var t, n, i, a, o, r = this.targetElement;
  if (!this.trackingClick) return !0;
  if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
  if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (o = e.changedTouches[0], r = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || r, r.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = r.tagName.toLowerCase(), "label" === i) {
    if (t = this.findControl(r)) {
      if (this.focus(r), deviceIsAndroid) return !1;
      r = t
    }
  } else if (this.needsFocus(r)) return e.timeStamp - n > 100 || deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(r), this.sendClick(r, e), deviceIsIOS4 && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
  return deviceIsIOS && !deviceIsIOS4 && (a = r.fastClickScrollParent, a && a.fastClickLastScrollTop !== a.scrollTop) ? !0 : (this.needsClick(r) || (e.preventDefault(), this.sendClick(r, e)), !1)
}, FastClick.prototype.onTouchCancel = function() {
  this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(e) {
  return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
}, FastClick.prototype.onClick = function(e) {
  var t;
  return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
}, FastClick.prototype.destroy = function() {
  var e = this.layer;
  deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(e) {
  var t, n;
  if ("undefined" == typeof window.ontouchstart) return !0;
  if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
    if (!deviceIsAndroid) return !0;
    if (t = document.querySelector("meta[name=viewport]")) {
      if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
      if (n > 31 && window.innerWidth <= window.screen.width) return !0
    }
  }
  return "none" === e.style.msTouchAction ? !0 : !1
}, FastClick.attach = function(e, t) {
  return new FastClick(e, t)
}, "undefined" != typeof define && define.amd ? define(function() {
  return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, document.addEventListener("touchstart", function() {}, !0), atvImg();