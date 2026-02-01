"use client";

import { Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { ProjectFilter } from "./ProjectFilter";
import { useState, useMemo } from "react";

interface Project {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images: string[];
    theme?: string;
    tags?: string[];
    team?: Array<{ avatar: string }>;
    link?: string;
  };
  content: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  // Get all unique themes from projects
  const allThemes = useMemo(() => {
    const themes = new Set<string>();
    projects.forEach((post) => {
      if (post.metadata.theme) {
        themes.add(post.metadata.theme);
      }
    });
    return Array.from(themes).sort();
  }, [projects]);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((post) => {
      if (post.metadata.tags && Array.isArray(post.metadata.tags)) {
        post.metadata.tags.forEach((tag: string) => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [projects]);

  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleThemeToggle = (theme: string) => {
    setSelectedThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter projects by themes and tags
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by themes (if any selected)
    if (selectedThemes.length > 0) {
      filtered = filtered.filter((post) =>
        post.metadata.theme ? selectedThemes.includes(post.metadata.theme) : false
      );
    }

    // Filter by tags (if any selected)
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) => {
        const projectTags = post.metadata.tags || [];
        return selectedTags.some((tag) => projectTags.includes(tag));
      });
    }

    return filtered;
  }, [projects, selectedThemes, selectedTags]);

  return (
    <>
      {(allThemes.length > 0 || allTags.length > 0) && (
        <ProjectFilter
          allThemes={allThemes}
          allTags={allTags}
          selectedThemes={selectedThemes}
          selectedTags={selectedTags}
          onThemeToggle={handleThemeToggle}
          onTagToggle={handleTagToggle}
        />
      )}
      <Grid
        fillWidth
        gap="xl"
        marginBottom="40"
        paddingX="l"
        columns="2"
        m={{ columns: "1" }}
        s={{ columns: "1" }}
      >
        {filteredProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        ))}
      </Grid>
    </>
  );
}
