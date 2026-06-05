import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageFadeProps {
  children: ReactNode;
}

export function PageFade({ children }: PageFadeProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
      {children}
    </motion.div>
  );
}
