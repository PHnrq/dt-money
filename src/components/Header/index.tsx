import { HeaderStyle } from "./style"
import logo from "../../assets/logo.svg"

export function Header (){
    return(
        <HeaderStyle>
            <div>
              <img src={logo} alt="Logo" />
              <button>Nova transação</button>
            </div>
        </HeaderStyle>
    )
}