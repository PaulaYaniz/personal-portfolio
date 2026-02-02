"use client";

import { Row, Tag, Text, Column } from "@once-ui-system/core";

interface ProjectFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  allTools: string[];
  selectedTools: string[];
  onToolToggle: (tool: string) => void;
}

export function ProjectFilter({
  allTags,
  selectedTags,
  onTagToggle,
  allTools,
  selectedTools,
  onToolToggle,
}: ProjectFilterProps) {
  return (
    <Column gap="16" fillWidth paddingX="l" marginBottom="l">
      {/* Skills Filter */}
      <Column gap="8" fillWidth>
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

      {/* Tools Filter */}
      {allTools.length > 0 && (
        <Column gap="8" fillWidth>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Filter by Technology
          </Text>
          <Row wrap gap="8" fillWidth>
            {allTools.map((tool) => {
              const isSelected = selectedTools.includes(tool);
              return (
                <Tag
                  key={tool}
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
                  onClick={() => onToolToggle(tool)}
                >
                  {tool}
                </Tag>
              );
            })}
          </Row>
        </Column>
      )}
    </Column>
  );
}
