import CakeImage from '/cake.svg'
const HomePage = () => {
    return(
        <>
        <div className='main'>
            <h1>Welcome to <span className='bold'> Happy Cake</span></h1>
            <h5>A <span className='bold'> Happy Cakes</span>  Place</h5>
            <img src={CakeImage} style={{ width: '30rem' }}/>
        </div>
            
        </>
    )
    };
    export default HomePage;