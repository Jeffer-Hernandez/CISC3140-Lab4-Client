

import Button from '@mui/material/Button';

function Find() {
  return (
    <div className='Find'>
        <Button href="/all">See All</Button>
        <Button href="/create">Create</Button>
        <Button href="/update">Update</Button>
        <Button href="/delete">Delete</Button>
        <Button href="/find">Find</Button>
    </div>
  );
}

export default Find;