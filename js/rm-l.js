jQuery(document).ready(function () {
    iknow_tm_down();
    iknow_tm_content_height();
    iknow_tm_menu_width();
    iknow_tm_portfolio();
    iknow_tm_portfolio_popup();
    iknow_tm_service_popup();
    iknow_tm_news_popup();
    iknow_tm_cursor();
    iknow_tm_imgtosvg();
    iknow_tm_popup();
    iknow_tm_data_images();
    iknow_tm_contact_form();
    iknow_tm_menubar();
    iknow_tm_hero_height();
    iknow_tm_page_transition();
    dodo_parallax_animation();
    if (jQuery(".iknow_tm_hero .main_menu, .iknow_tm_fixed_content .menubar").length) {
        iknow_tm_circular_progress()
    }
    if (jQuery(".iknow_tm_extra_demo_2,.iknow_tm_extra_demo").length) {
        iknow_tm_circular_progress();
        iknow_tm_owl_carousel()
    }
    iknow_tm_extra_menu();
    iknow_tm_vanta_effects();
    iknow_tm_trigger_opener();
    iknow_tm_trigger_menu();
    iknow_tm_menu_width_new();
    hashtag();
    hashtag2();
    iknow_tm_scrollable();
    iknow_tm_menu_image_animation();
    jQuery(window).load("body", function () {
        iknow_tm_my_load()
    });
    jQuery(window).on("resize", function () {
        iknow_tm_hero_height()
    })
});

function iknow_tm_down() {
    jQuery(".anchor").on("click", function () {
        if ($.attr(this, "href") !== "#") {
            $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top - 110
            }, 800)
        }
        return false
    })
}
jQuery(".anchor_nav").onePageNav();

function iknow_tm_hero_height() {
    var b = $(".iknow_tm_hero .main_menu").outerHeight();
    var c = jQuery(window).width();
    var a = $(".iknow_tm_topbar").height();
    if (c >= 1040) {
        $(".iknow_tm_hero .main_info").css({
            minHeight: "calc(100vh - " + b + "px)",
            paddingTop: a + "px"
        })
    }
}

function iknow_tm_content_height() {
    var d = jQuery(window).width();
    var b = jQuery(window).height();
    var k = jQuery(".iknow_tm_topbar").outerHeight();
    var e = jQuery(".iknow_tm_copyright.fixed").outerHeight();
    var g = k + 62;
    var c = k + 35;
    var a = k + 25;
    var f = b - k - e - 62;
    var j = b - k - e - 40;
    var h = b - k - e;
    if (d > 1400) {
        jQuery(".iknow_tm_fixed_content .fixed_content_inner").css({
            height: f + "px",
            top: g + "px"
        })
    } else {
        if (d >= 1040) {
            jQuery(".iknow_tm_fixed_content .fixed_content_inner").css({
                height: h + "px",
                top: a + "px"
            })
        } else {
            jQuery(".iknow_tm_fixed_content .fixed_content_inner").css({
                height: j + "px",
                top: c + "px"
            })
        }
    }
}

function iknow_tm_portfolio() {
    if (jQuery().isotope) {
        var a = jQuery(".iknow_tm_portfolio .portfolio_filter ul");
        if (a.length) {
            a.find("a").on("click", function () {
                var c = jQuery(this);
                var b = c.attr("data-filter");
                var d = c.closest(".iknow_tm_portfolio").find(".portfolio_list").children("ul");
                d.isotope({
                    filter: b,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false
                    }
                });
                a.find("a").removeClass("current");
                c.addClass("current");
                return false
            })
        }
    }
}

