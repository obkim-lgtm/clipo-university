
function flSeed(stage, cid, eid){
  const order = ['pilot','ready','more','done','cross','confirm','final','fb','rel'], upto = order.indexOf(stage);
  if (upto < 0) return;
  
  const e0 = evById(cid, eid); if (!e0) return;
  delete subs[cid+'-'+eid]; Object.assign(e0, {scored:0, rev:0, relN:0, running:0});
  ['qs','critEdits','flow','rules','amb','xcases','xfix','xexc','xlog','xfinds','rescored','rerunning','fb','fbDone','retroAsk','pg'].forEach(k=>{ delete e0[k]; });
  const e = e0, l = subOf(cid, eid);
  const at = s => order.indexOf(s) <= upto;
  const pick = arr => arr.forEach(x=>{ if (x.pick===undefined) x.pick = x.ai; });
  
  l.filter(s=>stOf(s)==='pre').slice(0,3).forEach(s=>{ s.pre=false; }); e.scored = Math.min(e.sub, (e.scored||0) + 3);
  e.rules = []; e.amb = AMB.pilot.map(x=>({...x})); e.flow = 'pilot';
  if (!at('ready')) return;
  pick(e.amb); rlCommit(e); e.amb = []; e.flow = 'ready';
  if (!at('more')) return;
  l.forEach(s=>{ if (s.at){ s.pre=false; s.scoring=false; } }); e.scored = e.sub; e.amb = AMB.more.map(x=>({...x})); e.flow = 'more';
  if (!at('done')) return;
  pick(e.amb); rlCommit(e); e.amb = []; e.flow = 'done';
  if (!at('cross')) return;
  xProfFill(); e.xfix = XFIX.map(x=>({...x})); e.xexc = XEXC.map(x=>({...x})); e.xlog = e.xlog || []; e.rescored = false;
  if (!at('confirm')) return;
  e.xfix.forEach(x=>{ x.done = 'fix'; crEdit(e, x.q, x.item, x.after, 'cross'); e.xlog.push(cr('logCrit')(x.q, x.item)); }); e.rescored = true;
  e.xexc.forEach(x=>{ x.done = 'fix'; const s = l[x.who]; if (s) s.fscore = Math.max(0, (s.pscore ?? s.score) - (x.ai - x.prof)); }); e.flow = 'confirm';
  if (!at('final')) return;
  l.forEach(s=>{ if (s.at){ s.rev = true; s.pre = false; } }); e.rev = e.sub; e.flow = 'final';
  if (!at('fb')) return;
  e.fb = {inc:{crit:true, overall:true, model:true, strong:true, plan:true}, goal:lang==='ko'?'교원 임용 시험 대비':'Teacher certification exam', sel:0, gen:'done'}; e.fbDone = true;
  if (!at('rel')) return;
  l.forEach(s=>{ if (s.rev) s.rel = true; }); e.relN = e.rev;
}
{ const q = new URLSearchParams(location.search), st = q.get('flow'), ev = q.get('ev');
  const rm = location.hash.match(/reports-(c\d+)/), m = location.hash.match(/-(c\d+)-(\d+)/) || (rm && ev ? [null, rm[1], ev] : null);   
  if (st && m){ const e = evById(m[1], +m[2]); if (e && !e.flowSeeded){ e.flowSeeded = true; flSeed(st, m[1], +m[2]); } render(); }
  if (ev && /reports/.test(location.hash)){ repEval = +ev; render(); } }
