$(function() {
    function t(t, e) {
        return t.currentStyle ? t.currentStyle[e] : getComputedStyle(t, !1)[e]
    }
    function e(e, i, n, a) {
        clearInterval(e.timer),
        e.timer = setInterval(function() {
            var n = !0;
            for (var o in i) {
                var s = 0;
                s = "opacity" == o ? Math.round(100 * parseFloat(t(e, o))) : parseInt(t(e, o));
                var l = (i[o] - s) / 6;
                l = l > 0 ? Math.ceil(l) : Math.floor(l),
                s != i[o] && (n = !1),
                "opacity" == o ? (e.style.filter = "alpha(opacity:" + (s + l) + ")", e.style.opacity = (s + l) / 100) : e.style[o] = s + l + "px"
            }
            n && (clearInterval(e.timer), a && a())
        },
        n)
    } !
    function() {
        var t = null;
        $("#toshow").mouseover(function() {
            $("#show").show(),
            clearTimeout(t),
            $("#livelidiv").hide()
        }),
        $("#show").mouseover(function() {
            $("#show").show(),
            clearTimeout(t),
            $("#livelidiv").hide()
        }),
        $("#toshow").mouseout(function() {
            t = setTimeout(function() {
                $("#show").hide()
            },
            500)
        }),
        $("#imgshow li").mouseover(function() {
            var t = $(this).index();
            $("#imgshow div").eq(t).show()
        }),
        $("#imgshow li").mouseout(function() {
            var t = $(this).index();
            $("#imgshow div").eq(t).hide()
        })
    } (),
    function() {
        $("#tougao").mouseover(function() {
            $("#tougao div").show()
        }),
        $("#tougao").mouseout(function() {
            $("#tougao div").hide()
        })
    } (),
    function() {
        var t = null;
        $("#liveli").mouseover(function() {
            $("#livelidiv").show(),
            clearTimeout(t),
            $("#show").hide()
        }),
        $("#liveli").mouseover(function() {
            $("#livelidiv").show(),
            clearTimeout(t),
            $("#show").hide()
        }),
        $("#liveli").mouseout(function() {
            t = setTimeout(function() {
                $("#livelidiv").hide()
            },
            500)
        })
    } (),
    function() {
        $("#nav_app").mouseover(function() {
            $("#nav_app div").show()
        }),
        $("#nav_app").mouseout(function() {
            $("#nav_app div").hide()
        }),
        $("#nav_public").mouseover(function() {
            $("#nav_publicDown").show()
        }),
        $("#nav_public").mouseout(function() {
            $("#nav_publicDown").hide()
        })
    } (),
    function() {
        $(".fortext").mouseover(function() {
            var t = $(this).index();
            $(".nav_dowm").eq(t - 1).show()
        }),
        $(".fortext").mouseout(function() {
            var t = $(this).index();
            $(".nav_dowm").eq(t - 1).hide()
        })
    } (),
    function() {
        function t() {
            n.attr("class", ""),
            $("#main-leftmask span").attr("class", ""),
            n.eq(i).addClass("imgactive"),
            $("#main-leftmask span").eq(i).addClass("maskspanShow"),
            $("#img-turn").stop(),
            $("#img-turn").animate({
                marginLeft: -440 * i + "px"
            })
        }
        function e() {
            i++,
            i == n.length && (i = 0),
            t()
        }
        var i = 0,
        n = $("#main-leftmask li");
        n.mouseover(function() {
            $(this).toggleClass("imghover")
        }).mouseout(function() {
            $(this).toggleClass("imghover")
        }).click(function() {
            var e = $(this).index();
            i = e,
            t()
        });
        var a = setInterval(e, 2e3);
        $("#turndiv").mouseover(function() {
            $("#imgturn-more").toggle(),
            clearInterval(a)
        }),
        $("#turndiv").mouseout(function() {
            $("#imgturn-more").toggle(),
            a = setInterval(e, 2e3)
        })
    } (),
    function() {
        function t() {
            for (var t = 0; t < n.length; t++) !
            function(t) {
                n[t].onmouseover = function() {
                    e(a[t], {
                        height: 88
                    },
                    10),
                    a[t].className = "opa70",
                    e(o, {
                        opacity: 80
                    },
                    15),
                    e(s, {
                        opacity: 80
                    },
                    15)
                }
            } (t),
            function(t) {
                n[t].onmouseout = function() {
                    e(a[t], {
                        height: 18
                    },
                    10),
                    a[t].className = "",
                    e(o, {
                        opacity: 0
                    },
                    15),
                    e(s, {
                        opacity: 0
                    },
                    15)
                }
            } (t)
        }
        var i = document.getElementById("MainRight"),
        n = i.getElementsByTagName("li"),
        a = i.getElementsByTagName("div"),
        o = document.getElementById("prev"),
        s = document.getElementById("next");
        t(),
        s.onmouseover = o.onmouseover = function() {
            e(o, {
                opacity: 100
            },
            15),
            e(s, {
                opacity: 100
            },
            15)
        },
        $("#prev").click(function() {
            if ("一周" == $(this).html()) {
                $(this).html("三日").siblings("div").html("昨日");
                var e = JSON.parse($.ajax({
                    url: "../txt/three.json",
                    async: !1
                }).responseText),
                i = "";
                $.each(e,
                function(t) {
                    i += '<li><a href=""><img src="' + e[t].img + '"alt=""></a><div><a href=""><span>' + e[t].intro + "</span><p>" + e[t].uper + "</p><p>播放：" + e[t].img.times + "</p></a></div></li>"
                }),
                $("#MainRight").html(i),
                t()
            } else if ("三日" == $(this).html()) {
                $(this).html("昨日").siblings("div").html("一周");
                var e = JSON.parse($.ajax({
                    url: "../txt/data.json",
                    async: !1
                }).responseText),
                i = "";
                $.each(e,
                function(t) {
                    i += '<li><a href=""><img src="' + e[t].img + '"alt=""></a><div><a href=""><span>' + e[t].intro + "</span><p>" + e[t].uper + "</p><p>播放：" + e[t].img.times + "</p></a></div></li>"
                }),
                $("#MainRight").html(i),
                t()
            } else if ("昨日" == $(this).html()) {
                $(this).html("一周").siblings("div").html("三日");
                var e = JSON.parse($.ajax({
                    url: "../txt/yesterday.json",
                    async: !1
                }).responseText),
                i = "";
                $.each(e,
                function(t) {
                    i += '<li><a href=""><img src="' + e[t].img + '"alt=""></a><div><a href=""><span>' + e[t].intro + "</span><p>" + e[t].uper + "</p><p>播放：" + e[t].img.times + "</p></a></div></li>"
                }),
                $("#MainRight").html(i),
                t()
            }
        }),
        $("#next").click(function() {
            if ("一周" == $(this).html()) {
                $(this).html("昨日").siblings("div").html("三日");
                var e = JSON.parse($.ajax({
                    url: "../txt/yesterday.json",
                    async: !1
                }).responseText),
                i = "";
                $.each(e,
                function(t) {
                    i += '<li><a href=""><img src="' + e[t].img + '"alt=""></a><div><a href=""><span>' + e[t].intro + "</span><p>" + e[t].uper + "</p><p>播放：" + e[t].img.times + "</p></a></div></li>"
                }),
                $("#MainRight").html(i),
                t()
            } else if ("三日" == $(this).html()) {
                $(this).html("一周").siblings("div").html("昨日");
                var e = JSON.parse($.ajax({
                    url: "../txt/data.json",
                    async: !1
                }).responseText),
                i = "";
                $.each(e,
                function(t) {
                    i += '<li><a href=""><img src="' + e[t].img + '"alt=""></a><div><a href=""><span>' + e[t].intro + "</span><p>" + e[t].uper + "</p><p>播放：" + e[t].img.times + "</p></a></div></li>"
                }),
                $("#MainRight").html(i),
                t()
            } else if ("昨日" == $(this).html()) {
                $(this).html("三日").siblings("div").html("一周");
                var e = JSON.parse($.ajax({
                    url: "../txt/three.json",
                    async: !1
                }).responseText),
                i = "";
                $.each(e,
                function(t) {
                    i += '<li><a href=""><img src="' + e[t].img + '"alt=""></a><div><a href=""><span>' + e[t].intro + "</span><p>" + e[t].uper + "</p><p>播放：" + e[t].img.times + "</p></a></div></li>"
                }),
                $("#MainRight").html(i),
                t()
            }
        })
    } (),
    function() {
        for (var t = document.getElementById("video-pre"), e = document.getElementsByClassName("showper"), i = (document.getElementsByClassName("hide"), ""), n = 0; n < e.length; n++) e[n].addEventListener("mouseover",
        function() {
            clearTimeout(t.timer);
            var e = this.offsetLeft,
            n = this.offsetTop,
            a = this.getAttribute("data-titile"),
            o = this.getAttribute("data-upper"),
            s = this.getAttribute("data-uptime"),
            l = this.getAttribute("data-txt"),
            r = this.getAttribute("data-playtimes"),
            m = this.getAttribute("data-conten"),
            u = this.getAttribute("data-coin"),
            c = this.getAttribute("data-stars"),
            h = this.getAttribute("data-img");
            t.style.left = e + "px",
            t.style.top = n - 210 + "px",
            i = "<a>" + a + "</a><h4>" + o + "<span>" + s + "</span></h4><div class='clearfix'><img src='" + h + "'<strong>" + l + "</strong></div><p><span>" + r + "</span><em>" + u + "</em><i>" + m + "</i><a >" + c + "</a></p>",
            t.innerHTML = i,
            t.timer = setTimeout(function() {
                t.style.display = "block"
            },
            500)
        }),
        e[n].addEventListener("mouseout",
        function() {
            t.style.display = "none",
            clearTimeout(t.timer)
        })
    } (),
    $(".hideli").mouseenter(function() {
        var t = $(".hideli").index($(this));
        $(".hide").eq(t).stop().animate({
            height: 0
        }),
        $(".video-time").eq(t).css({
            opacity: .7
        })
    }),
    $(".hideli").mouseleave(function() {
        var t = $(".hideli").index($(this));
        $(".hide").eq(t).stop().animate({
            height: 24
        }),
        $(".video-time").eq(t).css({
            opacity: 0
        })
    }),
    function() {
        function t() {
            $("#showbtn em").eq(i).toggleClass("activeem").siblings("em").removeClass("activeem"),
            $("#spanshow span").eq(i).toggleClass("activespan").siblings("span").removeClass("activespan"),
            $("#rturnimg").animate({
                marginTop: -250 * i
            })
        }
        function e() {
            i++,
            i == $("#showbtn em").length && (i = 0),
            t()
        }
        var i = 0;
        $("#showbtn em").mouseover(function() {
            i = $(this).index(),
            t()
        });
        var n = setInterval(e, 2e3);
        $("#turnwrap").mouseover(function() {
            clearTimeout(n)
        }),
        $("#turnwrap").mouseout(function() {
            n = setInterval(e, 2e3)
        })
    } (),
    $("#daymovewrap li").click(function() {
        var t = $(this).index(),
        e = ["最新", "周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        $("#daymovewrap li").css("width", 60),
        $("#newanime_leftB ul").hide(),
        $(this).css("width", 120),
        $("#newanime_leftB ul").eq(t).show(),
        $("#daymovewrap div").css("left", 60 * t),
        $("#daymovewrap div span").html(e[t]),
        $("#daymovewrap div em").css("backgroundPositionX", -37 + -128 * t)
    });
    var i = 0,
    n = 1765,
    a = [1e3, 1500, 3e3, 6e3, 12e3, 24e3];
    n > a[i] && (n -= a[i], $(".exp p").css("width", n / a[i] * 100 + "%"), i++, $(".exp i").html(i), $(".expnow").html(n), $(".levelnow").html(a[i])),
    function() {
        $(".search_bar").focus(function() {
            "bilibili~~幸福就在你身边" == $(".search_bar").val() && $(this).val("")
        }),
        $(".search_bar").blur(function() {
            "" == $(".search_bar").val() && $(this).val("bilibili~~幸福就在你身边")
        })
    } (),
    function() {
        var t, e;
        $(".login img").mouseenter(function() {
            clearTimeout(t),
            t = setTimeout(function() {
                $(".login img").animate({
                    width: 60,
                    height: 60,
                    top: 24,
                    right: 12
                },
                "fast"),
                $(".logined").slideDown("fast")
            },
            500)
        }),
        $(".login").mouseleave(function() {
            clearTimeout(t),
            clearTimeout(e),
            e = setTimeout(function() {
                $(".login img").animate({
                    width: 36,
                    height: 36,
                    top: 0
                },
                "fast"),
                $(".logined").slideUp("fast")
            },
            300)
        }),
        $(".quit-login").click(function() {
            $(".login img").animate({
                width: 36,
                height: 36,
                top: 0
            },
            "fast"),
            $(".logined").slideUp("fast")
        })
    } (),
    function() {
        for (var t = document.getElementById("live-leftUl"), e = t.getElementsByTagName("li"), i = t.getElementsByTagName("i"), n = 0; n < e.length; n++) !
        function(t) {
            e[t].addEventListener("mouseover",
            function() {
                i[t].style.display = "block"
            })
        } (n),
        function(t) {
            e[t].addEventListener("mouseout",
            function() {
                i[t].style.display = "none"
            })
        } (n)
    } (),
    function() {
        for (var t = document.getElementsByClassName("rankshow"), i = document.getElementsByClassName("all"), n = 0; n < i.length; n++) i[n].index = n,
        i[n].onmouseover = function() {
            e(t[this.index], {
                marginLeft: 0
            },
            15)
        }
    } (),
    function() {
        for (var t = document.getElementsByClassName("rankshow"), i = document.getElementsByClassName("yc"), n = 0; n < i.length; n++) i[n].index = n,
        i[n].onmouseover = function() {
            e(t[this.index], {
                marginLeft: -260
            },
            15)
        }
    } (),
    $(function() {
        $(window).scroll(function() {
            var t = $("#mainwrap").offset().left,
            e = $("#mainwrap").width();
            $("#fixed").css("left", t + e + 10),
            $(window).resize(function() {
                var t = $("#mainwrap").offset().left,
                e = $("#mainwrap").width();
                $("#fixed").css("left", t + e + 10)
            }),
            $(window).scrollTop() > 50 ? $("#fixed").fadeIn(1500) : $("#fixed").fadeOut(1500)
        }),
        $("#totop").click(function() {
            return $("body,html").animate({
                scrollTop: 0
            },
            400),
            !1
        })
    })
});