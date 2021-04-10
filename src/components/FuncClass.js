import React, { useEffect, useState } from 'react';

function FuncComp(props) {
  var [number, setNumber] = useState(props.initNumber);
  var [_date, setDate] = useState(new Date().toString());

  useEffect(() => {
    console.log('한번만 생성후 및 새로운 상태 componentDidMount');
    return () => {
      console.log('사라지기 전 componentWillUnMount');
    };
  }, []);

  useEffect(() => {
    console.log('number 생성후 및 새로운 상태');
    return () => {
      console.log('number 사라지기 전');
    };
  }, [number]);

  useEffect(() => {
    console.log('_date 생성후 및 새로운 상태');
    return () => {
      console.log('_date 사라지기 전');
    };
  }, [_date]);

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
  };

  componentWillMount() {
    console.log('생성전');
  }
  componentDidMount() {
    console.log('생성후');
  }
  componentDidUpdate() {
    console.log('새로운 상태');
  }
  componentWillUnmount() {
    console.log('사라지기 전');
  }

  render() {
    console.log('생성됨');
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

function FuncClass() {
  return (
    <div>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

export default FuncClass;
