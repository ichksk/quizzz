"use client"

import { HomePage } from '@/features/home/page';
import { RecoilRoot } from 'recoil';

export default function Home() {

  return (
    <RecoilRoot>
      <HomePage/>
    </RecoilRoot>
  );
}