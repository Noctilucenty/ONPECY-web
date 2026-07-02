/* ONPECY i18n — whole-page EN / 中文 toggle, no dependencies.
   English is the inline default in the HTML; Chinese is applied on demand.
   Brand/product terms (ONPECY, ALLCPR, OPC, AI, CRM, SaaS, SEO…) stay English. */
(function () {
  'use strict';

  var ZH = {
    // nav
    nav_platforms: '平台', nav_how: '课程流程', nav_tracks: '方向', nav_models: '业务模型', nav_faq: '常见问题', nav_who: '适合人群',
    cta_apply: '立即申请', cta_seehow: '了解运作方式',
    // hero
    hero_eyebrow: '申请制 AI 商业孵化器 · 硅谷',
    hero_t1: '打造你的 ', hero_t2: 'AI 驱动', hero_t3: '一人公司。',
    hero_sub: 'ONPECY 是一所申请制 AI 商业孵化器。学生在这里学习搭建真实的工作流、AI 智能体与商业模型 —— 依托连接教育、安全、健康与自动化领域的运营平台。',
    chip_platforms: '真实平台', chip_workflows: 'AI 工作流', chip_incubation: '商业孵化', chip_ecosystem: '硅谷生态',
    flow_start: '起点', flow_you: '你', flow_aiteam: 'AI 团队', flow_workflow: '工作流', flow_automation: '自动化', flow_outcome: '成果', flow_company: '你的公司',
    // proof
    proof_eyebrow: '真实性证明',
    proof_t1: '围绕', proof_t2: '真实运营平台构建。',
    proof_lead: 'ONPECY 不是纸上谈兵的课程。学生在与真实运营机构相连的工作流中动手实践 —— 覆盖安全、教育、健康与企业知识领域。',
    plat_allcpr_tag: '社区安全', plat_allcpr_text: '社区安全与 CPR / BLS 培训运营、认证及培训中心管理。',
    plat_usj_tag: '教育', plat_usj_text: '面向全球的教育、招生、职业与学生服务工作流。',
    plat_sviht_tag: '健康科技', plat_sviht_text: '覆盖社区与会员模式的健康、养生与知识项目。',
    plat_ssi_tag: '安全情报', plat_ssi_text: '安全、知识管理与企业文档及咨询系统。',
    // build
    build_t1: '学生不只是学习 AI，', build_t2: '而是搭建 AI 商业系统。',
    build_lead: '课程与孵化器的区别在于结课时你拥有什么。ONPECY 的学生带走的是可运行的系统，而不只是笔记。',
    build_agents_t: 'AI 智能体', build_agents_p: '配置一支智能体团队，运转一家企业的各个环节。',
    build_flows_t: '自动化工作流', build_flows_p: '把真实业务端到端打通，让一个人也能像一个小团队一样运转。',
    build_models_t: '商业模型', build_models_p: '把可复制的工作流变成一项你能运营的聚焦服务。',
    // how
    how_t1: '课程如何', how_t2: '运作。',
    how_lead: '四个阶段，从学习工具栈到运营一家一人公司。',
    how_s1_t: '学习 AI 商业工具栈', how_s1_p: '掌握真实运营者所用的工具 —— 模型、自动化、CRM 与知识库。',
    how_s2_t: '在真实工作流中实践', how_s2_p: '用取自 ONPECY 运营平台的真实业务案例练习，而非玩具式练习。',
    how_s3_t: '启动一人公司模型', how_s3_p: '选择一个聚焦方向，搭建可复制、可真正运营的服务或系统。',
    how_s4_t: '运营并扩展', how_s4_p: '把工作流作为业务来运营，借助 AI 智能体与自动化扩展产能。',
    // tracks
    tracks_t1: '四个方向。', tracks_t2: '一条聚焦路径。',
    tracks_lead: '每个方向对应一个真实平台和一类清晰的可搭建业务。',
    track_allcpr: '社区安全、培训中心与认证业务。',
    track_usj: '招生、面试与职业服务工作室。',
    track_sviht: '健康知识、养生与社区项目。',
    track_ssi: '安全情报、知识管理与企业系统。',
    explore_models: '查看模型 →',
    // featured
    feat_t1: '精选 ', feat_t2: 'OPC 模型。',
    feat_lead: '聚焦呈现学生所搭建的成果。四个方向下共有 14 个模型 —— 以下为其中最受欢迎的六个。',
    feat_m4: '运营一家 AI 驱动的营销工作室，负责内容、SEO/GEO 与网站。',
    feat_m9: '前置部署路径 —— 落地实施 AI 工作流、自动化与知识库。',
    feat_m1: '运营一家培训中心，提供 CPR、BLS 与企业培训。',
    feat_m8: '搭建一家 AI 职业发展工作室，服务简历、辅导与求职指导。',
    feat_m10: '围绕一个聚焦的健康主题，搭建知识与会员业务。',
    feat_m11: '与本地伙伴合作，运营一个城市级的健康社区项目。',
    feat_viewall: '查看全部 14 个 OPC 模型 →',
    channels_label: '学生将学习搭建的潜在营收渠道',
    channels_disc: 'ONPECY 教授营收模型的运作原理。收入无法保证，取决于执行、获客、市场环境与经营表现。',
    // who
    who_t1: 'ONPECY 适合', who_t2: '这些人。',
    who_1_t: '想要的不止是理论的学生', who_1_p: '想动手搭建真实 AI 工作流，而不只是看课的人。',
    who_2_t: '未来的创业者', who_2_p: '想把技能变成可运营商业模型的人。',
    who_3_t: '运营者与构建者', who_3_p: '对自动化、营销、教育、健康与安全感兴趣的人。',
    who_4_t: '国际学生', who_4_p: '想获得硅谷式商业视野与实践的人。',
    // why
    why_eyebrow: '差异所在', why_title: '不是一门普通的 AI 课程。',
    why_lead: 'ONPECY 旨在培养运营者，而非证书持有者。',
    why_1: '申请制录取，而非开放报名。',
    why_2: '围绕真实商业平台，而非假设情境。',
    why_3: '专注工作流的执行，而不只是听课。',
    why_4: '学生搭建可用的 AI 智能体系统。',
    why_5: '以商业模型为核心，而非以证书为核心。',
    // ecosystem
    eco_t1: '生态与', eco_t2: '平台。',
    eco_lead: '与我们培训环境相关联的平台与机构，以及学生所学习的标准。',
    eco_disc: '各标志与商标归其各自所有者所有。其出现用以指代学生所接触的培训标准与工具，本身并不表示赞助或背书。',
    // faq
    faq_t1: '你的疑问，', faq_t2: '在此解答。',
    faq_q1: 'ONPECY 是课程还是孵化器？',
    faq_a1: '是孵化器。课程内容存在，但目标是一套可运行的商业系统 —— AI 智能体、工作流与一人公司模型 —— 而不是一张证书。',
    faq_q2: '学生需要编程经验吗？',
    faq_a2: '不需要。学生使用 AI 工具、自动化平台与无代码/低代码工作流来搭建。重点是运营系统，而非手写全部代码。',
    faq_q3: '收入有保证吗？',
    faq_a3: '没有。ONPECY 教授营收模型如何运作以及如何搭建。实际收入取决于执行、获客、市场环境与经营表现。',
    faq_q4: '学生会接触哪些平台？',
    faq_a4: '与 ALLCPR、USJ、SVIHT 和 SSI 相连的工作流，使用的工具栈包括 ChatGPT、Claude、Gemini、Cursor、自动化工具以及 CRM / 知识库系统。',
    faq_q5: '谁来评审学生的作品？',
    faq_a5: '作品在真实工作流中构建，并对照相关平台的实际运营方式来评审，因此反馈是务实的，而非纸上谈兵。',
    faq_q6: '我该如何申请？',
    faq_a6: '录取为申请制。点击“立即申请”开始；符合条件的申请者将获邀继续后续流程。',
    // final cta
    cta_t1: '打造真正', cta_t2: '落地的东西。',
    cta_copy: 'ONPECY 帮助学生把 AI 技能变成工作流，把工作流变成服务，再把服务变成一家一人公司 —— 用一支 AI 团队，而不是一份工资单。',
    cta_s1: '一个人。', cta_s2: '一支 AI 团队。', cta_s3: '一家企业。',
    // footer
    footer_tag: 'AI 驱动的一人公司孵化器。',
    footer_legal: '© 2026 ONPECY —— AI 驱动的一人公司孵化器。收入无法保证，取决于执行与市场环境。',

    // ---- models.html ----
    models_back: '← 返回首页',
    models_title: '14 个 OPC 业务模型。',
    models_lead: '每个模型都是学生可借助 AI 团队运营的聚焦业务，按 ONPECY 四大方向分组。录取为申请制；收入无法保证。',
    models_apply: '立即申请',

    // ---- apply.html ----
    apply_back: '← 返回首页',
    apply_eyebrow: '申请制录取',
    apply_title: '申请加入 ONPECY。',
    apply_lead: '告诉我们一些关于你的信息。符合条件的申请者将获邀继续后续流程。',
    apply_p1_t: '接下来会发生什么', apply_p1_d: '我们会审阅你的申请，符合条件者将收到后续步骤的邮件。',
    apply_p2_t: '你需要准备什么', apply_p2_d: '无需编程经验 —— 只需一份认真、真实的申请。',
    apply_p3_t: '你将构建什么', apply_p3_d: '真实的 AI 工作流、智能体与一人公司业务模型。',
    f_name: '姓名', f_email: '邮箱', f_phone: '电话（选填）', f_country: '国家 / 城市',
    f_track: '感兴趣的方向', f_track_ph: '请选择一个方向…', f_track_unsure: '还不确定',
    f_bg: '你的背景', f_bg_ph: '简单介绍你的学习或工作背景。',
    f_why: '你为什么想加入 ONPECY？', f_why_ph: '你想构建什么？',
    f_consent: '我同意 ONPECY 就我的申请与我联系。',
    f_submit: '提交申请', f_sending: '提交中…',
    f_ok_t: '申请已收到。', f_ok_d: '谢谢。若你的申请符合条件，我们会通过邮件联系你。',
    f_err: '提交出现问题。请重试，或直接邮件联系我们。',
    f_required: '必填'
  };

  var STORE = 'onpecy_lang';
  var current = 'en';

  function apply(lang) {
    current = lang;
    var dict = lang === 'zh' ? ZH : null;
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!el.hasAttribute('data-en')) el.setAttribute('data-en', el.textContent);
      if (dict && dict[key] != null) el.textContent = dict[key];
      else el.textContent = el.getAttribute('data-en');
    });
    // placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (!el.hasAttribute('data-en-ph')) el.setAttribute('data-en-ph', el.getAttribute('placeholder') || '');
      if (dict && dict[key] != null) el.setAttribute('placeholder', dict[key]);
      else el.setAttribute('placeholder', el.getAttribute('data-en-ph'));
    });
    document.body.classList.toggle('lang-zh', lang === 'zh');
    var label = lang === 'zh' ? 'EN' : '中文';
    document.querySelectorAll('.langtoggle').forEach(function (b) { b.textContent = label; });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    // let other scripts (e.g. form messages) know
    window.ONPECY_LANG = lang;
  }

  function toggle() { apply(current === 'zh' ? 'en' : 'zh'); }

  function init() {
    var saved = 'en';
    try { saved = localStorage.getItem(STORE) || 'en'; } catch (e) {}
    apply(saved);
    document.querySelectorAll('.langtoggle').forEach(function (b) {
      b.addEventListener('click', toggle);
    });
  }

  // expose current dictionary lookup for other scripts
  window.ONPECY_T = function (key) {
    return (current === 'zh' && ZH[key] != null) ? ZH[key] : null;
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
