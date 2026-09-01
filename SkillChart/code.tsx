const { widget } = figma;
const {
  useSyncedState,
  useSyncedMap,
  usePropertyMenu,
  AutoLayout,
  Frame,
  Rectangle,
  Text,
  SVG,
} = widget;

import { levelDescriptions } from './levelinfo';


const INDIVIDUAL_LEVEL_COUNT = 6;
const MANAGEMENT_LEVEL_COUNT = 5;
const LEVEL_HEIGHT = 130;
const SKILL_FRAME_OVERHEAD = 66;
const WIDGET_VERTICAL_OVERHEAD = 450;
const DASHED_LINE_SVG = `<svg width="3481" height="4" viewBox="0 0 3481 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2H3481" stroke="black" stroke-width="3" stroke-dasharray="8 8" />
</svg>`;
const ACTIVE_LINE_SVG = `<svg width="3481" height="4" viewBox="0 0 3481 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2H3481" stroke="black" stroke-opacity="0.33" stroke-width="3" />
</svg>`;

type Category = {
  name: string;
  color: string;
  skills: string[];
  skillDescriptions: string[];
  descriptionKeys?: string[];
  stateKey?: string;
};

type Role = "Design" | "Writing" | "Managers";

// E2 descriptions remain in levelinfo.tsx, ready to re-enable once the criteria are complete.
const MANAGER_LEVEL_LABELS = ["M3", "M4", "M5", "M6", "E1"];

const strategyCategory = {
  name: "Strategy",
  color: "#9747FF",
  skills: ["Product", "Research", "Vision"],
  skillDescriptions: ["What we're building and why", "Qualitative and quantitative evidence", "Future pathways and how things fit together"],
};
const craftCategory = {
  name: "Craft",
  color: "#0D99FF",
  skills: ["Visual", "Interaction", "Systems"],
  skillDescriptions: ["How things look", "How things behave", "Underlying models, IAs, etc."],
};
const writingCraftCategory = {
  name: "Writing",
  color: "#0D99FF",
  skills: ["Content", "Copywriting", "Systems\u200B", "Design"],
  skillDescriptions: ["Figuring out what to write", "Finding the perfect words", "Building consistency and cohesion", "Developing your UX design chops"],
};
const collabCategory = {
  name: "Collaboration",
  color: "#14AE5C",
  skills: ["Communication", "Process", "Mindset"],
  skillDescriptions: ["Written, verbal, and interpersonal skills", "Sharing work and incorporating feedback", "Resiliency and growth orientation"],
};
const impactCategory = {
  name: "Impact",
  color: "#FFCD29",
  skills: ["Effectiveness", "Leadership", "Citizenship"],
  skillDescriptions: ["Output, follow-through, and business impact", "Mentorship, ability to influence and drive change", "Improving our culture, hiring, and company practices"],
};

const managerStrategyCategory = {
  name: "Strategy",
  stateKey: "Strategy & Results",
  color: "#9747FF",
  skills: ["Influence", "Results"],
  descriptionKeys: ["Influence & Decision Making", "Achieve Business Results"],
  skillDescriptions: ["Making decisions with intention", "The results of your work on the business"],
};
const managerCollaborationCategory = {
  name: "Collaboration",
  stateKey: "Collaboration & Communication",
  color: "#14AE5C",
  skills: ["Collaboration", "Communication"],
  skillDescriptions: ["How you work with others and affect change", "How and what you share with others"],
};
const managerPeopleCategory = {
  name: "Management",
  stateKey: "People & Team Management",
  color: "#F24822",
  skills: ["Talent", "Culture", "Coaching"],
  skillDescriptions: ["Building your team", "How your team operates", "Behaviors and practices"],
};
const managerCraftCategory = {
  name: "Craft",
  color: "#0D99FF",
  skills: ["Design Quality", "Systems", "Vision"],
  descriptionKeys: ["Design Quality", "Systems & Process", "Strategy & Vision"],
  skillDescriptions: [
    "Guide quality through feedback, taste, direction, and hands-on craft.",
    "Create, evolve, and scale processes that enable great design outcomes.",
    "Define the right problems, turn ambiguity into clarity, and shape product vision.",
  ],
};

const roleCategories: Record<Role, Category[]> = {
  Design: [strategyCategory, craftCategory, collabCategory, impactCategory],
  Writing: [strategyCategory, writingCraftCategory, collabCategory, impactCategory],
  Managers: [managerStrategyCategory, managerCraftCategory, managerCollaborationCategory, managerPeopleCategory],
};

function getLevelLabel(role: Role, level: number) {
  return role === "Managers" ? MANAGER_LEVEL_LABELS[level - 1] : `L${level}`;
}

