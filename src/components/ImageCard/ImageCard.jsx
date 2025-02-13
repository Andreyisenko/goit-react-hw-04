
import css from './ImageCard.module.css'
const ImageCard = ({article}) => {
  console.log(article.user.name);
  console.log(article.urls.regular);
  
  return (
    <div className={css.wraper}>
  <img  className={css.imgE} src={article.urls.small} alt={article.alt_description} />
  <p className={css.text}>Autor: {article.user.name}</p>
  <p className={css.text}>Likes: {article.likes}</p>
console.log();

</div>

  )
}

export default ImageCard