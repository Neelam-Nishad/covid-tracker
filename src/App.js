import './App.css';
import Cards from './component/cards/Card';
import Charts from './component/charts/Charts';
import CountryPicker from './component/countryPicker/CountryPicker'
import styles from './App.module.css';
import React from 'react';
import {fetchData} from './api'

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({data : fetchedData})
  }

  render(){
    const {data} = this.state;
    return (
      <>
      <div className={styles.heading}>
        <h1>Covid-Tracker</h1>
      </div>
      <div className={styles.container}>
        <Cards data={data}/>
      </div>
      </>
    );
  }
}

export default App;
