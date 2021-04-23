import React from 'react';

function NetflixMovies() {

    const Mapper = () =>
    providers.flatrate.map((flatRate) => (
      <div className="providersContainer">
        <img
          src={`https://www.themoviedb.org/t/p/original${flatRate.logo_path}`}
          className="providersImage"
        />
        {/* <p>{flatRate.provider_name}</p> */}
      </div>
    ));

    
    return(
        <>
        </>
    )
}

export default NetflixMovies