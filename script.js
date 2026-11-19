const menu=document.querySelector('.menu');const nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));document.querySelector('#year').textContent=new Date().getFullYear();

// Both languages share the same project data.
(() => {
  const items = Array.isArray(window.KM_PORTFOLIO) ? window.KM_PORTFOLIO : [];
  const english = document.documentElement.lang === 'en';
  const assetPrefix = english ? '../' : '';
  const projectList = document.getElementById('portfolio-list');
  const detail = document.getElementById('project-detail');

  function localized(item, key) {
    return (english && item[key + '_en']) || item[key];
  }

  function append(parent, tag, text) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    parent.appendChild(node);
    return node;
  }

  function addImage(parent, item) {
    if (!item.image) return;
    const image = append(parent, 'img');
    image.src = assetPrefix + item.image;
    image.alt = localized(item, 'imageAlt') || localized(item, 'title');
    image.loading = 'lazy';
  }

  if (projectList) {
    for (const item of items) {
      const card = append(projectList, 'article');
      card.className = 'portfolio-card';
      const link = append(card, 'a');
      link.href = 'project.html?id=' + encodeURIComponent(item.id);
      addImage(link, item);
      const body = append(link, 'div');
      body.className = 'portfolio-card-body';
      append(body, 'h3', localized(item, 'title'));
      append(body, 'p', localized(item, 'description'));
      append(body, 'p', item.technologies).className = 'portfolio-technology';
      append(body, 'span', english ? 'View project →' : '詳細を見る →');
    }
    document.getElementById('portfolio-empty').hidden = items.length > 0;
  }

  if (detail) {
    const id = new URLSearchParams(location.search).get('id');
    const item = items.find(project => project.id === id);
    const languageLink = document.querySelector('.lang-switch');
    if (!item) {
      languageLink.href = english ? '../index.html#portfolio' : 'en/index.html#portfolio';
      return;
    }

    languageLink.search = new URLSearchParams({ id }).toString();
    const title = localized(item, 'title');
    document.title = title + ' | ' + (english ? 'KM SystemWorks' : 'KMシステムワークス');

    detail.replaceChildren();
    append(detail, 'h1', title);
    append(detail, 'h2', english ? 'Overview' : 'システム概要');
    append(detail, 'p', localized(item, 'description'));
    append(detail, 'h2', english ? 'Technologies' : '使用技術');
    append(detail, 'p', item.technologies);
    append(detail, 'h2', english ? 'Key features' : '主な機能');
    const features = append(detail, 'ul');
    for (const feature of localized(item, 'features')) {
      append(features, 'li', feature);
    }
    append(detail, 'h2', english ? 'Scope of work' : '担当範囲');
    append(detail, 'p', localized(item, 'role'));
    const screenshots = item.screenshots ?? (item.image ? [item] : []);
    const availableScreenshots = screenshots.filter(screenshot => screenshot?.image);
    if (availableScreenshots.length) {
      append(detail, 'h2', english ? 'Application screenshots' : 'システム画面');
      for (const screenshot of availableScreenshots) {
        const figure = append(detail, 'figure');
        addImage(figure, screenshot);
        const caption = localized(screenshot, 'imageAlt');
        if (caption) append(figure, 'figcaption', caption);
      }
    }
  }
})();
