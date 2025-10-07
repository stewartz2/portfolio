 export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-flex text-center rounded-xl flex-col border-gray-400 border-[1.5px]">
        <div className="grow">
          <h2 className="text-center font-bold py-3 px-35">PROYECTOS</h2>
        <div className="flex flex-col">
          <a className="border-b-[1.5px] hover:bg-gray-300 transition duration-300 py-2 rounded-t-xl border-t-[1.5px] border-gray-400" href="https://github.com/stewartz2/bmi">Calculadora BMI</a>
          <a className="border-b-[1.5px] hover:bg-gray-300 transition duration-300 py-2 border-gray-400"  href="https://github.com/stewartz2/pingpong">Ping pong en Processing</a>
          <a className="border-gray-400 py-2 hover:bg-gray-300 transition duration-300"  href="https://github.com/stewartz2/units">Conversor de unidades</a>
        </div>
        </div>
      </div>
    </div>
  )
 }