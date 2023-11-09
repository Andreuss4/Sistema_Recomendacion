import React from 'react'

const Home = () => {
  return (
    <div className="ml-[20rem] p-4 text-white">
          {/*<img src={Imagen} alt="Inicio" style={{ width: '100%', height: 'auto' }} />*/}
          <div className="flex items-center justify-center h-screen bg-gradient-to-b from-custom-color to-black">
            <div className="shadow-blue-gray-900/4  shadow-lg rounded-lg p-20 flex">
              <div className="flex-1">
                <h1 className="text-4xl text-white font-bold mb-4">¡Bienvenido(a)!</h1>
                <p className="text-white text-lg mb-8">Gracias por visitar nuestra página.</p>

              </div>

            </div>
        </div>
    </div>
  )
}

export default Home