function Widget() {
  const voteMap = useSyncedMap<number>("skill-level")
  const [userLevel, setUserLevel] = useSyncedState<number>('level', 1)
  const [showLevels, setShowLevels] = useSyncedState<boolean>("isShown", false)
  const [role, setRole] = useSyncedState<Role>("role", "Design")
  const roleOptions = [
    {option: "Design", label: "Design"},
    {option: "Writing", label: "Writing"},
    {option: "Managers", label: "Manager"},
  ]
  const categories = roleCategories[role]
  const widgetWidth = role === "Writing" ? 3990 : role === "Managers" ? 3190 : 3750
  const dividerWidth = role === "Writing" ? 3806 : role === "Managers" ? 2990 : 3550
  const levelCount = role === "Managers" ? MANAGEMENT_LEVEL_COUNT : INDIVIDUAL_LEVEL_COUNT
  const chartHeight = levelCount * LEVEL_HEIGHT
  const skillFrameHeight = chartHeight + SKILL_FRAME_OVERHEAD
  const widgetHeight = chartHeight + WIDGET_VERTICAL_OVERHEAD
  const visibleUserLevel = Math.min(userLevel, levelCount)

  usePropertyMenu(
    [
      {
        itemType: 'dropdown',
        propertyName: 'roles',
        tooltip: 'Role',
        selectedOption: role,
        options: roleOptions,
      },
      {
        itemType: 'separator'
      },
      {
        itemType: 'action',
        tooltip: 'Show/hide levels',
        propertyName: 'levelToggle'
      }
    ],
    ({propertyName, propertyValue}) => {
      if (propertyName === "roles") {
        setRole(propertyValue as Role)
      } else if (propertyName == "levelToggle") {
        setShowLevels(!showLevels);
      }
    },
  )
  return (
    <Frame
      name="Everything"
      width={widgetWidth}
      height={widgetHeight}
      fill="#FFFFFF"
      cornerRadius={10}
      effect={[
        {
          type: "drop-shadow",
          color: "#9747FF0A",
          offset: {
            x: 0,
            y: 3,
          },
          blur: 57,
          showShadowBehindNode:
            false,
        },
        {
          type: "drop-shadow",
          color: "#0D99FF0A",
          offset: {
            x: 0,
            y: 2,
          },
          blur: 30,
          showShadowBehindNode:
            false,
        },
        {
          type: "drop-shadow",
          color: "#14AE5C0A",
          offset: {
            x: 0,
            y: 1,
          },
          blur: 18,
          showShadowBehindNode:
            false,
        },
        {
          type: "drop-shadow",
          color: "#FFD54B0D",
          offset: {
            x: 0,
            y: 0,
          },
          blur: 6,
          showShadowBehindNode:
            false,
        },
      ]}
      stroke="#00000026"
      strokeWidth={3}
    >
      <Frame
        name="Dividers"
        x={82}
        y={228}
        width={dividerWidth}
        height={chartHeight}
      >
        {Array.from({ length: levelCount }, (_, index) => index + 1).map((level) => (
          <Frame
            name={`Divider-L${level}`}
            key={`Divider-L${level}`}
            opacity={0.1}
            x={0}
            y={(levelCount - level) * LEVEL_HEIGHT}
            strokeWidth={0}
            overflow="visible"
            hidden={showLevels}
            width={dividerWidth}
            height={LEVEL_HEIGHT}
            onClick={() => {
              setUserLevel(level);
            }}
            hoverStyle={{
              opacity: showLevels ? 0.1 : 0.5,
            }}
          >
            <Rectangle
              name={`Divider-L${level}-Bg`}
              y={0.5}
              fill="#FFF"
              width={150}
              height={LEVEL_HEIGHT}
            />
            <SVG
              name={`Divider-L${level}-Line`}
              height={3}
              width={dividerWidth}
              src={DASHED_LINE_SVG}
            />
          </Frame>
        ))}
        <Text
          name="Level-Label"
          y={{
            type: "top",
            offset: chartHeight + 10 - (visibleUserLevel * LEVEL_HEIGHT),
          }}
          hidden={showLevels}
          fill="#A7A7A7"
          width={105}
          lineHeight="150%"
          fontFamily="Inter"
          letterSpacing={1.456}
          fontWeight={700}
        >
          CURRENT LEVEL ({getLevelLabel(role, visibleUserLevel)})
        </Text>
        <SVG
          name="Divider-Line-Active"
          y={{
            type: "top",
            offset: chartHeight - (visibleUserLevel * LEVEL_HEIGHT),
          }}
          hidden={showLevels}
          height={3}
          width={dividerWidth}
          src={ACTIVE_LINE_SVG}
        />
      </Frame>
    <AutoLayout
      name="Container"
      verticalAlignItems={"center"}
      x={150}
      y={100}
      spacing={32}
      padding={64}
      cornerRadius={8}
      direction='vertical'
    >
      <AutoLayout
      name="Skills"
      overflow="visible"
      spacing={30}
      >
      {categories.map((category) => {
        // Draw Skill Rows
        return category.skills.map((skill, i) => {
          const descriptionKey = category.descriptionKeys?.[i] || skill;
          const stateKey = category.stateKey || category.name;
          return Skill(
            skill,
            descriptionKey,
            category.color,
            category.skillDescriptions[i],
            `${stateKey}-${descriptionKey}`,
            role,
            showLevels,
            voteMap,
            levelCount,
            chartHeight,
            skillFrameHeight
          );
        });
      })}
      </AutoLayout>
      <AutoLayout
      name="Categories"
      overflow="visible"
      spacing={30}
      >
        {categories.map((category) => {
          // Draw Category Labels
          // console.log(`The category is ${category.name}`);
          return Category(
            category.name,
            category.color,
            `${category.name}`,
            category.skills.length,
          );
        })}
      </AutoLayout>
      </AutoLayout>
    </Frame>
  );
}

