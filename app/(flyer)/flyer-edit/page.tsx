'use client';

const Model = {
  id: 'ddj2dj9',
  name: 'Stories',
  width: 1080,
  height: 1920,
  max_items: 12,
}

const Theme = {
  id: '23235ff',
}

import FlyerBoard from '@/app/components/ui/flyer/board';
import { ZoomInIcon, ZoomOutIcon } from '@radix-ui/react-icons'
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

export default function FlyerPage(){
  const [zoom, setZoom] = useState(0.5);
  // refactor: consider create a hook for zoom
  // todo: consider desactive button if limit was reached
  const zoomIn = () => {
    const limit = 1;
    if (zoom === limit) return;
    setZoom(prevZoom => {
      const sum = prevZoom + 0.1;
      return parseFloat(sum.toFixed(1));
    });
  }

  const zoomOut = () => {
    const limit = 0.1;
    if (zoom === limit) return;
    setZoom(prevZoom => {
      const sub = prevZoom - 0.1;
      return parseFloat(sub.toFixed(1));
    });
  }

  return (
    <div className='flex bg-red-800 overflow-hidden h-screen'>
      <div className='basis-1/6'>SIDEBAR</div>
      <div className='overflow-scroll basis-5/6 bg-slate-400'>
        <FlyerBoard zoom={zoom} />

        <div className='fixed bottom-2 right-2 space-x-1'>
          <Button onClick={zoomOut} variant="outline" className='rounded-full'>
            <ZoomOutIcon />
          </Button>
          <Button onClick={zoomIn} variant="outline" className='rounded-full'>
            <ZoomInIcon />
          </Button>
        </div>

      </div>
    </div>
  )
}