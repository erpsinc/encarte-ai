import { Button } from '@/app/components/ui/button';
import FlyerModelsTable from '@/app/components/ui/flyer-models/table';
import { CreateModel } from '@/app/components/ui/flyer-models/buttons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"

export default function FlyerModelsPage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1>Modelos de encarte</h1>
      <CreateModel />
      <FlyerModelsTable currentPage={1} query='' />
    </main>
  )
}