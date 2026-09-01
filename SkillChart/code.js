(() => {
  // levelinfo.tsx
  var levelDescriptions = [
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
    },
    {
      skill: "Influence & Decision Making",
      level: "1",
      description: "Influence & Decision Making M3\n\n\u{1F3AF} Your team trusts you as a subject matter expert of your domain.\n\n\u{1F3AF} You make clear, informed decisions about the day-to-day work of your team with minimal support.\n\n\u{1F3A8} You guide your team to balance user, business, and quality goals.",
      role: "Managers"
    },
    {
      skill: "Influence & Decision Making",
      level: "2",
      description: "Influence & Decision Making M4\n\n\u{1F3AF} Teams across the company consult with you as a subject matter expert in your domain.\n\n\u{1F3AF} You make decisions that affect the longer-term direction of your team(s), and incorporate input from your manager and stakeholders.\n\n\u{1F3A8} You influence adjacent teams through a strong user-centered perspective.",
      role: "Managers"
    },
    {
      skill: "Influence & Decision Making",
      level: "3",
      description: "Influence & Decision Making M5\n\n\u{1F3AF} People outside of Figma are starting to seek you out for advice, mentorship, and/or functional expertise.\n\n\u{1F3AF} You strategically identify areas where work/investment is not paying off and direct your teams to pivot accordingly.\n\n\u{1F3A8} You shape product strategy through design insights and cross-team collaboration.",
      role: "Managers"
    },
    {
      skill: "Influence & Decision Making",
      level: "4",
      description: "Influence & Decision Making M6\n\n\u{1F3AF} You work across the company to inspire Figmates to your vision, resolve ambiguity, and streamline execution for your organization.\n\n\u{1F3AF} You are developing in your thought leadership and can solve complex and ambiguous problems that impact the company's long-term success.",
      role: "Managers"
    },
    {
      skill: "Influence & Decision Making",
      level: "5",
      description: "Influence & Decision Making E1\n\n\u{1F3AF} You actively influence other executives and represent the organization on matters of great significance.\n\n\u{1F3AF} You are broadly recognized as a thought leader both internally and externally.\n\n\u{1F3A8} You shape company-wide strategy grounded in customer and design excellence.",
      role: "Managers"
    },
    {
      skill: "Influence & Decision Making",
      level: "6",
      description: "Influence & Decision Making E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Achieve Business Results",
      level: "1",
      description: "Achieve Business Results M3\n\n\u{1F3AF} You work with leaders in your organization to define and communicate team goals and metrics.\n\n\u{1F3AF} As a maker, you partner with leaders and ICs across the team to get the work done.\n\n\u{1F3AF} You act as an owner of your team's work, and use data to ensure that goals are being hit.",
      role: "Managers"
    },
    {
      skill: "Achieve Business Results",
      level: "2",
      description: "Achieve Business Results M4\n\n\u{1F3AF} You are able to show your's and your team's impact (directly or indirectly) as related to company-wide metrics & initiatives.\n\n\u{1F3AF} As a maker, you partner with leaders and ICs across the team to get the work done.\n\n\u{1F3A8} You lead design strategies that move company metrics and drive customer success.",
      role: "Managers"
    },
    {
      skill: "Achieve Business Results",
      level: "3",
      description: "Achieve Business Results M5\n\n\u{1F3AF} You are a key driver counted on for core business metrics.\n\n\u{1F3AF} As a maker and coach, you drive results directly as well as through other leaders and ICs.\n\n\u{1F3A8} You identify opportunities where design creates competitive or business advantage.",
      role: "Managers"
    },
    {
      skill: "Achieve Business Results",
      level: "4",
      description: "Achieve Business Results M6\n\n\u{1F3AF} You are a key driver for core business metrics.\n\n\u{1F3AF} As a maker and coach, you drive results directly as well as through other leaders and ICs.\n\n\u{1F3A8} You lead large design initiatives that significantly impact company results.\n\n\u{1F3A8} You assist with Sales motions (customer workshops, media briefings, etc.) to help Figma close deals.",
      role: "Managers"
    },
    {
      skill: "Achieve Business Results",
      level: "5",
      description: "Achieve Business Results E1\n\n\u{1F3AF} You are accountable for key business outcomes. You define success metrics at scale and ensure the leaders on your team are aligned, and delivering.\n\n\u{1F3AF} As a maker, you partner with leaders and ICs across the team to get the work done.\n\n\u{1F3A8} You champion design, internally and externally, as a core lever for innovation and long-term business performance.",
      role: "Managers"
    },
    {
      skill: "Achieve Business Results",
      level: "6",
      description: "Achieve Business Results E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Collaboration",
      level: "1",
      description: "Collaboration M3\n\n\u{1F3AF} You build relationships and proactive communication channels with your reports and cross-functional partners.\n\n\u{1F3AF} With support, you navigate ambiguity and conflict within the team and between teams to drive bigger outcomes.\n\n\u{1F3A8} You foster open, inclusive design rituals that connect design, product, and engineering and encourage constructive critique.",
      role: "Managers"
    },
    {
      skill: "Collaboration",
      level: "2",
      description: "Collaboration M4\n\n\u{1F3AF} You influence cross-functional groups as a trusted partner, and execute effectively against the team's plans and goals.\n\n\u{1F3AF} You proactively surface and confront conflict, addressing directly and coming to the best outcome holistically, not just for your team.\n\n\u{1F3A8} You lead design collaborations (vision sprints, crits, etc.) that align teams around shared outcomes.",
      role: "Managers"
    },
    {
      skill: "Collaboration",
      level: "3",
      description: "Collaboration M5\n\n\u{1F3AF} You navigate complex cross-team dependencies and relationships.\n\n\u{1F3AF} You often manage/guide others who have more domain expertise than you.\n\n\u{1F3AF} You are able to hold contradicting views at once, remove personal bias and navigate outcomes to be in the best interest of Figma.",
      role: "Managers"
    },
    {
      skill: "Collaboration",
      level: "4",
      description: "Collaboration M6\n\n\u{1F3AF} You create and leverage relationships with senior leaders throughout the org to drive collaboration cross-functionally.\n\n\u{1F3AF} You are able to objectively weigh pros and cons of significant conflict and navigate with diplomacy.\n\n\u{1F3A8} You champion collaboration models that position design as a strategic partner in company direction.",
      role: "Managers"
    },
    {
      skill: "Collaboration",
      level: "5",
      description: `Collaboration E1

\u{1F3AF} You influence internal and external partners globally to champion the company's strategy and mission.

\u{1F3AF} You serve as "deputies" for the C-level executives.

\u{1F3AF} You solve complex cross-functional conflicts or problems that impact the company, in partnership with executive leadership.

\u{1F3A8} You model executive partnership and inclusive leadership that positions design as a driver of innovation.`,
      role: "Managers"
    },
    {
      skill: "Collaboration",
      level: "6",
      description: "Collaboration E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Communication",
      level: "1",
      description: "Communication M3\n\n\u{1F3AF} You actively share your team's work with others\n\n\u{1F3AF} With support, you connect the work completed by your team to your broader team.\n\n\u{1F3AF} You are developing your ability to translate and present ideas and plans.\n\n\u{1F3A8} You use storytelling, visuals, and prototypes to clarify design intent, align partners, and drive decisions.",
      role: "Managers"
    },
    {
      skill: "Communication",
      level: "2",
      description: "Communication M4\n\n\u{1F3AF} You proactively present to and interface with senior leaders across teams/departments representing the work of your team.\n\n\u{1F3AF} You actively adjust your communication style with different types of people and situations, communicating with empathy, directly and clearly.\n\n\u{1F3AF} With support, you gain buy-in for your ideas through concise, compelling asks and storytelling.\n\n\u{1F3A8} You coach designers to tailor messages to audience needs, connecting user insights to business goals.",
      role: "Managers"
    },
    {
      skill: "Communication",
      level: "3",
      description: "Communication M5\n\n\u{1F3AF} You often advise on decisions outside of your core area and model clear, empathetic and direct communication for your team and department.\n\n\u{1F3AF} You give credit to the work of others, whenever appropriate, and speaking to the collective efforts of team.\n\n\u{1F3A8} You elevate the storytelling quality of design presentations, critiques, and leadership updates.\n\n\u{1F3A8} You guide senior designers and managers to express design impact in a way that inspires confidence and alignment.",
      role: "Managers"
    },
    {
      skill: "Communication",
      level: "4",
      description: "Communication M6\n\n\u{1F3AF} You inspire your team with visionary communication, providing purpose and anchoring to the bigger picture.\n\n\u{1F3AF} You proactively share and coach others to share perspectives cross-functionally.\n\n\u{1F3AF} You are often presenting at org or company-wide meetings, and need little help in conveying ideas/perspectives\n\n\u{1F3A8} You represent design's vision and priorities in executive and company-wide forums, as well as external events.",
      role: "Managers"
    },
    {
      skill: "Communication",
      level: "5",
      description: "Communication E1\n\n\u{1F3AF} You are a senior company spokesperson, both internally and externally.\n\n\u{1F3AF} You proactively communicate perspectives across the company, including those that may be unpopular opinion, and coach others to do the same.\n\n\u{1F3A8} You represent Figma's design vision publicly, shaping the industry's understanding of design leadership.",
      role: "Managers"
    },
    {
      skill: "Communication",
      level: "6",
      description: "Communication E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Talent",
      level: "1",
      description: "Talent M3\n\n\u{1F3AF} You are actively involved in your team's hiring processes, including creation of job descriptions and interview panels, partnering with recruiters and interviewers as needed.\n\n\u{1F3AF} You focus on hiring by reviewing resumes, encouraging referrals, posting on LinkedIn, and reaching out to your network.\n\n\u{1F3A8} You proactively build your talent pipeline, evaluating design portfolios to understand craft and potential.",
      role: "Managers"
    },
    {
      skill: "Talent",
      level: "2",
      description: "Talent M4\n\n\u{1F3AF} You are accountable for your team's hiring goals.\n\n\u{1F3AF} You model effective hiring manager practices and disrupt biases you observe through the hiring and selection process.\n\n\u{1F3AF} With support, you create effective org designs, which consider the long term balance of your team and representation across your team on all variables (background, skillsets, etc).\n\n\u{1F3A8} You coach designers to participate effectively in hiring and improve how your team reviews portfolios and conducts design crit interviews.",
      role: "Managers"
    },
    {
      skill: "Talent",
      level: "3",
      description: "Talent M5\n\n\u{1F3AF} You have a track record of hiring exceptional talent and help close strong candidates across functions.\n\n\u{1F3AF} You plan how your org will scale over the next year and coach managers on org design and inclusive hiring.\n\n\u{1F3A8} You identify gaps in design craft, systems thinking, or leadership, and shape hiring strategies to address them.\n\n\u{1F3A8} You leverage and scale your network to source top design talent for Figma's design team.",
      role: "Managers"
    },
    {
      skill: "Talent",
      level: "4",
      description: "Talent M6\n\n\u{1F3AF} You build the optimal structure for your organization 2+ years out, and influence org design and/or hiring decisions with partner teams\n\n\u{1F3AF} You use data to hold your leadership team accountable to hiring exceptional candidates\n\n\u{1F3AF} You actively champion BEI within hiring searches across the org.\n\n\u{1F3AF} You play an active role in hiring key leadership roles across Figma.\n\n\u{1F3A8} You define the bar for design craft and leadership in hiring at scale, ensuring clear and consistent evaluation.",
      role: "Managers"
    },
    {
      skill: "Talent",
      level: "5",
      description: "Talent E1\n\n\u{1F3AF} You are skilled at understanding the levels and skills that will be needed to grow your org 3+ years into the future.\n\n\u{1F3AF} You strategically give advice to leaders throughout the organization on how to build representative and efficient teams.\n\n\u{1F3AF} You hire senior leaders who build functions.\n\n\u{1F3A8} You set the vision for design hiring quality and help shape how design leadership is evaluated at Figma.\n\n\u{1F3A8} You elevate Figma's external presence to attract top design talent through thought leadership and strong interviewing culture.",
      role: "Managers"
    },
    {
      skill: "Talent",
      level: "6",
      description: "Talent E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Culture",
      level: "1",
      description: "Culture M3\n\n\u{1F3AF} You are infusing play in your team activities\n\n\u{1F3AF} You are prioritizing psychological safety and inclusive practices on your team to ensure that everyone feels recognized, appreciated, and comfortable speaking up.\n\n\u{1F3A8} You reinforce design values by encouraging curiosity, openness in crit, and appreciation for thoughtful craft.\n\n\u{1F3A8} You shape team rituals that encourage learning, connection, and alignment across design and XFN partners.",
      role: "Managers"
    },
    {
      skill: "Culture",
      level: "2",
      description: "Culture M4\n\n\u{1F3AF} You have a strong pulse on and strategy around the engagement and retention of your teams.\n\n\u{1F3AF} You are regularly refining your org strategy, with support from your People Partner, through insights learned from culture and pulse surveys.\n\n\u{1F3AF} You coach your team on how to create inclusion and psychological safety on their teams. You give constructive, meaningful feedback to others when you see bias, disrupt your own bias, and invite others to hold you accountable.",
      role: "Managers"
    },
    {
      skill: "Culture",
      level: "3",
      description: "Culture M5\n\n\u{1F3AF} You build inclusive practices and anti-bias throughout your org, and model continuous learning and openness to feedback.\n\n\u{1F3A8} You promote shared standards for craft and a culture of thoughtful iteration.\n\n\u{1F3A8} You champion a design culture that values quality, critique, and system-level thinking across the entire product area.",
      role: "Managers"
    },
    {
      skill: "Culture",
      level: "4",
      description: "Culture M6\n\n\u{1F3AF} You set a cultural standard for your organization, and work with your leadership team to do the same.\n\n\u{1F3AF} You optimize team operating principles, engagement, effectiveness, and employee experience.\n\n\u{1F3AF} You scale inclusive practices and anti-bias throughout all levels of your org (e.g., You keep a close pulse on high potential talent within the organization in an effort to pursue appropriate sponsorship).\n\n\u{1F3A8} You influence XFN leaders to understand and support the cultural needs of a high-performing design org.",
      role: "Managers"
    },
    {
      skill: "Culture",
      level: "5",
      description: "Culture E1\n\n\u{1F3AF} You and your team are cultural role models for the rest of the company.\n\n\u{1F3AF} You motivate and energize the team to rally around the department and company goals.\n\n\u{1F3AF} You are accountable for fostering a company-wide culture of inclusive practices.\n\n\u{1F3A8} You shape the culture of design at Figma, helping the company understand the impact of great design.\n\n\u{1F3A8} You amplify the design team's presence externally, positioning Figma as a great place to work at as a designer.",
      role: "Managers"
    },
    {
      skill: "Culture",
      level: "6",
      description: "Culture E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Coaching",
      level: "1",
      description: "Coaching M3\n\n\u{1F3AF} You are communicating job/role expectations with your direct reports\n\n\u{1F3AF} You are having quarterly development conversations with each of your direct reports to support their career journey, and are consistently seeking feedback about your directs from peers & stakeholders\n\n\u{1F3AF} You are mediating conflict as it arises within your direct team\n\n\u{1F3AF} You are proactively looping in your people & employee relations partners to support with any people issues within your team\n\n\u{1F3A8} You help designers build confidence by guiding them through decisions, feedback, and early ambiguity.",
      role: "Managers"
    },
    {
      skill: "Coaching",
      level: "2",
      description: "Coaching M4\n\n\u{1F3AF} You hold your directs accountable for managing performance.\n\n\u{1F3AF} You navigate difficult conversations with others that both get the message across but also strengthen rapport.\n\n\u{1F3AF} You foster and support development plans to help your team (both directs & skips) reach their potential and career aspirations.\n\n\u{1F3AF} You offer mentorship and coaching to people who do not directly report to you, both formally and informally.\n\n\u{1F3A8} You support skill-building across design disciplines, helping individuals grow in craft, product thinking, and collaboration.",
      role: "Managers"
    },
    {
      skill: "Coaching",
      level: "3",
      description: "Coaching M5\n\n\u{1F3AF} You foster a high-performance and feedback-forward culture across the department through appropriate platforms (e.g., skip-level 1:1s)\n\n\u{1F3AF} You hold your teams accountable for their performance and results.\n\n\u{1F3AF} You actively mentor strong leaders and high-performing peers.\n\n\u{1F3AF} You collaborate with other leaders to ensure individuals across the department are well-leveraged and continuously growing.\n\n\u{1F3A8} You help managers coach their teams through complex UX and product challenges with clarity and confidence.",
      role: "Managers"
    },
    {
      skill: "Coaching",
      level: "4",
      description: 'Coaching M6\n\n\u{1F3AF} You are coaching other managers on your team and across the company, advising them on management best practices.\n\n\u{1F3AF} You are a skilled and proactive partner at spotting "smoke before the fire" when it comes to potential people issues.\n\n\u{1F3A8} You enable your design leaders to operate effectively without you always being involved.\n\n\u{1F3A8} You push your team to engage in external design leadership opportunities (conferences, writing, etc.)',
      role: "Managers"
    },
    {
      skill: "Coaching",
      level: "5",
      description: "Coaching E1\n\n\u{1F3AF} You are enabling coaching and performance growth for your org at scale.\n\n\u{1F3AF} You are often coaching high level leaders and presenting to others on growth and development.\n\n\u{1F3AF} You are exemplifying company-wide standards on coaching, learning and development.\n\n\u{1F3A8} You define the philosophy of design leadership at Figma and coach leaders on modeling our values in feedback, quality, and growth.\n\n\u{1F3A8} You represent design leadership standards internally and externally, shaping how Figma grows great design leaders.",
      role: "Managers"
    },
    {
      skill: "Coaching",
      level: "6",
      description: "Coaching E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Design Quality",
      level: "1",
      description: "Design Quality M3\n\n\u{1F3A8} You give clear, actionable craft feedback.\n\n\u{1F3A8} You step in as a maker when needed to demonstrate expectations or unblock work.\n\n\u{1F3A8} You ensure work is accurate, on brand, and aligned with guidelines.\n\n\u{1F3A8} You maintain a steady critique cadence for your team.",
      role: "Managers"
    },
    {
      skill: "Design Quality",
      level: "2",
      description: "Design Quality M4\n\n\u{1F3A8} You set and uphold a consistent quality bar across multiple teams.\n\n\u{1F3A8} You coach designers to identify quality gaps and articulate rationale.\n\n\u{1F3A8} You are recognized cross-functionally as a strong evaluator of design quality.",
      role: "Managers"
    },
    {
      skill: "Design Quality",
      level: "3",
      description: "Design Quality M5\n\n\u{1F3A8} You push the craft vision quality bar for your pillar.\n\n\u{1F3A8} You help evolve org-wide quality mechanisms including frameworks, principles, and design reviews.\n\n\u{1F3A8} You ensure your pillar's design output takes platform-level considerations into account, pushing for cross-pillar collaboration as necessary.",
      role: "Managers"
    },
    {
      skill: "Design Quality",
      level: "4",
      description: "Design Quality M6\n\n\u{1F3A8} You set craft direction across multiple surface areas and time horizons.\n\n\u{1F3A8} You raise leadership-level craft taste by coaching managers, senior ICs, and XFN leaders on 'what great looks like'.\n\n\u{1F3A8} You connect craft decisions to long-term product and business strategy.",
      role: "Managers"
    },
    {
      skill: "Design Quality",
      level: "5",
      description: "Design Quality E1\n\n\u{1F3A8} You define Figma-wide craft excellence standards.\n\n\u{1F3A8} You represent world-class design quality externally.\n\n\u{1F3A8} You ensure multi-product output is coherent across Figma's entire platform.\n\n\u{1F3A8} You create an environment where craft thrives across the organization.",
      role: "Managers"
    },
    {
      skill: "Design Quality",
      level: "6",
      description: "Design Quality E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Systems & Process",
      level: "1",
      description: "Systems & Process M3\n\n\u{1F3A8} You establish and run core team rituals such as crits, reviews, and async sharing.\n\n\u{1F3A8} You ensure strong PM and engineering collaboration and shared clarity on requirements.\n\n\u{1F3A8} You coach ICs on healthy process habits, documentation, and workflows.\n\n\u{1F3A8} You begin improving team-level systems and standards.",
      role: "Managers"
    },
    {
      skill: "Systems & Process",
      level: "2",
      description: "Systems & Process M4\n\n\u{1F3A8} You anticipate dependencies and align cross-team decisions.\n\n\u{1F3A8} You guide teams on prototyping, research, and validation approaches.\n\n\u{1F3A8} You influence partners on how design should operate within the product development process.",
      role: "Managers"
    },
    {
      skill: "Systems & Process",
      level: "3",
      description: "Systems & Process M5\n\n\u{1F3A8} You build multi-team systems that reduce ambiguity and execution friction.\n\n\u{1F3A8} You drive cross-pillar alignment on workflow and quality gates to achieve multi-product consistency.\n\n\u{1F3A8} You partner with DesignOps, Research, Data, Design Systems, and PM leadership to shape org-wide practices.",
      role: "Managers"
    },
    {
      skill: "Systems & Process",
      level: "4",
      description: "Systems & Process M6\n\n\u{1F3A8} You shape long-term operational models for design at scale.\n\n\u{1F3A8} You lead major systems-level initiatives, such as complex cross-platform patterns.\n\n\u{1F3A8} You ensure design, research, writing, and systems teams operate cohesively.",
      role: "Managers"
    },
    {
      skill: "Systems & Process",
      level: "5",
      description: "Systems & Process E1\n\n\u{1F3A8} You define the enterprise operating model for design.\n\n\u{1F3A8} You enable high-leverage design operations across staffing, frameworks, and cross-org systems.\n\n\u{1F3A8} You elevate design's role in company-wide planning and execution.",
      role: "Managers"
    },
    {
      skill: "Systems & Process",
      level: "6",
      description: "Systems & Process E2\n\nTBD",
      role: "Managers"
    },
    {
      skill: "Strategy & Vision",
      level: "1",
      description: "Strategy & Vision M3\n\n\u{1F3A8} You help ICs clarify goals, constraints, and user needs, knowing when deeper research is needed.\n\n\u{1F3A8} You facilitate early problem-framing activities and hypothesis development.\n\n\u{1F3A8} You escalate upstream strategy issues when they impact team direction.",
      role: "Managers"
    },
    {
      skill: "Strategy & Vision",
      level: "2",
      description: "Strategy & Vision M4\n\n\u{1F3A8} You own vision for a functional area or surface, driving new strategic explorations.\n\n\u{1F3A8} You coach teams to handle ambiguity and define impactful requirements.\n\n\u{1F3A8} You align partners on shared direction and evaluate competing paths.",
      role: "Managers"
    },
    {
      skill: "Strategy & Vision",
      level: "3",
      description: "Strategy & Vision M5\n\n\u{1F3A8} You lead major vision initiatives that influence pillar-level roadmaps.\n\n\u{1F3A8} You anticipate future opportunities through research, customer signals, and industry insight.\n\n\u{1F3A8} You align multiple teams around a coherent strategic narrative.",
      role: "Managers"
    },
    {
      skill: "Strategy & Vision",
      level: "4",
      description: "Strategy & Vision M6\n\n\u{1F3A8} You shape multi-year product strategy for broad surfaces or cross-product experiences.\n\n\u{1F3A8} You connect design strategy to market direction, and speak on behalf of Figma's product vision externally as appropriate (conferences, speaking engagements, etc.)\n\n\u{1F3A8} You lead high-ambiguity explorations and identify major strategic bets, helping to shape company-level narrative.",
      role: "Managers"
    },
    {
      skill: "Strategy & Vision",
      level: "5",
      description: "Strategy & Vision E1\n\n\u{1F3A8} You define company-wide strategic design vision with executive peers.\n\n\u{1F3A8} You spot long-range industry shifts and position Figma ahead of them.\n\n\u{1F3A8} You ensure design strategy is integrated into planning and messaging across the organization.",
      role: "Managers"
    },
    {
      skill: "Strategy & Vision",
      level: "6",
      description: "Strategy & Vision E2\n\nTBD",
      role: "Managers"
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
  var INDIVIDUAL_LEVEL_COUNT = 6;
  var MANAGEMENT_LEVEL_COUNT = 5;
  var LEVEL_HEIGHT = 130;
  var SKILL_FRAME_OVERHEAD = 66;
  var WIDGET_VERTICAL_OVERHEAD = 450;
  var DASHED_LINE_SVG = `<svg width="3481" height="4" viewBox="0 0 3481 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2H3481" stroke="black" stroke-width="3" stroke-dasharray="8 8" />
</svg>`;
  var ACTIVE_LINE_SVG = `<svg width="3481" height="4" viewBox="0 0 3481 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2H3481" stroke="black" stroke-opacity="0.33" stroke-width="3" />
</svg>`;
  var MANAGER_LEVEL_LABELS = ["M3", "M4", "M5", "M6", "E1"];
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
    skillDescriptions: ["Written, verbal, and interpersonal skills", "Sharing work and incorporating feedback", "Resiliency and growth orientation"]
  };
  var impactCategory = {
    name: "Impact",
    color: "#FFCD29",
    skills: ["Effectiveness", "Leadership", "Citizenship"],
    skillDescriptions: ["Output, follow-through, and business impact", "Mentorship, ability to influence and drive change", "Improving our culture, hiring, and company practices"]
  };
  var managerStrategyCategory = {
    name: "Strategy",
    stateKey: "Strategy & Results",
    color: "#9747FF",
    skills: ["Influence", "Results"],
    descriptionKeys: ["Influence & Decision Making", "Achieve Business Results"],
    skillDescriptions: ["Making decisions with intention", "The results of your work on the business"]
  };
  var managerCollaborationCategory = {
    name: "Collaboration",
    stateKey: "Collaboration & Communication",
    color: "#14AE5C",
    skills: ["Collaboration", "Communication"],
    skillDescriptions: ["How you work with others and affect change", "How and what you share with others"]
  };
  var managerPeopleCategory = {
    name: "Management",
    stateKey: "People & Team Management",
    color: "#F24822",
    skills: ["Talent", "Culture", "Coaching"],
    skillDescriptions: ["Building your team", "How your team operates", "Behaviors and practices"]
  };
  var managerCraftCategory = {
    name: "Craft",
    color: "#0D99FF",
    skills: ["Design Quality", "Systems", "Vision"],
    descriptionKeys: ["Design Quality", "Systems & Process", "Strategy & Vision"],
    skillDescriptions: [
      "Guide quality through feedback, taste, direction, and hands-on craft.",
      "Create, evolve, and scale processes that enable great design outcomes.",
      "Define the right problems, turn ambiguity into clarity, and shape product vision."
    ]
  };
  var roleCategories = {
    Design: [strategyCategory, craftCategory, collabCategory, impactCategory],
    Writing: [strategyCategory, writingCraftCategory, collabCategory, impactCategory],
    Managers: [managerStrategyCategory, managerCraftCategory, managerCollaborationCategory, managerPeopleCategory]
  };
  function getLevelLabel(role, level) {
    return role === "Managers" ? MANAGER_LEVEL_LABELS[level - 1] : `L${level}`;
  }
  function Widget() {
    const voteMap = useSyncedMap("skill-level");
    const [userLevel, setUserLevel] = useSyncedState("level", 1);
    const [showLevels, setShowLevels] = useSyncedState("isShown", false);
    const [role, setRole] = useSyncedState("role", "Design");
    const roleOptions = [
      { option: "Design", label: "Design" },
      { option: "Writing", label: "Writing" },
      { option: "Managers", label: "Manager" }
    ];
    const categories = roleCategories[role];
    const widgetWidth = role === "Writing" ? 3990 : role === "Managers" ? 3190 : 3750;
    const dividerWidth = role === "Writing" ? 3806 : role === "Managers" ? 2990 : 3550;
    const levelCount = role === "Managers" ? MANAGEMENT_LEVEL_COUNT : INDIVIDUAL_LEVEL_COUNT;
    const chartHeight = levelCount * LEVEL_HEIGHT;
    const skillFrameHeight = chartHeight + SKILL_FRAME_OVERHEAD;
    const widgetHeight = chartHeight + WIDGET_VERTICAL_OVERHEAD;
    const visibleUserLevel = Math.min(userLevel, levelCount);
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
      width: widgetWidth,
      height: widgetHeight,
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
      width: dividerWidth,
      height: chartHeight
    }, Array.from({ length: levelCount }, (_, index) => index + 1).map((level) => /* @__PURE__ */ figma.widget.h(Frame, {
      name: `Divider-L${level}`,
      key: `Divider-L${level}`,
      opacity: 0.1,
      x: 0,
      y: (levelCount - level) * LEVEL_HEIGHT,
      strokeWidth: 0,
      overflow: "visible",
      hidden: showLevels,
      width: dividerWidth,
      height: LEVEL_HEIGHT,
      onClick: () => {
        setUserLevel(level);
      },
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Divider-L${level}-Bg`,
      y: 0.5,
      fill: "#FFF",
      width: 150,
      height: LEVEL_HEIGHT
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: `Divider-L${level}-Line`,
      height: 3,
      width: dividerWidth,
      src: DASHED_LINE_SVG
    }))), /* @__PURE__ */ figma.widget.h(Text, {
      name: "Level-Label",
      y: {
        type: "top",
        offset: chartHeight + 10 - visibleUserLevel * LEVEL_HEIGHT
      },
      hidden: showLevels,
      fill: "#A7A7A7",
      width: 105,
      lineHeight: "150%",
      fontFamily: "Inter",
      letterSpacing: 1.456,
      fontWeight: 700
    }, "CURRENT LEVEL (", getLevelLabel(role, visibleUserLevel), ")"), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-Line-Active",
      y: {
        type: "top",
        offset: chartHeight - visibleUserLevel * LEVEL_HEIGHT
      },
      hidden: showLevels,
      height: 3,
      width: dividerWidth,
      src: ACTIVE_LINE_SVG
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
        var _a;
        const descriptionKey = ((_a = category.descriptionKeys) == null ? void 0 : _a[i]) || skill;
        const stateKey = category.stateKey || category.name;
        return Skill(skill, descriptionKey, category.color, category.skillDescriptions[i], `${stateKey}-${descriptionKey}`, role, showLevels, voteMap, levelCount, chartHeight, skillFrameHeight);
      });
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Categories",
      overflow: "visible",
      spacing: 30
    }, categories.map((category) => {
      return Category(category.name, category.color, `${category.name}`, category.skills.length);
    }))));
  }
  function Category(name, color, category_key, skillCount) {
    return /* @__PURE__ */ figma.widget.h(Text, {
      name: `Category-${name}`,
      key: `Category-${category_key}`,
      fill: color,
      width: skillCount * 250 + (skillCount - 1) * 30,
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
  function Skill(name, description_key, color, skill_description, skill_key, role, showLevels, voteMap, levelCount, chartHeight, skillFrameHeight) {
    const storedLevel = voteMap.get(skill_key);
    const selectedLevel = storedLevel ? Math.min(storedLevel, levelCount) : void 0;
    const offsetA = skillFrameHeight + 18 - (selectedLevel || 1) * LEVEL_HEIGHT;
    const activeOpacity = 0.8;
    const hoverOpacity = 0.4;
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: `Skill-${name}`,
      key: `Skill-${skill_key}`,
      width: 250,
      height: skillFrameHeight
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
      height: chartHeight
    }), Array.from({ length: levelCount }, (_, index) => levelCount - index).map((level) => /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-${level}-${name}`,
      key: `Skill-Block-${level}-${skill_key}`,
      opacity: selectedLevel === level ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: level === 1 ? 0 : 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: level * LEVEL_HEIGHT
    })), Array.from({ length: levelCount }, (_, index) => levelCount - index).map((level) => {
      var _a;
      return /* @__PURE__ */ figma.widget.h(Rectangle, {
        name: `Skill-Hit-Area-${level}-${name}`,
        key: `Skill-Hit-Area-${level}-${skill_key}`,
        opacity: 0,
        y: {
          type: "bottom",
          offset: (level - 1) * LEVEL_HEIGHT
        },
        fill: color,
        width: 250,
        height: LEVEL_HEIGHT,
        onClick: () => {
          voteMap.set(skill_key, level);
        },
        hoverStyle: {
          opacity: selectedLevel === level ? 0 : hoverOpacity
        },
        tooltip: ((_a = levelDescriptions.find((description) => {
          return description.skill === description_key && description.level === `${level}` && description.role === (role === "Managers" ? "Managers" : void 0);
        })) == null ? void 0 : _a.description) || `${name} L${level}`
      });
    }), /* @__PURE__ */ figma.widget.h(Text, {
      name: `Skill-Level-${name}`,
      key: `Skill-Level-${skill_key}`,
      hidden: showLevels ? true : false,
      opacity: selectedLevel ? 0.9 : 0,
      y: {
        type: "top",
        offset: offsetA
      },
      fill: color === "#FFCD29" ? "#876C14" : "#FFF",
      width: 250,
      height: 38,
      horizontalAlignText: "center",
      lineHeight: "150%",
      fontFamily: "Inter",
      fontSize: 24,
      letterSpacing: -0.456,
      fontWeight: 700
    }, getLevelLabel(role, selectedLevel || 1)), /* @__PURE__ */ figma.widget.h(Text, {
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
