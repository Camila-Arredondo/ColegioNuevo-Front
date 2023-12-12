import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            LOGIN
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Colegio Los Mensos
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          No es lo mejor, pero se hace lo que se puede.
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
              <h3 className="text-base font-semibold leading-7 text-gray-900"></h3>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  Docente
                </span>
              </p>
              <a className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                navigate("/logindocente");
              }}>
                Ingresar
              </a>
            </div>
            <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
              <h3 className="text-base font-semibold leading-7 text-gray-900"></h3>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  Alumno
                </span>
              </p>
              <a className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               onClick={() => {
                navigate("/loginalumno");
              }}>
                Ingresar
              </a>
            </div>
            <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
              <h3 className="text-base font-semibold leading-7 text-gray-900"></h3>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  Administrativo
                </span>
              </p>
              <a className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                navigate("/loginselectadmin");
              }}>
                Ingresar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
