'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({
    as: Tag = 'div',
    children,
    className = '',
    variant = 'up',
    delay = 0,
    threshold = 0.18,
}) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return undefined;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            node.classList.add('reveal-visible');
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                node.classList.add('reveal-visible');
                observer.unobserve(node);
            },
            {
                threshold,
                rootMargin: '0px 0px -10% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <Tag
            ref={ref}
            className={`reveal reveal-${variant} ${className}`.trim()}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            {children}
        </Tag>
    );
}
