import { HeaderStyle } from "./style"
import logo from "../../assets/logo.svg"

interface HeaderProps{
    onOpenNewTransaction: () => void
}

export function Header ({onOpenNewTransaction}: HeaderProps) {
    return(
        <HeaderStyle>
            <div>
              <img src={logo} alt="Logo" />
              <button type="button" onClick={onOpenNewTransaction}>Nova transação</button>
            </div>
        </HeaderStyle>
    )
}