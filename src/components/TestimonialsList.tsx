"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/mai-haven";

const INITIAL_COUNT = 3;

export default function TestimonialsList() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? testimonials : testimonials.slice(0, INITIAL_COUNT);
  const hasMore = testimonials.length > INITIAL_COUNT;

  return (
    <>
      <div className="mh-testimonials">
        {visible.map((item) => (
          <blockquote key={item.name}>
            <div className="mh-rating" aria-label={`${item.rating} von 5 Sternen`}>
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} aria-hidden="true" />
              ))}
            </div>
            <p>&quot;{item.quote}&quot;</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      {hasMore ? (
        <button
          type="button"
          className="mh-testimonials-toggle"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? "Weniger anzeigen" : "Weitere Bewertungen anzeigen"}
        </button>
      ) : null}
    </>
  );
}
