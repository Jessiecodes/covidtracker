import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker'; or  import all components in one line like done beolw...  add into components folder an index.js file and default export all the components. 


import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount () {
    const fetcheddata = await fetchData();

    this.setState({ data: fetcheddata});
  }

  render() {

    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
     
      </div>
    )
  }
}
export default App;
