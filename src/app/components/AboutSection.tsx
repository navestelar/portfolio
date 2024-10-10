"use client"

import Image from "next/image"
import { ReactNode, useState } from "react"
import { TabButton } from "./TabButton"

const tabs: Record<string, ReactNode> = {
  skills: (
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>TypeScript</li>
      <li>Next.js</li>
      <li>Node.js</li>
      <li>Redux</li>
      <li>PostgreSQL</li>
    </ul>
  ),
  education: (
    <div className="flex flex-col">
      <span>Computer science degree (in progress)</span>
      <span>Instituto Federal Catarinense</span>
    </div>
  ),
  certifications: <div>certifications</div>,
}

export function AboutSection() {
  const [tab, setTab] = useState("skills")

  function handleTabChange(tab: string) {
    setTab(tab)
  }

  return (
     <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-2">
            {tabs[tab]}
          </div>
        </div>
      </div>
    </section>
  )
}