import './Menu.css';
import { GrGithub, GrLinkedin } from 'react-icons/gr' 

function Menu() {
  return (  
    <header>
      <h1>Daniel Costa</h1>
      <nav>
        <a href='https://www.linkedin.com/in/daniel-costa010' target="_blank" rel='noreferrer'> <GrLinkedin /></a>
        <a href='https://github.com/danielcosta010' target="_blank" rel='noreferrer'> <GrGithub /></a>
      </nav>
    </header>
  );
}

export default Menu;