import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Tablet {
  id: number;
  title: string;
  os: string;
  processor: string;
  cores: number;
  processor_frequency: number;
  screen_size: number;
  resolution: string;
  ram: number;
  storage: number;
}

const TabletList: React.FC = () => {
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost/api/tablets')
      .then((response) => setTablets(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setTablets([...tablets].sort((a, b) => sortOrder === 'asc' ? a.storage - b.storage : b.storage - a.storage));
  };

  const filteredTablets = tablets.filter((tablet) =>
    tablet.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSort}>
        Sort by Price {sortOrder === 'asc' ? '↑' : '↓'}
      </button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>OS</th>
            <th>Processor</th>
            <th>Cores</th>
            <th>Frequency (GHz)</th>
            <th>Screen Size</th>
            <th>Resolution</th>
            <th>RAM (GB)</th>
            <th>Storage (GB)</th>
          </tr>
        </thead>
        <tbody>
          {filteredTablets.map((tablet) => (
            <tr key={tablet.id}>
              <td>{tablet.title}</td>
              <td>{tablet.os}</td>
              <td>{tablet.processor}</td>
              <td>{tablet.cores}</td>
              <td>{tablet.processor_frequency}</td>
              <td>{tablet.screen_size}</td>
              <td>{tablet.resolution}</td>
              <td>{tablet.ram}</td>
              <td>{tablet.storage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabletList;