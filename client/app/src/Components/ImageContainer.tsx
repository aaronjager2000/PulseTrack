import Image from 'next/image';

function ImageContainer(props: { image: any }) {
  const empty = props.image === '';
  const notImage = !empty;

  if (empty == true) {
    return (
      <div>
        <Image
          width="120"
          height="200"
          className="flex justify-center relative top-[85vh] right-[370px]"
          alt="PIC"
          src={notImage ? props.image : ''}
        />
      </div>
    );
  } else if (!empty) {
  }
}

export default ImageContainer;
