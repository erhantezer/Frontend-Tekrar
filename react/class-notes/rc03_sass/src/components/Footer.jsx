import footerStyle from '../scss/footer.module.scss'

const Footer = () => {
  return (
    <footer>
        <p className={footerStyle["title"]}>
            Copyright by E.T Team {new Date().getFullYear()}
        </p>
    </footer>
  )
}

export default Footer