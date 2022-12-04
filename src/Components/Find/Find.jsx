import FindForm from '../Forms/FindForm';
import Button from '@mui/material/Button';

export default function Find() {
    return(
        <div>
            <div className='Home'>
                <Button href="/all">See All</Button>
                <Button href="/create">Create</Button>
                <Button href="/update">Update</Button>
                <Button href="/delete">Delete</Button>
                <Button href="/find">Find</Button>
            </div>
            <FindForm/>
        </div>
    )
}


