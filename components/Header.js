import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Ryan's </span> Weather API
        </h1>
        <p className={headerStyles.description}>Bringing you the latest weather updates</p>
    </div>
  )
}

export default Header