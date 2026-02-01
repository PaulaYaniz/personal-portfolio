"use client";

import { Row, Tag, Text, Column } from "@once-ui-system/core";

interface ProjectFilterProps {
  allThemes: string[];
  allTags: string[];
  selectedThemes: string[];
  selectedTags: string[];
  onThemeToggle: (theme: string) => void;
  onTagToggle: (tag: string) => void;
}

export function ProjectFilter({
  allThemes,
  allTags,
  selectedThemes,
  selectedTags,
  onThemeToggle,
  onTagToggle,
}: ProjectFilterProps) {
  return (
    <Column gap="16" fillWidth paddingX="l" marginBottom="l">
      {/* Theme Filter */}
      {allThemes.length > 0 && (
        <Column gap="8" fillWidth>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Filter by Theme
          </Text>
          <Row wrap gap="8" fillWidth>
            {allThemes.map((theme) => {
              const isSelected = selectedThemes.includes(theme);
              return (
                <Tag
                  key={theme}
                  size="l"
                  style={{
                    cursor: "pointer",
                    opacity: isSelected ? 1 : 0.5,
                    backgroundColor: isSelected
                      ? "var(--brand-alpha-medium)"
                      : "var(--neutral-alpha-weak)",
                    color: isSelected
                      ? "var(--brand-on-background-medium)"
                      : "var(--neutral-on-background-weak)",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => onThemeToggle(theme)}
                >
                  {theme}
                </Tag>
              );
            })}
          </Row>
        </Column>
      )}

      {/* Tag Filter */}
      {allTags.length > 0 && (
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
      )}
    </Column>
  );
}
