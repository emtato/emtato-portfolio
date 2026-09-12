import "./Experience.css"

interface TimelineCardProps {
    title: string
    organization: string
    context?: string
    description: string
    highlights?: string[]
    tags?: string[]
    dateRange: string
    season: "spring" | "fall" | "winter" | "summer"
}

export default function TimelineCard({
                                         title, organization, context, description, highlights = [], tags = [],
                                         dateRange, season,
                                     }: TimelineCardProps) {
    return <article className={`timeline-card TLC-${season}`}>
        <div className="timeline-card-heading">
            <span className="timeline-card-date">{dateRange}</span>
        </div>

        <h3 className="timeline-card-title">{title}</h3>
        <div className="timeline-card-organization">{organization}</div>
        {context && <div className="timeline-card-context">{context}</div>}

        <p className="timeline-card-description">{description}</p>

        {highlights.length > 0 && <ul className="timeline-card-highlights">
            {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>}

        {tags.length > 0 && <div className="timeline-card-tags">
            {tags.map((tag) => <span className="timeline-card-tag" key={tag}>{tag}</span>)}
        </div>}
    </article>
}
