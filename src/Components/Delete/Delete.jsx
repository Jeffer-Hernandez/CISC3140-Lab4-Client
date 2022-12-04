import Button from '@mui/material/Button';
import DeleteForm from '../Forms/DeleteForm';

function Delete() {
  return (
    <div>
        <div className='Home'>
            <Button href="/all">See All</Button>
            <Button href="/create">Create</Button>
            <Button href="/update">Update</Button>
            <Button href="/delete">Delete</Button>
            <Button href="/find">Find</Button>
        </div>
    <div className='Delete'>
        <DeleteForm/>
    </div>
    </div>
  );
}

export default Delete;