'use client';

import dynamic from 'next/dynamic';

const DamagesCalculator = dynamic(() => import('./DamagesCalculator'), { ssr: false });

export default DamagesCalculator;
