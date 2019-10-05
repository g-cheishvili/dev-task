export interface User {
  id: number,
  name: string,
  email: string,
  api_token: null,
  created_at: string,
  updated_at: string,
  roles: UserRole[]
  permissions: Set<string>
}

export interface UserRole {
  id: number,
  name: string,
  guard_name: string,
  created_at: string,
  updated_at: string,
  permissions: UserPermission[]
}

export interface UserPermission {
  id: number,
  name: string,
  guard_name: string,
  created_at: string,
  updated_at: string,
}
