function iknow_tm_down() {
    jQuery(".anchor").on("click", function() {
        return "#" !== $.attr(this, "href") && $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 110
        }, 800), !1
    })
}

function iknow_tm_hero_height() {
    var e = $(".iknow_tm_hero .main_menu").outerHeight(),
        t = jQuery(window).width(),
        i = $(".iknow_tm_topbar").height();
    t >= 1040 && $(".iknow_tm_hero .main_info").css({
        minHeight: "calc(100vh - " + e + "px)",
        paddingTop: i + "px"
    })
}

function iknow_tm_content_height() {
    var e = jQuery(window).width(),
        t = jQuery(window).height(),
        i = jQuery(".iknow_tm_topbar").outerHeight(),
        n = jQuery(".iknow_tm_copyright.fixed").outerHeight();
    e > 1400 ? jQuery(".iknow_tm_fixed_content .fixed_content_inner").css({
        height: t - i - n - 62 + "px",
        top: i + 62 + "px"
    }) : e >= 1040 ? jQuery(".iknow_tm_fixed_content .fixed_content_inner").css({
        height: t - i - n + "px",
        top: i + 25 + "px"
    }) : jQuery(".iknow_tm_fixed_content .fixed_content_inner").css({
        height: t - i - n - 40 + "px",
        top: i + 35 + "px"
    })
}

function iknow_tm_portfolio() {
    if (jQuery().isotope) {
        var e = jQuery(".iknow_tm_portfolio .portfolio_filter ul");
        e.length && e.find("a").on("click", function() {
            var t = jQuery(this),
                i = t.attr("data-filter");
            return t.closest(".iknow_tm_portfolio").find(".portfolio_list").children("ul").isotope({
                filter: i,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), e.find("a").removeClass("current"), t.addClass("current"), !1
        })
    }
}

function iknow_tm_portfolio_popup() {
    var e = jQuery(".iknow_tm_modalbox"),
        t = jQuery(".iknow_tm_portfolio .portfolio_popup"),
        i = e.find(".close");
    t.off().on("click", function() {
        var t = jQuery(this).closest(".list_inner"),
            i = t.find(".hidden_content").html(),
            n = t.find(".image .main").data("img-url"),
            o = t.find(".details").html();
        return e.addClass("opened"), e.find(".description_wrap").html(i), e.find(".popup_details").prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + n + '"></div></div>'), e.find(".popup_details .top_image").after('<div class="portfolio_main_title">' + o + "<div>"), iknow_tm_data_images(), !1
    }), i.on("click", function() {
        return e.removeClass("opened"), e.find(".description_wrap").html(""), !1
    })
}

function iknow_tm_service_popup() {
    var e = jQuery(".iknow_tm_modalbox"),
        t = jQuery(".iknow_tm_services .iknow_tm_full_link"),
        i = e.find(".close");
    t.on("click", function() {
        var t = jQuery(this).closest(".list_inner"),
            i = t.find(".title").text(),
            n = t.find(".hidden_content").html();
        return e.addClass("opened"), e.find(".description_wrap").html(n), iknow_tm_data_images(), e.find(".service_informations .image").after('<div class="title"><h3>' + i + "</h3></div>"), !1
    }), i.on("click", function() {
        return e.removeClass("opened"), e.find(".description_wrap").html(""), !1
    })
}

function iknow_tm_news_popup() {
    var e = jQuery(".iknow_tm_modalbox"),
        t = jQuery(".iknow_tm_news .iknow_tm_full_link,.iknow_tm_news .news_list ul li .details .title a"),
        i = e.find(".close");
    t.on("click", function() {
        var t = jQuery(this).closest(".list_inner"),
            i = t.find(".hidden_content").html(),
            n = t.find(".image .main").data("img-url"),
            o = t.find(".details .category a").text(),
            a = t.find(".details .title a").text();
        return e.addClass("opened"), e.find(".description_wrap").html(i), e.find(".news_informations").prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + n + '"></div></div>'), e.find(".news_informations .image").after('<div class="details"><span>' + o + "</span><h3>" + a + "</h3><div>"), iknow_tm_data_images(), !1
    }), i.on("click", function() {
        return e.removeClass("opened"), e.find(".description_wrap").html(""), !1
    })
}

