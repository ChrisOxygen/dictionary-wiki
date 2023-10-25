import { GeneratePassword } from "js-generate-password";

function DefinitionList({ definitions }) {
  return (
    <ul className="meanings-list">
      {definitions.map((definition) => (
        <li key={GeneratePassword()} className="meanings-list__item  body-m">
          <span className="list-dot"></span>
          {definition.definition}
        </li>
      ))}
      {/* <li className="meanings-list__item  body-m">
        <span className="list-dot"></span>
        (etc.) A set of keys used to operate a typewriter, computer etc.
      </li>
      <li className="meanings-list__item  body-m">
        <span className="list-dot"></span>A component of many instruments including
        the piano, organ, and harpsichord consisting of usually black and white
        keys that cause different tones to be produced when struck.
      </li>
      <li className="meanings-list__item  body-m">
        <span className="list-dot"></span>A device with keys of a musical keyboard,
        used to control electronic sound-producing devices which may be built
        into or separate from the keyboard device.
      </li> */}
    </ul>
  );
}

export default DefinitionList;
