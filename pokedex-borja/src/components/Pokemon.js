import React from 'react'

const Pokemon = (props) => {
    const { pokemon } = props;
  return (
    <section className='pokemon-card'>
        <div>
            <div className='pokemon-img'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <div>
                <div>
                    <h3>{pokemon.name}</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <div>
                    {pokemon.types.map((type, index) => {
                        return <div key={index}>{type.name}</div>
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pokemon