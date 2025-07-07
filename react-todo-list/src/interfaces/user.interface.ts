export interface UserInterface {
  uid: string,
  email: string,
  displayName: string,
  date_created: string,
}

export interface UserInputInterface {
  email: string,
  displayName?: string,
  password: string
}

export {}