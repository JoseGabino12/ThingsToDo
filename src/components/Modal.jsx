import { Modal, Card, Text, Input, Button } from '@rewind-ui/core'
import { MdCancel } from 'react-icons/md'

import { useState } from 'react'

export default function ModalTodo ({ open, setOpen, onToggle }) {
  const initialState = {
    title: '',
    description: ''
  }

  const [todo, setTodo] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setTodo(prevTodo => ({
      ...prevTodo,
      [name]: value
    }))
  }

  const handleClose = () => {
    setOpen(false)
    setTodo(initialState)
  }

  const handleClick = () => {
    onToggle(todo)
    handleClose()
  }

  return (
    <Modal
      overlayCloseOnClick={false}
      overlayOpacity='25'
      overlayColor='white'
      position='center'
      radius='lg'
      shadow='md'
      size='md'
      open={open}
      onClose={handleClose}
    >
      <Card className='w-full'>
        <Card.Header
          actions={
            <Button onClick={handleClose} size='sm' tone='transparent' icon className='text-xl text-red-500'>
              <MdCancel />
            </Button>
          }
        >
          <Text as='h1' weight='bold' className='mt-5'>Add a new todo</Text>
        </Card.Header>
        <Card.Body className='max-h-[300px] overflow-auto space-y-2'>
          <div>
            <Text weight='bold'>Title</Text>
            <Input placeholder='Title' name='title' value={todo.title} onChange={handleChange} />
          </div>

          <div>
            <Text weight='bold'>Description</Text>
            <Input placeholder='Description' name='description' value={todo.description} onChange={handleChange} />
          </div>
        </Card.Body>
        <Card.Footer className='self-end'>
          <Button
            onClick={handleClick}
            shadow='base'
            color='green'
            icon
          >
            Add
          </Button>
        </Card.Footer>
      </Card>
    </Modal>

  )
}
