"use client";

import { Row, Tag } from "@once-ui-system/core";
import { useState } from "react";

interface ProjectFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export function ProjectFilter({ allTags, selectedTags, onTagToggle }: ProjectFilterProps) {
  return (
    <Row wrap gap="8" fillWidth marginBottom="l" paddingX="l">
      {allTags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Tag
            key={tag}
            size="l"
            style={{
              cursor: "pointer",
              opacity: isSelected ? 1 : 0.5,
              backgroundColor: isSelected ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)",
              color: isSelected ? "var(--brand-on-background-medium)" : "var(--neutral-on-background-weak)",
              transition: "all 0.2s ease",
            }}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </Tag>
        );
      })}
    </Row>
  );
}
