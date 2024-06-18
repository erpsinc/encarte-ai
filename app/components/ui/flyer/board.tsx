'use client';
import { Flyer, FlyerHeader, FlyerBody, FlyerFooter } from '@/app/components/flyer';
import { Button } from '@/app/components/ui/button';

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

export default function FlyerTable({
  zoom
}: { 
  zoom: number
}) {
  return (
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
  )
}