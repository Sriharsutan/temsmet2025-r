import React from 'react';

const ImportantDatesTable = ({ dataItem }) => {
  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '1100px', boxSizing: 'border-box' }}>
      {/* <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Important Dates</h2> */}
      <h1 className='font-bold sm:text-4xl text-2xl text-gray-800'>Important Dates</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#e0e0e0', color: '#333', textAlign: 'left' }}>
            <th style={{ padding: '12px', fontWeight: 'bold' }}>EVENTS</th>
            <th style={{ padding: '12px', fontWeight: 'bold' }}>DATE</th>
          </tr>
        </thead>
        <tbody>
          {dataItem.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : 'white' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', fontWeight: index === 0 ? 'bold' : 'normal' }}>
                {row.event}
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', color: '#333' }}>
                {row.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDatesTable;
