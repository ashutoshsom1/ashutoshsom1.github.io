// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Production-grade enterprise AI systems, autonomous multi-agent state machines, and high-throughput RAG architectures.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-insights",
          title: "insights",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae of Ashutosh Somvanshi — Senior AI Engineer &amp; GenAI Systems Architect. Specializing in enterprise LLMs, autonomous multi-agent state machines (LangGraph, MCP), production hybrid RAG, and cloud AI systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-systems-design-with-claude-3-5-amp-model-context-protocol-mcp",
      
        title: "Systems Design with Claude 3.5 &amp; Model Context Protocol (MCP)",
      
      description: "Practical architectural patterns for orchestrating Claude Agent SDK, Model Context Protocol (MCP) servers, and enterprise multi-agent workflows.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/anthropic-claude-architect-journey/";
        
      },
    },{id: "post-why-enterprise-production-ai-needs-deterministic-langgraph-stategraphs",
      
        title: "Why Enterprise Production AI Needs Deterministic LangGraph StateGraphs",
      
      description: "Moving beyond naive single-prompt ReAct loops to production-grade cyclic state machines with persistent checkpointing and Human-in-the-Loop gates.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/agentic-ai-langgraph-state-machines/";
        
      },
    },{id: "post-engineering-sub-500ms-enterprise-hybrid-rag",
      
        title: "Engineering Sub-500ms Enterprise Hybrid RAG",
      
      description: "Deep-dive into building production-grade Hybrid Retrieval-Augmented Generation using BM25, Dense Vector Search, Reciprocal Rank Fusion, and Cross-Encoder reranking.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/enterprise-hybrid-rag-bm25-dense/";
        
      },
    },{id: "post-revolutionizing-tabular-data-analysis-with-gpt-models",
      
        title: "Revolutionizing Tabular Data Analysis with GPT Models",
      
      description: "Exploring innovative approaches to overcome challenges in GPT model applications for tabular data decision-making",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ai-tabular-data-revolution/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-new-chapter-at-nihilent-39-s-ai-center-of-excellence-coe",
          title: 'New Chapter at Nihilent&amp;#39;s AI Center of Excellence (CoE)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-earned-credentials-in-design-stateful-agentic-loops-with-microsoft-foundry-agent-service-and-design-overall-ai-strategy-for-business-solutions-via-microsoft-learn-microsoftai-azureai-agenticai-microsoftfoundry",
          title: '⚡ Earned credentials in “Design stateful agentic loops with Microsoft Foundry Agent Service”...',
          description: "",
          section: "News",},{id: "news-officially-earned-the-claude-certified-architect-foundations-credential-from-anthropic-validating-the-architectural-capability-to-design-build-and-deliver-production-grade-ai-solutions-with-claude-the-claude-agent-sdk-and-model-context-protocol-mcp-claudecertified",
          title: '🏆 Officially earned the Claude Certified Architect (Foundations) credential from Anthropic! Validating the...',
          description: "",
          section: "News",},{id: "projects-enterprise-cognitive-hybrid-rag-platform",
          title: 'Enterprise Cognitive Hybrid RAG Platform',
          description: "High-throughput enterprise knowledge engine combining Dense Vector &amp; BM25 Sparse Search with Cross-Encoder reranking, Redis semantic cache, and sub-500ms P99 latency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-multi-agent-autonomous-incident-triage-engine",
          title: 'Multi-Agent Autonomous Incident Triage Engine',
          description: "Fault-tolerant multi-agent state machine using LangGraph and Model Context Protocol (MCP) with Human-in-the-Loop Slack approval gates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-enterprise-microsoft-365-copilot-amp-dynamics-ai-ecosystem",
          title: 'Enterprise Microsoft 365 Copilot &amp;amp; Dynamics AI Ecosystem',
          description: "Production conversational copilot platform integrated across Microsoft Teams, SharePoint, and Dynamics 365 serving 5,000+ enterprise users with a 95% resolution rate.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%68%75%74%6F%73%68%73%6F%6D%76%61%6E%73%68%69%32%34%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ashutoshsom1", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/ashutoshsomvanshi1", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ashutosh-somvanshi-ai", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
