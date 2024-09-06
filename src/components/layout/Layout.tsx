import Header from "../header/Header"
import "./layout.scss"
interface LayoutProps {
    children: React.ReactNode;
  }

export const Layout = ({children}:LayoutProps) => {
  return (
    <div className="layout">
        <Header />
        {children}
    </div>
  )
}
