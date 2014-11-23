$(document).ready(function () {

    $('.js-info').click(function () {
        $('.b_info__content').toggleClass('is-visible');
    });

    //var quantityAside = $('.aside__order span') для изменения количества в левой колонке. должен запускаться из события добавления в корзину
    $(".q-ctrl").on("click", function () {

        var $button = $(this);
        var oldValue = $button.closest('.main__item__content__footer').find("input.quntity-input").val();

        if ($button.hasClass('icon-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.closest('.main__item__content__footer').find("input.quntity-input").val(newVal);
        //quantityAside.html(newVal);
    });

});





/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=96efdf5e1cebed2797b1)
 * Config saved to config.json and https://gist.github.com/96efdf5e1cebed2797b1
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (t) {
    "use strict";

    function e(e, s) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.modal"),
                r = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            n || i.data("bs.modal", n = new o(this, r)), "string" == typeof e ? n[e](s) : r.show && n.show(s)
        })
    }
    var o = function (e, o) {
        this.options = o, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    o.VERSION = "3.3.1", o.TRANSITION_DURATION = 300, o.BACKDROP_TRANSITION_DURATION = 150, o.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, o.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, o.prototype.show = function (e) {
        var s = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var i = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.options.backdrop && s.adjustBackdrop(), s.adjustDialog(), i && s.$element[0].offsetWidth, s.$element.addClass("in").attr("aria-hidden", !1), s.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? s.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                s.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(o.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(n)
        }))
    }, o.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : this.hideModal())
    }, o.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, o.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, o.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, o.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, o.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, o.prototype.backdrop = function (e) {
        var s = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function (t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                s.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, o.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, o.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, o.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, o.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, o.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, o.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, o.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, o.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = o, t.fn.modal.noConflict = function () {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (o) {
        var s = t(this),
            i = s.attr("href"),
            n = t(s.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            r = n.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, n.data(), s.data());
        s.is("a") && o.preventDefault(), n.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
                s.is(":visible") && s.trigger("focus")
            })
        }), e.call(n, r, this)
    })
}(jQuery);