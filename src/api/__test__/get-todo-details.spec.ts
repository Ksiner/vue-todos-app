import { describe, expect, it } from 'vitest'
import todos from '@/mocks/todos.json'
import { getTodoDetails } from '../todos/get-todo-details'
import { NotFoundError } from '@/errors/not-found-error'

describe('Get Todo Details Test', () => {
  it('Should return correct todo with comments and authors', async () => {
    const result = await getTodoDetails('1')
    const targetTodo = todos.find((todo) => todo.id === '1')

    expect(targetTodo).toBeTruthy()
    expect(result.comments).toBeDefined()
    expect(result.comments[0].author).toBeDefined()
  })

  it("Should throw 'NotFound' error", async () => {
    await expect(() => getTodoDetails('1231')).rejects.toThrowError(NotFoundError)
  })
})
