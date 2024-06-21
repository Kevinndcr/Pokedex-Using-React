import React, { useEffect, useState } from "react";
import axios from 'axios';
import Modal from 'react-modal';

const CuartaGen = () => {
    const [data, setData] = useState<any[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const Obtener = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?offset=386&limit=107')
            .then((response) => {
                const jsonData = response.data.results;
                setData(jsonData);
            })
            .catch((error) => {
                console.error('Error obteniendo los datos:', error);
            });
    };

    const fetchPokemonDetails = (url: string) => {
        axios
            .get(url)
            .then((response) => {
                setSelectedPokemon(response.data);
                setModalIsOpen(true);
            })
            .catch((error) => {
                console.error('Error obteniendo detalles del pokemon:', error);
            });
    };

    useEffect(() => {
        Obtener();
    }, []);

    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
            <h5>Lista de Pokémon</h5>
            <p className="textito">Pokémons de la cuarta generación</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pokemon, index) => (
                        <tr key={index}>
                            <td>{index + 387}</td>
                            <td>{pokemon.name}</td>
                            <td>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 387}.png`}
                                    width="130"
                                    height="130"
                                    alt={`Imagen de ${pokemon.name}`}
                                    onClick={() => fetchPokemonDetails(pokemon.url)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Detalles del Pokémon xddddd" ariaHideApp={false} > 

                {selectedPokemon && (
                    <div className="detalles_modal">
                        <h2 className="modal_poke_title">{selectedPokemon.name}</h2>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
                            alt={`Imagen de ${selectedPokemon.name}`}
                            width="230"
                            height="230"
                        />
                        <p className="p_modal">ID: {selectedPokemon.id}</p>
                        <p className="p_modal">Altura: {selectedPokemon.height / 10} m</p>
                        <p className="p_modal">Peso: {selectedPokemon.weight / 10} kg</p>
                        <p className="p_modal">Tipos: {selectedPokemon.types.map((type: any) => type.type.name).join(', ')}</p>
                        <p className="p_modal">Movimientos: <br /><br /> {selectedPokemon.moves.map((move: any) => move.move.name).join(', ')}</p>
                        <button className="botoncillo_modal" onClick={() => setModalIsOpen(false)}>Cerrar</button>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default CuartaGen