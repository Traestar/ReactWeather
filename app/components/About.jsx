var React = require('react');

var About = function (props){
  return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>
        This is a weather app build on React. I have built this for the 
        Complete React Web App Developer Course.
        </p>
        <p>
            Here are some of the tools I used:
        </p>
        <ul>
            <li><a href="https://facebook.github.io/react" target="_blank">React</a> - Javascript Framework</li>
            <li><a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Used site's API to retrieve weather data by city name.</li>
        </ul>
    </div>  
  )  
};



module.exports = About;
    