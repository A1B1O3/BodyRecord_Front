import React, { useState } from 'react';

const DynamicInputForm = () => {
  const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

  const handleAddField = () => {
    const newInputFields = [...inputFields];
    const newId = inputFields.length + 1;

    newInputFields.push({ id: newId, value: '' });
    setInputFields(newInputFields);
  };

  const handleInputChange = (id, value) => {
    const newInputFields = inputFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setInputFields(newInputFields);
  };

  const handleRemoveField = (id) => {
    const newInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(newInputFields);
  };

  return (
    <div style={{width:'1000px',height:'400px',textAlign: 'center'}}>
      {inputFields.map((field) => (
        <div key={field.id}>
            
          <input
            style={{width:'500px',height:'57px',marginTop:'80px',
            borderLeft:'none',
            borderRight:'none',
            borderTop:'none',
            borderBottom:'1px solid rgba(0, 0, 0, 0.50)',
        fontSize:'30px'}}
            placeholder="챌린지 내용을 입력해주세요"
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
          />
          <button style={{width:'50px',height:'60px',fontSize:'30px',backgroundColor:'white',border:'1px solid black'}} onClick={() => handleRemoveField(field.id)}>
            -</button>
        </div>
      ))}
    <div style={{height:'75px',borderBottom: '1px solid rgba(0, 0, 0, 0.50)',width:'1000px'}}>
      <button style={{width:'150px',height:'70px',fontSize:'20px',backgroundColor:'white',marginLeft:'0px',
      marginTop:'40px'}} onClick={handleAddField}>챌린지 추가</button>
      </div>
    </div>
  );
};

export default DynamicInputForm;