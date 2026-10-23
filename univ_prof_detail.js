
const D = {
  ko:{
    tabEval:'평가', tabRoster:'수강생', tabSet:'설정', newEval:'평가 만들기',
    ncH:'강좌 만들기', ncSub:'이름과 분반만 있으면 돼요. 만들면 강좌 코드가 생기고, 수강생은 수강생 탭에서 추가해요.',
    ncName:'강좌 이름', ncNamePh:'예) 교육평가', ncSec:'분반', ncSecPh:'예) 01분반 · 대학원', ncSem:'학기', ncCreate:'강좌 만들기', ncCreated:n=>`${n} 강좌를 만들었어요`,
    setBasic:'기본 정보', setSave:'저장', setSaved:'저장했어요',
    setCode:'강좌 코드', setCodeD:'학생이 로그인한 뒤 이 코드를 넣으면 수강생이 돼요.', setJoin:'코드로 참여 받기', setJoinOff:'끄면 코드를 알아도 들어올 수 없어요. 교수님이 학번으로 추가하는 건 그대로예요.', codeRenewed:'새 코드를 만들었어요. 이전 코드는 더 쓸 수 없어요',
    setArch:'보관', setArchD:'학기가 끝나면 보관해요. 홈 목록에서 빠지고 「보관한 강좌 보기」로 다시 열 수 있어요. 평가와 답안은 그대로예요.', archBtn:'보관하기', unarchBtn:'보관 해제', archived:n=>`${n} 강좌를 보관했어요`, unarchived:n=>`${n} 강좌를 다시 열었어요`,
    setDel:'삭제', setDelD:'평가가 하나도 없는 강좌만 지울 수 있어요. 평가가 있으면 보관해 주세요.', delBtn:'강좌 삭제', delAsk:n=>`${n} 강좌를 지울까요? 되돌릴 수 없어요.`, deleted:n=>`${n} 강좌를 지웠어요`, delBlocked:n=>`평가 ${n}개가 있어서 지울 수 없어요`,
    thEval:'평가', thType:'답안', thDue:'마감', thSub:'제출', thRevC:'확인', thRel:'공개', thState:'상태', thSid:'학번', thName:'이름', thSubAt:'제출', thScore:'점수', thRev:'확인', thOpen:'',
    type:{hw:'과제', mid:'중간고사', final:'기말고사'}, way:{file:'학생 제출', scan:'직접 업로드'}, wayL:{file:'학생이 PDF로 제출', scan:'교수님이 답안 파일을 직접 올림'},
    aiNone:'전', aiRun:'채점 중', aiDone:'완료', rev:(a,b)=>`확인 ${a}/${b}`, relYes:'공개됨', relNo:'공개 전', noSub:'제출 없음',
    act:{wait:'제출 현황', upload:'답안 올리기', match:n=>`파일 연결 ${n}`, ai:'AI 채점', scoring:'채점 중', rev:'확인하기', rel:'공개하기', view:'결과 보기'},
    subScoring:n=>`채점 중 ${n}`, subPre:n=>`채점 전 ${n}`, aiBtn:n=>`AI 채점 · ${n}명`, noCredit:'오늘 크레딧을 다 썼어요. 내일 0시에 100으로 채워지면 이어서 채점할 수 있어요. 이미 채점된 학생은 지금 확인해도 돼요.', aiRunning:'AI가 채점하는 중이에요', aiFinished:n=>`${n}명 AI 채점이 끝났어요`, subUnm:n=>`파일 연결 ${n}`, waiting:'기다리는 중', relPart:'일부 공개',
    autoNote:'「AI 채점」은 제출됐지만 아직 채점 안 된 답안만 채점해요. 먼저 낸 학생부터 채점해도 돼요. 확인한 뒤 공개하면 학생에게 보여요.',
    stS:{none:'미제출', pre:'채점 전', scoring:'채점 중', yet:'확인 전', done:'확인함', rel:'공개됨'},
    stRel:'공개', relOf:(a,b)=>`${a}/${b}`,
    students:n=>`수강생 ${n}명`, code:'강좌 코드',
    evalEmpty:'아직 평가가 없어요. 첫 평가를 만들어 보세요.',
    
    newH:'평가 만들기', newSub:'문제지를 올리면 AI가 문항을 찾고, 문항마다 채점 항목 초안을 만들어요. 성취기준은 없어요.',
    s1:'기본 정보', s2:'문제지와 참고 자료', s2d:'문제지(빈 활동지)는 채점기준 초안을 만드는 데 써요. 참고 자료는 학생 과제 화면에 같이 보여요.',
    s3:'채점기준', s3d:'문제지를 읽고 만든 초안이에요. 기준 이름·배점·설명을 바로 고칠 수 있어요.',
    nameLbl:'평가 이름', namePh:'예) 과제 2 · 수행평가 설계 비평', wayLbl:'답안은 누가 올리나요?', dueLbl:'마감',
    fileD:'과제처럼 학생이 자기 화면에서 PDF 1개를 올려요. 마감이 있어요.', scanD:'시험처럼 답안지를 걷어 교수님이 올려요. 반 전체를 스캔한 PDF 하나도, 학생별 파일도 돼요. 마감은 없어요',
    dropLec:'참고 자료 올리기 (선택)', dropLecD:'학생에게 보여 줄 강의·읽기 자료', dropQ:'문제지 올리기', dropQD:'빈 활동지·시험지 PDF 1개',
    genBtn:'AI로 채점기준 만들기', genNeed:'문제지를 올리면 만들 수 있어요', genRun:'문제지를 읽고 채점기준을 만드는 중이에요', genDone:'채점기준 4개를 만들었어요. 배점 합계 30점이에요.',
    rName:'기준', rPts:'배점', rDesc:'이런 답을 높게 봐요', addR:'기준 추가', total:'합계',
    cancel:'취소', create:'평가 만들기', created:n=>`${n}을(를) 만들었어요`,
    
    stSub:'제출', stAi:'AI 채점', stRev:'확인', stFb:'피드백',
    scanT:'답안 올리기', scanUpD:'반 전체를 PDF 하나로 스캔했으면 왼쪽, 학생마다 따로 스캔했으면 오른쪽으로 올려요. 나중에 더 올려도 돼요.', upClassT:'학급 전체 스캔 PDF', upClassD:'반 전체 답안을 PDF 하나로 스캔했다면 여기에 올려요. 다음 화면에서 학생별로 쪽을 나눠요.', upClassS:'PDF 1개', upFilesT:'학생별 파일', upFilesD:'학생마다 따로 스캔한 파일을 한 번에 올려요. 파일 이름의 학번으로 학생을 찾아요.', upFilesS:'PDF · JPG · PNG 여러 개', spH:'학생별로 나누기', spBack:'답안 올리기', spStep1:'나누기 설정', spStep2:'학생별 확인', spFile:'기말고사_1반_스캔.pdf', spPages:n=>`${n}쪽`, spMode:'나누는 방법', spSame:'모든 학생 같은 쪽 수', spSameD:'학생마다 답안지 쪽 수가 같을 때', spEach:'학생마다 직접', spEachD:'쪽 수가 다르거나 빠진 학생이 있을 때', spPer:'학생 1명당', spNote:'명단 순서대로 나눠요. 결시한 학생은 쪽 수를 0으로 두면 미제출이 돼요.', spThN:'쪽 수', spThR:'쪽 번호', spAbsent:'미제출', spSum:(a,b)=>`나눈 쪽 합계 ${a}쪽 / 파일 ${b}쪽`, spMis:(a,b)=>`나눈 쪽 합계(${a}쪽)가 파일(${b}쪽)과 달라요. 쪽 수를 맞춰 주세요.`, spGo:n=>`${n}명 답안으로 나눠 올리기`, spDone:n=>`${n}명 답안으로 나눠 올렸어요. 「AI 채점」을 누르면 채점돼요.`, spPrev:'미리보기', spMore:n=>`+${n}쪽`, dropScan:'답안 PDF 올리기', dropScanD:'파일 이름 예) 202312001_강하늘.pdf',
    scanOk:n=>`${n}명 인식됨`, scanChk:n=>`확인 필요 ${n}명`,
    release:n=>`공개하기 · ${n}명`, revBtn:n=>`확인하기 · ${n}명`, releaseNote:'확인한 학생만 공개돼요. 나중에 확인한 학생은 다시 「공개하기」를 누르면 돼요.', released:n=>`${n}명에게 피드백을 공개했어요`,
    open:'열기', revDone:'확인함', revYet:'아직', notSub:'미제출', late:'지각', fix:'점수 수정',
    fAll:'전체', fNone:'미제출', fPre:'채점 전', fYet:'확인 전', fDone:'확인함', tblT:'학생별 답안', tblD:w=>w==='scan'?'올린 답안 파일을 학생마다 확인하고 공개해요.':'학생이 낸 답안을 확인하고 공개해요.', upDone:n=>`답안 파일 ${n}개를 올렸어요`, upLast:'마지막 올림 10.21 09:40', upMore:'답안 더 올리기', upAdded:'답안 파일을 더 올렸어요',
    remind:'제출 알림', reminded:n=>`${n}명에게 제출 알림을 보냈어요`, remindAll:n=>`미제출 ${n}명에게 알림`, remindT:'제출 알림 보내기', remindTo:'받는 사람', remindVia:'학생의 학교 이메일로 가요', send:'보내기', remindMsg:(ev,due)=>`${ev} 마감은 ${due}이에요. 아직 제출 기록이 없어 알려 드려요. 마감 전에 PDF로 제출해 주세요.`, evEdit:'평가 수정', evDel:'평가 삭제', evDelAsk:(n,k)=>k?`${n}을(를) 지울까요? 제출된 답안 ${k}개와 점수가 같이 지워지고 되돌릴 수 없어요.`:`${n}을(를) 지울까요?`, evDeleted:n=>`${n}을(를) 지웠어요`, excelDone:f=>`${f}을(를) 내려받았어요`, upFor:'대신 올리기', upForDone:n=>`${n} 학생 답안을 올렸어요`,
    dueLeft:n=>`${n}일 남음`, duePassed:'마감 지남', closedNote:'마감이 지나 학생 제출은 닫혔어요. 늦게 받은 답안은 「대신 올리기」로 올려 주세요.',
    excel:'엑셀 내려받기', regrade:'다시 채점', regraded:'지금 채점기준으로 다시 채점했어요',
    unmatchT:n=>`학번을 찾지 못한 파일 ${n}개`, unmatchD:'파일 이름에 학번이 없어요. 파일을 열어 보고 누구 것인지 골라 주세요. 미제출 학생만 보여요.', pick:'학생 고르기', match:'연결', matched:n=>`${n} 학생 답안으로 연결했어요`, scanPage:(f,p)=>`${f} · ${p}쪽`,
    
    gradeOf:(a,b)=>`${a} / ${b}명`, prev:'이전', next:'다음', answer:'답안', page:(a,b)=>`${a} / ${b}쪽`, vOrig:'제출 원본', vText:'인식 결과', dl:'내려받기',
    rubricT:'채점기준별 점수', aiCol:'AI', meCol:'내 점수', fbT:'피드백', fbD:'AI가 쓴 초안이에요. 고쳐서 저장하면 학생에게 이 내용이 가요.',
    save:'저장', saveNext:'저장하고 다음', saved:'저장했어요',
    sampleFb:'논제에서 요구한 "수행평가 설계의 타당성" 개념을 정확히 짚었고, 3주차 자료의 평가 요소 세 가지를 근거로 들어 설득력이 있어요. 다만 두 번째 근거는 사례 없이 주장만 있어서 한 문단이 비어 보여요. 5주차 자료의 사례를 한 가지 붙이면 더 단단해져요.',
    rubric:[['논제 이해',6,'문제가 묻는 개념을 자기 말로 정확히 설명한다'],['근거의 타당성',9,'수업 자료에서 근거를 끌어와 주장을 뒷받침한다'],['논리 전개',9,'주장·근거·결론이 한 흐름으로 이어진다'],['문장·표현',6,'문장이 간결하고 용어를 바르게 쓴다']],
  },
  en:{
    tabEval:'Assessments', tabRoster:'Students', tabSet:'Settings', newEval:'New assessment',
    ncH:'New course', ncSub:'Just a name and section. A course code is created for you; add students from the Students tab.',
    ncName:'Course name', ncNamePh:'e.g. Educational Assessment', ncSec:'Section', ncSecPh:'e.g. Sec. 01 · Graduate', ncSem:'Term', ncCreate:'Create course', ncCreated:n=>`Created ${n}`,
    setBasic:'Basics', setSave:'Save', setSaved:'Saved',
    setCode:'Course code', setCodeD:'Students enter this code after signing in to join.', setJoin:'Allow joining by code', setJoinOff:'When off, the code no longer works. Adding by student ID still does.', codeRenewed:'New code created. The old one no longer works',
    setArch:'Archive', setArchD:'Archive when the term ends. It leaves the home list and reopens from "Show archived". Assessments and answers are kept.', archBtn:'Archive', unarchBtn:'Unarchive', archived:n=>`Archived ${n}`, unarchived:n=>`Reopened ${n}`,
    setDel:'Delete', setDelD:'Only a course with no assessments can be deleted. Otherwise archive it.', delBtn:'Delete course', delAsk:n=>`Delete ${n}? This cannot be undone.`, deleted:n=>`Deleted ${n}`, delBlocked:n=>`Cannot delete: ${n} assessments exist`,
    thEval:'Assessment', thType:'Answers', thDue:'Due', thSub:'Submitted', thRevC:'Reviewed', thRel:'Released', thState:'Status', thSid:'Student ID', thName:'Name', thSubAt:'Submitted', thScore:'Score', thRev:'Reviewed', thOpen:'',
    type:{hw:'Assignment', mid:'Midterm', final:'Final'}, way:{file:'Students submit', scan:'Direct upload'}, wayL:{file:'Students upload a PDF', scan:'Instructor uploads answer files'},
    aiNone:'Not yet', aiRun:'Scoring', aiDone:'Done', rev:(a,b)=>`${a}/${b} reviewed`, relYes:'Released', relNo:'Not released', noSub:'None',
    act:{wait:'Submissions', upload:'Upload answers', match:n=>`Link files ${n}`, ai:'AI scoring', scoring:'Scoring', rev:'Review', rel:'Release', view:'View results'},
    subScoring:n=>`${n} scoring`, subPre:n=>`${n} not scored`, aiBtn:n=>`AI scoring · ${n}`, noCredit:'You have used all credits for today. They refill to 100 at 00:00; continue scoring then. Already-scored students can be reviewed now.', aiRunning:'AI is scoring', aiFinished:n=>`AI scoring finished for ${n}`, subUnm:n=>`${n} to link`, waiting:'Waiting', relPart:'Partly released',
    autoNote:'"AI scoring" scores only submitted answers that are not scored yet, so you can start with early submissions. Review, then release to students.',
    stS:{none:'Not submitted', pre:'Not scored', scoring:'Scoring', yet:'Unreviewed', done:'Reviewed', rel:'Released'},
    stRel:'Released', relOf:(a,b)=>`${a}/${b}`,
    students:n=>`${n} students`, code:'Course code',
    evalEmpty:'No assessments yet. Create your first one.',
    newH:'New assessment', newSub:'Upload the question sheet; AI finds the questions and drafts scoring items for each. No standards required.',
    s1:'Basics', s2:'Question sheet & materials', s2d:'The question sheet is used to draft the rubric. Materials are shown to students with the assignment.',
    s3:'Rubric', s3d:'Drafted from the question sheet. Edit names, points and descriptions in place.',
    nameLbl:'Name', namePh:'e.g. Essay 2 · Critique of an assessment design', wayLbl:'Who uploads the answers?', dueLbl:'Due',
    fileD:'Like an assignment: students upload one PDF themselves. Has a due date', scanD:'Like an exam: collect answer sheets and upload them yourself, as one whole-class PDF or one file per student. No due date',
    dropLec:'Upload materials (optional)', dropLecD:'Lecture notes or readings for students', dropQ:'Upload question sheet', dropQD:'One blank worksheet or exam PDF',
    genBtn:'Draft rubric with AI', genNeed:'Upload the question sheet first', genRun:'Reading the sheet and drafting a rubric', genDone:'Drafted 4 criteria, 30 points in total.',
    rName:'Criterion', rPts:'Points', rDesc:'What earns full marks', addR:'Add criterion', total:'Total',
    cancel:'Cancel', create:'Create assessment', created:n=>`Created ${n}`,
    stSub:'Submitted', stAi:'AI scoring', stRev:'Reviewed', stFb:'Feedback',
    scanT:'Upload answers', scanUpD:'One PDF for the whole class on the left, one file per student on the right. You can add more later.', upClassT:'Whole-class scan PDF', upClassD:'If you scanned all answers into one PDF, upload it here. Next, split the pages by student.', upClassS:'One PDF', upFilesT:'Files per student', upFilesD:'Upload separately scanned files at once. We match students by the ID in the file name.', upFilesS:'PDF · JPG · PNG, many at once', spH:'Split by student', spBack:'Upload answers', spStep1:'Split settings', spStep2:'Check by student', spFile:'final_sec01_scans.pdf', spPages:n=>`${n} pages`, spMode:'How to split', spSame:'Same pages per student', spSameD:'When every answer sheet has the same pages', spEach:'Set per student', spEachD:'When page counts differ or someone is missing', spPer:'Pages per student', spNote:'Split in roster order. Set 0 pages for absent students; they become not submitted.', spThN:'Pages', spThR:'Page range', spAbsent:'Not submitted', spSum:(a,b)=>`Split ${a} of ${b} pages`, spMis:(a,b)=>`Split pages (${a}) do not match the file (${b}). Adjust the page counts.`, spGo:n=>`Split and upload for ${n}`, spDone:n=>`Uploaded answers for ${n} students. Press "AI scoring" to score.`, spPrev:'Preview', spMore:n=>`+${n} pages`, dropScan:'Upload answer PDF', dropScanD:'e.g. 202312001_Kang.pdf',
    scanOk:n=>`${n} recognized`, scanChk:n=>`${n} need checking`,
    release:n=>`Release · ${n}`, revBtn:n=>`Review · ${n}`, releaseNote:'Only reviewed students are released. Press "Release" again later for the rest.', released:n=>`Released feedback to ${n} students`,
    open:'Open', revDone:'Reviewed', revYet:'Not yet', notSub:'Not submitted', late:'Late', fix:'Edit score',
    fAll:'All', fNone:'Not submitted', fPre:'Not scored', fYet:'Unreviewed', fDone:'Reviewed', tblT:'Answers by student', tblD:w=>w==='scan'?'Review each uploaded answer, then release.':'Review submitted answers, then release.', upDone:n=>`${n} answer files uploaded`, upLast:'Last upload 10.21 09:40', upMore:'Upload more', upAdded:'More answer files uploaded',
    remind:'Send reminder', reminded:n=>`Sent a reminder to ${n} students`, remindAll:n=>`Remind ${n} not submitted`, remindT:'Send a reminder', remindTo:'To', remindVia:'Sent to their school email', send:'Send', remindMsg:(ev,due)=>`${ev} is due ${due}. We have no submission from you yet. Please upload your PDF before the due date.`, evEdit:'Edit evaluation', evDel:'Delete evaluation', evDelAsk:(n,k)=>k?`Delete ${n}? ${k} submissions and scores will be deleted. This cannot be undone.`:`Delete ${n}?`, evDeleted:n=>`Deleted ${n}`, excelDone:f=>`Downloaded ${f}`, upFor:'Upload for student', upForDone:n=>`Uploaded ${n}'s answer`,
    dueLeft:n=>`${n} days left`, duePassed:'Past due', closedNote:'Past due: students can no longer submit. Add late answers with "Upload for student".',
    excel:'Download Excel', regrade:'Rescore', regraded:'Rescored with the current rubric',
    unmatchT:n=>`${n} files without a student ID`, unmatchD:'No student ID in the file name. Open it and pick whose it is. Only students without a submission are listed.', pick:'Pick a student', match:'Link', matched:n=>`Linked to ${n}`, scanPage:(f,p)=>`${f} · p.${p}`,
    gradeOf:(a,b)=>`${a} of ${b}`, prev:'Prev', next:'Next', answer:'Answer', page:(a,b)=>`Page ${a} / ${b}`, vOrig:'Original', vText:'Recognized text', dl:'Download',
    rubricT:'Scores by criterion', aiCol:'AI', meCol:'Mine', fbT:'Feedback', fbD:'AI draft. Edit and save; the student sees this text.',
    save:'Save', saveNext:'Save & next', saved:'Saved',
    sampleFb:'You identified the concept of "validity in assessment design" accurately and backed it with the three criteria from week 3, which is convincing. The second argument, though, has no example, so that paragraph feels thin. One case from week 5 would make it solid.',
    rubric:[['Understanding',6,'Explains the concept in own words'],['Evidence',9,'Draws evidence from course materials'],['Reasoning',9,'Claim, evidence and conclusion flow as one'],['Expression',6,'Concise sentences, correct terms']],
  }
};
const d = k => D[lang][k];


