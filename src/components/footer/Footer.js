import  Container from './styles'
import reactIcon from '../../assets/react-icon.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Mario</span>
        <span>Sakamoto</span>
      </a>
      <div>
        <p>
          Este site foi feito com <img src={reactIcon} alt="React" /> e muito
          <span>❤️</span>
        </p>
      </div>
    </Container>
  )
}