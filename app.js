// Teach In Bot Mini App (built by tests/build-mini.js; source teachin-mini/index.html)
(function () { var st = document.createElement("style"); st.textContent = "\n:root{--bg:#1f2029;--card:#2a2c38;--card2:#323545;--text:#dfe1ea;--dim:#9a9db0;--acc:#b794f6;--accText:#1d1430;--red:#f47c8c;--redText:#2b1216;--off:#3a3d4d;--ok:#7bc48f}\n*{box-sizing:border-box}\nhtml,body{margin:0;background:var(--bg);color:var(--text);font-family:system-ui,-apple-system,\"Segoe UI\",Roboto,Arial,sans-serif}\nbody{padding:10px 10px 28px;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}\nbutton,select{font:inherit}\n.msg{text-align:center;padding:40px 12px;color:var(--dim);font-size:17px;line-height:1.5}\n.err{color:#eaa3a3;text-align:center;font-size:16px;margin:10px 0;min-height:20px;line-height:1.4}\n.good{color:var(--ok)}\n/* top: app name and the tabs */\n.top{display:flex;align-items:baseline;gap:8px;margin:2px 2px 10px}\n.top b{font-size:18px}.top span{color:var(--dim);font-size:13px}\n.tabs{display:flex;gap:6px;margin-bottom:10px}\n.tab{flex:1;border:0;border-radius:10px;padding:10px 4px;background:var(--card);color:var(--dim);font-weight:700;font-size:15px}\n.tab.on{background:var(--acc);color:var(--accText)}\n.card{background:var(--card);border-radius:12px;padding:12px;margin-bottom:10px}\nh2{font-size:13px;letter-spacing:.08em;color:var(--dim);margin:0 0 10px;font-weight:800}\n.hint{color:var(--dim);font-size:15px;font-weight:600;margin:0 0 10px;line-height:1.35}\n/* the day */\n.dayrow{display:flex;align-items:center;gap:6px}\n.nav{border:0;border-radius:10px;background:var(--card2);color:var(--text);width:44px;height:44px;font-size:22px;font-weight:700}\n.nav:disabled{opacity:.3}\n.day{flex:1;text-align:center;font-weight:800;font-size:17px;background:var(--acc);color:var(--accText);border-radius:10px;padding:11px 4px;border:0}\n.cal{margin-top:10px;background:var(--card2);border-radius:12px;padding:10px}\n.calh{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.calh b{font-size:17px}\n.calg{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}.calw{text-align:center;color:var(--dim);font-size:13px;font-weight:700}\n.cd{border:0;border-radius:9px;padding:11px 0;background:var(--off);color:var(--text);font-weight:700;font-size:16px}.cd:disabled{opacity:.3}\n.cd.td{outline:2px solid var(--acc)}.cd.on{background:var(--acc);color:var(--accText)}\n.chips{display:flex;gap:6px;margin-top:8px}\n.chip{flex:1;border:0;border-radius:9px;padding:8px;background:var(--card2);color:var(--text);font-weight:700}\n.chip.on{outline:2px solid var(--acc)}\n/* the names */\n.names{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}\n.nm{border:0;border-radius:9px;padding:11px 8px;background:var(--card2);color:var(--text);font-weight:700;font-size:15px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.nm.on{background:var(--red);color:var(--redText)}\n.nm.done{background:var(--red);color:var(--redText)}\n/* one away teacher: waktu boxes like the Teach In App */\n.aw{background:var(--card2);border-radius:12px;padding:12px;margin-top:10px}\n.aw b{display:block;font-size:16px;margin-bottom:6px}\n.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;touch-action:none}\n.w{border:0;border-radius:9px;padding:8px 3px;background:var(--off);color:var(--text);text-align:center;min-height:50px}\n.w b{display:block;font-size:16px;margin:0}\n.w small{display:block;font-size:11px;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.85}\n.w.on{background:var(--red);color:var(--redText)}\nselect{width:100%;margin-top:10px;padding:11px;border-radius:9px;border:0;background:#4a4466;color:var(--text);font-size:16px}\nselect.need{outline:2px solid var(--red)}\n/* the teach in list */\n.row{display:flex;gap:10px;padding:9px 2px;border-top:1px solid #383b4c;align-items:baseline}\n.row:first-of-type{border-top:0}\n.tm{color:var(--dim);font-size:14px;min-width:46px}\n.rw{flex:1;min-width:0}\n.rw .c{font-size:14px;color:var(--dim)}\n.rw .p{font-size:16px;font-weight:800}\n.none{color:var(--red)}\ninput{-webkit-user-select:text;user-select:text;flex:1;min-width:0;padding:11px;border-radius:9px;border:0;background:var(--off);color:var(--text);font-size:16px}\n.addrow{display:flex;gap:6px;margin-top:8px;align-items:center}.addrow .chip{flex:0 0 auto;padding:11px 12px}.addrow select{margin-top:0;flex:1}\n.rs{display:flex;flex-wrap:wrap;gap:6px}.rs .chip{flex:0 0 auto}.chip.x{flex:0 0 48px}.chip.danger,.wide.danger{background:#b4505c;color:#fff}\n.nm.add{color:var(--dim);font-weight:600}.nm.offt{background:var(--acc);color:var(--accText)}\n.wide{width:100%;border:0;border-radius:10px;padding:12px;background:var(--card2);color:var(--text);font-weight:700;font-size:16px;margin-top:8px}\n.row.tap{cursor:pointer}.ed{color:var(--dim);font-size:15px;align-self:center}.hd{font-size:12px;color:var(--acc);font-weight:600}\n.cands{display:flex;flex-direction:column;gap:6px;padding:4px 0 10px 56px}\n.cand{border:0;border-radius:9px;padding:10px;background:var(--card2);color:var(--text);text-align:left;font-weight:700;font-size:15px}\n.cand small{color:var(--dim);font-weight:500}.cand.on{outline:2px solid var(--acc)}.cand.auto{background:#4a4466}\ntable{width:100%;border-collapse:collapse}\ntd,th{padding:8px 4px;text-align:left;border-top:1px solid #383b4c;font-size:15px}\nth{color:var(--dim);font-size:13px;border-top:0}\ntd.n,th.n{text-align:right}\nul{margin:0;padding-left:20px;line-height:1.5;font-size:15px}\nli{margin-bottom:6px}\n#send{display:none;width:100%;margin-top:6px;padding:14px;border:0;border-radius:10px;background:#5b8f6a;color:#fff;font-size:17px;font-weight:700}\n"; document.head.appendChild(st);
  document.getElementById("boot").outerHTML = "<div id=\"app\" class=\"msg\">⏳ Sedang memuat...</div>\n<button id=\"send\">Submit</button>\n<div id=\"err\" class=\"err\"></div>\n"; })();
