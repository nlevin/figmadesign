const levelDescriptions = [
  {
    skill: "Product",
    level: "1",
    description: "Product L1\n\nYou ask questions to understand who you're building for and why. You push for clarity and seek help if you don't get it.\n\nYou're starting to flag dependencies and edge cases in your projects."
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
    description: "Product L4\n\nYou handle very complex and ambiguous projects, defining requirements and prioritizing the most impactful work streams even in the face of multiple competing demands.\n\nYou initiate high-impact projects and advocate for getting them on the roadmap."
  },
  {
    skill: "Product",
    level: "5",
    description: "Product L5\n\nYou set the gold standard for problem definition; your ability to frame and scope projects are consistently clear, thoughtful, and compelling.\n\nYou coach other designers on prioritization, managing dependencies, and requirements definition.\nYou regularly inspire teams across Figma to up-level their product strategy with your insights"
  },
  {
    skill: "Product",
    level: "6",
    description: "Product L6\n\nYou are a trusted partner to executives, connecting product, design, and business strategy for critical company bets and investment decisions.\n\nYou unify how teams and pillars across the ecosystem consider and approach design solutions."
  },
  {
    skill: "Research",
    level: "1",
    description: "Research L1\n\nYou're building your knowledge of the competitive landscape by spending time with other tools (e.g. conducting audits).\n\nYou have a basic understanding of when and how to validate your work through research.\n\nYou ask about success metrics."
  },
  {
    skill: "Research",
    level: "2",
    description: "Research L2\n\nYour industry knowledge and understanding of our users starts to deepen and guide your own work.\n\nYou partner with research to define the questions to ask and problems to explore.\n\nYou work with data science to interpret metrics and make informed decisions."
  },
  {
    skill: "Research",
    level: "3",
    description: "Research L3\n\nYou can do research to validate your own work if necessary.\n\nYou use data to guide your work, and you help define the goals and success metrics for your projects.\n\nYour comprehensive knowledge of industry design patterns deeply impacts your work."
  },
  {
    skill: "Research",
    level: "4",
    description: "Research L4\n\nYou know when data and research are missing, and garner them where appropriate to inform your work and the work of others.\n\nYou're an expert in Figma's product space; someone others on the team learn from and seek to emulate. You surface new trends, patterns, and tools to the team regularly."
  },
  {
    skill: "Research",
    level: "5",
    description: "Research L5\n\nYou partner with our leads in data and research to improve the design team's overall practices around them.\n\nYou leverage your knowledge of the industry to define new patterns and norms when needed.\n\nYou look outside of Figma and proactively connect with customers to identify trends and movements that should inform our future thinking."
  },
  {
    skill: "Research",
    level: "6",
    description: "Research L6\n\nYou set the bar for evidence-informed design, pulling research and data into all strategic initiatives.\n\nYou collaborate with research and data leadership to evolve Figma's approach to insights.\n\nYou identify shifting behaviors and technologies early, helping the company position for the future."
  },
  {
    skill: "Vision",
    level: "1",
    description: "Vision L1\n\nYou participate in vision activities, by generating ideas and brainstorming new concepts with your team.\n\nYou create sketches and mocks to communicate your ideas."
  },
  {
    skill: "Vision",
    level: "2",
    description: "Vision L2\n\nYou assist PMs and more senior designers/writers in bringing larger strategic vision work to life (e.g. by creating mocks, designing decks, and writing documents).\n\nYou're responsible for exploring some parts of a vision exercise or sprint."
  },
  {
    skill: "Vision",
    level: "3",
    description: "Vision L3\n\nYou participate in future product planning processes with your PM and eng partners.\n\nYou're starting to develop your own POV; you're trusted to own parts of larger strategic vision.\n\nYou proactively organize sprints or other processes to further define vision if it's otherwise lacking."
  },
  {
    skill: "Vision",
    level: "4",
    description: "Vision L4\n\nYou set the vision for your area\u2014solo or with another senior designer/writer\u2014and it's inspiring and motivating to others.\n\nYou advocate for your POV at all levels of the organization (e.g. to executives) and can leverage data, storytelling, and visual design to bring stakeholders along.\n\nYou help drive the product planning process with your PM and eng partners."
  },
  {
    skill: "Vision",
    level: "5",
    description: "Vision L5\n\nYou up-level other designers' and writers' vision work, and are entrusted to drive vision for the broadest, farthest-looking projects in the organization.\n\nYou help define what's next for Figma - as a product, a business, and a company."
  },
  {
    skill: "Vision",
    level: "6",
    description: "Vision L6\n\nYou bridge today's roadmap with tomorrow's possibilities, helping executives align on what's next.\n\nYou rally teams to turn bold, inspiring futures into tangible workstreams that ship.\n\nYour work sets trends that influence the design industry."
  },
  {
    skill: "Visual",
    level: "1",
    description: "Visual L1\n\nYou reference industry patterns in your work and are building your knowledge of Figma's design system.\n\nYou explore multiple solutions for problems.\n\nYour designs are consistent with existing patterns in the Figma design system and product."
  },
  {
    skill: "Visual",
    level: "2",
    description: "Visual L2\n\nYou explore a wide breadth of design options and articulate trade-offs with each.\n\nYou are building your understanding on where our system can flex to accommodate certain needs."
  },
  {
    skill: "Visual",
    level: "3",
    description: "Visual L3\n\nYour work has few visual issues.\n\nYou start to form tenets, design principles and clear rationale as you design, and fall back on them to help make decisions.\n\nYour work is thorough and detailed when it comes to interactions, states and edge cases (for example localization, breakpoints, mixed states, keyboard interactions etc.)."
  },
  {
    skill: "Visual",
    level: "4",
    description: "Visual L4\n\nYou work is thorough and complete with edge cases fully thought out\u2014a model of accuracy and precision.\n\nYou partner with the design systems team to own and maintain the design system for your focus area.\n\nYour work sets a high standard for visual design and serves as an example for other junior designers to follow."
  },
  {
    skill: "Visual",
    level: "5",
    description: "Visual L5\n\nYou see gaps in how our visual system works and help up level it. When necessary, you define new patterns and changes to the underlying system.\n\nYour peers look to you for your help and guidance on visual design, and you regularly offer feedback to improve work outside your own.\n\nYou're seen as a leader in visual design at Figma."
  },
  {
    skill: "Visual",
    level: "6",
    description: "Visual L6\n\nYou set the standard for visual design craft and quality\u2014not just at Figma, but across the industry\n\nYou identify where visual design can drive strategic differentiation, and craft systems for lasting impact.\n\nYou coach teams on aesthetics, coherence, and clarity at scale, ensuring quality across all products."
  },
  {
    skill: "Interaction",
    level: "1",
    description: "Interaction L1\n\nYou start to prototype your ideas to bring work to life and illustrate flows more clearly.\n\nYou're eager to learn new tools and practices to improve the fidelity of your ideas."
  },
  {
    skill: "Interaction",
    level: "2",
    description: "Interaction L2\n\nYou go beyond click-through prototypes and incorporate animations and transitions across various interactions.\n\nYou are familiar with common industry interaction patterns and reference them in your work."
  },
  {
    skill: "Interaction",
    level: "3",
    description: "Interaction L3\n\nYou prototype fluently and quickly and you get helpful feedback from collaborators with them.\n\nYour work is thorough and complete when it comes to all interaction details (like hover/focus and keyboard shortcuts)."
  },
  {
    skill: "Interaction",
    level: "4",
    description: "Interaction L4\n\nYou prototype with intentionality and know when to utilize prototypes to effectively communicate your ideas.\n\nYou are well-versed in common industry and Figma interaction patterns and their nuances across platforms.\n\nYour prototypes help teams make business decisions."
  },
  {
    skill: "Interaction",
    level: "5",
    description: "Interaction L5\n\nYour interaction work raises the bar across the company.\n\nYour peers look to you for guidance and feedback on improving their interaction work, and you proactively spot interaction issues and offer corrections.\n\nYou create frameworks and prototypes that inspire other people to do the same.\n\nYour interaction design work is thorough and precise, solving for a range of edge cases. You thoughtfully communicate complex states such as selection, zoom, click/drag events, keyboard interactions and more."
  },
  {
    skill: "Interaction",
    level: "6",
    description: "Interaction L6\n\nYou push the boundaries of interaction models and set gold standards at Figma and across the industry.\n\nYou prototype complex interactions to drive product direction and business decisions at Figma.\n\nYou advocate for interaction design quality across all product surfaces and relentlessly level up the org to sweat the details of polish and bugs."
  },
  {
    skill: "Systems",
    level: "1",
    description: "Systems L1\n\nYou're able to work independently with a well-documented problem, and you ask for help when you get stuck.\n\nYou methodically investigate or audit part of a system, and summarize findings."
  },
  {
    skill: "Systems",
    level: "2",
    description: "Systems L2\n\nYou consider edge cases when designing for complex systems.\n\nYou're starting to create and contribute to style guides of complex systems.\n\nYou re-purpose Figma's design patterns and offer recommendations to improve the system when something doesn't work."
  },
  {
    skill: "Systems",
    level: "3",
    description: "Systems L3\n\nYour designs are holistic and consider complex cases of existing systems.\n\nYou can recall internal properties/style guides of systems and explain them to stakeholders.\n\nYou are comfortable collaborating with engineering and PM to understand a system completely and improve it."
  },
  {
    skill: "Systems",
    level: "4",
    description: "Systems L4\n\nYou aim to simplify and unify systems when appropriate to tame complexity\u2014you can justify exceptions to the system and understand/explain their consequences.\n\nYou are comfortable making decisions without the system being documented.\n\nYou proactively bring up IA improvements opportunities across Figma.\n\nYou define, document and share how patterns can be utilized by others across our various products."
  },
  {
    skill: "Systems",
    level: "5",
    description: "Systems L5\n\nYou create coherent systems that span across different products and surfaces.\n\nYour work defines and documents new systems for other to use, while retaining systemic simplicity.\n\nYou see connections between systems (e.g. design systems and typography) and can lead projects to bring them together.\n\nYou uncover systemic IA interaction issues and advocate for specific improvements.\n\nYou're proactively guiding other people through complex systems, and helping them make decisions."
  },
  {
    skill: "Systems",
    level: "6",
    description: "Systems L6\n\nYou architect foundational systems that unify Figma's products, design language, and workflows.\n\nYou consistently evolve our design system to scale across teams and product surfaces.\n\nYou guide others in how to design and maintain systems with clarity, longevity, and simplicity."
  },
  {
    skill: "Content",
    level: "1",
    description: "Content L1\n\nYou can articulate key user needs for your features.\n\nYou clarify messaging goals when kicking off a project.\n\nYou use relevant messaging frameworks to shape copy."
  },
  {
    skill: "Content",
    level: "2",
    description: "Content L2\n\nYou work with product marketing to craft clear, compelling value props, and write launch copy for your features.\n\nYou can always define what matters most in complex product moments."
  },
  {
    skill: "Content",
    level: "3",
    description: "Content L3\n\nYou establish content principles for your product area, and use them to make better writing decisions.\n\nYou're able to navigate situations when user needs and business goals are in conflict.\n\nYou're able to work with/in design or engineering constraints and still deliver effective messaging."
  },
  {
    skill: "Content",
    level: "4",
    description: "Content L4\n\nYou identify and drive content-led projects (ex: experiments around language, terminology overhauls).\n\nYou evolve the way Figma talks about itself and its products. You document your approach so writers and marketers can learn from you."
  },
  {
    skill: "Content",
    level: "5",
    description: "Content L5\n\nYou lead content strategy initiatives that have a large, measurable impact on Figma's success.\n\nYou actively mentor junior writers on content strategy, helping them understand and connect with audiences in deeper ways."
  },
  {
    skill: "Content",
    level: "6",
    description: "Content L6\n\nYou drive content-led opportunities that shift the business, product, and brand narrative\n\nYou define how Figma approaches and evaluates language for new product categories and audiences.\n\nYou share frameworks and insights that advance UX writing globally."
  },
  {
    skill: "Copywriting",
    level: "1",
    description: "Copywriting L1\n\nYour writing is concise and clear.\n\nYou understand Figma's voice in your product area and can shift your tone depending on the situation and audience.\nYour final work is always free of typos and grammar issues."
  },
  {
    skill: "Copywriting",
    level: "2",
    description: "Copywriting L2\n\nYou explore a range of options\u2014from plain to playful\u2014when drafting copy, and can articulate trade-offs of each.\n\nYou know when your copy still needs a few more passes, and you ask for feedback to get to the finish line."
  },
  {
    skill: "Copywriting",
    level: "3",
    description: "Copywriting L3\n\nYou use vocabulary, variety, and cadence to make your writing more compelling and memorable, even in tight spaces.\nYou know when and why to break writing rules or take risks with bolder copy. You're able to explain the rationale for riskier copy to stakeholders."
  },
  {
    skill: "Copywriting",
    level: "4",
    description: "Copywriting L4\n\nYou define Figma's voice in your product area and help writers outside your area document voice and tone as needed.\nYou're making measurable improvements to one of our content systems (ex: onboarding, notifications).\n\nYou evangelize the value of great writing in the design org and beyond."
  },
  {
    skill: "Copywriting",
    level: "5",
    description: "Copywriting L5\n\nYou're building processes or guidelines to up-level writing across Figma.\n\nIn a pinch, you can write flawless, flowing copy without input from other writers.\n\nYour peers rely on your wordsmithing guidance, and you work directly with writers and cross-functional partners to improve their writing abilities."
  },
  {
    skill: "Copywriting",
    level: "6",
    description: "Copywriting L6\n\nYou're trusted to craft language for Figma's most critical, highest-impact product needs.\n\nYour work and public thinking on language represent Figma as a global authority on product writing."
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
    description: "Content Systems L3\n\nYou know when to follow or diverge from platform- and web-specific copy conventions.\n\nYou work with designers to fix content patterns in our design system that make Figma harder to use.\n\nYou know how to use different kinds of notifications (ex: email, in-product) in effective, user-friendly ways."
  },
  {
    skill: "Systems\u200B",
    level: "4",
    description: "Content Systems L4\n\nYou're working with writers outside of design to shape Figma's writing standards.\n\nYou're making measurable improvements to one of our content systems (ex: onboarding, notifications).\n\nYou build consistency\u2014and the processes to maintain it\u2014across the features in your product area."
  },
  {
    skill: "Systems\u200B",
    level: "5",
    description: "Content Systems L5\n\nYou reimagine large content systems in a way that dramatically improves usability or helps Figma address new opportunities or challenges.\n\nWhen needed, you oversee the design and adoption of new components in our design system"
  },
  {
    skill: "Systems\u200B",
    level: "6",
    description: "Content Systems L6\n\nYou create frameworks for terminology, style, localization, and accessibility that span all of Figma.\n\nYou mentor cross-functional partners to ensure design and writing systems evolve together.\n\nYou drive the use of new technologies to create content systems at scale, influencing the industry."
  },
  {
    skill: "Design",
    level: "1",
    description: "Design L1\n\nYou're actively learning about core Figma UI design features.\n\nYou use components from Figma's design system (ex: visual bells, confirmation modals, tooltips) to show copy options in context."
  },
  {
    skill: "Design",
    level: "2",
    description: "Design L2\n\nYou're familiar with industry interaction patterns and give designers feedback on interaction and visual design.\n\nYou troubleshoot moments when poor information hierarchy hinders readability.\n\nYou flag situations when copy can't fix underlying design issues.\n\nYou make edits to complex designs and create basic prototypes."
  },
  {
    skill: "Design",
    level: "3",
    description: "Design L3\n\nYou contribute design riffs to features.\n\nYou're comfortable building and rewiring prototypes in Figma.\n\nYou're skilled at interaction design problem-solving and can troubleshoot common UX issues.\n\nYou create designs from scratch using auto layout frames, and know how to apply styles and variables from a library."
  },
  {
    skill: "Design",
    level: "4",
    description: "Design L4\n\nYour interaction ideas consistently shape the final designs.\n\nYou're able to do more complex design tasks in Figma design (ex: building copy components, defining variables and styles).\n\nYou're expanding your UI design skills via classes or mentorship, and are comfortable doing interaction work that ships."
  },
  {
    skill: "Design",
    level: "5",
    description: "Design L5\n\nYour own design work is complete and well-crafted enough that you could serve as the designer for simpler features or flows.\n\nYou up level the writing team's UI design skills."
  },
  {
    skill: "Design",
    level: "6",
    description: "Design L6\n\nYou blur the line between design and writing, setting the standard great UX writing in visual design.\n\nYou collaborate with design systems, research, and engineering to center language in user experience.\n\nYour craft enables you to seamlessly fill in as a designer for more complex features or flows."
  },
  {
    skill: "Communication",
    level: "1",
    description: "Communication L1\n\nYou communicate reliably\u2014you're responsive, kind, and proactive in discussions.\n\nYou present your work with context about the design problem, known research or user needs, and why you made specific design decisions.\n\nYour design files and presentations are well organized and easy to follow.\n\nYou participate regularly in team discussions and meetings."
  },
  {
    skill: "Communication",
    level: "2",
    description: "Communication L2\n\nYou're growing your storytelling abilities; your presentations have a clear narrative, good context setting, and you're building your skills at leading meetings confidently and effectively.\n\nYour written communication is clear; others are able to readily understand it."
  },
  {
    skill: "Communication",
    level: "3",
    description: "Communication L3\n\nYou're refining your storytelling and presentation skills, confidently presenting your work in an engaging way.\n\nYou lead meetings effectively, and could represent Figma well externally.\n\nYou're growing skills at conflict resolution.\n\nYour written communication is clear, concise, and compelling."
  },
  {
    skill: "Communication",
    level: "4",
    description: "Communication L4\n\nYou're a strong storyteller and able to influence and persuade at any level of the organization (e.g. to executives).\n\nYou're able to communicate candidly and kindly, and build rapport with all kinds of work partners\u2014even difficult stakeholders.\n\nYou coach other designers/writers on written, verbal, and interpersonal skills."
  },
  {
    skill: "Communication",
    level: "5",
    description: "Communication L5\n\nYou're an exceptional storyteller, and able to up level other designers/writers in this area and the team as a whole.\n\nInterpersonally, you deescalate conflict effectively and can smooth out thorny projects and push teams to alignment."
  },
  {
    skill: "Communication",
    level: "6",
    description: "Communication L6\n\nYou are a world-class communicator and storyteller, inspiring audiences inside and outside Figma.\n\nYour narratives shape executive decisions, and you coach senior leaders in persuasive storytelling.\n\nYou're invited to speak at conferences and represent Figma's vision for design and collaboration."
  },
  {
    skill: "Process",
    level: "1",
    description: "Process L1\n\nYou share work regularly and ask for feedback on your working style and on the work itself.\n\nYou triage feedback on your work and ensure follow-ups.\n\nYou ask questions when you need more information to make a decision, or you're not sure about next steps.\n\nYou're actively learning how to work with your eng/PM partners, through 1:1s, milestones, and regular check-ins."
  },
  {
    skill: "Process",
    level: "2",
    description: "Process L2\n\nYou have a clear process: it's easy for work partners to know your priorities and predict the cadence of your work.\n\nYou're starting to work more independently. You know how to manage bandwidth, and speak up if your plate is full.\n\nYou triage feedback diligently; nothing falls through the cracks."
  },
  {
    skill: "Process",
    level: "3",
    description: "Process L3\n\nYour process is adaptable and efficient. You generate and maintain momentum.\n\nYou handle feedback thoroughly and gracefully, and know when to change direction vs. staying the course.\n\nYou're becoming proficient at managing stakeholders and regularly work without close oversight."
  },
  {
    skill: "Process",
    level: "4",
    description: "Process L4\n\nYou influence process at the team level, and delegate well.\n\nYou handle high volumes of feedback on your own work effectively.\n\nYou're a model for stakeholder management, effectively managing executive involvement when necessary."
  },
  {
    skill: "Process",
    level: "5",
    description: "Process L5\n\nYou coach other designers/writers on their process and up level the team as a whole.\n\nYou coach other designers on stakeholder management, especially with executives.\n\nYou help create and influence our feedback culture at the company level.\n\nYou create frameworks to help drive cross-product coherence, balancing the requirements of many teams."
  },
  {
    skill: "Process",
    level: "6",
    description: "Process L6\n\nYou drive Figma design's quality, velocity, and craft with scalable processes and best practices.\n\nYou identify systemic problems and drive cross-functional alignment toward clear outcomes.\n\nYou coach leaders and teams to strengthen feedback and critique culture."
  },
  {
    skill: "Mindset",
    level: "1",
    description: "Mindset L1\n\nYou're eager to help with whatever needs doing on projects\u2014no job is too small."
  },
  {
    skill: "Mindset",
    level: "2",
    description: "Mindset L2\n\nYou maintain an open mindset toward changes and challenges, looking for how you can help and grow.\n\nYou proactively look for opportunities to contribute, and suggest ideas for improvements."
  },
  {
    skill: "Mindset",
    level: "3",
    description: "Mindset L3\n\nYou pivot when necessary to changing needs, and feel comfortable running with ambiguity.\n\nYou lead with determination in the face of challenges, driving projects forward after contentious reviews, and translating feedback into actionable steps.\n\nYou're starting to become a model for growth and resiliency on the team."
  },
  {
    skill: "Mindset",
    level: "4",
    description: "Mindset L4\n\nYou're consistently solutions-oriented, and are acutely aware of your impact as a leader on the team, even in private settings.\n\nYou encourage others to maintain a healthy open mindset."
  },
  {
    skill: "Mindset",
    level: "5",
    description: "Mindset L5\n\nYou have a toolkit for managing change for other team members, and can help turn around significant morale issues on teams.\n\nYou bring poise and stability in the midst of highly complex problems or difficult team circumstances.\n\nYou provide proactive mentorship and thoughtful, actionable feedback to others on your team."
  },
  {
    skill: "Mindset",
    level: "6",
    description: "Mindset L6\n\nYou model unshakable resilience, perspective, and reflection through ambiguity and change.\n\nYou model how to balance experimentation, innovation, and execution at every level of the org.\n\nYour global perspective connects Figma's work to the evolution of design, AI, and technology."
  },
  {
    skill: "Effectiveness",
    level: "1",
    description: "Effectiveness L1\n\nYou're building an understanding of the business and its goals. Your work aims to solve key user problems, and you're starting to connect your work to business goals.\n\nYou follow up post launch to assess your work's impact and effectiveness.\n\nYou file bugs when you spot quality issues."
  },
  {
    skill: "Effectiveness",
    level: "2",
    description: "Effectiveness L2\n\nYou understand how your work contributes to the business and prioritize accordingly.\n\nYou address post launch issues and make suggestions to improve your impact.\n\nYou host bug bashes for your projects."
  },
  {
    skill: "Effectiveness",
    level: "3",
    description: "Effectiveness L3\n\nYou help drive roadmapping and planning conversations and have a deep understanding of how your work connects to business goals.\n\nYou work with appropriate urgency, consistently pushing projects forward.\n\nYou support your team in enhancing the quality and reliability of its work through iterating on processes, frameworks, critiques, etc."
  },
  {
    skill: "Effectiveness",
    level: "4",
    description: "Effectiveness L4\n\nYou push to make the highest impact possible with your work, and you can make a successful business case for it.\n\nYou start to take on projects that align with particular areas of skill you're looking to influence more deeply across the team.\n\nYou support your pillar in enhancing the quality and reliability of its work."
  },
  {
    skill: "Effectiveness",
    level: "5",
    description: "Effectiveness L5\n\nYou help others understand the business.\n\nYou identify opportunities for design to create new value for the business and garner resources to act.\n\nYou frequently suggest and execute extra projects outside of core responsibilities.\n\nYou lead by example in setting the highest quality standards for your pillar, and inspire improvement across the product with your feedback, insights, and expertise."
  },
  {
    skill: "Effectiveness",
    level: "6",
    description: "Effectiveness L6\n\nYou deliver outcomes\u2014new products, paradigms, systems, or standards\u2014that meaningfully shift Figma's trajectory.\n\nYou balance creative ambition, vision, and industry influence with driving measurable business impact."
  },
  {
    skill: "Leadership",
    level: "1",
    description: "Leadership L1\n\nYou help others by giving actionable feedback, such as:\nSuggestions and ideas for other designers during crits.\nDesign reviews for your eng partner as they're building things."
  },
  {
    skill: "Leadership",
    level: "2",
    description: "Leadership L2\n\nYou routinely help other designers/writers on the team grow, through your feedback or through skill shares.\n\nYou offer suggestions on how our product and processes can improve and help implement solutions."
  },
  {
    skill: "Leadership",
    level: "3",
    description: "Leadership L3\n\nYou're starting to up level other teammates skills through more formal coaching and mentorship (e.g. interns or more junior designers/writers). Others actively seek your feedback, and listen to your guidance.\n\nYou drive initiatives that improve our team's workflows and the lives of other designers."
  },
  {
    skill: "Leadership",
    level: "4",
    description: "Leadership L4\n\nYou lead by example\u2014never hesitating to get your hands dirty (e.g. riffing where helpful and guiding others toward action).\n\nYou've implemented and sometimes defined team processes like critiques and team meetings.\n\nYou are mentoring in bigger ways; like teaching new skills to teammates and sharing your learnings with the greater design team."
  },
  {
    skill: "Leadership",
    level: "5",
    description: "Leadership L5\n\nYou're a leader at Figma, with impact on the business and culture across the organization.\n\nYou up level other designers' leadership skills, building more design leaders within the organization."
  },
  {
    skill: "Leadership",
    level: "6",
    description: "Leadership L6\n\nYou are a multiplier of multipliers, mentoring senior leaders on organizational and industry influence\n\nYou shape Figma's design org identity, culture, and strategy, helping define excellence at scale.\n\nYou influence the global design community through writing, speaking, and mentorship."
  },
  {
    skill: "Citizenship",
    level: "1",
    description: "Citizenship L1\n\nYou volunteer to help out with team programs, like hosting cooldowns and icebreakers, or helping out with off-sites.\n\nYou participate in company culture activities, like ERGs, Maker Week, or Show & Tell.\n\nYou attend important company events like FigNation and Tech Talks in order to stay up to date."
  },
  {
    skill: "Citizenship",
    level: "2",
    description: "Citizenship L2\n\nYou suggest and implement team culture improvements.\n\nYou participate in some hiring activities when needed, like interviewing candidates and sourcing jams."
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
    description: "Citizenship L5\n\nYou represent Figma externally whether through conferences, blog posts, or other channels.\n\nYou help attract top talent to the organization. People join Figma because they're excited to learn from you, and work with you."
  },
  {
    skill: "Citizenship",
    level: "6",
    description: "Citizenship L6\n\nYou're a global ambassador for Figma, attracting top talent and partnerships.\n\nYou create programs and platforms that elevate underrepresented voices in design.\n\nYou embody and evolve Figma's cultural values, ensuring design leadership remains inclusive, curious, and kind."
  }
];
export {
  levelDescriptions
};
