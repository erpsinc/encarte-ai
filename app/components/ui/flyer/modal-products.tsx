import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { ProductItem } from "@/app/components/ui/flyer/product-item";

import { DoubleArrowUpIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/app/components/ui/input";

export function ModalProducts({ className }: { className: string }) {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="lg" className="rounded-t-full drop-shadow-md">
            <DoubleArrowUpIcon className="mr-2 h-4 w-4" /> Produtos
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="py-10">
          <SheetHeader className="relative">
            <MagnifyingGlassIcon className="absolute left-2.5 top-4 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar produto"
              className="w-full rounded-lg bg-background pl-8"
            />
          </SheetHeader>
          <div className="py-4">
            <div className="items-center">
              <ProductItem />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}