/*! © 2026 LigeroNex. All rights reserved. Proprietary: no licence is granted to copy, modify or reuse this file. */
(function(){const d={id:"me",name:"Alex Rivera",init:"AR",role:"Platform Engineering",office:"London"},m=[{id:"sk",name:"Samira Khan",role:"Transformation Lead",office:"London",init:"SK",skills:["AI strategy","Change","Facilitation"],helps:["Change management"],mentors:!1,meet:!0,mutual:3,note:"In the London office Tue\u2013Thu"},{id:"jm",name:"James Morgan",role:"Principal Engineer, Cloud",office:"Manchester",init:"JM",skills:["AWS","Kubernetes","Terraform"],helps:["AWS","Kubernetes","Terraform"],mentors:!0,meet:!1,mutual:2,note:"Usually free Thursday afternoons"},{id:"nt",name:"Nadia Thomas",role:"Data & Analytics Manager",office:"Leeds",init:"NT",skills:["SQL","dbt","Analytics"],helps:["Data modelling","SQL"],mentors:!0,meet:!0,mutual:1,note:"Mentoring one person, room for one more"},{id:"do",name:"Daniel Obi",role:"Product Designer",office:"Remote",init:"DO",skills:["Design systems","Research"],helps:["Design critique"],mentors:!1,meet:!0,mutual:2,note:"Hosts a fortnightly virtual coffee"},{id:"pn",name:"Priya Nair",role:"Security Engineer",office:"London",init:"PN",skills:["IAM","Network policy","Threat modelling"],helps:["IAM","Security review"],mentors:!1,meet:!1,mutual:4,note:"Runs the secure-by-default clinic"},{id:"cd",name:"Chris Dale",role:"Site Reliability Engineer",office:"Manchester",init:"CD",skills:["Observability","Incident response"],helps:["Kubernetes","On-call"],mentors:!1,meet:!1,mutual:1,note:"Happy to pair on incident reviews"},{id:"ao",name:"Amara Osei",role:"Principal Engineer, AI",office:"Remote",init:"AO",skills:["Machine learning","Evaluation","Python"],helps:["Applied AI"],mentors:!0,meet:!1,mutual:2,note:"Mentors two engineers, capacity for one"},{id:"tr",name:"Tom Reyes",role:"Customer Success Manager",office:"London",init:"TR",skills:["Onboarding","Accounts"],helps:["Customer context"],mentors:!1,meet:!0,mutual:1,note:"New to the London office this month"},{id:"ep",name:"Elena Petrova",role:"VP Strategy",office:"London",init:"EP",skills:["Portfolio","Investment cases"],helps:["Business cases"],mentors:!0,meet:!1,mutual:5,note:"Sponsors two internal ventures"},{id:"mw",name:"Marcus Webb",role:"Finance Business Partner",office:"Birmingham",init:"MW",skills:["Modelling","Cost management"],helps:["Cost modelling"],mentors:!1,meet:!1,mutual:0,note:"Supports the platform cost review"},{id:"aa",name:"Aisha Rahman",role:"People Partner",office:"London",init:"AR",skills:["Onboarding","Career","Wellbeing"],helps:["Career conversations"],mentors:!0,meet:!0,mutual:3,note:"Runs the new-joiner programme"},{id:"rs",name:"Ravi Shah",role:"Engineering Manager",office:"Leeds",init:"RS",skills:["Delivery","Coaching","Hiring"],helps:["Delivery planning"],mentors:!0,meet:!1,mutual:2,note:"Coaches first-time managers"}],S=new Set(["me","sk","jm","pn","tr","aa","do"]),D=[{id:"coffee",emoji:"\u2615",name:"Cross-Team Coffee Circle",members:12,cadence:"Every two weeks",next:"Thu 15:00",blurb:"A random coffee across teams and offices.",near:3,c:["#ff6b57","#ffa94d"],people:["sk","do","tr"]},{id:"joiners",emoji:"\u{1F44B}",name:"New Joiners \xB7 London",members:23,cadence:"Weekly",next:"Mon 12:30",blurb:"For everyone in their first year.",near:6,c:["#1687ff","#45d8ff"],people:["tr","aa","sk"]},{id:"data",emoji:"\u{1F4CA}",name:"Data Guild",members:31,cadence:"Monthly",next:"Wed 16:00",blurb:"Open show-and-tell on data and analytics.",near:4,c:["#7c5cff","#b27bff"],people:["nt","ao","rs"]},{id:"green",emoji:"\u{1F331}",name:"Green Tech Network",members:18,cadence:"Monthly",next:"Fri 13:00",blurb:"Sustainability in how we build and run.",near:2,c:["#0fb99f","#46dd98"],people:["mw","ep","cd"]}],N=["Kubernetes","IAM","Terraform","Data modelling","Applied AI","Cost modelling"],W=["Platform delivery","CI/CD","Code review"],I={Home:{c1:"#0e6bff",c2:"#45d8ff",icon:"hexnet"},"Find people":{c1:"#2f6bff",c2:"#7a9bff",icon:"search"},Meet:{c1:"#ff6b57",c2:"#ffa94d",icon:"meet"},Help:{c1:"#1687ff",c2:"#45d8ff",icon:"help"},Learn:{c1:"#7c5cff",c2:"#b27bff",icon:"learn"},Belong:{c1:"#0fb99f",c2:"#46dd98",icon:"belong"},"My network":{c1:"#f2508b",c2:"#ff8fb1",icon:"teams"},Profile:{c1:"#4f46e5",c2:"#8b8cff",icon:"profile"}},U={meet:"Meet",help:"Help",mentor:"Learn"},T=[["#ff6b57","#ffa94d"],["#7c5cff","#b27bff"],["#1687ff","#45d8ff"],["#0fb99f","#46dd98"],["#f2508b","#ff8fb1"],["#f59e0b","#fcd34d"],["#4f46e5","#8b8cff"],["#0891b2","#5eead4"]],r={screen:"Home",query:"",intent:"all",helpTopic:"Kubernetes",requests:{},joined:new Set(["coffee"]),dismissed:new Set,opts:{Meet:!0,Help:!0,Learn:!1,Belong:!0},topics:W.slice(),drawer:null,toast:"",focus:null},n=t=>String(t).replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]),v=t=>`<svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${t}"></use></svg>`,E=t=>m.find(s=>s.id===t),A=()=>Object.keys(r.requests).length,o=t=>{const s=I[t]||I.Home;return`--c1:${s.c1};--c2:${s.c2}`};function K(t){let s=7;for(const x of t)s=s*31+x.charCodeAt(0)>>>0;const p=T[s%T.length];return`linear-gradient(135deg,${p[0]},${p[1]})`}function M(t,s){return`<span class="hc-av ${s||""}" style="background:${K(t.id)}">${n(t.init)}${S.has(t.id)?'<i class="hc-online" title="Available"></i>':""}</span>`}function $(t,s){return`<span class="hc-ico ${s||""}" style="${o(t)}">${v((I[t]||I.Home).icon)}</span>`}function O(t,s){return`<span class="hc-ring ${s||""}" style="--p:${t}" title="${t}% match"><b>${t}<small>%</small></b></span>`}function q(t,s,p,x){return`<button type="button" class="hc-btn ${x||""}" style="${o(p)}" data-act="${s}">${t}</button>`}function u(t,s){let p=58+t.mutual*3;const x=(t.skills.join(" ")+" "+t.helps.join(" ")+" "+t.role).toLowerCase();return s.forEach(j=>{j&&x.includes(j)&&(p+=14)}),t.office===d.office&&(p+=6),Math.min(97,p)}function h(t,s){const p=[],x=t.helps.find(F=>s.some(G=>G&&F.toLowerCase().includes(G)));x&&p.push(`Opted in to help with <b>${n(x)}</b>`);const j=t.skills.find(F=>s.some(G=>G&&F.toLowerCase().includes(G)));return j&&!x&&p.push(`Works with <b>${n(j)}</b>`),t.office===d.office&&p.push(`Also based in ${n(t.office)}`),t.mutual&&p.push(`${t.mutual} shared connection${t.mutual>1?"s":""}`),p.push(n(t.note)),p.slice(0,4)}function b(t,s,p){const x=s.toLowerCase().split(/[\s,]+/).filter(Boolean);return t.filter(j=>!r.dismissed.has(j.id)).filter(j=>!p||p(j)).filter(j=>{if(!x.length)return!0;const F=(j.name+" "+j.role+" "+j.office+" "+j.skills.join(" ")+" "+j.helps.join(" ")+(j.mentors?" mentor":"")).toLowerCase();return x.every(G=>F.includes(G))}).map(j=>({p:j,s:u(j,x)})).sort((j,F)=>F.s-j.s)}function y(t){return t==="help"?"Help requested":t==="mentor"?"Mentoring requested":"Invite sent"}function g(t,s){return`<span class="hc-done ${s||""}" style="${o(U[t])}">${v("check")}${y(t)}</span>`}function w(t){return`
      <div class="hc-topbar">
        <label class="hc-searchbar">
          ${v("search")}
          <input id="hcSearch" type="text" value="${n(r.query)}" placeholder="${n(t||"Search people, skills, teams or offices")}" autocomplete="off" aria-label="Search people">
        </label>
        <button type="button" class="hc-bell" data-act="screen:My network" aria-label="Requests (${A()})" title="Your requests">
          ${v("bell")}${A()?`<i class="hc-badge">${A()}</i>`:""}
        </button>
        <button type="button" class="hc-me" data-act="screen:Profile" title="Your profile">
          ${M(d,"sm")}
          <span class="hc-me-txt"><b>${n(d.name)}</b><small>${n(d.role)}</small></span>
        </button>
      </div>`}function k(t,s,p,x,j){return`
      <div class="hc-head">
        <div class="hc-head-l">${$(t,"lg")}<div><small>${n(s)}</small><h4>${p}</h4><p>${x}</p></div></div>
        ${j||""}
      </div>`}function R(t,s){const{p,s:x}=t,j=r.requests[p.id],F=s==="help"?"Ask":s==="mentor"?"Request":"Connect";return`
      <div class="hc-row" data-act="open:${p.id}" role="button" tabindex="0">
        ${M(p)}
        <div class="hc-row-main">
          <div class="hc-row-top"><b>${n(p.name)}</b>${p.mentors?'<span class="hc-flag" style="'+o("Learn")+'">Mentor</span>':""}${p.meet?'<span class="hc-flag" style="'+o("Meet")+'">Open to meet</span>':""}</div>
          <small>${n(p.role)} \xB7 ${n(p.office)}</small>
          <div class="hc-chips">${p.skills.slice(0,3).map(G=>`<span class="hc-chip">${n(G)}</span>`).join("")}</div>
        </div>
        <div class="hc-row-end">
          ${O(x)}
          ${j?g(j):q(F,`${s}:${p.id}`,U[s],"sm")}
        </div>
      </div>`}function B(t){return`<div class="hc-empty">${v("search")}<p>${n(t)}</p></div>`}function V(t,s){return`<div class="hc-banner">${v("shield")}<span>${n(t)}</span>${s?`<button type="button" class="hc-link" data-act="screen:${s}">Open ${s} \u2192</button>`:""}</div>`}function J(){const t=b(m,"",C=>C.meet),s={Meet:t[0],Help:b(m,r.helpTopic.toLowerCase(),C=>C.helps.length)[0],Learn:b(m,"",C=>C.mentors)[0]},p=D.find(C=>!r.joined.has(C.id))||D[0],x=D.find(C=>r.joined.has(C.id)),j=[{id:"tr",t:"<b>Tom Reyes</b> accepted your coffee invite",w:"Yesterday",i:"Meet"},{id:"pn",t:"<b>Priya Nair</b> answered in the secure-by-default clinic",w:"2 days ago",i:"Help"},{id:"nt",t:"<b>Nadia Thomas</b> shared a Data Guild show-and-tell",w:"Last week",i:"Belong"}],F=(C,ne)=>`<button type="button" class="hc-qchip" style="${o(C)}" data-act="screen:${C}">${v(I[C].icon)}<span>${ne}</span></button>`,G=(C,ne,ie,oe)=>`
      <div class="hc-tile" style="${o(C)}" data-act="screen:${C}" role="button" tabindex="0">
        <div class="hc-tile-top">${$(C)}<span class="hc-tile-badge">${ie}</span></div>
        <h5>${C}</h5>
        <p>${ne}</p>
        ${oe}
        <em class="hc-go">Open ${C} \u2192</em>
      </div>`,ae=C=>C?`<div class="hc-mini">${M(C.p,"xs")}<div><b>${n(C.p.name)}</b><small>${n(C.p.role)}</small></div>${O(C.s,"xs")}</div>`:"";return`
      ${w()}
      <div class="hc-head">
        <div class="hc-head-l"><div><small>PERSONAL WORKSPACE</small><h4>Good morning, Alex <span class="hc-wave">\u{1F44B}</span></h4><p>People and conversations that could be useful to you today.</p></div></div>
        <button type="button" class="hc-btn" style="${o("Find people")}" data-act="screen:Find people">${v("sparkle")}Find someone</button>
      </div>
      <div class="hc-qchips">
        ${F("Meet",`<b>${t.length}</b> new matches this week`)}
        ${F("My network",A()?`<b>${A()}</b> pending request${A()>1?"s":""}`:"No pending requests")}
        ${x?F("Belong",`${n(x.name)} \xB7 <b>${n(x.next)}</b>`):F("Belong","Find a community")}
      </div>
      <div class="hc-grid4">
        ${G("Meet","Someone worth knowing",`${t.length} matches`,ae(s.Meet))}
        ${G("Help",`Expertise in ${n(r.helpTopic)}`,"Opted-in experts",ae(s.Help))}
        ${G("Learn","A mentor with capacity",r.opts.Learn?"You mentor too":"Mentors",ae(s.Learn))}
        ${G("Belong","A circle beyond your team",`${D.length} communities`,`<div class="hc-mini"><span class="hc-av xs hc-emoji" style="background:linear-gradient(135deg,${p.c[0]},${p.c[1]})">${p.emoji}</span><div><b>${n(p.name)}</b><small>${p.members} members \xB7 ${n(p.cadence)}</small></div></div>`)}
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Recent activity</b><span class="hc-tag">Illustrative</span></div>
          ${j.map(C=>`<div class="hc-feed" data-act="open:${C.id}" role="button" tabindex="0">${M(E(C.id),"sm")}<span class="hc-feed-text">${C.t}</span><small>${n(C.w)}</small></div>`).join("")}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Your visibility</b><button type="button" class="hc-link" data-act="screen:Profile">Edit \u2192</button></div>
          ${Object.keys(r.opts).map(C=>`<div class="hc-vis" data-act="screen:Profile" role="button" tabindex="0">${$(C,"xs")}<span class="hc-vis-label">${C}</span><b class="${r.opts[C]?"on":"off"}">${r.opts[C]?"Discoverable":"Hidden"}</b></div>`).join("")}
        </div>
      </div>`}function z(){const t={all:()=>!0,meet:x=>x.meet,help:x=>x.helps.length>0,learn:x=>x.mentors},s=b(m,r.query,t[r.intent]),p=(x,j,F)=>`<button type="button" class="hc-filter ${r.intent===x?"on":""}" style="${o(F)}" data-act="intent:${x}">${F!=="Find people"?"<i></i>":""}${j}</button>`;return`
      ${w("Try \u201Ckubernetes\u201D, \u201CLondon\u201D or \u201Cmentor\u201D")}
      ${k("Find people","FIND PEOPLE","What do you need today?","Search by skill, team or office \u2014 or filter by what you need. Every result explains itself.")}
      <div class="hc-filters">
        ${p("all","Everyone","Find people")}${p("meet","Open to meet","Meet")}${p("help","Offers help","Help")}${p("learn","Mentors","Learn")}
        <span class="hc-count">${s.length} ${s.length===1?"person":"people"}</span>
      </div>
      <div class="hc-list">
        ${s.length?s.map(x=>R(x,"meet")).join(""):B("No colleagues match that yet. Try a different skill or office.")}
      </div>`}function Q(){const t=b(m,"",s=>s.meet).slice(0,4);return`
      ${w()}
      ${k("Meet","MEET","People worth knowing.","Built from interests, role and intent \u2014 never from private messages or calendars.")}
      ${r.opts.Meet?"":V("You are hidden from Meet suggestions. Others will not see you here.","Profile")}
      <div class="hc-grid2">
        ${t.map(({p:s,s:p})=>`
          <div class="hc-card" style="${o("Meet")}">
            <div class="hc-card-top">${M(s,"lg")}<div class="hc-card-id"><b>${n(s.name)}</b><small>${n(s.role)} \xB7 ${n(s.office)}</small></div>${O(p)}</div>
            <div class="hc-why-label">Why this person?</div>
            <ul class="hc-why">${h(s,[]).map(x=>`<li>${x}</li>`).join("")}</ul>
            <div class="hc-actions">
              ${r.requests[s.id]?g(r.requests[s.id],"big"):`${q("Say hello",`meet:${s.id}`,"Meet")}<button type="button" class="hc-btn ghost" data-act="skip:${s.id}">Not now</button><button type="button" class="hc-link" data-act="open:${s.id}">Profile \u2192</button>`}
            </div>
          </div>`).join("")||B("You have responded to every suggestion. New ones arrive weekly.")}
      </div>
      <p class="hc-note">A suggestion is never a connection \u2014 both sides choose.</p>`}function X(){const t=b(m,r.helpTopic.toLowerCase(),p=>p.helps.length>0).slice(0,4),s=t[0];return`
      ${w()}
      ${k("Help","HELP","Find the right expertise.","Only colleagues who opted in to help with a topic appear here.")}
      <div class="hc-filters">
        ${N.map(p=>`<button type="button" class="hc-filter ${r.helpTopic===p?"on":""}" style="${o("Help")}" data-act="topic:${n(p)}">${n(p)}</button>`).join("")}
      </div>
      ${s?`
        <div class="hc-card feature" style="${o("Help")}">
          <div class="hc-card-top">${M(s.p,"lg")}<div class="hc-card-id"><span class="hc-best">Best match</span><b>${n(s.p.name)}</b><small>${n(s.p.role)} \xB7 ${n(s.p.office)}</small></div>${O(s.s,"lg")}</div>
          <div class="hc-why-label">Why this person?</div>
          <ul class="hc-why">${h(s.p,[r.helpTopic.toLowerCase()]).map(p=>`<li>${p}</li>`).join("")}</ul>
          <div class="hc-actions">
            ${r.requests[s.p.id]?g(r.requests[s.p.id],"big"):`${q("Ask for help",`help:${s.p.id}`,"Help")}<button type="button" class="hc-btn ghost" data-act="open:${s.p.id}">View profile</button>`}
          </div>
        </div>`:B("Nobody has opted in to help with that topic yet.")}
      ${t.length>1?`<div class="hc-panel-head sep"><b>Others who can help</b><span class="hc-tag">${t.length-1}</span></div>
        <div class="hc-list">${t.slice(1).map(p=>R(p,"help")).join("")}</div>`:""}`}function Z(){const t=b(m,r.query,s=>s.mentors);return`
      ${w("Search mentors by skill")}
      ${k("Learn","LEARN","People who can teach you.","Mentors choose their topics and how much capacity they have.")}
      ${r.opts.Learn?"":V("You are not discoverable as a mentor. Turn on Learn in your profile to appear here for others.","Profile")}
      <div class="hc-list">${t.length?t.map(s=>R(s,"mentor")).join(""):B("No mentors match that skill yet.")}</div>`}function ee(){return`
      ${w()}
      ${k("Belong","BELONG","Find where you fit.","Communities and circles beyond your immediate team.")}
      <div class="hc-grid2">
        ${D.map(t=>{const s=r.joined.has(t.id);return`<div class="hc-card hc-comm" style="--c1:${t.c[0]};--c2:${t.c[1]}">
            <div class="hc-comm-band"><span class="hc-comm-emoji">${t.emoji}</span>${s?`<span class="hc-comm-joined">${v("check")}Joined</span>`:""}</div>
            <b class="hc-comm-name">${n(t.name)}</b>
            <p class="hc-blurb">${n(t.blurb)}</p>
            <div class="hc-comm-meta">
              <span class="hc-stack">${t.people.map(p=>M(E(p),"xs")).join("")}</span>
              <small>${t.members} members \xB7 ${t.near} near you</small>
            </div>
            <div class="hc-chips"><span class="hc-chip">${v("calendar")}${n(t.cadence)}</span><span class="hc-chip">Next: ${n(t.next)}</span></div>
            <div class="hc-actions">
              ${s?`<button type="button" class="hc-btn ghost" data-act="join:${t.id}">Leave</button>`:`<button type="button" class="hc-btn" style="--c1:${t.c[0]};--c2:${t.c[1]}" data-act="join:${t.id}">Join community</button>`}
            </div>
          </div>`}).join("")}
      </div>`}function c(){const t=Object.keys(r.requests).map(s=>({p:E(s),kind:r.requests[s]}));return`
      ${w()}
      ${k("My network","MY NETWORK","Connections and requests.","Everything you start from Meet, Help or Learn lands here.")}
      ${t.length?`<div class="hc-list">${t.map(({p:s,kind:p})=>`
        <div class="hc-row" data-act="open:${s.id}" role="button" tabindex="0">
          ${M(s)}
          <div class="hc-row-main"><div class="hc-row-top"><b>${n(s.name)}</b></div><small>${n(s.role)} \xB7 ${n(s.office)}</small></div>
          <div class="hc-row-end">${g(p)}<button type="button" class="hc-btn sm ghost" data-act="cancel:${s.id}">Withdraw</button></div>
        </div>`).join("")}</div>`:`<div class="hc-empty">${v("teams")}<p>Nothing yet. Say hello in <b>Meet</b>, ask in <b>Help</b> or request a mentor in <b>Learn</b> and it shows up here.</p><button type="button" class="hc-btn sm" style="${o("Meet")}" data-act="screen:Meet">Go to Meet</button></div>`}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Communities</b><span class="hc-tag">${r.joined.size} joined</span></div>
          ${r.joined.size?[...r.joined].map(s=>{const p=D.find(x=>x.id===s);return`<div class="hc-vis" data-act="screen:Belong" role="button" tabindex="0"><span class="hc-av xs hc-emoji" style="background:linear-gradient(135deg,${p.c[0]},${p.c[1]})">${p.emoji}</span><span class="hc-vis-label">${n(p.name)}</span><b class="on">${n(p.next)}</b></div>`}).join(""):'<p class="hc-note">You have not joined a community yet.</p>'}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>What your employer sees</b><span class="hc-tag">Aggregate only</span></div>
          <p class="hc-note">Participation trends across the organisation \u2014 never who you connected with, or why you asked for help.</p>
        </div>
      </div>`}function e(){const t={Meet:"Coffee and introductions",Help:"Answer questions in your topics",Learn:"Be found as a mentor",Belong:"Community matching"};return`
      ${w()}
      <div class="hc-profile-hero">
        ${M(d,"xl")}
        <div><b>${n(d.name)}</b><small>${n(d.role)} \xB7 ${n(d.office)}</small><span class="hc-status"><i></i>Available this week</span></div>
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Topics I can help with</b><span class="hc-tag">${r.topics.length}</span></div>
          <div class="hc-chips big">
            ${r.topics.map(s=>`<button type="button" class="hc-chip removable" data-act="untopic:${n(s)}" title="Remove ${n(s)}">${n(s)}<i>\xD7</i></button>`).join("")}
            <button type="button" class="hc-chip add" data-act="addtopic">+ Add topic</button>
          </div>
          <p class="hc-note">Colleagues only find you for topics you add here.</p>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Open to</b><span class="hc-tag">Your choice</span></div>
          ${Object.keys(r.opts).map(s=>`
            <div class="hc-toggle-row">
              ${$(s,"xs")}
              <div><b>${s}</b><small>${t[s]}</small></div>
              <button type="button" class="hc-toggle ${r.opts[s]?"on":""}" style="${o(s)}" data-act="opt:${s}" role="switch" aria-checked="${r.opts[s]}" aria-label="${s}"></button>
            </div>`).join("")}
        </div>
      </div>`}function a(){const t=E(r.drawer);if(!t)return"";const s=r.requests[t.id],p=u(t,[r.query.toLowerCase(),r.helpTopic.toLowerCase()].filter(Boolean));return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${n(t.name)}">
        <div class="hc-drawer-band" style="background:${K(t.id)}"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${M(t,"xl")}${O(p,"lg")}</div>
        <div class="hc-drawer-id"><b>${n(t.name)}</b><small>${n(t.role)} \xB7 ${n(t.office)}${S.has(t.id)?' \xB7 <span class="hc-avail">Available</span>':""}</small></div>
        <div class="hc-why-label">Why you are matched</div>
        <ul class="hc-why">${h(t,[r.query.toLowerCase(),r.helpTopic.toLowerCase()]).map(x=>`<li>${x}</li>`).join("")}</ul>
        <div class="hc-why-label">Opted in to help with</div>
        <div class="hc-chips">${t.helps.map(x=>`<span class="hc-chip strong">${n(x)}</span>`).join("")||'<span class="hc-chip">Not offering help right now</span>'}</div>
        <div class="hc-why-label">Skills</div>
        <div class="hc-chips">${t.skills.map(x=>`<span class="hc-chip">${n(x)}</span>`).join("")}</div>
        <div class="hc-drawer-actions">
          ${s?`${g(s,"big")}<button type="button" class="hc-btn ghost" data-act="cancel:${t.id}">Withdraw</button>`:`${t.meet?q("Say hello",`meet:${t.id}`,"Meet"):""}
                   ${t.helps.length?q("Ask for help",`help:${t.id}`,"Help"):""}
                   ${t.mentors?q("Request mentoring",`mentor:${t.id}`,"Learn"):""}`}
        </div>
        <p class="hc-note">${n(t.name.split(" ")[0])} chooses whether to accept. Nothing is shared until they do.</p>
      </aside>`}const i={Home:J,"Find people":z,Meet:Q,Help:X,Learn:Z,Belong:ee,"My network":c,Profile:e};let l=null;function f(){const t=l&&l.closest(".exp-window");if(!t)return;const s=t.querySelector('.exp-side-nav [data-screen="My network"] .side-badge');s&&(s.textContent=A(),s.hidden=!A())}function H(){if(!l)return;const t=i[r.screen]||J;l.innerHTML=`<div class="hc-app">${t()}${a()}${r.toast?`<div class="hc-toast">${v("check")}${n(r.toast)}</div>`:""}</div>`;const s=l.querySelector("#hcSearch");s&&r.focus==="search"&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length)),f()}function P(t){r.toast=t,clearTimeout(P._t),P._t=setTimeout(()=>{r.toast="",H()},2600)}function _(t){r.screen=t,r.drawer=null,r.focus=null,window.HiveConnect.onScreen&&window.HiveConnect.onScreen(t)}function Y(t,s){switch(t){case"screen":_(s);break;case"open":r.drawer=s;break;case"close":r.drawer=null;break;case"intent":r.intent=s;break;case"topic":r.helpTopic=s;break;case"meet":case"help":case"mentor":{r.requests[s]=t,r.drawer=null,P(`${y(t)} to ${E(s).name}. They choose whether to accept.`);break}case"cancel":delete r.requests[s],P("Request withdrawn.");break;case"skip":r.dismissed.add(s);break;case"join":{r.joined.has(s)?(r.joined.delete(s),P("You left the community.")):(r.joined.add(s),P("You joined the community."));break}case"opt":r.opts[s]=!r.opts[s],P(`${s} ${r.opts[s]?"on \u2014 colleagues can find you":"off \u2014 you are hidden"}.`);break;case"untopic":r.topics=r.topics.filter(p=>p!==s);break;case"addtopic":{const p=N.find(x=>!r.topics.includes(x));p?(r.topics.push(p),P(`Added \u201C${p}\u201D. Colleagues can now find you for it.`)):P("You have added every topic available in this demo.");break}default:return!1}return!0}function te(t){const s=t.target.closest("[data-act]");if(!s||!l.contains(s))return;const[p,...x]=s.dataset.act.split(":");t.preventDefault(),t.stopPropagation(),Y(p,x.join(":"))&&H()}function se(t){t.target.id==="hcSearch"&&(r.query=t.target.value,r.screen!=="Find people"&&r.screen!=="Learn"&&r.query.trim()&&_("Find people"),r.focus="search",H())}function L(t){if(t.key==="Escape"&&r.drawer){r.drawer=null,H();return}if(t.key!=="Enter"&&t.key!==" ")return;const s=t.target.closest&&t.target.closest("[data-act]");!s||s.tagName==="BUTTON"||(t.preventDefault(),s.click())}window.HiveConnect={side:["Home","Find people","Meet","Help","Learn","Belong","My network","Profile"],icons:Object.fromEntries(Object.entries(I).map(([t,s])=>[t,s.icon])),colors:Object.fromEntries(Object.entries(I).map(([t,s])=>[t,s.c1])),start:"Home",badge:()=>A(),render(t,s){l=s,r.screen=t,r.drawer=null,l.dataset.bound||(l.dataset.bound="1",l.addEventListener("click",te,!0),l.addEventListener("input",se),l.addEventListener("keydown",L)),H()}}})(),(function(){const d=[["#ff6b57","#ffa94d"],["#7c5cff","#b27bff"],["#1687ff","#45d8ff"],["#0fb99f","#46dd98"],["#f2508b","#ff8fb1"],["#f59e0b","#fcd34d"],["#4f46e5","#8b8cff"],["#0891b2","#5eead4"]],m=n=>String(n??"").replace(/[&<>"]/g,v=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[v]),S=n=>`<svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${n}"></use></svg>`,D=(n,v)=>`--c1:${n};--c2:${v}`;function N(n){let v=7;for(const A of String(n))v=v*31+A.charCodeAt(0)>>>0;const E=d[v%d.length];return`linear-gradient(135deg,${E[0]},${E[1]})`}const W=(n,v)=>`<span class="hc-av ${v||""}" style="background:${N(n.id)}">${m(n.init)}</span>`,I=(n,v,E,A)=>`<span class="hc-ico ${A||""}" style="${D(v,E)}">${S(n)}</span>`,U=(n,v,E)=>`<span class="hc-ring ${v||""}" style="--p:${n}" title="${m(E||n+"%")}"><b>${n}<small>%</small></b></span>`,T=(n,v,E)=>`<span class="hx-bar"><i style="width:${Math.max(0,Math.min(100,n))}%;${D(v,E)}"></i></span>`;function r(n){const v=n.state;let E=null,A=null;const o={side:n.side,icons:Object.fromEntries(n.side.map(g=>[g,n.screens[g].icon])),colors:Object.fromEntries(n.side.map(g=>[g,n.screens[g].c1])),start:n.start,onScreen:null,render(g,w){E=w,v.screen=g,v.drawer=null,E.dataset.bound||(E.dataset.bound="1",E.addEventListener("click",h,!0),E.addEventListener("input",b),E.addEventListener("change",b),E.addEventListener("keydown",y)),O()}},K=g=>n.screens[g]||n.screens[n.start];function M(g){const w=n.badge?n.badge():0;return`
        <div class="hc-topbar">
          <label class="hc-searchbar">${S("search")}
            <input id="hcSearch" type="text" value="${m(v.query)}" placeholder="${m(g||n.searchPlaceholder)}" autocomplete="off" aria-label="Search">
          </label>
          <button type="button" class="hc-bell" data-act="screen:${n.bellScreen}" aria-label="${m(n.bellLabel)} (${w})" title="${m(n.bellLabel)}">
            ${S("bell")}${w?`<i class="hc-badge">${w}</i>`:""}
          </button>
          <span class="hc-me">${W(n.me,"sm")}<span class="hc-me-txt"><b>${m(n.me.name)}</b><small>${m(n.me.role)}</small></span></span>
        </div>`}function $(g,w,k,R,B){const V=K(g);return`
        <div class="hc-head">
          <div class="hc-head-l">${I(V.icon,V.c1,V.c2,"lg")}<div><small>${m(w)}</small><h4>${k}</h4><p>${R}</p></div></div>
          ${B||""}
        </div>`}function O(){if(!E)return;const g=K(v.screen);E.innerHTML=`<div class="hc-app">${g.render()}${v.drawer?n.drawer():""}${v.toast?`<div class="hc-toast">${S("check")}${m(v.toast)}</div>`:""}</div>`;const w=E.querySelector("#hcSearch");w&&v.focus==="search"&&(w.focus(),w.setSelectionRange(w.value.length,w.value.length));const k=E.closest(".exp-window");if(k&&n.sideBadge){const[R,B]=n.sideBadge(),V=k.querySelector(`.exp-side-nav [data-screen="${R}"] .side-badge`);V&&(V.textContent=B,V.hidden=!B)}}function q(g){v.toast=g,clearTimeout(A),A=setTimeout(()=>{v.toast="",O()},2600)}function u(g){v.screen=g,v.drawer=null,v.focus=null,o.onScreen&&o.onScreen(g)}function h(g){const w=g.target.closest("[data-act]");if(!w||!E.contains(w))return;const[k,...R]=w.dataset.act.split(":"),B=R.join(":");if(g.preventDefault(),g.stopPropagation(),k==="screen")u(B);else if(k==="close")v.drawer=null;else if(!n.act(k,B))return;O()}function b(g){if(g.target.id==="hcSearch"){if(g.type!=="input")return;v.query=g.target.value,!n.searchScreens.includes(v.screen)&&v.query.trim()&&u(n.searchScreens[0]),v.focus="search",O();return}g.target.dataset.field&&(v.form[g.target.dataset.field]=g.target.value)}function y(g){if(g.key==="Escape"&&v.drawer){v.drawer=null,O();return}if(g.key!=="Enter"&&g.key!==" ")return;const w=g.target.closest&&g.target.closest("[data-act]");!w||w.tagName==="BUTTON"||w.tagName==="INPUT"||w.tagName==="SELECT"||w.tagName==="TEXTAREA"||(g.preventDefault(),w.click())}return{api:o,topbar:M,head:$,go:u,toast:q,paint:O,theme:K}}window.HiveUI={esc:m,icon:S,tint:D,grad:N,avatar:W,tile:I,ring:U,bar:T,createApp:r}})(),(function(){const{esc:d,icon:m,tint:S,avatar:D,tile:N,bar:W,createApp:I}=window.HiveUI,U={id:"sc",name:"Sam Carter",init:"SC",role:"Head of Operational Resilience"},T={Critical:4,High:3,Medium:2,Low:1},r={High:2,Elevated:1,Low:0},n={Critical:"#e5484d",Urgent:"#e5484d",High:"#f76b15",Elevated:"#f59e0b",Medium:"#f5a524",Low:"#30a46c"},v={new:"New",review:"Under review",action:"Action planned",resolved:"Resolved"},E=[{id:"s1",title:"Payments service has a single owner",area:"Payments",theme:"Dependency",impact:"Critical",people:"Elevated",confidence:"High",trend:"up",fresh:"2h ago",sources:["Service catalogue","On-call rota","HRIS \xB7 team aggregate"],evidence:["One named owner and no trained backup for the card-payments service","The owner is on call three weeks in four","Team engagement trending down for two quarters (team aggregate)"],action:"Nominate and train a secondary owner for card payments",status:"new"},{id:"s2",title:"Kubernetes platform knowledge sits with two engineers",area:"Platform Engineering",theme:"Knowledge",impact:"High",people:"Low",confidence:"Medium",trend:"flat",fresh:"1d ago",sources:["Skills inventory","Incident history"],evidence:["Two of fourteen engineers resolved 80% of cluster incidents this year","The cluster runbook was last updated eleven months ago"],action:"Pair-rotate cluster on-call and refresh the runbook",status:"review"},{id:"s3",title:"Identity platform has no documented successor",area:"Security",theme:"Continuity",impact:"High",people:"Low",confidence:"High",trend:"flat",fresh:"3d ago",sources:["Succession plan","Service catalogue","Hiring data"],evidence:["The succession plan names no ready-now successor for the role","Typical replacement lead time for the role is about five months"],action:"Name a ready-later successor and start a shadowing plan",status:"new"},{id:"s4",title:"Q4 migration depends on two contractors",area:"Platform Engineering",theme:"Dependency",impact:"High",people:"Low",confidence:"Medium",trend:"up",fresh:"5h ago",sources:["Project tracker","Contract register"],evidence:["Two contractors own six of nine migration milestones","Both contracts end before the migration is due to finish"],action:"Move milestone ownership to permanent staff",status:"new"},{id:"s5",title:"Data pipeline runbook coverage at 40%",area:"Data & Analytics",theme:"Continuity",impact:"Medium",people:"Low",confidence:"High",trend:"down",fresh:"1d ago",sources:["Runbook registry","Incident history"],evidence:["Four of ten critical pipelines have a runbook","Two uncovered pipelines failed last quarter"],action:"Write runbooks for the six uncovered pipelines",status:"action"},{id:"s6",title:"Customer onboarding delivery is slipping",area:"Customer Success",theme:"Delivery",impact:"Medium",people:"Elevated",confidence:"Medium",trend:"up",fresh:"6h ago",sources:["Project tracker","HRIS \xB7 team aggregate"],evidence:["Onboarding projects are three weeks behind plan","Team turnover is above the organisation average (aggregate)"],action:"Rebalance the onboarding backlog across two teams",status:"review"},{id:"s7",title:"Month-end close relies on one spreadsheet model",area:"Finance Operations",theme:"Knowledge",impact:"Medium",people:"Low",confidence:"High",trend:"flat",fresh:"4d ago",sources:["Process inventory"],evidence:["A single model with no version control drives the close","Only one analyst has documented how it works"],action:"Move the model into the finance platform with peer review",status:"new"},{id:"s8",title:"Security review queue is growing",area:"Security",theme:"Capacity",impact:"Low",people:"Low",confidence:"Medium",trend:"up",fresh:"2d ago",sources:["Ticketing system"],evidence:["The review queue grew 35% this quarter","Median wait for a review is nine days"],action:"Add a rotating review champion in each product team",status:"resolved"}],A={Dependency:{icon:"teams",c1:"#e5484d",c2:"#ff8a8a",blurb:"Single owners and critical reliance"},Knowledge:{icon:"idea",c1:"#7c5cff",c2:"#b27bff",blurb:"Know-how held by too few people"},Continuity:{icon:"shield",c1:"#1687ff",c2:"#45d8ff",blurb:"Succession, runbooks and backups"},Delivery:{icon:"trend",c1:"#f59e0b",c2:"#fcd34d",blurb:"Projects drifting from plan"},Capacity:{icon:"layers",c1:"#0fb99f",c2:"#46dd98",blurb:"Queues and load building up"}},o=["Payments","Platform Engineering","Data & Analytics","Customer Success","Security","Finance Operations"],K=["Opened","Evidence","Mitigation","Closed"],M={planned:"Planned",progress:"In progress",done:"Done"},$={screen:"Overview",query:"",drawer:null,toast:"",focus:null,form:{},filter:"all",themeFilter:"all",signals:E.map(e=>({...e})),investigations:[{id:"i1",signal:"s2",owner:"Platform lead",opened:"2 weeks ago",step:1},{id:"i2",signal:"s6",owner:"Customer Success director",opened:"5 days ago",step:2}],actions:[{id:"a1",signal:"s5",title:"Write runbooks for the six uncovered pipelines",owner:"Data platform lead",due:"31 Oct",status:"progress"},{id:"a2",signal:"s8",title:"Add a rotating review champion in each product team",owner:"CISO office",due:"Complete",status:"done"},{id:"a3",signal:"s2",title:"Pair-rotate cluster on-call",owner:"Platform lead",due:"15 Nov",status:"planned"}],reports:[{id:"r1",title:"Quarterly resilience summary",desc:"Signals, themes and actions, ready for the board",status:"Ready",when:"Today"},{id:"r2",title:"Continuity coverage report",desc:"Critical services, owners and backups",status:"Draft",when:"Last edited Tuesday"},{id:"r3",title:"Monthly signals digest",desc:"Leadership circulation, first Monday of the month",status:"Scheduled",when:"Next: 3 Nov"}],seq:10},O=e=>$.signals.find(a=>a.id===e),q=()=>$.signals.filter(e=>e.status!=="resolved");function u(e){const a=T[e.impact]+r[e.people];return a>=5?"Urgent":a>=3?"High":a===2?"Medium":"Low"}const h=(e,a)=>`<span class="hx-lvl" style="--lc:${n[e]||"#7d8ba0"}">${d(a||e)}</span>`,b=e=>`<span class="hx-status ${e}">${v[e]}</span>`,y=e=>`<span class="hx-conf" title="Confidence: ${e}">${[1,2,3].map(a=>`<i class="${a<={Low:1,Medium:2,High:3}[e]?"on":""}"></i>`).join("")}${e}</span>`,g=e=>`<span class="hx-trend ${e}" title="Trend">${e==="up"?"\u25B2":e==="down"?"\u25BC":"\u25AC"}</span>`;function w(e){const a=u(e);return`
      <div class="hc-row hx-sig" data-act="open:${e.id}" role="button" tabindex="0" style="--lc:${n[a]}">
        <span class="hx-sev">${d(a)}</span>
        <div class="hc-row-main">
          <div class="hc-row-top"><b>${d(e.title)}</b></div>
          <small>${d(e.area)} \xB7 ${d(e.theme)} \xB7 updated ${d(e.fresh)}</small>
          <div class="hx-dims"><span>Impact ${h(e.impact)}</span><span>People-risk ${h(e.people)}</span>${y(e.confidence)}${g(e.trend)}</div>
        </div>
        <div class="hc-row-end">${b(e.status)}</div>
      </div>`}let k;const R={Overview:{icon:"shield",c1:"#1687ff",c2:"#45d8ff",render:B},Signals:{icon:"radar",c1:"#06b6d4",c2:"#67e8f9",render:V},Themes:{icon:"layers",c1:"#7c5cff",c2:"#b27bff",render:J},Investigations:{icon:"investigate",c1:"#f59e0b",c2:"#fcd34d",render:z},Actions:{icon:"actions",c1:"#0fb99f",c2:"#46dd98",render:Q},Reports:{icon:"report",c1:"#4f46e5",c2:"#8b8cff",render:X}};function B(){const e=q(),a=e.filter(L=>["Urgent","High"].includes(u(L))).length,i=$.actions.filter(L=>L.status==="done").length,l=$.actions.filter(L=>L.status!=="planned").length,f=(L,t,s,p,x,j,F)=>`
      <div class="hx-kpi" data-act="screen:${F}" role="button" tabindex="0" style="${S(t,s)}">
        ${N(L,t,s)}<div><b>${p}</b><span>${x}</span><small>${j}</small></div>
      </div>`,H=["Critical","High","Medium","Low"],P=["Low","Elevated","High"],_=(L,t)=>{const s=T[L]+r[t];return s>=5?"#fde2e2":s>=3?"#ffedd5":s===2?"#fef6dc":"#e7f7ed"},Y=o.map(L=>[L,e.filter(t=>t.area===L).length]),te=Math.max(1,...Y.map(L=>L[1])),se=e.slice().sort((L,t)=>T[t.impact]+r[t.people]-(T[L.impact]+r[L.people])).slice(0,3);return`
      ${k.topbar()}
      <div class="hc-head"><div class="hc-head-l"><div><small>RISK INTELLIGENCE</small><h4>Good morning, Sam</h4><p>Where the organisation is exposed today \u2014 and what is already being done about it.</p></div></div>
        <button type="button" class="hc-btn" style="${S("#06b6d4","#1687ff")}" data-act="screen:Signals">${m("radar")}Review signals</button></div>
      <div class="hx-kpis">
        ${f("radar","#06b6d4","#67e8f9",e.length,"Open signals",`${e.filter(L=>L.status==="new").length} new this week`,"Signals")}
        ${f("shield","#e5484d","#ff8a8a",a,"Urgent or high priority","Across "+new Set(e.map(L=>L.area)).size+" areas","Signals")}
        ${f("investigate","#f59e0b","#fcd34d",$.investigations.filter(L=>L.step<3).length,"Investigations open","Each with a named owner","Investigations")}
        ${f("actions","#0fb99f","#46dd98",`${l}/${$.actions.length}`,"Actions under way",`${i} complete`,"Actions")}
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Impact \xD7 people-risk</b><span class="hc-tag">Two dimensions, never merged</span></div>
          <div class="hx-matrix">
            <div class="hx-axis-y">Business impact</div>
            <div class="hx-grid">
              ${H.map(L=>`<span class="hx-rlabel">${L}</span>${P.map(t=>`<div class="hx-cell" style="background:${_(L,t)}">${e.filter(s=>s.impact===L&&s.people===t).map(s=>`<button type="button" class="hx-dot" style="--lc:${n[u(s)]}" data-act="open:${s.id}" title="${d(s.title)}">${s.id.slice(1)}</button>`).join("")}</div>`).join("")}`).join("")}
              <span></span>${P.map(L=>`<span class="hx-clabel">${L}</span>`).join("")}
            </div>
            <div class="hx-axis-x">People-risk (team aggregate)</div>
          </div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Needs attention first</b><button type="button" class="hc-link" data-act="screen:Signals">All signals \u2192</button></div>
          ${se.map(L=>`<div class="hc-feed" data-act="open:${L.id}" role="button" tabindex="0"><span class="hx-sev sm" style="--lc:${n[u(L)]}">${u(L)}</span><span class="hc-feed-text"><b>${d(L.title)}</b><br>${d(L.area)}</span></div>`).join("")}
          <div class="hc-panel-head sep"><b>Open signals by area</b></div>
          ${Y.map(([L,t])=>`<div class="hx-arow"><span>${d(L)}</span>${W(t/te*100,"#1687ff","#45d8ff")}<b>${t}</b></div>`).join("")}
        </div>
      </div>
      <p class="hc-note">People-risk is only ever shown as a team aggregate. Business impact describes organisational exposure \u2014 never the value of a person.</p>`}function V(){const e=$.query.toLowerCase().trim();let a=$.signals.filter(l=>$.filter==="all"||u(l)===$.filter);$.themeFilter!=="all"&&(a=a.filter(l=>l.theme===$.themeFilter)),e&&(a=a.filter(l=>(l.title+" "+l.area+" "+l.theme).toLowerCase().includes(e))),a.sort((l,f)=>(l.status==="resolved")-(f.status==="resolved")||T[f.impact]+r[f.people]-(T[l.impact]+r[l.people]));const i=(l,f)=>`<button type="button" class="hc-filter ${$.filter===l?"on":""}" style="${S(n[l]||"#06b6d4",n[l]||"#67e8f9")}" data-act="prio:${l}">${l!=="all"?"<i></i>":""}${f}</button>`;return`
      ${k.topbar("Search signals, areas or themes")}
      ${k.head("Signals","SIGNALS","Everything worth a look.","Each signal shows its evidence, its sources and how fresh they are. No single signal is a verdict.")}
      <div class="hc-filters">${i("all","All")}${i("Urgent","Urgent")}${i("High","High")}${i("Medium","Medium")}${i("Low","Low")}
        ${$.themeFilter!=="all"?`<button type="button" class="hc-filter on" style="${S(A[$.themeFilter].c1,A[$.themeFilter].c2)}" data-act="theme:all">${d($.themeFilter)} \u2715</button>`:""}
        <span class="hc-count">${a.length} signal${a.length===1?"":"s"}</span></div>
      <div class="hc-list">${a.length?a.map(w).join(""):`<div class="hc-empty">${m("radar")}<p>No signals match that filter.</p></div>`}</div>`}function J(){const e=q();return`
      ${k.topbar()}
      ${k.head("Themes","THEMES","Where the pressure sits.","Signals grouped into themes so leadership sees the shape, not just the noise.")}
      <div class="hx-themes">
        ${Object.entries(A).map(([a,i])=>{const l=e.filter(H=>H.theme===a),f=l.map(H=>H.impact).sort((H,P)=>T[P]-T[H])[0];return`<div class="hc-tile" style="${S(i.c1,i.c2)}" data-act="theme:${a}" role="button" tabindex="0">
            <div class="hc-tile-top">${N(i.icon,i.c1,i.c2)}<span class="hc-tile-badge">${l.length} open</span></div>
            <h5>${a}</h5><p>${i.blurb}</p>
            <div class="hx-theme-foot">${f?`Highest impact ${h(f)}`:'<span class="hx-clear">Nothing open</span>'}</div>
            <em class="hc-go">See signals \u2192</em>
          </div>`}).join("")}
      </div>
      <div class="hc-panel" style="margin-top:10px">
        <div class="hc-panel-head"><b>Areas \xD7 themes</b><span class="hc-tag">Open signals</span></div>
        <div class="hx-table">
          <div class="hx-tr hx-th"><span>Area</span>${Object.keys(A).map(a=>`<span title="${a}" aria-label="${a}" style="--lc:${A[a].c1}">${m(A[a].icon)}<em>${a}</em></span>`).join("")}</div>
          ${o.map(a=>`<div class="hx-tr"><span>${d(a)}</span>${Object.keys(A).map(i=>{const l=e.filter(f=>f.area===a&&f.theme===i).length;return`<span>${l?`<i class="hx-heat" style="--lc:${A[i].c1}">${l}</i>`:'<i class="hx-zero">\xB7</i>'}</span>`}).join("")}</div>`).join("")}
        </div>
      </div>`}function z(){return`
      ${k.topbar()}
      ${k.head("Investigations","INVESTIGATIONS","Open lines of enquiry.","A signal that matters becomes an investigation with an owner and an evidence trail.")}
      <div class="hc-list">
        ${$.investigations.map(e=>{const a=O(e.signal);return`<div class="hc-row hx-inv">
            <div class="hc-row-main" data-act="open:${a.id}" role="button" tabindex="0">
              <div class="hc-row-top"><b>${d(a.title)}</b>${h(u(a))}</div>
              <small>Owner: ${d(e.owner)} \xB7 opened ${d(e.opened)} \xB7 ${d(a.area)}</small>
              <div class="hx-steps">${K.map((i,l)=>`<span class="${l<e.step?"done":l===e.step?"now":""}">${l<e.step?m("check"):""}${i}</span>`).join("")}</div>
            </div>
            <div class="hc-row-end">${e.step<3?`<button type="button" class="hc-btn sm" style="${S("#f59e0b","#fcd34d")}" data-act="advance:${e.id}">Move to ${K[e.step+1]}</button>`:'<span class="hc-done" style="--c1:#30a46c">'+m("check")+"Closed</span>"}</div>
          </div>`}).join("")||`<div class="hc-empty">${m("investigate")}<p>No open investigations. Start one from any signal.</p></div>`}
      </div>
      <p class="hc-note">Every step keeps its evidence: who looked, what they saw and what was decided.</p>`}function Q(){const e=$.actions.length,a=$.actions.filter(i=>i.status==="done").length;return`
      ${k.topbar()}
      ${k.head("Actions","ACTIONS","Resilience, not blame.","Actions target the organisation\u2019s exposure \u2014 never a judgement of a person.")}
      <div class="hc-panel hx-progress">
        <div class="hc-panel-head"><b>${a} of ${e} complete</b><span class="hc-tag">${Math.round(a/Math.max(1,e)*100)}%</span></div>
        ${W(a/Math.max(1,e)*100,"#0fb99f","#46dd98")}
      </div>
      <div class="hc-list">
        ${$.actions.map(i=>`
          <div class="hc-row hx-act ${i.status}">
            <button type="button" class="hx-check" data-act="cycle:${i.id}" aria-label="Change status" title="Click to move to the next status">${i.status==="done"?m("check"):""}</button>
            <div class="hc-row-main" data-act="open:${i.signal}" role="button" tabindex="0"><div class="hc-row-top"><b>${d(i.title)}</b></div><small>Owner: ${d(i.owner)} \xB7 due ${d(i.due)} \xB7 from \u201C${d(O(i.signal).title)}\u201D</small></div>
            <div class="hc-row-end"><button type="button" class="hx-status ${i.status}" data-act="cycle:${i.id}">${M[i.status]}</button></div>
          </div>`).join("")}
      </div>
      <p class="hc-note">Actions are proposals for human review. The decision and its rationale stay with the team.</p>`}function X(){return`
      ${k.topbar()}
      ${k.head("Reports","REPORTS","Evidence you can hand over.","Built from the same signals, investigations and actions \u2014 nothing is invented at reporting time.")}
      <div class="hc-grid2">
        ${$.reports.map(e=>`
          <div class="hc-card" style="${S("#4f46e5","#8b8cff")}">
            <div class="hc-card-top">${N("report","#4f46e5","#8b8cff")}<div class="hc-card-id"><b>${d(e.title)}</b><small>${d(e.desc)}</small></div></div>
            <div class="hc-actions"><span class="hx-status ${e.status==="Ready"?"done":e.status==="Draft"?"planned":"progress"}">${e.status}</span><small class="hx-when">${d(e.when)}</small></div>
            <div class="hc-actions">
              ${e.status==="Ready"?`<button type="button" class="hc-btn" style="${S("#4f46e5","#8b8cff")}" data-act="preview:${e.id}">Preview</button>`:`<button type="button" class="hc-btn" style="${S("#4f46e5","#8b8cff")}" data-act="generate:${e.id}">Generate now</button>`}
            </div>
          </div>`).join("")}
      </div>`}function Z(){const e=$.drawer;if(e.startsWith("r"))return ee(e);const a=O(e);if(!a)return"";const i=u(a),l=$.investigations.find(H=>H.signal===a.id),f=$.actions.find(H=>H.signal===a.id);return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${d(a.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,${n[i]},${A[a.theme].c1})"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${N(A[a.theme].icon,A[a.theme].c1,A[a.theme].c2,"lg hx-drawer-ico")}${b(a.status)}</div>
        <div class="hc-drawer-id"><b>${d(a.title)}</b><small>${d(a.area)} \xB7 ${d(a.theme)} \xB7 updated ${d(a.fresh)}</small></div>
        <div class="hx-dim3">
          <div><small>Business impact</small>${h(a.impact)}</div>
          <div><small>People-risk (team)</small>${h(a.people)}</div>
          <div><small>Confidence</small>${y(a.confidence)}</div>
        </div>
        <div class="hx-prio" style="--lc:${n[i]}"><b>${i} priority</b><span>${d(a.impact)} impact \xD7 ${d(a.people.toLowerCase())} people-risk. Used to order the queue only \u2014 both dimensions stay visible.</span></div>
        <div class="hc-why-label">Evidence</div>
        <ul class="hc-why">${a.evidence.map(H=>`<li>${d(H)}</li>`).join("")}</ul>
        <div class="hc-why-label">Sources</div>
        <div class="hc-chips">${a.sources.map(H=>`<span class="hc-chip">${m("report")}${d(H)}</span>`).join("")}</div>
        <div class="hc-why-label">Suggested resilience action</div>
        <p class="hx-suggest">${d(a.action)}</p>
        <div class="hc-drawer-actions">
          ${a.status==="resolved"?'<span class="hc-done" style="--c1:#30a46c">'+m("check")+"Resolved</span>":`
            ${l?'<button type="button" class="hc-btn ghost" data-act="screen:Investigations">View investigation</button>':`<button type="button" class="hc-btn" style="${S("#f59e0b","#fcd34d")}" data-act="investigate:${a.id}">Start investigation</button>`}
            ${f?'<button type="button" class="hc-btn ghost" data-act="screen:Actions">View action</button>':`<button type="button" class="hc-btn" style="${S("#0fb99f","#46dd98")}" data-act="plan:${a.id}">Create action</button>`}
            <button type="button" class="hc-btn ghost" data-act="accept:${a.id}">Accept risk</button>`}
        </div>
        <p class="hc-note">HiveRisk recommends; people decide. People-risk is shown for the team, never for an individual.</p>
      </aside>`}function ee(e){const a=$.reports.find(f=>f.id===e),i=q(),l=$.actions.filter(f=>f.status==="done").length;return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${d(a.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,#4f46e5,#8b8cff)"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${N("report","#4f46e5","#8b8cff","lg hx-drawer-ico")}</div>
        <div class="hc-drawer-id"><b>${d(a.title)}</b><small>Preview \xB7 generated from live demo data</small></div>
        <div class="hx-dim3">
          <div><small>Open signals</small><b class="hx-big">${i.length}</b></div>
          <div><small>Urgent / high</small><b class="hx-big">${i.filter(f=>["Urgent","High"].includes(u(f))).length}</b></div>
          <div><small>Actions done</small><b class="hx-big">${l}/${$.actions.length}</b></div>
        </div>
        <div class="hc-why-label">Headlines</div>
        <ul class="hc-why">${i.slice().sort((f,H)=>T[H.impact]+r[H.people]-(T[f.impact]+r[f.people])).slice(0,3).map(f=>`<li><b>${d(f.title)}</b> \u2014 ${d(f.action.toLowerCase())}</li>`).join("")}</ul>
        <p class="hc-note">Illustrative preview. A real report cites every source and records who approved it.</p>
      </aside>`}function c(e,a){switch(e){case"open":return $.drawer=a,!0;case"prio":return $.filter=a,!0;case"theme":return $.themeFilter=a,a!=="all"&&($.filter="all",k.go("Signals")),!0;case"investigate":{$.investigations.unshift({id:"i"+ ++$.seq,signal:a,owner:"You",opened:"just now",step:0});const i=O(a);return i.status==="new"&&(i.status="review"),k.toast("Investigation opened with you as owner."),!0}case"plan":{const i=O(a);return $.actions.unshift({id:"a"+ ++$.seq,signal:a,title:i.action,owner:"You",due:"in 4 weeks",status:"planned"}),i.status="action",k.toast("Action created and added to the plan."),!0}case"accept":return O(a).status="resolved",$.investigations.filter(i=>i.signal===a).forEach(i=>{i.step=3}),$.drawer=null,k.toast("Risk accepted and recorded as a human decision."),!0;case"advance":{const i=$.investigations.find(l=>l.id===a);return i&&i.step<3&&(i.step++,i.step===3&&(O(i.signal).status="resolved",k.toast("Investigation closed; signal resolved."))),!0}case"cycle":{const i=$.actions.find(l=>l.id===a);return i.status=i.status==="planned"?"progress":i.status==="progress"?"done":"planned",i.status==="done"&&k.toast("Action complete."),!0}case"generate":{const i=$.reports.find(l=>l.id===a);return i.status="Ready",i.when="Just now",k.toast(`${i.title} generated.`),!0}case"preview":return $.drawer=a,!0;default:return!1}}k=I({state:$,side:Object.keys(R),screens:R,start:"Overview",me:U,act:c,drawer:Z,searchScreens:["Signals"],searchPlaceholder:"Search signals, areas or themes",bellScreen:"Signals",bellLabel:"New signals",badge:()=>$.signals.filter(e=>e.status==="new").length,sideBadge:()=>["Signals",$.signals.filter(e=>e.status==="new").length]}),window.HiveRisk=k.api})(),(function(){const{esc:d,icon:m,tint:S,avatar:D,tile:N,ring:W,bar:I,createApp:U}=window.HiveUI,T={id:"je",name:"Jordan Ellis",init:"JE",role:"Product Designer"},r={je:T,mk:{id:"mk",name:"Maya Kent",init:"MK",role:"Support Operations"},lb:{id:"lb",name:"Leo Brandt",init:"LB",role:"People Experience"},th:{id:"th",name:"Tariq Hussein",init:"TH",role:"Data Science"},rk:{id:"rk",name:"Ruth Kimani",init:"RK",role:"Platform Engineering"},ow:{id:"ow",name:"Olivia Wright",init:"OW",role:"Customer Success"},dn:{id:"dn",name:"Dev Nair",init:"DN",role:"Data Engineering"},sp:{id:"sp",name:"Sofia Petrov",init:"SP",role:"Engineering"},fa:{id:"fa",name:"Felix Adeyemi",init:"FA",role:"Finance Systems"},mo:{id:"mo",name:"Marta Ortiz",init:"MO",role:"VP Operations"},gc:{id:"gc",name:"Grace Chen",init:"GC",role:"CTO"},hb:{id:"hb",name:"Hana Boateng",init:"HB",role:"Learning & Development"}},n={onb:{name:"Faster onboarding",c:["#1687ff","#45d8ff"]},auto:{name:"Automate busywork",c:["#7c5cff","#b27bff"]},cost:{name:"Cut cloud cost",c:["#f59e0b","#fcd34d"]},green:{name:"Greener operations",c:["#0fb99f","#46dd98"]},cx:{name:"Happier customers",c:["#f2508b","#ff8fb1"]}},v=["Idea","Evidence","Experiment","Outcome"],E=["#7d8ba0","#1687ff","#7c5cff","#0fb99f"],o={screen:"Home",query:"",drawer:null,toast:"",focus:null,form:{title:"",challenge:"auto",summary:""},challengeFilter:"all",sort:"top",stageFilter:"all",ideas:[{id:"v1",title:"AI assistant that drafts support-ticket replies",author:"mk",challenge:"auto",stage:2,votes:142,comments:18,days:34,score:{Evidence:82,"Strategic fit":90,Feasibility:74,Reach:88},sponsor:"mo",members:["mk","th"],roles:["Data scientist","Designer"],tags:["AI","Support","Automation"],summary:"Draft first replies to common support tickets so agents review and send instead of writing from scratch.",evidence:["Support backlog up 22% this year (internal dashboard)","31 of 42 agents polled said they would use drafts"],next:"Run a four-week experiment with one support pod"},{id:"v2",title:"Self-serve onboarding checklist",author:"lb",challenge:"onb",stage:1,votes:96,comments:11,days:21,score:{Evidence:70,"Strategic fit":84,Feasibility:88,Reach:72},sponsor:null,members:["lb"],roles:["Frontend engineer"],tags:["Onboarding","People"],summary:"One checklist a new starter owns, with every access request and first-week task in one place.",evidence:["New starters raise an average of 9 access tickets in week one","Managers report onboarding admin as a top-three time sink"],next:"Find an executive sponsor"},{id:"v3",title:"Cloud cost anomaly alerts in team chat",author:"rk",challenge:"cost",stage:2,votes:118,comments:9,days:40,score:{Evidence:86,"Strategic fit":88,Feasibility:80,Reach:70},sponsor:"gc",members:["rk","dn"],roles:[],tags:["Cloud","FinOps"],summary:"Alert the owning team the same day their cloud spend jumps, with the likely cause attached.",evidence:["Three cost spikes last quarter went unnoticed for over a week","Tagging coverage is now above 90%, so owners are known"],next:"Measure spend avoided over six weeks"},{id:"v4",title:"Weekly customer-feedback digest",author:"ow",challenge:"cx",stage:0,votes:54,comments:6,days:6,score:{Evidence:48,"Strategic fit":76,Feasibility:82,Reach:64},sponsor:null,members:["ow"],roles:["Analyst"],tags:["Customers","Insight"],summary:"A short weekly digest of what customers asked for, grouped by theme, for every product team.",evidence:["Feedback currently lives in four separate tools"],next:"Gather evidence from two product teams"},{id:"v5",title:"Carbon-aware batch scheduling",author:"dn",challenge:"green",stage:1,votes:71,comments:7,days:18,score:{Evidence:66,"Strategic fit":80,Feasibility:70,Reach:58},sponsor:null,members:["dn","rk"],roles:["Platform engineer"],tags:["Sustainability","Data"],summary:"Run flexible batch jobs when the grid is cleanest, without missing any deadline.",evidence:["About 40% of nightly batch jobs have flexible start times"],next:"Estimate emissions avoided on one pipeline"},{id:"v6",title:"Auto-drafted release notes",author:"sp",challenge:"auto",stage:3,votes:130,comments:22,days:72,score:{Evidence:90,"Strategic fit":78,Feasibility:92,Reach:76},sponsor:"gc",members:["sp","je"],roles:[],tags:["Engineering","Automation"],summary:"Draft release notes from merged changes for a human to edit and publish.",evidence:["Pilot with two teams over six releases"],next:"Roll out to all product teams",outcome:{type:"Value",text:"Pilot: about three hours saved per release across two teams (illustrative)."}},{id:"v7",title:"Supplier invoice auto-matching",author:"fa",challenge:"auto",stage:0,votes:40,comments:3,days:3,score:{Evidence:52,"Strategic fit":70,Feasibility:66,Reach:50},sponsor:null,members:["fa"],roles:["Automation engineer"],tags:["Finance","Automation"],summary:"Match supplier invoices to purchase orders automatically and flag only the exceptions.",evidence:["Finance matches about 1,200 invoices a month by hand"],next:"Size the exception rate from last quarter"},{id:"v8",title:"Onboarding video library",author:"hb",challenge:"onb",stage:3,votes:88,comments:14,days:90,score:{Evidence:74,"Strategic fit":72,Feasibility:90,Reach:80},sponsor:"mo",members:["hb"],roles:[],tags:["Learning","Onboarding"],summary:"Short videos answering the questions every new starter asks.",evidence:["Completion rate high across the pilot cohort"],next:"Pair videos with a live Q&A session",outcome:{type:"Learning",text:"Completion was high, but questions still went to managers \u2014 pairing with live Q&A next."}},{id:"v9",title:"Design-system audit bot",author:"je",challenge:"auto",stage:0,votes:12,comments:2,days:9,score:{Evidence:44,"Strategic fit":62,Feasibility:80,Reach:56},sponsor:null,members:["je"],roles:["Frontend engineer"],tags:["Design","Quality"],summary:"Flag components that drift from the design system before they ship.",evidence:["Reviewer feedback: add how many screens drift today"],next:"Add evidence: count drifting components",feedback:"Promising \u2014 add how many screens drift today to strengthen the evidence."}].map(c=>({...c,members:c.members.slice(),roles:c.roles.slice()})),voted:new Set(["v6"]),sponsorAsked:new Set,lastCheck:null,seq:20},K=c=>o.ideas.find(e=>e.id===c),M=c=>r[c]||T,$=c=>Math.round(Object.values(c.score).reduce((e,a)=>e+a,0)/4),O=c=>{const e=n[c];return`<span class="hx-ch" style="${S(e.c[0],e.c[1])}">${d(e.name)}</span>`},q=c=>`<span class="hx-stage" style="--lc:${E[c]}">${v[c]}</span>`,u=c=>`<button type="button" class="hx-vote ${o.voted.has(c.id)?"on":""}" data-act="vote:${c.id}" aria-pressed="${o.voted.has(c.id)}" title="Upvote">\u25B2<b>${c.votes}</b></button>`,h=()=>o.ideas.filter(c=>c.author===T.id);function b(c){const e=n[c.challenge];return`
      <div class="hc-card hx-idea" style="${S(e.c[0],e.c[1])}" data-act="open:${c.id}" role="button" tabindex="0">
        <div class="hx-idea-top">${O(c.challenge)}${q(c.stage)}</div>
        <b class="hx-idea-title">${d(c.title)}</b>
        <div class="hx-idea-foot">
          ${D(M(c.author),"xs")}<small>${d(M(c.author).name)}</small>
          <span class="hx-meta">${m("chat")}${c.comments}</span>
          ${u(c)}
          ${W($(c),"xs","Venture score")}
        </div>
      </div>`}let y;const g={Home:{icon:"portfolio",c1:"#1687ff",c2:"#45d8ff",render:w},Ideas:{icon:"idea",c1:"#f59e0b",c2:"#fcd34d",render:R},Explore:{icon:"explore",c1:"#06b6d4",c2:"#67e8f9",render:B},"My submissions":{icon:"submit",c1:"#7c5cff",c2:"#b27bff",render:V},Teams:{icon:"teams",c1:"#0fb99f",c2:"#46dd98",render:J},Insights:{icon:"trend",c1:"#f2508b",c2:"#ff8fb1",render:z}};function w(){const c=o.ideas.slice().sort((i,l)=>l.votes-i.votes).slice(0,3),e=v.map((i,l)=>o.ideas.filter(f=>f.stage===l).length),a=(i,l)=>{const f=g[i];return`<button type="button" class="hc-qchip" style="${S(f.c1,f.c2)}" data-act="screen:${i}">${m(f.icon)}<span>${l}</span></button>`};return`
      ${y.topbar()}
      <div class="hc-head"><div class="hc-head-l"><div><small>INNOVATION MARKETPLACE</small><h4>What\u2019s brewing, Jordan? <span class="hc-wave">\u{1F4A1}</span></h4><p>Ideas from across the company, with a clear path from first thought to real outcome.</p></div></div>
        <button type="button" class="hc-btn" style="${S("#7c5cff","#b27bff")}" data-act="screen:My submissions">${m("sparkle")}Submit an idea</button></div>
      <div class="hc-qchips">
        ${a("Ideas",`<b>${o.ideas.length}</b> ideas this quarter`)}
        ${a("Explore",`<b>${e[2]}</b> experiments running`)}
        ${a("Insights",`<b>${e[3]}</b> outcomes recorded`)}
      </div>
      <div class="hx-pipe">
        ${v.map((i,l)=>`<button type="button" class="hx-pipe-step" style="--lc:${E[l]}" data-act="stage:${l}"><b>${e[l]}</b><span>${i}</span></button>${l<3?"<i>\u2192</i>":""}`).join("")}
      </div>
      <div class="hc-panel-head sep"><b>Trending this week</b><button type="button" class="hc-link" data-act="screen:Ideas">All ideas \u2192</button></div>
      <div class="hx-cards3">${c.map(b).join("")}</div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Open challenges</b><span class="hc-tag">Set by leadership</span></div>
          <div class="hc-chips big">${Object.keys(n).map(i=>`<button type="button" class="hx-ch big" style="${S(n[i].c[0],n[i].c[1])}" data-act="challenge:${i}">${d(n[i].name)} <b>${o.ideas.filter(l=>l.challenge===i).length}</b></button>`).join("")}</div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Your submissions</b><button type="button" class="hc-link" data-act="screen:My submissions">Manage \u2192</button></div>
          ${h().map(i=>`<div class="hc-feed" data-act="open:${i.id}" role="button" tabindex="0">${N("idea",n[i.challenge].c[0],n[i.challenge].c[1],"xs")}<span class="hc-feed-text"><b>${d(i.title)}</b></span>${q(i.stage)}</div>`).join("")}
        </div>
      </div>`}function k(){const c=o.query.toLowerCase().trim();let e=o.ideas.filter(a=>o.challengeFilter==="all"||a.challenge===o.challengeFilter);return o.stageFilter!=="all"&&(e=e.filter(a=>a.stage===Number(o.stageFilter))),c&&(e=e.filter(a=>(a.title+" "+a.tags.join(" ")+" "+n[a.challenge].name+" "+M(a.author).name).toLowerCase().includes(c))),e.sort((a,i)=>o.sort==="top"?i.votes-a.votes:a.days-i.days)}function R(){const c=k(),e=(a,i,l)=>`<button type="button" class="hc-filter ${o.challengeFilter===a?"on":""}" style="${S(l[0],l[1])}" data-act="challenge:${a}">${a!=="all"?"<i></i>":""}${i}</button>`;return`
      ${y.topbar("Search ideas, tags or people")}
      ${y.head("Ideas","IDEAS","The open pipeline.","Every idea keeps its author, its evidence and its stage. Nothing disappears into a suggestion box.",`<div class="hx-seg"><button type="button" class="${o.sort==="top"?"on":""}" data-act="sort:top">Top</button><button type="button" class="${o.sort==="new"?"on":""}" data-act="sort:new">New</button></div>`)}
      <div class="hc-filters">${e("all","All challenges",["#f59e0b","#fcd34d"])}${Object.keys(n).map(a=>e(a,n[a].name,n[a].c)).join("")}
        ${o.stageFilter!=="all"?`<button type="button" class="hc-filter on" style="${S(E[o.stageFilter],E[o.stageFilter])}" data-act="stage:all">${v[o.stageFilter]} \u2715</button>`:""}
        <span class="hc-count">${c.length} idea${c.length===1?"":"s"}</span></div>
      ${c.length?`<div class="hc-grid2">${c.map(b).join("")}</div>`:`<div class="hc-empty">${m("idea")}<p>No ideas match yet \u2014 maybe yours is the first?</p><button type="button" class="hc-btn sm" style="${S("#7c5cff","#b27bff")}" data-act="screen:My submissions">Submit an idea</button></div>`}`}function B(){return`
      ${y.topbar()}
      ${y.head("Explore","PIPELINE","From idea to outcome.","An idea moves forward when it earns it: evidence, a sponsor, an experiment, a measured result.")}
      <div class="hx-kanban">
        ${v.map((c,e)=>{const a=o.ideas.filter(i=>i.stage===e).sort((i,l)=>l.votes-i.votes);return`<div class="hx-col" style="--lc:${E[e]}">
            <div class="hx-col-head"><b>${c}</b><span>${a.length}</span></div>
            ${a.map(i=>`<div class="hx-kcard" data-act="open:${i.id}" role="button" tabindex="0">
              ${O(i.challenge)}
              <b>${d(i.title)}</b>
              <div class="hx-kfoot">${D(M(i.author),"xs")}<span class="hx-meta">\u25B2 ${i.votes}</span>${i.sponsor?`<span class="hx-sponsored" title="Sponsored by ${d(M(i.sponsor).name)}">${m("check")}Sponsor</span>`:""}${i.outcome?`<span class="hx-out ${i.outcome.type.toLowerCase()}">${i.outcome.type}</span>`:""}</div>
            </div>`).join("")}
          </div>`}).join("")}
      </div>`}function V(){const c=o.lastCheck;return`
      ${y.topbar()}
      ${y.head("My submissions","MY SUBMISSIONS","Pitch an idea.","Say what and why in a sentence or two. HiveVentures tags it and checks for similar ideas before it goes live.")}
      <div class="hc-split">
        <div class="hc-panel hx-form">
          <div class="hc-panel-head"><b>New idea</b><span class="hc-tag">Takes a minute</span></div>
          <label><span>Idea title</span><input data-field="title" value="${d(o.form.title)}" placeholder="e.g. Automate expense receipt matching" maxlength="80"></label>
          <label><span>Challenge it answers</span><select data-field="challenge">${Object.keys(n).map(e=>`<option value="${e}" ${o.form.challenge===e?"selected":""}>${d(n[e].name)}</option>`).join("")}</select></label>
          <label><span>Why it matters</span><textarea data-field="summary" rows="3" placeholder="What problem does it solve, and for whom?">${d(o.form.summary)}</textarea></label>
          <div class="hc-actions"><button type="button" class="hc-btn" style="${S("#7c5cff","#b27bff")}" data-act="submit">${m("sparkle")}Submit idea</button></div>
          ${c?`<div class="hx-ai">${m("sparkle")}<div><b>AI check</b><span>Tagged ${c.tags.map(e=>`<i>${d(e)}</i>`).join("")}${c.similar?` \xB7 Similar to \u201C<a data-act="open:${c.similar.id}">${d(c.similar.title)}</a>\u201D \u2014 consider joining forces.`:" \xB7 No similar ideas found."}</span></div></div>`:""}
        </div>
        <div>
          ${h().map(e=>`
            <div class="hc-card hx-mine" style="${S(n[e.challenge].c[0],n[e.challenge].c[1])}">
              <div class="hx-idea-top">${O(e.challenge)}<span class="hx-meta">\u25B2 ${e.votes} \xB7 ${e.comments} comments</span></div>
              <b class="hx-idea-title" data-act="open:${e.id}" role="button" tabindex="0">${d(e.title)}</b>
              <div class="hx-steps">${v.map((a,i)=>`<span class="${i<e.stage?"done":i===e.stage?"now":""}">${i<e.stage?m("check"):""}${a}</span>`).join("")}</div>
              ${e.feedback?`<p class="hx-feedback">${m("chat")}${d(e.feedback)}</p>`:`<p class="hc-note">Next: ${d(e.next)}</p>`}
            </div>`).join("")}
        </div>
      </div>
      <p class="hc-note">Submissions, votes and comments are never turned into a hidden performance score.</p>`}function J(){const c=o.ideas.filter(e=>e.stage>=1&&e.stage<=2);return`
      ${y.topbar()}
      ${y.head("Teams","TEAMS","Who\u2019s building together.","Ideas attract teams. People join by choice \u2014 open roles are listed on every idea.")}
      <div class="hc-grid2">
        ${c.map(e=>{const a=n[e.challenge],i=e.members.includes(T.id);return`<div class="hc-card" style="${S(a.c[0],a.c[1])}">
            <div class="hx-idea-top">${O(e.challenge)}${q(e.stage)}</div>
            <b class="hx-idea-title" data-act="open:${e.id}" role="button" tabindex="0">${d(e.title)}</b>
            <div class="hc-comm-meta"><span class="hc-stack">${e.members.map(l=>D(M(l),"xs")).join("")}</span><small>${e.members.length} member${e.members.length===1?"":"s"}${e.sponsor?` \xB7 sponsor ${d(M(e.sponsor).name)}`:" \xB7 seeking a sponsor"}</small></div>
            <div class="hc-chips">${e.roles.length?e.roles.map(l=>`<span class="hc-chip strong">Open: ${d(l)}</span>`).join(""):'<span class="hc-chip">Team complete</span>'}</div>
            <div class="hc-actions">${i?`<span class="hc-done" style="${S(a.c[0],a.c[1])}">${m("check")}You\u2019re on this team</span><button type="button" class="hc-btn ghost sm" data-act="join:${e.id}">Leave</button>`:`<button type="button" class="hc-btn sm" style="${S(a.c[0],a.c[1])}" data-act="join:${e.id}">Join team</button>`}</div>
          </div>`}).join("")}
      </div>`}function z(){const c=v.map((l,f)=>o.ideas.filter(H=>H.stage>=f).length),e=Object.keys(n).map(l=>[l,o.ideas.filter(f=>f.challenge===l).length]),a=Math.max(1,...e.map(l=>l[1])),i=o.ideas.filter(l=>l.outcome);return`
      ${y.topbar()}
      ${y.head("Insights","INSIGHTS","Is innovation moving?","The pipeline end to end \u2014 ideas in, experiments run, outcomes recorded.")}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Pipeline funnel</b><span class="hc-tag">This quarter</span></div>
          ${v.map((l,f)=>`<div class="hx-arow"><span>${f===0?"Submitted":"Reached "+l.toLowerCase()}</span>${I(c[f]/c[0]*100,E[f],E[f])}<b>${c[f]}</b></div>`).join("")}
          <div class="hc-panel-head sep"><b>Ideas by challenge</b></div>
          ${e.map(([l,f])=>`<div class="hx-arow"><span>${d(n[l].name)}</span>${I(f/a*100,n[l].c[0],n[l].c[1])}<b>${f}</b></div>`).join("")}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Outcomes recorded</b><span class="hc-tag">Value or learning</span></div>
          ${i.map(l=>`<div class="hx-outcome" data-act="open:${l.id}" role="button" tabindex="0"><span class="hx-out ${l.outcome.type.toLowerCase()}">${l.outcome.type}</span><b>${d(l.title)}</b><small>${d(l.outcome.text)}</small></div>`).join("")}
          <p class="hc-note">An experiment that teaches us something is a result too \u2014 both are recorded.</p>
        </div>
      </div>`}function Q(){const c=K(o.drawer);if(!c)return"";const e=n[c.challenge],a=c.members.includes(T.id),i=$(c);return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${d(c.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,${e.c[0]},${e.c[1]})"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${N("idea",e.c[0],e.c[1],"lg hx-drawer-ico")}${W(i,"lg","Venture score")}</div>
        <div class="hc-drawer-id"><b>${d(c.title)}</b><small>${d(M(c.author).name)} \xB7 ${d(M(c.author).role)} \xB7 ${d(e.name)}</small></div>
        <div class="hx-steps">${v.map((l,f)=>`<span class="${f<c.stage?"done":f===c.stage?"now":""}">${f<c.stage?m("check"):""}${l}</span>`).join("")}</div>
        <p class="hx-suggest">${d(c.summary)}</p>
        <div class="hc-why-label">Venture score ${i} \u2014 how it\u2019s built</div>
        ${Object.entries(c.score).map(([l,f])=>`<div class="hx-arow"><span>${d(l)}</span>${I(f,e.c[0],e.c[1])}<b>${f}</b></div>`).join("")}
        <div class="hc-why-label">Evidence</div>
        <ul class="hc-why" style="${S(e.c[0],e.c[1])}">${c.evidence.map(l=>`<li>${d(l)}</li>`).join("")}</ul>
        ${c.outcome?`<div class="hx-prio" style="--lc:${c.outcome.type==="Value"?"#0fb99f":"#7c5cff"}"><b>${c.outcome.type} outcome</b><span>${d(c.outcome.text)}</span></div>`:`<div class="hc-why-label">Next step</div><p class="hx-suggest">${d(c.next)}</p>`}
        <div class="hc-why-label">Team</div>
        <div class="hc-comm-meta"><span class="hc-stack">${c.members.map(l=>D(M(l),"xs")).join("")}</span><small>${c.sponsor?`Sponsored by ${d(M(c.sponsor).name)}, ${d(M(c.sponsor).role)}`:"Looking for a sponsor"}</small></div>
        <div class="hc-drawer-actions">
          ${u(c)}
          ${c.stage<3&&c.author!==T.id?a?`<button type="button" class="hc-btn ghost" data-act="join:${c.id}">Leave team</button>`:`<button type="button" class="hc-btn" style="${S(e.c[0],e.c[1])}" data-act="join:${c.id}">Join team</button>`:""}
          ${c.sponsor?"":o.sponsorAsked.has(c.id)?`<span class="hc-done" style="${S(e.c[0],e.c[1])}">${m("check")}Sponsor intro requested</span>`:`<button type="button" class="hc-btn ghost" data-act="sponsor:${c.id}">Suggest a sponsor</button>`}
        </div>
        <p class="hc-note">The venture score is AI-assisted and reviewed by people. It ranks ideas, never the people behind them.</p>
      </aside>`}const X=new Set("a an the and or for to of in on with our we is are be by that this it from at as into".split(" "));function Z(c,e){const i=((c+" "+e).toLowerCase().match(/[a-z]{4,}/g)||[]).filter(P=>!X.has(P)),l=[...new Set(i)].slice(0,3).map(P=>P[0].toUpperCase()+P.slice(1));let f=null,H=0;return o.ideas.forEach(P=>{const _=(P.title+" "+P.tags.join(" ")+" "+P.summary).toLowerCase(),Y=i.filter(te=>_.includes(te)).length;Y>H&&(H=Y,f=P)}),{tags:l.length?l:["General"],similar:H>=2?f:null}}function ee(c,e){switch(c){case"open":return o.drawer=e,!0;case"vote":{const a=K(e);return o.voted.has(e)?(o.voted.delete(e),a.votes--):(o.voted.add(e),a.votes++),!0}case"challenge":return o.challengeFilter=e,o.stageFilter="all",o.screen!=="Ideas"&&y.go("Ideas"),!0;case"stage":return o.stageFilter=e,o.challengeFilter="all",e!=="all"&&o.screen!=="Ideas"&&y.go("Ideas"),!0;case"sort":return o.sort=e,!0;case"join":{const a=K(e);return a.members.includes(T.id)?(a.members=a.members.filter(i=>i!==T.id),y.toast("You left the team.")):(a.members.push(T.id),y.toast(`You joined the team for \u201C${a.title}\u201D.`)),!0}case"sponsor":return o.sponsorAsked.add(e),y.toast("Sponsor intro requested \u2014 the innovation team will follow up."),!0;case"submit":{const a=(o.form.title||"").trim();if(a.length<6)return y.toast("Give your idea a title of at least a few words."),!0;const i=Z(a,o.form.summary||""),l="v"+ ++o.seq;return o.ideas.unshift({id:l,title:a,author:T.id,challenge:o.form.challenge,stage:0,votes:1,comments:0,days:0,score:{Evidence:40,"Strategic fit":72,Feasibility:70,Reach:60},sponsor:null,members:[T.id],roles:[],tags:i.tags,summary:(o.form.summary||"").trim()||"Summary to follow.",evidence:["Add evidence to move this idea forward"],next:"Gather evidence and find a sponsor"}),o.voted.add(l),o.lastCheck=i,o.form={title:"",challenge:o.form.challenge,summary:""},y.toast(i.similar?"Submitted. The AI check found a similar idea \u2014 take a look.":"Submitted. Your idea is live in the pipeline."),!0}default:return!1}}y=U({state:o,side:Object.keys(g),screens:g,start:"Home",me:T,act:ee,drawer:Q,searchScreens:["Ideas"],searchPlaceholder:"Search ideas, tags or people",bellScreen:"My submissions",bellLabel:"Updates on your ideas",badge:()=>h().filter(c=>c.feedback).length,sideBadge:()=>["My submissions",h().filter(c=>c.feedback).length]}),window.HiveVentures=y.api})(),(()=>{const d=document.querySelector(".menu"),m=document.querySelector(".nav-links");function S(){!d||!m||(m.style.display="",m.style.position="",m.style.top="",m.style.left="",m.style.right="",m.style.padding="",m.style.background="",m.style.flexDirection="",m.style.gap="",m.style.borderBottom="",d.setAttribute("aria-expanded","false"))}d&&m&&(d.addEventListener("click",()=>{if(d.getAttribute("aria-expanded")==="true"){S();return}d.setAttribute("aria-expanded","true"),m.style.display="flex",m.style.position="absolute",m.style.top="74px",m.style.left="0",m.style.right="0",m.style.padding="22px",m.style.background="rgba(247,248,250,.97)",m.style.flexDirection="column",m.style.gap="18px",m.style.borderBottom="1px solid #e2e6eb"}),window.addEventListener("resize",()=>{window.innerWidth>850&&S()}));const D=new IntersectionObserver(u=>u.forEach(h=>{h.isIntersecting&&h.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(u=>D.observe(u));const N='<div class="exp-user"><div class="exp-avatar">AR</div><div class="exp-status"><b>Available</b>Profile active</div></div>',W={connect:{code:"HC / HIVE CONNECT",brand:"HIVE CONNECT",mark:"mark-connect",app:"HiveConnect",get side(){return window.HiveConnect.side},get icons(){return window.HiveConnect.icons},get colors(){return window.HiveConnect.colors},get start(){return window.HiveConnect.start},screens:{Home:`
        <div class="exp-main-head">
          <div><small>PERSONAL WORKSPACE</small><h4>Good morning, Alex.</h4><p>Here are people and conversations that could be useful to you.</p></div>
          ${N}
        </div>
        <div class="exp-search" data-screen="Find people" role="button" tabindex="0"><span>What can I help you find?</span><b>\u2315</b></div>
        <div class="exp-grid-3">
          <div class="exp-panel" data-screen="Meet"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#meet"></use></svg></span><div class="exp-panel-label">Suggested for you</div><h5>MEET</h5><p>People you may want to know based on interests, role and intent.</p><div class="exp-match"><div class="mini-avatar">SK</div><div><b>Samira Khan</b><small>Transformation \xB7 London</small></div></div><div class="exp-tagrow"><span class="exp-tag">AI strategy</span><span class="exp-tag">Change</span></div><em class="exp-go">Open Meet \u2192</em></div>
          <div class="exp-panel" data-screen="Help"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#help"></use></svg></span><div class="exp-panel-label">Need expertise?</div><h5>HELP</h5><p>Find colleagues with relevant experience when you need an answer.</p><div class="exp-match"><div class="mini-avatar">JM</div><div><b>James Morgan</b><small>Cloud \xB7 Platform engineering</small></div></div><div class="exp-tagrow"><span class="exp-tag">AWS</span><span class="exp-tag">Kubernetes</span></div><em class="exp-go">Open Help \u2192</em></div>
          <div class="exp-panel" data-screen="Learn"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#learn"></use></svg></span><div class="exp-panel-label">Keep learning</div><h5>LEARN</h5><p>Discover people who share knowledge you want to build.</p><div class="exp-match"><div class="mini-avatar">NT</div><div><b>Nadia Thomas</b><small>Data \xB7 Analytics</small></div></div><div class="exp-tagrow"><span class="exp-tag">Data</span><span class="exp-tag">Mentoring</span></div><em class="exp-go">Open Learn \u2192</em></div>
        </div>
        <div class="exp-panel" style="margin-top:14px"><div class="exp-panel-label">Your profile signals</div><div class="exp-table"><div class="exp-table-row"><strong>What I can help with</strong><span>Platform delivery</span><b class="exp-pill">Visible</b></div><div class="exp-table-row"><strong>What I want to learn</strong><span>Applied AI</span><b class="exp-pill">Visible</b></div><div class="exp-table-row"><strong>How I want to connect</strong><span>Meet \xB7 Help</span><b class="exp-pill">Private controls</b></div></div></div>
      `,"Find people":`
        <div class="exp-main-head">
          <div><small>FIND PEOPLE</small><h4>What do you need today?</h4><p>Pick an intent, or describe what you need \u2014 HiveConnect finds the right colleague and explains why.</p></div>
          ${N}
        </div>
        <div class="exp-search"><span>Describe what you need\u2026</span><b>\u2315</b></div>
        <div class="exp-grid-2">
          <div class="exp-panel" data-screen="Meet"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#meet"></use></svg></span><div class="exp-panel-label">Social connection</div><h5>MEET</h5><p>Coffee, lunch, a conversation with someone new.</p><em class="exp-go">Open \u2192</em></div>
          <div class="exp-panel" data-screen="Help"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#help"></use></svg></span><div class="exp-panel-label">Expertise</div><h5>HELP</h5><p>Find a colleague who has opted in to help with this.</p><em class="exp-go">Open \u2192</em></div>
          <div class="exp-panel" data-screen="Learn"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#learn"></use></svg></span><div class="exp-panel-label">Growth</div><h5>LEARN</h5><p>Mentors and specialists who can teach you something.</p><em class="exp-go">Open \u2192</em></div>
          <div class="exp-panel" data-screen="Belong"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#belong"></use></svg></span><div class="exp-panel-label">Community</div><h5>BELONG</h5><p>Meet people outside your usual team or office.</p><em class="exp-go">Open \u2192</em></div>
        </div>
        <div class="exp-footnote">Every recommendation carries a visible reason. The employee always chooses.</div>
      `,Meet:`
        <div class="exp-main-head">
          <div><small>MEET</small><h4>People worth knowing.</h4><p>Suggestions built from interests, role and intent \u2014 never from private content.</p></div>
          ${N}
        </div>
        <div class="exp-grid-2">
          <div class="exp-panel">
            <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">SK</div><div><b>Samira Khan</b><small>Transformation \xB7 London</small></div></div><b class="exp-pill">88% match</b></div>
            <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
            <ul class="exp-why"><li>Shared interest in AI strategy and change</li><li>Both opted in to Meet this week</li><li>In the London office on the same days</li></ul>
            <div class="exp-actions"><button type="button" class="exp-btn">Say hello</button><button type="button" class="exp-btn ghost">Not now</button></div>
          </div>
          <div class="exp-panel">
            <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">DO</div><div><b>Daniel Obi</b><small>Design \xB7 Remote</small></div></div><b class="exp-pill">81% match</b></div>
            <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
            <ul class="exp-why"><li>You both joined in the last six months</li><li>Daniel hosts a fortnightly virtual coffee</li><li>Overlapping interest in facilitation</li></ul>
            <div class="exp-actions"><button type="button" class="exp-btn">Say hello</button><button type="button" class="exp-btn ghost">Not now</button></div>
          </div>
        </div>
        <div class="exp-footnote">Illustrative people and matches. A suggestion is never a connection \u2014 both sides choose.</div>
      `,Help:`
        <div class="exp-main-head">
          <div><small>HELP</small><h4>Find the right expertise.</h4><p>Colleagues who have opted in to help \u2014 matched to what you asked for.</p></div>
          ${N}
        </div>
        <div class="exp-search filled"><span>Kubernetes networking on AWS</span><b>\u2315</b></div>
        <div class="exp-panel">
          <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">JM</div><div><b>James Morgan</b><small>Cloud \xB7 Platform engineering</small></div></div><b class="exp-pill">91% match</b></div>
          <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
          <ul class="exp-why"><li>You asked for help with Kubernetes networking</li><li>James opted in to help with AWS and Kubernetes</li><li>Same working hours \u2014 available this week</li><li>Two shared connections in Platform engineering</li></ul>
          <div class="exp-tagrow"><span class="exp-tag">AWS</span><span class="exp-tag">Kubernetes</span><span class="exp-tag">Networking</span></div>
          <div class="exp-actions"><button type="button" class="exp-btn">Ask for help</button><button type="button" class="exp-btn ghost">Not this time</button></div>
        </div>
        <div class="exp-panel-label" style="margin:16px 0 8px">More people who can help</div>
        <div class="exp-ideas">
          <div class="exp-idea"><div class="exp-idea-icon">PN</div><div><b>Priya Nair</b><small>Security engineering \xB7 opted in: network policy, security groups</small></div><em>84% match</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">CD</div><div><b>Chris Dale</b><small>SRE \xB7 opted in: EKS operations, incident response</small></div><em>79% match</em></div>
        </div>
        <div class="exp-footnote">Recommendations respect organisational boundaries and consent \u2014 only colleagues who opted in appear.</div>
      `,Learn:`
        <div class="exp-main-head">
          <div><small>LEARN</small><h4>People who can teach you.</h4><p>Mentors and specialists who chose to share what they know.</p></div>
          ${N}
        </div>
        <div class="exp-panel">
          <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">NT</div><div><b>Nadia Thomas</b><small>Data \xB7 Analytics</small></div></div><b class="exp-pill">95% match</b></div>
          <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
          <ul class="exp-why"><li>You want to build applied data skills</li><li>Nadia opted in to mentor on data and analytics</li><li>Mentoring one person now \u2014 has capacity for one more</li></ul>
          <div class="exp-tagrow"><span class="exp-tag">Data</span><span class="exp-tag">Analytics</span><span class="exp-tag">Mentoring</span></div>
          <div class="exp-actions"><button type="button" class="exp-btn">Request mentoring</button><button type="button" class="exp-btn ghost">Not now</button></div>
        </div>
        <div class="exp-ideas" style="margin-top:12px">
          <div class="exp-idea" data-screen="Belong"><div class="exp-idea-icon">DG</div><div><b>Prefer learning in a group?</b><small>The Data Guild runs a monthly open show-and-tell</small></div><em>See Belong \u2192</em></div>
        </div>
        <div class="exp-footnote">Learning connections start small: one conversation, then both sides decide whether to continue.</div>
      `,Belong:`
        <div class="exp-main-head">
          <div><small>BELONG</small><h4>Find where you fit.</h4><p>Communities and circles beyond your immediate team.</p></div>
          ${N}
        </div>
        <div class="exp-ideas">
          <div class="exp-idea"><div class="exp-idea-icon">CC</div><div><b>Cross-Team Coffee Circle</b><small>12 members \xB7 meets biweekly \xB7 3 members in your building</small></div><em>Join \u2192</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">NJ</div><div><b>New Joiners \xB7 London</b><small>23 members \xB7 weekly \xB7 for everyone in their first year</small></div><em>Join \u2192</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">DG</div><div><b>Data Guild</b><small>31 members \xB7 monthly \xB7 open show-and-tell sessions</small></div><em>Join \u2192</em></div>
        </div>
        <div class="exp-footnote">Communities are open by invitation of the organisation \u2014 membership is always the employee's choice.</div>
      `}},risk:{code:"HR / HIVE RISK",brand:"HIVE RISK",mark:"mark-risk",app:"HiveRisk",get side(){return window.HiveRisk.side},get icons(){return window.HiveRisk.icons},get colors(){return window.HiveRisk.colors},get start(){return window.HiveRisk.start}},ventures:{code:"HV / HIVE VENTURES",brand:"HIVE VENTURES",mark:"mark-ventures",app:"HiveVentures",get side(){return window.HiveVentures.side},get icons(){return window.HiveVentures.icons},get colors(){return window.HiveVentures.colors},get start(){return window.HiveVentures.start}}};let I=null;function U(u){const h=W[I],b=document.querySelector(".exp-main");if(!h||!b)return;const y=h.app&&window[h.app];if(y)y.onScreen=T,y.render(u,b);else{if(!h.screens[u])return;b.innerHTML=h.screens[u]}T(u)}function T(u){const h=W[I];if(!h)return;document.querySelectorAll(".exp-side-nav [data-screen]").forEach(w=>{w.classList.toggle("active",w.dataset.screen===u)});const b=document.querySelector(".exp-side-nav"),y=b&&b.querySelector(".active");if(y&&b.scrollWidth>b.clientWidth){const w=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,k=y.getBoundingClientRect(),R=b.getBoundingClientRect();b.scrollTo({left:b.scrollLeft+k.left-R.left-(b.clientWidth-k.width)/2,behavior:w?"smooth":"auto"})}const g=document.querySelector(".exp-window-title");g&&(g.textContent=`${h.code} \xB7 ${u.toUpperCase()}`)}const r={connect:"HiveConnect",risk:"HiveRisk",ventures:"HiveVentures"},n=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;let v=null;function E(u){const h=W[u],b=document.querySelector(".exp-window");b.innerHTML=`
    <div class="exp-window-bar"><i></i><i></i><i></i><span class="exp-window-title">${h.code} \xB7 End-user product preview</span><button type="button" class="exp-expand" data-focus-demo="${u}" aria-label="Open ${r[u]} full screen"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#expand"></use></svg>Full screen</button><span class="exp-preview-label">ILLUSTRATIVE</span></div>
    <div class="exp-app">
      <aside class="exp-side">
        <div class="exp-brandline"><img src="assets/images/web/${h.mark}.jpg" alt="">${h.brand}</div>
        <div class="exp-side-nav">${h.side.map((y,g)=>`<button type="button" data-screen="${y}" style="--i:${g};--c:${(h.colors||{})[y]||"#1687ff"}"><span class="side-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${h.icons[y]}"></use></svg></span><span class="side-label">${y}</span><span class="side-badge" hidden></span></button>`).join("")}</div>
        <div class="exp-side-foot">This is an interactive visual preview of the intended product experience.<br><b>Demo data only.</b></div>
      </aside>
      <section class="exp-main"></section>
    </div>
  `,b.dataset.demo=u,b.setAttribute("aria-label",`${h.code} interactive product preview`),U(h.start)}function A(u,h={}){const b=W[u],y=document.querySelector(".exp-window");if(!b||!y)return;const g=I!==null&&I!==u;if(I=u,document.querySelectorAll(".exp-choice").forEach(w=>{const k=w.dataset.demo===u;w.classList.toggle("active",k);const R=w.querySelector(".exp-pick");R&&R.setAttribute("aria-pressed",String(k)),k&&g&&!n()&&(w.classList.remove("just-picked"),w.offsetWidth,w.classList.add("just-picked"),setTimeout(()=>w.classList.remove("just-picked"),900))}),document.querySelectorAll(".df-tabs [data-df]").forEach(w=>w.setAttribute("aria-pressed",String(w.dataset.df===u))),clearTimeout(v),!g||h.instant||n()){y.classList.remove("swapping","entering"),E(u);return}y.classList.remove("entering"),y.classList.add("swapping"),v=setTimeout(()=>{E(u),y.classList.remove("swapping"),y.offsetWidth,y.classList.add("entering"),v=setTimeout(()=>y.classList.remove("entering"),900)},190)}const o={el:null,placeholder:null,lastFocus:null,open:!1,timer:null};function K(){const u=document.createElement("div");return u.className="demo-focus",u.hidden=!0,u.setAttribute("role","dialog"),u.setAttribute("aria-modal","true"),u.setAttribute("aria-label","Hive Intelligence interactive demo"),u.innerHTML=`
    <div class="df-backdrop"></div>
    <div class="df-shell">
      <div class="df-bar">
        <div class="df-brand"><img src="assets/images/web/ligeronex-mark.jpg" alt="">Hive Intelligence<span>Interactive demo</span></div>
        <div class="df-tabs" role="group" aria-label="Switch product">${Object.keys(r).map(h=>`<button type="button" data-df="${h}" aria-pressed="${h===I}">${r[h]}</button>`).join("")}</div>
        <button type="button" class="df-close" aria-label="Exit full-screen demo">Exit<kbd>Esc</kbd><span aria-hidden="true">\u2715</span></button>
      </div>
      <div class="df-slot"></div>
    </div>`,document.body.appendChild(u),u.addEventListener("click",h=>{const b=h.target.closest("[data-df]");if(b){A(b.dataset.df);return}(h.target.closest(".df-close")||h.target.classList.contains("df-backdrop"))&&O()}),u}function M(u){[".nav-wrap","main","footer"].forEach(h=>{const b=document.querySelector(h);b&&(b.inert=u)})}function $(u,h){const b=document.querySelector(".exp-workspace");b&&(u&&u!==I&&A(u,{instant:!0}),!o.open&&(clearTimeout(o.timer),o.el=o.el||K(),o.lastFocus=h||document.activeElement,o.el.contains(b)||(o.placeholder=o.placeholder||Object.assign(document.createElement("div"),{className:"exp-workspace-placeholder"}),o.placeholder.style.height=b.offsetHeight+"px",b.before(o.placeholder),o.el.querySelector(".df-slot").appendChild(b)),o.el.querySelectorAll("[data-df]").forEach(y=>y.setAttribute("aria-pressed",String(y.dataset.df===I))),document.documentElement.classList.add("df-lock"),M(!0),o.el.hidden=!1,o.open=!0,o.el.offsetWidth,o.el.classList.add("open"),o.el.querySelector(".df-close").focus({preventScroll:!0})))}function O(){o.open&&(o.open=!1,o.el.classList.remove("open"),o.timer=setTimeout(()=>{const u=o.el.querySelector(".exp-workspace");u&&o.placeholder&&o.placeholder.parentNode&&o.placeholder.replaceWith(u),o.el.hidden=!0,document.documentElement.classList.remove("df-lock"),M(!1),o.lastFocus&&o.lastFocus.isConnected&&o.lastFocus.focus({preventScroll:!0})},n()?0:340))}const q=document.querySelector(".experience-section");if(q){const u=document.querySelector(".exp-window");u.addEventListener("click",h=>{const b=h.target.closest("[data-screen]");!b||!u.contains(b)||U(b.dataset.screen)}),u.addEventListener("keydown",h=>{if(h.key!=="Enter"&&h.key!==" ")return;const b=h.target.closest("[data-screen]");!b||b.tagName==="BUTTON"||(h.preventDefault(),U(b.dataset.screen))}),document.querySelectorAll(".exp-pick").forEach(h=>{h.addEventListener("click",()=>A(h.closest(".exp-choice").dataset.demo))}),document.addEventListener("click",h=>{const b=h.target.closest("[data-focus-demo]");!b||o.open||(h.preventDefault(),$(b.dataset.focusDemo,b))}),document.addEventListener("keydown",h=>{if(h.key!=="Escape"||!o.open)return;h.preventDefault();const b=o.el.querySelector(".hc-drawer .hc-close");if(b){h.stopPropagation(),b.click();return}O()},!0),document.querySelectorAll("[data-open-demo]").forEach(h=>{h.addEventListener("click",b=>{const y=h.dataset.openDemo;W[y]&&(b.preventDefault(),A(y),q.scrollIntoView({behavior:"smooth",block:"start"}))})}),A("connect")}document.querySelectorAll('a[href^="#"]').forEach(u=>{u.addEventListener("click",()=>{window.innerWidth<=850&&S()})})})();