function iknow_tm_portfolio_popup() {
    var c = jQuery(".iknow_tm_modalbox");
    var b = jQuery(".iknow_tm_portfolio .portfolio_popup");
    var a = c.find(".close");
    b.off().on("click", function () {
        var e = jQuery(this);
        var f = e.closest(".list_inner");
        var g = f.find(".hidden_content").html();
        var h = f.find(".image .main").data("img-url");
        var d = f.find(".details").html();
        c.addClass("opened");
        c.find(".description_wrap").html(g);
        c.find(".popup_details").prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + h + '"></div></div>');
        c.find(".popup_details .top_image").after('<div class="portfolio_main_title">' + d + "<div>");
        iknow_tm_data_images();
        return false
    });
    a.on("click", function () {
        c.removeClass("opened");
        c.find(".description_wrap").html("");
        return false
    })
}

function iknow_tm_service_popup() {
    var c = jQuery(".iknow_tm_modalbox");
    var b = jQuery(".iknow_tm_services .iknow_tm_full_link");
    var a = c.find(".close");
    b.on("click", function () {
        var d = jQuery(this);
        var e = d.closest(".list_inner");
        var g = e.find(".title").text();
        var f = e.find(".hidden_content").html();
        c.addClass("opened");
        c.find(".description_wrap").html(f);
        iknow_tm_data_images();
        c.find(".service_informations .image").after('<div class="title"><h3>' + g + "</h3></div>");
        return false
    });
    a.on("click", function () {
        c.removeClass("opened");
        c.find(".description_wrap").html("");
        return false
    })
}

function iknow_tm_news_popup() {
    var c = jQuery(".iknow_tm_modalbox");
    var b = jQuery(".iknow_tm_news .iknow_tm_full_link,.iknow_tm_news .news_list ul li .details .title a");
    var a = c.find(".close");
    b.on("click", function () {
        var d = jQuery(this);
        var e = d.closest(".list_inner");
        var g = e.find(".hidden_content").html();
        var h = e.find(".image .main").data("img-url");
        var f = e.find(".details .category a").text();
        var j = e.find(".details .title a").text();
        c.addClass("opened");
        c.find(".description_wrap").html(g);
        c.find(".news_informations").prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + h + '"></div></div>');
        c.find(".news_informations .image").after('<div class="details"><span>' + f + "</span><h3>" + j + "</h3><div>");
        iknow_tm_data_images();
        return false
    });
    a.on("click", function () {
        c.removeClass("opened");
        c.find(".description_wrap").html("");
        return false
    })
}

function iknow_tm_menu_width() {
    var b = jQuery(window).width();
    var a = jQuery(".iknow_tm_hero .main_menu ul li a");
    a.on("mouseenter", function () {
        var e = jQuery(this);
        var c = e.closest("li");
        if (c.hasClass("active") || c.hasClass("entered")) {
            return false
        }
        c.closest("ul").children().removeClass("entered");
        c.addClass("entered");
        var d = c.outerWidth();
        var f = c.find("span").outerWidth();
        c.css({
            width: d + f + "px"
        })
    }).on("mouseleave", function () {
        var g = jQuery(this);
        var c = g.closest("li");
        var f = c.closest("ul").children();
        var h = c.closest("ul").children(".fixed");
        var e = c.closest("ul").children(".active");
        f.removeClass("entered").css({
            width: "135px"
        });
        if (b <= 1400) {
            f.removeClass("entered").css({
                width: "95px"
            })
        }
        if (e.length) {
            var d = 135;
            if (b <= 1400) {
                d = 95
            }
            var j = e.find("span").outerWidth();
            e.removeClass("fixed").addClass("active").css({
                width: d + j + "px"
            })
        }
    });
    a.on("click", function () {
        var g = jQuery(this);
        var c = g.closest("li");
        var d = g.attr("href");
        if (c.hasClass("active") && !c.hasClass("entered")) {
            return false
        }
        c.addClass("active fixed");
        var e = g.closest(".main_menu");
        if (b <= 1040) {
            $("html, body").animate({
                scrollTop: $(".iknow_tm_mainpart").offset().top - 30
            }, 1000)
        } else {
            $("html, body").animate({
                scrollTop: e.offset().top - 30
            }, 1000)
        }
        c.siblings().removeClass("active").css({
            width: "135px"
        });
        if (b <= 1400) {
            c.siblings().removeClass("active").css({
                width: "95px"
            })
        }
        $(".iknow_tm_main_section.active").removeClass("active");
        jQuery(".iknow_tm_mainpart").addClass("opened");
        jQuery(".iknow_tm_hero .background_shape").addClass("opened");
        jQuery(".iknow_tm_copyright.hidden").addClass("visible");
        $(d).addClass("active");
        if (!c.hasClass("entered")) {
            var f = c.outerWidth();
            var h = c.find("span").outerWidth();
            c.css({
                width: f + h + "px"
            })
        }
        iknow_tm_owl_carousel();
        return false
    });
    jQuery(".iknow_tm_hero .main_menu ul li.active").each(function () {
        var e = jQuery(this);
        var d = e.outerWidth();
        var f = e.find("span").outerWidth();
        var c = e.find("a").attr("href");
        e.css({
            width: d + f + "px"
        });
        $(c).addClass("active")
    })
}

