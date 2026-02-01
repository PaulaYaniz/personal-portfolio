"use client";

import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { ProjectFilter } from "./ProjectFilter";
import { useState, useMemo } from "react";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allProjects.forEach((post) => {
      if (post.metadata.tags && Array.isArray(post.metadata.tags)) {
        post.metadata.tags.forEach((tag: string) => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [allProjects]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter projects
  let filteredProjects = allProjects;

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    filteredProjects = filteredProjects.filter((post) => !exclude.includes(post.slug));
  }

  // Filter by selected tags
  if (selectedTags.length > 0) {
    filteredProjects = filteredProjects.filter((post) => {
      const projectTags = post.metadata.tags || [];
      return selectedTags.some((tag) => projectTags.includes(tag));
    });
  }

  const sortedProjects = filteredProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <>
      <ProjectFilter
        allTags={allTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
      />
      <Grid
        fillWidth
        gap="xl"
        marginBottom="40"
        paddingX="l"
        columns="2"
        m={{ columns: "1" }}
        s={{ columns: "1" }}
      >
        {displayedProjects.map((post, index) => (
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
