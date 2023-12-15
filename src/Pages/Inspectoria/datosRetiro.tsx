import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const settings = [
  { nombre: 'Andrea Mendez', rut: '22.222.222-2', parentesco:'Mamá' },
  { nombre: 'Juan Armijo', rut: '33.333.333-3', parentesco:'Papá' },
  { nombre: 'Antonio Armijo', rut: '44.444.444-4', parentesco:'Hermano' },

]

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}
  
  export function DatosRetiro() {
    const [selected, setSelected] = useState(settings[0])
    return (
        <div>
        <div>
Autorizados a retirar al alumno:

        </div>
            

        <div>
        <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
        <div className="-space-y-px rounded-md bg-white">
          {settings.map((setting, settingIdx) => (
            <RadioGroup.Option
              key={setting.nombre}
              value={setting}
              className={({ checked }) =>
                classNames(
                  settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                  settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                  checked ? 'z-10 border-indigo-200 bg-indigo-50' : 'border-gray-200',
                  'relative flex cursor-pointer border p-4 focus:outline-none'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span
                    className={classNames(
                      checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                      active ? 'ring-2 ring-offset-2 ring-indigo-600' : '',
                      'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <span className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                    >
                      {setting.nombre}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                    >
                      {setting.rut}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                    >
                      {setting.parentesco}
                    </RadioGroup.Description>
                  </span>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

                    
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Retirar
                    </button>
      </div>
      </div>
    )
  }
  