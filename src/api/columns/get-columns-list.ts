import type { Column } from '@/types/api.types'
import mockedColumns from '@/mocks/columns.json'
import mockedTodos from '@/mocks/todos.json'
import { sleep } from '@/utils/sleep'

export const getColumnsList = async (): Promise<Column[]> => {
  await sleep(1000)

  return mockedColumns.map((column) => ({
    ...column,
    todos: mockedTodos.filter((todo) => todo.columnId === column.id)
  }))
}
