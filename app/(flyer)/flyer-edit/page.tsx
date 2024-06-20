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
import { Button } from '@/app/components/ui/button';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { ModalProducts } from '@/app/components/ui/flyer/modal-products';

export default function FlyerPage(){
  return (
    <div className='flex flex-col-reverse bg-none items-center sm:flex-row sm:bg-blue-600 h-full'>
      <div className='fixed sm:bg-yellow-400 sm:h-screen sm:sticky z-10 sm:basis-1/6'>
        <div className='invisible sm:visible'>AA</div>
        <ModalProducts className="sm:invisible" />
      </div>
      <div className='basis-11/12 overflow-scroll sm:basis-5/6 bg-slate-400'>
        <FlyerBoard />
      </div>
    </div>
  )
}