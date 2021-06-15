window.onload = function() {
    function e(e, i) {
        return e.currentStyle ? e.currentStyle[i] : getComputedStyle(e, !1)[i]
    }
    function i(i, n, t, a) {
        clearInterval(i.timer),
        i.timer = setInterval(function() {
            var t = !0;
            for (var p in n) {
                var s = 0;
                s = "opacity" == p ? Math.round(100 * parseFloat(e(i, p))) : parseInt(e(i, p));
                var l = (n[p] - s) / 6;
                l = l > 0 ? Math.ceil(l) : Math.floor(l),
                s != n[p] && (t = !1),
                "opacity" == p ? (i.style.filter = "alpha(opacity:" + (s + l) + ")", i.style.opacity = (s + l) / 100) : i.style[p] = s + l + "px"
            }
            t && (clearInterval(i.timer), a && a())
        },
        t)
    } !
    function() {
        var e = document.getElementById("toshow"),
        i = document.getElementById("show"),
        n = null;
        e.onmouseover = i.onmouseover = function() {
            i.style.display = "block",
            livelidiv.style.display = "none",
            clearTimeout(n)
        },
        e.onmouseout = function() {
            n = setTimeout(function() {
                i.style.display = "none"
            },
            300)
        }
    } (),
    function() {
        var e = document.getElementById("tougao"),
        i = e.getElementsByTagName("div")[0];
        e.onmouseover = function() {
            i.style.display = "block"
        },
        e.onmouseout = function() {
            i.style.display = "none"
        }
    } (),
    function() {
        var e = document.getElementById("liveli"),
        i = document.getElementById("livelidiv"),
        n = null;
        e.onmouseover = i.onmouseover = function() {
            i.style.display = "block",
            show.style.display = "none",
            clearTimeout(n)
        },
        e.onmouseout = function() {
            n = setTimeout(function() {
                i.style.display = "none"
            },
            300)
        }
    } (),
    function() {
        var e = document.getElementById("nav_app"),
        i = e.getElementsByTagName("div")[0];
        e.onmouseover = function() {
            i.style.display = "block"
        },
        e.onmouseout = function() {
            i.style.display = "none"
        };
        var n = document.getElementById("nav_public"),
        t = document.getElementById("nav_publicDown");
        n.onmouseover = function() {
            t.style.display = "block"
        },
        n.onmouseout = function() {
            t.style.display = "none"
        }
    } (),
    function() {
        for (var e = document.getElementById("imgshow"), i = e.getElementsByTagName("li"), n = e.getElementsByTagName("div"), t = 0; t < i.length; t++) !
        function(e) {
            i[e].onmouseover = function() {
                n[e].style.display = "block"
            }
        } (t),
        function(e) {
            i[e].onmouseout = function() {
                n[e].style.display = "none"
            }
        } (t)
    } (),
    function() {
        for (var e = document.getElementById("app"), i = e.getElementsByTagName("div"), n = e.getElementsByTagName("a"), t = 0; t < n.length; t++) !
        function(e) {
            n[e].onmouseover = function() {
                i[e].style.display = "block"
            }
        } (t),
        function(e) {
            n[e].onmouseout = function() {
                i[e].style.display = "none"
            }
        } (t)
    } (),
    function() {
        for (var e = document.getElementsByClassName("fortext"), i = document.getElementsByClassName("nav_dowm"), n = 0; n < e.length; n++) !
        function(n) {
            e[n].onmouseover = function() {
                i[n].style.display = "block"
            }
        } (n),
        function(n) {
            e[n].onmouseout = function() {
                i[n].style.display = "none"
            }
        } (n)
    } (),
    function() {
        function e() {
            for (var e = 0; e < l.length; e++) l[e].className = "",
            o[e].className = "";
            l[m].className = "imgactive",
            o[m].className = "maskspanShow",
            i(t, {
                marginLeft: -440 * m
            },
            20)
        }
        function n() {
            m++,
            m == l.length && (m = 0),
            e()
        }
        for (var t = document.getElementById("img-turn"), a = document.getElementById("imgturn-more"), p = document.getElementById("turndiv"), s = document.getElementById("main-leftmask"), l = s.getElementsByTagName("li"), o = s.getElementsByTagName("span"), m = 0, r = 0; r < l.length; r++) l[r].index = r,
        function(e) {
            l[r].onmouseover = function() {
                "" == l[e].className && (l[e].className = "imghover")
            }
        } (r),
        function(e) {
            l[e].onmouseout = function() {
                "imghover" == l[e].className && (l[e].className = "")
            }
        } (r),
        l[r].onclick = function() {
            m = this.index,
            e()
        };
        var u = setInterval(n, 2e3);
        p.onmouseover = function() {
            clearInterval(u),
            a.style.display = "block"
        },
        p.onmouseout = function() {
            u = setInterval(n, 2e3),
            a.style.display = "none"
        }
    } (),
    function() {
        function e() {
            for (var e = 0; e < t.length; e++) !
            function(e) {
                t[e].onmouseover = function() {
                    i(a[e], {
                        height: 88
                    },
                    15),
                    a[e].className = "opa70",
                    i(p, {
                        opacity: 80
                    },
                    15),
                    i(s, {
                        opacity: 80
                    },
                    15)
                }
            } (e),
            function(e) {
                t[e].onmouseout = function() {
                    i(a[e], {
                        height: 18
                    },
                    15),
                    a[e].className = "",
                    i(p, {
                        opacity: 0
                    },
                    15),
                    i(s, {
                        opacity: 0
                    },
                    15)
                }
            } (e)
        }
        var n = document.getElementById("MainRight"),
        t = n.getElementsByTagName("li"),
        a = n.getElementsByTagName("div"),
        p = document.getElementById("prev"),
        s = document.getElementById("next");
        e(),
        s.onmouseover = p.onmouseover = function() {
            i(p, {
                opacity: 100
            },
            15),
            i(s, {
                opacity: 100
            },
            15)
        },
        p.onclick = function() {
            "一周" == this.innerHTML ? (this.innerHTML = "三日", s.innerHTML = "昨日", n.innerHTML = '<li><a href=""><img src="img/renew1.jpg" alt=""></a><div><a href=""><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></a></div></li><li><a href=""><img src="img/renew2.jpg" alt=""></a><div><a href=""><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950</p></a></div></li><li><a href=""><img src="img/li2.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶魔</p><p>播放：115761</p></div></li><li><a href=""><img src="img/li4.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li><li><a href=""><img src="img/li4.jpg" alt=""></a><div><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></div></li><li><a href=""><img src="img/li2.jpg" alt=""></a><div><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950div></li><li><a href=""><img src="img/renew4.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶p>播：115761</p></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li>') : "三日" == this.innerHTML ? (this.innerHTML = "昨日", s.innerHTML = "一周", n.innerHTML = '<li><a href=""><img src="img/renew10.jpg" alt=""></a><div><a href=""><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></a></div></li><li><a href=""><img src="img/renew9.jpg" alt=""></a><div><a href=""><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950</p></a></div></li><li><a href=""><img src="img/renew8.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶魔</p><p>播放：115761</p></div></li><li><a href=""><img src="img/renew7.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li><li><a href=""><img src="img/renew6.jpg" alt=""></a><div><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></div></li><li><a href=""><img src="img/renew5.jpg" alt=""></a><div><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950div></li><li><a href=""><img src="img/renew4.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶p>播：115761</p></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li>') : "昨日" == this.innerHTML && (this.innerHTML = "一周", s.innerHTML = "三日", n.innerHTML = '<li><a href=""><img src="img/renew1.jpg" alt=""></a><div><a href=""><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></a></div></li><li><a href=""><img src="img/renew2.jpg" alt=""></a><div><a href=""><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950</p></a></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶魔</p><p>播放：115761</p></div></li><li><a href=""><img src="img/renew4.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li><li><a href=""><img src="img/renew5.jpg" alt=""></a><div><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></div></li><li><a href=""><img src="img/renew6.jpg" alt=""></a><div><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950div></li><li><a href=""><img src="img/renew7.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶p>播：115761</p></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li>'),
            e()
        },
        s.onclick = function() {
            "一周" == this.innerHTML ? (this.innerHTML = "三日", p.innerHTML = "昨日", n.innerHTML = '<li><a href=""><img src="img/renew1.jpg" alt=""></a><div><a href=""><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></a></div></li><li><a href=""><img src="img/renew2.jpg" alt=""></a><div><a href=""><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950</p></a></div></li><li><a href=""><img src="img/li2.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶魔</p><p>播放：115761</p></div></li><li><a href=""><img src="img/li4.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li><li><a href=""><img src="img/li4.jpg" alt=""></a><div><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></div></li><li><a href=""><img src="img/li2.jpg" alt=""></a><div><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950div></li><li><a href=""><img src="img/renew4.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶p>播：115761</p></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li>') : "三日" == this.innerHTML ? (this.innerHTML = "昨日", p.innerHTML = "一周", n.innerHTML = '<li><a href=""><img src="img/renew10.jpg" alt=""></a><div><a href=""><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></a></div></li><li><a href=""><img src="img/renew9.jpg" alt=""></a><div><a href=""><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950</p></a></div></li><li><a href=""><img src="img/renew8.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶魔</p><p>播放：115761</p></div></li><li><a href=""><img src="img/renew7.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li><li><a href=""><img src="img/renew6.jpg" alt=""></a><div><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></div></li><li><a href=""><img src="img/renew5.jpg" alt=""></a><div><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950div></li><li><a href=""><img src="img/renew4.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶p>播：115761</p></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li>') : "昨日" == this.innerHTML && (this.innerHTML = "一周", p.innerHTML = "三日", n.innerHTML = '<li><a href=""><img src="img/renew1.jpg" alt=""></a><div><a href=""><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></a></div></li><li><a href=""><img src="img/renew2.jpg" alt=""></a><div><a href=""><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950</p></a></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶魔</p><p>播放：115761</p></div></li><li><a href=""><img src="img/renew4.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li><li><a href=""><img src="img/renew5.jpg" alt=""></a><div><span>【小坠】 东风志 【魔道祖师同人曲】</span><p>up主：小坠</p><p>播放：110966</p></div></li><li><a href=""><img src="img/renew6.jpg" alt=""></a><div><span>【初音ミク】39 Music！【みきとP】</span><p>up主：等待呢歌</p><p>播放：135950div></li><li><a href=""><img src="img/renew7.jpg" alt=""></a><div><span>【小提琴】《镇命歌》一首空灵耐听的良曲【天使vs恶魔】</span><p>up主：天使VS恶p>播：115761</p></div></li><li><a href=""><img src="img/renew3.jpg" alt=""></a><div><span>【泪向 ASMV】someone like you 再见了</span><p>up主：逆回的阿鉴</p><p>播放：60704</p></div></li>'),
            e()
        }
    } (),
    function() {
        for (var e = document.getElementById("video-pre"), i = document.getElementsByClassName("showper"), n = (document.getElementsByClassName("hide"), ""), t = 0; t < i.length; t++) i[t].addEventListener("mouseover",
        function() {
            clearTimeout(e.timer);
            var i = this.offsetLeft,
            t = this.offsetTop,
            a = this.getAttribute("data-titile"),
            p = this.getAttribute("data-upper"),
            s = this.getAttribute("data-uptime"),
            l = this.getAttribute("data-txt"),
            o = this.getAttribute("data-playtimes"),
            m = this.getAttribute("data-conten"),
            r = this.getAttribute("data-coin"),
            u = this.getAttribute("data-stars"),
            g = this.getAttribute("data-img");
            e.style.left = i + "px",
            e.style.top = t - 210 + "px",
            n = "<a>" + a + "</a><h4>" + p + "<span>" + s + "</span></h4><div class='clearfix'><img src='" + g + "'<strong>" + l + "</strong></div><p><span>" + o + "</span><em>" + r + "</em><i>" + m + "</i><a >" + u + "</a></p>",
            e.innerHTML = n,
            e.timer = setTimeout(function() {
                e.style.display = "block"
            },
            500)
        }),
        i[t].addEventListener("mouseout",
        function() {
            e.style.display = "none",
            clearTimeout(e.timer)
        })
    } (),
    function() {
        for (var e = document.getElementsByClassName("hideli"), n = document.getElementsByClassName("hide"), t = document.getElementsByClassName("video-time"), a = 0; a < e.length; a++) !
        function(a) {
            e[a].addEventListener("mouseover",
            function() {
                i(n[a], {
                    height: 0
                },
                21),
                i(t[a], {
                    opacity: 60
                },
                21)
            })
        } (a),
        function(a) {
            e[a].addEventListener("mouseout",
            function() {
                i(n[a], {
                    height: 24
                },
                21),
                i(t[a], {
                    opacity: 0
                },
                21)
            })
        } (a)
    } (),
    function() {
        for (var e = document.getElementById("live-leftUl"), i = e.getElementsByTagName("li"), n = e.getElementsByTagName("i"), t = 0; t < i.length; t++) !
        function(e) {
            i[e].addEventListener("mouseover",
            function() {
                n[e].style.display = "block"
            })
        } (t),
        function(e) {
            i[e].addEventListener("mouseout",
            function() {
                n[e].style.display = "none"
            })
        } (t)
    } (),
    function() {
        function e() {
            for (var e = 0; e < o.length; e++) o[e].className = "",
            l[e].className = "";
            o[m].className = "activeem",
            l[m].className = "activespan",
            i(t, {
                marginTop: -250 * m
            })
        }
        function n() {
            m++,
            m == o.length && (m = 0),
            e()
        }
        for (var t = document.getElementById("rturnimg"), a = document.getElementById("turnwrap"), p = document.getElementById("spanshow"), s = document.getElementById("showbtn"), l = p.getElementsByTagName("span"), o = s.getElementsByTagName("em"), m = 0, r = 0; r < o.length; r++) o[r].index = r,
        o[r].onmouseover = function() {
            m = this.index,
            e()
        };
        var u = setInterval(n, 2e3);
        a.onmouseover = function() {
            clearInterval(u)
        },
        a.onmouseout = function() {
            u = setInterval(n, 2e3)
        }
    } (),
    function() {
        for (var e = document.getElementsByClassName("rankshow"), n = document.getElementsByClassName("all"), t = 0; t < n.length; t++) n[t].index = t,
        n[t].onmouseover = function() {
            i(e[this.index], {
                marginLeft: 0
            },
            15)
        }
    } (),
    function() {
        for (var e = document.getElementsByClassName("rankshow"), n = document.getElementsByClassName("yc"), t = 0; t < n.length; t++) n[t].index = t,
        n[t].onmouseover = function() {
            i(e[this.index], {
                marginLeft: -260
            },
            15)
        }
    } (),
    function() {
        for (var e = document.getElementById("daymovewrap"), n = e.getElementsByTagName("li"), t = e.getElementsByTagName("div")[0], a = t.getElementsByTagName("span")[0], p = t.getElementsByTagName("em")[0], s = document.getElementById("newanime_leftB"), l = s.getElementsByTagName("ul"), o = ["最新", "周一", "周二", "周三", "周四", "周五", "周六", "周日"], m = 0; m < n.length; m++) n[m].index = m,
        n[m].onclick = function() {
            for (var e = 0; e < n.length; e++) n[e].style.width = "60px",
            l[e].style.display = "none";
            this.style.width = "120px",
            i(t, {
                left: 60 * this.index
            },
            15),
            p.style.backgroundPositionX = -37 + -128 * this.index + "px",
            a.innerHTML = o[this.index],
            l[this.index].style.display = "block"
        }
    } ()
};