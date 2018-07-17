

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


        <div className="form-group row">
          <label htmlFor="inputGroupSelect01" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div className="col-sm-10">

            <select className="form-control" onChange={this.handleSelectCurrency} id="inputGroupSelect01">

              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>



        <ul className="list-group">
          {list}
        </ul>

      </div>
    );
  }
}

export default Prices;