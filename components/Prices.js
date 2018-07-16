 

class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  handleSelectCurrency = (e) => {
    this.setState({
      currency: e.target.value
    })
  }

  render() {
    const {
      bpi
    } = this.props

    const {
      currency
    } = this.state

    let list = ''

    switch (currency) {
      case 'USD':
        list = <li className="list-group-item">
        Bitcon rate for {bpi.USD.description}: <span className="badge badge-primary">
        {bpi.USD.code}
        </span> <strong>{bpi.USD.rate}</strong>
      </li>
        break;
      case 'GBP':
      list = <li className="list-group-item">
      Bitcon rate for {bpi.GBP.description}: <span className="badge badge-primary">
      {bpi.GBP.code}
      </span> <strong>{bpi.GBP.rate}</strong>
    </li>
        break;
      case 'EUR':
      list = <li className="list-group-item">
      Bitcon rate for {bpi.EUR.description}: <span className="badge badge-primary">
      {bpi.EUR.code}
      </span> <strong>{bpi.EUR.rate}</strong>
    </li>
        break;
    
      default:
        break;
    }


    return (
      <div>
      
 

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
        </div>
        <select className="custom-select" onChange={this.handleSelectCurrency} id="inputGroupSelect01">
          
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <ul className="list-group">
       {list}
      </ul>
        
      </div>
    );
  }
}

export default Prices;