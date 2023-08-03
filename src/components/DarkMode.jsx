import { Selector, Text } from '@rewind-ui/core'
import { BsMoonStars, BsSun } from 'react-icons/bs'

export default function DarkMode () {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <header className='p-5 w-full flex justify-between items-center'>
      <Text weight='bold' className='dark:text-white text-lg md:text-2xl'>
        Welcome to the todo app
      </Text>
      <Selector
        className='bg-gray-50 border border-gray-100'
        value={isDark ? 'dark' : 'light'}
        radius='full'
        separator={<span className='last-of-type:hidden self-center w-1 h-1 bg-transparent' />}
        onChange={() => document.body.classList.toggle('dark')}
      >
        <Selector.Tab color='yellow' label={<BsSun size={16} weight='duotone' />} anchor='light' />
        <Selector.Tab label={<BsMoonStars size={16} weight='duotone' />} anchor='dark' />
      </Selector>
    </header>
  )
}
