import { login } from "../components/AuthController";

export default function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus
        soluta amet maiores, ratione autem voluptates illo consequuntur officia
        voluptatem in, dolor minima pariatur at, dicta dolorum aspernatur hic
        fuga?
      </p>
      <button onClick={() => login()}>Login</button>
    </div>
  );
}
