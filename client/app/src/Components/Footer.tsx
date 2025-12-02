import { FootTitle } from '../Types/TypeFooter';

function Footer(title: FootTitle) {
  return (
    <footer className="p-3 text-black text-center font-bold relative top-[100vh]">
      <div>
        <p>&copy; {title.title}</p>
      </div>
    </footer>
  );
}

export default Footer;
