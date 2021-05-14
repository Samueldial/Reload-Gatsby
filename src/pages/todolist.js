import * as React from "react"
import '../styles/global.css';




const show = () => {
    return (
      	<main>
              <section class="sm:items-center mx-auto">
              <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                        To Do List
                    </p>
                    <input class="text-gray-500 font-medium" placeholder="O que desejafazer?" id="formulario">
                        
                    </input>
                    </div>
                    <button type="button" id="btn-add" class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Enviar</button>
                </div>
                </div>

            <div class="p-6 max-w-sm mx-auto bg-grey rounded-xl shadow-md flex items-center space-x-12">
            <section class="md:flex bg-white-100 rounded-xl p-8 md:p-0">
            <ul id="todo-list" class="text-gray-500">
                <li><input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"></input><span class="ml-2 text-gray-700"> Ir para academia</span></li>
                <li><input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"></input><span class="ml-2 text-gray-700"> Jogar no jogo do bixo</span></li>
                <li><input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"></input><span class="ml-2 text-gray-700"> Ser preso por jogos ilegais</span></li>
                <li><input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"></input><span class="ml-2 text-gray-700"> Pagar fiança com o prêmio do jogo</span></li>
                <li><input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"></input><span class="ml-2 text-gray-700"> Andar de moto</span></li>
                <li><input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"></input><span class="ml-2 text-gray-700"> Ter noções estéticas</span></li>
            </ul>
            </section>
            </div>
            </section>
        </main>
    )
}
export default show