import React from 'react'

export const Test = () => {
  return (
    <div >
        <p className='text-3xl font-bold underline'>All working</p>
        <div class="text-red-500">Red text</div>
        <div class="bg-blue-500 text-white p-4">Blue background</div>


        <div class="p-4 bg-gray-200">Padding 4</div>
        <div class="m-4 bg-gray-300">Margin 4</div>
        <div class="px-6 py-3 bg-gray-400">PX 6 - PY 3</div>

        <div class="text-xl font-bold">Big bold text</div>
        <div class="text-4xl font-extrabold underline">Extra big + underline</div>
        <div class="tracking-wide text-2xl">Spacing text</div>


        <div class="flex gap-4">
          <div class="bg-red-500 p-2">A</div>
          <div class="bg-green-500 p-2">B</div>
          <div class="bg-blue-500 p-2">C</div>
        </div>




        <button class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          Hover me
        </button>

        <div class="dark:bg-gray-900 dark:text-white p-4">
          Dark mode test
        </div>

    </div>
  )
}
