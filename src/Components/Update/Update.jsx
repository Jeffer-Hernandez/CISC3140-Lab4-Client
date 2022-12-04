import UpdateForm from "../Forms/UpdateForm";
import Button from '@mui/material/Button';

function Update() {
  return (
    <div className='Update'>
        <div>
            <div className='Home'>
                <Button href="/all">See All</Button>
                <Button href="/create">Create</Button>
                <Button href="/update">Update</Button>
                <Button href="/delete">Delete</Button>
                <Button href="/find">Find</Button>
            </div>
            <UpdateForm/>
        </div>
    </div>
  );
}

export default Update;