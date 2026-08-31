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


const LEVEL_COUNT = 6;
const LEVEL_HEIGHT = 130;
const CHART_HEIGHT = LEVEL_COUNT * LEVEL_HEIGHT;
const SKILL_FRAME_HEIGHT = CHART_HEIGHT + 66;
const WIDGET_HEIGHT = 1100 + LEVEL_HEIGHT;
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
};

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

const categories = [strategyCategory, craftCategory, writingCraftCategory, collabCategory, impactCategory];

function Widget() {
  const voteMap = useSyncedMap<number>("skill-level")
  const [userLevel, setUserLevel] = useSyncedState<number>('level', 1)
  const [showLevels, setShowLevels] = useSyncedState<boolean>("isShown", false)
  const [role, setRole] = useSyncedState<string>("role", "Design")
  const roleOptions = [{option: "Design", label: "Design"}, {option: "Writing", label: "Writing"}]

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
        setRole(propertyValue)
      } else if (propertyName == "levelToggle") {
        setShowLevels(!showLevels);
      }
    },
  )
  return (
    <Frame
      name="Everything"
      width= { role == "Writing" ? 3990 : 3750 }
      height={WIDGET_HEIGHT}
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
        width={role == "Writing" ? 3806 : 3550}
        height={CHART_HEIGHT}
      >
        {Array.from({ length: LEVEL_COUNT }, (_, index) => index + 1).map((level) => (
          <Frame
            name={`Divider-L${level}`}
            key={`Divider-L${level}`}
            opacity={0.1}
            x={0}
            y={(LEVEL_COUNT - level) * LEVEL_HEIGHT}
            strokeWidth={0}
            overflow="visible"
            hidden={showLevels}
            width={role == "Writing" ? 3806 : 3550}
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
              width={role == "Writing" ? 3806 : 3550}
              src={DASHED_LINE_SVG}
            />
          </Frame>
        ))}
        <Text
          name="Level-Label"
          y={{
            type: "top",
            offset: CHART_HEIGHT + 10 - (userLevel * LEVEL_HEIGHT),
          }}
          hidden={showLevels}
          fill="#A7A7A7"
          width={105}
          lineHeight="150%"
          fontFamily="Inter"
          letterSpacing={1.456}
          fontWeight={700}
        >
          CURRENT LEVEL ({userLevel})
        </Text>
        <SVG
          name="Divider-Line-Active"
          y={{
            type: "top",
            offset: CHART_HEIGHT - (userLevel * LEVEL_HEIGHT),
          }}
          hidden={showLevels}
          height={3}
          width={role == "Writing" ? 3806 : 3550}
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
          return Skill(
            skill,
            category.name,
            category.color,
            category.skillDescriptions[i],
            `${category.name}-${skill}`,
            role,
            showLevels,
            voteMap
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
            role,
            `${category.name}`,
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
  role: string,
  category_key: string
) {
  // console.log('Category: ',name);
  // console.log('Role: ',role);
  const hideCategory = (role == "Design" && name == "Writing") || (role == "Writing" && name == "Craft")
  return (
      <Text
      name={ `Category-${name}` }
      key={ `Category-${category_key}` }
      hidden = { hideCategory ? true : false }
      fill= {color}
      width={ name == "Writing" ? 1088 : 810 }
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
  category: string,
  color: string,
  skill_description: string,
  skill_key: string, // "Strategy-Product",
  role: string,
  showLevels: boolean,
  voteMap: SyncedMap
) {
  const selectedLevel = voteMap.get(skill_key)
  const offsetA = SKILL_FRAME_HEIGHT + 18 - ((selectedLevel || 1) * LEVEL_HEIGHT)
  const activeOpacity = 0.8
  const hoverOpacity = 0.4
  const hideSkill = (role == "Design" && category == "Writing") || (role == "Writing" && category == "Craft")
  return (
    <Frame
      name={ `Skill-${name}` }
      key= { `Skill-${skill_key}` }
      hidden= { hideSkill ? true : false }
      width={250}
      height={SKILL_FRAME_HEIGHT}
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
        height={CHART_HEIGHT}
      />
      {Array.from({ length: LEVEL_COUNT }, (_, index) => LEVEL_COUNT - index).map((level) => (
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
      {Array.from({ length: LEVEL_COUNT }, (_, index) => LEVEL_COUNT - index).map((level) => (
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
              return description.skill === name && description.level === `${level}`;
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
        fill= { (name == "Effectiveness" || name == "Leadership" || name == "Citizenship") ? "#876C14" : "#FFF" }
        width={250}
        height={38}
        horizontalAlignText="center"
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={24}
        letterSpacing={-0.456}
        fontWeight={700}
      >
        L{selectedLevel || 1}
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
