import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <p className='logo'>MK
        <span class='logo__proffesion'>UI/UX Designer &<br/>Product Designer</span>
        </p>

        <nav className="navbar">
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Work</button>
          <button className="nav-button">News</button>
          <button className="nav-button">Contact</button>
        </nav>
        <h2 id="title">Hello people! </h2>
        <h1>We’re creative<br/>digital studio.</h1>
        <img className="logo" src="logo.png" width={125} height={125}></img>
        <div className='logos'>

        <img  src='logos.png' width={350} height={50}></img>
        </div>
        <h2 id="description1">Our Philosophy</h2>
        <div id="description1__content">
          <div id="pink__square" width={530} height={474}></div>
          <p>Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry.</p>
          <p>Lorem Ipsum has been the industry's<br/> standard dummy text ever since the<br/> 1500s, when an unknown printer took<br/> a galley of type and scrambled it to<br/> make a type specimen book.</p>
          <button id="description1__content__entry-button">MEET THE TEAM</button>
        </div>

      </div>
    </div>
  );
}

export default App;
