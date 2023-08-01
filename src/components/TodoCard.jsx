import { Card, Ribbon, Text, Button } from '@rewind-ui/core'
import { AiFillDelete } from 'react-icons/ai'

export default function TodoCard ({ todo, onToggle }) {
  const { title, description, completed, id } = todo
  const variant = completed ? 'success' : 'info'

  return (
    <Card>
      <Card.Header className='relative'>
        <Ribbon variant={variant}>{completed ? 'Completed' : 'Not completed'}</Ribbon>
        <Text as='h1' weight='bold' className='mt-5'>{title}</Text>
      </Card.Header>
      <Card.Body>
        {description}
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={() => onToggle(id)}
          shadow='base'
          color='red'
          icon
          size='sm'
          tone='light'
        >
          <AiFillDelete />
        </Button>

      </Card.Footer>
    </Card>
  )
}
