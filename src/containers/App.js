import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import GitCards from './GitCards';

export default function App() {
  return (
    <div className='content'>
        <h1>Josias Piri</h1>
        <p className='seesaw italic'>Howdy, neighbor!</p>
      <div className='flex'>
        <a href="https://www.linkedin.com/in/josias-piri-0a4a71aa" className='circle icon-container'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/josiaspiri" className='circle icon-container'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <GitCards url="https://api.github.com/users/josiaspiri/repos" />
    </div>
  );
};
