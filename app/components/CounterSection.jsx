'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import counterStats from '../data/counterStats';

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
      
      const unsubscribe = springValue.on("change", (latest) => {
        setCount(Math.floor(latest));
      });

      return () => unsubscribe();
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className="py-16 bg-white sm:py-20">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white [box-shadow:0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-16 lg:px-20 py-10">
          {counterStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-slate-900 text-4xl font-extrabold">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-slate-600 text-base font-medium mt-3">
                {stat.label}
              </p>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
