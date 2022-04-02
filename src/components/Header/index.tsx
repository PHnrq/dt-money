import { HeaderStyle } from "./style"
import logo from "../../assets/logo.svg"

export function Header (){
    return(
        <HeaderStyle>
            <img src={logo} alt="Logo" />
            <button>Nova transação</button>
        </HeaderStyle>
    )
}