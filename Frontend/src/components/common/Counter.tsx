import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({ target, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [ref, inView] = useScrollReveal({ triggerOnce: true });
  const count = useCounter(target, duration, inView);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