function tdProgress(a) {
    a.find(".progress_inner").each(function () {
        var d = jQuery(this);
        var b = parseInt(d.data("value"), 10);
        var g = d.data("color");
        var h = d.find(".bar");
        var f = d.find(".bar_in");
        var e = d.find(".number");
        var c = d.find(".label");
        e.css({
            right: (100 - b) + "%"
        });
        setTimeout(function () {
            c.addClass("opened")
        }, 500);
        f.css({
            width: b + "%",
            backgroundColor: g
        });
        setTimeout(function () {
            h.addClass("open")
        })
    })
}

function progress_by_frenify(b) {
    var a;
    if (b) {
        a = b.find(".dodo_progress")
    } else {
        a = jQuery(".dodo_progress")
    }
    a.each(function () {
        var c = jQuery(this);
        c.find(".number").css({
            right: "100%"
        });
        console.log(c.find(".number").length);
        c.waypoint({
            handler: function () {
                tdProgress(c)
            },
            offset: "90%"
        })
    })
}
if (!$(".iknow_tm_extra_menu").length) {
    progress_by_frenify()
}

function iknow_tm_preloader() {
    var a = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var b = $("#preloader");
    if (!a) {
        setTimeout(function () {
            b.addClass("preloaded")
        }, 800);
        setTimeout(function () {
            b.remove()
        }, 2000)
    } else {
        b.remove()
    }
}

function iknow_tm_my_load() {
    var a = 500;
    setTimeout(function () {
        iknow_tm_preloader()
    }, a);
    setTimeout(function () {
        jQuery("body").addClass("opened")
    }, a + 2000)
}

function iknow_tm_cursor() {
    var a = jQuery(".mouse-cursor");
    if (a.length) {
        if ($("body")) {
            const c = document.querySelector(".cursor-inner"),
                b = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function (d) {
                o || (b.style.transform = "translate(" + d.clientX + "px, " + d.clientY + "px)"), c.style.transform = "translate(" + d.clientX + "px, " + d.clientY + "px)", n = d.clientY, i = d.clientX
            }, $("body").on("mouseenter", "a,.iknow_tm_topbar .trigger, .cursor-pointer", function () {
                c.classList.add("cursor-hover"), b.classList.add("cursor-hover")
            }), $("body").on("mouseleave", "a,.iknow_tm_topbar .trigger, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (c.classList.remove("cursor-hover"), b.classList.remove("cursor-hover"))
            }), c.style.visibility = "visible", b.style.visibility = "visible"
        }
    }
}

function iknow_tm_imgtosvg() {
    jQuery("img.svg").each(function () {
        var b = jQuery(this);
        var c = b.attr("class");
        var a = b.attr("src");
        jQuery.get(a, function (e) {
            var d = jQuery(e).find("svg");
            if (typeof c !== "undefined") {
                d = d.attr("class", c + " replaced-svg")
            }
            d = d.removeAttr("xmlns:a");
            b.replaceWith(d)
        }, "xml")
    })
}

