'use client';

import { Flyer, FlyerHeader, FlyerBody, FlyerFooter } from '@/app/components/flyer';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { ZoomInIcon, ZoomOutIcon } from '@radix-ui/react-icons';

const products = [
  {
    description: 'Produto de teste 200g',
    imageUrl: 'https://www.pngall.com/wp-content/uploads/13/Nescafe-PNG-Cutout.png',
    price: 12.99,
  },
  {
    description: 'Produto de teste 200g',
    imageUrl: 'https://soaresemcasa.com.br/storage/uploads/Da0ppAqMvuvRCMBaLqbycbdDhPUCIPO7GMh6Ep5E.png',
    price: 9.99,
  },
  {
    description: 'Produto de teste 200g',
    imageUrl: 'https://www.alimentoswilson.com.br/download/molho-shoyu-tradicional-mitsuwa-galao-5-l-1563808149.png',
    price: 6.99,
  },
  {
    description: 'Produto de teste 200g',
    imageUrl: 'https://phygital-files.mercafacil.com/copagril/uploads/produto/lasanha_sadia_4_queijos_600g_00d84aeb-b97c-46a9-b7d3-758d2693d270.thumbnail.png',
    price: 12.99,
  }
]

export default function FlyerTable() {
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
    <ScrollArea className="h-screen w-screen rounded-md border p-4">
      <Flyer width='1080' zoom={zoom}>
        <>
        <FlyerHeader height='220' />
        <FlyerBody 
          products={products}
          layout={[2, 1, 1]}
          style={{height: '1500'}}
        />
        <FlyerFooter height='200' />
        </>
      </Flyer>
      <ScrollBar orientation="horizontal" />
      <div className='fixed bottom-2 right-2 space-x-1'>
        <Button onClick={zoomOut} variant="outline" className='rounded-full'>
          <ZoomOutIcon />
        </Button>
        <Button onClick={zoomIn} variant="outline" className='rounded-full'>
          <ZoomInIcon />
        </Button>
      </div>
    </ScrollArea>
  )
}