import { TypedString } from '../Types/TypeFooter';

function Description(props: { description: TypedString }) {
  return (
    <div className="flex text-center px-9 justify-center">
      <p
        id="description"
        className="max-md:text-xs py-7 relative top-[200px]  text-blue-900 font-bold mt-2"
      >
        {props.description}
      </p>
    </div>
  );
}

export default Description;
