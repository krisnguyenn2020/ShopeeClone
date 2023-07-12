import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'
import RegisterLayout from './RegisterLayout';

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
const RegisterLayout = memo(RegisterLayoutInner)
export RegisterLayout