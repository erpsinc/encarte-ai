'use client';

import { CSSProperties } from "react";
import { useState, useEffect } from "react";

export function Flyer({
  children,
  width
}: {
  children: React.ReactElement,
  width: string,
}) {
  return (
    <div style={{ width: `${width}px`, display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  )
}

type FlyerHeader = {
  height: string;
}

export function FlyerHeader({ height }: FlyerHeader) {
  return (
    <div style={{ height: `${height}px`, backgroundColor: 'red' }}>
      Header
    </div>
  )
}

type Products = {
  description: string;
  price: number;
  imageUrl: string;
}

type FlyerBodyProps = {
  style: Pick<CSSProperties, 'height' | 'border'>;
  products: Products[];
  layout: number[];
}

// numero de linhas de acordo com o layout
export function FlyerBody({ products, style, layout }: FlyerBodyProps) {
  // const [ variations, setVariations ] = useState<Array<number[]>>([]);

  // useEffect(() => {
  //   generateVariations(products.length);
  // }, [products]);

  // function generateVariations(productsLength: number) {
  //   if (productsLength === 1) {
  //     setVariations([[1]]);
  //     return;
  //   }

  //   const numbersToSum = Array.from({ length: productsLength }, (_, index) => index)
  //   numbersToSum.shift()

  //   const result: Array<number[]> = [];

  //   function backtrack(remaining: number, partial: number[] = []) {
  //     if (remaining < 0) {
  //       return
  //     }
  //     if (remaining === 0) {
  //       result.push([...partial])
  //       return
  //     }

  //     for (let i = 0; i < numbersToSum.length; i++) {
  //       const currentNumber = numbersToSum[i]
  //       partial.push(currentNumber)
  //       backtrack(remaining - currentNumber, partial)
  //       partial.pop()
  //     }
  //   }

  //   backtrack(productsLength)

  //   setVariations(result);
  // }

  // console.log(variations);
  let nextIndex = -1;
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      height: `${style.height}px`,
      backgroundColor: 'white',
      border: '1px solid',
    }}>


      {/* row */}
      {layout.map((value, index) => (
        
      <div style={{
        height: '100%',
        display: 'flex',
        backgroundColor: 'purple',
        marginBottom: '2px',
        padding: '0px 10px 0px 10px'
      }} key={index}>
          {Array.from({ length: value }, (v, k) => {
            nextIndex++
            return (
              <div key={nextIndex} className="product" style={{ display: 'flex', flexGrow: '1', flexDirection: 'column' }}>
                <div style={{ backgroundColor: 'white' }}>
                  {products[nextIndex].description}
                </div>

                <div className="product-image" style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${products[nextIndex].imageUrl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}>
                </div>

                <div style={{ backgroundColor: 'white', height: '100px' }}>
                  R${products[nextIndex].price}
                </div>
              </div>
            )
          })}
        </div>
      ))
      }
    </div>
  )
}

type FlyerFooter = {
  height: string;
}

export function FlyerFooter({ height }: FlyerFooter) {
  return (
    <div style={{ height: `${height}px`, backgroundColor: 'blue' }}>Footer</div>
  )
}