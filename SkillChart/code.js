(() => {
  // levelinfo.tsx
  var levelDescriptions = [
    {
      skill: "Product",
      level: "1",
      description: "Product L1\n\nYou ask good questions to understand who you're building for and why.\n\nYou push for clarity and seek help if you don't get it.\n\nYou're starting to flag dependencies and edge cases and question requirements when you're unsure how they support real user needs."
    },
    {
      skill: "Product",
      level: "2",
      description: "Product L2\n\nYou notice overlaps or dependencies between projects and escalate conversations to resolve them.\n\nYou build confidence in a direction with your eng/PM partners before acting."
    },
    {
      skill: "Product",
      level: "3",
      description: "Product L3\n\nYou proactively address and resolve dependencies across team boundaries.\n\nYou drive your own team toward clarity on what you're building, why, and for whom."
    },
    {
      skill: "Product",
      level: "4",
      description: "Product L4\n\nYou handle very complex and ambiguous projects, defining requirements and prioritizing the most impactful workstreams even in the face of multiple competing demands."
    },
    {
      skill: "Product",
      level: "5",
      description: "Product L5\n\nYou set the gold standard for problem definition; your ability to frame and scope projects are consistently clear, thoughtful, and compelling.\n\nYou coach other designers on prioritization, managing dependencies, and requirements definition."
    },
    {
      skill: "Research",
      level: "1",
      description: "Research L1\n\nYou're building your knowledge of the competitive landscape by spending time with other tools (e.g. conducting audits).\n\nYou have a basic understanding of when and how to validate your work through research.\n\nYou ask about success metrics."
    },
    {
      skill: "Research",
      level: "2",
      description: "Research L2\n\nYour industry knowledge and understanding of our users starts to deepen and guide your own work.\n\nYou partner with research to define the questions to ask and problems to explore.\n\nYou're able to interpret metrics and make data-informed decisions."
    },
    {
      skill: "Research",
      level: "3",
      description: "Research L3\n\nYou can do research to validate your own work if necessary.\n\nData guides your work, and you're able to suggest and question how to measure your work's success.\n\nYour comprehensive knowledge of industry design patterns deeply impacts your work."
    },
    {
      skill: "Research",
      level: "4",
      description: "Research L4\n\nYou know when data and research are missing, and garner them where appropriate to inform your work and the work of others.\n\nYou're an expert in Figma's product space; someone others on the team learn from and seek to emulate.\n\nYou surface new trends, patterns, and tools to the team regularly."
    },
    {
      skill: "Research",
      level: "5",
      description: "Research L5\n\nYou partner with our leads in data and research to identify ways of improving Figma's overall practices around them.\n\nYou leverage your knowledge of the industry to define new patterns and norms when needed; your work has impact beyond Figma."
    },
    {
      skill: "Vision",
      level: "1",
      description: "Vision L1\n\nYou participate in vision activities by generating ideas and helping mock up/frame concepts."
    },
    {
      skill: "Vision",
      level: "2",
      description: "Vision L2\n\nYou assist PMs and more senior designers/writers in bringing larger strategic vision work to life (e.g. by creating mocks, designing decks, and writing documents)."
    },
    {
      skill: "Vision",
      level: "3",
      description: "Vision L3\n\nYou're starting to develop your own POV; you're trusted to own parts of larger strategic vision, working independently or partnering with others to bring the vision to life.\n\nYou proactively organize sprints or other processes to further define vision if it's otherwise lacking."
    },
    {
      skill: "Vision",
      level: "4",
      description: "Vision L4\n\nYou set the vision for your area\u2014solo or with another senior designer/writer\u2014and it's inspiring and motivating to others.\n\nYou advocate for your POV at all levels of the organization (e.g. to executives) and can leverage data, storytelling, and visual design to bring stakeholders along."
    },
    {
      skill: "Vision",
      level: "5",
      description: "Vision L5\n\nYou uplevel other designers' and writers' vision work, and are entrusted to drive vision for the broadest, farthest-looking projects in the organization.\n\nYou help define what's next for Figma\u2014as a product, a business, and a company."
    },
    {
      skill: "Visual",
      level: "1",
      description: "Visual L1\n\nYou reference industry patterns in your work and are building your knowledge of Figma's design system.\n\nYou explore multiple solutions for problems, leveraging our design system for components and styles.Your designs strive for consistency with patterns throughout the product."
    },
    {
      skill: "Visual",
      level: "2",
      description: "Visual L2\n\nYou explore a wide breath of design options and articulate trade-offs with each.\n\nYou use industry patterns but know when something doesn't work and can be pushed further.\n\nYou are building your understanding on where our system can flex to accommodate certain needs."
    },
    {
      skill: "Visual",
      level: "3",
      description: "Visual L3\n\nYour work has few visual issues.\n\nYou start to form tenets as you design and fall back on them to help make decisions.\n\nYou consider all constraints (like dark mode and localization).\n\nYour work is thorough and complete when it comes to all interaction details (like hover/focus and shortcuts)."
    },
    {
      skill: "Visual",
      level: "4",
      description: "Visual L4\n\nYou work is thorough and complete with edge cases fully thought out\u2014a model of accuracy and precision.\n\nYou consider how your work and patterns can be utilized by others.\n\nYou are the owner for the design system of your focus area and effectively partner with the design systems team on the standards."
    },
    {
      skill: "Visual",
      level: "5",
      description: "Visual L5\n\nYou see gaps in how our visual system works and help uplevel it.\n\nWhen necessary, you define new patterns and changes to the underlying system.\n\nYour peers look to you for your help and guidance on visual design, and you regularly offer feedback to improve work outside your own."
    },
    {
      skill: "Interaction",
      level: "1",
      description: "Interaction L1\n\nYou start to prototype your ideas to bring work to life and illustrate flows more clearly.\n\nYou're eager to learn new tools and practices to improve the fidelity of your ideas."
    },
    {
      skill: "Interaction",
      level: "2",
      description: "Interaction L2\n\nYou go beyond click-through prototypes and incorporate animations and transitions across various interactions.\n\nYou are familiar with common industry interaction patterns and reference them in your work.\n\nYour prototypes start to feel more like the \u201Creal thing\u201D and are higher fidelity overall."
    },
    {
      skill: "Interaction",
      level: "3",
      description: "Interaction L3\n\nYou prototype fluently and quickly and you get helpful feedback from collaborators with them.\n\nYour work is thorough and complete when it comes to all interaction details (like hover/focus and keyboard shortcuts)."
    },
    {
      skill: "Interaction",
      level: "4",
      description: "Interaction L4\n\nYou prototype with intentionality and know when to utilize prototypes to effectively communicate your ideas.\n\nYou are well-versed in common industry interaction patterns and their nuances across platforms.\n\nYour prototypes help teams make business decisions."
    },
    {
      skill: "Interaction",
      level: "5",
      description: "Interaction L5\n\nYour interaction work defines the bar not just at Figma, but in the industry.\n\nYour peers look to you for guidance and feedback on improving their interaction work, and you proactively spot interaction issues and offer corrections.\n\nYou create frameworks and prototypes that inspire other people to do the same."
    },
    {
      skill: "Systems",
      level: "1",
      description: "Systems L1\n\nYou operate within a well-defined part of a complex system given documentation, and you ask for help when you need it.\n\nYou operate within a well-defined part of a complex system given documentation, and you ask for help when you need it.\n\nYou methodically investigate or audit part of a system, and summarize findings."
    },
    {
      skill: "Systems",
      level: "2",
      description: "Systems L2\n\nYou consider edge cases when designing for complex systems.\n\nYou document part of the complex system and onboard other people."
    },
    {
      skill: "Systems",
      level: "3",
      description: "Systems L3\n\nYour designs are holistic and consider complex cases of existing systems.\n\nYou can recall internal properties/style guides of systems and explain them to stakeholders.\n\nYou are comfortable collaborating with engineering and PM to understand a system completely and improve it."
    },
    {
      skill: "Systems",
      level: "4",
      description: "Systems L4\n\nYou aim to simplify and unify systems when appropriate to tame complexity\u2014you can justify exceptions to the system and understand/explain their consequences.\n\nYou are comfortable making decisions without the system being documented.\n\nYou proactively bring up IA improvements opportunities across Figma."
    },
    {
      skill: "Systems",
      level: "5",
      description: "Systems L5\n\nYour work defines and documents new complex systems for others to use, while retaining systemic simplicity.\n\nYou see connections between systems (e.g. design systems and typography) and can lead projects to bring them together.\n\nYou uncover systemic IA interaction issues and advocate for specific improvements."
    },
    {
      skill: "Content",
      level: "1",
      description: "Content L1\n\nYou can articulate key user needs for your features.\n\nYou clarify messaging goals when kicking off a project.\n\nYou use relevant messaging frameworks to shape copy. "
    },
    {
      skill: "Content",
      level: "2",
      description: "Content L2\n\nYou work with marketing to craft clear, compelling value props for your features.\n\nYou can always define what matters most in complex product moments."
    },
    {
      skill: "Content",
      level: "3",
      description: "Content L3\n\nYou establish content principles for your product area, and use them to make better writing decisions.\n\nYou're able to navigate situations when user needs and business goals are in conflict.\n\nYou resolve moments when design or engineering constraints are interfering with effective messaging."
    },
    {
      skill: "Content",
      level: "4",
      description: "Content L4\n\nYou identify and drive content-led projects (ex: experiments around language, terminology overhauls).\n\nYou evolve the way Figma talks about itself and its products.\n\nYou document your approach so writers and marketers can learn from you."
    },
    {
      skill: "Content",
      level: "5",
      description: "Content L5\n\nYou lead content strategy initiatives that have a large, measurable impact on Figma's success.\n\nYou actively mentor junior writers on content strategy, helping them understand and connect with audiences in deeper ways."
    },
    {
      skill: "Copywriting",
      level: "1",
      description: "Copywriting L1\n\nYour writing is concise and clear.\n\nYou understand Figma's voice and can shift your tone depending on the situation and audience.\n\nYour final work is always free of typos and grammar issues."
    },
    {
      skill: "Copywriting",
      level: "2",
      description: "Copywriting L2\n\nYou explore a range of options\u2014from plain to playful\u2014when drafting copy, and can articulate trade-offs of each.\n\nYou know when your copy still needs a few more passes. "
    },
    {
      skill: "Copywriting",
      level: "3",
      description: "Copywriting L3\n\nYou use vocabulary, variety, and cadence to make your writing more compelling and memorable.\n\nYou know when and why to break writing rules or take risks with bolder copy. You're able to explain the rationale for riskier copy to stakeholders."
    },
    {
      skill: "Copywriting",
      level: "4",
      description: "Copywriting L4\n\nYou define Figma's voice and extend it where needed.\n\nYou create voice resources that help writers find the right words for different product moments.\n\nYou evangelize the value of great copywriting in the design org and beyond. "
    },
    {
      skill: "Copywriting",
      level: "5",
      description: "Copywriting L5\n\nYou're building processes or guidelines to uplevel writing across Figma.\n\nIn a pinch, you can write flawless, flowing copy without input from other writers.\n\nYour peers rely on your wordsmithing guidance, and you work directly with writers and cross-functional partners to improve their writing abilities. "
    },
    {
      skill: "Systems\u200B",
      level: "1",
      description: "Content Systems L1\n\nYou audit Figma's features and borrow copy patterns and terminology to ensure consistency.\n\nYour work adheres to Figma's UX writing style guide and the company-wide style guide."
    },
    {
      skill: "Systems\u200B",
      level: "2",
      description: "Content Systems L2\n\nYou're familiar with industry copy patterns, accessibility guidelines, and localization best practices.\n\nYou flag Figma's content patterns that need improvement or make our products harder to use.\n\nYou contribute to the UX writing style guide."
    },
    {
      skill: "Systems\u200B",
      level: "3",
      description: "Content Systems L3\n\nYou're fluent in platform-specific copy conventions.\n\nYou work with designers to fix content patterns in our design system that make Figma harder to use.\n\nYou know how to use different kinds of notifications (ex: email, in-product) in effective, user-friendly ways."
    },
    {
      skill: "Systems\u200B",
      level: "4",
      description: "Content Systems L4\n\nYou're working with writers outside of design to shape Figma's writing standards.\n\nYou're making measurable improvements to one of our content systems (ex: onboarding, notifications).\n\nYou're knowledgeable about content tooling, and advocate for products that would improve our process and boost consistency."
    },
    {
      skill: "Systems\u200B",
      level: "5",
      description: "Content Systems L5\n\nYou're reimaginging one of our larger content systems in a way that dramatically improves usability or helps Figma address new opportunities or challenges.\n\nWhen needed, you oversee the design and adoption of new messaging components for our design system."
    },
    {
      skill: "Design",
      level: "1",
      description: "Design L1\n\nYou're actively learning about core Figma UI design features.\n\nYou use elements from Figma's design system (ex: visual bells, confirmation modals, tooltips) to show copy options in context."
    },
    {
      skill: "Design",
      level: "2",
      description: "Design L2\n\nYou're familiar with industry interaction patterns and give designers feedback on interaction and visual design. You troubleshoot moments when poor information hierarchy hinders readability. You flag situations when copy can't fix underlying design issues."
    },
    {
      skill: "Design",
      level: "3",
      description: "Design L3\n\nYou contribute design riffs to features.\n\nYou're comfortable building and rewiring prototypes in Figma.\n\nYou're skilled at interaction design problem-solving and can troubleshoot common UX issues."
    },
    {
      skill: "Design",
      level: "4",
      description: "Design L4\n\nYour interaction ideas consistently shape the final designs.\n\nYou're able to do more complex design tasks in Figma design (ex: building copy components, adding auto layout to mocks).\n\nYou're expanding your UI design skills into more advanced realms via classes, tutorials, or design mentorship."
    },
    {
      skill: "Design",
      level: "5",
      description: "Design L5\n\nYour own design work is complete and well-crafted enough that you could serve as the designer for simpler features or flows.\n\nYou uplevel the writing team's UI design skills."
    },
    {
      skill: "Communication",
      level: "1",
      description: "Communication L1\n\nYou're responsive, pleasant, and proactive in your communication across all channels.\n\nYou present your work in crit clearly in a way others can understand.\n\nYour design documentation is easy to follow, and you participate regularly in conversations at the team level."
    },
    {
      skill: "Communication",
      level: "2",
      description: "Communication L2\n\nYou're growing your storytelling abilities; your presentations have a clear narrative, good context setting, and you're building your skills at leading meetings confidently and effectively.\n\nYour written communication is clear and concise."
    },
    {
      skill: "Communication",
      level: "3",
      description: "Communication L3\n\nYou present work with polish and confidence. You lead meetings effectively, and could represent Figma well externally.\n\nYou're growing skills at conflict resolution.\n\nYour written communication is compelling and clear."
    },
    {
      skill: "Communication",
      level: "4",
      description: "Communication L4\n\nYou're a strong storyteller and able to influence and persuade at any level of the organization (e.g. to executives).\n\nYou're able to communicate candidly and kindly, and build rapport with all kinds of work partners\u2014even difficult stakeholders.\n\nYou coach other designers/writers on written, verbal, and interpersonal skills."
    },
    {
      skill: "Communication",
      level: "5",
      description: "Communication L5\n\nYou're an exceptional storyteller, and able to uplevel other designers/writers in this area and the team as a whole.\n\nInterpersonally, you deescalate conflict effectively and can smooth out thorny projects and push teams to alignment."
    },
    {
      skill: "Process",
      level: "1",
      description: "Process L1\n\nYou share work regularly and ask for feedback on your working style and on the work itself.\n\nYou triage feedback on your work and ensure follow-ups.\n\nYou work to resolve situations when you're not looped in at the right times."
    },
    {
      skill: "Process",
      level: "2",
      description: "Process L2\n\nYou have a clear process: it's easy for work partners to know your priorities and predict the cadence of your work.\n\nYou're starting to work more independently.\n\nYou know how to manage bandwidth, and speak up if your plate is full.\n\nYou triage feedback diligently; nothing falls through the cracks."
    },
    {
      skill: "Process",
      level: "3",
      description: "Process L3\n\nYour process is adaptable and efficient.\n\nYou generate and maintain momentum. You handle feedback thoroughly and gracefully, and know when to change direction vs. staying the course.\n\nYou're becoming proficient at managing stakeholders and regularly work without close oversight."
    },
    {
      skill: "Process",
      level: "4",
      description: "Process L4\n\nYou influence process at the team level, and delegate well.\n\nYou handle high volumes of feedback on your own work effectively.\n\nYou're a model for stakeholder management, effectively managing executive involvement when necessary."
    },
    {
      skill: "Process",
      level: "5",
      description: "Process L5\n\nYou coach other designers/writers on their process and uplevel the team as a whole.\n\nYou help create and influence our feedback culture at the company level.\n\nYou coach other designers on stakeholder management, especially with executives."
    },
    {
      skill: "Mindset",
      level: "1",
      description: "Mindset L1\n\nYou're eager to help with whatever needs doing on projects\u2014no job is too small."
    },
    {
      skill: "Mindset",
      level: "2",
      description: "Mindset L2\n\nYou maintain an open mindset toward changes and challenges, looking for how you can help and grow."
    },
    {
      skill: "Mindset",
      level: "3",
      description: "Mindset L3\n\nYou lead with resiliency in the face of challenges, and routinely help manage change for other team members.\n\nYou're a model for growth and resiliency on the team."
    },
    {
      skill: "Mindset",
      level: "4",
      description: "Mindset L4\n\nYou're consistently solutions-oriented, and are acutely aware of your impact as a leader on the team, even in private settings.\n\nYou encourage others to maintain a healthy open mindset."
    },
    {
      skill: "Mindset",
      level: "5",
      description: "Mindset L5\n\nYou have a toolkit for managing change for other team members, and can help turn around significant morale issues on teams."
    },
    {
      skill: "Effectiveness",
      level: "1",
      description: "Effectiveness L1\n\nYou're building an understanding of the business and its goals.\n\nYour work aims to solve key user problems, and you're starting to connect your work to business goals.\n\nYou follow up post launch to assess your work's impact and effectiveness.\n\nYou file bugs when you spot quality issues."
    },
    {
      skill: "Effectiveness",
      level: "2",
      description: "Effectiveness L2\n\nYou understand how your work contributes to the business and prioritize accordingly.\n\nYou participate in roadmapping and planning conversations.\n\nYou address post launch issues and make suggestions to improve your impact.\n\nYou host bug bashes for your projects."
    },
    {
      skill: "Effectiveness",
      level: "3",
      description: "Effectiveness L3\n\nYou help drive roadmapping and planning conversations and have a deep understanding of how your work connects to business goals.\n\nYou work with appropriate urgency, consistently pushing projects forward.\n\nYou file bugs not only for your team but for other teams as well to prioritize quality."
    },
    {
      skill: "Effectiveness",
      level: "4",
      description: "Effectiveness L4\n\nYou push to make the highest impact possible with your work, and you can make a successful business case for it.\n\nYou start to take on projects outside of your core responsibilities.\n\nYou help your pillar with overall improvements to its quality control to be sure work is high quality and reliable."
    },
    {
      skill: "Effectiveness",
      level: "5",
      description: "Effectiveness L5\n\nYou help others understand the business.\n\nYou identify opportunities for design to create new value for the business and garner resources to act.\n\nYou frequently suggest and execute extra projects outside of core responsibilities.\n\nYou own the bar for quality at Figma."
    },
    {
      skill: "Leadership",
      level: "1",
      description: "Leadership L1\n\nYou help others by giving actionable feedback."
    },
    {
      skill: "Leadership",
      level: "2",
      description: "Leadership L2\n\nYou routinely help other designers/writers on the team grow, through your feedback or through skill shares.\n\nYou offer suggestions on how our product and processes can improve and help implement solutions."
    },
    {
      skill: "Leadership",
      level: "3",
      description: "Leadership L3\n\nYou're starting to uplevel other teammates skills through more formal coaching and mentorship (e.g. interns or more junior designers/writers).\n\nOthers actively seek your feedback, and listen to your guidance.\n\nYou drive initiatives that improve our team's workflows and the lives of other designers."
    },
    {
      skill: "Leadership",
      level: "4",
      description: "Leadership L4\n\nYou lead by example\u2014never hesitating to get your hands dirty (e.g. riffing where helpful and guiding others toward action).\n\nYou've implemented and sometimes defined team processes like critiques and team meetings.\n\nYou are regularly sought out for mentorship even outside your team."
    },
    {
      skill: "Leadership",
      level: "5",
      description: "Leadership L5\n\nYou're a leader at Figma, with impact on the business and culture across the organization.\n\nYou uplevel other designers' leadership skills, building more design leaders within the organization."
    },
    {
      skill: "Citizenship",
      level: "1",
      description: "Citizenship L1\n\nYou volunteer to help out with team programs, like hosting warm-up.\n\nYou participate in company culture activities, like ERGs, Maker Week, or Show & Tell.\n\nYou attend FigNation to stay up to date on company activities."
    },
    {
      skill: "Citizenship",
      level: "2",
      description: "Citizenship L2\n\nYou suggest and implement team culture improvements.\n\nYou participate in some hiring activities, like interviewing candidates and sourcing jams.\n\nYou help plan team cultural initiatives, like offsites."
    },
    {
      skill: "Citizenship",
      level: "3",
      description: "Citizenship L3\n\nYou're an owner of our team culture, suggesting new rituals and activities to bring us together as a team.\n\nYou actively participate in hiring, whether through interviewing, sourcing, or suggesting improvements to our processes."
    },
    {
      skill: "Citizenship",
      level: "4",
      description: "Citizenship L4\n\nYou represent design as a leader to the rest of the organization, by giving feedback on process and culture or taking a leadership role in FigNation, Config, or other events."
    },
    {
      skill: "Citizenship",
      level: "5",
      description: "Citizenship L5\n\nYou represent Figma externally whether through conferences, blog posts, or other channels.\n\nYour work and presence attracts top talent to the organization; some people join Figma because they're excited to learn from you."
    }
  ];

  // code.tsx
  var { widget } = figma;
  var {
    useSyncedState,
    useSyncedMap,
    usePropertyMenu,
    AutoLayout,
    Frame,
    Rectangle,
    Text,
    SVG
  } = widget;
  var strategyCategory = {
    name: "Strategy",
    color: "#9747FF",
    skills: ["Product", "Research", "Vision"],
    skillDescriptions: ["What we're building and why", "Qualitative and quantitative evidence", "Future pathways and how things fit together"]
  };
  var craftCategory = {
    name: "Craft",
    color: "#0D99FF",
    skills: ["Visual", "Interaction", "Systems"],
    skillDescriptions: ["How things look", "How things behave", "Underlying models, IAs, etc."]
  };
  var writingCraftCategory = {
    name: "Writing",
    color: "#0D99FF",
    skills: ["Content", "Copywriting", "Systems\u200B", "Design"],
    skillDescriptions: ["Figuring out what to write", "Finding the perfect words", "Building consistency and cohesion", "Developing your UX design chops"]
  };
  var collabCategory = {
    name: "Collaboration",
    color: "#14AE5C",
    skills: ["Communication", "Process", "Mindset"],
    skillDescriptions: ["Written, verbal, and interpersonal skills", "Resiliency and growth orientation", "Sharing work and incorporating feedback"]
  };
  var impactCategory = {
    name: "Impact",
    color: "#FFCD29",
    skills: ["Effectiveness", "Leadership", "Citizenship"],
    skillDescriptions: ["Output, follow-through, and business impact", "Mentorship, ability to influence and drive change", "Improving our culture, hiring, and company practices"]
  };
  var categories = [strategyCategory, craftCategory, writingCraftCategory, collabCategory, impactCategory];
  function Widget() {
    const voteMap = useSyncedMap("skill-level");
    const [userLevel, setUserLevel] = useSyncedState("level", 1);
    const [showLevels, setShowLevels] = useSyncedState("isShown", false);
    const [role, setRole] = useSyncedState("role", "Design");
    const roleOptions = [{ option: "Design", label: "Design" }, { option: "Writing", label: "Writing" }];
    usePropertyMenu([
      {
        itemType: "dropdown",
        propertyName: "roles",
        tooltip: "Role",
        selectedOption: role,
        options: roleOptions
      },
      {
        itemType: "separator"
      },
      {
        itemType: "action",
        tooltip: "Show/hide levels",
        propertyName: "levelToggle"
      }
    ], ({ propertyName, propertyValue }) => {
      if (propertyName === "roles") {
        setRole(propertyValue);
      } else if (propertyName == "levelToggle") {
        setShowLevels(!showLevels);
      }
    });
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Everything",
      width: role == "Writing" ? 3990 : 3750,
      height: 1100,
      fill: "#FFFFFF",
      cornerRadius: 10,
      effect: [
        {
          type: "drop-shadow",
          color: "#9747FF0A",
          offset: {
            x: 0,
            y: 3
          },
          blur: 57,
          showShadowBehindNode: false
        },
        {
          type: "drop-shadow",
          color: "#0D99FF0A",
          offset: {
            x: 0,
            y: 2
          },
          blur: 30,
          showShadowBehindNode: false
        },
        {
          type: "drop-shadow",
          color: "#14AE5C0A",
          offset: {
            x: 0,
            y: 1
          },
          blur: 18,
          showShadowBehindNode: false
        },
        {
          type: "drop-shadow",
          color: "#FFD54B0D",
          offset: {
            x: 0,
            y: 0
          },
          blur: 6,
          showShadowBehindNode: false
        }
      ],
      stroke: "#00000026",
      strokeWidth: 3
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Dividers",
      x: 82,
      y: 228,
      width: role == "Writing" ? 3806 : 3550,
      height: 650
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L1",
      opacity: 0.1,
      x: 0,
      y: 520,
      strokeWidth: 0,
      overflow: "visible",
      hidden: showLevels ? true : false,
      width: role == "Writing" ? 3806 : 3550,
      height: 131.5,
      onClick: () => {
        setUserLevel(1);
      },
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L1-Bg",
      y: 1.5,
      fill: "#FFF",
      width: 150,
      height: 130
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L1-Line",
      height: 3,
      width: role == "Writing" ? 3806 : 3550,
      opacity: userLevel == 1 ? 1 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99197 3.4997L-2.57824e-07 3.49969L0 0.499695L3.99197 0.499696L3.99197 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499777L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.628 3.49982L682.628 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499875L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499909L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499973L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.50001L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.50001ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500007L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50004L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500132L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.50023L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500264L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L2",
      opacity: 0.1,
      y: 390,
      strokeWidth: 0,
      overflow: "visible",
      width: role == "Writing" ? 3806 : 3550,
      height: 130.5,
      hidden: showLevels ? true : false,
      onClick: () => {
        setUserLevel(2);
      },
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L2-Bg",
      y: 0.5,
      fill: "#FFF",
      width: 150,
      height: 130
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L2-Line",
      height: 3,
      width: role == "Writing" ? 3806 : 3550,
      opacity: userLevel == 2 ? 1 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99196 3.4997L-7.88722e-06 3.49969L-7.62939e-06 0.499695L3.99196 0.499696L3.99196 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499777L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.627 3.49982L682.627 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499875L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499909L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499973L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.50001L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.50001ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500007L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50004L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500132L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.50023L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500264L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L3",
      opacity: 0.1,
      y: 260.5,
      strokeWidth: 0,
      overflow: "visible",
      width: role == "Writing" ? 3806 : 3550,
      height: 130,
      hidden: showLevels ? true : false,
      onClick: () => {
        setUserLevel(3);
      },
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L3-Bg",
      fill: "#FFF",
      width: 150,
      height: 130
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L3-Line",
      y: 0.5,
      height: 3,
      width: role == "Writing" ? 3806 : 3550,
      opacity: userLevel == 3 ? 1 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99197 3.4997L-2.57824e-07 3.49969L0 0.499695L3.99197 0.499696L3.99197 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499777L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.628 3.49982L682.628 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499875L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499909L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499973L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.50001L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.50001ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500007L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50004L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500132L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.50023L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500264L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L4",
      opacity: 0.1,
      y: 130,
      strokeWidth: 0,
      overflow: "visible",
      hidden: showLevels ? true : false,
      width: role == "Writing" ? 3806 : 3550,
      height: 130.5,
      onClick: () => {
        setUserLevel(4);
      },
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L4-Bg",
      y: 0.5,
      fill: "#FFF",
      width: 150,
      height: 130
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L4-Line",
      height: 3,
      width: role == "Writing" ? 3806 : 3550,
      opacity: userLevel == 4 ? 0 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99197 3.4997L-2.57824e-07 3.49969L0 0.499695L3.99197 0.499696L3.99197 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499777L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.628 3.49982L682.628 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499875L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499909L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499973L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.50001L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.50001ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500007L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50004L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500132L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.50023L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500264L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L5",
      opacity: 0.1,
      strokeWidth: 0,
      overflow: "visible",
      width: role == "Writing" ? 3806 : 3550,
      height: 130.5,
      hidden: showLevels ? true : false,
      onClick: () => {
        setUserLevel(5);
      },
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L5-Bg",
      y: 0.5,
      fill: "#FFF",
      width: 150,
      height: 130
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L5-Line",
      height: 3,
      width: role == "Writing" ? 3806 : 3550,
      opacity: userLevel == 5 ? 1 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99197 3.4997L-2.57824e-07 3.49969L0 0.499695L3.99197 0.499696L3.99197 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499776L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.628 3.49982L682.628 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499874L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499908L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499972L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.5L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.5ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500006L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50003L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500131L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.500229L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500263L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Text, {
      name: "Level-Label",
      y: {
        type: "top",
        offset: 660 - userLevel * 130
      },
      hidden: showLevels ? true : false,
      fill: "#A7A7A7",
      width: 105,
      lineHeight: "150%",
      fontFamily: "Inter",
      letterSpacing: 1.456,
      fontWeight: 700
    }, "CURRENT LEVEL (", userLevel, ")"), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-Line-Active",
      y: {
        type: "top",
        offset: 650 - userLevel * 130
      },
      hidden: showLevels ? true : false,
      height: 3,
      width: role == "Writing" ? 3806 : 3550,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3481 3.50031L-2.57824e-07 3.49969L0 0.499695L3481 0.500314L3481 3.50031Z' fill='black' fill-opacity='0.33'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Container",
      verticalAlignItems: "center",
      x: 150,
      y: 100,
      spacing: 32,
      padding: 64,
      cornerRadius: 8,
      direction: "vertical"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Skills",
      overflow: "visible",
      spacing: 30
    }, categories.map((category) => {
      return category.skills.map((skill, i) => {
        return Skill(skill, category.name, category.color, category.skillDescriptions[i], `${category.name}-${skill}`, role, showLevels, voteMap);
      });
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Categories",
      overflow: "visible",
      spacing: 30
    }, categories.map((category) => {
      return Category(category.name, category.color, role, `${category.name}`);
    }))));
  }
  function Category(name, color, role, category_key) {
    const hideCategory = role == "Design" && name == "Writing" || role == "Writing" && name == "Craft";
    return /* @__PURE__ */ figma.widget.h(Text, {
      name: `Category-${name}`,
      key: `Category-${category_key}`,
      hidden: hideCategory ? true : false,
      fill: color,
      width: name == "Writing" ? 1088 : 810,
      height: 50,
      verticalAlignText: "center",
      horizontalAlignText: "center",
      lineHeight: "150%",
      fontFamily: "Inter",
      fontSize: 32,
      letterSpacing: 1.536,
      textCase: "upper",
      fontWeight: 700
    }, name);
  }
  function Skill(name, category, color, skill_description, skill_key, role, showLevels, voteMap) {
    const offsetA = 734 - (voteMap.get(skill_key) || 1) * 130;
    const activeOpacity = 0.8;
    const hoverOpacity = 0.4;
    const hideSkill = role == "Design" && category == "Writing" || role == "Writing" && category == "Craft";
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: `Skill-${name}`,
      key: `Skill-${skill_key}`,
      hidden: hideSkill ? true : false,
      width: 250,
      height: 716
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-Bg-${name}`,
      key: `Skill-Block-Bg-${skill_key}`,
      opacity: 0.2,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 650
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-5-${name}`,
      key: `Skill-Block-5-${skill_key}`,
      opacity: voteMap.get(skill_key) == "5" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 650,
      onClick: () => {
        voteMap.set(skill_key, 5);
      },
      hoverStyle: { opacity: voteMap.get(skill_key) == "5" ? 1 : hoverOpacity },
      tooltip: levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "5";
      }).description
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-4-${name}`,
      key: `Skill-Block-4-${skill_key}`,
      opacity: voteMap.get(skill_key) == "4" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 519,
      onClick: () => {
        voteMap.set(skill_key, 4);
      },
      hoverStyle: { opacity: voteMap.get(skill_key) == "4" ? 1 : hoverOpacity },
      tooltip: levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "4";
      }).description
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-3-${name}`,
      key: `Skill-Block-3-${skill_key}`,
      opacity: voteMap.get(skill_key) == "3" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 389,
      onClick: () => {
        voteMap.set(skill_key, 3);
      },
      hoverStyle: { opacity: voteMap.get(skill_key) == "3" ? 1 : hoverOpacity },
      tooltip: levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "3";
      }).description
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-2-${name}`,
      key: `Skill-Block-2-${skill_key}`,
      opacity: voteMap.get(skill_key) == "2" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 259,
      onClick: () => {
        voteMap.set(skill_key, 2);
      },
      hoverStyle: { opacity: voteMap.get(skill_key) == "2" ? 1 : hoverOpacity },
      tooltip: levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "2";
      }).description
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-1-${name}`,
      key: `Skill-Block-1-${skill_key}`,
      opacity: voteMap.get(skill_key) == "1" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 0
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 130,
      onClick: () => {
        voteMap.set(skill_key, 1);
      },
      hoverStyle: { opacity: voteMap.get(skill_key) == "1" ? 1 : hoverOpacity },
      tooltip: levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "1";
      }).description
    }), /* @__PURE__ */ figma.widget.h(Text, {
      name: `Skill-Level-${name}`,
      key: `Skill-Level-${skill_key}`,
      hidden: showLevels ? true : false,
      opacity: voteMap.get(skill_key) ? 0.9 : 0,
      y: {
        type: "top",
        offset: offsetA
      },
      fill: name == "Effectiveness" || name == "Leadership" || name == "Citizenship" ? "#876C14" : "#FFF",
      width: 250,
      height: 38,
      horizontalAlignText: "center",
      lineHeight: "150%",
      fontFamily: "Inter",
      fontSize: 24,
      letterSpacing: -0.456,
      fontWeight: 700
    }, "L", voteMap.get(skill_key) || 1), /* @__PURE__ */ figma.widget.h(Text, {
      name: `Skill-Label-${name}`,
      key: `Skill-Label-${skill_key}`,
      fill: color,
      width: 250,
      height: 50,
      verticalAlignText: "center",
      horizontalAlignText: "center",
      lineHeight: "150%",
      fontFamily: "Inter",
      fontSize: 32,
      letterSpacing: -0.32,
      fontWeight: 700,
      strokeWidth: 1.391,
      tooltip: `${skill_description}`
    }, name));
  }
  widget.register(Widget);
})();
