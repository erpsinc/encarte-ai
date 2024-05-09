'use client';
import { Button } from "@/app/components/ui/button";

// import { Checkbox } from "@/app/components/ui/checkbox";

import { createFlyerModel } from '@/lib/actions/flyer.action'
import { useFormState } from "react-dom";

export default function CreateFlyerModelForm() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createFlyerModel, initialState);

  return (
      <form action={dispatch}>
          <div className="rounded-md bg-gray-50 p-4 md:p-6">
            <div className="mb-4">
              <label htmlFor="nome" className="mb-2 block text-sm font-medium">
                Nome
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Digite o nome do modelo"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="name-error"
                />
              </div>

              <div id="name-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.name && 
                  state.errors.name.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  )) 
                }
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="nome" className="mb-2 block text-sm font-medium">
                Largura
              </label>
              <div className="relative">
                <input
                  id="width"
                  name="width"
                  type="number"
                  placeholder="Largura em pixels"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="width-error"
                />
              </div>

              <div id="width-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.width && 
                  state.errors.width.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  )) 
                }
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="height" className="mb-2 block text-sm font-medium">
                Altura
              </label>
              <div className="relative">
                <input
                  id="height"
                  name="height"
                  type="number"
                  placeholder="Altura em pixels"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="height-error"
                />
              </div>

              <div id="height-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.height && 
                  state.errors.height.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  )) 
                }
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="max_items" className="mb-2 block text-sm font-medium">
                Máximo de itens
              </label>
              <div className="relative">
                <input
                  id="max_items"
                  name="max_items"
                  type="number"
                  placeholder="Máximo de itens suportado"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="max_items-error"
                />
              </div>

              <div id="height-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.max_items && 
                  state.errors.max_items.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  )) 
                }
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  id="publicated"
                  name="publicated"
                  type="checkbox"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="publicated-error"
                />
              </div>
              <label htmlFor="publicated" className="mb-2 block text-sm font-medium">
                publicar?
              </label>

              <div id="height-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.publicated && 
                  state.errors.publicated.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  )) 
                }
              </div>
            </div>

          </div>
          <Button type="submit">Salvar</Button>
      </form>
  )
}