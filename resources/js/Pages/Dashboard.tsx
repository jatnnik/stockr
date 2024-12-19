import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Item } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
  items: Item[];
}

export default function Dashboard({ items }: Props) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Vorräte
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white p-6 text-gray-700 shadow-sm sm:rounded-lg">
            <a
              href={route('items.create')}
              className="rounded-md bg-gray-700 px-4 py-2 font-medium text-white"
            >
              Neuer Eintrag
            </a>

            <section className="mt-6 grid grid-cols-3 gap-3">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-md border border-gray-200 p-4"
                >
                  <header>
                    <span className="text-sm text-gray-700">
                      {item.category.title}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                  </header>
                  <main className="mt-4 font-mono text-lg">
                    {item.count} Stück
                  </main>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
