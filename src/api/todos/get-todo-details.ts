import type { Comment, DetailedTodo, Todo } from '@/types/api.types'
import mockedTodos from '@/mocks/todos.json'
import mockedComments from '@/mocks/comments.json'
import mockedUsers from '@/mocks/users.json'
import { sleep } from '@/utils/sleep'
import { NotFoundError } from '@/errors/not-found-error'

export const getTodoDetails = async (todoId: string): Promise<DetailedTodo> => {
  await sleep(1000)

  const targetTodo: Todo | undefined = mockedTodos.find((todo) => todo.id === todoId)

  if (!targetTodo) {
    throw new NotFoundError('Specified Todo Not found')
  }

  const todoComments: Comment[] = mockedComments
    .filter((comment) => comment.todoId)
    .map((comment) => ({
      ...comment,
      author: mockedUsers.find((user) => user.id === comment.authorId)!
    }))
    .sort((commentA, commentB) => {
      const dateA = new Date(commentA.createdAt)
      const dateB = new Date(commentB.createdAt)

      if (dateA < dateB) {
        return -1
      }

      if (dateA > dateB) {
        return 1
      }

      return 0
    })

  return {
    ...targetTodo,
    comments: todoComments
  }
}
