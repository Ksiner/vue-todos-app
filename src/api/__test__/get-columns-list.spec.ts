import { describe, expect, it } from 'vitest'
import { getColumnsList } from '../columns/get-columns-list'
import columns from '@/mocks/columns.json'
import todos from '@/mocks/todos.json'

describe('Get Columns List Test', () => {
  it('Should return correct columns list with todos', async () => {
    const result = await getColumnsList()
    const expectedColumns = columns.map((column) => ({
      ...column,
      todos: todos.filter((todo) => todo.columnId === column.id)
    }))

    expect(result).toEqual(expectedColumns)
  })
})
