google.maps.__gjsload__('search_impl', function(_) {
    var uob = function(a) {
            _.E(this, a, 4)
        },
        wob = function(a) {
            vob || (vob = {
                V: "sssM",
                ca: ["ss"]
            });
            var b = vob;
            return _.Nh.eb(a.Eb(), b)
        },
        xob = function(a, b) {
            a.L[0] = b
        },
        yob = function(a, b) {
            a.L[2] = b
        },
        X$ = function(a) {
            _.E(this, a, 3)
        },
        zob = function() {
            var a = _.Aj,
                b = _.Ki;
            this.j = _.Zf;
            this.h = _.vk(_.Rq, a, _.sr + "/maps/api/js/LayersService.GetFeature", b)
        },
        Cob = function(a, b, c) {
            var d = _.zA(new zob);
            c.Nq = (0, _.Pa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.HBa(c, _.rH(b));
            var e = [];
            e.push(_.F.addListener(c, "click", (0, _.Pa)(Aob, null, a)));
            _.ab(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.F.addListener(c, f, (0, _.Pa)(Bob, null, a, f)))
            });
            e.push(_.F.addListener(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        Aob = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Ck(e, 1) ? new _.Ee(_.Dd(e.getLocation(), 0), _.Dd(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.Ld(e, 2); g < h; ++g) {
                    var k = new _.xH(_.Fk(e, 2, g));
                    f.fields[k.getKey()] = k.Ta()
                }
            }
            _.F.trigger(a, "click", b, c, d, f)
        },
        Bob = function(a,
            b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.F.trigger(a, b, c, d, e, h, g)
        },
        Dob = function() {},
        vob;
    _.C(uob, _.D);
    _.C(X$, _.D);
    X$.prototype.getStatus = function() {
        return _.Cd(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.Gm(this.L[1])
    };
    zob.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new uob;
        xob(d, a.layerId.split("|")[0]);
        d.L[1] = a.featureId;
        yob(d, _.Nd(_.Td(this.j)));
        for (var e in a.parameters) {
            var f = new _.xH(_.Kd(d, 3));
            f.L[0] = e;
            f.L[1] = a.parameters[e]
        }
        a = wob(d);
        this.h(a, c, c);
        return a
    };
    zob.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    Dob.prototype.bu = function(a) {
        if (_.qh[15]) {
            var b = a.fe,
                c = a.fe = a.getMap();
            b && a.h && (a.l ? (b = b.__gm.h, b.set(b.get().Uf(a.h))) : a.h && _.cCa(a.h, b) && (_.ab(a.j || [], _.F.removeListener), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest");
                b = new _.Ml;
                d = d.split("|");
                b.layerId = d[0];
                for (var p = 1; p < d.length; ++p) {
                    var q = d[p].split(":");
                    b.parameters[q[0]] = q[1]
                }
                e &&
                    (b.spotlightDescription = new _.Ro(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Pl(g));
                m && (b.travelMapRequest = new _.kh(m));
                h && (b.mapsApiLayer = new _.Jk(h));
                l && (b.mapFeatures = l);
                b.darkLaunch = !!k;
                a.h = b;
                a.l = a.get("renderOnBaseMap");
                a.l ? (a = c.__gm.h, a.set(a.get().pe(b))) : Cob(a, c, b);
                _.og(c, "Lg")
            }
        }
    };
    _.bf("search_impl", new Dob);
});