const EVALS = {};
function evOf(cid){
  if (EVALS[cid]) return EVALS[cid];
  const c = cById(cid);
  if (cid==='c1') return EVALS.c1 = [
    
    {id:1, ko:'과제 0 · 자기소개 글',      en:'Essay 0 · Introduce yourself',      way:'file', due:'09.12', sub:40, scored:40, rev:40, relN:25},
    {id:2, ko:'과제 1 · 평가 설계 비평',    en:'Essay 1 · Critique of a design',     way:'file', due:'09.26', sub:42, scored:42, rev:42, relN:42},
    {id:3, ko:'쪽지시험 1',                en:'Quiz 1',                             way:'scan', due:'–',     sub:40, scored:40, rev:40, relN:0, miss2:true},   
    {id:4, ko:'쪽지시험 2',                en:'Quiz 2',                             way:'scan', due:'–',     sub:42, scored:0,  rev:0,  relN:0},   
    {id:5, ko:'중간고사',                  en:'Midterm',                            way:'scan', due:'–',     sub:42, scored:42, rev:30, relN:0},
    {id:6, ko:'과제 2 · 루브릭 개발',      en:'Essay 2 · Designing a rubric',       way:'file', due:'10.24', sub:41, scored:39, rev:12, relN:0},
    {id:7, ko:'과제 3 · 평가 문항 분석',   en:'Essay 3 · Item analysis',            way:'file', due:'10.10', sub:39, scored:39, rev:39, relN:0},
    {id:8, ko:'과제 4 · 채점기준 비교',    en:'Essay 4 · Comparing rubrics',        way:'file', due:'10.31', sub:0,  scored:0,  rev:0,  relN:0},
    {id:9, ko:'기말고사',                  en:'Final',                              way:'scan', due:'–',     sub:0,  scored:0,  rev:0,  relN:0},
  ].map(e=>({...e, type: e.way==='file'?'hw':'exam'}));
  const OV = {'c2-2':{rev:16}, 'c3-2':{sub:18, scored:0, rev:0, relN:0, due:'10.21', way:'file'}};   
  return EVALS[cid] = c.ev.map((e,i)=>{
    const type = /중간|Midterm/.test(e[0]+e[1]) ? 'mid' : /기말|Final/.test(e[0]+e[1]) ? 'final' : 'hw';
    const st = e[2];
    return {id:i+1, ko:e[0], en:e[1], type, way: type==='hw'?'file':'scan', due: st==='none'?'12.12':'10.10', sub: st==='none'?0:c.n, scored: st==='none'?0:c.n, rev: st==='done'?c.n:Math.round(c.n*0.4), relN: st==='done'?c.n:0, ...(OV[cid+'-'+(i+1)]||{})};
  });
}
const evName = e => lang==='ko' ? e.ko : e.en;
const evById = (cid,id) => evOf(cid).find(e=>e.id===+id);
function nextAct(e){
  const pre = e.sub - e.scored - (e.running||0);
  if (e.unmatched) return 'match';
  if (e.sub===0) return e.way==='scan' ? 'upload' : 'wait';
  if (e.scored===0) return e.running ? 'scoring' : 'ai';
  if (e.rev < e.scored) return 'rev';
  if (e.relN < e.rev) return 'rel';
  if (pre > 0) return 'ai';
  if (e.running) return 'scoring';
  return 'view';
}
let evalId = 1, gradeSid = null, detailTab = 'eval', viewMode = 'orig', vePage = 1;   

