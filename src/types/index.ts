
interface ISignProps {
  toggleSwitch: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

interface IUserData {
  username: string,
  password: string
}

interface IUserReg extends IUserData {
  displayName: string,
}

export type { ISignProps, IUserData, IUserReg }