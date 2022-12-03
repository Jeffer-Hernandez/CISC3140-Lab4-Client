import Button from '@mui/material/Button';

function Delete() {
  return (
    <div className='Delete'>
        <Button href="/all">See All</Button>
        <Button href="/create">Create</Button>
        <Button href="/update">Update</Button>
        <Button href="/delete">Delete</Button>
        <Button href="/find">Find</Button>
    </div>
  );
}

export default Delete;