'use client';

import { useEffect, useRef } from 'react';

export default function Parallax({
    as: Tag = 'div',
    children,
    className = '',
    offset = 40,
}) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return undefined;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined;
        }

        let frameId = null;

        const updatePosition = () => {
            const rect = node.getBoundingClientRect();
            const viewportHeight = window.innerHeight || 1;
            const progress = ((rect.top + rect.height / 2) - viewportHeight / 2) / (viewportHeight / 2);
            const clamped = Math.max(-1.2, Math.min(1.2, progress));
            const translateY = clamped * offset;

            node.style.setProperty('--parallax-y', `${translateY.toFixed(1)}px`);
            frameId = null;
        };

        const requestUpdate = () => {
            if (frameId !== null) {
                return;
            }

            frameId = window.requestAnimationFrame(updatePosition);
        };

        requestUpdate();
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate);

        return () => {
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }

            window.removeEventListener('scroll', requestUpdate);
            window.removeEventListener('resize', requestUpdate);
        };
    }, [offset]);

    return (
        <Tag ref={ref} className={`parallax ${className}`.trim()}>
            {children}
        </Tag>
    );
}
