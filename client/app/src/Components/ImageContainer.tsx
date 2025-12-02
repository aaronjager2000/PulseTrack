import { TypedString } from '../Types/TypeFooter';
import Image from 'next/image';

function ImageContainer(props: { image: TypedString }) {
  const empty = props.image === '';
  const notImage = !empty;

  if (notImage) {
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
  }
}

export default ImageContainer;