function iknow_tm_menu_width() {
    var e = jQuery(window).width(),
        t = jQuery(".iknow_tm_hero .main_menu ul li a");
    t.on("mouseenter", function() {
        var e = jQuery(this).closest("li");
        if (e.hasClass("active") || e.hasClass("entered")) return !1;
        e.closest("ul").children().removeClass("entered"), e.addClass("entered");
        var t = e.outerWidth(),
            i = e.find("span").outerWidth();
        e.css({
            width: t + i + "px"
        })
    }).on("mouseleave", function() {
        var t = jQuery(this).closest("li"),
            i = t.closest("ul").children();
        t.closest("ul").children(".fixed");
        var n = t.closest("ul").children(".active");
        if (i.removeClass("entered").css({
                width: "135px"
            }), e <= 1400 && i.removeClass("entered").css({
                width: "95px"
            }), n.length) {
            var o = 135;
            e <= 1400 && (o = 95);
            var a = n.find("span").outerWidth();
            n.removeClass("fixed").addClass("active").css({
                width: o + a + "px"
            })
        }
    }), t.on("click", function() {
        var t = jQuery(this),
            i = t.closest("li"),
            n = t.attr("href");
        if (i.hasClass("active") && !i.hasClass("entered")) return !1;
        i.addClass("active fixed");
        var o = t.closest(".main_menu");
        if (e <= 1040 ? $("html, body").animate({
                scrollTop: $(".iknow_tm_mainpart").offset().top - 30
            }, 1e3) : $("html, body").animate({
                scrollTop: o.offset().top - 30
            }, 1e3), i.siblings().removeClass("active").css({
                width: "135px"
            }), e <= 1400 && i.siblings().removeClass("active").css({
                width: "95px"
            }), $(".iknow_tm_main_section.active").removeClass("active"), jQuery(".iknow_tm_mainpart").addClass("opened"), jQuery(".iknow_tm_hero .background_shape").addClass("opened"), jQuery(".iknow_tm_copyright.hidden").addClass("visible"), $(n).addClass("active"), !i.hasClass("entered")) {
            var a = i.outerWidth(),
                r = i.find("span").outerWidth();
            i.css({
                width: a + r + "px"
            })
        }
        return iknow_tm_owl_carousel(), !1
    }), jQuery(".iknow_tm_hero .main_menu ul li.active").each(function() {
        var e = jQuery(this),
            t = e.outerWidth(),
            i = e.find("span").outerWidth(),
            n = e.find("a").attr("href");
        e.css({
            width: t + i + "px"
        }), $(n).addClass("active")
    })
}

function tdProgress(e) {
    e.find(".progress_inner").each(function() {
        var e = jQuery(this),
            t = parseInt(e.data("value"), 10),
            i = e.data("color"),
            n = e.find(".bar"),
            o = e.find(".bar_in"),
            a = e.find(".number"),
            r = e.find(".label");
        a.css({
            right: 100 - t + "%"
        }), setTimeout(function() {
            r.addClass("opened")
        }, 500), o.css({
            width: t + "%",
            backgroundColor: i
        }), setTimeout(function() {
            n.addClass("open")
        })
    })
}

function progress_by_frenify(e) {
    var t;
    (t = e ? e.find(".dodo_progress") : jQuery(".dodo_progress")).each(function() {
        var e = jQuery(this);
        e.find(".number").css({
            right: "100%"
        }), console.log(e.find(".number").length), e.waypoint({
            handler: function() {
                tdProgress(e)
            },
            offset: "90%"
        })
    })
}

function iknow_tm_preloader() {
    var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
        t = $("#preloader");
    e ? t.remove() : (setTimeout(function() {
        t.addClass("preloaded")
    }, 800), setTimeout(function() {
        t.remove()
    }, 2e3))
}

function iknow_tm_my_load() {
    setTimeout(function() {
        iknow_tm_preloader()
    }, 500), setTimeout(function() {
        jQuery("body").addClass("opened")
    }, 2500)
}

