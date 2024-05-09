// import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';
import { listFlyerModels } from '@/lib/actions/flyer.action';

export default async function FlyerModelsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  
  const { data } = await listFlyerModels();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* <div className="md:hidden">
            {data.listFlyerModels.items?.map((model) => (
              <div
                key={model.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      ...
                      <p>Nome</p>
                    </div>
                    <p className="text-sm text-gray-500">{model.name}</p>
                  </div>
                  status
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      amount
                    </p>
                    <p>date</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    UpdateInvoice
                    DeleteInvoice
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nome
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Largura
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Altura
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Máximo de itens
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.listFlyerModels.items?.map((model) => (
                <tr
                  key={model.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{model.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {model.width}px
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {model.height}px
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {model.max_itens}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* <InvoiceStatus status={invoice.status} /> */}
                    {model.publicated ? 'publicado' : 'não publicado'}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      update
                      delete
                      {/* <UpdateInvoice id={invoice.id} /> */}
                      {/* <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}