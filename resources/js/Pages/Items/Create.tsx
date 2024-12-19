import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Category } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface Props {
  categories: Category[];
}

export default function CreateItem({ categories }: Props) {
  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      name: '',
      count: '1',
      category_id: '',
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('items.store'));
  };

  return (
    <AuthenticatedLayout
      header={
        <a
          className="text-xl font-semibold leading-tight text-gray-800"
          href={route('dashboard')}
        >
          &larr; Zurück
        </a>
      }
    >
      <Head title="Neuer Eintrag" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <section className="max-w-xl">
              <header>
                <h2 className="text-lg font-medium text-gray-900">
                  Eintrag hinzufügen
                </h2>
              </header>

              <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                  <InputLabel htmlFor="name" value="Titel" />

                  <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                    isFocused
                  />

                  <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                  <InputLabel htmlFor="count" value="Anzahl" />

                  <TextInput
                    id="count"
                    type="number"
                    className="mt-1 block w-full"
                    value={data.count}
                    onChange={(e) => setData('count', e.target.value)}
                    min={1}
                    required
                  />

                  <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                  <InputLabel htmlFor="category" value="Kategorie" />

                  <select
                    value={data.category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                    className="mt-1 block w-full"
                  >
                    <option value="" disabled>
                      Wähle eine Kategorie
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>

                  <InputError className="mt-2" message={errors.category_id} />
                </div>
                <div>
                  <PrimaryButton type="submit" disabled={processing}>
                    Speichern{processing ? '...' : ''}
                  </PrimaryButton>

                  <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                  >
                    <p className="text-sm text-gray-600">Gespeichert.</p>
                  </Transition>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
