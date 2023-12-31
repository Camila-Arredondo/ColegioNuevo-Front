const people = [
  {
    curso: "1ro basico A",
    profesorJefe: "Lindsay Walton"
  },
  // More people...
];
export function Cursos() {
  return (
    <div>
      <div>
        <form>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-900/10 pb-6">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Cursos colegio Los Mensos
              </h2>
              <p className="mt-9 text-base font-semibold leading-6 text-gray-900">
                Ingresar un nuevo curso
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-1 ml-9">
                  <label
                    htmlFor="nivel"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nivel
                  </label>
                  <input
                    id="nivel"
                    name="nivel"
                    autoComplete="nivel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  ></input>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="ciclo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ciclo
                  </label>
                  <select
                    id="ciclo"
                    name="ciclo"
                    autoComplete="ciclo"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Prescolar</option>
                    <option>Básica</option>
                    <option>Media</option>
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="nivel"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Letra
                  </label>
                  <input
                    id="nivel"
                    name="nivel"
                    autoComplete="nivel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  ></input>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="profesorJefe"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Profesor Jefe
                  </label>
                  <select
                    id="profesorJefe"
                    name="profesorJefe"
                    autoComplete="profesorJefe"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Pedro Lopez</option>
                    <option>Martina Barra</option>
                    <option>	Lindsay Walton</option>
                  </select>
                </div>

                <div className="mt-6 flex items-center font-mediu gap-x-6 mb-10 ">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-9">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">

            <p className=" text-base font-semibold leading-6 text-gray-900">
              Listado de cursos actuales
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Curso
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Profesor Jefe
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.curso}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.curso}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.profesorJefe}
                      </td>


                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Editar<span className="sr-only">, {person.curso}</span>
                        </a>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Eliminar<span className="sr-only">, {person.curso}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
