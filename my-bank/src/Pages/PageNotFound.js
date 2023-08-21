import {Link} from 'react-router-dom'

export default function PageNotFound() {
    return(
    <div className="flex-column justify-center text-center pt-10">
        <figure className="max-w-md m-auto">
            <img className="m-auto" src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="Error 404"/>
        </figure>
        <div className="m-10">
            <h1 className="text-xl">
                Oops, you have wandered into unchartered territory. Click below to go back home.
            </h1>
        </div>
        <Link to="/">
            <button className="btn btn-primary">Home</button>
        </Link>

    </div>);
}