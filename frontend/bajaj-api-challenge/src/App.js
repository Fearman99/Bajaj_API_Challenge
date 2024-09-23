import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import Dropdown from './components/Dropdown';
import Result from './components/Result';
import axios from 'axios';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle JSON input submission
  const handleSubmit = async (jsonData) => {
    try {
      const res = await axios.post('https://us-central1-testbfhl-ba410.cloudfunctions.net/api/bfhl', jsonData);
      setResponse(res.data);
    } catch (err) {
      console.error('Error submitting the JSON data', err);
    }
  };

  return (
    <div className="App">
      <h1>RA2111003030438</h1>
      <JsonInput handleSubmit={handleSubmit} />
      {response && (
        <>
          <Dropdown setSelectedOptions={setSelectedOptions} />
          <Result response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