const subs = {};
function subOf(cid, eid){
  const k = cid+'-'+eid;
  if (subs[k]) return subs[k];
  const e = evById(cid,eid), base = rosterOf(cid);
  const seed = eid*7;
  const n = base.length, revN = e.sub ? Math.round(e.rev/e.sub*n) : 0, relN = e.sub ? Math.round(e.relN/e.sub*n) : 0, preN = e.sub ? Math.min(n, Math.ceil((e.sub-(e.scored??e.sub)-(e.running||0))/e.sub*n)) : 0;
  return subs[k] = base.map((r,i)=>{
    const kimOut = r.sid==='202312345' && cid==='c1' && [6,7,8].includes(+eid);   
    const at = e.sub ? (kimOut || (i===4 && e.sub < cById(cid).n && (e.type==='hw' || e.unmatched || e.miss2) && !(cid==='c1' && +eid===6)) || (i===7 && (e.unmatched || e.miss2)) ? null : `10.${String(10+((i+seed)%9)).padStart(2,'0')} ${String(9+((i*3+seed)%12)).padStart(2,'0')}:${String((i*17+seed)%60).padStart(2,'0')}`) : null;
    return {sid:r.sid, ko:r.ko, en:r.en, at, late:i===6, score:Math.round((13+((i*5+seed)%8))*1.5),    scoring: false, pre: !!at && i >= n-preN && !(i < revN), rev: !!at && i < revN, rel: !!at && i < relN, fb:null};
  });
}
const stOf = s => !s.at ? 'none' : s.scoring ? 'scoring' : s.pre ? 'pre' : s.rel ? 'rel' : s.rev ? 'done' : 'yet';


function courseHead(c, tab){
  return `<div class="ch">
    <div class="crumb"><a href="#" onclick="go('home');return false">${t('myCourses')}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${cName(c)}</span></div>
    <div class="ch-row"><div><h1>${cName(c)}</h1>
      <div class="ch-meta"><span>${lang==='ko'?c.secKo:c.secEn}</span><span>${d('students')(c.n)}</span><span>${d('code')} <span class="code-sm">${CODES[c.id]}</span></span></div></div>
      ${tab==='eval' ? `<button class="btn-primary" onclick="go('new','${c.id}')"><i data-lucide="plus" style="width:18px;height:18px"></i>${d('newEval')}</button>` : ''}</div>
    <div class="tabs">
      <span class="tab${tab==='eval'?' on':''}" onclick="go('course','${c.id}')">${d('tabEval')}<span class="n">${evOf(c.id).length}</span></span>
      <span class="tab${tab==='roster'?' on':''}" onclick="go('roster','${c.id}')">${d('tabRoster')}<span class="n">${c.n}</span></span>
      <span class="tab${tab==='settings'?' on':''}" onclick="go('settings','${c.id}')">${d('tabSet')}</span>
    </div></div>`;
}