function iknow_tm_popup() {
    jQuery(".gallery_zoom").each(function () {
        jQuery(this).magnificPopup({
            delegate: "a.zoom",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: "mfp-fade"
        })
    });
    jQuery(".popup-youtube, .popup-tiktok").each(function () {
        jQuery(this).magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        })
    });
    jQuery(".soundcloude_link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    })
}

function iknow_tm_data_images() {
    var a = jQuery("*[data-img-url]");
    a.each(function () {
        var c = jQuery(this);
        var b = c.data("img-url");
        c.css({
            backgroundImage: "url(" + b + ")"
        })
    })
}

function iknow_tm_contact_form() {
    jQuery(".contact_form #send_message").off().on("click", function () {
        var b = jQuery(".contact_form #name").val();
        var a = jQuery(".contact_form #email").val();
        var d = jQuery(".contact_form #message").val();
        var c = jQuery(".contact_form #subject").val();
        var e = jQuery(".contact_form .returnmessage").data("success");
        jQuery(".contact_form .returnmessage").empty();
        if (b === "" || a === "" || d === "") {
            jQuery("div.empty_notice").slideDown(500).delay(2000).slideUp(500)
        } else {
            jQuery.post("modal/contact.php", {
                ajax_name: b,
                ajax_email: a,
                ajax_message: d,
                ajax_subject: c
            }, function (f) {
                jQuery(".contact_form .returnmessage").append(f);
                if (jQuery(".contact_form .returnmessage span.contact_error").length) {
                    jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500)
                } else {
                    jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + e + "</span>");
                    jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500)
                }
                if (f === "") {
                    jQuery("#contact_form")[0].reset()
                }
            })
        }
        return false
    })
}
new WOW().init();

