import { Meta } from './Meta'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const BasePagina: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="bg-base">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}
