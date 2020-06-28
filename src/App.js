import React from 'react';
import './App.scss';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import AboutMeContainer from './components/about-me-container/about-me-container.component';
import SkillsContainer from './components/skills-container/skills-container.component';
import ProjectsContainer from './components/projects-container/projects-container.component';
import ContactContainer from './components/contact-container/contact-container.component';
import Footer from './components/footer/footer.component';
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: auto;
  background-color: white;
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    }
  }

  //let timer = null;
  
  componentDidMount(){ 
    //timer = setTimeout(() => this.setState({loading: false}), 3000)
    setTimeout(() => this.setState({loading: false}), 5000)
  }

  render() {
    let quotes = [
      '"What seems to us as bitter trials are often blessings in disguise." - Oscar Wilde',
      '"Things work out best for those who make the best of how things work out." - John Wooden',
      '"If you are not willing to risk the usual, you will have to settle for the ordinary." - Jim Rohn',
      '"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." - Albert Einstein',
      '"All our dreams can come true if we have the courage to pursue them." - Walt Disney',
      '"It does not matter how slowly you go, so long as you do not stop." - Confucius',
      '"Someone is sitting in the shade today because someone planted a tree a long time ago." - Warren Buffett',
      '"The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart." - Helen Keller',
      '"I have not failed. I\'ve just found 10,000 ways that won\'t work." - Thomas Edison'
    ];

    return(
      <div className="App">
        {
          (this.state.loading) ?
          (
            <div className="sweet-loading">
              <div className="sweet-loading-inner">
                <BarLoader
                  css={override}
                  height={15}
                  width={250}
                  color={"#1565c0"}
                  loading={this.state.loading}
                />
                <br />
                <p className="loading-text">Loading...</p>
                <div className="quote-text">
                  {quotes[Math.floor(Math.random() * quotes.length)]}
                </div>
              </div>
            </div>
          )
          :
          (
            <div>
              <NavigationBar />
              <AboutMeContainer />
              <SkillsContainer />
              <ProjectsContainer />
              <ContactContainer />
              <Footer />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
