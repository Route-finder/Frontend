(this["webpackJsonplibrary-route-finder"] =
    this["webpackJsonplibrary-route-finder"] || []).push([
    [0],
    {
        14: function (e, t, n) {
            e.exports = {
                header: "MainNavigation_header__pcWBd",
                logo: "MainNavigation_logo__3mTft",
                active: "MainNavigation_active__oN3Ka",
                badge: "MainNavigation_badge__QYsXO",
            };
        },
        16: function (e, t, n) {
            e.exports = {
                card: "Wrapper_card__6OqbI",
                form: "Wrapper_form__CHRQ1",
            };
        },
        18: function (e, t, n) {
            e.exports = { main: "Layout_main__auk_r" };
        },
        24: function (e, t, n) {},
        28: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                c = n.n(r),
                a = n(7),
                i = n.n(a),
                s = (n(15), n(24), n(2)),
                o = n(3),
                l = n(16),
                j = n.n(l),
                d = n(1);
            var u = function (e) {
                return Object(d.jsx)("div", {
                    className: j.a.card,
                    children: e.children,
                });
            };
            var h = function () {
                var e = Object(r.useState)(null),
                    t = Object(o.a)(e, 2),
                    n = t[0],
                    c = t[1];
                return Object(d.jsxs)(u, {
                    children: [
                        Object(d.jsxs)("form", {
                            className: "form",
                            children: [
                                Object(d.jsxs)("div", {
                                    children: [
                                        Object(d.jsx)("p", {
                                            children: "Book Title: ",
                                        }),
                                        Object(d.jsx)("input", {
                                            id: "search",
                                            type: "text",
                                        }),
                                    ],
                                }),
                                Object(d.jsxs)("div", {
                                    children: [
                                        Object(d.jsx)("p", {
                                            children: "ISBN Number: ",
                                        }),
                                        Object(d.jsx)("input", {
                                            id: "search1",
                                            type: "text",
                                        }),
                                    ],
                                }),
                                Object(d.jsxs)("div", {
                                    children: [
                                        Object(d.jsx)("p", {
                                            children: "Author: ",
                                        }),
                                        Object(d.jsx)("input", {
                                            id: "search2",
                                            type: "text",
                                        }),
                                    ],
                                }),
                                Object(d.jsx)("br", {}),
                                Object(d.jsx)("div", {
                                    children: Object(d.jsx)("button", {
                                        onClick: function (e) {
                                            e.preventDefault();
                                            var t =
                                                    document.getElementById(
                                                        "search"
                                                    ),
                                                n =
                                                    document.getElementById(
                                                        "search1"
                                                    ),
                                                r =
                                                    document.getElementById(
                                                        "search2"
                                                    );
                                            if ("" !== n.value) {
                                                var a = {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type":
                                                            "application/json;charset=utf-8",
                                                    },
                                                    body: JSON.stringify({
                                                        isbn: n.value,
                                                    }),
                                                };
                                                fetch(
                                                    "https://library-guide.herokuapp.com/api/search",
                                                    a
                                                )
                                                    .then(function (e) {
                                                        return e.json();
                                                    })
                                                    .then(function (e) {
                                                        return console.log(e);
                                                    });
                                            } else if (
                                                "" !== r.vaule ||
                                                "" !== t.value
                                            ) {
                                                var i = fetch(
                                                    "https://library-guide.herokuapp.com/api/search",
                                                    {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type":
                                                                "application/json;charset=utf-8",
                                                        },
                                                        body: JSON.stringify({
                                                            author: r.vaule,
                                                            title: t.value,
                                                        }),
                                                    }
                                                );
                                                console.log(i);
                                            } else
                                                alert(
                                                    "Please enter one or more values"
                                                );
                                            var s =
                                                "Book Name: " +
                                                t.value +
                                                ", ISBN: " +
                                                n.value +
                                                ", Author: " +
                                                r.value;
                                            c(s);
                                        },
                                        children: "Search",
                                    }),
                                }),
                            ],
                        }),
                        Object(d.jsx)("p", {
                            children: n || "Empty Basket, please choose a book",
                        }),
                    ],
                });
            };
            var b = function () {
                    return Object(d.jsx)("div", {
                        children: "The list of Books stored in the database",
                    });
                },
                O = n(19);
            var x = function () {
                    var e = c.a.useState(null),
                        t = Object(o.a)(e, 2),
                        n = t[0],
                        a = t[1];
                    c.a.useEffect(function () {
                        fetch("https://library-guide.herokuapp.com/api/books")
                            .then(function (e) {
                                return e.json();
                            })
                            .then(function (e) {
                                a(e.results);
                            });
                    }, []);
                    var i = Object(r.useState)(null),
                        s = Object(o.a)(i, 2),
                        l = s[0],
                        j = s[1];
                    return Object(d.jsxs)("div", {
                        children: [
                            Object(d.jsx)("h1", {
                                children: "Books to be Found",
                            }),
                            Object(d.jsx)(O.a, {
                                columns: [
                                    {
                                        title: "Title",
                                        dataIndex: "title",
                                        key: "title",
                                    },
                                    {
                                        title: "Author",
                                        dataIndex: "author",
                                        key: "author",
                                    },
                                    {
                                        title: "Call Number",
                                        dataIndex: "call_no",
                                        key: "call_no",
                                    },
                                ],
                                data: n,
                            }),
                            Object(d.jsx)("button", {
                                onClick: function (e) {
                                    e.preventDefault();
                                    j(
                                        "Currently Searching Shortest Route, Please Be PATIENT!"
                                    );
                                },
                                children: "Search",
                            }),
                            Object(d.jsx)("div", { children: l || " " }),
                        ],
                    });
                },
                p = n(18),
                v = n.n(p),
                f = n(8),
                m = n(14),
                y = n.n(m);
            var k = function () {
                return Object(d.jsxs)("header", {
                    className: y.a.header,
                    children: [
                        Object(d.jsx)("div", {
                            className: y.a.logo,
                            children: "Library Route Finder",
                        }),
                        Object(d.jsx)("nav", {
                            children: Object(d.jsxs)("ul", {
                                children: [
                                    Object(d.jsx)("li", {
                                        children: Object(d.jsx)(f.b, {
                                            to: "/",
                                            children: "Home",
                                        }),
                                    }),
                                    Object(d.jsx)("li", {
                                        children: Object(d.jsx)(f.b, {
                                            to: "/book-list",
                                            children: "List of Books",
                                        }),
                                    }),
                                    Object(d.jsx)("li", {
                                        children: Object(d.jsx)(f.b, {
                                            to: "books-stored",
                                            children: "Books Stored",
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            };
            var _ = function (e) {
                return Object(d.jsxs)("div", {
                    children: [
                        Object(d.jsx)(k, {}),
                        Object(d.jsx)("main", {
                            className: v.a.main,
                            children: e.children,
                        }),
                    ],
                });
            };
            var g = function () {
                return Object(d.jsx)(_, {
                    children: Object(d.jsxs)(s.c, {
                        children: [
                            Object(d.jsx)(s.a, {
                                path: "/",
                                element: Object(d.jsx)(h, {}),
                            }),
                            Object(d.jsx)(s.a, {
                                path: "book-list",
                                element: Object(d.jsx)(x, {}),
                            }),
                            Object(d.jsx)(s.a, {
                                path: "books-stored",
                                element: Object(d.jsx)(b, {}),
                            }),
                        ],
                    }),
                });
            };
            i.a.render(
                Object(d.jsx)(f.a, { children: Object(d.jsx)(g, {}) }),
                document.getElementById("root")
            );
        },
    },
    [[28, 1, 2]],
]);
//# sourceMappingURL=main.cef9de9a.chunk.js.map
