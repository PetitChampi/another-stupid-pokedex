import "./pokemonSpecCard.styles.scss";

function PokemonSpecCard({ pokemonName, types, weight, height }) {
  return (
    <div className="spec_card">
      <figure className="spec_card_img_container">
        <img src="" alt={pokemonName} className="card_img" />
      </figure>
      <figcaption className="spec_card_specs">
        <div className="spec_card_specs_item">
          <span className="spec_card_specs_item_label">types: </span>
          <span className="spec_card_specs_item_data">{types.join(", ")}</span>
        </div>
        <div className="spec_card_specs_item">
          <span className="spec_card_specs_item_label">weight: </span>
          <span className="spec_card_specs_item_data">{weight}</span>
        </div>
        <div className="spec_card_specs_item">
          <span className="spec_card_specs_item_label">height: </span>
          <span className="spec_card_specs_item_data">{height}</span>
        </div>
      </figcaption>
    </div>
  );
}

export default PokemonSpecCard;