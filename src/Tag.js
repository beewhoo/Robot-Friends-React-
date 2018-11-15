import React from 'react';
import ReactDOM from 'react-dom';


const Tag = (props) => {

    return <form className='test' action="" onSubmit={props.onSubmit}>
          <input className="addTag" type="text" name="tagValue" value={props.value} onChange={props.onChange} placeholder="Add a tag" />
      </form>
}

export default Tag;
