import { Card, Ribbon, Text, Button } from '@rewind-ui/core'

import { AiFillDelete, AiTwotoneEdit } from 'react-icons/ai'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'

export default function TodoCard ({ todo, onDelete, onComplete }) {
  const { title, description, completed, id } = todo
  const variant = completed ? 'success' : 'info'

  return (
    <Card className='dark:bg-[#c1c1c2] dark:border-[#011140] dark:divide-none'>
      <Card.Header className='relative border-none'>
        <Ribbon className={completed ? 'dark:bg-green-700' : 'dark:bg-blue-800'} variant={variant}>{completed ? 'Completed' : 'Not completed'}</Ribbon>
        <Text as='h1' weight='bold' className='mt-5'>{title}</Text>
      </Card.Header>
      <Card.Body>
        {description}
      </Card.Body>
      <Card.Footer>
        <Button icon color='black' tone='light' className='dark:bg-black dark:text-white'>
          <AiTwotoneEdit />
        </Button>
        <div className='w-full flex justify-end gap-2'>
          <Button
            onClick={() => onComplete(id, !completed)}
            shadow='base'
            color={completed ? 'green' : 'blue'}
            className={completed ? 'dark:bg-green-700 dark:text-white' : 'dark:bg-blue-800 dark:text-white'}
            tone='light'
            icon
          >
            {completed ? <FiCheckCircle /> : <FiCircle />}

          </Button>

          <Button
            onClick={() => onDelete(id)}
            shadow='base'
            color='red'
            className='dark:bg-red-700 dark:text-white'
            icon
            tone='light'
          >
            <AiFillDelete />
          </Button>
        </div>
      </Card.Footer>
    </Card>
  )
}
