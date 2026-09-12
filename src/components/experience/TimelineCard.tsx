import "./Experience.css"

interface TimelineCardProps {
    title: string
    organization: string
    context?: string
    achievement?: string
    description: string
    bullets?: string[]
    tags?: string[]
    dateRange: string
    season: "spring" | "fall" | "winter" | "summer"
    mini: boolean
}

export default function TimelineCard({
                                         title, organization, context, achievement, description, bullets = [], tags = [],
                                         dateRange, season, mini
                                     }: TimelineCardProps) {
    return <article className={`${mini ? "timeline-card timeline-card-mini" : "timeline-card"} TLC-${season}`}>
        <div className="timeline-card-heading">
            <span className="timeline-card-date">{dateRange}</span>
        </div>

        <h3 className="timeline-card-title">{title}</h3>
        <div className="timeline-card-organization">{organization}</div>
        {context && <div className="timeline-card-context">{context}</div>}
        {achievement && <div className="timeline-card-achievement">{achievement}</div>}

        <p className="timeline-card-description">{description}</p>

        {bullets.length > 0 && <ul className="timeline-card-bullets">
            {bullets.map((bullets) => <li key={bullets}>{bullets}</li>)}
        </ul>}

        {tags.length > 0 && <div className="timeline-card-tags">
            {tags.map((tag) => <span className="timeline-card-tag" key={tag}>{tag}</span>)}
        </div>}
    </article>
}
