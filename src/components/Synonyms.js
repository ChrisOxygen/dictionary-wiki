import { GeneratePassword } from "js-generate-password";

function Synonyms({ synonyms }) {
  return (
    <>
      {synonyms.length > 0 && (
        <div className="synonyms-sect">
          <span className="synonyms-sect__title heading-s">Synonyms</span>
          <ul className="synonyms-list">
            {synonyms.map((synonym) => (
              <li key={GeneratePassword()} className="synonyms-list__item">
                {synonym}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Synonyms;
