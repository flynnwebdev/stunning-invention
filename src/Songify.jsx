import React, { Component } from 'react'

export default class Songify extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            filter: '',
            songs: ['Bohemian Rhapsody', 'Space Oddity', 'Boys Light Up', 'Thunderstruck', 'The Boys Are Back In Town']
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const songs = this.state.songs.filter(song => song.includes(this.state.filter))
        return (
            <div>
                <h1>Songify</h1>
                <form>
                    <label htmlFor="search">Search for song: </label>
                    <input type="text" id="search" name="filter" value={this.state.filter} onChange={this.handleChange}/>
                </form>
                {songs.map(song => <h4>{song}</h4>)}
            </div>
        )
    }
}
