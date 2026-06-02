const seed = [
      ["GH", "GitHub", "Code experiments", "#", "wide"],
      ["CV", "Resume", "Download the latest CV", "#", "small"],
      ["WR", "Writing", "Notes and articles", "#", "tall"],
      ["YT", "Videos", "Build logs and demos", "#", "small"],
      ["IN", "LinkedIn", "Professional updates", "#", "small"],
      ["EM", "Email", "Start a conversation", "mailto:hello@example.com", "wide"]
    ];
    const links = document.querySelector("#links");
    const analytics = document.querySelector("#analytics");
    const counts = JSON.parse(localStorage.bentoClicks || "{}");
    function save() { localStorage.bentoClicks = JSON.stringify(counts); }
    function renderLinks() {
      links.innerHTML = seed.map(([icon,title,desc,url,size]) => `<a class="card ${size}" href="${url}" data-title="${title}"><span class="icon">${icon}</span><strong>${title}</strong><span>${desc}</span></a>`).join("");
    }
    function renderStats() {
      const max = Math.max(1, ...seed.map(x => counts[x[1]] || 0));
      analytics.innerHTML = seed.map(x => {
        const value = counts[x[1]] || 0;
        return `<div><strong>${x[1]}</strong> <span>${value}</span><div class="bar"><span style="width:${value / max * 100}%"></span></div></div>`;
      }).join("");
    }
    links.addEventListener("click", e => {
      const card = e.target.closest(".card");
      if (!card) return;
      counts[card.dataset.title] = (counts[card.dataset.title] || 0) + 1;
      save(); renderStats();
    });
    document.querySelector("#reset").onclick = () => { Object.keys(counts).forEach(k => delete counts[k]); save(); renderStats(); };
    document.querySelector("#theme").onchange = e => {
      const themes = {
        ocean:["#101215","#5eead4","#f59e0b"],
        sunset:["#17120f","#fb7185","#fbbf24"],
        mono:["#111111","#f5f5f5","#8b949e"]
      };
      const [bg,a,b] = themes[e.target.value];
      document.documentElement.style.setProperty("--bg", bg);
      document.documentElement.style.setProperty("--accent", a);
      document.documentElement.style.setProperty("--accent2", b);
    };
    for (const id of ["Name","Bio"]) {
      document.querySelector(`#edit${id}`).addEventListener("input", e => document.querySelector(`#${id.toLowerCase()}`).textContent = e.target.value);
    }
    renderLinks(); renderStats();

