import { Selector, Button } from '@rewind-ui/core'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function Filter ({ filter, setFilter, setOpen }) {
  return (
    <section className='w-80 md:w-1/2 mt-10 flex gap-10'>
      <Selector value={filter} fullWidth onChange={(value) => setFilter(value)}>
        <Selector.Tab label='All' color='gray' anchor='all' />
        <Selector.Tab label='Completed' color='green' anchor='completed' />
        <Selector.Tab label='N/C' color='blue' anchor='not-completed' />
      </Selector>

      <Button className='text-lg' color='green' icon onClick={() => setOpen(true)}>
        <AiOutlinePlusCircle />
      </Button>
    </section>
  )
}