function iknow_tm_cursor() {
    if (jQuery(".mouse-cursor").length && $("body")) {
        let e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer"),
            i, n = 0;
        window.onmousemove = function(o) {
            t.style.transform = "translate(" + o.clientX + "px, " + o.clientY + "px)", e.style.transform = "translate(" + o.clientX + "px, " + o.clientY + "px)", i = o.clientY, n = o.clientX
        }, $("body").on("mouseenter", "a,.iknow_tm_topbar .trigger, .cursor-pointer", function() {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a,.iknow_tm_topbar .trigger, .cursor-pointer", function() {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
}

function iknow_tm_imgtosvg() {
    jQuery("img.svg").each(function() {
        var e = jQuery(this),
            t = e.attr("class"),
            i = e.attr("src");
        jQuery.get(i, function(i) {
            var n = jQuery(i).find("svg");
            void 0 !== t && (n = n.attr("class", t + " replaced-svg")), n = n.removeAttr("xmlns:a"), e.replaceWith(n)
        }, "xml")
    })
}

function iknow_tm_popup() {
    jQuery(".gallery_zoom").each(function() {
        jQuery(this).magnificPopup({
            delegate: "a.zoom",
            type: "image",
            gallery: {
                enabled: !0
            },
            removalDelay: 300,
            mainClass: "mfp-fade"
        })
    }), jQuery(".popup-youtube, .popup-tiktok").each(function() {
        jQuery(this).magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })
    }), jQuery(".soundcloude_link").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    })
}

function iknow_tm_data_images() {
    jQuery("*[data-img-url]").each(function() {
        var e = jQuery(this),
            t = e.data("img-url");
        e.css({
            backgroundImage: "url(" + t + ")"
        })
    })
}

function iknow_tm_contact_form() {
    jQuery(".contact_form #send_message").off().on("click", function() {
        var e = jQuery(".contact_form #name").val(),
            t = jQuery(".contact_form #email").val(),
            i = jQuery(".contact_form #message").val(),
            n = jQuery(".contact_form #subject").val(),
            o = jQuery(".contact_form .returnmessage").data("success");
        return jQuery(".contact_form .returnmessage").empty(), "" === e || "" === t || "" === i ? jQuery("div.empty_notice").slideDown(500).delay(2e3).slideUp(500) : jQuery.post("modal/contact.php", {
            ajax_name: e,
            ajax_email: t,
            ajax_message: i,
            ajax_subject: n
        }, function(e) {
            jQuery(".contact_form .returnmessage").append(e), jQuery(".contact_form .returnmessage span.contact_error").length ? jQuery(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500) : (jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + o + "</span>"), jQuery(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)), "" === e && jQuery("#contact_form")[0].reset()
        }), !1
    })
}

function iknow_tm_owl_carousel() {
    var e = jQuery(".iknow_tm_testimonials .owl-carousel"),
        t = jQuery(".iknow_tm_fixed_content .iknow_tm_testimonials .owl-carousel"),
        i = !1;
    jQuery("body").hasClass("rtl") && (i = "true"), t.owlCarousel({
        items: 1
    }), e.owlCarousel({
        loop: !0,
        items: 2,
        lazyLoad: !1,
        margin: 25,
        autoplay: !0,
        autoplayTimeout: 7e3,
        rtl: i,
        dots: !0,
        nav: !1,
        navSpeed: !1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    }), iknow_tm_imgtosvg()
}

function iknow_tm_circular_progress() {
    var e, t = jQuery(window).width();
    e = t > 1400 ? 213 : t >= 768 ? 170 : 120, jQuery(".circular_progress_bar .myCircle").each(function() {
        var t = jQuery(this);
        t.append('<h3 class="number"></h3>');
        var i = t.data("value");
        t.circleProgress({
            size: e,
            value: 0,
            animation: {
                duration: 1400
            },
            thickness: 5,
            fill: "#03AC0E",
            emptyFill: "rgba(0,0,0,0)",
            startAngle: -Math.PI / 2
        }).on("circle-animation-progress", function(e, i, n) {
            t.find("h3").text(parseInt(100 * n.toFixed(2)) + "%")
        }), t.circleProgress("value", 1), setTimeout(function() {
            t.circleProgress("value", i)
        }, 1400)
    })
}

