import { ArrowUpRight } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { workEntries, type WorkEntry } from "@/lib/portfolio-data";

function RoboticsIllustration() {
  return (
    <svg viewBox="0 0 520 360" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1" opacity="0.16">
        {[80, 140, 200, 260, 320].map((y) => <path key={y} d={`M36 ${y}H484`} />)}
        {[80, 140, 200, 260, 320, 380, 440].map((x) => <path key={x} d={`M${x} 40V320`} />)}
      </g>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="258" cy="289" rx="125" ry="24" opacity="0.3" />
        <path d="M215 281V256H285V281M201 283H299" />
        <path d="M234 252L195 166L212 158L266 252" strokeWidth="4" />
        <path d="M207 153L294 96L306 112L222 171" strokeWidth="4" />
        <path d="M309 104L359 144L348 159L299 122" strokeWidth="4" />
        <path d="M355 156L376 171L368 189M351 160L353 185L370 198" />
        <circle cx="251" cy="257" r="15" />
        <circle cx="207" cy="164" r="18" />
        <circle cx="300" cy="109" r="14" />
        <circle cx="353" cy="151" r="8" />
        <circle cx="207" cy="164" r="6" />
        <circle cx="300" cy="109" r="4" />
        <path d="M142 176A66 66 0 0 1 204 98M334 221A70 70 0 0 0 403 158" strokeDasharray="4 7" opacity="0.55" />
        <path d="M409 199V226M396 213H423" opacity="0.5" />
        <path d="M93 267V229M93 267H131M93 267L113 248" opacity="0.5" />
      </g>
    </svg>
  );
}

const cells = [
  [106, 110, 30, 24, -24], [180, 96, 25, 34, 30], [272, 114, 34, 24, -18],
  [370, 100, 25, 31, 26], [420, 176, 27, 21, -12], [328, 194, 36, 27, -22],
  [217, 182, 28, 34, 25], [109, 210, 29, 22, 12], [173, 270, 31, 21, -15],
  [276, 271, 26, 32, 25], [382, 274, 32, 23, -17],
];

function NucleiIllustration() {
  return (
    <svg viewBox="0 0 520 360" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1" opacity="0.15">
        <path d="M52 62H468V310H52Z" strokeDasharray="4 7" />
        <path d="M52 185H468M260 62V310" />
      </g>
      {cells.map(([x, y, rx, ry, rotate], index) => (
        <g key={index} transform={`rotate(${rotate} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx={rx + 9} ry={ry + 9} fill="currentColor" opacity="0.05" />
          <ellipse cx={x} cy={y} rx={rx} ry={ry} stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <ellipse cx={x + 3} cy={y - 2} rx={rx * 0.4} ry={ry * 0.46} fill="currentColor" opacity={index % 2 === 0 ? "0.55" : "0.25"} />
          <circle cx={x - 7} cy={y + 5} r="2" fill="currentColor" opacity="0.4" />
        </g>
      ))}
      <g stroke="currentColor" strokeWidth="2">
        <path d="M41 86V51H76M444 51H479V86M479 286V321H444M76 321H41V286" />
        <path d="M401 340H455" />
      </g>
    </svg>
  );
}

function ProjectCard({ work }: { work: WorkEntry }) {
  const isRobotics = work.kind === "robotics";

  return (
    <article className="project-card">
      <figure className={`project-visual project-visual--${work.kind}`}>
        {isRobotics ? <RoboticsIllustration /> : <NucleiIllustration />}
        <figcaption className="project-visual-label">
          Concept illustration / {isRobotics ? "Robotics simulation" : "Cell nuclei analysis"}
        </figcaption>
      </figure>
      <div className="project-copy">
        <div className="project-meta"><span>{work.eyebrow}</span><span>{work.period}</span></div>
        <h3>{work.title}</h3>
        <p className="project-description">{work.description}</p>
        <ul className="project-details">
          {work.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <a className="project-link" href={work.href} target="_blank" rel="noreferrer">
          {work.linkLabel}<ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="02 / Projects"
      title="Beyond the everyday build."
      description="Exploring how software can make robotics more accessible and support image-based research."
      className="projects-section"
    >
      <div className="project-list">
        {workEntries.map((work) => <ProjectCard key={work.title} work={work} />)}
      </div>
    </SectionWrapper>
  );
}