// Teach In engine: who teaches in for a teacher who is away. No screen code here, so the test can run it in node.
// The 7 rules, the higher rule wins:
//  1 free at that waktu (a must: no own class, not away, not taken off the list, the Guru Besar not before his time)
//  2 the fewest teach ins this year   3 already teaches that class   4 teaches that subject
//  5 the fewest waktu mengajar today  6 the waktu is next to own lessons   7 every teach in is kept (the data file)
var TI = (function () {
  var DAYS = ['Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat'];
  var HARI = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
  var BULAN = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];

  function parseKey(k) { var p = k.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function keyOf(dt) { return dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0'); }
  // Isnin = 0 ... Jumaat = 4; Sabtu and Ahad = -1 (no school).
  function dayIndex(k) { var w = parseKey(k).getDay(); return w >= 1 && w <= 5 ? w - 1 : -1; }
  function dateText(k) { var d = parseKey(k); return HARI[d.getDay()] + ', ' + d.getDate() + ' ' + BULAN[d.getMonth()] + ' ' + d.getFullYear(); }

  function toMin(t) { var p = String(t).split(':'); return +p[0] * 60 + +p[1]; }
  function hm(m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
  function endTime(tt, s) { return hm(toMin(tt.times[s]) + (tt.len || 30)); }

  // BELL TIMES (AgihMP 2.x): a Tahun can have its own times (a 15-minute waktu, another recess). Teach In keeps
  // counting on the school's waktu; a lesson of such a Tahun sits on every school waktu it overlaps by the clock,
  // and keeps its own time (at) for the list. With one bell for all, this is exactly as before.
  function where(tt, cl, s) {
    var b = cl.bell;
    if (!b || !b.times || !b.times[s]) return { js: [s] };
    var sl = tt.len || 30, a = toMin(b.times[s]), e = a + (+(b.lens || [])[s] || sl), std = tt.times.map(toMin), js = [];
    std.forEach(function (x, j) { if (a < x + sl && x < e) js.push(j); });
    if (!js.length) { var best = 0; std.forEach(function (x, j) { if (Math.abs(x - a) < Math.abs(std[best] - a)) best = j; }); js.push(best); }
    return { js: js, at: [a, e] };
  }

  // teacher -> day -> waktu -> what they do there (classes, and PER waktu marked prep)
  var MAP_FOR = null, MAP = null;
  function teacherMap(tt) {
    if (MAP_FOR === tt) return MAP;
    var m = {};
    function put(t, d, s, e) { var a = (m[t] = m[t] || [[], [], [], [], []]); (a[d][s] = a[d][s] || []).push(e); }
    tt.classes.forEach(function (cl) {
      cl.cells.forEach(function (row, d) { row.forEach(function (x, s) {
        if (!x) return;
        var w = where(tt, cl, s);
        // one entry per teacher and lesson, put on every school waktu it covers (the same object, so it is one lesson)
        x.teachers.forEach(function (t) { var e = { cls: cl.name, subj: x.subj, label: x.subj, js: w.js, at: w.at, cs: s }; if (x.follow) e.follow = true; w.js.forEach(function (j) { put(t, d, j, e); }); });
        (x.also || []).forEach(function (a) { a.teachers.forEach(function (t) { var e = { cls: cl.name, subj: a.subj, label: a.label || a.subj, js: w.js, at: w.at }; w.js.forEach(function (j) { put(t, d, j, e); }); }); });
      }); });
    });
    (tt.prep || []).forEach(function (p) { put(p.teacher, p.d, p.s, { prep: true, label: p.label, js: [p.s] }); });
    MAP_FOR = tt; MAP = m; return m;
  }
  function own(tt, t, d, s) { var a = teacherMap(tt)[t]; return (a && a[d][s]) || []; }
  function teaches(tt, t, f) {
    var a = teacherMap(tt)[t]; if (!a) return false;
    return a.some(function (day) { return day.some(function (es) { return es && es.some(function (e) { return !e.prep && f(e); }); }); });
  }

  // Teach ins of this year, from every saved day except "skip", plus a new teacher's head start.
  function yearCounts(st, year, skip) {
    var n = {};
    st.teachers.forEach(function (t) { n[t] = (st.joined && st.joined[year] && st.joined[year][t]) || 0; });
    Object.keys(st.days || {}).forEach(function (k) {
      if (k === skip || k.slice(0, 4) !== String(year)) return;
      (st.days[k].rows || []).forEach(function (r) { if (r.pick && r.pick in n) n[r.pick]++; });
    });
    return n;
  }

  // A teacher who is new on the timetable in the middle of a year starts at the average of the others.
  function headStart(st, newNames, today) {
    var year = today.slice(0, 4), counts = yearCounts(st, year, null);
    var others = st.teachers.filter(function (t) { return newNames.indexOf(t) < 0 && (st.off || []).indexOf(t) < 0; });   // not the ones taken off the list
    var any = Object.keys(st.days || {}).some(function (k) { return k.slice(0, 4) === year && (st.days[k].rows || []).some(function (r) { return r.pick; }); });
    if (!any || !others.length) return;
    var avg = Math.round(others.reduce(function (a, t) { return a + counts[t]; }, 0) / others.length);
    st.joined = st.joined || {}; st.joined[year] = st.joined[year] || {};
    newNames.forEach(function (t) { st.joined[year][t] = avg; });
  }

  // Everything about one day that the rules need.
  function ctx(st, k) {
    var tt = st.tt, d = dayIndex(k), day = st.days[k], awayAt = {};
    (day.away || []).forEach(function (a) { a.s.forEach(function (s) { (awayAt[s] = awayAt[s] || {})[a.t] = true; }); });
    var gbFrom = -1;
    // the first waktu at or after the time the Guru Besar comes
    if (st.gb && st.gb.name && st.gb.time) { gbFrom = tt.times.findIndex(function (x) { return x >= st.gb.time; }); if (gbFrom < 0) gbFrom = tt.times.length; }
    return { tt: tt, d: d, day: day, awayAt: awayAt, base: yearCounts(st, k.slice(0, 4), k), off: st.off || [], gb: st.gb || {}, gbFrom: gbFrom, teachers: st.teachers };
  }
  // Lessons taught today (a lesson of a Tahun with its own bell counts once, even when it covers two school waktu).
  function teachingToday(c, t) {
    var a = teacherMap(c.tt)[t], seen = {};
    if (!a) return 0;
    a[c.d].forEach(function (es, s) { (es || []).forEach(function (e) { if (!e.prep) seen[e.at ? 'b' + e.cls + '|' + e.at[0] : 's' + s] = 1; }); });
    return Object.keys(seen).length;
  }
  // The school waktu a row covers (one, or more for a lesson of a Tahun with its own bell).
  function cover(row) { return row.ss || [row.s]; }
  // "given": teacher -> the cover of every row already given to them today.
  function givenAt(given, t, s) { return (given[t] || []).some(function (g) { return g.indexOf(s) >= 0; }); }
  // Rule 1: may this teacher teach in this row? Free in every school waktu it covers.
  function free(c, t, row, given) {
    if (c.off.indexOf(t) >= 0) return false;
    var ss = cover(row);
    if (c.gb.name === t && c.gbFrom > 0 && ss[0] < c.gbFrom) return false;
    return ss.every(function (s) {
      if (c.awayAt[s] && c.awayAt[s][t]) return false;
      if (own(c.tt, t, c.d, s).length) return false;
      return !givenAt(given, t, s);
    });
  }
  function nextTo(c, t, row, given) {
    var rec = c.tt.recessAfter, n = c.tt.times.length, ss = cover(row), lo = ss[0], hi = ss[ss.length - 1];
    return [[lo - 1, lo], [hi + 1, hi]].some(function (p) {
      var x = p[0], s = p[1];
      if (x < 0 || x >= n) return false;
      if (rec && ((x === rec - 1 && s === rec) || (x === rec && s === rec - 1))) return false;   // recess in between
      return own(c.tt, t, c.d, x).some(function (e) { return !e.prep; }) || givenAt(given, t, x);
    });
  }
  // The free teachers for one row, best first.
  function rank(c, row, given) {
    return c.teachers.filter(function (t) { return free(c, t, row, given); }).map(function (t) {
      var g = (given[t] || []).length;
      return {
        t: t,
        n: c.base[t] + g,                                                     // rule 2
        c: teaches(c.tt, t, function (e) { return e.cls === row.cls; }),       // rule 3
        sj: teaches(c.tt, t, function (e) { return e.subj === row.subj; }),    // rule 4
        w: teachingToday(c, t) + g,                                            // rule 5
        nx: nextTo(c, t, row, given)                                           // rule 6
      };
    }).sort(function (a, b) {
      return a.n - b.n || b.c - a.c || b.sj - a.sj || a.w - b.w || b.nx - a.nx || (a.t < b.t ? -1 : a.t > b.t ? 1 : 0);
    });
  }

  // The rows of one day: one row for every class of every away teacher, in time order.
  // A teacher chosen by hand stays while still free; every other row is chosen again by the rules.
  function build(st, k) {
    var day = st.days[k], d = dayIndex(k);
    if (!day || d < 0 || !st.tt) return;
    var tt = st.tt, old = {}, rows = [];
    (day.rows || []).forEach(function (r) { if (r.hand) old[r.s + '|' + r.cls + '|' + r.subj + '|' + r.away] = r.pick; });
    (day.away || []).forEach(function (a) {
      var done = [];   // a lesson of a Tahun with its own bell can cover two school waktu: one row for it
      a.s.forEach(function (s) {
        own(tt, a.t, d, s).forEach(function (e) {
          if (e.prep || done.indexOf(e) >= 0) return;
          done.push(e);
          var r = { cs: e.cs, s: e.at ? e.js[0] : s, tm: e.at ? hm(e.at[0]) + ' - ' + hm(e.at[1]) : tt.times[s] + ' - ' + endTime(tt, s), cls: e.cls, subj: e.label, away: a.t, pick: '', hand: false };
          if (e.at && e.js.length > 1) r.ss = e.js.slice();
          if (e.follow) r.follow = true;
          rows.push(r);
        });
      });
    });
    rows.sort(function (a, b) { return a.s - b.s || (a.tm < b.tm ? -1 : a.tm > b.tm ? 1 : 0) || (a.cls < b.cls ? -1 : a.cls > b.cls ? 1 : 0) || (a.away < b.away ? -1 : 1); });
    var c = ctx(st, k), given = {};
    var give = function (t, r) { (given[t] = given[t] || []).push(cover(r)); };
    day.rows = rows;
    rows.forEach(function (r) {
      var h = old[r.s + '|' + r.cls + '|' + r.subj + '|' + r.away];
      if (h && free(c, h, r, given)) { r.pick = h; r.hand = true; give(h, r); }
    });
    rows.forEach(function (r) {
      if (r.hand) return;
      // KAR (taught by the teacher of the waktu before it): the teacher who teaches in before it stays for it too.
      var prev = r.follow && rows.filter(function (q) { return q.cls === r.cls && q.away === r.away && q.cs === r.cs - 1 && q.pick; })[0];
      if (prev && free(c, prev.pick, r, given)) { r.pick = prev.pick; give(prev.pick, r); return; }
      // The waktu before KAR: first try the teachers who are free for KAR too, so one teacher takes both.
      var next = rows.filter(function (q) { return q.follow && !q.hand && q.cls === r.cls && q.away === r.away && q.cs === r.cs + 1; })[0];
      var best = (next && rank(c, Object.assign({}, r, { ss: cover(r).concat(cover(next)).filter(function (x, i, a) { return a.indexOf(x) === i; }).sort(function (a, b) { return a - b; }) }), given)[0]) || rank(c, r, given)[0];
      r.pick = best ? best.t : '';
      if (best) give(best.t, r);
    });
  }
  // Who else could take row i (everyone else's picks stay as they are).
  function candidates(st, k, i) {
    var c = ctx(st, k), rows = st.days[k].rows, given = {};
    rows.forEach(function (r, j) { if (j !== i && r.pick) (given[r.pick] = given[r.pick] || []).push(cover(r)); });
    return rank(c, rows[i], given);
  }
  // Teach ins of this year for everyone, today's list included.
  function totals(st, k) {
    var n = yearCounts(st, k.slice(0, 4), k);
    ((st.days[k] && st.days[k].rows) || []).forEach(function (r) { if (r.pick && r.pick in n) n[r.pick]++; });
    return n;
  }
  function slotsOf(st, t, k) { var d = dayIndex(k), a = teacherMap(st.tt)[t]; return a ? a[d] : []; }
  // How many school waktu day d has: up to the last one any class uses (by the clock for a Tahun with its own bell).
  function dayLength(tt, d) {
    var n = 0;
    tt.classes.forEach(function (cl) { cl.cells[d].forEach(function (x, s) { if (x) where(tt, cl, s).js.forEach(function (j) { n = Math.max(n, j + 1); }); }); });
    return Math.min(n, tt.times.length);
  }

  return { DAYS: DAYS, BULAN: BULAN, HARI: HARI, keyOf: keyOf, parseKey: parseKey, dayIndex: dayIndex, dateText: dateText, endTime: endTime,
    teacherMap: teacherMap, build: build, candidates: candidates, totals: totals, yearCounts: yearCounts, headStart: headStart, slotsOf: slotsOf, dayLength: dayLength };
})();
if (typeof module !== 'undefined') module.exports = TI;


(function () {
  var tg = window.Telegram && Telegram.WebApp, q = new URLSearchParams(location.search);
  var dep = (q.get('a') || '').replace(/[^A-Za-z0-9_-]/g, '');
  var p = q.get('p') || (tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param) || q.get('tgWebAppStartParam') || 'app';
  var api = 'https://script.google.com/macros/s/' + dep + '/exec', busy = false;
  var $ = function (id) { return document.getElementById(id); };
  function say(t) { $('app').className = 'msg'; $('app').textContent = t; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function call(o) {
    o.init = tg.initData;
    var u = api + '?' + Object.keys(o).map(function (k) { return k + '=' + encodeURIComponent(o[k]); }).join('&');
    return fetch(u).then(function (r) { return r.json(); });
  }
  if (!tg || !tg.initData || !dep) { say('Buka halaman ini dari Teach In Bot dalam Telegram.'); return; }
  tg.ready(); if (tg.expand) tg.expand();
  if (tg.disableVerticalSwipes) tg.disableVerticalSwipes();   // a swipe over the waktu must not close the page
  try { tg.setHeaderColor('#1f2029'); tg.setBackgroundColor('#1f2029'); } catch (e) {}
  var mb = tg.MainButton, useMain = !!(mb && tg.isVersionAtLeast && tg.isVersionAtLeast('6.0'));
  function showSend(on) {
    if (useMain) { if (on) mb.setParams({ text: 'Submit', is_visible: true, is_active: true }); else mb.hide(); }
    else $('send').style.display = on ? 'block' : 'none';
  }
  function sending(on) {
    busy = on;
    if (useMain) { if (on) mb.showProgress(false); else mb.hideProgress(); }
    else { $('send').disabled = on; $('send').textContent = on ? '⏳ Sedang menghantar...' : 'Submit'; }
  }
  function haptic() { try { tg.HapticFeedback.selectionChanged(); } catch (e) {} }

  // Tap = one waktu on or off. Press and swipe = every waktu the finger passes gets the same colour.
  function paintGrid(grid, on, changed) {
    var paint = null;
    function at(e) { var el = document.elementFromPoint(e.clientX, e.clientY); return el && el.closest ? el.closest('.w') : null; }
    function set(b) {
      if (!b || paint === null || !grid.contains(b)) return;
      var s = +b.dataset.s; if (!!on[s] === paint) return;
      if (paint) on[s] = 1; else delete on[s];
      b.classList.toggle('on', paint); haptic(); $('err').textContent = '';
      if (changed) changed();
    }
    grid.addEventListener('pointerdown', function (e) { var b = at(e); if (!b || busy) return; e.preventDefault(); paint = !on[+b.dataset.s]; set(b); });
    window.addEventListener('pointermove', function (e) { if (paint !== null) set(at(e)); });
    ['pointerup', 'pointercancel'].forEach(function (n) { window.addEventListener(n, function () { paint = null; }); });
  }
  function slotHtml(x, on) {
    var c = x.cls === null || x.cls === undefined ? '' : '<small>' + esc(x.cls || 'tiada kelas') + '</small>';
    return '<button class="w' + (on ? ' on' : '') + '" data-s="' + x.s + '"><b>' + esc(x.tm) + '</b>' + c + '</button>';
  }

  /* ---------- mode 1: only "⏰ Pilih masa" of one report (bot 1.52) ---------- */
  if (/^[np]\d+_\d+$/.test(p)) {
    var on1 = {};
    call({ mini: 'view', p: p }).then(function (d) {
      if (d.err) { say(d.err); return; }
      d.on.forEach(function (s) { on1[s] = 1; });
      $('app').className = '';
      $('app').innerHTML = '<div class="card"><b style="font-size:18px">' + esc(d.who.join(', ')) + '</b><div class="hint" style="margin-top:2px">' + esc(d.day) + '</div>' +
        '<div class="hint">merah=guru itu tiada di sekolah masa itu</div><div class="grid" id="g1">' + d.slots.map(function (x) { return slotHtml(x, on1[x.s]); }).join('') + '</div></div>';
      paintGrid($('g1'), on1);
      showSend(true);
    }).catch(function () { say('Tiada sambungan internet. Tutup dan cuba lagi.'); });
    var send1 = function () {
      if (busy) return;
      var s = Object.keys(on1).map(Number).sort(function (a, b) { return a - b; });
      if (!s.length) { $('err').textContent = 'Tap sekurang-kurangnya satu waktu.'; return; }
      sending(true);
      call({ mini: 'set', p: p, s: s.join(',') }).then(function (d) {
        if (d.ok) { tg.close(); return; }
        sending(false); $('err').textContent = d.err || 'Cuba lagi.';
      }).catch(function () { sending(false); $('err').textContent = 'Tiada sambungan internet. Cuba lagi.'; });
    };
    if (useMain) mb.onClick(send1); $('send').onclick = send1;
    return;
  }

  /* ---------- mode 2: the whole Teach In App ---------- */
  var L = null, K = '', TAB = 'siapa', picked = [];   // picked: [{t, on:{s:1}, why}] = the new away teachers
  var hands = {}, OPEN = -1, LAST = null, CAL = null;
  var K2 = '', NEWT = false, DELASK = '', WIPEASK = false;   // K2 = the last day of a report of several days (1.61); '' = one day   // CAL: {y, m} = the month shown when the calendar is open (1.57)   // hands: 's|cls|subj|away' -> the teacher picked by hand for that row (1.56)
  function rowKey(r) { return r.s + '|' + r.cls + '|' + r.subj + '|' + r.away; }
  function isNew(t) { return picked.some(function (x) { return x.t === t; }); }
  var HARI = TI.HARI, BULAN = TI.BULAN;
  function dayLong(k) { var d = TI.parseKey(k); return HARI[d.getDay()] + ', ' + d.getDate() + ' ' + BULAN[d.getMonth()] + ' ' + d.getFullYear(); }
  function schoolDay(k, step) { var d = TI.parseKey(k); do { d.setDate(d.getDate() + step); } while (d.getDay() === 0 || d.getDay() === 6); return TI.keyOf(d); }
  function slotsOfDay(k) { var di = TI.dayIndex(k); if (di < 0) return []; var n = TI.dayLength(L.es.tt, di), a = []; for (var s = 0; s < n; s++) a.push(s); return a; }
  function dayObj(k) { return (L.es.days && L.es.days[k]) || { away: [], rows: [] }; }
  function load(k) {
    say('⏳ Sedang memuat...'); showSend(false);
    return call({ mini: 'load', k: k, a: dep }).then(function (d) {
      if (d.err) { say(d.err); return; }
      L = d; K = k || d.today;
      $('app').className = ''; draw();
    }).catch(function () { say('Tiada sambungan internet. Tutup dan cuba lagi.'); });
  }
  // The teach in list of day K with the new teachers in it: the same engine and the same steps as the bot (makeDay_).
  function preview() {
    var src = dayObj(K), day = JSON.parse(JSON.stringify(src)), days = {};
    Object.keys(L.es.days || {}).forEach(function (x) { days[x] = L.es.days[x]; });
    (day.rows || []).forEach(function (r) { if (r.pick) r.hand = true; });
    day.away = day.away || [];
    picked.forEach(function (x, i) { var s = K2 ? slotsOfDay(K) : Object.keys(x.on).map(Number).sort(function (a, b) { return a - b; }); if (s.length) day.away.push({ t: x.t, s: s, why: x.why, rid: 'new' + i }); });
    days[K] = day;
    if (!day.away.length) return [];
    // a teacher picked by hand stays while still free (the engine's own rule), the same as the bot does it
    if (!K2) Object.keys(hands).forEach(function (key) { var q = key.split('|'); if (isNew(q[3])) day.rows.push({ s: +q[0], cls: q[1], subj: q[2], away: q[3], pick: hands[key], hand: true }); });
    var es = { tt: L.es.tt, teachers: L.es.teachers, off: L.es.off, gb: L.es.gb, joined: L.es.joined, days: days };
    TI.build(es, K);
    LAST = es;
    return day.rows || [];
  }
  function draw() {
    var h = '<div class="top"><b>Teach In Mini App</b><span>Versi ' + esc(L.v) + '</span></div><div class="tabs">' +
      [['siapa', 'Siapa'], ['jumlah', 'Jumlah'], ['tetap', 'Settings'], ['cara', 'Cara guna']].map(function (t) { return '<button class="tab' + (TAB === t[0] ? ' on' : '') + '" data-tab="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>';
    if (TAB === 'siapa') h += siapa();
    else if (TAB === 'jumlah') h += jumlah();
    else if (TAB === 'tetap') h += tetap();
    else h += cara();
    $('app').innerHTML = h;
    [].forEach.call(document.querySelectorAll('.tab'), function (b) { b.onclick = function () { TAB = b.dataset.tab; DELASK = ''; WIPEASK = false; CAL = null; $('err').textContent = ''; haptic(); draw(); }; });
    if (TAB === 'siapa') hookSiapa();
    if (TAB === 'tetap') hookTetap();
    showSend(TAB === 'siapa' && picked.length > 0);
  }
  function siapa() {
    var d = dayObj(K), doneT = {}, all = slotsOfDay(K), mine;
    (d.away || []).forEach(function (a) { doneT[a.t] = a.why || 'Tanpa sebab'; });
    var h = '<div class="card"><div class="dayrow"><button class="nav" id="prev">‹</button><button class="day" id="dayb">' + esc(dayLong(K)) + ' ' + (CAL ? '▴' : '▾') + '</button>' +
      '<button class="nav" id="nextd"' + (schoolDay(K, 1) > L.max ? ' disabled' : '') + '>›</button></div>' +
      '<div class="chips"><button class="chip' + (K === L.today ? ' on' : '') + '" data-k="' + L.today + '">Hari ini</button>' +
      (L.next !== L.today ? '<button class="chip' + (K === L.next ? ' on' : '') + '" data-k="' + L.next + '">' + (L.next === TI.keyOf(new Date(TI.parseKey(L.today).getTime() + 864e5)) ? 'Esok' : HARI[TI.parseKey(L.next).getDay()]) + '</button>' : '') + '</div>' +
      '<div class="chips"><button class="chip' + (K2 ? ' on' : '') + '" id="tob">📅 Hingga: ' + (K2 ? esc(dayLong(K2)) : 'satu hari') + '</button>' + (K2 ? '<button class="chip x" id="tox">✕</button>' : '') + '</div>' +
      calHtml() + '</div>';
    if (!all.length) return h + '<div class="card msg">Hari ' + esc(HARI[TI.parseKey(K).getDay()]) + ': tiada sekolah.</div>';
    h += '<div class="card"><h2>SIAPA TIDAK HADIR?</h2><div class="names">' + L.es.teachers.map(function (t, i) {
      var pk = picked.some(function (x) { return x.t === t; });
      return '<button class="nm' + (pk ? ' on' : doneT[t] ? ' done' : '') + '" data-i="' + i + '">' + (doneT[t] ? '✓ ' : '') + esc(t) + '</button>';
    }).join('') + '<button class="nm add" id="newb">➕ Guru baharu</button></div>' +
      (NEWT ? '<div class="addrow"><input id="newt" placeholder="Nama guru baharu" autocomplete="off"><button class="chip" id="newgo">Tambah</button></div>' : '');
    picked.forEach(function (x, n) {
      mine = (teacherMap()[x.t] || [])[TI.dayIndex(K)] || [];
      h += '<div class="aw"><b>' + esc(x.t) + '</b>' + (K2 ? '<div class="hint" style="margin:0">Sehari penuh, setiap hari sekolah hingga ' + esc(dayLong(K2)) + '.</div>' :
        '<div class="hint">merah=guru itu tiada di sekolah masa itu</div><div class="grid" data-n="' + n + '">' +
        all.map(function (s) { return slotHtml({ s: s, tm: L.es.tt.times[s], cls: (mine[s] || []).map(function (e) { return e.cls + ' ' + e.label; }).join(', ') }, x.on[s]); }).join('') + '</div>') +
        '<select data-n="' + n + '"' + (x.need ? ' class="need"' : '') + '><option value="" disabled' + (x.why === null ? ' selected' : '') + ' hidden>Sebab</option>' +
        L.reasons.concat(['Tanpa sebab']).map(function (r) { return '<option' + (x.why === r || (r === 'Tanpa sebab' && x.why === '') ? ' selected' : '') + '>' + esc(r) + '</option>'; }).join('') + '</select></div>';
    });
    var done = Object.keys(doneT);
    if (done.length) h += '<div class="hint" style="margin:10px 0 0">✓ sudah dilapor: ' + esc(done.map(function (t) { return t + ' (' + doneT[t] + ')'; }).join(', ')) + '.</div>';
    h += '</div><div class="card"><h2>SENARAI TEACH IN' + (K2 ? ' (' + esc(dayLong(K)) + ')' : '') + '</h2><div id="list">' + listHtml() + '</div></div>';
    return h;
  }
  // A month, school days only (Isnin to Jumaat), like the bot's 📅 Tarikh lain. Days after the last one allowed are grey.
  function calHtml() {
    if (!CAL) return '';
    var y = CAL.y, m = CAL.m, last = new Date(y, m + 1, 0).getDate(), h = '<div class="cal">' + (CAL.to ? '<div class="hint" style="margin:0 0 8px">Hari terakhir tidak hadir:</div>' : '') + '<div class="calh"><button class="nav" id="cprev">‹</button><b>' + BULAN[m] + ' ' + y + '</b>' +
      '<button class="nav" id="cnext"' + (TI.keyOf(new Date(y, m + 1, 1)) > L.max ? ' disabled' : '') + '>›</button></div><div class="calg">' +
      ['Is', 'Se', 'Ra', 'Kh', 'Ju'].map(function (x) { return '<div class="calw">' + x + '</div>'; }).join('');
    var first = new Date(y, m, 1).getDay(), lead = first === 0 || first === 6 ? 0 : first - 1;
    for (var i = 0; i < lead; i++) h += '<div></div>';
    for (var d = 1; d <= last; d++) {
      var dt = new Date(y, m, d), w = dt.getDay(); if (w === 0 || w === 6) continue;
      var k = TI.keyOf(dt), ok = k <= L.max && (!CAL.to || k > K);
      h += '<button class="cd' + (k === (CAL.to ? K2 : K) ? ' on' : '') + (k === L.today ? ' td' : '') + '"' + (ok ? ' data-k="' + k + '"' : ' disabled') + '>' + d + '</button>';
    }
    return h + '</div></div>';
  }
  var MAPC = null, MAPT = null;
  function teacherMap() { if (MAPT !== L.es.tt) { MAPC = TI.teacherMap(L.es.tt); MAPT = L.es.tt; } return MAPC; }
  function listHtml() {
    var rows = preview();
    if (!rows.length) return '<div class="hint" style="margin:0">Tap nama guru yang tidak hadir. Senarai teach in keluar di sini.</div>';
    return rows.map(function (r, i) {
      var mine = !K2 && isNew(r.away), hand = mine && hands[rowKey(r)] === r.pick && r.pick;
      var h = '<div class="row' + (mine ? ' tap' : '') + '"' + (mine ? ' data-r="' + i + '"' : '') + '><div class="tm">' + esc(String(r.tm).split(' - ')[0]) + '</div><div class="rw"><div class="c">' + esc(r.cls + ' · ' + r.subj + ' · ' + r.away) + '</div>' +
        (r.pick ? '<div class="p">' + esc(r.pick) + (hand ? ' <span class="hd">(pilih sendiri)</span>' : '') + '</div>' : '<div class="p none">Tiada guru yang free</div>') + '</div>' + (mine ? '<div class="ed">' + (OPEN === i ? '▴' : '✏️') + '</div>' : '') + '</div>';
      if (OPEN === i) {
        // the free teachers for this row, best first (TI.candidates, like the Teach In App)
        var c = TI.candidates(LAST, K, i);
        h += '<div class="cands">' + (hands[rowKey(r)] ? '<button class="cand auto" data-t="">Biar aplikasi pilih semula</button>' : '') +
          (c.length ? c.map(function (x) { return '<button class="cand' + (x.t === r.pick ? ' on' : '') + '" data-t="' + esc(x.t) + '">' + esc(x.t) + ' <small>(Jumlah ' + x.n + ', mengajar ' + x.w + ')</small></button>'; }).join('') : '<div class="hint" style="margin:0">Tiada guru lain yang free.</div>') + '</div>';
      }
      return h;
    }).join('');
  }
  function relist() { var el = $('list'); if (el) el.innerHTML = listHtml(); }
  // one listener for the list: tap a row = its free teachers; tap a teacher = picked by hand
  document.addEventListener('click', function (e) {
    if (busy || !e.target.closest) return;
    var cand = e.target.closest('.cand'), row = e.target.closest('.row.tap');
    if (cand && OPEN >= 0) {
      var r = (LAST && LAST.days[K].rows || [])[OPEN]; if (!r) return;
      if (cand.dataset.t) hands[rowKey(r)] = cand.dataset.t; else delete hands[rowKey(r)];
      OPEN = -1; haptic(); relist(); return;
    }
    if (row) { var i = +row.dataset.r; OPEN = OPEN === i ? -1 : i; haptic(); relist(); }
  });
  function hookSiapa() {
    var go = function (k) { if (busy || !k) return; haptic(); if (k.slice(0, 4) !== L.year) { K2 = ''; picked = []; hands = {}; OPEN = -1; CAL = null; load(k); return; } K = k; K2 = ''; picked = []; hands = {}; OPEN = -1; CAL = null; $('err').textContent = ''; draw(); };
    $('prev').onclick = function () { go(schoolDay(K, -1)); };
    $('dayb').onclick = function () { haptic(); var d = TI.parseKey(K); CAL = CAL && !CAL.to ? null : { y: d.getFullYear(), m: d.getMonth() }; draw(); };
    $('tob').onclick = function () { haptic(); var d = TI.parseKey(K2 || K); CAL = CAL && CAL.to ? null : { y: d.getFullYear(), m: d.getMonth(), to: true }; draw(); };
    if ($('tox')) $('tox').onclick = function () { haptic(); K2 = ''; CAL = null; draw(); };
    if ($('newb')) $('newb').onclick = function () { haptic(); NEWT = !NEWT; draw(); if (NEWT && $('newt')) $('newt').focus(); };
    if ($('newgo')) $('newgo').onclick = function () {
      var v = ($('newt').value || '').trim(); if (!v) { $('err').textContent = 'Taip nama guru.'; return; }
      cfg('new', v, '', function (d) { NEWT = false; if (!isNew(d.added) && !doneOf(d.added)) { var on = {}; slotsOfDay(K).forEach(function (s) { on[s] = 1; }); picked.push({ t: d.added, on: on, why: null }); } });
    };
    if (CAL) {
      $('cprev').onclick = function () { haptic(); CAL = CAL.m ? { y: CAL.y, m: CAL.m - 1, to: CAL.to } : { y: CAL.y - 1, m: 11, to: CAL.to }; draw(); };
      $('cnext').onclick = function () { haptic(); CAL = CAL.m < 11 ? { y: CAL.y, m: CAL.m + 1, to: CAL.to } : { y: CAL.y + 1, m: 0, to: CAL.to }; draw(); };
      [].forEach.call(document.querySelectorAll('.cd[data-k]'), function (b) { b.onclick = function () { if (CAL.to) { K2 = b.dataset.k; CAL = null; hands = {}; OPEN = -1; haptic(); draw(); return; } CAL = null; go(b.dataset.k); }; });
    }
    $('nextd').onclick = function () { var n = schoolDay(K, 1); if (n <= L.max) go(n); };
    [].forEach.call(document.querySelectorAll('.chip[data-k]'), function (b) { b.onclick = function () { go(b.dataset.k); }; });
    [].forEach.call(document.querySelectorAll('.nm[data-i]'), function (b) {
      b.onclick = function () {
        if (busy) return;
        var t = L.es.teachers[+b.dataset.i], i = -1;
        picked.forEach(function (x, j) { if (x.t === t) i = j; });
        if (i < 0 && b.classList.contains('done')) { $('err').textContent = t + ' sudah dilapor.'; return; }
        haptic(); $('err').textContent = '';
        OPEN = -1;
        if (i >= 0) { picked.splice(i, 1); Object.keys(hands).forEach(function (key) { if (key.split('|')[3] === t) delete hands[key]; }); }
        else { var on = {}; slotsOfDay(K).forEach(function (s) { on[s] = 1; }); picked.push({ t: t, on: on, why: null }); }   // like the app: the whole day at first
        draw();
      };
    });
    [].forEach.call(document.querySelectorAll('.aw .grid'), function (g) { paintGrid(g, picked[+g.dataset.n].on, function () { OPEN = -1; relist(); }); });
    [].forEach.call(document.querySelectorAll('.aw select'), function (s) {
      s.onchange = function () { var x = picked[+s.dataset.n]; x.why = s.value === 'Tanpa sebab' ? '' : s.value; x.need = false; s.classList.remove('need'); $('err').textContent = ''; };
    });
  }
  function doneOf(t) { return (dayObj(K).away || []).some(function (a) { return a.t === t; }); }
  // every Settings change: a sign at once, then the page shows the bot's new data
  function cfg(act, v, w, after) {
    if (busy) return;
    busy = true; $('err').classList.remove('good'); $('err').textContent = '⏳ Sedang menyimpan...';
    call({ mini: 'cfg', act: act, v: v || '', w: w || '', k: K }).then(function (d) {
      busy = false;
      if (!d.ok) { $('err').textContent = d.err || 'Cuba lagi.'; return; }
      L = d.data; $('err').textContent = '';
      // LIPAS 1.62: a teacher renamed or deleted in Settings leaves the names picked in Siapa (and her hand picks)
      picked = picked.filter(function (x) { return L.es.teachers.indexOf(x.t) >= 0; });
      Object.keys(hands).forEach(function (key) { if (L.es.teachers.indexOf(key.split('|')[3]) < 0 || L.es.teachers.indexOf(hands[key]) < 0) delete hands[key]; });
      if (after) after(d);
      draw();
    }).catch(function () { busy = false; $('err').textContent = 'Tiada sambungan internet. Cuba lagi.'; });
  }
  function tetap() {
    var sheet = L.sheet ? '<div class="card"><button class="wide" id="sheetb">📄 Google Sheet: Rekod teach in</button></div>' : '';
    if (!L.admin) return '<div class="card"><h2>SETTINGS</h2><div class="hint" style="margin:0">Hanya admin boleh tukar Settings.</div></div>' + sheet;
    var off = L.es.off || [], ye = (L.yearEnd || { md: '12-31', tm: '13:30' }), md = ye.md.split('-'), times = [];
    for (var hh = 7; hh <= 17; hh++) ['00', '30'].forEach(function (mm) { times.push(('0' + hh).slice(-2) + ':' + mm); });
    var days = []; for (var d = 1; d <= 31; d++) days.push(d);
    var ren = Object.keys(L.renamed || {});
    return '<div class="card"><h2>TIDAK DIBERI TEACH IN</h2><div class="hint">Tap nama guru yang tidak boleh diberi teach in langsung.</div><div class="names">' +
      L.es.teachers.map(function (t) { var o = off.indexOf(t) >= 0; return '<button class="nm' + (o ? ' offt' : '') + '" data-off="' + esc(t) + '">' + (o ? '✓ ' : '') + esc(t) + '</button>'; }).join('') + '</div></div>' +
      '<div class="card"><h2>SEBAB TIDAK HADIR</h2><div class="rs">' + L.reasons.map(function (r) { return '<button class="chip" data-rx="' + esc(r) + '">' + esc(r) + ' ✕</button>'; }).join('') + '</div>' +
      '<div class="addrow"><input id="rsNew" placeholder="Sebab baharu" autocomplete="off"><button class="chip" id="rsAdd">Tambah</button></div></div>' +
      '<div class="card"><h2>TUKAR NAMA GURU</h2><div class="hint">Guru baharu guna jadual waktu guru yang sudah pindah.</div><select id="renFrom">' +
      L.es.teachers.map(function (t) { return '<option>' + esc(t) + '</option>'; }).join('') + '</select><div class="addrow"><input id="renTo" placeholder="Nama baharu" autocomplete="off"><button class="chip" id="renGo">Tukar nama</button></div>' +
      ren.map(function (t) { return '<div class="addrow"><div class="hint" style="margin:0;flex:1">' + esc(t) + ' guna jadual waktu ' + esc(L.renamed[t]) + '.</div><button class="chip" data-back="' + esc(t) + '">↩️ Kembalikan ' + esc(L.renamed[t]) + '</button></div>'; }).join('') + '</div>' +
      '<div class="card"><h2>PADAM GURU</h2><div class="hint">Hanya guru yang ditambah dengan ➕ Guru baharu.</div><div class="rs">' +
      ((L.extra || []).length ? L.extra.map(function (t) { return '<button class="chip' + (DELASK === t ? ' danger' : '') + '" data-del="' + esc(t) + '">' + (DELASK === t ? 'Ya, padam ' + esc(t) : '🗑 ' + esc(t)) + '</button>'; }).join('') : '<div class="hint" style="margin:0">Tiada.</div>') + '</div></div>' +
      '<div class="card"><h2>JUMLAH AKHIR TAHUN</h2><div class="hint">Bot hantar Jumlah teach in tahun itu ke topik. Sekarang: ' + esc(L.yeText || '') + '</div><div class="addrow">' +
      '<select id="yeD">' + days.map(function (x) { return '<option' + (x === +md[1] ? ' selected' : '') + '>' + x + '</option>'; }).join('') + '</select>' +
      '<select id="yeM">' + BULAN.map(function (b, i) { return '<option value="' + (i + 1) + '"' + (i + 1 === +md[0] ? ' selected' : '') + '>' + b + '</option>'; }).join('') + '</select>' +
      '<select id="yeT">' + times.map(function (x) { return '<option' + (x === ye.tm ? ' selected' : '') + '>' + x + '</option>'; }).join('') + '</select></div>' +
      '<button class="wide" id="yeGo">Save</button></div>' +
      '<div class="card"><h2>PADAM SEMUA TEACH IN ' + esc(L.wipeYear) + '</h2><div class="hint">Jumlah semua guru jadi 0.</div><button class="wide danger" id="wipe">' + (WIPEASK ? 'Ya, padam semua teach in ' + esc(L.wipeYear) : '🗑 Padam semua teach in ' + esc(L.wipeYear)) + '</button></div>' + sheet;
  }
  function hookTetap() {
    if ($('sheetb')) $('sheetb').onclick = function () { try { tg.openLink(L.sheet); } catch (e) { window.open(L.sheet); } };
    if (!L.admin) return;
    [].forEach.call(document.querySelectorAll('[data-off]'), function (b) { b.onclick = function () { haptic(); cfg('off', b.dataset.off); }; });
    [].forEach.call(document.querySelectorAll('[data-rx]'), function (b) { b.onclick = function () { haptic(); cfg('rx', b.dataset.rx); }; });
    $('rsAdd').onclick = function () { var v = ($('rsNew').value || '').trim(); if (!v) { $('err').textContent = 'Taip sebab.'; return; } cfg('ra', v); };
    $('renGo').onclick = function () { var v = ($('renTo').value || '').trim(); if (!v) { $('err').textContent = 'Taip nama baharu.'; return; } cfg('ren', $('renFrom').value, v); };
    [].forEach.call(document.querySelectorAll('[data-back]'), function (b) { b.onclick = function () { haptic(); cfg('back', b.dataset.back); }; });
    [].forEach.call(document.querySelectorAll('[data-del]'), function (b) { b.onclick = function () { haptic(); var t = b.dataset.del; if (DELASK !== t) { DELASK = t; draw(); return; } DELASK = ''; cfg('del', t); }; });
    $('yeGo').onclick = function () { haptic(); cfg('ye', ('0' + $('yeM').value).slice(-2) + '-' + ('0' + $('yeD').value).slice(-2), $('yeT').value); };
    $('wipe').onclick = function () { haptic(); if (!WIPEASK) { WIPEASK = true; draw(); return; } WIPEASK = false; cfg('wipe'); };
  }
  function jumlah() {
    var n = L.totals || {}, list = Object.keys(n).sort(function (a, b) { return n[b] - n[a] || (a < b ? -1 : 1); });
    return '<div class="card"><h2>JUMLAH TEACH IN TAHUN INI (' + esc(L.year) + ')</h2><table><tr><th>GURU</th><th class="n">JUMLAH</th></tr>' +
      list.map(function (t) { return '<tr><td>' + esc(t) + '</td><td class="n">' + n[t] + '</td></tr>'; }).join('') + '</table></div>';
  }
  function cara() {
    return '<div class="card"><h2>CARA GUNA</h2><ul>' +
      '<li>Pilih hari dengan ‹ dan ›, Hari ini / Esok, atau tap tarikh untuk kalendar.</li>' +
      '<li>Tap nama guru yang tidak hadir. Senarai teach in keluar serta-merta.</li>' +
      '<li>merah=guru itu tiada di sekolah masa itu. Mula-mula sepanjang hari. Datang lewat atau balik awal? Tap atau sapu jari pada waktu.</li>' +
      '<li>Sebab: pilih jika perlu (tidak wajib). Kemudian tekan Submit. Gambar teach in masuk ke topik.</li>' +
      '<li>Mahu guru lain untuk satu waktu? Tap baris itu dalam SENARAI TEACH IN, kemudian tap nama guru yang free.</li>' +
      '<li>Nama dengan ✓ sudah dilapor.</li>' +
      '<li>Tidak hadir beberapa hari (cuti)? Tap 📅 Hingga dan pilih hari terakhir. Sehari penuh setiap hari.</li>' +
      '<li>Nama tiada dalam senarai? Tap ➕ Guru baharu.</li>' +
      '<li>Settings: admin sahaja boleh tukar.</li>' +
      '</ul></div>';
  }
  function send2() {
    if (busy || TAB !== 'siapa' || !picked.length) return;
    var empty = K2 ? [] : picked.filter(function (x) { return !Object.keys(x.on).length; });
    if (empty.length) { $('err').textContent = 'Tap sekurang-kurangnya satu waktu untuk ' + empty.map(function (x) { return x.t; }).join(', ') + '.'; return; }
    var list = picked.map(function (x) { return { t: x.t, s: Object.keys(x.on).map(Number).sort(function (a, b) { return a - b; }), why: x.why || '' }; });
    var hl = Object.keys(hands).filter(function (key) { return isNew(key.split('|')[3]); }).map(function (key) { return { k: key, pick: hands[key] }; });
    sending(true); $('err').textContent = '';
    call({ mini: 'send', k: K, k2: K2, list: JSON.stringify(list), hands: JSON.stringify(K2 ? [] : hl) }).then(function (d) {
      sending(false);
      if (!d.ok) { $('err').textContent = d.err || 'Cuba lagi.'; return; }
      showSend(false);
      say(d.said + (d.note ? '\n' + d.note : ''));
      $('app').classList.add('good');
      setTimeout(function () { tg.close(); }, 1500);
    }).catch(function () { sending(false); $('err').textContent = 'Tiada sambungan internet. Cuba lagi.'; });
  }
  if (useMain) mb.onClick(send2); $('send').onclick = send2;
  load('');
})();