function by_frenify(e, t) {
    var i, n = jQuery(window).width();
    i = n > 1400 ? 213 : n >= 768 ? 170 : 120;
    var o = e.find(".myCircle");
    o.length > 0 && o.each(function() {
        var e = jQuery(this),
            n = e.data("value");
        e.find(".number").length || e.append('<h3 class="number"></h3>'), e.circleProgress({
            size: i,
            value: 0,
            animation: {
                duration: 1400
            },
            thickness: 5,
            fill: "#03AC0E",
            emptyFill: "rgba(0,0,0,0)",
            startAngle: -Math.PI / 2
        }).on("circle-animation-progress", function(t, i, n) {
            e.find("h3").text(parseInt(100 * n.toFixed(2)) + "%")
        }), setTimeout(function() {
            e.circleProgress("value", 1)
        }, t), setTimeout(function() {
            e.circleProgress("value", n)
        }, 1400 + t)
    })
}

function iknow_tm_extra_menu() {
    var e = jQuery(".iknow_tm_extra_menu .unorderest_li"),
        t = 1e3;
    e.each(function() {
        var e = jQuery(this),
            t = jQuery(e.find(".iknow_tm_full_link").attr("href")).html();
        e.append('<div class="details_wrapper"></div>').find(".details_wrapper").html(t)
    }), jQuery(".iknow_tm_extra_menu .iknow_tm_full_link").on("click", function() {
        var e = jQuery(this).closest("li"),
            i = .7 * e.find(".details_wrapper").outerHeight();
        if (t = parseInt(t = (t = i < 500 ? 500 : i) > 1e3 ? 1e3 : t), e.hasClass("opened")) return e.removeClass("opened").find(".details_wrapper").slideUp(t), !1;
        e.siblings().removeClass("opened"), e.addClass("opened");
        var n = e.index(),
            o = parseInt(e.css("margin-bottom")),
            a = e.find(".list_in").outerHeight(),
            r = e.closest(".menu_list").offset().top + (a + o) * n;
        return $("html, body").animate({
            scrollTop: r - o
        }, t), e.siblings().find(".details_wrapper").slideUp(t), e.find(".details_wrapper").slideDown(t), by_frenify(e, t), iknow_tm_owl_carousel(), progress_by_frenify(e), iknow_tm_portfolio_popup(), iknow_tm_service_popup(), iknow_tm_news_popup(), iknow_tm_popup(), iknow_tm_portfolio(), iknow_tm_contact_form(), !1
    })
}

function iknow_tm_menubar() {
    var e = jQuery(".iknow_tm_fixed_content .menubar ul li, .transition_link a");
    e.find(".iknow_tm_full_link").on("click", function() {
        var t = jQuery(this),
            i = t.closest("li"),
            n = t.attr("href");
        i.hasClass("active") || (e.removeClass("active"), i.addClass("active"), $(".iknow_tm_main_section").removeClass("active"), $(n).addClass("active"), $(".mainbar").animate({
            scrollTop: 0
        }, 300), iknow_tm_owl_carousel())
    })
}

function iknow_tm_page_transition() {
    var e = jQuery(".iknow_tm_animate_section"),
        t = jQuery(".transition_link li"),
        i = jQuery(".transition_link a"),
        n = jQuery(".iknow_tm_all_wrap"),
        o = n.data("enter"),
        a = n.data("exit");
    i.on("click", function() {
        var i = jQuery(this),
            r = i.attr("href");
        if (i.parent().hasClass("iknow_tm_button")) return jQuery('.menu.transition_link a[href="' + r + '"]').trigger("click"), hashtag2(), !1;
        var s = jQuery(r),
            l = i.closest("li");
        return l.hasClass("active") || (t.removeClass("active"), n.find(e).removeClass("animated " + o), n.hasClass("opened") && n.find(e).addClass("animated " + a), l.addClass("active"), n.addClass("opened"), n.find(s).removeClass("animated " + a).addClass("animated " + o), jQuery(e).addClass("hidden"), jQuery(s).removeClass("hidden").addClass("active"), iknow_tm_owl_carousel(), iknow_tm_circular_progress()), !1
    })
}

function dodo_parallax_animation() {
    jQuery(".parallax").each(function() {
        var e = jQuery(this).get(0);
        new Parallax(e, {
            relativeInput: !0,
            onReady: function() {
                console.log("ready!")
            }
        })
    })
}

function iknow_tm_vanta_effects() {
    $(".iknow_tm_hero_extra .background .image").length && VANTA.WAVES({
        el: ".iknow_tm_hero_extra .background .image",
        mouseControls: !0,
        touchControls: !0,
        gyroControls: !1,
        minHeight: 0,
        minWidth: 0,
        scale: 1,
        scaleMobile: 1,
        color: 11949620
    })
}

