export type Column = {
  id: string
  name: string
  todos: Todo[]
}

export type Todo = {
  id: string
  order: number
  columnId: string
  name: string
}

export type User = {
  id: string
  fullname: string
}

export type Comment = {
  id: string
  todoId: string
  authorId: string
  author: User
  content: string
  createdAt: string
}

export type DetailedTodo = Todo & {
  comments: Comment[]
}
