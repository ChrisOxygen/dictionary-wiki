import DefinitionList from "./DefinitionList";
import Synonyms from "./Synonyms";

function Meaning({ meaning }) {
  const { partOfSpeech, definitions, synonyms } = meaning;
  //   console.log(meaning);
  return (
    <div className="meaning">
      <div className="pos">
        <h4 className="pos__title">{partOfSpeech}</h4>
        <span></span>
      </div>
      <div className="all-meanings">
        <span className="all-meanings__title heading-s">Meaning</span>
        <DefinitionList definitions={definitions} />
      </div>
      <Synonyms synonyms={synonyms} />
    </div>
  );
}

export default Meaning;