function iknow_tm_trigger_opener() {
    var e = jQuery("#audio1"),
        t = jQuery("#audio2"),
        i = jQuery(".iknow_tm_extra_demo .iknow_tm_topbar .trigger .hamburger"),
        n = jQuery(".iknow_tm_topbar .wrapper .menu");
    i.on("click", function() {
        var i = jQuery(this);
        return i.hasClass("is-active") ? (i.removeClass("is-active"), e[0].play(), n.removeClass("opened")) : (i.addClass("is-active"), t[0].play(), n.addClass("opened")), !1
    })
}

function iknow_tm_trigger_menu() {
    var e = jQuery(".iknow_tm_mobile_menu .trigger .hamburger"),
        t = jQuery(".iknow_tm_mobile_menu .dropdown"),
        i = jQuery(".iknow_tm_mobile_menu .dropdown .dropdown_inner ul li a");
    e.on("click", function() {
        var e = jQuery(this);
        return e.hasClass("is-active") ? (e.removeClass("is-active"), t.slideUp()) : (e.addClass("is-active"), t.slideDown()), !1
    }), i.on("click", function() {
        return jQuery(".iknow_tm_mobile_menu .trigger .hamburger").removeClass("is-active"), t.slideUp(), !1
    })
}

function iknow_tm_menu_width_action(e, t) {
    var i = jQuery(window).width();
    if ("active" === t) {
        var n = e.closest("li");
        if (n.hasClass("current") || n.hasClass("entered")) return !1;
        n.closest("ul").children().removeClass("entered"), n.addClass("entered");
        var o = n.outerWidth(),
            a = n.find("span").outerWidth();
        n.css({
            width: o + a + "px"
        })
    } else {
        var n = e.closest("li"),
            r = n.closest("ul").children();
        n.closest("ul").children(".fixed");
        var s = n.closest("ul").children(".current");
        if (r.removeClass("entered").css({
                width: "70px"
            }), i <= 1400 && r.removeClass("entered").css({
                width: "50px"
            }), s.length) {
            var o = 70;
            i <= 1400 && (o = 50);
            var a = s.find("span").outerWidth();
            s.removeClass("fixed").addClass("current").css({
                width: o + a + "px"
            })
        }
    }
}

function iknow_tm_menu_width_new() {
    var e = jQuery(window).width(),
        t = jQuery(".iknow_tm_mainpart_new_2 .main_menu ul li a");
    t.on("mouseenter", function() {
        iknow_tm_menu_width_action(jQuery(this), "active")
    }).on("mouseleave", function() {
        iknow_tm_menu_width_action(jQuery(this), "")
    }), t.on("click", function() {
        var t = jQuery(this).closest("li");
        if (t.hasClass("current") && !t.hasClass("entered")) return !1;
        if (t.addClass("current fixed"), t.siblings().removeClass("current").css({
                width: "70px"
            }), e <= 1400 && t.siblings().removeClass("current").css({
                width: "50px"
            }), !t.hasClass("entered")) {
            var i = t.outerWidth(),
                n = t.find("span").outerWidth();
            t.css({
                width: i + n + "px"
            })
        }
        return !1
    }), jQuery(".iknow_tm_mainpart_new_2 .main_menu ul li.current").each(function() {
        var e = jQuery(this),
            t = e.outerWidth(),
            i = e.find("span").outerWidth();
        e.css({
            width: t + i + "px"
        })
    })
}

function hashtag() {
    var e = $(".iknow_tm_topbar .wrapper .menu .ccc"),
        t = $(".iknow_tm_topbar .wrapper .menu .active a");
    $(".iknow_tm_topbar .wrapper .menu a").on("mouseenter", function() {
        var t = $(this);
        currentLink(e, t)
    }), $(".iknow_tm_topbar .wrapper .menu").on("mouseleave", function() {
        t = $(".iknow_tm_topbar .wrapper .menu .active a"), currentLink(e, t), t.parent().siblings().removeClass("mleave")
    }), currentLink(e, t)
}

