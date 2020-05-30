import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    cow: '',
    text: '',
    cool:'',
  }
  componentDidMount() {
    this.fetchCow()
  }
  fetchCow = async () => {
    const response = await fetch(`/api/cow`)
    const initialCow = await response.json()
    const cow = initialCow.moo
    this.setState({ cow })
  }
  customCow = async evt => {
    evt.preventDefault()
    const text = this.state.text
    const response = await fetch(`/api/cow/${text}`)
    const custom = await response.json()
    const cow = custom.moo
    this.setState({ cow, text: '' })
  }

  Hello = async evt => {
    evt.preventDefault()
    const cool = this.state.cool
    const response = await fetch(`/api/cow/${cool}`)
    const custom = await response.json()
    const cow = custom.moo
    this.setState({ cow, text: '' ,cool:''})
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
    console.log(this.state.text)
  }
  handleChangee = evt => {
    this.setState({ [evt.target.name]: evt.target.value})
    console.log(this.state.text)
  }
  render() {
    return (
      <div className="App">
        <h3>Text Cow. Moo</h3>
        <code>{this.state.cow}</code>
        <form onSubmit={this.customCow}>
          <label>Custom Cow Text:</label>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Show me a talking cow!</button>
        </form>
        <form onSubmit={this.Hello}>
          <label>Custom Cow Text:</label>
          <input
            type="text"
            name="cool"
            value={this.state.cool}
            onChange={this.handleChangee}
          />
          <button type="submit">Show me a talking cow!</button>
        </form>
      </div>
    )
  }
}
export default App
