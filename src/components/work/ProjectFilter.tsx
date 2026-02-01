"use client";

import { Row, Tag, Text, Column } from "@once-ui-system/core";

interface ProjectFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export function ProjectFilter({
  allTags,
  selectedTags,
  onTagToggle,
}: ProjectFilterProps) {
  return (
    <Column gap="8" fillWidth paddingX="l" marginBottom="l">
      <Text variant="label-default-s" onBackground="neutral-weak">
        Filter by Skill
      </Text>
      <Row wrap gap="8" fillWidth>
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Tag
              key={tag}
              size="l"
              style={{
                cursor: "pointer",
                opacity: isSelected ? 1 : 0.5,
                backgroundColor: isSelected
                  ? "var(--accent-alpha-medium)"
                  : "var(--neutral-alpha-weak)",
                color: isSelected
                  ? "var(--accent-on-background-medium)"
                  : "var(--neutral-on-background-weak)",
                transition: "all 0.2s ease",
              }}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Tag>
          );
        })}
      </Row>
    </Column>
  );
}