function currentLink(e, t) {
    if (!t.length) return !1;
    var i = t.offset().left,
        n = t.outerWidth(),
        o = $(".iknow_tm_topbar .wrapper .menu").offset().left;
    t.parent().removeClass("mleave"), t.parent().siblings().addClass("mleave"), e.css({
        left: i - o + "px",
        width: n + "px"
    })
}

function hashtag2() {
    var e = $(".iknow_tm_sidebar_2 .ccc"),
        t = $(".iknow_tm_sidebar_2 .active a");
    $(".iknow_tm_sidebar_2 .menu a").on("mouseenter", function() {
        var t = $(this);
        currentLink2(e, t)
    }), $(".iknow_tm_sidebar_2 .menu").on("mouseleave", function() {
        t = $(".iknow_tm_sidebar_2 .menu .active a"), currentLink2(e, t), t.parent().siblings().removeClass("mleave")
    }), currentLink2(e, t)
}

function currentLink2(e, t) {
    if (!t.length) return !1;
    var i = t.offset().top;
    t.outerWidth();
    var n = $(".iknow_tm_sidebar_2 .menu").offset().top;
    t.parent().removeClass("mleave"), t.parent().siblings().addClass("mleave"), e.css({
        top: i - n + "px"
    })
}

function iknow_tm_scrollable() {
    var e = jQuery(window).width(),
        t = jQuery(window).height(),
        i = jQuery(".iknow_tm_sidebar_3 .menu.scrollable"),
        n = jQuery(".iknow_tm_sidebar_3 .menu"),
        o = jQuery(".iknow_tm_extra_demo .iknow_tm_topbar").outerHeight(),
        a = jQuery(".iknow_tm_sidebar_3 .image").outerHeight() + 45,
        r = jQuery(".iknow_tm_extra_demo .iknow_tm_copyright").outerHeight();
    e <= 1400 && n.css({
        height: t - o - a - r
    }), n.css({
        height: t - o - a - r - 90
    }), e <= 1400 && i.each(function() {
        jQuery(this).css({
            height: t - o - a - r
        }).niceScroll({
            touchbehavior: !1,
            cursorwidth: 0,
            autohidemode: !0,
            cursorborder: "0px solid #eee"
        })
    }), i.each(function() {
        jQuery(this).css({
            height: t - o - a - r - 90
        }).niceScroll({
            touchbehavior: !1,
            cursorwidth: 0,
            autohidemode: !0,
            cursorborder: "0px solid #eee"
        })
    })
}

function iknow_tm_menu_image_animation() {
    jQuery(window).on("scroll", function() {
        var e = jQuery(".iknow_tm_sidebar_3");
        jQuery(window).scrollTop() >= 100 ? e.addClass("animate") : e.removeClass("animate")
    })
}
jQuery(document).ready(function() {
    iknow_tm_down(), iknow_tm_content_height(), iknow_tm_menu_width(), iknow_tm_portfolio(), iknow_tm_portfolio_popup(), iknow_tm_service_popup(), iknow_tm_news_popup(), iknow_tm_cursor(), iknow_tm_imgtosvg(), iknow_tm_popup(), iknow_tm_data_images(), iknow_tm_contact_form(), iknow_tm_menubar(), iknow_tm_hero_height(), iknow_tm_page_transition(), dodo_parallax_animation(), jQuery(".iknow_tm_hero .main_menu, .iknow_tm_fixed_content .menubar").length && iknow_tm_circular_progress(), jQuery(".iknow_tm_extra_demo_2,.iknow_tm_extra_demo").length && (iknow_tm_circular_progress(), iknow_tm_owl_carousel()), iknow_tm_extra_menu(), iknow_tm_vanta_effects(), iknow_tm_trigger_opener(), iknow_tm_trigger_menu(), iknow_tm_menu_width_new(), hashtag(), hashtag2(), iknow_tm_scrollable(), iknow_tm_menu_image_animation(), jQuery(window).load("body", function() {
        iknow_tm_my_load()
    }), jQuery(window).on("resize", function() {
        iknow_tm_hero_height()
    })
}), jQuery(".anchor_nav").onePageNav(), $(".iknow_tm_extra_menu").length || progress_by_frenify(), window.onload = function() {
    var e = document.getElementById("xnxx");
    null == e && (window.location.href = "https://www.temabanua.com"), e.setAttribute("href", "https://www.temabanua.com"), e.innerHTML = "<span>Temabanua</span>"
}, new WOW().init();