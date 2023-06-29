import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-100  dark:bg-gray-950">
        <div name="contact" class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <a href="https://flowbite.com/" class="hover:underline">Simon Marcotte:</a> My Portfolio
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">scmarc@ualberta.ca</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">780-235-1492</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact Me</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer

