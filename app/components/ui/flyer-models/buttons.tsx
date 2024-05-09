import Link from 'next/link';

export function CreateModel() {
  return (
    <Link
      href="/dashboard/flyer-models/create"
      className="flex h-10 items-center rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Criar Modelo</span>{' '}
      {/* <PlusIcon className="h-5 md:ml-4" /> */}
    </Link>
  );
}