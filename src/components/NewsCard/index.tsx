import { IArticle } from "../../types";

const NewsCard = (article: IArticle) => {
  return (
    <div>
      <p>Titulo de la Tarjeta</p>
      <p>Por: autor</p>
      <img src="https://media.wired.com/photos/66e35f14e7fd2f784bb46ecc/191:100/w_1280,c_limit/Security_Apple_Password_Manager_GettyImages-1618511059.jpg" />
      <p>Fecha: 29/08/07 </p>
    </div>
  );
};

export default NewsCard;
