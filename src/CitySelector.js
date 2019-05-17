import React from 'react';

class CitySelector extends React.Component{
  handleSelect(event){
    const value = event.currentTarget.value;
    return(console.log(value));
  }
  render(){
    return(
      <select>
        <option value="Madrid">Madrid</option>
        <option value="Bcn">Bcn</option>
        <option value="Valencia">Valencia</option>
        <option value="Lugo">Lugo</option>
      </select>
    );
  }
}

export default CitySelector;