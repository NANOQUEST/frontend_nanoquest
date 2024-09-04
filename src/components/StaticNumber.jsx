import React, { useState, useEffect } from 'react';

const CounterProducts = () => {
  const finalNumber = 5;
  const duration = 1000;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = finalNumber / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalNumber) {
        setCount(finalNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      {count}+
    </div>
  );
};

const CounterSkills = () => {
  const finalNumber = 150;
  const duration = 3000;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = finalNumber / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalNumber) {
        setCount(finalNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      {count}+
    </div>
  );
};

const CounterProjects = () => {
  const finalNumber = 10;
  const duration = 3000;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = finalNumber / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalNumber) {
        setCount(finalNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      {count}+
    </div>
  );
};

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ textAlign: 'center' }}>
        <h3>Products</h3>
        <CounterProducts />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3>Skills</h3>
        <CounterSkills />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3>Industries</h3>
        <CounterProjects />
      </div>
    </div>
  );
};

export default Dashboard;
