//Funcionalidad
import { landingBG } from "../../assets/Backgrounds/backgrounds";

//Components

//? #####################################################

const Register = () => {
  return (
    <div
      className="grid place-items-center bg-cover bg-center bg-no-repeat h-screen max-w-full px-3"
      style={{
        backgroundImage: `url(${landingBG})`,
      }}
    >
      <div className="w-full max-w-[400px] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registro</h2>

        <form className="flex flex-col">
          <input
            type="text"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Nombre y Apellido"
          />
          <input
            type="number"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Número de teléfono"
          />
          <input
            type="email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email"
          />
          <input
            type="date"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Date of Birth"
          />

          {/* <input
            type="text"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Job Title"
          /> */}

          <input
            className="cursor-pointer"
            type="reset"
            value="Resetear Valores"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            ¡Registrarme!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
