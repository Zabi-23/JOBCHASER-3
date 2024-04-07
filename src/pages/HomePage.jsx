import localjobs from "../components/Data"

function HomePage(){


    return(
        <div>
        <h1>Home Page</h1>
        {/* Använda map-funktionen för att rendera varje jobb */}
        {localjobs.map(job => (
          <div key={job.id}>
            <h2>{job.company}</h2>
            <p>{job.position}</p>
            {/* Lägg till mer data om varje jobb här */}
          </div>
        ))}
      </div>
    );
  }

export default HomePage