function Category(
  name: string,
  color: string,
  category_key: string,
  skillCount: number
) {
  return (
      <Text
      name={ `Category-${name}` }
      key={ `Category-${category_key}` }
      fill= {color}
      width={(skillCount * 250) + ((skillCount - 1) * 30)}
      height={50}
      verticalAlignText="center"
      horizontalAlignText="center"
      lineHeight="150%"
      fontFamily="Inter"
      fontSize={32}
      letterSpacing={1.536}
      textCase="upper"
      fontWeight={700}
      >
      {name}
      </Text>
  );
}

function Skill(
  name: string,
  description_key: string,
  color: string,
  skill_description: string,
  skill_key: string, // "Strategy-Product",
  role: Role,
  showLevels: boolean,
  voteMap: SyncedMap,
  levelCount: number,
  chartHeight: number,
  skillFrameHeight: number
) {
  const storedLevel = voteMap.get(skill_key)
  const selectedLevel = storedLevel ? Math.min(storedLevel, levelCount) : undefined
  const offsetA = skillFrameHeight + 18 - ((selectedLevel || 1) * LEVEL_HEIGHT)
  const activeOpacity = 0.8
  const hoverOpacity = 0.4
  return (
    <Frame
      name={ `Skill-${name}` }
      key= { `Skill-${skill_key}` }
      width={250}
      height={skillFrameHeight}
    >
      <Rectangle
        name= { `Skill-Block-Bg-${name}` }
        key= { `Skill-Block-Bg-${skill_key}` }
        opacity={0.2}
        y={{
          type: "bottom",
          offset: 1,
        }}
        fill={color}
        cornerRadius={6}
        width={250}
        height={chartHeight}
      />
      {Array.from({ length: levelCount }, (_, index) => levelCount - index).map((level) => (
        <Rectangle
          name={`Skill-Block-${level}-${name}`}
          key={`Skill-Block-${level}-${skill_key}`}
          opacity={selectedLevel === level ? activeOpacity : 0}
          y={{
            type: "bottom",
            offset: level === 1 ? 0 : 1,
          }}
          fill={color}
          cornerRadius={6}
          width={250}
          height={level * LEVEL_HEIGHT}
        />
      ))}
      {Array.from({ length: levelCount }, (_, index) => levelCount - index).map((level) => (
        <Rectangle
          name={`Skill-Hit-Area-${level}-${name}`}
          key={`Skill-Hit-Area-${level}-${skill_key}`}
          opacity={0}
          y={{
            type: "bottom",
            offset: (level - 1) * LEVEL_HEIGHT,
          }}
          fill={color}
          width={250}
          height={LEVEL_HEIGHT}
          onClick={() => {
            voteMap.set(skill_key, level);
          }}
          hoverStyle={{
            opacity: selectedLevel === level ? 0 : hoverOpacity,
          }}
          tooltip={
            levelDescriptions.find((description) => {
              return description.skill === description_key
                && description.level === `${level}`
                && description.role === (role === "Managers" ? "Managers" : undefined);
            })?.description || `${name} L${level}`
          }
        />
      ))}
      <Text
        name= { `Skill-Level-${name}` }
        key = { `Skill-Level-${skill_key}` }
        hidden= { showLevels ? true : false }
        opacity={selectedLevel ? 0.9 : 0}
        y={{
          type: "top",
          offset: offsetA,
        }}
        fill={color === "#FFCD29" ? "#876C14" : "#FFF"}
        width={250}
        height={38}
        horizontalAlignText="center"
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={24}
        letterSpacing={-0.456}
        fontWeight={700}
      >
        {getLevelLabel(role, selectedLevel || 1)}
      </Text>
      <Text
        name= { `Skill-Label-${name}` }
        key = { `Skill-Label-${skill_key}` }
        fill={color}
        width={250}
        height={50}
        verticalAlignText="center"
        horizontalAlignText="center"
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={32}
        letterSpacing={-0.32}
        fontWeight={700}
        strokeWidth={1.391}
        tooltip={ `${skill_description}` }
      >
        {name}
      </Text>
    </Frame>
  );
}

widget.register(Widget);
