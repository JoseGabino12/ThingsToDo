import { Card, Ribbon, Text, Button } from '@rewind-ui/core'

import { AiFillDelete } from 'react-icons/ai'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'

export default function TodoCard ({ todo, onDelete, onComplete }) {
  const { title, description, completed, id } = todo
  const variant = completed ? 'success' : 'info'

  return (
    <Card className='dark:backdrop-blur-md dark:bg-white/70'>
      <Card.Header className='relative'>
        <Ribbon variant={variant}>{completed ? 'Completed' : 'Not completed'}</Ribbon>
        <Text as='h1' weight='bold' className='mt-5'>{title}</Text>
      </Card.Header>
      <Card.Body>
        {description}
      </Card.Body>
      <Card.Footer className='flex gap-5 self-end'>
        <Button
          onClick={() => onComplete(id, !completed)}
          shadow='base'
          color={`${completed ? 'green' : 'blue'}`}
          tone='light'
          icon
        >
          {completed ? <FiCheckCircle /> : <FiCircle />}

        </Button>

        <Button
          onClick={() => onDelete(id)}
          shadow='base'
          color='red'
          icon
          tone='light'
        >
          <AiFillDelete />
        </Button>
      </Card.Footer>
    </Card>
  )
}
