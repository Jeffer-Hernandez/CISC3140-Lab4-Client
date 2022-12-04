import Button from '@mui/material/Button';

function Home() {
  return (
    <div>


    <div className='Home'>
        <Button href="/all">See All</Button>
        <Button href="/create">Create</Button>
        <Button href="/update">Update</Button>
        <Button href="/delete">Delete</Button>
        <Button href="/find">Find</Button>
    </div>
    <div>
    <img alt="Brooklyn College" src="./BC.jpeg"></img>
    </div>
    </div>
  );
}

export default Home;