import * as React from "react"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export function ProductItem() {
  return (
    <div className="flex bg-slate-50">
      <div className="basis-1/5">
        <img className="object-contain h-48 w-full " src="https://soaresemcasa.com.br/storage/uploads/Da0ppAqMvuvRCMBaLqbycbdDhPUCIPO7GMh6Ep5E.png" alt="Modern building architecture" />
      </div>
      <div className="p-8 basis-4/5">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
      </div>
    </div>
  )
}
