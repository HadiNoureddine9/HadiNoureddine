"use client";

import { useEffect, useRef, useMemo } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

const AnimatedCounter = ({
    value,
    className = "",
    suffix = "",
    prefix = ""
}: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimatedRef = useRef(false);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 200,
    });
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Memoize the text update function to prevent recreating on every render
    const updateText = useMemo(() => {
        return (latest: number) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
            }
        };
    }, [prefix, suffix]);

    // Only trigger animation once when in view
    useEffect(() => {
        if (isInView && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    // Set up spring value listener only once
    useEffect(() => {
        const unsubscribe = springValue.on("change", updateText);
        return () => {
            unsubscribe();
        };
    }, [springValue, updateText]);

    return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
};

export default AnimatedCounter;
