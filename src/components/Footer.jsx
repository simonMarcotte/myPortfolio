import React from 'react'
import ButtonMailto from './common/mailing'

const Footer = () => {


  return (
    <footer class="bg-gray-300  dark:bg-zinc-900 rounded-md m-3 duration-500">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between duration-500">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 | Simon Marcotte | My Portfolio
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <p class="mr-4 md:mr-6 ">scmarcot@ualberta.ca</p>
            </li>
            <ButtonMailto classLabel="mr-4 underline md:mr-6 font-extrabold hover:scale-105 rounded-sm" label="send me an e-mail" mailto="mailto:scmarcot@ualberta.ca" />
        </ul>
        </div>
    </footer>
  )
}

export default Footer

