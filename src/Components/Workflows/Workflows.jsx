import React, {useEffect, useState} from 'react'
import "../Workflows/Workflows.css"
import All from '../All/All';
import Active from '../Active/Active';
import Inactive from '../Inactive/Inactive';
import Draft from '../Draft/Draft';

function Workflows() {

  const [selectedOption, setSelectedOption] = useState(`all`);

  function handleDefaultClick(prop) {
    setSelectedOption(prop);
  }
  useEffect(() => {
    console.log(selectedOption); // FOR CHECKING......
  }, [selectedOption]);
  return (
    <section>
      <div className='workflows-container'>
        <div className='workflow-top'>
          <h1>Workflows</h1>
          <button>Create Workflows</button>
        </div>

        <div className='workflow-button'>
          <div className='list'>
            <a onClick={() => handleDefaultClick(`all`)} href='#'>All</a>
            <a onClick={() => handleDefaultClick(`active`)} href='#'>Active</a>
            <a onClick={() => handleDefaultClick(`inactive`)} href='#'>Inactive</a>
            <a onClick={() => handleDefaultClick(`draft`)} href='#'>Drafts</a>
          </div>
          <button>Sort by - Name</button>
        </div>
      </div>

      {selectedOption === `all` && <All />}
      {selectedOption === `active` && <Active />}
      {selectedOption === `inactive` && <Inactive />}
      {selectedOption === `draft` && <Draft />}
    </section>
  )
}

export default Workflows;