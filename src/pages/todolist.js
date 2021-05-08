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
                <li>Hit the gym <button class="flex-right py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700">X</button></li>
                <li>Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>
            </section>
            </div>
            </section>
        </main>
    )
}
export default show