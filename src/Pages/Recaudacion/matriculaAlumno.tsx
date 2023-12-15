const people = [
    { rut: '11.111.111-1', periodo: '2024', curso: '1ro basico A', fechavencimiento: '22/12/2019', monto: '$260.000', estado: 'Pagado' },
    { rut: '11.111.111-1', periodo: '2024', curso: '2do basico A', fechavencimiento: '22/12/2020', monto: '$260.000', estado: 'Pagado' },
    { rut: '11.111.111-1', periodo: '2024', curso: '3ro basico A', fechavencimiento: '22/12/2021', monto: '$270.000', estado: 'Pagado' },
    { rut: '11.111.111-1', periodo: '2024', curso: '4to basico A', fechavencimiento: '22/12/2022', monto: '$280.000', estado: 'Pagado' },
    { rut: '11.111.111-1', periodo: '2024', curso: '5to basico A', fechavencimiento: '22/12/2023', monto: '$300.000', estado: 'Pagado' },
    { rut: '11.111.111-1', periodo: '2024', curso: '6to basico A', fechavencimiento: '22/12/2024', monto: '$320.000', estado: 'Pendiente' },

  ]
  
  export default function MatriculaAlumno() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Lindsay Walton</h1>
            <p className="mt-2 text-sm text-gray-700">
             6to basico A
            </p>
          </div>

        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Rut
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Cuota
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Fecha de Vencimiento
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Monto
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Estado
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.rut}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.rut}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.periodo}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.fechavencimiento}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.monto}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.estado}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Pagar<span className="sr-only">, {person.rut}</span>
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
    )
  }
  