function iknow_tm_owl_carousel() {
    var c = jQuery(".iknow_tm_testimonials .owl-carousel");
    var b = jQuery(".iknow_tm_fixed_content .iknow_tm_testimonials .owl-carousel");
    var a = false;
    if (jQuery("body").hasClass("rtl")) {
        a = "true"
    }
    b.owlCarousel({
        items: 1
    });
    c.owlCarousel({
        loop: true,
        items: 2,
        lazyLoad: false,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 7000,
        rtl: a,
        dots: true,
        nav: false,
        navSpeed: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
    iknow_tm_imgtosvg()
}

function iknow_tm_circular_progress() {
    var b = jQuery(window).width();
    var a;
    if (b > 1400) {
        a = 213
    } else {
        if (b >= 768) {
            a = 170
        } else {
            a = 120
        }
    }
    jQuery(".circular_progress_bar .myCircle").each(function () {
        var c = jQuery(this);
        c.append('<h3 class="number"></h3>');
        var d = c.data("value");
        c.circleProgress({
            size: a,
            value: 0,
            animation: {
                duration: 1400
            },
            thickness: 5,
            fill: "#03AC0E",
            emptyFill: "rgba(0,0,0,0)",
            startAngle: -Math.PI / 2
        }).on("circle-animation-progress", function (g, f, e) {
            c.find("h3").text(parseInt(e.toFixed(2) * 100) + "%")
        });
        c.circleProgress("value", 1);
        setTimeout(function () {
            c.circleProgress("value", d)
        }, 1400)
    })
}

function by_frenify(e, b) {
    var d = jQuery(window).width();
    var c;
    if (d > 1400) {
        c = 213
    } else {
        if (d >= 768) {
            c = 170
        } else {
            c = 120
        }
    }
    var a = e.find(".myCircle");
    if (a.length > 0) {
        a.each(function () {
            var h = jQuery(this);
            var g = h.data("value");
            var f = 1400;
            if (!h.find(".number").length) {
                h.append('<h3 class="number"></h3>')
            }
            h.circleProgress({
                size: c,
                value: 0,
                animation: {
                    duration: f
                },
                thickness: 5,
                fill: "#03AC0E",
                emptyFill: "rgba(0,0,0,0)",
                startAngle: -Math.PI / 2
            }).on("circle-animation-progress", function (l, k, j) {
                h.find("h3").text(parseInt(j.toFixed(2) * 100) + "%")
            });
            setTimeout(function () {
                h.circleProgress("value", 1)
            }, b);
            setTimeout(function () {
                h.circleProgress("value", g)
            }, f + b)
        })
    }
}

function iknow_tm_extra_menu() {
    var b = jQuery(".iknow_tm_extra_menu .unorderest_li");
    var c = 1000;
    b.each(function () {
        var d = jQuery(this);
        var e = jQuery(d.find(".iknow_tm_full_link").attr("href")).html();
        d.append('<div class="details_wrapper"></div>').find(".details_wrapper").html(e)
    });
    var a = jQuery(".iknow_tm_extra_menu .iknow_tm_full_link");
    a.on("click", function () {
        var g = jQuery(this);
        var p = g.closest("li");
        var d = p.find(".details_wrapper");
        var q = d.outerHeight() * 0.7;
        var f = 500,
            l = 1000;
        c = q < f ? f : q;
        c = c > l ? l : c;
        c = parseInt(c);
        if (p.hasClass("opened")) {
            p.removeClass("opened").find(".details_wrapper").slideUp(c);
            return false
        } else {
            p.siblings().removeClass("opened");
            p.addClass("opened")
        }
        var h = p.index();
        var e = parseInt(p.css("margin-bottom"));
        var k = p.find(".list_in").outerHeight();
        var m = p.closest(".menu_list");
        var j = m.offset().top + (k + e) * h;
        $("html, body").animate({
            scrollTop: j - e
        }, c);
        p.siblings().find(".details_wrapper").slideUp(c);
        p.find(".details_wrapper").slideDown(c);
        by_frenify(p, c);
        iknow_tm_owl_carousel();
        progress_by_frenify(p);
        iknow_tm_portfolio_popup();
        iknow_tm_service_popup();
        iknow_tm_news_popup();
        iknow_tm_popup();
        iknow_tm_portfolio();
        iknow_tm_contact_form();
        return false
    })
}

function iknow_tm_menubar() {
    var a = jQuery(".iknow_tm_fixed_content .menubar ul li, .transition_link a");
    var b = a.find(".iknow_tm_full_link");
    b.on("click", function () {
        var d = jQuery(this);
        var e = d.closest("li");
        var c = d.attr("href");
        if (!e.hasClass("active")) {
            a.removeClass("active");
            e.addClass("active");
            $(".iknow_tm_main_section").removeClass("active");
            $(c).addClass("active");
            $(".mainbar").animate({
                scrollTop: 0
            }, 300);
            iknow_tm_owl_carousel()
        }
    })
}

function iknow_tm_page_transition() {
    var d = jQuery(".iknow_tm_animate_section");
    var c = jQuery(".transition_link li");
    var b = jQuery(".transition_link a");
    var f = jQuery(".iknow_tm_all_wrap");
    var e = f.data("enter");
    var a = f.data("exit");
    b.on("click", function () {
        var h = jQuery(this);
        var g = h.attr("href");
        if (h.parent().hasClass("iknow_tm_button")) {
            jQuery('.menu.transition_link a[href="' + g + '"]').trigger("click");
            hashtag2();
            return false
        }
        var k = jQuery(g);
        var j = h.closest("li");
        if (!j.hasClass("active")) {
            c.removeClass("active");
            f.find(d).removeClass("animated " + e);
            if (f.hasClass("opened")) {
                f.find(d).addClass("animated " + a)
            }
            j.addClass("active");
            f.addClass("opened");
            f.find(k).removeClass("animated " + a).addClass("animated " + e);
            jQuery(d).addClass("hidden");
            jQuery(k).removeClass("hidden").addClass("active");
            iknow_tm_owl_carousel();
            iknow_tm_circular_progress()
        }
        return false
    })
}

function dodo_parallax_animation() {
    jQuery(".parallax").each(function () {
        var a = jQuery(this);
        var c = a.get(0);
        var b = new Parallax(c, {
            relativeInput: true,
            onReady: function () {
                console.log("ready!")
            }
        })
    })
}

function iknow_tm_vanta_effects() {
    if ($(".iknow_tm_hero_extra .background .image").length) {
        VANTA.WAVES({
            el: ".iknow_tm_hero_extra .background .image",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 0,
            minWidth: 0,
            scale: 1,
            scaleMobile: 1,
            color: 11949620
        })
    }
}

function iknow_tm_trigger_opener() {
    var b = jQuery("#audio1");
    var a = jQuery("#audio2");
    var c = jQuery(".iknow_tm_extra_demo .iknow_tm_topbar .trigger .hamburger");
    var d = jQuery(".iknow_tm_topbar .wrapper .menu");
    c.on("click", function () {
        var e = jQuery(this);
        if (e.hasClass("is-active")) {
            e.removeClass("is-active");
            b[0].play();
            d.removeClass("opened")
        } else {
            e.addClass("is-active");
            a[0].play();
            d.addClass("opened")
        }
        return false
    })
}

function iknow_tm_trigger_menu() {
    var b = jQuery(".iknow_tm_mobile_menu .trigger .hamburger");
    var c = jQuery(".iknow_tm_mobile_menu .dropdown");
    var a = jQuery(".iknow_tm_mobile_menu .dropdown .dropdown_inner ul li a");
    b.on("click", function () {
        var d = jQuery(this);
        if (d.hasClass("is-active")) {
            d.removeClass("is-active");
            c.slideUp()
        } else {
            d.addClass("is-active");
            c.slideDown()
        }
        return false
    });
    a.on("click", function () {
        jQuery(".iknow_tm_mobile_menu .trigger .hamburger").removeClass("is-active");
        c.slideUp();
        return false
    })
}

function iknow_tm_menu_width_action(c, a) {
    var b = jQuery(window).width();
    if (a === "active") {
        var g = c.closest("li");
        if (g.hasClass("current") || g.hasClass("entered")) {
            return false
        }
        g.closest("ul").children().removeClass("entered");
        g.addClass("entered");
        var h = g.outerWidth();
        var e = g.find("span").outerWidth();
        g.css({
            width: h + e + "px"
        })
    } else {
        var g = c.closest("li");
        var f = g.closest("ul").children();
        var d = g.closest("ul").children(".fixed");
        var j = g.closest("ul").children(".current");
        f.removeClass("entered").css({
            width: "70px"
        });
        if (b <= 1400) {
            f.removeClass("entered").css({
                width: "50px"
            })
        }
        if (j.length) {
            var h = 70;
            if (b <= 1400) {
                h = 50
            }
            var e = j.find("span").outerWidth();
            j.removeClass("fixed").addClass("current").css({
                width: h + e + "px"
            })
        }
    }
}

function iknow_tm_menu_width_new() {
    var b = jQuery(window).width();
    var a = jQuery(".iknow_tm_mainpart_new_2 .main_menu ul li a");
    a.on("mouseenter", function () {
        iknow_tm_menu_width_action(jQuery(this), "active")
    }).on("mouseleave", function () {
        iknow_tm_menu_width_action(jQuery(this), "")
    });
    a.on("click", function () {
        var e = jQuery(this);
        var c = e.closest("li");
        if (c.hasClass("current") && !c.hasClass("entered")) {
            return false
        }
        c.addClass("current fixed");
        c.siblings().removeClass("current").css({
            width: "70px"
        });
        if (b <= 1400) {
            c.siblings().removeClass("current").css({
                width: "50px"
            })
        }
        if (!c.hasClass("entered")) {
            var d = c.outerWidth();
            var f = c.find("span").outerWidth();
            c.css({
                width: d + f + "px"
            })
        }
        return false
    });
    jQuery(".iknow_tm_mainpart_new_2 .main_menu ul li.current").each(function () {
        var d = jQuery(this);
        var c = d.outerWidth();
        var e = d.find("span").outerWidth();
        d.css({
            width: c + e + "px"
        })
    })
}

function hashtag() {
    var b = $(".iknow_tm_topbar .wrapper .menu .ccc");
    var a = $(".iknow_tm_topbar .wrapper .menu .active a");
    $(".iknow_tm_topbar .wrapper .menu a").on("mouseenter", function () {
        var c = $(this);
        currentLink(b, c)
    });
    $(".iknow_tm_topbar .wrapper .menu").on("mouseleave", function () {
        a = $(".iknow_tm_topbar .wrapper .menu .active a");
        currentLink(b, a);
        a.parent().siblings().removeClass("mleave")
    });
    currentLink(b, a)
}

function currentLink(f, c) {
    if (!c.length) {
        return false
    }
    var b = c.offset().left;
    var a = c.outerWidth();
    var d = $(".iknow_tm_topbar .wrapper .menu").offset().left;
    c.parent().removeClass("mleave");
    c.parent().siblings().addClass("mleave");
    f.css({
        left: (b - d) + "px",
        width: a + "px"
    })
}

function hashtag2() {
    var b = $(".iknow_tm_sidebar_2 .ccc");
    var a = $(".iknow_tm_sidebar_2 .active a");
    $(".iknow_tm_sidebar_2 .menu a").on("mouseenter", function () {
        var c = $(this);
        currentLink2(b, c)
    });
    $(".iknow_tm_sidebar_2 .menu").on("mouseleave", function () {
        a = $(".iknow_tm_sidebar_2 .menu .active a");
        currentLink2(b, a);
        a.parent().siblings().removeClass("mleave")
    });
    currentLink2(b, a)
}

function currentLink2(f, c) {
    if (!c.length) {
        return false
    }
    var b = c.offset().top;
    var a = c.outerWidth();
    var d = $(".iknow_tm_sidebar_2 .menu").offset().top;
    c.parent().removeClass("mleave");
    c.parent().siblings().addClass("mleave");
    f.css({
        top: (b - d) + "px"
    })
}

function iknow_tm_scrollable() {
    var g = jQuery(window).width();
    var c = jQuery(window).height();
    var e = jQuery(".iknow_tm_sidebar_3 .menu.scrollable");
    var a = jQuery(".iknow_tm_sidebar_3 .menu");
    var b = jQuery(".iknow_tm_extra_demo .iknow_tm_topbar").outerHeight();
    var f = jQuery(".iknow_tm_sidebar_3 .image").outerHeight() + 45;
    var d = jQuery(".iknow_tm_extra_demo .iknow_tm_copyright").outerHeight();
    if (g <= 1400) {
        a.css({
            height: c - b - f - d
        })
    }
    a.css({
        height: c - b - f - d - 90
    });
    if (g <= 1400) {
        e.each(function () {
            var h = jQuery(this);
            h.css({
                height: c - b - f - d
            }).niceScroll({
                touchbehavior: false,
                cursorwidth: 0,
                autohidemode: true,
                cursorborder: "0px solid #eee"
            })
        })
    }
    e.each(function () {
        var h = jQuery(this);
        h.css({
            height: c - b - f - d - 90
        }).niceScroll({
            touchbehavior: false,
            cursorwidth: 0,
            autohidemode: true,
            cursorborder: "0px solid #eee"
        })
    })
}

function iknow_tm_menu_image_animation() {
    jQuery(window).on("scroll", function () {
        var a = jQuery(".iknow_tm_sidebar_3");
        var b = jQuery(window).scrollTop();
        if (b >= 100) {
            a.addClass("animate")
        } else {
            a.removeClass("animate")
        }
    })
};