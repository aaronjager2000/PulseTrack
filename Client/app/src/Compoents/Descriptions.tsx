function Description(props: any) {
  return (
    <div className="text-center grid  p-2 justify-center ">
      <p
        id="description"
        className="w-142 text-sm py-7 px-2 relative top-[200px] text-blue-900 font-bold mt-2"
      >
        | {props.description} |
      </p>
    </div>
  );
}

export default Description;
