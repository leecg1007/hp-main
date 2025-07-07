export interface TodoInterface {
  id:string,
  uid:string,
  task: string,
  status: string,
  date?: string,
  date_created: string,
}

export interface TodoInputInterface {
  task: string,
  status?: string,
  date?: string
}

export {}