import { Modal, Card, Text, Input, Button, Badge } from '@rewind-ui/core'
import { MdCancel } from 'react-icons/md'

import { useState } from 'react'

export default function ModalTodo ({ open, setOpen, onToggle, todoEdit }) {
  const initialState = todoEdit || {
    title: '',
    description: ''
  }

  const [todo, setTodo] = useState(initialState)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setTodo(prevTodo => ({
      ...prevTodo,
      [name]: value
    }))
  }

  const handleClose = () => {
    setOpen(false)
    setError(false)
    setTodo(initialState)
  }

  const handleClick = () => {
    if (!todo.title || !todo.description) {
      setError(true)
      return
    }
    onToggle(todo)
    handleClose()
    setError(false)
  }

  return (
    <Modal
      overlayCloseOnClick={false}
      overlayOpacity='25'
      overlayColor='gray'
      position='center'
      radius='lg'
      shadow='md'
      size='md'
      open={open}
      onClose={handleClose}
    >
      <Card className='w-full dark:bg-[#c1c1c2] dark:border-none dark:text-white dark:divide-none'>
        <Card.Header
          actions={
            <Button onClick={handleClose} size='sm' tone='transparent' icon className='text-xl text-red-500'>
              <MdCancel />
            </Button>
          }
        >
          <Text as='h1' weight='bold' className='mt-5 text-lg'>Add a new todo</Text>
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
        <Card.Footer className='flex justify-end gap-2'>
          <div className='w-full'>
            {error && <Badge color='red' tone='light' className='p-2 dark:bg-red-500 dark:text-white'>Please fill all the fields</Badge>}
          </div>
          <Button
            onClick={handleClick}
            shadow='base'
            color='green'
            icon
            className='px-5'
          >
            Add
          </Button>
        </Card.Footer>
      </Card>
    </Modal>

  )
}