function renderCourse(){
  const c = cById(rosterId), evs = evOf(c.id);
  const taNoRel = typeof IS_TA!=='undefined' && IS_TA && !document.documentElement.classList.contains('ta-rel');   
  const rows = [...evs].reverse().map(e=>{ const a = (taNoRel && nextAct(e)==='rel') ? 'view' : nextAct(e), scoring = e.running||0, pre = e.sub - e.scored - scoring;   
    const subCell = e.sub ? `${e.sub}/${c.n}${pre && e.scored ? `<span class="sub st muted">${d('subPre')(pre)}</span>` : ''}${scoring ? `<span class="sub st run">${d('subScoring')(scoring)}</span>` : ''}${e.unmatched ? `<span class="sub st run">${d('subUnm')(e.unmatched)}</span>` : ''}` : `<span class="st muted">${e.way==='file' ? d('waiting') : d('noSub')}</span>`;
    const relCell = !e.sub ? '<span class="st muted">–</span>' : e.relN===0 ? `<span class="st muted">${d('relNo')}</span>` : e.relN===e.sub ? `<span class="st ok">${e.relN}/${e.sub}</span>` : `${e.relN}/${e.sub}<span class="sub">${d('relPart')}</span>`;
    const fl = typeof flowActLabel==='function' ? flowActLabel(e) : null;
    const lbl = fl || (a==='match' ? d('act').match(e.unmatched) : d('act')[a]);
    const pri = ['upload','match','ai','rev','rel'].includes(a);
    return `<tr class="clickable" onclick="go('eval','${c.id}',${e.id})">
    <td class="l"><b>${evName(e)}</b></td>
    <td><span class="chip${e.way==='file'?'':' blue'}">${d('way')[e.way]}</span></td>
    <td>${e.way==='file' ? e.due : '–'}</td>
    <td>${subCell}</td>
    <td>${e.sub ? `${e.rev}/${e.sub}` : '<span class="st muted">–</span>'}</td>
    <td>${relCell}</td>
    <td><button class="act${pri?' pri':''}" ${a==='scoring'?'disabled':''} onclick="event.stopPropagation(); go('eval','${c.id}',${e.id})">${a==='scoring' ? `<span class="spin" style="width:12px;height:12px;border-width:2px"></span>` : ''}${lbl}${a==='scoring'?'':'<i data-lucide="chevron-right" style="width:16px;height:16px"></i>'}</button></td></tr>`; }).join('');
  return courseHead(c,'eval') + (evs.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th class="l">${d('thEval')}</th><th>${d('thType')}</th><th>${d('thDue')}</th><th>${d('thSub')}</th><th>${d('thRevC')}</th><th>${d('thRel')}</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`
    : `<div class="box" style="text-align:center;color:#6d7381">${d('evalEmpty')}</div>`);
}


const nf = {type:'hw', way:'file', lec:[], q:null, gen:'idle', rub:null};
function renderNew(){
  const c = cById(rosterId);
  const rc = (k, val, cur, lbl, desc) => `<div class="rc${cur===val?' on':''}" onclick="nfSet('${k}','${val}')"><b>${lbl}</b><small>${desc}</small></div>`;
  
  const wc = (val, ic, lbl, desc) => `<div class="way-card${nf.way===val?' on':''}" role="radio" aria-checked="${nf.way===val}" tabindex="0" onclick="nfSet('way','${val}')"><span class="wc-ico"><i data-lucide="${ic}"></i></span><span class="wc-txt"><b>${lbl}</b><small>${desc}</small></span><span class="wc-dot"></span></div>`;
  const fileRow = (f,i,kind) => `<div class="file"><i data-lucide="file-text"></i><b>${f}</b><small>${kind==='q'?'1.1 MB':'2.4 MB'}</small><button class="x" onclick="nfRm('${kind}',${i})"><i data-lucide="x" style="width:16px;height:16px"></i></button></div>`;
  const rub = nf.rub ? `<table class="rub"><thead><tr><th style="width:28%">${d('rName')}</th><th class="c" style="width:88px">${d('rPts')}</th><th>${d('rDesc')}</th><th style="width:32px"></th></tr></thead><tbody>
    ${nf.rub.map((r,i)=>`<tr><td><input class="ri" value="${r[0]}" oninput="nf.rub[${i}][0]=this.value"></td><td class="c"><input class="ri pt" value="${r[1]}" oninput="nf.rub[${i}][1]=+this.value||0; nfTotal()"></td><td><textarea class="ri" oninput="nf.rub[${i}][2]=this.value">${r[2]}</textarea></td><td><button class="file x" style="border:none;padding:4px" onclick="nf.rub.splice(${i},1); render()"><i data-lucide="x" style="width:16px;height:16px"></i></button></td></tr>`).join('')}
    </tbody><tfoot><tr><td>${d('total')}</td><td class="c pt" id="rubTotal">${nf.rub.reduce((a,r)=>a+r[1],0)}</td><td colspan="2"><button class="act txt" onclick="nf.rub.push(['',0,'']); render()"><i data-lucide="plus" style="width:16px;height:16px"></i>${d('addR')}</button></td></tr></tfoot></table>` : '';
  const gen = nf.gen==='running' ? `<div class="gen"><span class="spin"></span><p>${d('genRun')}</p></div>` : nf.gen==='done' ? `<div class="gen"><i data-lucide="sparkles"></i><p><b>${d('genDone')}</b></p></div>` : `<div class="gen"><i data-lucide="sparkles"></i><p>${nf.q ? '' : d('genNeed')}</p><button class="act pri" ${nf.q?'':'disabled'} onclick="nfGen()">${d('genBtn')}</button></div>`;
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('home');return false">${t('myCourses')}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><a href="#" onclick="go('course','${c.id}');return false">${cName(c)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${d('newH')}</span></div>
    <h1>${d('newH')}</h1><p class="page-sub" style="margin-bottom:0">${d('newSub')}</p></div>
  <div class="box"><p class="box-t"><span class="n">1</span>${d('s1')}</p><p class="box-d"></p>
    <div class="nf-form">
    <div class="fl"><label>${d('nameLbl')}</label><input class="inp" id="nfName" placeholder="${d('namePh')}" value="${nf.name||''}" oninput="nf.name=this.value"></div>
    <div class="fl"><label>${d('wayLbl')}</label><div class="way-row">${wc('file','file-up',d('wayL').file,d('fileD'))}${wc('scan','scan-line',d('wayL').scan,d('scanD'))}</div></div>
    ${nf.way==='file' ? `<div class="fl" style="margin-bottom:0"><label>${d('dueLbl')}</label><input class="inp" type="date" value="2026-10-24" style="max-width:240px"></div>` : ''}
    <div class="fl" style="margin:16px 0 0"><label>${lang==='ko'?'성적 반영 비율':'Weight in final grade'}</label><div style="display:flex;align-items:center;gap:8px"><input class="inp" type="number" min="0" max="100" value="${nf.weight??20}" style="max-width:120px" oninput="nf.weight=+this.value||0"><span>%</span></div><p class="hint" style="font-size:13px;color:#9ea3ad;margin:6px 0 0">${lang==='ko'?'총점을 이 비율로 환산해 리포트와 학생 피드백에 함께 보여요. 예: 27 / 30 → 18.0 / 20':'The total is converted to this weight in reports and student feedback. e.g. 27 / 30 → 18.0 / 20'}</p></div>
    </div>
  </div>
  <div class="box"><p class="box-t"><span class="n">2</span>${d('s2')}</p><p class="box-d">${d('s2d')}</p>
    <div class="two" style="grid-template-columns:1fr 1fr">
      <div><div class="drop" onclick="nfAdd('lec')"><i data-lucide="upload"></i><b>${d('dropLec')}</b>${d('dropLecD')}</div><div class="files">${nf.lec.map((f,i)=>fileRow(f,i,'lec')).join('')}</div></div>
      <div><div class="drop" onclick="nfAdd('q')"><i data-lucide="file-question"></i><b>${d('dropQ')}</b>${d('dropQD')}</div><div class="files">${nf.q?fileRow(nf.q,0,'q'):''}</div></div>
    </div>
  </div>
  <div class="box"><p class="box-t"><span class="n">3</span>${typeof qd==='function'?qd('s3'):d('s3')}</p><p class="box-d">${typeof qd==='function'?qd('s3d'):d('s3d')}</p>${typeof qsHtml==='function' ? qsHtml() : rub+gen}</div>
  ${typeof preDecideBox==='function' ? preDecideBox() : ''}
  <div class="foot-act"><button class="btn-sec" onclick="go('course','${c.id}')">${d('cancel')}</button><button class="btn-solid" ${nf.rub?'':'disabled'} onclick="nfCreate()">${d('create')}</button></div>`;
}
const _renderNew = renderNew;
renderNew = function(){
  let h = _renderNew();
  if (!nf.editId) return h;
  const e = evById(rosterId, nf.editId);
  h = h.replace(`onclick="nfCreate()">${d('create')}`, `onclick="nfSaveEdit()">${d('save')}`);
  h = h.split(d('newH')).join(lang==='ko'?'평가 수정':'Edit assessment').replace(d('newSub'), lang==='ko'?'채점기준을 바꿨다면 저장한 뒤 평가 상세에서 「다시 채점」을 눌러 반영해요.':'If you changed the rubric, press "Rescore" on the assessment page after saving.')
       .replace(`onclick="nfCreate()">${d('create')}`, `onclick="nfSaveEdit()">${d('save')}`).replace(`onclick="go('course','${rosterId}')">${d('cancel')}`, `onclick="nf.editId=null; go('eval','${rosterId}',${e.id})">${d('cancel')}`);
  if (e && e.sub) h = h.replace(/onclick="nfSet\('way','(file|scan)'\)"/g, 'style="pointer-events:none;opacity:.6"');
  return h;
};
function nfSaveEdit(){ const e = evById(rosterId, nf.editId); const nm = (document.getElementById('nfName')||{}).value; if (nm){ e.ko = e.en = nm; } if (!e.sub) e.way = nf.way; const id = e.id; if (nf.qs) e.qs = nf.qs; e.weight = nf.weight ?? 20; if (nf.pre) e.pre = {...nf.pre}; nf.pre = null; nf.weight = undefined; Object.assign(nf,{type:'hw',way:'file',lec:[],q:null,gen:'idle',rub:null,qs:null,name:'',editId:null}); go('eval', rosterId, id); toast(d('saved')); }
function nfSet(k,v){ nf[k]=v; nf.type = nf.way==='file'?'hw':'exam'; render(); }
function nfAdd(kind){ if (kind==='lec') nf.lec.push(lang==='ko' ? `${nf.lec.length+3}주차_강의자료.pdf` : `week${nf.lec.length+3}_slides.pdf`); else nf.q = lang==='ko' ? '과제2_문제지.pdf' : 'essay2_questions.pdf'; render(); }
function nfRm(kind,i){ if (kind==='lec') nf.lec.splice(i,1); else { nf.q=null; nf.rub=null; nf.qs=null; nf.gen='idle'; } render(); }
function nfGen(){ nf.gen='running'; render(); setTimeout(()=>{ nf.gen='done'; nf.rub = d('rubric').map(r=>[...r]); if (typeof qsSample==='function') nf.qs = qsSample(); render(); }, 1400); }
function nfTotal(){ const el=document.getElementById('rubTotal'); if (el) el.textContent = nf.rub.reduce((a,r)=>a+r[1],0); }
function nfCreate(){
  const name = (document.getElementById('nfName')||{}).value || (lang==='ko'?'과제 3':'Essay 3');
  const evs = evOf(rosterId); const id = Math.max(...evs.map(e=>e.id))+1;
  evs.push({id, ko:name, en:name, type:nf.way==='file'?'hw':'exam', way:nf.way, due: nf.way==='file'?'10.24':'–', sub:0, scored:0, rev:0, relN:0});
  const c = cById(rosterId); c.ev.push([name,name,'none']);
  evs[evs.length-1].qs = nf.qs; evs[evs.length-1].weight = nf.weight ?? 20; evs[evs.length-1].pre = {...(nf.pre || {var:'ask', part:'yes', out:'ask', abs:'zero'})};   
  nf.pre = null; nf.weight = undefined; Object.assign(nf,{type:'hw',way:'file',lec:[],q:null,gen:'idle',rub:null,qs:null,name:''});
  go('course', rosterId); toast(d('created')(name));
}


let scanAdded = false, evFilter = 'all', unmatched = [], remindTo = null, upMore = false;
const DUE_TODAY = '10.21';
function renderEval(){
  const c = cById(rosterId), e = evById(c.id, evalId), list = subOf(c.id, evalId);
  const a = nextAct(e), passed = e.way==='file' && e.due < DUE_TODAY, daysLeft = Math.max(0, Math.round((+e.due.slice(3)) - 21));
  const firstYet = list.find(s=>stOf(s)==='yet') || list.find(s=>s.at) || list[0];
  const qv = typeof qsView==='function' ? qsView(e) : {btn:'', panel:''};
  const scoringN = e.running||0, preN = list.filter(s=>stOf(s)==='pre').length, preAll = e.sub - e.scored - scoringN;
  const credit = (typeof CREDIT==='undefined' ? 100 : CREDIT);
  const tuneB = preAll > 0 && !scoringN && typeof td==='function' ? `<button class="act" ${credit<=0?'disabled':''} onclick="go('tune','${c.id}',${e.id})"><i data-lucide="flask-conical" style="width:16px;height:16px"></i>${td('entry')}</button>` : '';   
  
  const band = typeof flowBanner==='function' ? flowBanner(c, e) : '';
  const aiB = typeof flowAiBtns==='function' ? flowAiBtns(c, e, preAll, scoringN, credit, a) : preAll > 0 && !scoringN ? `${tuneB}<button class="act${a==='ai'?' pri':''}" ${credit<=0?'disabled':''} onclick="runAi()"><i data-lucide="sparkles" style="width:16px;height:16px"></i>${d('aiBtn')(preAll)}</button>` : '';
  const actBtn = (e.flow && (e.flow!=='final' || (!e.fbDone && !e.fbSkip))) || a==='ai' ? '' :       a==='rel' ? `<button class="act pri" onclick="release()">${d('release')(e.rev - e.relN)}</button>`
    : a==='rev' ? `<button class="act pri" onclick="go('grade','${c.id}',${e.id},'${firstYet.sid}')">${d('revBtn')(e.sub - e.rev)}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button>` : '';
  const scan = e.way==='scan' && e.sub && !upMore && band ? '' : e.way==='scan' && e.sub && !upMore ? `<div class="up-bar"><i data-lucide="file-check-2"></i><b>${d('upDone')(e.sub)}</b><span class="muted">${d('upLast')}</span><button class="act" onclick="upMore=true; render()"><i data-lucide="upload" style="width:15px;height:15px"></i>${d('upMore')}</button></div>`
    : e.way==='scan' ? `<div class="box"><p class="box-t"><i data-lucide="scan-line" style="width:20px;height:20px;color:#416bff"></i>${d('scanT')}</p><p class="box-d">${d('scanUpD')}</p>
      <div class="dz2">
        <div class="dz2-c" onclick="go('split','${c.id}',${e.id})"><span class="dz2-ic"><i data-lucide="file-stack"></i></span><b>${d('upClassT')}</b><p>${d('upClassD')}</p><small>${d('upClassS')}</small></div>
        <div class="dz2-c" onclick="addScan()"><span class="dz2-ic"><i data-lucide="files"></i></span><b>${d('upFilesT')}</b><p>${d('upFilesD')}</p><small>${d('upFilesS')}</small></div>
      </div>${e.sub ? `<div class="foot-act" style="padding:12px 0 0"><button class="btn-sec" onclick="upMore=false; render()">${d('cancel')}</button></div>` : ''}
      ${scanAdded ? `<div class="scan-list"><div class="scan"><span class="spin"></span><b>${lang==='ko'?'답안 40개 올리는 중':'Uploading 40 files'}</b></div></div>` : ''}</div>` : '';
  const noSub = list.filter(s=>!s.at);
  const stat = (lbl, val, hi) => `<div class="stat${hi?' hi':''}"><small>${lbl}</small><b>${val}</b></div>`;
  const cnt = {all:list.length, none:noSub.length, pre:list.filter(s=>stOf(s)==='pre').length, yet:list.filter(s=>stOf(s)==='yet').length, done:list.filter(s=>s.rev).length};
  const fil = k => `<span class="tab${evFilter===k?' on':''}" onclick="evFilter='${k}'; render()">${d({all:'fAll',none:'fNone',pre:'fPre',yet:'fYet',done:'fDone'}[k])}<span class="n">${cnt[k]}</span></span>`;
  const shownAll = list.filter(s=> evFilter==='all' || (evFilter==='none' && !s.at) || (evFilter==='pre' && stOf(s)==='pre') || (evFilter==='yet' && stOf(s)==='yet') || (evFilter==='done' && s.rev));
  const stTag = st => st==='none' ? `<span class="st muted">${d('stS').none}</span>` : st==='pre' ? `<span class="st muted">${d('stS').pre}</span>` : st==='scoring' ? `<span class="st run"><span class="spin" style="display:inline-block;width:12px;height:12px;vertical-align:-2px;margin-right:4px"></span>${d('stS').scoring}</span>` : st==='yet' ? `<span class="st">${d('stS').yet}</span>` : st==='done' ? `<span class="st ok">${d('stS').done}</span>` : `<span class="chip green">${d('stS').rel}</span>`;
  const shown = shownAll.slice(0, showN);
  const rows = shown.map(s=>{
    const nm = lang==='ko'?s.ko:s.en, st = stOf(s);
    
    const act = st==='none' ? (e.way==='file' && !passed ? `<button class="act txt" onclick="event.stopPropagation(); remindTo=['${s.sid}']; render()">${d('remind')}</button>` : `<button class="act txt" onclick="event.stopPropagation(); upFor('${s.sid}')">${d('upFor')}</button>`)
      : st==='scoring' || st==='pre' ? '' : st==='rel' ? `<button class="act txt" onclick="event.stopPropagation(); go('grade','${c.id}',${e.id},'${s.sid}')">${d('fix')}</button>`
      : `<button class="act txt" onclick="event.stopPropagation(); go('grade','${c.id}',${e.id},'${s.sid}')">${d('open')}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button>`;
    return `<tr class="${s.at && st!=='scoring' && st!=='pre'?'clickable':''}" onclick="${s.at && st!=='scoring' && st!=='pre'?`go('grade','${c.id}',${e.id},'${s.sid}')`:''}">
    <td>${s.sid}</td><td>${nm}</td>
    <td>${s.at ? `${s.at}${s.late && e.way==='file' ? ` <span class="tag" style="height:20px;font-size:12px;color:#b45309;background:#fff4e5">${d('late')}</span>`:''}${s.byProf ? ` <span class="tag" style="height:20px;font-size:12px">${d('howProf')}</span>`:''}` : `<span class="st muted">${d('notSub')}</span>`}</td>
    <td>${s.at && st!=='scoring' && st!=='pre' ? (typeof scoreCell==='function' ? scoreCell(e, s) : `<b>${s.score}</b><span class="st muted"> / 30</span>`) : '<span class="st muted">–</span>'}</td>
    <td>${stTag(st)}</td>
    <td style="white-space:nowrap">${act}</td></tr>`; }).join('');
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('home');return false">${t('myCourses')}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><a href="#" onclick="go('course','${c.id}');return false">${cName(c)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${evName(e)}</span></div>
    <div class="ch-row"><div><h1>${evName(e)}</h1><div class="ch-meta"><span class="chip${e.way==='file'?'':' blue'}">${d('wayL')[e.way]}</span>${e.way==='file' ? `<span>${d('thDue')} <b>${e.due}</b> · ${passed ? d('duePassed') : d('dueLeft')(daysLeft)}</span>` : ''}${band && e.way==='scan' && e.sub && !upMore ? `<span class="muted">${d('upDone')(e.sub)}</span><button class="act txt" onclick="upMore=true; render()"><i data-lucide="upload"></i>${d('upMore')}</button>` : ''}${qv.btn}<span class="ev-mng"><button class="act txt" onclick="editEval()"><i data-lucide="pencil"></i>${d('evEdit')}</button><button class="act txt del" onclick="delEval()"><i data-lucide="trash-2"></i>${d('evDel')}</button></span></div></div><div style="display:flex;gap:8px">${aiB}${actBtn}</div></div></div>
  ${qv.panel}${scan}${band}
  ${remindTo ? `<div class="box"><p class="box-t"><i data-lucide="bell" style="width:20px;height:20px;color:#416bff"></i>${d('remindT')}</p><p class="box-d">${d('remindVia')}</p>
    <div class="fl"><label>${d('remindTo')}</label><div style="display:flex;flex-wrap:wrap;gap:6px">${remindTo.map(id=>{ const x=list.find(y=>y.sid===id); return `<span class="chip">${x.sid} ${lang==='ko'?x.ko:x.en}</span>`; }).join('')}</div></div>
    <textarea class="fb-area" id="rmMsg">${d('remindMsg')(evName(e), e.due)}</textarea>
    <div class="foot-act" style="padding:12px 0 0"><button class="btn-sec" onclick="remindTo=null; render()">${d('cancel')}</button><button class="btn-solid" onclick="toast(d('reminded')(remindTo.length)); remindTo=null; render()">${d('send')}</button></div></div>` : ''}
  ${band ? '' : `<p class="sec-desc">${d('autoNote')}</p>`}
  ${preAll > 0 && credit<=0 ? `<p class="note"><i data-lucide="info"></i><span>${d('noCredit')}</span></p>` : ''}
  <div class="stats">${stat(d('stSub'), `${e.sub}<em>/ ${c.n}</em>${preAll && e.scored ? `<em style="margin-left:8px">${d('subPre')(preAll)}</em>` : ''}${scoringN ? `<em style="margin-left:8px;color:#3151c4">${d('subScoring')(scoringN)}</em>` : ''}`)}${stat(d('stRev'), e.sub ? `${e.rev}<em>/ ${e.sub}</em>` : '–', a==='rev')}${stat(d('stRel'), e.sub ? `${e.relN}<em>/ ${e.sub}</em>` : '–', a==='rel')}</div>
  ${band ? '' : a==='rel' ? `<p class="note"><i data-lucide="info"></i><span>${d('releaseNote')}</span></p>` : passed && noSub.length ? `<p class="note"><i data-lucide="info"></i><span>${d('closedNote')}</span></p>` : ''}
  ${e.sub ? `<div class="tbl-title"><b>${d('tblT')}</b><small>${d('tblD')(e.way)}</small></div><div class="tabs" style="margin:0 0 14px;align-items:center">${fil('all')}${fil('none')}${cnt.pre ? fil('pre') : ''}${fil('yet')}${fil('done')}<span style="margin-left:auto;display:inline-flex;gap:6px">${noSub.length && e.way==='file' && !passed ? `<button class="act" onclick="remindTo=subOf('${c.id}',${e.id}).filter(x=>!x.at).map(x=>x.sid); render()"><i data-lucide="bell" style="width:15px;height:15px"></i>${d('remindAll')(noSub.length)}</button>` : ''}<button class="act" ${credit<=0?'disabled title="'+d('noCredit')+'"':''} onclick="regrade()"><i data-lucide="refresh-cw" style="width:15px;height:15px"></i>${d('regrade')}</button><button class="act" onclick="dlEval()"><i data-lucide="download" style="width:15px;height:15px"></i>${d('excel')}</button></span></div>
  <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${d('thSid')}</th><th>${d('thName')}</th><th>${d('thSubAt')}</th><th>${d('thScore')}</th><th>${d('thState')}</th><th></th></tr></thead><tbody>${rows}${shownAll.length > showN ? `<tr><td colspan="6"><button class="row-x" onclick="showN+=10; render()">${t('moreRows')(Math.min(10, shownAll.length-showN))}</button></td></tr>` : ''}</tbody></table></div>` : ''}`;
}
function runAi(){
  const e = evById(rosterId, evalId), l = subOf(rosterId, evalId), ids = l.filter(s=>stOf(s)==='pre').map(s=>s.sid), n = e.sub - e.scored - (e.running||0);
  l.forEach(s=>{ if (ids.includes(s.sid)){ s.pre=false; s.scoring=true; } }); e.running = n; render(); toast(d('aiRunning'));
  setTimeout(()=>{ l.forEach(s=>{ if (ids.includes(s.sid)) s.scoring=false; }); e.scored += n; e.running = 0; if (view==='eval') render(); toast(d('aiFinished')(n)); }, 2400);
}
function addScan(){ if (evById(rosterId, evalId).sub){ upMore=false; render(); toast(d('upAdded')); return; } scanAdded = true; render(); setTimeout(()=>{ const e = evById(rosterId, evalId), l = subOf(rosterId, evalId); e.sub = cById(rosterId).n - 2; e.scored = 0; e.rev = 0; e.relN = 0;
  const ids = []; l.forEach((s,i)=>{ const got = !(i===4||i===7); s.at = got ? '10.21 09:40' : null; s.late=false; s.scoring = false; s.pre = got; s.rev=false; s.rel=false; });
  unmatched = [{file:'scan_0009.pdf'},{file:'scan_0031.pdf'}]; e.unmatched = 2; scanAdded = false; render(); }, 1600); }
function matchScan(i){ const sel = document.getElementById('um'+i); if (!sel.value) return; const s = subOf(rosterId, evalId).find(x=>x.sid===sel.value); s.at='10.21 09:40'; s.pre=true; const e = evById(rosterId, evalId); e.sub++; e.unmatched = Math.max(0, (e.unmatched||0)-1); unmatched.splice(i,1); render(); toast(d('matched')(lang==='ko'?s.ko:s.en)); }
function upFor(sid){ const s = subOf(rosterId, evalId).find(x=>x.sid===sid); s.at = '10.21 15:02'; s.byProf = true; s.late = true; s.pre = true; const e = evById(rosterId, evalId); e.sub++; render(); toast(d('upForDone')(lang==='ko'?s.ko:s.en)); }
function regrade(){ const l = subOf(rosterId, evalId); const ids = l.filter(s=>s.at).map(s=>{ s.scoring=true; return s.sid; }); render(); setTimeout(()=>{ ids.forEach(id=>{ l.find(x=>x.sid===id).scoring=false; }); render(); toast(d('regraded')); }, 1800); }
function release(){ const e = evById(rosterId, evalId); subOf(rosterId, evalId).forEach(s=>{ if (s.rev) s.rel = true; }); const n = e.rev - e.relN; e.relN = e.rev; const c=cById(rosterId); const i=e.id-1; if (c.ev[i] && e.relN===e.sub) c.ev[i][2]='done'; render(); toast(d('released')(n)); }

function dlEval(){
  const c = cById(rosterId), e = evById(c.id, evalId), rows = [['학번','이름','제출','점수','상태']].concat(subOf(c.id, evalId).map(s=>[s.sid, s.ko, s.at||'', s.at&&!s.scoring?s.score:'', d('stS')[stOf(s)]]));
  const f = `${cName(c)}_${evName(e)}.csv`.replace(/[\/:*?"<>|· ]+/g,'_');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['\ufeff'+rows.map(r=>r.join(',')).join('\n')], {type:'text/csv'})); a.download = f; a.click(); toast(d('excelDone')(f));
}
function delEval(){
  const c = cById(rosterId), e = evById(c.id, evalId);
  if (!confirm(d('evDelAsk')(evName(e), e.sub))) return;
  const l = evOf(c.id); l.splice(l.indexOf(e),1); go('course', c.id); toast(d('evDeleted')(evName(e)));
}
function editEval(){
  const e = evById(rosterId, evalId);
  Object.assign(nf, {name: evName(e), way: e.way, type: e.type, lec: [lang==='ko'?'3주차_강의자료.pdf':'week3_slides.pdf'], q: lang==='ko'?'문제지.pdf':'questions.pdf', gen:'done', rub: d('rubric').map(r=>[...r]), qs: e.qs || (typeof qsSample==='function' ? qsSample() : null), editId: e.id, weight: e.weight ?? 20, pre: e.pre ? {...e.pre} : null});
  go('new', rosterId);
}

let spMode = 'same', spPer = 3, spPages = null;
const SP_TOTAL = 120;
function spInit(){ const stu = rosterOf(rosterId); spPages = stu.map((s,i)=> (i===4||i===7) ? 0 : spPer); }
let spSel = 1, SP_TRUE = null;
const SP_ANS = {
  ko:[['1. 타당도의 개념을 설명하시오.','타당도는 평가가 재려고 한 것을 실제로 재는 정도이다.','내용 타당도는 문항이 수업 목표를 고르게 담았는지,','준거 타당도는 다른 검사 결과와 얼마나 맞는지로 본다.'],
      ['2. 제시된 평가 설계의 문제점을 분석하시오.','이 설계는 서술형 1문항으로 단원 전체를 재려 한다.','채점 기준이 「잘함·보통」뿐이라 채점자마다 다르게','읽힐 수 있고, 학생도 무엇을 써야 할지 알기 어렵다.'],
      ['3. 개선안과 그 근거를 쓰시오.','문항을 두 개로 나누고 각 문항에 배점과 모범답안을 둔다.','채점 기준은 점수 항목으로 쪼개 채점자 간 차이를 줄인다.','근거: 내용 타당도와 채점 신뢰도를 함께 높일 수 있다.']],
  en:[['1. Explain the concept of validity.','Validity is how well an assessment measures what it intends to.','Content validity asks whether items cover the goals evenly;','criterion validity asks how well it agrees with other tests.'],
      ['2. Analyze the problems in the given design.','It tries to measure a whole unit with one essay item.','The rubric only says good / fair, so graders may read','it differently and students cannot tell what to write.'],
      ['3. Write an improvement and its rationale.','Split into two items, each with points and a model answer.','Break the rubric into scored criteria to reduce grader gaps.','Rationale: raises both content validity and reliability.']]
};
function spPhys(){ const out = []; SP_TRUE.forEach((v,i)=>{ for (let k=0;k<v;k++) out.push({i, k, of:v}); }); return out; }
function spSheet(pg, stu, big){
  if (!pg) return `<div class="sh${big?' big':''} blank"></div>`;
  const s = stu[pg.i], nm = lang==='ko'?s.ko:s.en, ans = SP_ANS[lang][pg.k % 3];
  const head = pg.k===0
    ? `<div class="sh-id"><span>${lang==='ko'?'학번':'ID'}<b class="hw">${s.sid}</b></span><span>${lang==='ko'?'이름':'Name'}<b class="hw">${nm}</b></span></div>`
    : `<div class="sh-id cont"><span class="hw">( ${pg.k+1} / ${pg.of} )</span></div>`;
  if (!big) return `<div class="sh">${head}<i></i><i></i><i></i><i></i><i></i></div>`;
  return `<div class="sh big"><p class="sh-t">${lang==='ko'?'교육평가 기말고사 답안지':'Educational Assessment · Final exam answer sheet'}</p>${head}<p class="sh-q">${ans[0]}</p>${ans.slice(1).map(l=>`<p class="hw sh-l">${l}</p>`).join('')}<p class="hw sh-l"></p><p class="hw sh-l"></p></div>`;
}
let spStage = 'set', spZoom = 100, spPrev = {}, spOff = {};
const SP = {
  ko:{ back:'이전으로', set:'분할 설정', setD:'학생 수에 맞게 PDF를 나눠요.', info:'파일 정보', pages:n=>`${n}페이지`, how:'분할 방식',
    auto:'자동 분할', autoD:n=>`학생 수(${n}명)에 맞게 균등 분할`, manual:'수동 분할', manualD:'학생별 페이지 번호를 직접 입력',
    start:'분할 시작', running:'PDF를 분할하는 중이에요', done:'PDF 분할 결과', doneD:'페이지 번호를 입력해 학생별 답안을 구분해 주세요. 줄을 누르면 왼쪽에 그 학생 첫 쪽이 보여요.',
    thN:'페이지 수', thR:'페이지 번호', thA:'미제출', absent:'(미제출)', reset:'분할 재설정', up:n=>`${n}명 답안 올리기` },
  en:{ back:'Back', set:'Split settings', setD:'Split the PDF to match the class.', info:'File', pages:n=>`${n} pages`, how:'Split method',
    auto:'Automatic', autoD:n=>`Split evenly for ${n} students`, manual:'Manual', manualD:'Enter page numbers per student',
    start:'Start split', running:'Splitting the PDF', done:'Split result', doneD:'Enter page numbers to separate each student\'s answers. Click a row to see that student\'s first page on the left.',
    thN:'Pages', thR:'Page numbers', thA:'Absent', absent:'(absent)', reset:'Reset split', up:n=>`Upload answers for ${n}` }
};
const sp = k => SP[lang][k];
function renderSplit(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id);
  if (!SP_TRUE || SP_TRUE.length !== stu.length) SP_TRUE = stu.map((s,i)=> (i===4||i===7) ? 0 : 3);
  if (!spPages || spPages.length !== stu.length) spPages = stu.map(()=>0);
  const phys = spPhys();
  spSel = Math.min(Math.max(1, spSel), SP_TOTAL);
  const viewer = `<div class="spx-view">
      <div class="spx-bar"><span class="spx-fn">${d('spFile')}</span>
        <span class="spx-pg"><input type="number" min="1" max="${SP_TOTAL}" value="${spSel}" onchange="spSel=+this.value||1; render()"><em>/</em>${SP_TOTAL}</span>
        <span class="spx-zoom"><button onclick="spZoom=Math.max(50,spZoom-10); render()" aria-label="−">&minus;</button><b>${spZoom}%</b><button onclick="spZoom=Math.min(200,spZoom+10); render()" aria-label="+">+</button></span></div>
      <div class="spx-canvas"><div class="spx-page" style="zoom:${spZoom/100}">${spSheet(phys[spSel-1], stu, true)}</div></div></div>`;
  let panel;
  if (spStage==='set' || spStage==='run'){
    panel = `<div class="spx-hd"><h3>${sp('set')}</h3><p>${sp('setD')}</p></div>
      <div class="spx-body">
        <div class="spx-info"><p>${sp('info')}</p><div><i data-lucide="file-text"></i><span>${d('spFile')}</span><small>${sp('pages')(SP_TOTAL)}</small></div></div>
        <div><p class="spx-lbl">${sp('how')}</p>
          <label class="spx-radio${spMode==='same'?' on':''}"><input type="radio" name="spm" ${spMode==='same'?'checked':''} onchange="spMode='same'; render()"><span><b>${sp('auto')}</b><small>${sp('autoD')(stu.length)}</small></span></label>
          <label class="spx-radio${spMode==='each'?' on':''}"><input type="radio" name="spm" ${spMode==='each'?'checked':''} onchange="spMode='each'; render()"><span><b>${sp('manual')}</b><small>${sp('manualD')}</small></span></label></div>
      </div>
      <div class="spx-ft"><button class="btn-sec" onclick="spLeave()">${d('cancel')}</button><button class="btn-solid" onclick="spStart()"><i data-lucide="scissors" style="width:15px;height:15px"></i>${sp('start')}</button></div>`;
  } else {
    let at = 1; const start = spPages.map(v=>{ const r = at; at += v; return r; });
    const sum = spPages.reduce((x,y)=>x+y,0), ok = sum===SP_TOTAL, n = spPages.filter(v=>v>0).length;
    const selOwner = spPages.findIndex((v,i)=> v && spSel>=start[i] && spSel<start[i]+v);
    const rows = stu.map((s,i)=>{ const v = spPages[i], end = start[i]+v-1, abs = !!spOff[i];
      return `<tr class="${v?'clickable':'absent'}${i===selOwner?' sel':''}"${v && start[i]<=SP_TOTAL ? ` onclick="spSel=${start[i]}; render()"` : ''}><td>${s.sid}</td><td>${lang==='ko'?s.ko:s.en}</td><td>${v}</td>
        <td>${v ? `<span class="spx-rng" onclick="event.stopPropagation()"><input type="number" value="${start[i]}" disabled><em>~</em><input type="number" min="${start[i]}" value="${end}" class="${end>SP_TOTAL?'over':''}" onchange="spPages[${i}]=Math.max(1,(+this.value||${start[i]})-${start[i]}+1); render()"></span>`
          : abs ? `<span class="st muted">${sp('absent')}</span>` : `<span class="spx-rng" onclick="event.stopPropagation()"><input type="number" value="${start[i]}" disabled><em>~</em><input type="number" min="${start[i]}" placeholder="–" onchange="spPages[${i}]=Math.max(1,(+this.value||${start[i]})-${start[i]}+1); render()"></span>`}</td>
        <td><input type="checkbox" class="spx-cb" ${abs?'checked':''} onclick="event.stopPropagation()" onchange="spAbs(${i}, this.checked)"></td></tr>`; }).join('');
    panel = `<div class="spx-hd"><h3>${sp('done')}</h3><p>${sp('doneD')}</p></div>
      <div class="spx-body tbl-body"><table class="tbl spx-tbl"><thead><tr><th>${d('thSid')}</th><th>${d('thName')}</th><th>${sp('thN')}</th><th>${sp('thR')}</th><th>${sp('thA')}</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="spx-ft"><span class="${ok?'spx-ok':'spx-mis'}">${ok ? d('spSum')(sum, SP_TOTAL) : d('spMis')(sum, SP_TOTAL)}</span>
        <button class="btn-sec" onclick="spStage='set'; spPages=null; spPrev={}; spOff={}; render()"><i data-lucide="rotate-ccw" style="width:15px;height:15px"></i>${sp('reset')}</button>
        <button class="btn-solid" ${ok?'':'disabled'} onclick="spApply()"><i data-lucide="check" style="width:15px;height:15px"></i>${sp('up')(n)}</button></div>`;
  }
  return `<div class="spx">
    <div class="spx-top"><button class="act txt" onclick="spLeave()"><i data-lucide="chevron-left" style="width:18px;height:18px"></i>${sp('back')}</button><b>${evName(e)} · ${d('spH')}</b></div>
    <div class="spx-split">${viewer}<div class="spx-panel">${panel}</div></div>
    ${spStage==='run' ? `<div class="spx-run"><span class="spin"></span><p>${sp('running')}</p></div>` : ''}</div>`;
}
function spStart(){ const stu = rosterOf(rosterId); spStage = 'run'; render();
  setTimeout(()=>{ spPages = stu.map(()=> spMode==='same' ? Math.round(SP_TOTAL / stu.length) : 0); spPrev = {}; spOff = {}; spStage = 'done'; if (view==='split') render(); }, 1000); }
function spAbs(i, on){ if (on){ spPrev[i] = spPages[i]; spPages[i] = 0; spOff[i] = true; } else { spOff[i] = false; spPages[i] = spPrev[i] || (spMode==='same' ? Math.round(SP_TOTAL / rosterOf(rosterId).length) : 0); } render(); }
function spLeave(){ spPages = null; spPrev = {}; spOff = {}; spStage = 'set'; SP_TRUE = null; go('eval', rosterId, evalId); }
function spApply(){
  const e = evById(rosterId, evalId), l = subOf(rosterId, evalId), stu = rosterOf(rosterId);
  let n = 0; l.forEach((s,i)=>{ const got = spPages[i] > 0; s.at = got ? '10.21 09:40' : null; s.pre = got; s.scoring=false; s.rev=false; s.rel=false; s.late=false; if (got) n++; });
  e.sub = Math.round(n / stu.length * cById(rosterId).n); e.scored = 0; e.rev = 0; e.relN = 0; e.unmatched = 0; unmatched = [];
  spPages = null; SP_TRUE = null; spSel = 1; spStage = 'set'; spPrev = {}; spOff = {}; go('eval', rosterId, e.id); toast(d('spDone')(e.sub));
}

function renderGrade(){
  const c = cById(rosterId), e = evById(c.id, evalId), list = subOf(c.id, evalId).filter(s=>s.at);
  const i = Math.max(0, list.findIndex(s=>s.sid===gradeSid)), s = list[i];
  const rub = d('rubric'), ai = [4,4,4,3].map((v,k)=>Math.min(rub[k][1], v + ((s.score-15+k)%2+2)-2));
  const fb = s.fb ?? d('sampleFb');
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('course','${c.id}');return false">${cName(c)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${lang==='ko'?s.ko:s.en}</span></div>
    <div class="ch-row"><div><h1>${lang==='ko'?s.ko:s.en} <span style="font-size:16px;font-weight:500;color:#6d7381">${s.sid}</span></h1><div class="ch-meta"><span>${d('thSubAt')} <b>${s.at}</b></span>${s.rev?`<span class="chip green"><i data-lucide="check"></i>${d('revDone')}</span>`:''}</div></div>
      <div class="stu-nav"><button class="act" ${i===0?'disabled':''} onclick="go('grade','${c.id}',${e.id},'${(list[i-1]||s).sid}')"><i data-lucide="chevron-left" style="width:16px;height:16px"></i>${d('prev')}</button><b>${d('gradeOf')(i+1, list.length)}</b><button class="act" ${i===list.length-1?'disabled':''} onclick="go('grade','${c.id}',${e.id},'${(list[i+1]||s).sid}')">${d('next')}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button></div></div></div>
  <div class="two">
    <div class="ans">
      <div class="vf-bar"><span class="vf-name">${lang==='ko'?'과제2_'+s.ko+'.pdf':'essay2_'+s.en.split(' ')[0]+'.pdf'}</span><span class="vf-date">${s.at}</span><button class="vf-dl" onclick="notReady()"><i data-lucide="download" style="width:14px;height:14px"></i>${d('dl')}</button>
        <span class="ve-seg"><button class="ve-seg-btn${viewMode==='orig'?' on':''}" onclick="viewMode='orig'; render()"><i data-lucide="file-text"></i>${d('vOrig')}</button><button class="ve-seg-btn${viewMode==='text'?' on':''}" onclick="viewMode='text'; render()"><i data-lucide="square-split-vertical"></i>${d('vText')}</button></span></div>
      <div class="ve-body"><div class="ve-page${viewMode==='orig'?' orig':''}"><span class="num">${d('page')(vePage,2)}</span>
        <h4>${lang==='ko'?'문항 1. 제시된 수행평가 설계의 타당성을 평가하고 개선안을 제시하시오.':'Q1. Evaluate the validity of the given assessment design and propose improvements.'}</h4>
        <p>${lang==='ko'?'제시된 수행평가는 <mark>평가 목표와 과제 유형이 어긋난다</mark>는 점에서 타당성이 낮다. 3주차에 다룬 타당도의 세 요소(내용·구인·결과) 가운데 내용 타당도는 확보되었으나, 구인 타당도는 과제가 요구하는 능력이 "논증"이 아니라 "요약"에 머물러 있어 확보되지 않는다. … 개선안으로는 첫째, 과제 지시문을 "요약하시오"에서 "근거를 들어 주장하시오"로 바꾸고, 둘째, 채점기준에 근거의 타당성 항목을 추가하며, 셋째, …':'The given design has low validity because <mark>the assessment goal and the task type do not match</mark>. Of the three elements of validity covered in week 3 (content, construct, consequential), content validity is secured, but construct validity is not, since the task asks for a summary rather than an argument. … As improvements, first, change the prompt from "summarize" to "argue with evidence"; second, add an evidence criterion to the rubric; third, …'}</p></div></div>
      <div class="ve-foot"><button ${vePage===1?'disabled':''} onclick="vePage=1; render()"><i data-lucide="chevron-left" style="width:16px;height:16px"></i></button><b>${vePage}</b>/ 2<button ${vePage===2?'disabled':''} onclick="vePage=2; render()"><i data-lucide="chevron-right" style="width:16px;height:16px"></i></button></div></div>
    <div>
      <div class="box" style="margin-bottom:14px"><p class="box-t">${d('rubricT')}</p>
        <table class="rub"><thead><tr><th>${d('rName')}</th><th style="width:56px;text-align:center">${d('rPts')}</th><th style="width:56px;text-align:center">${d('aiCol')}</th><th style="width:72px;text-align:center">${d('meCol')}</th></tr></thead><tbody>
        ${rub.map((r,k)=>`<tr><td>${r[0]}<span class="sub" style="display:block;font-size:13px;color:#9ea3ad;margin-top:2px">${r[2]}</span></td><td class="pt" style="font-weight:400;color:#6d7381">${r[1]}</td><td class="pt ai-sc">${ai[k]}</td><td style="text-align:center"><input class="sc-in" value="${ai[k]}" oninput="gTotal()"></td></tr>`).join('')}
        </tbody><tfoot><tr><td>${d('total')}</td><td class="pt">20</td><td class="pt ai-sc">${ai.reduce((a,b)=>a+b,0)}</td><td class="pt" id="gTotal">${ai.reduce((a,b)=>a+b,0)}</td></tr></tfoot></table></div>
      <div class="box" style="margin-bottom:14px"><p class="box-t">${d('fbT')}</p><p class="box-d">${d('fbD')}</p><textarea class="fb-area" id="gFb">${fb}</textarea></div>
      <div class="foot-act" style="padding:0"><button class="btn-sec" onclick="saveGrade(false)">${d('save')}</button><button class="btn-solid" onclick="saveGrade(true)">${d('saveNext')}</button></div>
    </div></div>`;
}
function gTotal(){ const v=[...document.querySelectorAll('.sc-in')].reduce((a,i)=>a+(+i.value||0),0); document.getElementById('gTotal').textContent=v; }
function saveGrade(next){
  const e = evById(rosterId, evalId), list = subOf(rosterId, evalId).filter(s=>s.at), i = list.findIndex(s=>s.sid===gradeSid), s = list[i];
  if (!s.rev){ s.rev=true; e.rev = Math.min(e.sub, e.rev+1); }
  s.scoring = false;
  s.fb = document.getElementById('gFb').value; s.score = +document.getElementById('gTotal').textContent;
  toast(d('saved'));
  if (next && list[i+1]) go('grade', rosterId, e.id, list[i+1].sid); else if (next) go('eval', rosterId, e.id); else render();
}

const nc = {name:'', sec:'', sem:'s2'};
const genCode = () => Array.from({length:6}, ()=>'ABCDEFGHJKMNPQRSTUVWXYZ23456789'[Math.floor(Math.random()*31)]).join('');
function renderNewCourse(){
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('home');return false">${t('myCourses')}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${d('ncH')}</span></div>
    <h1>${d('ncH')}</h1><p class="page-sub" style="margin-bottom:0">${d('ncSub')}</p></div>
  <div class="box">
    <div class="fl"><label>${d('ncName')}</label><input class="inp" id="ncName" placeholder="${d('ncNamePh')}" value="${nc.name}" oninput="nc.name=this.value; document.getElementById('ncGo').disabled=!this.value.trim()"></div>
    <div class="fl"><label>${d('ncSec')}</label><input class="inp" id="ncSec" placeholder="${d('ncSecPh')}" value="${nc.sec}" oninput="nc.sec=this.value" style="max-width:260px"></div>
    <div class="fl" style="margin-bottom:0"><label>${d('ncSem')}</label><select class="sel" onchange="nc.sem=this.value" style="width:220px"><option value="s2" ${nc.sem==='s2'?'selected':''}>${T[lang].sems.s2}</option><option value="s1" ${nc.sem==='s1'?'selected':''}>${T[lang].sems.s1}</option></select></div>
  </div>
  <div class="foot-act"><button class="btn-sec" onclick="go('home')">${d('cancel')}</button><button class="btn-solid" id="ncGo" ${nc.name.trim()?'':'disabled'} onclick="createCourse()">${d('ncCreate')}</button></div>`;
}
function createCourse(){
  const name = nc.name.trim(); if (!name) return;
  const id = 'c' + (Math.max(...COURSES.map(c=>+c.id.slice(1)))+1);
  const sec = nc.sec.trim() || (lang==='ko'?'01분반':'Sec. 01');
  COURSES.push({id, sem:nc.sem, ko:name, en:name, secKo:sec, secEn:sec, n:0, ev:[]});
  CODES[id] = genCode(); EVALS[id] = [];
  Object.assign(nc, {name:'', sec:'', sem:'s2'});
  go('course', id); toast(d('ncCreated')(name));
}

function renderSettings(){
  const c = cById(rosterId), evN = evOf(c.id).length;
  return courseHead(c,'settings') + `
  <div class="box"><p class="box-t">${d('setBasic')}</p>
    <div class="fl"><label>${d('ncName')}</label><input class="inp" id="stName" value="${cName(c)}"></div>
    <div class="fl"><label>${d('ncSec')}</label><input class="inp" id="stSec" value="${lang==='ko'?c.secKo:c.secEn}" style="max-width:260px"></div>
    <div class="fl"><label>${d('ncSem')}</label><select class="sel" id="stSem" style="width:220px"><option value="s2" ${c.sem==='s2'?'selected':''}>${T[lang].sems.s2}</option><option value="s1" ${c.sem==='s1'?'selected':''}>${T[lang].sems.s1}</option></select></div>
    <div class="foot-act" style="padding:0;justify-content:flex-start"><button class="btn-solid" onclick="saveSettings()">${d('setSave')}</button></div></div>
  <div class="box"><p class="box-t">${d('setCode')}</p><p class="box-d">${d('setCodeD')}</p>
    <div class="code-row"><span class="code" style="${c.joinOff?'opacity:.45':''}">${CODES[c.id]}</span><button class="btn-sec" ${c.joinOff?'disabled':''} onclick="copyCode()"><i data-lucide="copy" style="width:16px;height:16px"></i>${t('copy')}</button><button class="btn-sec" onclick="newCode()">${t('codeNew')}</button></div>
    <label class="tgl" style="margin-top:16px" onclick="toggleJoin()"><span class="tgl-track${c.joinOff?'':' on'}" style="${c.joinOff?'':'background:#416bff'}"><span class="tgl-knob" style="${c.joinOff?'':'left:20px'}"></span></span><span>${d('setJoin')}</span></label>
    <p class="hint" style="font-size:13px;color:#9ea3ad;margin:8px 0 0">${d('setJoinOff')}</p></div>
  <div class="box"><p class="box-t">${d('setArch')}</p><p class="box-d">${d('setArchD')}</p>
    <button class="btn-sec" onclick="archiveCourse()">${c.arch ? d('unarchBtn') : d('archBtn')}</button></div>
  <div class="box"><p class="box-t">${d('setDel')}</p><p class="box-d">${d('setDelD')}</p>
    <button class="btn-sec" style="color:#f2525f" ${evN?'disabled':''} onclick="deleteCourse()">${d('delBtn')}</button>${evN ? `<span class="st muted" style="margin-left:12px">${d('delBlocked')(evN)}</span>` : ''}</div>`;
}
function saveSettings(){ const c = cById(rosterId); const nm = document.getElementById('stName').value.trim(), sec = document.getElementById('stSec').value.trim(); if (nm){ c.ko = c.en = nm; } if (sec){ c.secKo = c.secEn = sec; } c.sem = document.getElementById('stSem').value; render(); toast(d('setSaved')); }
function newCode(){ CODES[rosterId] = genCode(); render(); toast(d('codeRenewed')); }
function toggleJoin(){ const c = cById(rosterId); c.joinOff = !c.joinOff; render(); }
function archiveCourse(){ const c = cById(rosterId); c.arch = !c.arch; if (c.arch){ go('home'); toast(d('archived')(cName(c))); } else { render(); toast(d('unarchived')(cName(c))); } }
function deleteCourse(){ const c = cById(rosterId); if (evOf(c.id).length) return; if (!confirm(d('delAsk')(cName(c)))) return; COURSES.splice(COURSES.indexOf(c),1); go('home'); toast(d('deleted')(cName(c))); }

function initUnm(){}
function initUnmOld(cid, eid){ const ev = evById(cid, eid); if (ev && ev.unmatched && !ev._unmSeen){ ev._unmSeen = true; unmatched = Array.from({length:ev.unmatched}, (_,k)=>({file: `scan_00${9+k*22}.pdf`})); } }
const DETAIL = ['course','new','eval','grade','newcourse','settings','split'];
const _go = go;
go = function(v, cid, eid, sid){
  if (v==='roster') showN = 10;
  if (v==='grade'){ const g = new URLSearchParams({id: sid||gradeSid||'', course: cid||rosterId, ev: String(eid||evalId)}); location.href = 'univ_grade_v1_261021.html?' + g.toString(); return; }
  if (DETAIL.includes(v)){
    if (v!=='eval' || +eid!==evalId || cid!==rosterId){ evFilter='all'; unmatched=[];
      if (v==='eval') initUnm(cid||rosterId, eid||evalId); }
    showN = 10; upMore = false; view = v; if (cid) rosterId = cid; if (eid) evalId = +eid; if (sid) gradeSid = sid;
    location.hash = v==='split' ? `split-${rosterId}-${evalId}` : v==='newcourse' ? 'newcourse' : v==='course' ? `course-${rosterId}` : v==='settings' ? `settings-${rosterId}` : v==='new' ? `new-${rosterId}` : v==='eval' ? `eval-${rosterId}-${evalId}` : `grade-${rosterId}-${evalId}-${gradeSid}`;
    render(); window.scrollTo(0,0); return;
  }
  _go(v, cid);
};
const _render = render;
render = function(){
  _render();
  const el = document.getElementById('v-detail');
  el.classList.toggle('on', DETAIL.includes(view));
  if (DETAIL.includes(view)){
    el.innerHTML = view==='pgrade' ? renderPGrade() : view==='fbmake' ? renderFbMake() : view==='cross' ? renderCross() : view==='final' ? renderFinal() : view==='rules' ? renderRules() : view==='tune' ? renderTune() : view==='files' ? renderFiles() : view==='split' ? renderSplit() : view==='course' ? renderCourse() : view==='new' ? renderNew() : view==='eval' ? renderEval() : view==='newcourse' ? renderNewCourse() : view==='settings' ? renderSettings() : renderGrade();
  }
  if (view==='home' && !(typeof IS_TA!=='undefined' && IS_TA)){
    const k = {rev:0, rel:0, ai:0};
    const fl = [];
    COURSES.filter(c=>c.sem==='s2' && !c.arch).forEach(c=>evOf(c.id).forEach(e=>{ const f = typeof flowActLabel==='function' ? flowActLabel(e) : null; if (f){ fl.push([e, f]); return; } const a = nextAct(e); if (k[a]!==undefined) k[a]++; }));
    const gp = document.querySelector('#v-home [data-t="greetP"]');
    if (gp) gp.textContent = (lang==='ko' ? `확인할 평가 ${k.rev}개, 공개할 평가 ${k.rel}개, AI 채점할 평가 ${k.ai}개가 있어요.` : `${k.rev} assessments to review, ${k.rel} to release and ${k.ai} to AI-score.`)
      + fl.map(([e,f])=> lang==='ko' ? ` 「${evName(e)}」 ${f} 차례예요.` : ` ${evName(e)}: ${f}.`).join('');
  }
  if (view==='roster'){ document.getElementById('rHead').innerHTML = courseHead(cById(rosterId),'roster'); }
  document.querySelectorAll('#sbCourses .sc').forEach((n,i)=>{ const c = COURSES.filter(x=>x.sem==='s2' && !x.arch)[i]; if (!c) return; n.setAttribute('onclick', `go('course','${c.id}')`); n.classList.toggle('on', rosterId===c.id && view!=='home' && view!=='newcourse'); });
  const mk = document.querySelector('#v-home .tools .btn-primary'); if (mk) mk.setAttribute('onclick', "go('newcourse')");
  const cn = document.querySelector('#v-roster [data-t="codeNew"]'); if (cn) cn.setAttribute('onclick', 'newCode()');
  lucide.createIcons();
};
document.addEventListener('click', ev=>{ const cc = ev.target.closest('.cc'); if (cc && view==='home' && !ev.target.closest('button')){ const name = cc.getAttribute('title'); const c = COURSES.find(x=>cName(x)===name); if (c){ ev.stopPropagation(); go('course', c.id); } } }, true);
{ let m;
  if ((m = location.hash.match(/grade-(c\d+)-(\d+)-(\d+)/))) { view='grade'; rosterId=m[1]; evalId=+m[2]; gradeSid=m[3]; }
  else if ((m = location.hash.match(/eval-(c\d+)-(\d+)/))) { view='eval'; rosterId=m[1]; evalId=+m[2]; initUnm(rosterId, evalId); }
  else if ((m = location.hash.match(/new-(c\d+)/))) { view='new'; rosterId=m[1]; }
  else if ((m = location.hash.match(/settings-(c\d+)/))) { view='settings'; rosterId=m[1]; }
  else if ((m = location.hash.match(/split-(c\d+)-(\d+)/))) { view='split'; rosterId=m[1]; evalId=+m[2]; }
  else if (location.hash.includes('newcourse')) { view='newcourse'; }
  else if ((m = location.hash.match(/course-(c\d+)/))) { view='course'; rosterId=m[1]; }
  render(); }
