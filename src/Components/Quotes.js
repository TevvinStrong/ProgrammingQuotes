import React from "react"

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                quotes: json,
            })
        });
    }

    handleClick = () => {
        this.componentDidMount();
        console.log("Clicked!!");
    }

    render() {
        const {isLoaded, quotes } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            return (
                <div className="container" style={containerStyles}> 
                    <p style={text}>"{quotes.en}"</p><br></br>
                    <span style={text}>- {quotes.author}</span><br></br>

                    <button style={btnStyles} type="submit" onClick={this.handleClick}>Click Me!</button>
                </div>
            )
        }
    }
}

const containerStyles = {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50vh",
    marginBottom: "50vh",
    marginLeft: "auto",
    marginRight: "auto"
}

const btnStyles = {
    fontFamily: "Montserrat, arial",
    color: "white",
    padding: "10px 30px 10px 30px",
    backgroundColor: "rgb(247 158 67)",
    border: "none",
    cursor: "pointer",
    boxShadow: "-9px 7px 20px 3px rgba(157,158,163,1)"
}

const text = {
    fontFamily: "arial, sans-serif",
    color: "#37a4cc",
    fontSize: "20px"
}

export default Quotes;