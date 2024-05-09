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

import FlyerTable from '@/app/components/ui/flyer/table';

export default function FlyerPage(){
  return (
    <div>
      <FlyerTable />
    </div>
  )
}