function Title() {

  let name = "Ashu";

  return (
  <>
    <h1>This is Title !</h1>

    <h2> JSX with curly Brases </h2>
     2 * 2 = {2*2}  {/* code inside { ... } this means it is treated as JS logic and perform operations !!!   */}
    <p>Hi, {name} </p>
    <p>Hi, {name.toUpperCase()} </p>
  </>
  );
}

export default Title; 