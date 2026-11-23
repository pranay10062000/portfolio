import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { impactMetrics, resumePath } from "@/lib/portfolio-data";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-intro"><span className="hero-status-dot" aria-hidden="true" /><span>Pranay Dumbhare · <span className="hero-role">Software Engineer 2</span></span></p>
          <h1 id="hero-title">Backend systems.<br /><em>Real-world impact.</em></h1>
          <p className="hero-description">I build Java and Spring Boot services for <strong>account origination</strong>—from <strong>account opening</strong> to lending—then improve how they perform, get tested, and reach production.</p>
          <div className="hero-actions">
            <Button href="#experience">Explore my work <ArrowDown size={17} aria-hidden="true" /></Button>
            <Button href={resumePath} variant="secondary" download><Download size={17} aria-hidden="true" /> Download resume</Button>
          </div>
          <p className="hero-note">Application Developer 2 at Oracle <span aria-hidden="true">/</span> Pune, India</p>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-topline"><span>THE PERSON BEHIND THE CODE</span><ArrowUpRight size={19} aria-hidden="true" /></div>
          <div className="portrait-image">
            <Image src="/assets/pranay-avatar.jpg" alt="Illustrated portrait of Pranay Dumbhare" fill priority sizes="(max-width: 699px) 88vw, (max-width: 1099px) 36vw, 400px" />
          </div>
          <figcaption><span>Pranay Dumbhare</span><span>Engineering, with intent.</span></figcaption>
        </figure>
      </div>
      <div className="container impact-strip" aria-label="Engineering outcomes">
        <div className="impact-intro"><span className="eyebrow">Work, measured.</span><p>Results from my<br />engineering work.</p></div>
        <dl className="impact-metrics">
          {impactMetrics.map((metric) => (
            <div className="impact-metric" key={metric.label}>
              <dt>{metric.label}</dt><dd>{metric.value}</dd><dd className="metric-detail">{metric.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
