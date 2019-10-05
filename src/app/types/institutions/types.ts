export interface SearchData {
  page?: number | string,
  pid?: string,
  name?: string
}

export interface Institution {
  id: number,
  name: string,
  pid: string,
  number: string,
  created_at: string,
  updated_at: string
}
